"use client";

import { FormEvent, ReactNode, useState } from "react";
import { company } from "@/lib/site";

type FieldName = "name" | "company" | "email" | "market" | "projectType" | "quantity" | "dailyDistance" | "payload" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;

const fieldClassName = "mt-2 w-full border border-white/20 bg-kimi-black px-4 py-3 text-white outline-none transition-colors placeholder:text-white/25 hover:border-white/40 focus:border-kimi-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kimi-green";
const projectTypes = ["Delivery Fleet", "Distributor", "Commercial Fleet", "Other"] as const;
const quantities = ["Sample / Evaluation", "10–50", "51–100", "100+"] as const;
const dailyDistances = ["< 50 km", "50–100 km", "100+ km", "Not sure"] as const;
const payloads = ["< 50 kg", "50–100 kg", "100+ kg", "Not sure"] as const;

export default function FleetRfqForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = {
      formType: "fleet_rfq",
      name: String(data.get("name") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      market: String(data.get("market") ?? "").trim(),
      projectType: String(data.get("projectType") ?? "").trim(),
      quantity: String(data.get("quantity") ?? "").trim(),
      dailyDistance: String(data.get("dailyDistance") ?? "").trim(),
      payload: String(data.get("payload") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      website: String(data.get("website") ?? "").trim(),
    };
    const nextErrors: FieldErrors = {};
    if (!values.name) nextErrors.name = "Please enter your name.";
    if (!values.company) nextErrors.company = "Please enter your company.";
    if (!values.email) nextErrors.email = "Please enter your business email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = "Please enter a valid email address.";
    if (!values.market) nextErrors.market = "Please enter your country or market.";
    if (!projectTypes.includes(values.projectType as (typeof projectTypes)[number])) nextErrors.projectType = "Please select a project type.";
    if (!quantities.includes(values.quantity as (typeof quantities)[number])) nextErrors.quantity = "Please select an expected quantity.";
    if (!dailyDistances.includes(values.dailyDistance as (typeof dailyDistances)[number])) nextErrors.dailyDistance = "Please select a daily distance.";
    if (!payloads.includes(values.payload as (typeof payloads)[number])) nextErrors.payload = "Please select a typical payload.";
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
      if (!response.ok || !result || typeof result !== "object" || !("ok" in result) || result.ok !== true) throw new Error("RFQ request failed");
      if ("code" in result && result.code === "INQUIRY_SENT") {
        const gtag = (window as Window & { gtag?: (command: "event", eventName: string, parameters: Record<string, string>) => void }).gtag;
        gtag?.("event", "generate_lead", { form_type: "fleet_rfq", project_type: "delivery_fleet" });
      }
      form.reset();
      setErrors({});
      setStatus("Fleet RFQ sent successfully.");
    } catch {
      setStatus(`Sending failed. Please email ${company.email}.`);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form className="relative border-t border-white/15 pt-10" noValidate onSubmit={handleSubmit}>
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden"><label htmlFor="fleet-website">Website</label><input autoComplete="off" id="fleet-website" name="website" tabIndex={-1} /></div>
      <div className="grid gap-6 md:grid-cols-2">
        <Field error={errors.name} label="Name" name="name"><input aria-describedby={errors.name ? "fleet-name-error" : undefined} aria-invalid={Boolean(errors.name)} autoComplete="name" className={fieldClassName} id="fleet-name" maxLength={100} name="name" required /></Field>
        <Field error={errors.company} label="Company" name="company"><input aria-describedby={errors.company ? "fleet-company-error" : undefined} aria-invalid={Boolean(errors.company)} autoComplete="organization" className={fieldClassName} id="fleet-company" maxLength={150} name="company" required /></Field>
        <Field error={errors.email} label="Business Email" name="email"><input aria-describedby={errors.email ? "fleet-email-error" : undefined} aria-invalid={Boolean(errors.email)} autoComplete="email" className={fieldClassName} id="fleet-email" maxLength={254} name="email" required type="email" /></Field>
        <Field error={errors.market} label="Country / Market" name="market"><input aria-describedby={errors.market ? "fleet-market-error" : undefined} aria-invalid={Boolean(errors.market)} autoComplete="country-name" className={fieldClassName} id="fleet-market" maxLength={120} name="market" required /></Field>
        <Field error={errors.projectType} label="Project Type" name="projectType"><Select error={errors.projectType} id="fleet-projectType" name="projectType" options={projectTypes} placeholder="Select project type" /></Field>
        <Field error={errors.quantity} label="Expected Quantity" name="quantity"><Select error={errors.quantity} id="fleet-quantity" name="quantity" options={quantities} placeholder="Select quantity" /></Field>
        <Field error={errors.dailyDistance} label="Daily Distance" name="dailyDistance"><Select error={errors.dailyDistance} id="fleet-dailyDistance" name="dailyDistance" options={dailyDistances} placeholder="Select distance" /></Field>
        <Field error={errors.payload} label="Typical Payload" name="payload"><Select error={errors.payload} id="fleet-payload" name="payload" options={payloads} placeholder="Select payload" /></Field>
        <Field error={errors.message} label="Project Requirements" name="message" wide><textarea aria-describedby={errors.message ? "fleet-message-error" : undefined} aria-invalid={Boolean(errors.message)} className={`${fieldClassName} min-h-40 resize-y`} id="fleet-message" maxLength={5000} name="message" placeholder="Tell us about your routes, cargo setup, branding needs, and operating environment." required /></Field>
      </div>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button className="inline-flex min-h-14 items-center justify-center rounded-full bg-kimi-green px-8 py-3.5 text-[0.9375rem] font-semibold text-kimi-black transition-[background-color,transform] hover:bg-white active:scale-[0.98] disabled:cursor-wait disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kimi-green" disabled={isSending} type="submit">{isSending ? "Sending…" : "Request Fleet Proposal"}</button>
        <p aria-live="polite" className="max-w-lg text-sm leading-6 text-white/50">{status || `Your RFQ will be sent securely to ${company.email}.`}</p>
      </div>
    </form>
  );
}

function Field({ children, error, label, name, wide = false }: { children: ReactNode; error?: string; label: string; name: FieldName; wide?: boolean }) {
  const id = `fleet-${name}`;
  return <div className={wide ? "md:col-span-2" : ""}><label className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60" htmlFor={id}>{label} <span className="text-kimi-green">*</span></label>{error ? <div>{children}<p className="mt-2 text-sm text-[#ff9d91]" id={`${id}-error`}>{error}</p></div> : children}</div>;
}

function Select({ error, id, name, options, placeholder }: { error?: string; id: string; name: FieldName; options: readonly string[]; placeholder: string }) {
  return <select aria-describedby={error ? `${id}-error` : undefined} aria-invalid={Boolean(error)} className={fieldClassName} defaultValue="" id={id} name={name} required><option disabled value="">{placeholder}</option>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select>;
}
