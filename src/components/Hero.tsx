import Image from "next/image";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";

type HeroCopyProps = {
  headingLevel?: "h1" | "h2";
};

function HeroCopy({ headingLevel = "h1" }: HeroCopyProps) {
  const Heading = headingLevel;

  return (
    <div className="max-w-[43rem]">
      <p className="mb-7 flex items-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-kimi-green sm:text-xs">
        <span className="h-px w-7 bg-kimi-green" />
        Electric utility mobility
      </p>
      <Heading className="max-w-[41rem] text-[clamp(2rem,10vw,6rem)] font-semibold leading-[0.97] tracking-[-0.05em] lg:text-[clamp(3.5rem,5.8vw,6rem)]">
        <span className="block whitespace-nowrap">Electric Mobility.</span>
        <span className="mt-2.5 block whitespace-nowrap font-medium text-white/66">
          Built for Real Work.
        </span>
      </Heading>
      <p className="mt-7 max-w-[35rem] text-[length:var(--text-lead)] leading-[1.55] text-white/68 sm:mt-8">
        Purpose-built electric vehicles for delivery, urban mobility, and
        commercial operations.
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-3.5">
        <ButtonLink href="/products" size="large">
          Explore Products
        </ButtonLink>
        <ButtonLink href="/contact" size="large" variant="secondary">
          Become a Partner
        </ButtonLink>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#101923] pt-[5.25rem] text-white">
      <div className="min-[1024px]:hidden">
        <div className="relative aspect-[16/9] w-full">
          <Image
            alt="KIMI commercial electric delivery vehicle in a city at night"
            className="object-contain object-center"
            fill
            priority
            sizes="100vw"
            src="/images/hero/hero-main.webp"
          />
        </div>
        <Container className="py-14 sm:py-16">
          <HeroCopy headingLevel="h2" />
        </Container>
      </div>

      <div className="relative hidden min-h-[calc(100svh-5.25rem)] min-[1024px]:flex min-[1200px]:hidden">
        <Image
          alt="KIMI commercial electric delivery vehicle in a city at night"
          className="object-contain object-center"
          fill
          priority
          sizes="100vw"
          src="/images/hero/hero-main.webp"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,12,15,.9)_0%,rgba(8,12,15,.7)_27%,rgba(8,12,15,.18)_47%,transparent_64%)]" />
        <Container className="relative z-10 flex flex-1 items-center py-16">
          <div className="max-w-[29rem] [&_h2]:!text-[3.25rem] [&_p]:max-w-[27rem]">
            <HeroCopy headingLevel="h2" />
          </div>
        </Container>
      </div>

      <div className="relative hidden min-h-[calc(100svh-5.25rem)] min-[1200px]:flex">
        <Image
          alt="KIMI commercial electric delivery vehicle in a city at night"
          className="object-cover object-center"
          fill
          priority
          sizes="100vw"
          src="/images/hero/hero-main.webp"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,12,15,.96)_0%,rgba(8,12,15,.84)_30%,rgba(8,12,15,.34)_49%,rgba(8,12,15,.06)_65%,rgba(8,12,15,.02)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,15,.08)_0%,rgba(8,12,15,.02)_62%,rgba(8,12,15,.58)_100%)]"
        />
        <Container className="relative z-10 flex flex-1 items-center py-24">
          <HeroCopy />
        </Container>
      </div>
    </section>
  );
}
