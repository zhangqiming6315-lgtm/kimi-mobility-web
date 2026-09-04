import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DeliveryFleetLandingEs from "@/components/solutions/DeliveryFleetLandingEs";
import { absoluteUrl } from "@/lib/site";

const title = "Motos Eléctricas para Reparto y Flotas | KIMI Mobility";
const description =
  "Soluciones de motos eléctricas para reparto de última milla y flotas comerciales, con configuración, opciones de carga e identidad sujetas a cada proyecto.";
const path = "/es/soluciones/flota-reparto";
const englishPath = "/solutions/delivery-fleet";
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
    images: [{ url: image, alt: "Motos eléctricas KIMI para operaciones comerciales de reparto" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function DeliveryFleetEsPage() {
  return (
    <>
      <Header />
      <DeliveryFleetLandingEs />
      <Footer />
    </>
  );
}
