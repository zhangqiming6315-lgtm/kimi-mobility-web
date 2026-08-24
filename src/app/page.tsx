import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Applications from "@/components/sections/Applications";
import PartnerCTA from "@/components/sections/PartnerCTA";
import ProductPlatform from "@/components/sections/ProductPlatform";
import Technology from "@/components/sections/Technology";
import WhyKimi from "@/components/sections/WhyKimi";
import { absoluteUrl } from "@/lib/site";

const description =
  "Explore KIMI commercial electric mobility solutions for last-mile delivery, urban transportation, utility work and fleet operations.";

export const metadata: Metadata = {
  title: "Commercial Electric Mobility",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Commercial Electric Mobility | KIMI Mobility",
    description,
    url: absoluteUrl("/"),
    images: [{ url: "/images/hero/hero-main.webp", alt: "KIMI commercial electric mobility vehicle in a city at night" }],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductPlatform />
        <WhyKimi />
        <Technology />
        <Applications />
        <PartnerCTA />
      </main>
      <Footer showCta={false} />
    </>
  );
}
import type { Metadata } from "next";
