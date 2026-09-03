import Image from "next/image";
import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";

const applications = [
  ["Last-Mile Delivery", "Platform evaluation for delivery routes, cargo needs and defined daily operating requirements."],
  ["Urban Commercial Mobility", "Electric motorcycle options for businesses assessing practical urban transport applications."],
  ["Service & Field Operations", "Utility-oriented platforms for teams evaluating vehicles around tools, equipment and route needs."],
  ["Market Distribution", "Product and supply planning for Colombian distributors and importers developing a commercial program."],
] as const;

const platforms = [
  { name: "Delivery X1", use: "Delivery operations", description: "A commercial platform for evaluating route-based delivery, cargo configuration and fleet presentation.", href: "/products/delivery-x1", image: "/images/products/Delivery/X1/02_Product/KIMI_Delivery_X1_Product_Card.webp", alt: "KIMI Delivery X1 commercial electric motorcycle platform" },
  { name: "Urban X1", use: "Urban mobility", description: "An electric motorcycle platform for businesses considering urban commercial mobility applications.", href: "/products/urban-x1", image: "/images/products/Urban/X1/02_Product/urban-x1-product-card.webp", alt: "KIMI Urban X1 electric motorcycle platform" },
  { name: "Utility X1", use: "Utility work", description: "A utility-focused platform for service, field and operational vehicle requirements.", href: "/products/utility-x1", image: "/images/products/Utility/X1/02_Product/utility-x1-product-card.webp", alt: "KIMI Utility X1 commercial electric motorcycle platform" },
] as const;

const evaluationPoints = [
  ["Commercial Use Case", "Define the work, users and operating objectives the vehicle is expected to support."],
  ["Routes & Daily Operation", "Review expected routes, daily distance, charging plan and operating schedule."],
  ["Vehicle Configuration", "Assess cargo, branding and equipment needs against the selected platform."],
  ["Local Requirements", "Confirm Colombian regulatory, homologation, certification, registration, import and road-use requirements."],
  ["Supply Planning", "Discuss quantities, timing, documentation and logistics according to the project."],
  ["Commercial Review", "Confirm configuration availability and commercial terms for the specific program."],
] as const;

const processSteps = [
  ["Colombia Project Brief", "Share the intended market channel, application and business requirements."],
  ["Platform Assessment", "Evaluate a KIMI platform and available configuration against the operating case."],
  ["Local Compliance Review", "The buyer or importer confirms applicable requirements with appropriate qualified local parties."],
  ["Project Planning", "Develop commercial, quantity, timing and logistics plans subject to project review and agreement."],
] as const;

