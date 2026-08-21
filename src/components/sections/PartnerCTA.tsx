import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";

export default function PartnerCTA() {
  return (
    <section className="relative scroll-mt-[5.25rem] overflow-hidden border-t border-white/10 bg-kimi-black py-20 text-white lg:py-24" id="partners">
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-24 h-96 w-96 rounded-full border border-white/8"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -right-8 h-64 w-64 rounded-full border border-white/8"
      />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">
              Global partnerships
            </p>
            <h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.01] tracking-[-0.05em]">
              Build the next mobility opportunity with KIMI.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/55">
              We welcome conversations with distributors, delivery companies,
              commercial operators, and electric mobility partners.
            </p>
          </div>
          <ButtonLink
            className="bg-kimi-green text-kimi-black hover:bg-white"
            href="/contact"
            size="large"
          >
            Become a Partner
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
