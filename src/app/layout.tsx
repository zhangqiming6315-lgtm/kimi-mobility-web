import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KIMI Mobility | Commercial Electric Mobility",
    template: "%s | KIMI Mobility",
  },
  description:
    "Purpose-built electric motorcycles and scooters for urban mobility, last-mile delivery, commercial utility and fleet operations.",
  applicationName: "KIMI Mobility",
  authors: [{ name: "KIMI Mobility" }],
  creator: "KIMI Mobility",
  publisher: "KIMI Mobility",
  keywords: [
    "electric motorcycle",
    "electric scooter",
    "commercial electric vehicle",
    "delivery motorcycle",
    "utility motorcycle",
    "urban mobility",
    "last-mile delivery",
    "fleet mobility",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "KIMI Mobility | Commercial Electric Mobility",
    description:
      "Purpose-built electric motorcycles and scooters for urban mobility, last-mile delivery, commercial utility and fleet operations.",
    url: siteUrl,
    siteName: "KIMI Mobility",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/hero/hero-main.webp", alt: "KIMI commercial electric mobility vehicle in a city at night" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KIMI Mobility | Commercial Electric Mobility",
    description:
      "Purpose-built electric motorcycles and scooters for urban mobility, last-mile delivery, commercial utility and fleet operations.",
    images: ["/images/hero/hero-main.webp"],
  },
  icons: { icon: "/favicon.ico" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KIMI Mobility",
  url: siteUrl,
  email: "admin@kimimobility.com",
  legalName: "Shanghai Kaimai New Energy Technology Co., Ltd.",
  logo: absoluteUrl("/logo/KIMI_Master_Lockup.svg"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={organizationJsonLd} />
        {children}
      </body>
    </html>
  );
}
