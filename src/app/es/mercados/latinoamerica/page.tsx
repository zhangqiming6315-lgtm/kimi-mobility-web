import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LatinAmericaLandingEs from "@/components/markets/LatinAmericaLandingEs";
import { absoluteUrl } from "@/lib/site";

const title = "Motos Eléctricas para América Latina | KIMI Mobility";
const description =
  "Plataformas de motos eléctricas comerciales para distribuidores, importadores y flotas en América Latina, con evaluación y suministro sujetos a cada proyecto.";
const path = "/es/mercados/latinoamerica";
const englishPath = "/markets/latin-america";
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
    images: [{ url: image, alt: "Motos eléctricas comerciales KIMI para proyectos en América Latina" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function LatinAmericaEsPage() {
  return (
    <>
      <Header />
      <LatinAmericaLandingEs />
      <Footer />
    </>
  );
}
