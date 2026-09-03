import Image from "next/image";
import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";

const applications = [
  ["Reparto de última milla", "Evaluación de plataformas según las rutas de reparto, las necesidades de carga y los requisitos operativos diarios definidos."],
  ["Movilidad comercial urbana", "Opciones de motos eléctricas para empresas que evalúan aplicaciones prácticas de transporte urbano."],
  ["Servicio y operaciones en campo", "Plataformas orientadas al trabajo para equipos que evalúan vehículos según sus herramientas, equipos y rutas."],
  ["Distribución en el mercado", "Planificación de producto y suministro para distribuidores e importadores colombianos que desarrollan un programa comercial."],
] as const;

const platforms = [
  { name: "Delivery X1", use: "Operaciones de reparto", description: "Una plataforma comercial para evaluar reparto por rutas, configuración de carga e identidad de flota.", href: "/products/delivery-x1", image: "/images/products/Delivery/X1/02_Product/KIMI_Delivery_X1_Product_Card.webp", alt: "Plataforma de moto eléctrica comercial KIMI Delivery X1" },
  { name: "Urban X1", use: "Movilidad urbana", description: "Una plataforma de moto eléctrica para empresas que consideran aplicaciones de movilidad comercial urbana.", href: "/products/urban-x1", image: "/images/products/Urban/X1/02_Product/urban-x1-product-card.webp", alt: "Plataforma de moto eléctrica KIMI Urban X1" },
  { name: "Utility X1", use: "Trabajo utilitario", description: "Una plataforma orientada a tareas de servicio, campo y otros requisitos operativos.", href: "/products/utility-x1", image: "/images/products/Utility/X1/02_Product/utility-x1-product-card.webp", alt: "Plataforma de moto eléctrica comercial KIMI Utility X1" },
] as const;

const evaluationPoints = [
  ["Aplicación comercial", "Definir el trabajo, los usuarios y los objetivos operativos que debe apoyar el vehículo."],
  ["Rutas y operación diaria", "Revisar las rutas previstas, la distancia diaria, el plan de carga y el horario operativo."],
  ["Configuración del vehículo", "Evaluar las necesidades de carga, identidad de marca y equipamiento frente a la plataforma seleccionada."],
  ["Requisitos locales", "Confirmar los requisitos colombianos de regulación, homologación, certificación, registro, importación y circulación vial."],
  ["Planificación del suministro", "Analizar cantidades, tiempos, documentación y logística según las condiciones del proyecto."],
  ["Revisión comercial", "Confirmar la disponibilidad de configuración y los términos comerciales para el programa específico."],
] as const;

const processSteps = [
  ["Definición del proyecto en Colombia", "Compartir el canal comercial previsto, la aplicación y los requisitos del negocio."],
  ["Evaluación de plataforma", "Evaluar una plataforma KIMI y su configuración disponible frente al caso operativo."],
  ["Revisión de requisitos locales", "El comprador o importador confirma los requisitos aplicables con profesionales locales debidamente calificados."],
  ["Planificación del proyecto", "Desarrollar planes comerciales, de cantidad, tiempos y logística sujetos a revisión y acuerdo para cada proyecto."],
] as const;

