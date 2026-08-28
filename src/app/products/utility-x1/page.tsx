import type { Metadata } from "next";
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
    images: [{ url: "/images/products/Utility/X1/01_Hero/utility-x1-hero.webp", alt: "KIMI Utility X1 electric utility motorcycle" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Utility X1 Electric Utility Motorcycle | KIMI Mobility",
    description,
    images: ["/images/products/Utility/X1/01_Hero/utility-x1-hero.webp"],
  },
};

export default function UtilityX1Page() {
  return <UtilityX1Showcase />;
}
