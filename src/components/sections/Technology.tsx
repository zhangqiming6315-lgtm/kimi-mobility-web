import Container from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";

const focusAreas = [
  { title: "Product definition and configuration", description: "Aligning vehicle format and configuration with the intended operating role." },
  { title: "Supplier and platform selection", description: "Evaluating established platforms against market and application requirements." },
  { title: "Market-specific specification", description: "Organizing practical configurations around local use and commercial context." },
  { title: "Quality and production coordination", description: "Coordinating product requirements and production follow-through with supply partners." },
] as const;

export default function Technology() {
  return (
    <section className="relative scroll-mt-[5.25rem] overflow-hidden bg-[#15191b] py-[var(--space-section)] text-white" id="capability">
      <div aria-hidden="true" className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)] [background-size:5rem_5rem] [mask-image:linear-gradient(90deg,black,transparent_85%)]" />
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-24">
          <SectionIntro description="KIMI brings together product definition, proven vehicle platforms, market-specific configuration, and production coordination to create practical electric mobility solutions." eyebrow="Capability" inverse title="Product development for real-world operations." />
          <div className="border-t border-white/15 lg:mt-2">
            {focusAreas.map((area, index) => (
              <article className="group grid gap-3 border-b border-white/15 py-6 sm:grid-cols-[2.5rem_1fr] sm:gap-5" key={area.title}>
                <span className="text-xs font-medium text-kimi-green">0{index + 1}</span>
                <div>
                  <h3 className="text-lg font-medium tracking-[-0.02em] text-white/88 transition-colors group-hover:text-kimi-green">{area.title}</h3>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-white/45">{area.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
