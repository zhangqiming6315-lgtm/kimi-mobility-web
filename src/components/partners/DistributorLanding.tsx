import Image from "next/image";
import Link from "next/link";
import DistributorRfqForm from "@/components/partners/DistributorRfqForm";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";

const capabilities = [
  ["Product Selection", "Evaluate commercial electric motorcycle platforms according to market and application requirements."],
  ["Market Configuration", "Configuration requirements can be discussed according to the selected platform and project."],
  ["Brand Presentation", "Branding and private-label requirements may be discussed for eligible projects."],
  ["Supply Planning", "Support commercial order planning, packaging and export preparation for international projects."],
] as const;

const platforms = [
  { name: "Delivery X1", category: "Delivery / Last-mile", href: "/products/delivery-x1", image: "/images/products/Delivery/X1/02_Product/KIMI_Delivery_X1_Product_Card.webp", alt: "KIMI Delivery X1 commercial electric motorcycle" },
  { name: "Urban X1", category: "Urban Mobility", href: "/products/urban-x1", image: "/images/products/Urban/X1/02_Product/urban-x1-product-card.webp", alt: "KIMI Urban X1 electric motorcycle" },
  { name: "Utility X1", category: "Commercial Utility", href: "/products/utility-x1", image: "/images/products/Utility/X1/02_Product/utility-x1-product-card.webp", alt: "KIMI Utility X1 commercial electric motorcycle" },
] as const;

const steps = [
  ["Market Brief", "Understand the target market, application and commercial requirements."],
  ["Platform Selection", "Identify suitable KIMI product platforms for project evaluation."],
  ["Configuration & Evaluation", "Discuss configuration, branding and evaluation requirements subject to the selected platform."],
  ["Order & Supply Planning", "Coordinate commercial order planning, packaging, documentation requirements and supply preparation."],
] as const;

export default function DistributorLanding() {
  return (
    <main>
      <section className="relative min-h-[46rem] overflow-hidden bg-[#101923] pt-[5.25rem] text-white">
        <Image alt="KIMI commercial electric motorcycles for distribution partnerships" className="absolute inset-0 h-full w-full object-cover object-[58%_center]" fill priority sizes="100vw" src="/images/products/Delivery/X1/01_Hero/KIMI_Delivery_X1_Hero_V1.webp" unoptimized />
        <div className="absolute inset-0 bg-black/45 [background:linear-gradient(90deg,rgba(0,0,0,.84)_0%,rgba(0,0,0,.6)_44%,rgba(0,0,0,.12)_80%)]" />
        <Container className="relative flex min-h-[calc(46rem-5.25rem)] items-end pb-16 pt-20 sm:pb-20 lg:items-center lg:pb-0">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Distributor partnerships</p>
            <h1 className="mt-6 text-[length:var(--text-display)] font-semibold leading-[.96] tracking-[-0.055em]">Electric Motorcycle Supply for Distributors and Importers</h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/68 sm:text-xl">KIMI works with distributors, importers and commercial mobility partners to evaluate electric motorcycle platforms for their markets, with support for product configuration, branding and supply planning.</p>
            <div className="mt-9 flex flex-wrap gap-4"><ButtonLink href="#distributor-rfq" size="large">Discuss a Distribution Project</ButtonLink><ButtonLink href="/products" size="large" variant="secondary">Explore Products</ButtonLink></div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-[var(--space-section)]">
        <Container>
          <SectionIntro eyebrow="Built for market partners" title="A Supply Approach Built Around Your Market." />
          <div className="mt-14 grid border-l border-t border-kimi-black/15 md:grid-cols-2">
            {capabilities.map(([title, description], index) => <article className="border-b border-r border-kimi-black/15 p-7 sm:p-10" key={title}><span className="text-xs font-semibold tracking-[0.18em] text-kimi-green">0{index + 1}</span><h2 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">{title}</h2><p className="mt-4 max-w-md leading-7 text-kimi-black/58">{description}</p></article>)}
          </div>
        </Container>
      </section>

      <section className="bg-[#e9e9e6] py-[var(--space-section)]">
        <Container>
          <SectionIntro eyebrow="Product platforms" title="Commercial platforms for different market needs." />
          <div className="mt-14 grid gap-px bg-kimi-black/15 lg:grid-cols-3">
            {platforms.map((platform) => (
              <Link className="group bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kimi-green" href={platform.href} key={platform.name}>
                <div className="aspect-[4/3] overflow-hidden bg-[#f2f2f0]"><Image alt={platform.alt} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.025]" height={900} loading="lazy" sizes="(min-width:1024px) 33vw, 100vw" src={platform.image} unoptimized width={1200} /></div>
                <div className="p-7 sm:p-8"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-kimi-green">{platform.category}</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">{platform.name}</h2><span className="mt-7 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em]">Explore platform <span aria-hidden="true" className="h-px w-10 bg-kimi-green" /></span></div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-[var(--space-section)]">
        <Container>
          <SectionIntro eyebrow="From evaluation to supply" title="A Clear Path from Market Brief to Supply Planning." />
          <ol className="mt-14 grid border-l border-t border-kimi-black/15 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([title, description], index) => <li className="border-b border-r border-kimi-black/15 p-7 sm:p-8" key={title}><span className="text-sm font-semibold tracking-[0.18em] text-kimi-green">{String(index + 1).padStart(2, "0")}</span><h2 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">{title}</h2><p className="mt-4 leading-7 text-kimi-black/58">{description}</p></li>)}
          </ol>
        </Container>
      </section>

      <section className="scroll-mt-[5.25rem] bg-kimi-black py-[var(--space-section)] text-white" id="distributor-rfq">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
            <div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Distributor RFQ</p><h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em]">Discuss Your Distribution Project</h2><p className="mt-6 text-lg leading-relaxed text-white/55">Tell us about your market, business and product requirements. KIMI will review the project and discuss suitable next steps.</p></div>
            <DistributorRfqForm />
          </div>
        </Container>
      </section>
    </main>
  );
}
