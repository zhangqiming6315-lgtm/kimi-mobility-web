"use client";

import { FormEvent, ReactNode, useState } from "react";
import { company } from "@/lib/site";

type FieldName = "name" | "company" | "email" | "market" | "businessType" | "productInterest" | "quantity" | "brandingRequirement" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;

const fieldClassName = "mt-2 w-full border border-white/20 bg-kimi-black px-4 py-3 text-white outline-none transition-colors placeholder:text-white/25 hover:border-white/40 focus:border-kimi-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kimi-green";
const businessTypes = ["Importer", "Distributor", "Dealer Group", "Fleet & Distribution", "Other"] as const;
const productInterests = ["Delivery X1", "Urban X1", "Utility X1", "Multiple Platforms", "Not Sure Yet"] as const;
const quantities = ["Sample / Evaluation", "10–50", "51–100", "100+", "Not Sure Yet"] as const;
const brandingRequirements = ["KIMI Brand", "Private Label", "To Be Discussed"] as const;

export default function DistributorRfqForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = {
      formType: "distributor_rfq",
      name: String(data.get("name") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      market: String(data.get("market") ?? "").trim(),
      businessType: String(data.get("businessType") ?? "").trim(),
      productInterest: String(data.get("productInterest") ?? "").trim(),
      quantity: String(data.get("quantity") ?? "").trim(),
      brandingRequirement: String(data.get("brandingRequirement") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      website: String(data.get("website") ?? "").trim(),
    };
    const nextErrors: FieldErrors = {};
    if (!values.name) nextErrors.name = "Please enter your name.";
    if (!values.company) nextErrors.company = "Please enter your company.";
    if (!values.email) nextErrors.email = "Please enter your business email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = "Please enter a valid email address.";
    if (!values.market) nextErrors.market = "Please enter your country or market.";
    if (!businessTypes.includes(values.businessType as (typeof businessTypes)[number])) nextErrors.businessType = "Please select a business type.";
    if (!productInterests.includes(values.productInterest as (typeof productInterests)[number])) nextErrors.productInterest = "Please select a product interest.";
    if (!quantities.includes(values.quantity as (typeof quantities)[number])) nextErrors.quantity = "Please select an expected quantity.";
    if (values.brandingRequirement && !brandingRequirements.includes(values.brandingRequirement as (typeof brandingRequirements)[number])) nextErrors.brandingRequirement = "Please select a branding requirement.";
    if (!values.message) nextErrors.message = "Please describe your project requirements.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("Please review the highlighted fields.");
      return;
    }

    setIsSending(true);
    setStatus("Sending…");
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result: unknown = await response.json().catch(() => null);
      if (!response.ok || !result || typeof result !== "object" || !("ok" in result) || result.ok !== true || !("code" in result) || result.code !== "INQUIRY_SENT") throw new Error("Distributor RFQ request failed");
      const gtag = (window as Window & { gtag?: (command: "event", eventName: string, parameters: Record<string, string>) => void }).gtag;
      gtag?.("event", "generate_lead", {
        form_type: "distributor_rfq",
        project_type: "distributor_partnership",
      });
      form.reset();
      setErrors({});
      setStatus("Distributor RFQ sent successfully.");
    } catch {
      setStatus(`Sending failed. Please email ${company.email}.`);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form className="relative border-t border-white/15 pt-10" noValidate onSubmit={handleSubmit}>
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden"><label htmlFor="distributor-website">Website</label><input autoComplete="off" id="distributor-website" name="website" tabIndex={-1} /></div>
      <div className="grid gap-6 md:grid-cols-2">
        <Field error={errors.name} label="Name" name="name" required><input aria-describedby={errors.name ? "distributor-name-error" : undefined} aria-invalid={Boolean(errors.name)} autoComplete="name" className={fieldClassName} id="distributor-name" maxLength={100} name="name" required /></Field>
        <Field error={errors.company} label="Company" name="company" required><input aria-describedby={errors.company ? "distributor-company-error" : undefined} aria-invalid={Boolean(errors.company)} autoComplete="organization" className={fieldClassName} id="distributor-company" maxLength={150} name="company" required /></Field>
        <Field error={errors.email} label="Business Email" name="email" required><input aria-describedby={errors.email ? "distributor-email-error" : undefined} aria-invalid={Boolean(errors.email)} autoComplete="email" className={fieldClassName} id="distributor-email" maxLength={254} name="email" required type="email" /></Field>
        <Field error={errors.market} label="Country / Market" name="market" required><input aria-describedby={errors.market ? "distributor-market-error" : undefined} aria-invalid={Boolean(errors.market)} autoComplete="country-name" className={fieldClassName} id="distributor-market" maxLength={120} name="market" required /></Field>
        <Field error={errors.businessType} label="Business Type" name="businessType" required><Select error={errors.businessType} id="distributor-businessType" name="businessType" options={businessTypes} placeholder="Select business type" required /></Field>
        <Field error={errors.productInterest} label="Product Interest" name="productInterest" required><Select error={errors.productInterest} id="distributor-productInterest" name="productInterest" options={productInterests} placeholder="Select product interest" required /></Field>
        <Field error={errors.quantity} label="Expected Quantity" name="quantity" required><Select error={errors.quantity} id="distributor-quantity" name="quantity" options={quantities} placeholder="Select quantity" required /></Field>
        <Field error={errors.brandingRequirement} label="Branding Requirement" name="brandingRequirement"><Select error={errors.brandingRequirement} id="distributor-brandingRequirement" name="brandingRequirement" options={brandingRequirements} placeholder="Select branding requirement" /></Field>
        <Field error={errors.message} label="Project Requirements" name="message" required wide><textarea aria-describedby={errors.message ? "distributor-message-error" : undefined} aria-invalid={Boolean(errors.message)} className={`${fieldClassName} min-h-40 resize-y`} id="distributor-message" maxLength={5000} name="message" placeholder="Tell us about your market, business, product needs, and planned project." required /></Field>
      </div>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button className="inline-flex min-h-14 items-center justify-center rounded-full bg-kimi-green px-8 py-3.5 text-[0.9375rem] font-semibold text-kimi-black transition-[background-color,transform] hover:bg-white active:scale-[0.98] disabled:cursor-wait disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kimi-green" disabled={isSending} type="submit">{isSending ? "Sending…" : "Discuss a Distribution Project"}</button>
        <p aria-live="polite" className="max-w-lg text-sm leading-6 text-white/50">{status || `Your RFQ will be sent securely to ${company.email}.`}</p>
      </div>
    </form>
  );
}

function Field({ children, error, label, name, required = false, wide = false }: { children: ReactNode; error?: string; label: string; name: FieldName; required?: boolean; wide?: boolean }) {
  const id = `distributor-${name}`;
  return <div className={wide ? "md:col-span-2" : ""}><label className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60" htmlFor={id}>{label}{required ? <> <span className="text-kimi-green">*</span></> : null}</label>{error ? <div>{children}<p className="mt-2 text-sm text-[#ff9d91]" id={`${id}-error`}>{error}</p></div> : children}</div>;
}

function Select({ error, id, name, options, placeholder, required = false }: { error?: string; id: string; name: FieldName; options: readonly string[]; placeholder: string; required?: boolean }) {
  return <select aria-describedby={error ? `${id}-error` : undefined} aria-invalid={Boolean(error)} className={fieldClassName} defaultValue="" id={id} name={name} required={required}><option value="">{placeholder}</option>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select>;
}
