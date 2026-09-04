import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DistributorLandingEs from "@/components/partners/DistributorLandingEs";
import { absoluteUrl } from "@/lib/site";

const title = "Proveedor de Motos Eléctricas para Distribuidores | KIMI Mobility";
const description =
  "Plataformas de motos eléctricas para distribuidores e importadores en América Latina, con configuración, identidad de marca y suministro sujetos a cada proyecto.";
const path = "/es/socios/distribuidores";
const englishPath = "/partners/distributors";
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
    images: [{ url: image, alt: "Plataformas de motos eléctricas KIMI para distribuidores e importadores" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function DistributorEsPage() {
  return (
    <>
      <Header />
      <DistributorLandingEs />
      <Footer />
    </>
  );
}
