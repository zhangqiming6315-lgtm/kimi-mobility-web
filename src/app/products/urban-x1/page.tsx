import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import UrbanX1Showcase from "@/components/products/UrbanX1Showcase";
import { absoluteUrl } from "@/lib/site";

const description = "Discover the KIMI Urban X1, a 1200W rated electric scooter designed for everyday city commuting and urban mobility.";

export const metadata: Metadata = {
  title: "Urban X1 Electric Scooter",
  description,
  alternates: { canonical: "/products/urban-x1" },
  openGraph: {
    title: "Urban X1 Electric Scooter | KIMI Mobility",
    description,
    url: absoluteUrl("/products/urban-x1"),
    images: [{ url: "/images/products/Urban/X1/01_Hero/urban-x1-hero-m3-direction-v2.png", alt: "KIMI Urban X1 electric scooter in a modern city setting" }],
  },
};

export default function UrbanX1Page() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Product",
        name: "KIMI Urban X1",
        description,
        image: absoluteUrl("/images/products/Urban/X1/01_Hero/urban-x1-hero-m3-direction-v2.png"),
        brand: { "@type": "Brand", name: "KIMI Mobility" },
        url: absoluteUrl("/products/urban-x1"),
        category: "Electric scooter",
      }} />
      <UrbanX1Showcase />
    </>
  );
}
