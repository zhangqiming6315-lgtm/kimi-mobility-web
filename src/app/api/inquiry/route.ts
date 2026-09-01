import { getCloudflareContext } from "@opennextjs/cloudflare";
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

const fleetLimits = {
  name: 100,
  company: 150,
  email: 254,
  market: 120,
  projectType: 30,
  quantity: 30,
  dailyDistance: 30,
  payload: 30,
  message: 5000,
} as const;
const fleetProjectTypes = new Set(["Delivery Fleet", "Distributor", "Commercial Fleet", "Other"]);
const fleetQuantities = new Set(["Sample / Evaluation", "10–50", "51–100", "100+"]);
const fleetDailyDistances = new Set(["< 50 km", "50–100 km", "100+ km", "Not sure"]);
const fleetPayloads = new Set(["< 50 kg", "50–100 kg", "100+ kg", "Not sure"]);

type Inquiry = Record<keyof typeof limits, string>;

type InquiryEnvironment = {
  RESEND_API_KEY?: string;
  INQUIRY_FROM_EMAIL?: string;
  INQUIRY_TO_EMAIL?: string;
};

async function getInquiryEnvironment(): Promise<InquiryEnvironment> {
  const localEnvironment: InquiryEnvironment = {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    INQUIRY_FROM_EMAIL: process.env.INQUIRY_FROM_EMAIL,
    INQUIRY_TO_EMAIL: process.env.INQUIRY_TO_EMAIL,
  };

  try {
    const cloudflareEnvironment = (
      await getCloudflareContext({ async: true })
    ).env as InquiryEnvironment;

    return {
      RESEND_API_KEY:
        cloudflareEnvironment.RESEND_API_KEY ?? localEnvironment.RESEND_API_KEY,
      INQUIRY_FROM_EMAIL:
        cloudflareEnvironment.INQUIRY_FROM_EMAIL ?? localEnvironment.INQUIRY_FROM_EMAIL,
      INQUIRY_TO_EMAIL:
        cloudflareEnvironment.INQUIRY_TO_EMAIL ?? localEnvironment.INQUIRY_TO_EMAIL,
    };
  } catch {
    // A regular Node.js runtime has no Cloudflare request context.
    return localEnvironment;
  }
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        character
      ] ?? character,
  );
}