export default function ColombiaLandingEs() {
  return (
    <main>
      <section className="relative min-h-[46rem] overflow-hidden bg-[#101923] pt-[5.25rem] text-white">
        <Image alt="Plataforma de moto eléctrica KIMI para proyectos comerciales dirigidos a Colombia" className="absolute inset-0 h-full w-full object-cover object-[58%_center]" fill priority sizes="100vw" src="/images/products/Delivery/X1/01_Hero/KIMI_Delivery_X1_Hero_V1.webp" unoptimized />
        <div className="absolute inset-0 bg-black/45 [background:linear-gradient(90deg,rgba(0,0,0,.86)_0%,rgba(0,0,0,.62)_46%,rgba(0,0,0,.12)_82%)]" />
        <Container className="relative flex min-h-[calc(46rem-5.25rem)] items-end pb-16 pt-20 sm:pb-20 lg:items-center lg:pb-0">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Proyectos para el mercado colombiano</p>
            <h1 className="mt-6 text-[length:var(--text-display)] font-semibold leading-[.96] tracking-[-0.055em]">Motos Eléctricas para Uso Comercial en Colombia</h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/68 sm:text-xl">KIMI Mobility es un proveedor de movilidad eléctrica comercial con sede en China que ayuda a distribuidores, importadores y operadores de flotas a evaluar plataformas de motos eléctricas para Colombia según cada proyecto.</p>
            <div className="mt-9 flex flex-wrap gap-4"><ButtonLink href="/partners/distributors#distributor-rfq" size="large">Consultar distribución — formulario en inglés</ButtonLink><ButtonLink href="/solutions/delivery-fleet#fleet-rfq" size="large" variant="secondary">Evaluar una flota — formulario en inglés</ButtonLink></div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-[var(--space-section)]">
        <Container className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <SectionIntro eyebrow="Evaluación para uso comercial" title="Comience por las necesidades operativas y del mercado." />
          <div className="space-y-6 text-[length:var(--text-lead)] leading-relaxed text-kimi-black/58">
            <p>Las motos eléctricas en Colombia deben evaluarse a partir de una aplicación comercial definida, el modelo de venta u operación previsto y los requisitos del mercado de destino.</p>
            <p>KIMI puede analizar la selección de plataforma, los requisitos de configuración y la planificación del suministro. La idoneidad para un proyecto particular permanece sujeta a la plataforma seleccionada, la revisión local y los acuerdos comerciales correspondientes.</p>
          </div>
        </Container>
      </section>

      <section className="bg-[#f2f2f0] py-[var(--space-section)]">
        <Container>
          <SectionIntro eyebrow="Dos rutas para compradores" title="Una ruta clara para proyectos dirigidos a Colombia." />
          <div className="mt-14 grid gap-px bg-kimi-black/15 md:grid-cols-2">
            <article className="bg-white p-8 sm:p-11"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-kimi-green">Distribuidores / Importadores</p><h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">Desarrolle un plan de mercado y suministro.</h2><p className="mt-5 leading-7 text-kimi-black/58">Evalúe plataformas de producto, configuraciones disponibles, requisitos de marca y planificación de suministro sujeta al proyecto para un programa de distribución o importación en Colombia.</p><ButtonLink className="mt-8" href="/partners/distributors#distributor-rfq" variant="dark">RFQ para distribuidores — en inglés</ButtonLink></article>
            <article className="bg-white p-8 sm:p-11"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-kimi-green">Operadores de flota / Reparto</p><h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">Defina el caso operativo comercial.</h2><p className="mt-5 leading-7 text-kimi-black/58">Analice rutas, uso diario, necesidades de carga y entorno operativo antes de evaluar una configuración para labores de reparto o flota.</p><ButtonLink className="mt-8" href="/solutions/delivery-fleet#fleet-rfq" variant="dark">RFQ para flotas — en inglés</ButtonLink></article>
          </div>
        </Container>
      </section>

      <section className="bg-kimi-black py-[var(--space-section)] text-white">
        <Container>
          <SectionIntro eyebrow="Aplicaciones comerciales" inverse title="Movilidad eléctrica evaluada según el uso real de cada empresa." />
          <div className="mt-14 grid border-l border-t border-white/15 md:grid-cols-2">
            {applications.map(([title, description], index) => <article className="border-b border-r border-white/15 p-7 sm:p-10" key={title}><span className="text-xs font-semibold tracking-[0.18em] text-kimi-green">{String(index + 1).padStart(2, "0")}</span><h2 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">{title}</h2><p className="mt-4 max-w-md leading-7 text-white/58">{description}</p></article>)}
          </div>
        </Container>
      </section>

      <section className="bg-[#e9e9e6] py-[var(--space-section)]">
        <Container>
          <SectionIntro eyebrow="Selección de plataforma" title="Tres plataformas para distintas prioridades comerciales." />
          <div className="mt-14 grid gap-px bg-kimi-black/15 lg:grid-cols-3">
            {platforms.map((platform) => <Link className="group bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kimi-green" href={platform.href} key={platform.name}><div className="aspect-[4/3] overflow-hidden bg-[#f2f2f0]"><Image alt={platform.alt} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.025]" height={900} loading="lazy" sizes="(min-width:1024px) 33vw, 100vw" src={platform.image} unoptimized width={1200} /></div><div className="p-7 sm:p-8"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-kimi-green">{platform.use}</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">{platform.name}</h2><p className="mt-4 leading-7 text-kimi-black/58">{platform.description}</p><span className="mt-7 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em]">Ver página del producto en inglés <span aria-hidden="true" className="h-px w-10 bg-kimi-green" /></span></div></Link>)}
          </div>
        </Container>
      </section>

      <section className="bg-white py-[var(--space-section)]">
        <Container>
          <SectionIntro eyebrow="Lista de evaluación para Colombia" title="Aspectos por resolver antes de avanzar con un programa comercial." />
          <div className="mt-14 grid border-l border-t border-kimi-black/15 md:grid-cols-2 lg:grid-cols-3">
            {evaluationPoints.map(([title, description]) => <article className="border-b border-r border-kimi-black/15 p-7 sm:p-9" key={title}><h2 className="text-2xl font-semibold tracking-[-0.035em]">{title}</h2><p className="mt-4 leading-7 text-kimi-black/58">{description}</p></article>)}
          </div>
          <p className="mt-8 max-w-5xl border-l-2 border-kimi-green pl-5 text-sm leading-6 text-kimi-black/58">Los requisitos regulatorios, de homologación, certificación, registro, importación y circulación vial aplicables en Colombia deben ser confirmados para el mercado de destino y el proyecto por el comprador o importador, con el apoyo de profesionales locales debidamente calificados.</p>
        </Container>
      </section>

      <section className="bg-[#15191b] py-[var(--space-section)] text-white">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <div className="overflow-hidden bg-[#202426]"><Image alt="Vista lateral de la moto eléctrica comercial KIMI Delivery X1" className="h-auto w-full" height={1122} loading="lazy" sizes="(min-width:1024px) 52vw, 100vw" src="/images/products/Delivery/X1/02_Product/KIMI_Delivery_X1_Side_View_V1.webp" unoptimized width={1402} /></div>
          <div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Suministro B2B de China a Colombia</p><h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em]">Planifique el suministro según los requisitos del destino.</h2><p className="mt-7 text-[length:var(--text-lead)] leading-relaxed text-white/58">KIMI trabaja desde China con distribuidores, importadores y socios de proyectos comerciales internacionales. La disponibilidad de configuraciones, los términos comerciales, las cantidades, los tiempos, la documentación y la logística se revisan para cada proyecto y permanecen sujetos a acuerdo.</p></div>
        </Container>
      </section>

      <section className="bg-[#f2f2f0] py-[var(--space-section)]">
        <Container>
          <SectionIntro eyebrow="Proceso para proyectos en Colombia" title="De la definición del negocio a una planificación sujeta al proyecto." />
          <ol className="mt-14 grid border-l border-t border-kimi-black/15 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(([title, description], index) => <li className="border-b border-r border-kimi-black/15 p-7 sm:p-8" key={title}><span className="text-sm font-semibold tracking-[0.18em] text-kimi-green">{String(index + 1).padStart(2, "0")}</span><h2 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">{title}</h2><p className="mt-4 leading-7 text-kimi-black/58">{description}</p></li>)}
          </ol>
        </Container>
      </section>

      <section className="bg-white py-[var(--space-section)]">
        <Container className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-20">
          <SectionIntro eyebrow="Contexto regional" title="¿Está evaluando mercados más allá de Colombia?" />
          <div><p className="text-[length:var(--text-lead)] leading-relaxed text-kimi-black/58">Consulte el enfoque general de KIMI para proyectos con distribuidores, importadores y flotas comerciales en mercados de América Latina.</p><ButtonLink className="mt-8" href="/markets/latin-america" variant="dark">Ver página de América Latina en inglés</ButtonLink></div>
        </Container>
      </section>

      <section className="bg-kimi-black py-[var(--space-section)] text-white">
        <Container>
          <SectionIntro align="center" eyebrow="Elija la ruta para su proyecto" inverse title="Continúe con el equipo adecuado para su proyecto en Colombia." />
          <div className="mx-auto mt-12 grid max-w-5xl gap-px bg-white/15 md:grid-cols-2">
            <div className="bg-[#15191b] p-8 text-center sm:p-12"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/48">Distribuidor / Importador</p><ButtonLink className="mt-7" href="/partners/distributors#distributor-rfq" size="large">Consultar distribución — formulario en inglés</ButtonLink></div>
            <div className="bg-[#15191b] p-8 text-center sm:p-12"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/48">Operador de flota / Reparto</p><ButtonLink className="mt-7" href="/solutions/delivery-fleet#fleet-rfq" size="large" variant="light">Consultar una flota — formulario en inglés</ButtonLink></div>
          </div>
        </Container>
      </section>
    </main>
  );
}
