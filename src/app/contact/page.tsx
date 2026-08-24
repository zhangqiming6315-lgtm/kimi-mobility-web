import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import InquiryForm from "@/components/contact/InquiryForm";
import { absoluteUrl, company } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Contact KIMI Mobility" },
  description:
    "Contact KIMI Mobility for product and partnership inquiries from distributors, commercial operators and delivery companies.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact KIMI Mobility",
    description: "Contact KIMI Mobility for product and partnership inquiries from distributors, commercial operators and delivery companies.",
    url: absoluteUrl("/contact"),
    images: [{ url: "/images/hero/hero-main.webp", alt: "KIMI commercial electric mobility vehicle in a city at night" }],
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-kimi-black pt-[5.25rem] text-white">
          <Container className="grid min-h-[70svh] items-end gap-12 py-20 lg:grid-cols-[1.35fr_.65fr] lg:py-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-kimi-green">
                Contact KIMI
              </p>
              <h1 className="mt-7 max-w-4xl text-[clamp(3.25rem,7vw,7rem)] font-semibold leading-[0.94] tracking-[-0.06em]">
                Start a conversation.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/58">
                Tell us about your market, fleet, or commercial mobility needs.
                Our team welcomes product, dealer, and partnership inquiries.
              </p>
            </div>

            <div className="border-l border-kimi-green/60 pl-7 lg:justify-self-end">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                Business inquiries
              </p>
              <a
                className="mt-5 block text-lg font-medium text-white transition-colors hover:text-kimi-green focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kimi-green"
                href={`mailto:${company.email}`}
              >
                {company.email}
              </a>
              <ButtonLink
                className="mt-8"
                href={`mailto:${company.email}?subject=KIMI%20Mobility%20Inquiry`}
                size="large"
              >
                Email Our Team
              </ButtonLink>
            </div>
          </Container>
        </section>
        <section className="border-t border-white/10 bg-kimi-black pb-[var(--space-section)] text-white">
          <Container>
            <div className="grid gap-10 pb-12 pt-16 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Business inquiry</p>
                <h2 className="mt-5 text-[clamp(2rem,4vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.05em]">Tell us about your operation.</h2>
              </div>
              <p className="max-w-2xl text-lg leading-relaxed text-white/55">Share your market, intended application, and partnership needs. Your inquiry will be sent directly to the KIMI Mobility team.</p>
            </div>
            <InquiryForm />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
