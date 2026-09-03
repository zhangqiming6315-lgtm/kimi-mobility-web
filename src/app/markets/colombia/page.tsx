import type { Metadata } from "next";
import ColombiaLanding from "@/components/markets/ColombiaLanding";
import { absoluteUrl } from "@/lib/site";

const title = "Electric Motorcycles Colombia for Commercial Use | KIMI Mobility";
const description = "Electric motorcycles for Colombia distributors, importers and delivery fleets. Evaluate KIMI commercial platforms with project-based supply support.";
const path = "/markets/colombia";
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
    images: [{ url: image, alt: "KIMI commercial electric motorcycle platform for Colombia distributor and fleet projects" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function ColombiaPage() {
  return <ColombiaLanding />;
}
