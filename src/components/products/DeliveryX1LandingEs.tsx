import Image from "next/image";
import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";

const assetRoot = "/images/products/Delivery/X1";

const specifications = [
  { label: "Potencia del motor", value: "3000W" },
  { label: "Sistema de batería", value: "Batería de litio de 72V" },
  { label: "Autonomía", value: "Hasta 200 km*" },
  { label: "Velocidad máxima", value: "Hasta 85 km/h" },
  { label: "Frenado", value: "Frenos de disco delanteros y traseros" },
  { label: "Configuración", value: "Opciones de una o dos baterías" },
] as const;

type FeatureImageProps = { alt: string; src: string };

function FeatureImage({ alt, src }: FeatureImageProps) {
  return <Image alt={alt} className="h-auto w-full" height={1122} loading="lazy" sizes="(min-width: 1280px) 1280px, 100vw" src={src} unoptimized width={1402} />;
}

export default function DeliveryX1LandingEs() {
  return (
    <main className="delivery-x1-page">
      <style>{`
        body:has(.delivery-x1-page) header .header-quote-cta { background: #111111 !important; color: #ffffff !important; opacity: 1 !important; }
        body:has(.delivery-x1-page) header .header-quote-cta:hover { background: #00b894 !important; color: #111111 !important; }
        body:has(.delivery-x1-page) header .header-quote-cta:focus-visible { outline: 2px solid #00b894 !important; outline-offset: 4px; }
      `}</style>
      <section className="relative min-h-[46rem] overflow-hidden bg-[#101923] pt-[5.25rem] text-white" aria-labelledby="delivery-x1-title" id="overview">
        <Image alt="Moto eléctrica para reparto KIMI Delivery X1 en una vía urbana" className="absolute inset-0 h-full w-full object-cover object-[52%_center]" fill fetchPriority="high" priority sizes="100vw" src={`${assetRoot}/01_Hero/KIMI_Delivery_X1_Hero_V1.webp`} unoptimized />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/38 to-transparent" />
        <Container className="relative flex min-h-[calc(46rem-5.25rem)] items-end pb-16 pt-20 sm:pb-20 lg:items-center lg:pb-0">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Movilidad eléctrica comercial</p>
            <h1 className="mt-6 text-[length:var(--text-display)] font-semibold leading-[.96] tracking-[-0.055em]" id="delivery-x1-title">Delivery X1 Moto Eléctrica para Reparto</h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/68 sm:text-xl">Una plataforma para operaciones de última milla, evaluación de flotas y proyectos de distribución e importación.</p>
          </div>
        </Container>
      </section>

      <section className="bg-kimi-black py-10 text-white sm:py-12" aria-label="Especificaciones de Delivery X1" id="specifications">
        <Container>
          <div className="grid grid-cols-2 border-l border-t border-white/15 lg:grid-cols-6">
            {specifications.map((specification) => <div className="min-h-32 border-b border-r border-white/15 p-5 sm:p-6" key={specification.label}><p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/42">{specification.label}</p><p className="mt-4 text-base font-semibold leading-snug tracking-[-0.025em] sm:text-lg">{specification.value}</p></div>)}
          </div>
          <p className="mt-5 text-xs leading-relaxed text-white/42">*La autonomía varía según la configuración de la batería, la carga, las condiciones de la vía y el estilo de conducción.</p>
        </Container>
      </section>

      <section className="bg-[#f2f2f0] py-[var(--space-section)]" id="platform">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">La plataforma</p>
          <h2 className="mt-5 max-w-3xl text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em]">Diseñada para el trabajo diario de reparto.</h2>
          <p className="mt-7 max-w-3xl text-[length:var(--text-lead)] leading-relaxed text-kimi-black/58">Delivery X1 ofrece una base para que operadores de reparto evalúen rutas, uso diario y configuración dentro de un proyecto de movilidad eléctrica comercial.</p>
          <div className="mt-12 overflow-hidden bg-white sm:mt-16"><FeatureImage alt="Vista lateral de la moto eléctrica KIMI Delivery X1" src={`${assetRoot}/02_Product/KIMI_Delivery_X1_Side_View_V1.webp`} /></div>
        </Container>
      </section>

      <section className="bg-white py-[var(--space-section)]" id="cargo">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
          <div className="overflow-hidden bg-[#ececea]"><FeatureImage alt="Asiento extendido y parrilla trasera de Delivery X1" src={`${assetRoot}/03_Details/KIMI_Delivery_X1_Seat_Rack_V1.webp`} /></div>
          <div className="max-w-xl"><p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Diseño orientado al trabajo</p><h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em]">Espacio para el conductor. Estructura para la ruta.</h2><p className="mt-7 text-[length:var(--text-lead)] leading-relaxed text-kimi-black/58">El asiento extendido y la parrilla trasera de servicio pesado apoyan las necesidades prácticas del reparto comercial.</p></div>
        </Container>
      </section>

      <section className="bg-kimi-black py-[var(--space-section)] text-white" id="operation">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Operación de última milla</p>
          <h2 className="mt-5 max-w-3xl text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em]">Una moto eléctrica de reparto para evaluación comercial.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 sm:mt-16"><article className="bg-[#191919]"><FeatureImage alt="Detalle del motor eléctrico de Delivery X1" src={`${assetRoot}/03_Details/KIMI_Delivery_X1_Motor.jpg`} /><h3 className="p-6 text-xl font-semibold sm:p-8">Motor eléctrico</h3></article><article className="bg-[#191919]"><FeatureImage alt="Detalle de la suspensión trasera de Delivery X1" src={`${assetRoot}/03_Details/KIMI_Delivery_X1_Rear_Shock.jpg`} /><h3 className="p-6 text-xl font-semibold sm:p-8">Suspensión trasera</h3></article></div>
        </Container>
      </section>

      <section className="bg-[#f2f2f0] py-[var(--space-section)]" id="evaluation">
        <Container className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Evaluación del proyecto</p><h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em]">Defina el caso operativo antes de seleccionar una configuración.</h2></div>
          <div className="space-y-6 text-[length:var(--text-lead)] leading-relaxed text-kimi-black/58"><p>Las rutas, la carga prevista, el plan de recarga y el entorno de trabajo forman parte de la evaluación de una flota eléctrica de reparto.</p><p>La disponibilidad de configuraciones y los términos comerciales se revisan para cada proyecto con operadores, distribuidores e importadores.</p><Link className="inline-flex font-semibold text-kimi-black underline decoration-kimi-green decoration-2 underline-offset-4" href="/es/mercados/colombia">Conocer el enfoque para proyectos en Colombia</Link></div>
        </Container>
      </section>

      <section className="bg-[#15191b] py-[var(--space-section)] text-white" id="fleet-inquiry">
        <Container className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Consulta para flotas</p><h2 className="mt-5 max-w-4xl text-[length:var(--text-heading)] font-semibold leading-[1.01] tracking-[-0.05em]">Evalúe Delivery X1 para su operación.</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/55">Comparta las rutas, el uso previsto y las necesidades del proyecto con el equipo de KIMI Mobility.</p></div><ButtonLink className="!bg-kimi-green !text-kimi-black hover:!bg-white" href="/solutions/delivery-fleet#fleet-rfq" size="large" variant="primary">Consultar una flota — formulario en inglés</ButtonLink></Container>
      </section>
    </main>
  );
}
