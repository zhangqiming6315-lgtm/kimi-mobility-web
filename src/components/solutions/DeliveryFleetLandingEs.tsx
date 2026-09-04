import Image from "next/image";
import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";

const assetRoot = "/images/products/Delivery/X1";
const capabilities = [
  ["Evaluación de rutas", "La configuración del vehículo puede evaluarse según la distancia diaria, el entorno operativo y el acceso a recarga."],
  ["Integración de carga", "Pueden considerarse opciones de carga trasera según la plataforma seleccionada y los requisitos del proyecto."],
  ["Identidad de flota", "Las opciones de color e identidad de flota pueden analizarse para proyectos comerciales elegibles."],
  ["Apoyo al suministro", "KIMI puede coordinar la configuración del vehículo, la planificación de pedidos y la documentación para programas de distribución y flotas."],
] as const;

export default function DeliveryFleetLandingEs() {
  return (
    <main>
      <section className="relative min-h-[46rem] overflow-hidden bg-[#101923] pt-[5.25rem] text-white">
        <Image alt="Motos eléctricas KIMI Delivery X1 para operaciones comerciales de reparto" className="absolute inset-0 h-full w-full object-cover object-[58%_center]" fill priority sizes="100vw" src={`${assetRoot}/01_Hero/KIMI_Delivery_X1_Hero_V1.webp`} unoptimized />
        <div className="absolute inset-0 bg-black/45 [background:linear-gradient(90deg,rgba(0,0,0,.82)_0%,rgba(0,0,0,.56)_42%,rgba(0,0,0,.08)_78%)]" />
        <Container className="relative flex min-h-[calc(46rem-5.25rem)] items-end pb-16 pt-20 sm:pb-20 lg:items-center lg:pb-0">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Soluciones para flotas de reparto</p>
            <h1 className="mt-6 text-[length:var(--text-display)] font-semibold leading-[.96] tracking-[-0.055em]">Motos Eléctricas para Reparto y Flotas Comerciales</h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/68 sm:text-xl">Plataformas configurables para operaciones de última milla y flotas comerciales, evaluadas según las rutas, la carga y el entorno operativo de cada proyecto.</p>
            <div className="mt-9 flex flex-wrap gap-4"><ButtonLink href="/solutions/delivery-fleet#fleet-rfq" size="large">Solicitar propuesta para flota — formulario en inglés</ButtonLink><ButtonLink href="/es/productos/delivery-x1" size="large" variant="secondary">Ver Delivery X1</ButtonLink></div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-[var(--space-section)]">
        <Container>
          <SectionIntro description="Las operaciones de reparto varían según la densidad de las rutas, el perfil de carga, las horas de trabajo y los requisitos locales. KIMI aborda cada proyecto de flota a partir del caso operativo, no como un paquete fijo." eyebrow="Diseñada alrededor de la operación" title="Una plataforma práctica para rutas de trabajo." />
          <div className="mt-14 grid border-l border-t border-kimi-black/15 md:grid-cols-2">
            {capabilities.map(([title, description], index) => <article className="border-b border-r border-kimi-black/15 p-7 sm:p-10" key={title}><span className="text-xs font-semibold tracking-[0.18em] text-kimi-green">0{index + 1}</span><h2 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">{title}</h2><p className="mt-4 max-w-md leading-7 text-kimi-black/58">{description}</p></article>)}
          </div>
        </Container>
      </section>

      <section className="bg-[#e9e9e6] py-[var(--space-section)]">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
          <div className="overflow-hidden bg-white"><Image alt="Vista lateral de la moto eléctrica para reparto KIMI Delivery X1" className="h-auto w-full" height={1122} sizes="(min-width:1024px) 58vw, 100vw" src={`${assetRoot}/02_Product/KIMI_Delivery_X1_Side_View_V1.webp`} unoptimized width={1402} /></div>
          <div className="max-w-xl"><p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Plataforma Delivery X1</p><h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em]">Una base vehicular desarrollada para el trabajo de reparto.</h2><p className="mt-7 text-[length:var(--text-lead)] leading-relaxed text-kimi-black/58">Delivery X1 ofrece una plataforma comercial para evaluar la configuración de una flota de motos eléctricas, los requisitos de carga y la presentación de marca. El equipamiento final está sujeto a la plataforma seleccionada y a los requisitos del proyecto.</p><Link className="mt-8 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-kimi-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kimi-green" href="/es/productos/delivery-x1">Ver Delivery X1 <span aria-hidden="true" className="h-px w-10 bg-kimi-green" /></Link></div>
        </Container>
      </section>

      <section className="bg-kimi-black py-[var(--space-section)] text-white">
        <Container className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Evaluación de flota</p><h2 className="mt-5 max-w-4xl text-[length:var(--text-heading)] font-semibold leading-[1.01] tracking-[-0.05em]">Defina su proyecto de movilidad eléctrica para reparto.</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/55">Comparta las condiciones operativas básicas para analizar un enfoque de vehículo y suministro sujeto al proyecto.</p></div>
          <ButtonLink className="!bg-kimi-green !text-kimi-black hover:!bg-white" href="/solutions/delivery-fleet#fleet-rfq" size="large" variant="primary">Solicitar propuesta para flota — formulario en inglés</ButtonLink>
        </Container>
      </section>
    </main>
  );
}
