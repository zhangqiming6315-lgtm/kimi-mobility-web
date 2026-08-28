import type { Metadata } from "next";
import DeliveryX1Showcase from "@/components/products/DeliveryX1Showcase";
import { absoluteUrl } from "@/lib/site";

const description = "KIMI Delivery X1 is a purpose-built electric delivery motorcycle for last-mile routes, commercial delivery and fleet operations.";

export const metadata: Metadata = {
  title: "Delivery X1 Electric Delivery Motorcycle",
  description,
  alternates: { canonical: "/products/delivery-x1" },
  openGraph: {
    title: "Delivery X1 Electric Delivery Motorcycle | KIMI Mobility",
    description,
    url: absoluteUrl("/products/delivery-x1"),
    images: [{ url: "/images/products/Delivery/X1/01_Hero/KIMI_Delivery_X1_Hero_V1.webp", alt: "KIMI Delivery X1 electric delivery motorcycle on an urban road" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delivery X1 Electric Delivery Motorcycle | KIMI Mobility",
    description,
    images: ["/images/products/Delivery/X1/01_Hero/KIMI_Delivery_X1_Hero_V1.webp"],
  },
};

export default function DeliveryX1Page() {
  return <DeliveryX1Showcase />;
}
