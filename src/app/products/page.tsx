import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { absoluteUrl } from "@/lib/site";

const products = [
  {
    title: "DELIVERY X1",
    platform: "DELIVERY PLATFORM",
    subtitle: "Purpose-built electric delivery motorcycle",
    description:
      "Built for courier, food delivery and daily logistics operations.",
    cta: "EXPLORE DELIVERY X1",
    href: "/products/delivery-x1",
    image:
      "/images/products/Delivery/X1/02_Product/KIMI_Delivery_X1_Side_View_V1.png",
    alt: "KIMI Delivery X1 electric delivery motorcycle in side profile",
    imageClassName: "object-contain",
  },
  {
    title: "URBAN X1",
    platform: "URBAN PLATFORM",
    subtitle: "Urban electric scooter",
    description:
      "Designed for everyday city movement, commuting and commercial mobility.",
    cta: "EXPLORE URBAN X1",
    href: "/products/urban-x1",
    image:
      "/images/products/Urban/X1/02_Product/urban-x1-product-card.webp",
    alt: "Graphite-gray KIMI Urban X1 electric scooter",
    imageClassName: "object-contain",
  },
  {
    title: "UTILITY X1",
    platform: "UTILITY PLATFORM",
    subtitle: "Heavy-duty electric utility motorcycle",
    description:
      "Built for equipment, service routes and demanding daily operations.",
    cta: "EXPLORE UTILITY X1",
    href: "/products/utility-x1",
    image:
      "/images/products/Utility/X1/02_Product/utility-x1-side-profile.png",
    alt: "KIMI Utility X1 heavy-duty electric utility motorcycle in side profile",
    imageClassName: "object-contain",
  },
] as const;

export const metadata: Metadata = {
  title: "Electric Mobility Products",
  description: "Explore KIMI Delivery X1, Urban X1 and Utility X1 electric mobility products for delivery, city travel and commercial operations.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Electric Mobility Products | KIMI Mobility",
    description: "Explore KIMI Delivery X1, Urban X1 and Utility X1 electric mobility products for delivery, city travel and commercial operations.",
    url: absoluteUrl("/products"),
  },
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-kimi-black pt-[5.25rem] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:5rem_5rem] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
        />
        <Container className="relative flex items-end pb-[72px] pt-5 md:min-h-[72svh] md:py-20 lg:py-24">
          <div className="max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-kimi-green">
              Products
            </p>
            <h1 className="mt-7 text-[clamp(3.25rem,7vw,7rem)] font-semibold leading-[0.94] tracking-[-0.06em]">
              Commercial electric mobility
              <span className="block text-white/58">
                built around real operations.
              </span>
            </h1>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-[var(--space-section)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-start lg:gap-24">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">
              KIMI product architecture
            </p>
            <p className="max-w-[680px] text-[clamp(2.375rem,10.25vw,2.75rem)] font-medium leading-[1.03] tracking-[-0.04em] text-kimi-black lg:text-[clamp(2.625rem,4.2vw,4.5rem)]">
              KIMI brings together proven electric vehicle platforms,
              market-specific configurations, and practical solutions for
              delivery and urban mobility.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#15191b] py-[var(--space-section)] text-white">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                aria-label={product.cta}
                className="group flex min-w-0 flex-col border border-white/12 bg-kimi-black transition-[border-color,transform] hover:border-kimi-green/55 active:scale-[0.995] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kimi-green"
                href={product.href}
                key={product.href}
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/12 bg-[#d9d8d3]">
                  <Image
                    alt={product.alt}
                    className={`${product.imageClassName} p-2 transition-transform duration-500 group-hover:scale-[1.02] sm:p-3`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    src={product.image}
                  />
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-9">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-kimi-green">
                    {product.platform}
                  </p>
                  <h2 className="mt-12 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                    {product.title}
                  </h2>
                  <h3 className="mt-5 text-lg font-medium text-white/78">
                    {product.subtitle}
                  </h3>
                  <p className="mt-4 max-w-lg text-sm leading-6 text-white/48">
                    {product.description}
                  </p>
                  <div className="mt-auto pt-8">
                    <span className="text-xs font-semibold tracking-[0.18em] text-kimi-green">
                      {product.cta}
                    </span>
                    <div className="mt-4 h-px w-12 bg-kimi-green transition-[width] duration-300 group-hover:w-24" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
