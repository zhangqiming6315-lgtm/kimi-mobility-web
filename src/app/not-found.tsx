import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BrandLogo from "@/components/ui/BrandLogo";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="bg-kimi-black pt-[5.25rem] text-white">
        <Container className="flex min-h-[70svh] items-center py-20 lg:py-24">
          <div className="max-w-4xl">
            <div className="h-20 w-20 rounded-sm bg-white p-3">
              <BrandLogo variant="symbol" />
            </div>
            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.24em] text-kimi-green">Error 404</p>
            <h1 className="mt-5 text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.94] tracking-[-0.06em]">Page not found.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/58">
              The page may have moved or the address may be incorrect. Continue exploring KIMI Mobility or contact our team.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/" size="large">Back to Home</ButtonLink>
              <ButtonLink href="/products" size="large" variant="secondary">View Products</ButtonLink>
              <ButtonLink href="/contact" size="large" variant="secondary">Contact KIMI</ButtonLink>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
