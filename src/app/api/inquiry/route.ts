import { NextResponse } from "next/server";

const limits = {
  name: 100,
  company: 150,
  email: 254,
  market: 120,
  type: 100,
  message: 5000,
} as const;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const inquiryTypes = new Set([
  "Distribution partnership",
  "Fleet or commercial operation",
  "Product inquiry",
  "Other business inquiry",
]);

type Inquiry = Record<keyof typeof limits, string>;

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        character
      ] ?? character,
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, code: "INVALID_JSON", message: "The request body must be valid JSON." },
      { status: 400 },
    );
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json(
      { ok: false, code: "INVALID_REQUEST", message: "The inquiry data is invalid." },
      { status: 400 },
    );
  }

  const input = body as Record<string, unknown>;
  if (typeof input.website === "string" && input.website.trim()) {
    return NextResponse.json({ ok: true, code: "INQUIRY_ACCEPTED" });
  }

  const inquiry = Object.fromEntries(
    Object.keys(limits).map((key) => [
      key,
      typeof input[key] === "string" ? input[key].trim() : "",
    ]),
  ) as Inquiry;
  const invalidFields = (Object.keys(limits) as (keyof Inquiry)[]).filter(
    (key) => !inquiry[key] || inquiry[key].length > limits[key],
  );
  if (!emailPattern.test(inquiry.email)) invalidFields.push("email");
  if (!inquiryTypes.has(inquiry.type)) invalidFields.push("type");

  const uniqueInvalidFields = [...new Set(invalidFields)];
  if (uniqueInvalidFields.length) {
    return NextResponse.json(
      {
        ok: false,
        code: "VALIDATION_ERROR",
        message: "Please check the required fields and try again.",
        fields: uniqueInvalidFields,
      },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.INQUIRY_FROM_EMAIL;
  const to = process.env.INQUIRY_TO_EMAIL;
  if (!apiKey || !from || !to) {
    return NextResponse.json(
      {
        ok: false,
        code: "EMAIL_NOT_CONFIGURED",
        message: "Email delivery is not configured in this environment.",
      },
      { status: 503 },
    );
  }

  const submittedAt = new Date().toISOString();
  const rows = [
    ["Name / Contact Person", inquiry.name],
    ["Company", inquiry.company],
    ["Business Email", inquiry.email],
    ["Country / Market", inquiry.market],
    ["Inquiry Type", inquiry.type],
    ["Submitted At", submittedAt],
  ];
  const text = [
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    inquiry.message,
  ].join("\n");
  const html = `<h2>New KIMI Mobility inquiry</h2><table>${rows
    .map(
      ([label, value]) =>
        `<tr><th align="left">${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`,
    )
    .join("")}</table><h3>Message</h3><p>${escapeHtml(inquiry.message).replace(/\n/g, "<br>")}</p>`;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: inquiry.email,
        subject: `KIMI Mobility inquiry — ${inquiry.company}`,
        text,
        html,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          ok: false,
          code: "EMAIL_DELIVERY_FAILED",
          message: "The inquiry could not be delivered. Please try again later.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      code: "INQUIRY_SENT",
      message: "Inquiry sent successfully.",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        code: "EMAIL_DELIVERY_FAILED",
        message: "The inquiry could not be delivered. Please try again later.",
      },
      { status: 502 },
    );
  }
}
