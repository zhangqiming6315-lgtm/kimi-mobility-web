import Image from "next/image";
import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import { company } from "@/lib/site";

const audiences = [
  ["Overseas Brands", "Electric motorcycle brands evaluating a platform for a defined product program."],
  ["Importers & Distributors", "Market partners considering private-label vehicles alongside their import and distribution plans."],
  ["New Mobility Brands", "Companies preparing to launch a mobility brand with a clear market and product brief."],
  ["Commercial Operators", "Operators evaluating branded vehicle programs for delivery, service or utility applications."],
] as const;

const programScope = [
  ["Platform Selection", "Evaluate KIMI vehicle platforms against the intended application, market and commercial requirements."],
  ["Brand Requirements", "Discuss private-label and brand-presentation requirements for eligible projects."],
  ["Configuration Review", "Review vehicle, equipment and operating requirements subject to platform feasibility and supplier confirmation."],
  ["Supply Coordination", "Coordinate commercial planning, packaging, documentation requirements and supply preparation with relevant partners."],
] as const;

const platforms = [
  {
    name: "Delivery X1",
    label: "Delivery / Last-mile",
    href: "/products/delivery-x1",
    image: "/images/products/Delivery/X1/02_Product/KIMI_Delivery_X1_Product_Card.webp",
    alt: "KIMI Delivery X1 commercial electric motorcycle",
  },
  {
    name: "Urban X1",
    label: "Urban / Electric scooter",
    href: "/products/urban-x1",
    image: "/images/products/Urban/X1/02_Product/urban-x1-product-card.webp",
    alt: "KIMI Urban X1 electric scooter",
  },
  {
    name: "Utility X1",
    label: "Commercial utility",
    href: "/products/utility-x1",
    image: "/images/products/Utility/X1/02_Product/utility-x1-product-card.webp",
    alt: "KIMI Utility X1 commercial electric motorcycle",
  },
] as const;

const requirements = [
  "Brand presentation",
  "Destination market",
  "Intended application",
  "Vehicle and platform requirements",
  "Cargo and operating requirements",
  "Expected quantity",
  "Packaging requirements",
  "Documentation requirements",
] as const;

const pathway = [
  ["Project Brief", "Define the company, destination market, intended application and program objectives."],
  ["Platform Shortlist", "Identify the vehicle platforms that best match the initial brief."],
  ["Requirements & Feasibility Review", "Review branding, configuration and supply requirements with the relevant partners."],
  ["Sample / Commercial Evaluation", "Discuss an appropriate evaluation route based on the project and expected quantity."],
  ["Commercial & Supply Planning", "Coordinate confirmed commercial, packaging, documentation and supply requirements."],
] as const;

const relatedPaths = [
  ["Delivery Fleet Solutions", "Evaluate route, cargo and operating requirements for commercial delivery programs.", "/solutions/delivery-fleet"],
  ["Latin America", "Review KIMI platforms in the context of a regional commercial mobility project.", "/markets/latin-america"],
  ["Colombia", "Explore the dedicated market page for commercial electric motorcycle projects in Colombia.", "/markets/colombia"],
] as const;

const projectBrief = [
  "Company and destination market",
  "Intended brand or program",
  "Preferred vehicle platform",
  "Expected quantity",
  "Branding or private-label requirements",
  "Product and operating requirements",
] as const;

