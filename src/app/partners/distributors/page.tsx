import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DistributorLanding from "@/components/partners/DistributorLanding";
import { absoluteUrl } from "@/lib/site";

const title = "Electric Motorcycle Distributor & Supply Partnership | KIMI Mobility";
const description = "Electric motorcycle supply for distributors and importers, with configurable commercial platforms, private-label branding and international supply support.";
const path = "/partners/distributors";
const image = "/images/products/Delivery/X1/01_Hero/KIMI_Delivery_X1_Hero_V1.webp";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: absoluteUrl(path),
    languages: {
      en: absoluteUrl(path),
      es: absoluteUrl("/es/socios/distribuidores"),
      "x-default": absoluteUrl(path),
    },
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl(path),
    type: "website",
    images: [{ url: image, alt: "KIMI commercial electric motorcycle platforms for distributors and importers" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function DistributorPage() {
  return (
    <>
      <Header />
      <DistributorLanding />
      <Footer />
    </>
  );
}
