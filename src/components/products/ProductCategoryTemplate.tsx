import Link from "next/link";
import type { ProductCategory } from "@/lib/products";
import { productPrinciples } from "@/lib/products";
import Container from "@/components/ui/Container";
import ProductImagePlaceholder from "@/components/products/ProductImagePlaceholder";
import ProductPartnerCTA from "@/components/products/ProductPartnerCTA";

type ProductCategoryTemplateProps = {
  category: ProductCategory;
};

const purposeItems = [
  ["Operating environment", "operatingEnvironment"],
  ["User scenario", "userScenario"],
  ["Commercial value", "commercialValue"],
] as const;

export default function ProductCategoryTemplate({
  category,
}: ProductCategoryTemplateProps) {
  return (
    <>
      <section className="bg-kimi-black pt-[5.25rem] text-white">
        <Container className="grid min-h-[calc(100svh-5.25rem)] items-center gap-14 py-20 lg:grid-cols-[.9fr_1.1fr] lg:gap-20 lg:py-24">
          <div>
            <Link
              className="text-xs font-semibold uppercase tracking-[0.22em] text-kimi-green transition-colors hover:text-white"
              href="/products"
            >
              Products / {category.name}
            </Link>
            <h1 className="mt-7 max-w-3xl text-[clamp(3rem,6.4vw,6.5rem)] font-semibold leading-[0.94] tracking-[-0.055em]">
              {category.platformName}
            </h1>
            <p className="mt-7 max-w-xl text-[length:var(--text-lead)] leading-relaxed text-white/58">
              {category.headline}
            </p>
          </div>
          <ProductImagePlaceholder
            category={category.name}
            className="min-h-[26rem] lg:min-h-[34rem]"
          />
        </Container>
      </section>

      <section className="bg-white py-[var(--space-section)]">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">
                Purpose
              </p>
              <h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.045em] text-kimi-black">
                Designed around the operation.
              </h2>
            </div>
            <div className="border-t border-kimi-light">
              {purposeItems.map(([label, key]) => (
                <article
                  className="grid gap-4 border-b border-kimi-light py-7 sm:grid-cols-[11rem_1fr] sm:gap-8"
                  key={key}
                >
                  <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-kimi-gray">
                    {label}
                  </h3>
                  <p className="max-w-2xl text-base leading-relaxed text-kimi-black/72">
                    {category.purpose[key]}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#15191b] py-[var(--space-section)] text-white">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">
            Key design principles
          </p>
          <h2 className="mt-5 max-w-3xl text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.045em]">
            Commercial priorities, considered together.
          </h2>

          <div className="mt-16 grid border-l border-t border-white/12 sm:grid-cols-2 lg:grid-cols-4">
            {productPrinciples.map((principle, index) => (
              <article
                className="flex min-h-80 flex-col border-b border-r border-white/12 p-7 sm:p-8"
                key={principle.title}
              >
                <span className="text-xs font-medium text-kimi-green">
                  0{index + 1}
                </span>
                <div className="mt-auto pt-14">
                  <h3 className="text-2xl font-semibold tracking-[-0.035em]">
                    {principle.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-white/48">
                    {principle.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-kimi-light py-[var(--space-section)]">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">
              Application scenarios
            </p>
            <h2 className="mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.045em] text-kimi-black">
              Where the platform works.
            </h2>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {category.applications.map((application, index) => (
              <article
                className="min-h-64 bg-white p-8 sm:p-10"
                key={application.title}
              >
                <span className="text-xs font-semibold text-kimi-green">
                  0{index + 1}
                </span>
                <h3 className="mt-16 text-2xl font-semibold tracking-[-0.035em] text-kimi-black">
                  {application.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-6 text-kimi-gray">
                  {application.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <ProductPartnerCTA />
    </>
  );
}
