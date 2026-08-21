import Container from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";

const principles = [
  {
    tag: "Use case",
    title: "Purpose before excess",
    description: "Commercial mobility shaped around practical use, clear roles, and real operating environments.",
    icon: "M4 16h16M7 12l3 3 7-8",
  },
  {
    tag: "Platform",
    title: "Proven platform selection",
    description: "Vehicle platforms and configurations selected around market needs, operating conditions, and commercial applications.",
    icon: "M5 7h14M5 12h14M5 17h9",
  },
  {
    tag: "Partnership",
    title: "Ready for partnership",
    description: "A global outlook built around distributors, delivery companies, commercial operators, and long-term market partners.",
    icon: "M7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm10 4a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2 21v-2a6 6 0 0 1 10-4.5M13 21v-1a5 5 0 0 1 9-3",
  },
] as const;

export default function WhyKimi() {
  return (
    <section className="scroll-mt-[5.25rem] bg-white py-[var(--space-section)]" id="why-kimi">
      <Container>
        <SectionIntro
          description="KIMI brings a focused product and supply-chain approach to electric utility mobility—clear in purpose, disciplined in configuration, and ready for commercial markets."
          eyebrow="Why KIMI"
          title="Mobility with a job to do."
        />

        <div className="mt-16 grid gap-px bg-kimi-light lg:grid-cols-3">
          {principles.map((principle, index) => (
            <article className="group min-h-80 bg-white p-7 transition-colors duration-300 hover:bg-[#f7f8f7] sm:p-9 lg:p-10" key={principle.title}>
              <div className="flex items-start justify-between gap-6">
                <div className="flex h-12 w-12 items-center justify-center border border-kimi-black/15 text-kimi-green transition-colors group-hover:border-kimi-green">
                  <svg aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeLinecap="square" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d={principle.icon} />
                  </svg>
                </div>
                <span className="text-xs font-semibold tracking-[0.18em] text-kimi-green">0{index + 1}</span>
              </div>
              <p className="mt-12 text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-kimi-gray">{principle.tag}</p>
              <h3 className="mt-4 max-w-xs text-2xl font-semibold tracking-[-0.035em] text-kimi-black">{principle.title}</h3>
              <p className="mt-4 max-w-sm text-sm leading-6 text-kimi-gray">{principle.description}</p>
              <div aria-hidden="true" className="mt-8 h-px w-8 bg-kimi-green transition-[width] duration-300 group-hover:w-20" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
