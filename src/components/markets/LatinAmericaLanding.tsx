import Image from "next/image";
import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";

const applications = [
  ["Last-Mile Delivery", "Electric motorcycle platforms for delivery and route-based commercial operations."],
  ["Urban Commercial Mobility", "Platforms for urban mobility, service fleets and commercial transport applications."],
  ["Utility & Service Operations", "Commercial platforms for utility-oriented and service applications."],
  ["Distributor & Importer Programs", "Platform selection, branding requirements and supply planning for commercial market partners."],
] as const;

const platforms = [
  { name: "Delivery X1", label: "Delivery / Last-mile", href: "/products/delivery-x1", image: "/images/products/Delivery/X1/02_Product/KIMI_Delivery_X1_Product_Card.webp", alt: "KIMI Delivery X1 commercial electric motorcycle" },
  { name: "Urban X1", label: "Urban Mobility", href: "/products/urban-x1", image: "/images/products/Urban/X1/02_Product/urban-x1-product-card.webp", alt: "KIMI Urban X1 electric motorcycle" },
  { name: "Utility X1", label: "Commercial Utility", href: "/products/utility-x1", image: "/images/products/Utility/X1/02_Product/utility-x1-product-card.webp", alt: "KIMI Utility X1 commercial electric motorcycle" },
] as const;

const processSteps = [
  ["Market & Application Brief", "Understand the destination market, use case and commercial requirements."],
  ["Platform Selection", "Identify suitable KIMI platforms for project evaluation."],
  ["Configuration Evaluation", "Discuss product, branding and configuration requirements subject to the selected platform."],
  ["Commercial & Supply Planning", "Coordinate commercial planning, packaging, documentation requirements and supply preparation."],
] as const;

