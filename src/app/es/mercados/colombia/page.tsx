import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ColombiaLandingEs from "@/components/markets/ColombiaLandingEs";
import { absoluteUrl } from "@/lib/site";

const title = "Motos Eléctricas en Colombia para Empresas | KIMI Mobility";
const description =
  "Motos eléctricas comerciales para distribuidores, importadores y flotas en Colombia. Evalúe plataformas KIMI con suministro sujeto a cada proyecto.";
const path = "/es/mercados/colombia";
const englishPath = "/markets/colombia";
const image =
  "/images/products/Delivery/X1/01_Hero/KIMI_Delivery_X1_Hero_V1.webp";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: absoluteUrl(path),
    languages: {
      en: absoluteUrl(englishPath),
      "es-CO": absoluteUrl(path),
      "x-default": absoluteUrl(englishPath),
    },
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl(path),
    type: "website",
    locale: "es_CO",
    images: [
      {
        url: image,
        alt: "Plataforma de moto eléctrica KIMI para proyectos comerciales en Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
};

export default function ColombiaEsPage() {
  return (
    <>
      <Header />
      <ColombiaLandingEs />
      <Footer />
    </>
  );
}
