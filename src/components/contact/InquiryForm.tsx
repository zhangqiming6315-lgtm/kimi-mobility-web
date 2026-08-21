"use client";

import { FormEvent, useState } from "react";
import { company } from "@/lib/site";

type FieldName = "name" | "company" | "email" | "market" | "type" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;
const fieldClassName = "mt-2 w-full border border-white/20 bg-transparent px-4 py-3 text-white outline-none transition-colors placeholder:text-white/25 hover:border-white/40 focus:border-kimi-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kimi-green";

export default function InquiryForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = {
      name: String(data.get("name") ?? "").trim(), company: String(data.get("company") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(), market: String(data.get("market") ?? "").trim(),
      type: String(data.get("type") ?? "").trim(), message: String(data.get("message") ?? "").trim(),
      website: String(data.get("website") ?? "").trim(),
    };
    const nextErrors: FieldErrors = {};
    if (!values.name) nextErrors.name = "Please enter your name.";
    if (!values.company) nextErrors.company = "Please enter your company.";
    if (!values.email) nextErrors.email = "Please enter your business email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = "Please enter a valid email address.";
    if (!values.market) nextErrors.market = "Please enter your country or market.";
    if (!values.type) nextErrors.type = "Please select an inquiry type.";
    if (!values.message) nextErrors.message = "Please tell us about your inquiry.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) { setStatus("Please review the highlighted fields."); return; }

    setIsSending(true);
    setStatus("Sending…");
    try {
      const response = await fetch("/api/inquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      const result: unknown = await response.json().catch(() => null);
      if (!response.ok || !result || typeof result !== "object" || !("ok" in result) || result.ok !== true) {
        throw new Error("Inquiry request failed");
      }
      form.reset();
      setErrors({});
      setStatus("Inquiry sent successfully.");
    } catch {
      setStatus(`Sending failed. Please email ${company.email}.`);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form className="contact-inquiry-form relative border-t border-white/15 pt-10" noValidate onSubmit={handleSubmit}>
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden"><label htmlFor="website">Website</label><input autoComplete="off" id="website" name="website" tabIndex={-1} /></div>
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Name" name="name" error={errors.name}><input aria-describedby={errors.name ? "name-error" : undefined} aria-invalid={Boolean(errors.name)} className={fieldClassName} id="name" name="name" maxLength={100} required /></Field>
        <Field label="Company" name="company" error={errors.company}><input aria-describedby={errors.company ? "company-error" : undefined} aria-invalid={Boolean(errors.company)} className={fieldClassName} id="company" name="company" maxLength={150} required /></Field>
        <Field label="Business Email" name="email" error={errors.email}><input aria-describedby={errors.email ? "email-error" : undefined} aria-invalid={Boolean(errors.email)} autoComplete="email" className={fieldClassName} id="email" name="email" maxLength={254} required type="email" /></Field>
        <Field label="Country / Market" name="market" error={errors.market}><input aria-describedby={errors.market ? "market-error" : undefined} aria-invalid={Boolean(errors.market)} autoComplete="country-name" className={fieldClassName} id="market" name="market" maxLength={120} required /></Field>
        <Field label="Inquiry Type" name="type" error={errors.type} wide><select aria-describedby={errors.type ? "type-error" : undefined} aria-invalid={Boolean(errors.type)} className={`${fieldClassName} border-kimi-green bg-kimi-black`} defaultValue="" id="type" name="type" required><option disabled value="">Select an inquiry type</option><option>Distribution partnership</option><option>Fleet or commercial operation</option><option>Product inquiry</option><option>Other business inquiry</option></select></Field>
        <Field label="Message" name="message" error={errors.message} wide><textarea aria-describedby={errors.message ? "message-error" : undefined} aria-invalid={Boolean(errors.message)} className={`${fieldClassName} min-h-40 resize-y`} id="message" name="message" maxLength={5000} required /></Field>
      </div>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button className="inline-flex min-h-14 items-center justify-center rounded-full bg-kimi-green px-8 py-3.5 text-[0.9375rem] font-semibold text-kimi-black transition-[background-color,transform] hover:bg-white active:scale-[0.98] disabled:cursor-wait disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kimi-green" disabled={isSending} type="submit">{isSending ? "Sending…" : "Send Inquiry"}</button>
        <p aria-live="polite" className="max-w-lg text-sm leading-6 text-white/50">{status || `Your inquiry will be sent securely to ${company.email}.`}</p>
      </div>
    </form>
  );
}

function Field({ children, error, label, name, wide = false }: { children: React.ReactNode; error?: string; label: string; name: FieldName; wide?: boolean }) {
  return <div className={wide ? "md:col-span-2" : ""}><label className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60" htmlFor={name}>{label} <span className="text-kimi-green">*</span></label>{children}{error ? <p className="mt-2 text-sm text-[#ff9d91]" id={`${name}-error`}>{error}</p> : null}</div>;
}