export default function LatinAmericaLanding() {
  return (
    <main>
      <section className="relative min-h-[46rem] overflow-hidden bg-[#101923] pt-[5.25rem] text-white">
        <Image alt="KIMI commercial electric motorcycles for Latin American market projects" className="absolute inset-0 h-full w-full object-cover object-[58%_center]" fill priority sizes="100vw" src="/images/products/Delivery/X1/01_Hero/KIMI_Delivery_X1_Hero_V1.webp" unoptimized />
        <div className="absolute inset-0 bg-black/45 [background:linear-gradient(90deg,rgba(0,0,0,.84)_0%,rgba(0,0,0,.6)_44%,rgba(0,0,0,.12)_80%)]" />
        <Container className="relative flex min-h-[calc(46rem-5.25rem)] items-end pb-16 pt-20 sm:pb-20 lg:items-center lg:pb-0">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Latin America</p>
            <h1 className="mt-6 text-[length:var(--text-display)] font-semibold leading-[.96] tracking-[-0.055em]">Commercial Electric Motorcycles for Latin America</h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/68 sm:text-xl">KIMI supports distributors, importers and commercial fleet operators evaluating electric motorcycle platforms for Latin American markets, with project-based support for platform selection, configuration and supply planning.</p>
            <div className="mt-9 flex flex-wrap gap-4"><ButtonLink href="/partners/distributors#distributor-rfq" size="large">Discuss a Distribution Project</ButtonLink><ButtonLink href="/solutions/delivery-fleet#fleet-rfq" size="large" variant="secondary">Explore Fleet Solutions</ButtonLink></div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-[var(--space-section)]">
        <Container className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
          <SectionIntro eyebrow="Market-based evaluation" title="Electric Mobility Platforms for Commercial Markets." />
          <div className="space-y-6 text-[length:var(--text-lead)] leading-relaxed text-kimi-black/58">
            <p>Operating conditions and commercial requirements vary by country, market and application. Each project should be evaluated around its intended daily use, operating environment and business requirements.</p>
            <p>Regulations, registration, homologation and import requirements must be confirmed for each destination market. Vehicle configuration should be evaluated according to the selected platform and project requirements, and configuration options may vary.</p>
          </div>
        </Container>
      </section>

      <section className="bg-[#f2f2f0] py-[var(--space-section)]">
        <Container>
          <SectionIntro eyebrow="Commercial applications" title="Built Around the Work Each Market Requires." />
          <div className="mt-14 grid border-l border-t border-kimi-black/15 md:grid-cols-2">
            {applications.map(([title, description], index) => <article className="border-b border-r border-kimi-black/15 p-7 sm:p-10" key={title}><span className="text-xs font-semibold tracking-[0.18em] text-kimi-green">{String(index + 1).padStart(2, "0")}</span><h2 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">{title}</h2><p className="mt-4 max-w-md leading-7 text-kimi-black/58">{description}</p></article>)}
          </div>
        </Container>
      </section>

      <section className="bg-[#e9e9e6] py-[var(--space-section)]">
        <Container>
          <SectionIntro eyebrow="Product platforms" title="Platforms for Different Commercial Applications." />
          <div className="mt-14 grid gap-px bg-kimi-black/15 lg:grid-cols-3">
            {platforms.map((platform) => (
              <Link className="group bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kimi-green" href={platform.href} key={platform.name}>
                <div className="aspect-[4/3] overflow-hidden bg-[#f2f2f0]"><Image alt={platform.alt} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.025]" height={900} loading="lazy" sizes="(min-width:1024px) 33vw, 100vw" src={platform.image} unoptimized width={1200} /></div>
                <div className="p-7 sm:p-8"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-kimi-green">{platform.label}</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">{platform.name}</h2><span className="mt-7 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em]">Explore platform <span aria-hidden="true" className="h-px w-10 bg-kimi-green" /></span></div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-kimi-black py-[var(--space-section)] text-white">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <div className="overflow-hidden bg-[#202426]"><Image alt="Side profile of the KIMI Delivery X1 for commercial delivery projects" className="h-auto w-full" height={1122} loading="lazy" sizes="(min-width:1024px) 52vw, 100vw" src="/images/products/Delivery/X1/02_Product/KIMI_Delivery_X1_Side_View_V1.webp" unoptimized width={1402} /></div>
          <div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Delivery &amp; fleet</p><h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em]">Evaluate the Operating Case Before the Vehicle Configuration.</h2><p className="mt-7 text-[length:var(--text-lead)] leading-relaxed text-white/58">Route requirements, cargo profile, operating environment and the daily use case should guide platform evaluation. Vehicle configuration is subject to the selected platform and project requirements.</p><ButtonLink className="mt-9" href="/solutions/delivery-fleet" size="large">Explore Delivery Fleet Solutions</ButtonLink></div>
        </Container>
      </section>

      <section className="bg-white py-[var(--space-section)]">
        <Container className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-20">
          <div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Distributors &amp; importers</p><h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em]">Build the Product and Supply Plan Around the Market.</h2></div>
          <div><p className="text-[length:var(--text-lead)] leading-relaxed text-kimi-black/58">Product platform selection, branding requirements, commercial order planning, packaging and export preparation can be reviewed around the market and project. Documentation requirements and shipping coordination can be discussed according to project requirements.</p><ButtonLink className="mt-9" href="/partners/distributors" size="large" variant="dark">Discuss a Distribution Project</ButtonLink></div>
        </Container>
      </section>

      <section className="bg-[#f2f2f0] py-[var(--space-section)]">
        <Container>
          <SectionIntro eyebrow="From market brief to supply" title="A Project-Based Approach to Market Evaluation." />
          <ol className="mt-14 grid border-l border-t border-kimi-black/15 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(([title, description], index) => <li className="border-b border-r border-kimi-black/15 p-7 sm:p-8" key={title}><span className="text-sm font-semibold tracking-[0.18em] text-kimi-green">{String(index + 1).padStart(2, "0")}</span><h2 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">{title}</h2><p className="mt-4 leading-7 text-kimi-black/58">{description}</p></li>)}
          </ol>
          <p className="mt-8 max-w-4xl border-l-2 border-kimi-green pl-5 text-sm leading-6 text-kimi-black/58">Local regulatory, homologation, registration, import and road-use requirements must be confirmed for each destination market.</p>
        </Container>
      </section>

      <section className="bg-[#15191b] py-[var(--space-section)] text-white">
        <Container>
          <SectionIntro align="center" eyebrow="Project pathways" inverse title="Choose the Right Project Path." />
          <div className="mx-auto mt-12 grid max-w-5xl gap-px bg-white/15 md:grid-cols-2">
            <div className="bg-kimi-black p-8 text-center sm:p-12"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/48">Distributor / Importer</p><ButtonLink className="mt-7" href="/partners/distributors#distributor-rfq" size="large">Discuss a Distribution Project</ButtonLink></div>
            <div className="bg-kimi-black p-8 text-center sm:p-12"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/48">Fleet / Delivery Operator</p><ButtonLink className="mt-7" href="/solutions/delivery-fleet#fleet-rfq" size="large" variant="light">Explore Fleet Solutions</ButtonLink></div>
          </div>
        </Container>
      </section>
    </main>
  );
}
