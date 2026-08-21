import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import UtilityX1Showcase from "@/components/products/UtilityX1Showcase";
import { absoluteUrl } from "@/lib/site";

const description = "Discover the KIMI Utility X1 electric utility motorcycle with a modular rear platform for service teams and commercial operations.";

export const metadata: Metadata = {
  title: "Utility X1 Electric Utility Motorcycle",
  description,
  alternates: { canonical: "/products/utility-x1" },
  openGraph: {
    title: "Utility X1 Electric Utility Motorcycle | KIMI Mobility",
    description,
    url: absoluteUrl("/products/utility-x1"),
    images: [{ url: "/images/products/Utility/X1/01_Hero/utility-x1-hero.png", alt: "KIMI Utility X1 electric utility motorcycle" }],
  },
};

export default function UtilityX1Page() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Product",
        name: "KIMI Utility X1",
        description,
        image: absoluteUrl("/images/products/Utility/X1/01_Hero/utility-x1-hero.png"),
        brand: { "@type": "Brand", name: "KIMI Mobility" },
        url: absoluteUrl("/products/utility-x1"),
        category: "Electric utility motorcycle",
      }} />
      <UtilityX1Showcase />
    </>
  );
}
