import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";

const applications = [
  { label: "01", title: "Last-mile delivery", product: "Delivery X1", href: "/products/delivery-x1", cue: "Delivery platform", description: "Mobility for local routes, daily logistics, and urban delivery operations." },
  { label: "02", title: "Urban mobility", product: "Urban X1", href: "/products/urban-x1", cue: "Urban platform", description: "Compact electric mobility for commuting, city travel, and everyday commercial movement." },
  { label: "03", title: "Commercial sites", product: "Utility X1", href: "/products/utility-x1", cue: "Utility platform", description: "Practical vehicles for facilities, service teams, industrial sites, and specialized work." },
  { label: "04", title: "Field service operations", product: "Utility X1", href: "/products/utility-x1#field-service", cue: "Modular utility", description: "Configurable mobility for equipment, maintenance tasks, and work across changing routes." },
] as const;

export default function Applications() {
  return (
    <section className="bg-kimi-light py-[var(--space-section)]">
      <Container>
        <SectionIntro align="center" description="From city streets to commercial sites, KIMI is organized around the environments where practical electric mobility matters." eyebrow="Applications" title="Designed for operating environments." />
        <div className="mt-16 grid gap-px bg-kimi-gray/25 md:grid-cols-2">
          {applications.map((application) => (
            <Link aria-label={`Explore ${application.product} for ${application.title}`} className="group relative flex min-h-80 flex-col overflow-hidden bg-kimi-black p-7 text-white transition-colors hover:bg-[#171d1e] focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kimi-green sm:p-10" href={application.href} key={application.title}>
              <div aria-hidden="true" className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:linear-gradient(135deg,transparent,black)]" />
              <div className="relative flex items-start justify-between gap-5">
                <span className="text-xs font-semibold tracking-[0.18em] text-kimi-green">{application.label}</span>
                <span className="border border-white/15 px-3 py-2 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-white/55">{application.cue}</span>
              </div>
              <div className="relative mt-auto max-w-md pt-20">
                <h3 className="text-2xl font-semibold tracking-[-0.035em]">{application.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/50">{application.description}</p>
                <div className="mt-7 flex items-center gap-4 text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-kimi-green">
                  Explore {application.product}
                  <span aria-hidden="true" className="h-px w-8 bg-kimi-green transition-[width] duration-300 group-hover:w-16" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
