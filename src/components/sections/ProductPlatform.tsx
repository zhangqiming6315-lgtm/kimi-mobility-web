import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";

const products = [
  {
    label: "Urban platform",
    title: "URBAN X1",
    subtitle: "Urban electric scooter",
    description:
      "Designed for everyday city movement, commuting, and commercial mobility.",
    cta: "Explore Urban X1",
    href: "/products/urban-x1",
    image: "/images/products/Urban/X1/02_Product/urban-x1-product-card.webp",
    alt: "Graphite-gray KIMI Urban X1 electric scooter",
  },
  {
    label: "Delivery platform",
    title: "DELIVERY X1",
    subtitle: "Purpose-built electric delivery motorcycle",
    description:
      "Built for courier, food delivery, and daily logistics operations.",
    cta: "Explore Delivery X1",
    href: "/products/delivery-x1",
    image:
      "/images/products/Delivery/X1/02_Product/KIMI_Delivery_X1_Side_View_V1.png",
    alt: "KIMI Delivery X1 electric delivery motorcycle in side profile",
  },
  {
    label: "Utility platform",
    title: "UTILITY X1",
    subtitle: "Heavy-duty electric utility motorcycle",
    description:
      "Built for service teams, equipment transport, and demanding daily work.",
    cta: "Explore Utility X1",
    href: "/products/utility-x1",
    image:
      "/images/products/Utility/X1/02_Product/utility-x1-side-profile.png",
    alt: "KIMI Utility X1 heavy-duty electric utility motorcycle in side profile",
  },
] as const;

export default function ProductPlatform() {
  return (
    <section className="bg-kimi-black py-[var(--space-section)] text-white">
      <Container>
        <SectionIntro
          description="Three focused electric vehicles for urban movement, delivery routes, and demanding commercial work."
          eyebrow="Product range"
          inverse
          title="Built around the work."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              aria-label={product.cta}
              className="group flex min-w-0 flex-col overflow-hidden border border-white/12 bg-white/[0.015] transition-[border-color,transform] hover:border-kimi-green/55 active:scale-[0.995] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kimi-green"
              href={product.href}
              key={product.href}
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/12 bg-[#d9d8d3]">
                <Image
                  alt={product.alt}
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02] sm:p-3"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  src={product.image}
                />
              </div>
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <p className="text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-kimi-green">
                  {product.label}
                </p>
                <h3 className="mt-10 text-4xl font-semibold leading-none tracking-[-0.05em]">
                  {product.title}
                </h3>
                <p className="mt-5 text-lg font-medium text-white/78">
                  {product.subtitle}
                </p>
                <p className="mt-4 text-sm leading-6 text-white/48">
                  {product.description}
                </p>
                <div className="mt-auto pt-8 text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-kimi-green">
                  {product.cta}
                  <div className="mt-4 h-px w-8 bg-kimi-green transition-[width] duration-300 group-hover:w-20" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