function singleLine(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function formatFromAddress(value: string) {
  const bracketedAddress = value.match(/<([^<>]+)>/)?.[1]?.trim();
  const address = bracketedAddress ?? value.trim();
  return `KIMI Mobility Website <${address}>`;
}

async function handleFleetInquiry(input: Record<string, unknown>) {
  type FleetInquiry = Record<keyof typeof fleetLimits, string>;
  const inquiry = Object.fromEntries(
    Object.keys(fleetLimits).map((key) => [
      key,
      typeof input[key] === "string" ? input[key].trim() : "",
    ]),
  ) as FleetInquiry;
  const invalidFields = (Object.keys(fleetLimits) as (keyof FleetInquiry)[]).filter(
    (key) => !inquiry[key] || inquiry[key].length > fleetLimits[key],
  );
  if (!emailPattern.test(inquiry.email)) invalidFields.push("email");
  if (!fleetProjectTypes.has(inquiry.projectType)) invalidFields.push("projectType");
  if (!fleetQuantities.has(inquiry.quantity)) invalidFields.push("quantity");
  if (!fleetDailyDistances.has(inquiry.dailyDistance)) invalidFields.push("dailyDistance");
  if (!fleetPayloads.has(inquiry.payload)) invalidFields.push("payload");

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

  const environment = await getInquiryEnvironment();
  const apiKey = environment.RESEND_API_KEY;
  const configuredFrom = environment.INQUIRY_FROM_EMAIL;
  const to = environment.INQUIRY_TO_EMAIL;
  console.info("[inquiry] Email configuration status.", {
    RESEND_API_KEY: Boolean(apiKey),
    INQUIRY_FROM_EMAIL: Boolean(configuredFrom),
    INQUIRY_TO_EMAIL: Boolean(to),
  });
  if (!apiKey || !configuredFrom || !to) {
    console.error("[inquiry] Email configuration is incomplete.");
    return NextResponse.json(
      { ok: false, code: "EMAIL_NOT_CONFIGURED", message: "Email delivery is not configured in this environment." },
      { status: 503 },
    );
  }

  const rows: [string, string][] = [
    ["Name", inquiry.name],
    ["Company", inquiry.company],
    ["Email", inquiry.email],
    ["Country / Market", inquiry.market],
    ["Project Type", inquiry.projectType],
    ["Expected Quantity", inquiry.quantity],
    ["Daily Distance", inquiry.dailyDistance],
    ["Typical Payload", inquiry.payload],
  ];
  const subject = ["New KIMI Fleet RFQ", inquiry.market, inquiry.company]
    .map(singleLine)
    .filter(Boolean)
    .join(" — ");
  const text = [
    "NEW FLEET RFQ",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Project Requirements:",
    inquiry.message,
    "",
    "KIMI Mobility",
    "Shanghai Kaimai New Energy Technology Co., Ltd.",
    "kimimobility.com",
  ].join("\n");
  const html = `<!doctype html><html lang="en"><body style="margin:0;background:#f2f2f0;color:#111111;font-family:Arial,Helvetica,sans-serif;"><div style="display:none;max-height:0;overflow:hidden;opacity:0;">New Fleet RFQ from ${escapeHtml(inquiry.name)}.</div><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f2f2f0;"><tr><td align="center" style="padding:32px 16px;"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:680px;background:#ffffff;border-collapse:collapse;"><tr><td style="background:#111111;padding:28px 32px;"><img src="https://kimimobility.com/email/kimi-email-logo.png" alt="KIMI Mobility" width="150" style="display:block;width:150px;height:auto;border:0;"><p style="margin:24px 0 0;color:#00b894;font-size:12px;font-weight:700;letter-spacing:2.4px;line-height:18px;">NEW FLEET RFQ</p></td></tr><tr><td style="padding:32px;"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;">${rows.map(([label, value]) => `<tr><td valign="top" style="width:160px;border-bottom:1px solid #e6e6e6;padding:14px 16px 14px 0;color:#8a8a8a;font-size:12px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;">${escapeHtml(label)}</td><td valign="top" style="border-bottom:1px solid #e6e6e6;padding:14px 0;color:#111111;font-size:15px;line-height:23px;">${escapeHtml(value)}</td></tr>`).join("")}</table><div style="margin-top:28px;border-left:3px solid #00b894;padding:4px 0 4px 20px;"><p style="margin:0 0 10px;color:#8a8a8a;font-size:12px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;">Project Requirements</p><p style="margin:0;color:#111111;font-size:15px;line-height:24px;">${escapeHtml(inquiry.message).replace(/\n/g, "<br>")}</p></div></td></tr><tr><td style="background:#111111;padding:26px 32px;color:#ffffff;"><p style="margin:0;font-size:15px;font-weight:700;line-height:22px;">KIMI Mobility</p><p style="margin:6px 0 0;color:#a7a7a7;font-size:12px;line-height:19px;">Shanghai Kaimai New Energy Technology Co., Ltd.</p><p style="margin:12px 0 0;font-size:12px;line-height:19px;"><a href="https://kimimobility.com" style="color:#00b894;text-decoration:none;">kimimobility.com</a></p></td></tr></table></td></tr></table></body></html>`;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: formatFromAddress(configuredFrom), to: [to], reply_to: inquiry.email, subject, text, html }),
    });
    if (!response.ok) {
      console.error("[inquiry] Resend rejected the email request.", { status: response.status, requestId: response.headers.get("x-request-id") ?? undefined });
      return NextResponse.json({ ok: false, code: "EMAIL_DELIVERY_FAILED", message: "The inquiry could not be delivered. Please try again later." }, { status: 502 });
    }
    return NextResponse.json({ ok: true, code: "INQUIRY_SENT", message: "Inquiry sent successfully." });
  } catch (error) {
    console.error("[inquiry] Email delivery request failed.", { error: error instanceof Error ? { name: error.name, message: error.message } : "Unknown error" });
    return NextResponse.json({ ok: false, code: "EMAIL_DELIVERY_FAILED", message: "The inquiry could not be delivered. Please try again later." }, { status: 502 });
  }
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
  if (input.formType === "fleet_rfq") return handleFleetInquiry(input);

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

  const environment = await getInquiryEnvironment();
  const apiKey = environment.RESEND_API_KEY;
  const configuredFrom = environment.INQUIRY_FROM_EMAIL;
  const to = environment.INQUIRY_TO_EMAIL;
  console.info("[inquiry] Email configuration status.", {
    RESEND_API_KEY: Boolean(apiKey),
    INQUIRY_FROM_EMAIL: Boolean(configuredFrom),
    INQUIRY_TO_EMAIL: Boolean(to),
  });
  if (!apiKey || !configuredFrom || !to) {
    console.error("[inquiry] Email configuration is incomplete.");
    return NextResponse.json(
      {
        ok: false,
        code: "EMAIL_NOT_CONFIGURED",
        message: "Email delivery is not configured in this environment.",
      },
      { status: 503 },
    );
  }

  const from = formatFromAddress(configuredFrom);
  const rows = [
    ["Name", inquiry.name],
    ["Company", inquiry.company],
    ["Email", inquiry.email],
    ["Country", inquiry.market],
    ["Inquiry Type", inquiry.type],
  ].filter((row): row is [string, string] => Boolean(row[1]));
  const subjectDetails = [inquiry.market, inquiry.name]
    .map(singleLine)
    .filter(Boolean);
  const subject = ["New KIMI Inquiry", ...subjectDetails].join(" — ");
  const text = [
    "NEW WEBSITE INQUIRY",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    inquiry.message,
    "",
    "KIMI Mobility",
    "Shanghai Kaimai New Energy Technology Co., Ltd.",
    "Electric Mobility · Delivery · Utility · Urban",
    "kimimobility.com",
  ].join("\n");
  const html = `<!doctype html>
<html lang="en">
  <body style="margin:0;background:#f2f2f0;color:#111111;font-family:Arial,Helvetica,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">New inquiry from ${escapeHtml(inquiry.name)}.</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f2f2f0;">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:680px;background:#ffffff;border-collapse:collapse;">
            <tr>
              <td style="background:#111111;padding:28px 32px;">
                <img src="https://kimimobility.com/email/kimi-email-logo.png" alt="KIMI Mobility" width="150" style="display:block;width:150px;height:auto;border:0;">
                <p style="margin:24px 0 0;color:#00b894;font-size:12px;font-weight:700;letter-spacing:2.4px;line-height:18px;">NEW WEBSITE INQUIRY</p>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;">
                  ${rows
                    .map(
                      ([label, value]) => `<tr>
                    <td valign="top" style="width:160px;border-bottom:1px solid #e6e6e6;padding:14px 16px 14px 0;color:#8a8a8a;font-size:12px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;">${escapeHtml(label)}</td>
                    <td valign="top" style="border-bottom:1px solid #e6e6e6;padding:14px 0;color:#111111;font-size:15px;line-height:23px;">${escapeHtml(value)}</td>
                  </tr>`,
                    )
                    .join("")}
                </table>
                <div style="margin-top:28px;border-left:3px solid #00b894;padding:4px 0 4px 20px;">
                  <p style="margin:0 0 10px;color:#8a8a8a;font-size:12px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;">Message</p>
                  <p style="margin:0;color:#111111;font-size:15px;line-height:24px;">${escapeHtml(inquiry.message).replace(/\n/g, "<br>")}</p>
                </div>
              </td>
            </tr>
            <tr>
              <td style="background:#111111;padding:26px 32px;color:#ffffff;">
                <p style="margin:0;font-size:15px;font-weight:700;line-height:22px;">KIMI Mobility</p>
                <p style="margin:6px 0 0;color:#a7a7a7;font-size:12px;line-height:19px;">Shanghai Kaimai New Energy Technology Co., Ltd.</p>
                <p style="margin:6px 0 0;color:#a7a7a7;font-size:12px;line-height:19px;">Electric Mobility · Delivery · Utility · Urban</p>
                <p style="margin:12px 0 0;font-size:12px;line-height:19px;"><a href="https://kimimobility.com" style="color:#00b894;text-decoration:none;">kimimobility.com</a></p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

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
        subject,
        text,
        html,
      }),
    });

    if (!response.ok) {
      console.error("[inquiry] Resend rejected the email request.", {
        status: response.status,
        requestId: response.headers.get("x-request-id") ?? undefined,
      });
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
  } catch (error) {
    console.error("[inquiry] Email delivery request failed.", {
      error:
        error instanceof Error
          ? { name: error.name, message: error.message }
          : "Unknown error",
    });
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
