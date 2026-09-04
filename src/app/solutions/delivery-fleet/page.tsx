import type { Metadata } from "next";
import DeliveryFleetLanding from "@/components/solutions/DeliveryFleetLanding";
import { absoluteUrl } from "@/lib/site";

const title = "Electric Motorcycle Fleet Solutions | KIMI Mobility";
const description = "Electric motorcycle fleet solutions for last-mile delivery and commercial operations, with configurable vehicles, cargo options, fleet branding and supply support.";
const path = "/solutions/delivery-fleet";
const image = "/images/products/Delivery/X1/01_Hero/KIMI_Delivery_X1_Hero_V1.webp";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: absoluteUrl(path),
    languages: {
      en: absoluteUrl(path),
      es: absoluteUrl("/es/soluciones/flota-reparto"),
      "x-default": absoluteUrl(path),
    },
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl(path),
    type: "website",
    images: [{ url: image, alt: "KIMI Delivery X1 electric motorcycle for commercial delivery operations" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function DeliveryFleetPage() {
  return <DeliveryFleetLanding />;
}
