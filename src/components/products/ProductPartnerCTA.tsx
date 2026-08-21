import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";

export default function ProductPartnerCTA() {
  return (
    <section className="border-t border-white/10 bg-kimi-black py-[var(--space-section)] text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">
              Commercial partnerships
            </p>
            <h2 className="mt-5 max-w-4xl text-[length:var(--text-heading)] font-semibold leading-[1.01] tracking-[-0.05em]">
              Move your operation forward.
            </h2>
          </div>
          <ButtonLink href="/contact" size="large">
            Become a Partner
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
