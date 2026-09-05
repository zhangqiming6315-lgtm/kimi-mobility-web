import Image from "next/image";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";

const assetRoot = "/images/products/Delivery/X1";

const specifications = [
  { label: "Motor Power", value: "3000W" },
  { label: "Battery System", value: "72V Lithium Battery" },
  { label: "Driving Range", value: "Up to 200 km*" },
  { label: "Top Speed", value: "Up to 85 km/h" },
  { label: "Braking", value: "Front & Rear Disc Brakes" },
  { label: "Configuration", value: "Single / Dual Battery Options" },
] as const;

type FeatureImageProps = {
  alt: string;
  src: string;
  priority?: boolean;
};

function FeatureImage({ alt, src, priority = false }: FeatureImageProps) {
  return (
    <Image
      alt={alt}
      className="h-auto w-full"
      height={1122}
      loading={priority ? "eager" : "lazy"}
      priority={priority}
      sizes="(min-width: 1280px) 1280px, 100vw"
      src={src}
      unoptimized
      width={1402}
    />
  );
}

export default function DeliveryX1Showcase() {
  return (
    <div className="delivery-x1-page">
      <style>{`
        body:has(.delivery-x1-page) header .header-quote-cta {
          background: #111111 !important;
          color: #ffffff !important;
          opacity: 1 !important;
        }
        body:has(.delivery-x1-page) header .header-quote-cta:hover {
          background: #00b894 !important;
          color: #111111 !important;
        }
        body:has(.delivery-x1-page) header .header-quote-cta:focus-visible {
          outline: 2px solid #00b894 !important;
          outline-offset: 4px;
        }
      `}</style>
      <section className="scroll-mt-[5.25rem] bg-[#101923] pt-[5.25rem]" aria-labelledby="delivery-x1-title" id="overview">
        <h1 className="sr-only" id="delivery-x1-title">Delivery X1 Electric Delivery Motorcycle</h1>
        <Container className="flex max-w-[90rem] items-center px-0 sm:min-h-[calc(100svh-5.25rem)] sm:px-[var(--page-gutter)] sm:py-6 lg:py-8">
          <Image
            alt="KIMI Delivery X1 electric delivery motorcycle on an urban road"
            className="h-auto w-full object-contain object-[52%_center] sm:object-center"
            height={1123}
            fetchPriority="high"
            priority
            sizes="(min-width: 1440px) 1401px, 100vw"
            src={`${assetRoot}/01_Hero/KIMI_Delivery_X1_Hero_V1.webp`}
            unoptimized
            width={1401}
          />
        </Container>
      </section>

      <section className="scroll-mt-[5.25rem] bg-kimi-black py-10 text-white sm:py-12" aria-label="Delivery X1 specifications" id="specifications">
        <Container>
          <div className="grid grid-cols-2 border-l border-t border-white/15 lg:grid-cols-6">
            {specifications.map((specification) => (
              <div className="min-h-32 border-b border-r border-white/15 p-5 sm:p-6" key={specification.label}>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/42">
                  {specification.label}
                </p>
                <p className="mt-4 text-base font-semibold leading-snug tracking-[-0.025em] sm:text-lg">
                  {specification.value}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs leading-relaxed text-white/42">
            *Range varies by battery configuration, payload, road conditions and riding style.
          </p>
        </Container>
      </section>

      <section className="scroll-mt-[5.25rem] bg-[#f2f2f0] py-[var(--space-section)]" id="platform">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">The platform</p>
            <h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em] text-kimi-black">
              Purpose-built for daily delivery.
            </h2>
          </div>
          <div className="mt-12 overflow-hidden bg-white sm:mt-16">
            <FeatureImage alt="Side view of the graphite-gray KIMI Delivery X1" src={`${assetRoot}/02_Product/KIMI_Delivery_X1_Side_View_V1.webp`} />
          </div>
        </Container>
      </section>

      <section className="scroll-mt-[5.25rem] bg-white py-[var(--space-section)]" id="body-finish">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="overflow-hidden bg-[#ececea]">
            <FeatureImage alt="Graphite-gray body finish and KIMI branding detail" src={`${assetRoot}/03_Details/KIMI_Delivery_X1_Body_Branding_V1.webp`} />
          </div>
          <div className="max-w-xl lg:order-first">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Body &amp; finish</p>
            <h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em]">A focused industrial identity.</h2>
            <p className="mt-7 text-[length:var(--text-lead)] leading-relaxed text-kimi-black/58">
              Graphite-gray bodywork and restrained Electric Green accents give Delivery X1 a clear, professional presence.
            </p>
          </div>
        </Container>
      </section>

      <section className="scroll-mt-[5.25rem] bg-kimi-black py-[var(--space-section)] text-white" id="lighting">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Visibility</p>
          <h2 className="mt-5 max-w-3xl text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em]">Lighting designed into the vehicle.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 sm:mt-16">
            <article className="bg-[#191919]">
              <div className="aspect-[5/3] overflow-hidden">
                <Image
                  alt="Delivery X1 LED headlight detail"
                  className="h-full w-full object-cover object-top"
                  height={600}
                  loading="lazy"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  src={`${assetRoot}/03_Details/KIMI_Delivery_X1_LED_Headlight.jpg`}
                  unoptimized
                  width={750}
                />
              </div>
              <h3 className="p-6 text-xl font-semibold tracking-[-0.03em] sm:p-8">LED headlight</h3>
            </article>
            <article className="bg-[#191919]">
              <FeatureImage alt="Delivery X1 rear lighting and protection detail" src={`${assetRoot}/03_Details/KIMI_Delivery_X1_Rear_Lighting.jpg`} />
              <h3 className="p-6 text-xl font-semibold tracking-[-0.03em] sm:p-8">Rear lighting &amp; protection</h3>
            </article>
          </div>
        </Container>
      </section>

      <section className="scroll-mt-[5.25rem] bg-[#e9e9e6] py-[var(--space-section)]" id="seat-rack">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
          <div className="overflow-hidden bg-white">
            <FeatureImage alt="Delivery X1 extended seat and heavy-duty rear rack" src={`${assetRoot}/03_Details/KIMI_Delivery_X1_Seat_Rack_V1.webp`} />
          </div>
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Work-ready design</p>
            <h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em]">Space for the rider. Structure for the route.</h2>
            <p className="mt-7 text-[length:var(--text-lead)] leading-relaxed text-kimi-black/58">
              An extended seat and heavy-duty rear rack support the practical rhythm of commercial delivery work.
            </p>
          </div>
        </Container>
      </section>

      <section className="scroll-mt-[5.25rem] bg-white py-[var(--space-section)]" id="ride-system">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Ride system</p>
              <h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em]">Power and control for working routes.</h2>
            </div>
            <p className="max-w-2xl text-[length:var(--text-lead)] leading-relaxed text-kimi-black/58">
              The motor and rear suspension are integrated around responsive everyday operation.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 sm:mt-16">
            <article className="bg-[#eeeeeb]">
              <FeatureImage alt="Delivery X1 motor detail" src={`${assetRoot}/03_Details/KIMI_Delivery_X1_Motor.jpg`} />
              <h3 className="p-6 text-xl font-semibold tracking-[-0.03em] sm:p-8">Electric motor</h3>
            </article>
            <article className="bg-[#eeeeeb]">
              <FeatureImage alt="Delivery X1 rear suspension detail" src={`${assetRoot}/03_Details/KIMI_Delivery_X1_Rear_Shock.jpg`} />
              <h3 className="p-6 text-xl font-semibold tracking-[-0.03em] sm:p-8">Rear suspension</h3>
            </article>
          </div>
        </Container>
      </section>

      <section className="relative scroll-mt-[5.25rem] overflow-hidden bg-[#111820] text-white" id="all-weather">
        <Image
          alt="KIMI Delivery X1 operating in wet-weather delivery conditions"
          className="h-auto min-h-[32rem] w-full object-cover object-center"
          height={1122}
          loading="lazy"
          sizes="100vw"
          src={`${assetRoot}/04_Scenes/KIMI_Delivery_X1_All_Weather_V1.webp`}
          unoptimized
          width={1402}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/76 via-black/28 to-transparent" />
        <Container className="absolute inset-x-0 bottom-0 pb-10 sm:pb-16 lg:pb-20">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">All-weather delivery</p>
            <h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em]">Ready for changing conditions.</h2>
          </div>
        </Container>
      </section>

      <section className="scroll-mt-[5.25rem] border-t border-white/10 bg-[#15191b] py-[var(--space-section)] text-white" id="dealer-inquiry">
        <Container className="grid gap-10 xl:grid-cols-[1fr_auto] xl:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Dealer inquiry</p>
            <h2 className="mt-5 max-w-4xl text-[length:var(--text-heading)] font-semibold leading-[1.01] tracking-[-0.05em]">Bring Delivery X1 to your market.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/55">Connect with KIMI Mobility about distribution, fleet deployment, and commercial partnerships.</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap xl:justify-end">
            <ButtonLink className="whitespace-nowrap !bg-kimi-green !text-kimi-black hover:!bg-white focus-visible:!outline-kimi-green" href="/solutions/delivery-fleet#fleet-rfq" size="large" variant="primary">Request a Fleet Proposal</ButtonLink>
            <ButtonLink className="whitespace-nowrap" href="/partners/distributors#distributor-rfq" size="large" variant="secondary">Discuss Distribution</ButtonLink>
          </div>
        </Container>
      </section>
    </div>
  );
}
