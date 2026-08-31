import Image from "next/image";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";

const assetRoot = "/images/products/Urban/X1";

const specifications = [
  { label: "Motor Power", value: "1200W" },
  { label: "Battery System", value: "72V Battery System" },
  { label: "Driving Range", value: "Up to 80 km*" },
  { label: "Top Speed", value: "Up to 65 km/h" },
  { label: "Braking", value: "Front & Rear Disc Brakes" },
  { label: "Wheels", value: "12-inch Tubeless Tires" },
] as const;

type ProductImageProps = {
  alt: string;
  src: string;
  className?: string;
};

function ProductImage({ alt, src, className = "" }: ProductImageProps) {
  return (
    <Image
      alt={alt}
      className={`h-auto w-full ${className}`}
      height={941}
      loading="lazy"
      sizes="(min-width: 1280px) 1280px, 100vw"
      src={src}
      unoptimized
      width={1672}
    />
  );
}

export default function UrbanX1Showcase() {
  return (
    <div className="urban-x1-page overflow-x-clip">
      <style>{`
        body:has(.urban-x1-page) header .header-quote-cta {
          background: #111111 !important;
          color: #ffffff !important;
          opacity: 1 !important;
        }
        body:has(.urban-x1-page) header .header-quote-cta:hover {
          background: #00b894 !important;
          color: #111111 !important;
        }
        body:has(.urban-x1-page) header .header-quote-cta:focus-visible {
          outline: 2px solid #00b894 !important;
          outline-offset: 4px;
        }
      `}</style>
      <section
        aria-labelledby="urban-x1-title"
        className="relative mt-[5.25rem] overflow-hidden bg-[#d9d8d3]"
        id="overview"
      >
        <div className="relative mx-auto max-w-[104.5rem] lg:h-[clamp(36rem,calc(100svh-5.25rem),58.8125rem)]">
          <Image
            alt="Graphite-gray KIMI Urban X1 electric scooter in a modern city setting"
            className="h-auto w-full object-contain lg:absolute lg:inset-0 lg:h-full lg:object-cover lg:object-[58%_center]"
            height={941}
            fetchPriority="high"
            priority
            sizes="100vw"
            src={`${assetRoot}/01_Hero/urban-x1-hero-m3-direction-v2.webp`}
            unoptimized
            width={1672}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden lg:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(5, 8, 10, 0.82) 0%, rgba(5, 8, 10, 0.58) 20%, rgba(5, 8, 10, 0.18) 38%, rgba(5, 8, 10, 0) 55%)",
            }}
          />
          <div className="bg-[#111719] px-[var(--page-gutter)] py-9 text-white lg:absolute lg:inset-0 lg:bg-transparent lg:px-0 lg:py-12">
            <div className="mx-auto w-full max-w-[25rem] lg:absolute lg:left-[clamp(40px,6vw,96px)] lg:top-1/2 lg:mx-0 lg:max-w-[320px] lg:-translate-y-1/2">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-kimi-green">
                Urban electric scooter
              </p>
              <h1
                className="mt-5 whitespace-nowrap text-[clamp(3rem,5vw,5.25rem)] font-semibold leading-[0.92] tracking-[-0.06em] lg:text-[clamp(2.75rem,4.5vw,4.75rem)]"
                id="urban-x1-title"
              >
                Urban X1 Electric Scooter
              </h1>
              <p className="mt-6 max-w-sm text-sm font-semibold uppercase leading-relaxed tracking-[0.18em] text-white/72 sm:text-base">
                Built for everyday city movement.
              </p>
              <p className="mt-10 border-l-2 border-kimi-green pl-5 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                UP TO 80 KM <span className="text-white/52">RANGE</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Urban X1 specifications" className="bg-kimi-black py-10 text-white sm:py-12" id="specifications">
        <Container>
          <div className="grid grid-cols-2 border-l border-t border-white/15 lg:grid-cols-6">
            {specifications.map((specification) => (
              <div className="min-h-32 border-b border-r border-white/15 p-5 sm:p-6" key={specification.label}>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/42">{specification.label}</p>
                <p className="mt-4 text-base font-semibold leading-snug tracking-[-0.025em] sm:text-lg">{specification.value}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 max-w-3xl text-xs leading-relaxed text-white/42">
            *Range varies by battery configuration, rider weight, road conditions and riding style.
          </p>
        </Container>
      </section>

      <section className="bg-[#f2f2f0] py-20 lg:py-24 xl:py-28" id="platform">
        <Container>
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">The urban platform</p>
            <h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em]">Confident movement for the modern city.</h2>
            <p className="mt-7 max-w-3xl text-[length:var(--text-lead)] leading-relaxed text-kimi-black/58">Urban X1 combines practical proportions, stable handling and everyday comfort in a clean electric platform designed for city travel.</p>
          </div>
          <div className="mt-12 overflow-hidden bg-white sm:mt-16">
            <ProductImage alt="Side profile of the graphite-gray KIMI Urban X1" src={`${assetRoot}/02_Product/urban-x1-side-profile.webp`} />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-24 xl:py-28" id="body-design">
        <Container className="grid items-center gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-16 xl:gap-20">
          <div className="overflow-hidden bg-[#ececea]">
            <ProductImage alt="Rear three-quarter view of the KIMI Urban X1 body design" src={`${assetRoot}/02_Product/urban-x1-rear-three-quarter.webp`} />
          </div>
          <div className="max-w-xl lg:order-first">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Body &amp; design</p>
            <h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em]">A clean, purposeful urban identity.</h2>
            <p className="mt-7 text-[length:var(--text-lead)] leading-relaxed text-kimi-black/58">Graphite-gray bodywork and restrained Electric Green accents create a modern presence that feels composed, capable and distinctly KIMI.</p>
          </div>
        </Container>
      </section>

      <section className="bg-kimi-black py-20 text-white lg:py-24 xl:py-28" id="lighting">
        <Container className="grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-16 xl:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Visibility</p>
            <h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em]">Clear illumination, integrated by design.</h2>
            <p className="mt-8 text-lg font-medium text-white/62">Integrated LED headlight</p>
          </div>
          <div className="overflow-hidden bg-[#191919]">
            <Image alt="Integrated LED headlight on the KIMI Urban X1" className="h-auto w-full" height={1050} loading="lazy" sizes="(min-width: 1280px) 704px, (min-width: 1024px) 55vw, 100vw" src={`${assetRoot}/03_Details/urban-x1-led-headlight.webp`} unoptimized width={1498} />
          </div>
        </Container>
      </section>

      <section className="bg-[#ecece9] py-20 lg:py-24 xl:py-28" id="cockpit">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-16 xl:gap-20">
          <div className="overflow-hidden bg-white"><ProductImage alt="Digital rider display on the KIMI Urban X1" src={`${assetRoot}/03_Details/urban-x1-smart-display.webp`} /></div>
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Rider interface</p>
            <h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em]">Essential information at a glance.</h2>
            <p className="mt-7 text-[length:var(--text-lead)] leading-relaxed text-kimi-black/58">A clear digital display keeps speed, battery status and riding information easy to read throughout the journey.</p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-24 xl:py-28" id="practicality">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Everyday practicality</p>
              <h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em]">Comfort for the ride. Space for the day.</h2>
            </div>
            <p className="max-w-2xl text-[length:var(--text-lead)] leading-relaxed text-kimi-black/58">An extended two-person seat, wide footboard and practical under-seat storage support everyday commuting and daily errands.</p>
          </div>
          <div className="mt-12 overflow-hidden bg-[#efefec] sm:mt-16"><ProductImage alt="KIMI Urban X1 extended seat and open under-seat storage" src={`${assetRoot}/03_Details/urban-x1-underseat-storage.webp`} /></div>
        </Container>
      </section>

      <section className="bg-[#e8e8e5] py-20 lg:py-24 xl:py-28" id="ride-control">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-16 xl:gap-20">
          <div className="overflow-hidden bg-white">
            <Image alt="Rear disc brake and suspension on the KIMI Urban X1" className="h-auto w-full" height={1086} loading="lazy" sizes="(min-width: 1280px) 704px, (min-width: 1024px) 55vw, 100vw" src={`${assetRoot}/03_Details/urban-x1-rear-brake-suspension.webp`} unoptimized width={1448} />
          </div>
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Ride control</p>
            <h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em]">Stable control for changing city streets.</h2>
            <p className="mt-7 text-[length:var(--text-lead)] leading-relaxed text-kimi-black/58">Wide 12-inch tires, front and rear disc brakes, and a balanced suspension layout support predictable everyday handling.</p>
          </div>
        </Container>
      </section>

      <SceneSection alt="KIMI Urban X1 being ridden through a city in daylight" eyebrow="City commuting" heading="Move through the city with confidence." id="city-commuting" image="urban-x1-city-ride.webp" mobilePositionClass="object-[38%_center]" />
      <SceneSection alt="KIMI Urban X1 in a rainy city at night" eyebrow="Everyday visibility" heading="Ready when the city changes." id="everyday-visibility" image="urban-x1-rain-night.webp" mobilePositionClass="object-[30%_center]" />

      <section className="border-t border-white/10 bg-[#15191b] py-[var(--space-section)] text-white" id="dealer-inquiry">
        <Container className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Dealer inquiry</p>
            <h2 className="mt-5 max-w-4xl text-[length:var(--text-heading)] font-semibold leading-[1.01] tracking-[-0.05em]">Bring Urban X1 to your market.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/55">Connect with KIMI Mobility about distribution, fleet deployment and commercial partnerships.</p>
          </div>
          <ButtonLink className="w-full !bg-kimi-green !text-kimi-black hover:!bg-white sm:w-auto" href="/contact" size="large">Become a Dealer</ButtonLink>
        </Container>
      </section>
    </div>
  );
}

type SceneSectionProps = {
  alt: string;
  eyebrow: string;
  heading: string;
  id: string;
  image: string;
  mobilePositionClass: string;
};

function SceneSection({ alt, eyebrow, heading, id, image, mobilePositionClass }: SceneSectionProps) {
  return (
    <section className="relative scroll-mt-[5.25rem] overflow-hidden bg-[#111820] text-white" id={id}>
      <Image
        alt={alt}
        className={`h-[32rem] w-full object-cover sm:h-auto sm:min-h-[30rem] sm:object-cover sm:object-center ${mobilePositionClass}`}
        height={941}
        loading="lazy"
        sizes="100vw"
        src={`${assetRoot}/04_Scenes/${image}`}
        unoptimized
        width={1672}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/10 to-transparent sm:bg-gradient-to-l sm:from-black/72 sm:via-black/18 sm:to-transparent" />
      <Container className="absolute inset-x-0 bottom-0 px-[clamp(1.5rem,5vw,4.5rem)] pb-[clamp(1.5rem,5vw,4.5rem)]">
        <div className="max-w-2xl sm:ml-auto sm:w-[48%]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">{eyebrow}</p>
          <h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em]">{heading}</h2>
        </div>
      </Container>
    </section>
  );
}