export default function OemLanding() {
  return (
    <main>
      <section className="relative min-h-[46rem] overflow-hidden bg-[#101923] pt-[5.25rem] text-white">
        <Image
          alt="KIMI commercial electric motorcycle platform for OEM project evaluation"
          className="absolute inset-0 h-full w-full object-cover object-[58%_center]"
          fill
          priority
          sizes="100vw"
          src="/images/products/Delivery/X1/01_Hero/KIMI_Delivery_X1_Hero_V1.webp"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/45 [background:linear-gradient(90deg,rgba(0,0,0,.86)_0%,rgba(0,0,0,.65)_46%,rgba(0,0,0,.14)_82%)]" />
        <Container className="relative flex min-h-[calc(46rem-5.25rem)] items-end pb-16 pt-20 sm:pb-20 lg:items-center lg:pb-0">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">OEM &amp; Private Label</p>
            <h1 className="mt-6 text-[length:var(--text-display)] font-semibold leading-[.96] tracking-[-0.055em]">
              Electric Motorcycle OEM &amp; Private-Label Programs
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/68 sm:text-xl">
              Evaluate KIMI vehicle platforms for branded electric motorcycle projects, with project-based discussion covering platform selection, brand presentation, configuration requirements and supply coordination.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <ButtonLink href="/partners/distributors#distributor-rfq" size="large">Discuss an OEM Project</ButtonLink>
              <ButtonLink href="/products" size="large" variant="secondary">Explore Vehicle Platforms</ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-[var(--space-section)]">
        <Container>
          <SectionIntro eyebrow="Who the program is for" title="Built Around a Defined Product and Brand Brief." />
          <div className="mt-14 grid border-l border-t border-kimi-black/15 md:grid-cols-2">
            {audiences.map(([title, description], index) => (
              <article className="border-b border-r border-kimi-black/15 p-7 sm:p-10" key={title}>
                <span className="text-xs font-semibold tracking-[0.18em] text-kimi-green">0{index + 1}</span>
                <h2 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">{title}</h2>
                <p className="mt-4 max-w-md leading-7 text-kimi-black/58">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-kimi-black py-[var(--space-section)] text-white">
        <Container>
          <SectionIntro inverse eyebrow="Program scope" title="A Project-Based Path from Platform to Supply." />
          <div className="mt-14 grid border-l border-t border-white/15 md:grid-cols-2">
            {programScope.map(([title, description], index) => (
              <article className="border-b border-r border-white/15 p-7 sm:p-10" key={title}>
                <span className="text-xs font-semibold tracking-[0.18em] text-kimi-green">0{index + 1}</span>
                <h2 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">{title}</h2>
                <p className="mt-4 max-w-lg leading-7 text-white/55">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#e9e9e6] py-[var(--space-section)]">
        <Container>
          <SectionIntro eyebrow="Vehicle platform selection" title="Start with the Platform That Fits the Application." description="Delivery, urban and utility platforms provide a practical starting point for electric motorcycle OEM and private-label project evaluation." />
          <div className="mt-14 grid gap-px bg-kimi-black/15 lg:grid-cols-3">
            {platforms.map((platform) => (
              <Link className="group bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kimi-green" href={platform.href} key={platform.name}>
                <div className="aspect-[4/3] overflow-hidden bg-[#f2f2f0]">
                  <Image alt={platform.alt} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.025]" height={900} loading="lazy" sizes="(min-width:1024px) 33vw, 100vw" src={platform.image} unoptimized width={1200} />
                </div>
                <div className="p-7 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-kimi-green">{platform.label}</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">{platform.name}</h2>
                  <span className="mt-7 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em]">Explore platform <span aria-hidden="true" className="h-px w-10 bg-kimi-green" /></span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-[var(--space-section)]">
        <Container className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Requirements review</p>
            <h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em]">Requirements That Can Be Evaluated.</h2>
            <p className="mt-7 text-[length:var(--text-lead)] leading-relaxed text-kimi-black/58">
              Custom branding, colors, vehicle configuration, battery, motor, range and cargo requests can be discussed as part of the project brief. Spare-parts planning, international shipping coordination, certification, homologation, CKD/SKD, tooling, lead time, MOQ, warranty and exclusivity requirements are subject to project review and supplier confirmation.
            </p>
          </div>
          <div>
            <ul className="grid border-l border-t border-kimi-black/15 sm:grid-cols-2">
              {requirements.map((requirement) => <li className="border-b border-r border-kimi-black/15 p-5 font-medium" key={requirement}>{requirement}</li>)}
            </ul>
            <p className="mt-7 border-l-2 border-kimi-green pl-5 leading-7 text-kimi-black/65">
              Availability and feasibility depend on the selected platform, project requirements, quantity, destination market and supplier confirmation.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#e9e9e6] py-[var(--space-section)]">
        <Container>
          <SectionIntro eyebrow="Project pathway" title="From Project Brief to Commercial Planning." description="Each step is an evaluation and coordination stage shaped by the selected platform, project requirements and relevant supplier confirmation." />
          <ol className="mt-14 grid border-l border-t border-kimi-black/15 md:grid-cols-2 lg:grid-cols-5">
            {pathway.map(([title, description], index) => (
              <li className="border-b border-r border-kimi-black/15 p-7" key={title}>
                <span className="text-sm font-semibold tracking-[0.18em] text-kimi-green">{String(index + 1).padStart(2, "0")}</span>
                <h2 className="mt-8 text-xl font-semibold tracking-[-0.035em]">{title}</h2>
                <p className="mt-4 leading-7 text-kimi-black/58">{description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-white py-[var(--space-section)]">
        <Container>
          <SectionIntro eyebrow="OEM vs distribution" title="Choose the Commercial Path That Matches Your Objective." />
          <div className="mt-14 grid gap-px bg-kimi-black/15 lg:grid-cols-2">
            <article className="bg-kimi-black p-8 text-white sm:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-kimi-green">OEM / Private Label</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">Product and brand program</h2>
              <p className="mt-6 max-w-xl leading-7 text-white/58">For projects centered on product, brand presentation, platform selection, configuration requirements and project supply.</p>
            </article>
            <article className="bg-[#f2f2f0] p-8 sm:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-kimi-green">Distributor cooperation</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">Market and channel partnership</h2>
              <p className="mt-6 max-w-xl leading-7 text-kimi-black/58">For cooperation centered on importing, sales channels, market development and local distribution.</p>
              <Link className="mt-8 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kimi-green" href="/partners/distributors">Explore distributor cooperation <span aria-hidden="true" className="h-px w-10 bg-kimi-green" /></Link>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-[#15191b] py-[var(--space-section)] text-white">
        <Container>
          <SectionIntro inverse eyebrow="Related commercial paths" title="Continue Your Project Evaluation." />
          <div className="mt-14 grid gap-px bg-white/15 lg:grid-cols-3">
            {relatedPaths.map(([title, description, href]) => (
              <Link className="group bg-kimi-black p-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kimi-green sm:p-10" href={href} key={href}>
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">{title}</h2>
                <p className="mt-5 leading-7 text-white/52">{description}</p>
                <span className="mt-8 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-kimi-green">Explore <span aria-hidden="true" className="h-px w-10 bg-kimi-green" /></span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-kimi-black py-[var(--space-section)] text-white">
        <Container className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">OEM project brief</p>
            <h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em]">Prepare the Essentials for Project Review.</h2>
            <p className="mt-7 text-lg leading-relaxed text-white/55">Use the existing Distributor RFQ to share an OEM or private-label inquiry with the KIMI team.</p>
          </div>
          <div>
            <ul className="grid border-l border-t border-white/15 sm:grid-cols-2">
              {projectBrief.map((item) => <li className="border-b border-r border-white/15 p-5 text-white/75" key={item}>{item}</li>)}
            </ul>
            <p className="mt-7 leading-7 text-white/52">Choose <strong className="font-semibold text-white/78">Other</strong> for Business Type when appropriate, select <strong className="font-semibold text-white/78">Private Label</strong> or <strong className="font-semibold text-white/78">To Be Discussed</strong> for Branding Requirement, and describe the OEM or private-label requirements in Project Requirements.</p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <ButtonLink href="/partners/distributors#distributor-rfq" size="large">Submit Your OEM Project Brief</ButtonLink>
              <a className="text-sm font-medium text-white/70 transition-colors hover:text-kimi-green focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kimi-green" href={`mailto:${company.email}`}>{company.email}</a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
