import Image from "next/image";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";

const assetRoot = "/images/products/Utility/X1";

const specifications = [
  { label: "Motor Power", value: "3000W" },
  { label: "Battery System", value: "72V Battery System" },
  { label: "Top Speed", value: "Up to 85 km/h" },
  { label: "Braking", value: "Front & Rear Disc Brakes" },
  { label: "Wheels", value: "18-inch Front / 17-inch Rear" },
  { label: "Cargo System", value: "Modular Rear Platform" },
] as const;

export default function UtilityX1Showcase() {
  return (
    <div className="utility-x1-page overflow-x-clip">
      <section
        aria-labelledby="utility-x1-title"
        className="relative mt-[5.25rem] overflow-hidden bg-[#111719]"
        id="overview"
      >
        <div className="relative mx-auto max-w-[104.5rem] lg:h-[clamp(36rem,calc(100svh-5.25rem),58.8125rem)]">
          <Image
            alt="KIMI Utility X1 heavy-duty electric utility motorcycle"
            className="h-auto w-full object-contain lg:absolute lg:inset-0 lg:h-full"
            height={941}
            priority
            sizes="100vw"
            src={`${assetRoot}/01_Hero/utility-x1-hero.png`}
            width={1672}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden lg:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(5, 8, 10, 0.58) 0%, rgba(5, 8, 10, 0.3) 22%, rgba(5, 8, 10, 0.06) 40%, rgba(5, 8, 10, 0) 54%)",
            }}
          />
          <div className="bg-[#111719] px-[var(--page-gutter)] py-9 text-white lg:absolute lg:inset-0 lg:bg-transparent lg:px-0 lg:py-12">
            <div className="mx-auto w-full max-w-[25rem] lg:absolute lg:left-[clamp(40px,6vw,96px)] lg:top-1/2 lg:mx-0 lg:max-w-[320px] lg:-translate-y-1/2">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-kimi-green">
                Heavy-duty electric utility motorcycle
              </p>
              <h1
                className="mt-5 whitespace-nowrap text-[clamp(3rem,13vw,5.25rem)] font-semibold leading-[0.92] tracking-[-0.06em] lg:text-[clamp(2.75rem,4.5vw,4.75rem)]"
                id="utility-x1-title"
              >
                UTILITY X1
              </h1>
              <p className="mt-6 text-sm font-semibold uppercase leading-relaxed tracking-[0.18em] text-white/72 sm:text-base">
                Built to carry the work.
              </p>
              <p className="mt-10 border-l-2 border-kimi-green pl-5 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                3000W <span className="text-white/52">RATED POWER</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Utility X1 specifications" className="bg-kimi-black py-10 text-white sm:py-12" id="specifications">
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
            *Specifications may vary by market and configuration.
          </p>
        </Container>
      </section>

      <section className="bg-[#f2f2f0] py-20 lg:pb-0 lg:pt-24 xl:pt-28" id="platform">
        <Container>
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">The utility platform</p>
            <h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em]">
              Built for equipment, routes and real work.
            </h2>
            <p className="mt-7 max-w-3xl text-[length:var(--text-lead)] leading-relaxed text-kimi-black/58">
              Utility X1 combines a durable motorcycle-format chassis, large wheels and a modular rear platform for demanding daily operations.
            </p>
          </div>
          <div className="mt-12 overflow-hidden bg-[#e8e5e2] sm:mt-16">
            <Image
              alt="Side profile of the KIMI Utility X1"
              className="h-auto w-full"
              height={1024}
              sizes="(min-width: 1280px) 1280px, 100vw"
              src={`${assetRoot}/02_Product/utility-x1-side-profile.png`}
              width={1536}
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:pb-24 lg:pt-12 xl:pb-28" id="modular-cargo">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.12fr_.88fr] lg:gap-16 xl:gap-20">
          <div className="overflow-hidden bg-[#ececea]">
            <Image
              alt="Utility X1 modular rear cargo platform detail"
              className="h-auto w-full"
              height={1086}
              sizes="(min-width: 1024px) 56vw, 100vw"
              src={`${assetRoot}/03_Details/utility-x1-cargo-rack-detail.png`}
              width={1448}
            />
          </div>
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Modular cargo</p>
            <h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em]">
              One platform. Different jobs.
            </h2>
            <p className="mt-7 text-[length:var(--text-lead)] leading-relaxed text-kimi-black/58">
              The extended steel rack supports removable work cases, service equipment and market-specific cargo solutions.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-kimi-black py-20 text-white lg:pb-12 lg:pt-24 xl:pt-28" id="work-ready-chassis">
        <Container className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Work-ready chassis</p>
            <h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em]">
              Stable control under working loads.
            </h2>
          </div>
          <p className="max-w-2xl text-[length:var(--text-lead)] leading-relaxed text-white/55">
            Large wheels, front and rear disc brakes and dual rear suspension support predictable handling across changing routes.
          </p>
        </Container>
      </section>

      <section className="bg-[#111820] text-white" id="field-service">
        <div className="relative hidden lg:block">
          <Image
            alt="KIMI Utility X1 configured for a field service route"
            className="h-auto min-h-[32rem] w-full object-contain"
            height={941}
            sizes="100vw"
            src={`${assetRoot}/04_Scenes/utility-x1-service-route.png`}
            width={1672}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/62 via-black/18 to-transparent" />
          <Container className="absolute inset-0 flex items-center justify-end">
            <div className="w-[42%] max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Field service</p>
              <h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em]">
                Ready where the work takes you.
              </h2>
            </div>
          </Container>
        </div>
        <div className="lg:hidden">
          <Image
            alt="KIMI Utility X1 configured for a field service route"
            className="h-auto w-full"
            height={941}
            sizes="100vw"
            src={`${assetRoot}/04_Scenes/utility-x1-service-route.png`}
            width={1672}
          />
          <Container className="py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Field service</p>
            <h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.05em]">
              Ready where the work takes you.
            </h2>
          </Container>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#15191b] py-[var(--space-section)] text-white" id="dealer-inquiry">
        <Container className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Dealer inquiry</p>
            <h2 className="mt-5 max-w-4xl text-[length:var(--text-heading)] font-semibold leading-[1.01] tracking-[-0.05em]">
              Bring Utility X1 to your operation.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/55">
              Connect with KIMI Mobility about distribution, fleet deployment and commercial configurations.
            </p>
          </div>
          <ButtonLink className="w-full !bg-kimi-green !text-kimi-black hover:!bg-white sm:w-auto" href="/contact" size="large">
            Become a Partner
          </ButtonLink>
        </Container>
      </section>
    </div>
  );
}
