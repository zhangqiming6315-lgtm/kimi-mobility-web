import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
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
    images: [{ url: "/images/products/Delivery/X1/01_Hero/KIMI_Delivery_X1_Hero_V1.png", alt: "KIMI Delivery X1 electric delivery motorcycle on an urban road" }],
  },
};

export default function DeliveryX1Page() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Product",
        name: "KIMI Delivery X1",
        description,
        image: absoluteUrl("/images/products/Delivery/X1/01_Hero/KIMI_Delivery_X1_Hero_V1.png"),
        brand: { "@type": "Brand", name: "KIMI Mobility" },
        url: absoluteUrl("/products/delivery-x1"),
        category: "Electric delivery motorcycle",
      }} />
      <DeliveryX1Showcase />
    </>
  );
}
