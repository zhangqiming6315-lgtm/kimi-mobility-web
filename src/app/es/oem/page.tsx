import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OemLandingEs from "@/components/oem/OemLandingEs";
import { absoluteUrl } from "@/lib/site";

const title = "Motos Eléctricas OEM y Marca Privada | KIMI Mobility";
const description =
  "Evalúe plataformas KIMI para proyectos de motos eléctricas OEM y marca privada, con selección, identidad, configuración y suministro sujetos a cada proyecto.";
const path = "/es/oem";
const englishPath = "/oem";
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
    images: [{ url: image, alt: "Plataforma de moto eléctrica KIMI para evaluación de proyectos OEM y marca privada" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function OemEsPage() {
  return (
    <>
      <Header />
      <OemLandingEs />
      <Footer />
    </>
  );
}