export default function ColombiaLanding() {
  return (
    <main>
      <section className="relative min-h-[46rem] overflow-hidden bg-[#101923] pt-[5.25rem] text-white">
        <Image alt="KIMI electric motorcycle platform for commercial projects targeting Colombia" className="absolute inset-0 h-full w-full object-cover object-[58%_center]" fill priority sizes="100vw" src="/images/products/Delivery/X1/01_Hero/KIMI_Delivery_X1_Hero_V1.webp" unoptimized />
        <div className="absolute inset-0 bg-black/45 [background:linear-gradient(90deg,rgba(0,0,0,.86)_0%,rgba(0,0,0,.62)_46%,rgba(0,0,0,.12)_82%)]" />
        <Container className="relative flex min-h-[calc(46rem-5.25rem)] items-end pb-16 pt-20 sm:pb-20 lg:items-center lg:pb-0">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Colombia market projects</p>
            <h1 className="mt-6 text-[length:var(--text-display)] font-semibold leading-[.96] tracking-[-0.055em]">Electric Motorcycles for Commercial Use in Colombia</h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/68 sm:text-xl">KIMI Mobility is a China-based commercial electric mobility supplier helping distributors, importers and fleet operators evaluate electric motorcycle platforms for Colombia on a project basis.</p>
            <div className="mt-9 flex flex-wrap gap-4"><ButtonLink href="/partners/distributors#distributor-rfq" size="large">Discuss a Distribution Project</ButtonLink><ButtonLink href="/solutions/delivery-fleet#fleet-rfq" size="large" variant="secondary">Evaluate a Fleet Project</ButtonLink></div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-[var(--space-section)]">
        <Container className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <SectionIntro eyebrow="Commercial-use evaluation" title="Start With the Operating and Market Requirements." />
          <div className="space-y-6 text-[length:var(--text-lead)] leading-relaxed text-kimi-black/58">
            <p>Electric motorcycles for Colombia should be evaluated around a defined commercial application, the intended sales or operating model, and the requirements of the destination market.</p>
            <p>KIMI can discuss platform selection, configuration requirements and supply planning. Suitability for a particular project remains subject to the selected platform, local review and agreed commercial arrangements.</p>
          </div>
        </Container>
      </section>

      <section className="bg-[#f2f2f0] py-[var(--space-section)]">
        <Container>
          <SectionIntro eyebrow="Two buyer pathways" title="A Clear Route for Colombia Market Projects." />
          <div className="mt-14 grid gap-px bg-kimi-black/15 md:grid-cols-2">
            <article className="bg-white p-8 sm:p-11"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-kimi-green">Distributors / Importers</p><h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">Develop a Market and Supply Plan.</h2><p className="mt-5 leading-7 text-kimi-black/58">Evaluate product platforms, available configurations, branding requirements and project-dependent supply planning for a Colombian distribution or import program.</p><ButtonLink className="mt-8" href="/partners/distributors#distributor-rfq" variant="dark">Distributor Project RFQ</ButtonLink></article>
            <article className="bg-white p-8 sm:p-11"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-kimi-green">Fleet / Delivery Operators</p><h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">Define the Commercial Operating Case.</h2><p className="mt-5 leading-7 text-kimi-black/58">Assess routes, daily use, cargo needs and the operating environment before evaluating a vehicle configuration for delivery or fleet work.</p><ButtonLink className="mt-8" href="/solutions/delivery-fleet#fleet-rfq" variant="dark">Fleet Project RFQ</ButtonLink></article>
          </div>
        </Container>
      </section>

      <section className="bg-kimi-black py-[var(--space-section)] text-white">
        <Container>
          <SectionIntro eyebrow="Commercial applications" inverse title="Electric Mobility Considered Around Real Business Use." />
          <div className="mt-14 grid border-l border-t border-white/15 md:grid-cols-2">
            {applications.map(([title, description], index) => <article className="border-b border-r border-white/15 p-7 sm:p-10" key={title}><span className="text-xs font-semibold tracking-[0.18em] text-kimi-green">{String(index + 1).padStart(2, "0")}</span><h2 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">{title}</h2><p className="mt-4 max-w-md leading-7 text-white/58">{description}</p></article>)}
          </div>
        </Container>
      </section>

      <section className="bg-[#e9e9e6] py-[var(--space-section)]">
        <Container>
          <SectionIntro eyebrow="Platform matching" title="Three Platforms for Different Commercial Priorities." />
          <div className="mt-14 grid gap-px bg-kimi-black/15 lg:grid-cols-3">
            {platforms.map((platform) => <Link className="group bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kimi-green" href={platform.href} key={platform.name}><div className="aspect-[4/3] overflow-hidden bg-[#f2f2f0]"><Image alt={platform.alt} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.025]" height={900} loading="lazy" sizes="(min-width:1024px) 33vw, 100vw" src={platform.image} unoptimized width={1200} /></div><div className="p-7 sm:p-8"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-kimi-green">{platform.use}</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">{platform.name}</h2><p className="mt-4 leading-7 text-kimi-black/58">{platform.description}</p><span className="mt-7 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em]">View platform <span aria-hidden="true" className="h-px w-10 bg-kimi-green" /></span></div></Link>)}
          </div>
        </Container>
      </section>

      <section className="bg-white py-[var(--space-section)]">
        <Container>
          <SectionIntro eyebrow="Colombia project checklist" title="Questions to Resolve Before a Commercial Program Moves Forward." />
          <div className="mt-14 grid border-l border-t border-kimi-black/15 md:grid-cols-2 lg:grid-cols-3">
            {evaluationPoints.map(([title, description]) => <article className="border-b border-r border-kimi-black/15 p-7 sm:p-9" key={title}><h2 className="text-2xl font-semibold tracking-[-0.035em]">{title}</h2><p className="mt-4 leading-7 text-kimi-black/58">{description}</p></article>)}
          </div>
          <p className="mt-8 max-w-5xl border-l-2 border-kimi-green pl-5 text-sm leading-6 text-kimi-black/58">Colombian regulatory, homologation, certification, registration, import and road-use eligibility requirements must be confirmed for the destination market and project by the buyer or importer with appropriate qualified local parties.</p>
        </Container>
      </section>

      <section className="bg-[#15191b] py-[var(--space-section)] text-white">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <div className="overflow-hidden bg-[#202426]"><Image alt="Side profile of the KIMI Delivery X1 commercial electric motorcycle" className="h-auto w-full" height={1122} loading="lazy" sizes="(min-width:1024px) 52vw, 100vw" src="/images/products/Delivery/X1/02_Product/KIMI_Delivery_X1_Side_View_V1.webp" unoptimized width={1402} /></div>
          <div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">China-to-Colombia B2B supply</p><h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em]">Plan the Supply Project Around the Destination Requirements.</h2><p className="mt-7 text-[length:var(--text-lead)] leading-relaxed text-white/58">KIMI works from China with international distributors, importers and commercial project partners. Configuration availability, commercial terms, quantities, timing, documentation and logistics are reviewed for each project and remain subject to agreement.</p></div>
        </Container>
      </section>

      <section className="bg-[#f2f2f0] py-[var(--space-section)]">
        <Container>
          <SectionIntro eyebrow="Colombia project process" title="From Business Brief to Project-Dependent Supply Planning." />
          <ol className="mt-14 grid border-l border-t border-kimi-black/15 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(([title, description], index) => <li className="border-b border-r border-kimi-black/15 p-7 sm:p-8" key={title}><span className="text-sm font-semibold tracking-[0.18em] text-kimi-green">{String(index + 1).padStart(2, "0")}</span><h2 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">{title}</h2><p className="mt-4 leading-7 text-kimi-black/58">{description}</p></li>)}
          </ol>
        </Container>
      </section>

      <section className="bg-white py-[var(--space-section)]">
        <Container className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-20">
          <SectionIntro eyebrow="Regional context" title="Evaluating Markets Beyond Colombia?" />
          <div><p className="text-[length:var(--text-lead)] leading-relaxed text-kimi-black/58">Review KIMI&apos;s broader approach to distributor, importer and commercial fleet projects across Latin American markets.</p><ButtonLink className="mt-8" href="/markets/latin-america" variant="dark">Explore Latin America</ButtonLink></div>
        </Container>
      </section>

      <section className="bg-kimi-black py-[var(--space-section)] text-white">
        <Container>
          <SectionIntro align="center" eyebrow="Choose your project path" inverse title="Continue With the Team That Matches Your Colombia Project." />
          <div className="mx-auto mt-12 grid max-w-5xl gap-px bg-white/15 md:grid-cols-2">
            <div className="bg-[#15191b] p-8 text-center sm:p-12"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/48">Distributor / Importer</p><ButtonLink className="mt-7" href="/partners/distributors#distributor-rfq" size="large">Discuss Distribution</ButtonLink></div>
            <div className="bg-[#15191b] p-8 text-center sm:p-12"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/48">Fleet / Delivery Operator</p><ButtonLink className="mt-7" href="/solutions/delivery-fleet#fleet-rfq" size="large" variant="light">Discuss Fleet Requirements</ButtonLink></div>
          </div>
        </Container>
      </section>
    </main>
  );
}
