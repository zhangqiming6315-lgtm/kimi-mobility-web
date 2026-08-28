import type { Metadata } from "next";
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
    images: [{ url: "/images/products/Urban/X1/01_Hero/urban-x1-hero-m3-direction-v2.webp", alt: "KIMI Urban X1 electric scooter in a modern city setting" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Urban X1 Electric Scooter | KIMI Mobility",
    description,
    images: ["/images/products/Urban/X1/01_Hero/urban-x1-hero-m3-direction-v2.webp"],
  },
};

export default function UrbanX1Page() {
  return <UrbanX1Showcase />;
}
