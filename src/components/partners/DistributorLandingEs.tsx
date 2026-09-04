import Image from "next/image";
import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";

const capabilities = [
  ["Selección de producto", "Las plataformas de motos eléctricas comerciales pueden evaluarse según el mercado y los requisitos de aplicación."],
  ["Configuración para el mercado", "Los requisitos de configuración pueden analizarse según la plataforma seleccionada y las condiciones del proyecto."],
  ["Presentación de marca", "Las opciones de identidad de marca y marca privada pueden analizarse para proyectos elegibles y permanecen sujetas a revisión."],
  ["Planificación del suministro", "KIMI puede apoyar la planificación comercial de pedidos, empaque y preparación para exportación de acuerdo con cada proyecto."],
] as const;

const platforms = [
  { name: "Delivery X1", category: "Reparto / Última milla", href: "/es/productos/delivery-x1", image: "/images/products/Delivery/X1/02_Product/KIMI_Delivery_X1_Product_Card.webp", alt: "Moto eléctrica comercial KIMI Delivery X1", language: "Ver plataforma" },
  { name: "Urban X1", category: "Movilidad urbana", href: "/products/urban-x1", image: "/images/products/Urban/X1/02_Product/urban-x1-product-card.webp", alt: "Moto eléctrica KIMI Urban X1", language: "Ver plataforma — página en inglés" },
  { name: "Utility X1", category: "Uso comercial utilitario", href: "/products/utility-x1", image: "/images/products/Utility/X1/02_Product/utility-x1-product-card.webp", alt: "Moto eléctrica comercial KIMI Utility X1", language: "Ver plataforma — página en inglés" },
] as const;

const steps = [
  ["Definición del mercado", "Comprender el mercado objetivo, la aplicación y los requisitos comerciales del proyecto."],
  ["Selección de plataforma", "Identificar plataformas KIMI pertinentes para la evaluación del proyecto."],
  ["Configuración y evaluación", "Analizar la configuración, la identidad de marca y los requisitos de evaluación según la plataforma seleccionada."],
  ["Planificación del pedido y suministro", "Coordinar la planificación del pedido, el empaque, la documentación y la preparación del suministro conforme a los requisitos del proyecto."],
] as const;

export default function DistributorLandingEs() {
  return (
    <main>
      <section className="relative min-h-[46rem] overflow-hidden bg-[#101923] pt-[5.25rem] text-white">
        <Image alt="Motos eléctricas comerciales KIMI para proyectos de distribución" className="absolute inset-0 h-full w-full object-cover object-[58%_center]" fill priority sizes="100vw" src="/images/products/Delivery/X1/01_Hero/KIMI_Delivery_X1_Hero_V1.webp" unoptimized />
        <div className="absolute inset-0 bg-black/45 [background:linear-gradient(90deg,rgba(0,0,0,.84)_0%,rgba(0,0,0,.6)_44%,rgba(0,0,0,.12)_80%)]" />
        <Container className="relative flex min-h-[calc(46rem-5.25rem)] items-end pb-16 pt-20 sm:pb-20 lg:items-center lg:pb-0">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Socios de distribución en América Latina</p>
            <h1 className="mt-6 text-[length:var(--text-display)] font-semibold leading-[.96] tracking-[-0.055em]">Motos Eléctricas para Distribuidores e Importadores</h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/68 sm:text-xl">KIMI Mobility es una empresa de movilidad eléctrica comercial con sede en China que trabaja con distribuidores, importadores y socios comerciales para evaluar plataformas, configuraciones y planificación de suministro según cada proyecto.</p>
            <div className="mt-9 flex flex-wrap gap-4"><ButtonLink href="/partners/distributors#distributor-rfq" size="large">Consultar un proyecto de distribución — formulario en inglés</ButtonLink><ButtonLink href="/es/productos/delivery-x1" size="large" variant="secondary">Ver Delivery X1</ButtonLink></div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-[var(--space-section)]">
        <Container>
          <SectionIntro eyebrow="Enfoque para socios comerciales" title="Un proceso de suministro basado en cada mercado." />
          <div className="mt-14 grid border-l border-t border-kimi-black/15 md:grid-cols-2">
            {capabilities.map(([title, description], index) => <article className="border-b border-r border-kimi-black/15 p-7 sm:p-10" key={title}><span className="text-xs font-semibold tracking-[0.18em] text-kimi-green">0{index + 1}</span><h2 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">{title}</h2><p className="mt-4 max-w-md leading-7 text-kimi-black/58">{description}</p></article>)}
          </div>
        </Container>
      </section>

      <section className="bg-[#e9e9e6] py-[var(--space-section)]">
        <Container>
          <SectionIntro eyebrow="Plataformas de producto" title="Opciones comerciales para diferentes necesidades del mercado." />
          <div className="mt-14 grid gap-px bg-kimi-black/15 lg:grid-cols-3">
            {platforms.map((platform) => <Link className="group bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kimi-green" href={platform.href} key={platform.name}><div className="aspect-[4/3] overflow-hidden bg-[#f2f2f0]"><Image alt={platform.alt} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.025]" height={900} loading="lazy" sizes="(min-width:1024px) 33vw, 100vw" src={platform.image} unoptimized width={1200} /></div><div className="p-7 sm:p-8"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-kimi-green">{platform.category}</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">{platform.name}</h2><span className="mt-7 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em]">{platform.language}<span aria-hidden="true" className="h-px w-10 bg-kimi-green" /></span></div></Link>)}
          </div>
        </Container>
      </section>

      <section className="bg-white py-[var(--space-section)]">
        <Container>
          <SectionIntro eyebrow="De la evaluación al suministro" title="Un proceso claro desde la definición del mercado hasta la planificación." />
          <ol className="mt-14 grid border-l border-t border-kimi-black/15 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([title, description], index) => <li className="border-b border-r border-kimi-black/15 p-7 sm:p-8" key={title}><span className="text-sm font-semibold tracking-[0.18em] text-kimi-green">{String(index + 1).padStart(2, "0")}</span><h2 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">{title}</h2><p className="mt-4 leading-7 text-kimi-black/58">{description}</p></li>)}
          </ol>
        </Container>
      </section>

      <section className="bg-kimi-black py-[var(--space-section)] text-white">
        <Container>
          <SectionIntro align="center" eyebrow="Siguiente paso comercial" inverse title="Evalúe un proyecto de distribución con KIMI Mobility." />
          <p className="mx-auto mt-7 max-w-3xl text-center text-lg leading-relaxed text-white/55">Comparta su mercado, modelo de negocio y necesidades de producto para analizar próximos pasos sujetos a la plataforma y al proyecto.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4"><ButtonLink href="/partners/distributors#distributor-rfq" size="large">Consultar un proyecto de distribución — formulario en inglés</ButtonLink><ButtonLink href="/es/soluciones/flota-reparto" size="large" variant="light">Ver soluciones para flotas</ButtonLink><ButtonLink href="/es/mercados/colombia" size="large" variant="secondary">Ver proyectos en Colombia</ButtonLink></div>
        </Container>
      </section>
    </main>
  );
}
