import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OemLanding from "@/components/oem/OemLanding";
import { absoluteUrl } from "@/lib/site";

const title = "Electric Motorcycle OEM & Private Label | KIMI Mobility";
const description =
  "Evaluate KIMI electric motorcycle OEM and private-label programs for platform selection, branding requirements, configuration discussion and project-based supply.";
const path = "/oem";
const image =
  "/images/products/Delivery/X1/01_Hero/KIMI_Delivery_X1_Hero_V1.webp";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: absoluteUrl(path),
    languages: {
      en: absoluteUrl(path),
      es: absoluteUrl("/es/oem"),
      "x-default": absoluteUrl(path),
    },
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl(path),
    type: "website",
    images: [
      {
        url: image,
        alt: "KIMI commercial electric motorcycle platform for OEM and private-label project evaluation",
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

export default function OemPage() {
  return (
    <>
      <Header />
      <OemLanding />
      <Footer />
    </>
  );
}
