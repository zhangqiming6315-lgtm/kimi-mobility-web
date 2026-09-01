import Image from "next/image";
import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import FleetRfqForm from "@/components/solutions/FleetRfqForm";

const assetRoot = "/images/products/Delivery/X1";
const capabilities = [
  ["Route fit", "Vehicle configuration can be reviewed against daily distance, operating environment, and charging access."],
  ["Cargo integration", "Rear cargo arrangements may be configured according to the selected platform and project requirements."],
  ["Fleet identity", "Body color and fleet branding options can be discussed for eligible commercial projects."],
  ["Supply support", "KIMI can coordinate vehicle configuration, order planning, and documentation for distributor and fleet programs."],
] as const;

export default function DeliveryFleetLanding() {
  return (
    <main>
      <section className="relative min-h-[46rem] overflow-hidden bg-[#101923] pt-[5.25rem] text-white">
        <Image alt="KIMI Delivery X1 electric motorcycles for commercial delivery operations" className="absolute inset-0 h-full w-full object-cover object-[58%_center]" fill priority sizes="100vw" src={`${assetRoot}/01_Hero/KIMI_Delivery_X1_Hero_V1.webp`} unoptimized />
        <div className="absolute inset-0 bg-black/45 [background:linear-gradient(90deg,rgba(0,0,0,.82)_0%,rgba(0,0,0,.56)_42%,rgba(0,0,0,.08)_78%)]" />
        <Container className="relative flex min-h-[calc(46rem-5.25rem)] items-end pb-16 pt-20 sm:pb-20 lg:items-center lg:pb-0">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Delivery fleet solutions</p>
            <h1 className="mt-6 text-[length:var(--text-display)] font-semibold leading-[.96] tracking-[-0.055em]">Electric Motorcycle Fleet Solutions for Delivery</h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/68 sm:text-xl">Configurable electric motorcycles for last-mile delivery and commercial operations, supported from fleet planning through supply.</p>
            <div className="mt-9 flex flex-wrap gap-4"><ButtonLink href="#fleet-rfq" size="large">Request Fleet Proposal</ButtonLink><ButtonLink href="/products/delivery-x1" size="large" variant="secondary">Explore Delivery X1</ButtonLink></div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-[var(--space-section)]">
        <Container>
          <SectionIntro description="Delivery operations differ by route density, cargo profile, working hours, and local requirements. KIMI approaches fleet projects around the operating case rather than a fixed package." eyebrow="Built around the operation" title="A practical platform for working routes." />
          <div className="mt-14 grid border-l border-t border-kimi-black/15 md:grid-cols-2">
            {capabilities.map(([title, description], index) => <article className="border-b border-r border-kimi-black/15 p-7 sm:p-10" key={title}><span className="text-xs font-semibold tracking-[0.18em] text-kimi-green">0{index + 1}</span><h2 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">{title}</h2><p className="mt-4 max-w-md leading-7 text-kimi-black/58">{description}</p></article>)}
          </div>
        </Container>
      </section>

      <section className="bg-[#e9e9e6] py-[var(--space-section)]">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
          <div className="overflow-hidden bg-white"><Image alt="Side profile of KIMI Delivery X1 electric delivery motorcycle" className="h-auto w-full" height={1122} sizes="(min-width:1024px) 58vw, 100vw" src={`${assetRoot}/02_Product/KIMI_Delivery_X1_Side_View_V1.webp`} unoptimized width={1402} /></div>
          <div className="max-w-xl"><p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Delivery X1 platform</p><h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em]">A vehicle base developed for delivery work.</h2><p className="mt-7 text-[length:var(--text-lead)] leading-relaxed text-kimi-black/58">Delivery X1 provides a commercial platform for evaluating fleet configuration, cargo requirements, and brand presentation. Final equipment is subject to the selected platform and project requirements.</p><Link className="mt-8 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-kimi-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kimi-green" href="/products/delivery-x1">View Delivery X1 <span aria-hidden="true" className="h-px w-10 bg-kimi-green" /></Link></div>
        </Container>
      </section>

      <section className="bg-kimi-black py-[var(--space-section)] text-white" id="fleet-rfq">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
            <div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Fleet RFQ</p><h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em]">Define your delivery project.</h2><p className="mt-6 text-lg leading-relaxed text-white/55">Share the operating basics. Our team can review the project and discuss a suitable vehicle and supply approach.</p></div>
            <FleetRfqForm />
          </div>
        </Container>
      </section>
    </main>
  );
}
