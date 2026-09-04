import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DeliveryX1LandingEs from "@/components/products/DeliveryX1LandingEs";
import { absoluteUrl } from "@/lib/site";

const title = "Moto Eléctrica para Reparto Delivery X1 | KIMI Mobility";
const description =
  "Delivery X1 es una moto eléctrica para reparto y operaciones de última milla, diseñada como plataforma comercial para flotas, distribuidores e importadores.";
const path = "/es/productos/delivery-x1";
const englishPath = "/products/delivery-x1";
const image = "/images/products/Delivery/X1/01_Hero/KIMI_Delivery_X1_Hero_V1.webp";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: absoluteUrl(path),
    languages: {
      en: absoluteUrl(englishPath),
      es: absoluteUrl(path),
      "x-default": absoluteUrl(englishPath),
    },
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl(path),
    type: "website",
    locale: "es",
    images: [{ url: image, alt: "Moto eléctrica para reparto KIMI Delivery X1 en una vía urbana" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function DeliveryX1EsPage() {
  return (
    <>
      <Header />
      <DeliveryX1LandingEs />
      <Footer />
    </>
  );
}
