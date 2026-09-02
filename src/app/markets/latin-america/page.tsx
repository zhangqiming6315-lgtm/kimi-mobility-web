import type { Metadata } from "next";
import LatinAmericaLanding from "@/components/markets/LatinAmericaLanding";
import { absoluteUrl } from "@/lib/site";

const title = "Commercial Electric Motorcycles for Latin America | KIMI Mobility";
const description = "Commercial electric motorcycles for Latin America distributors, importers and delivery fleets, with platform selection and project-based supply support.";
const path = "/markets/latin-america";
const image = "/images/products/Delivery/X1/01_Hero/KIMI_Delivery_X1_Hero_V1.webp";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: absoluteUrl(path) },
  openGraph: {
    title,
    description,
    url: absoluteUrl(path),
    type: "website",
    images: [{ url: image, alt: "KIMI commercial electric motorcycles for distributors and fleet projects in Latin America" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function LatinAmericaPage() {
  return <LatinAmericaLanding />;
}
