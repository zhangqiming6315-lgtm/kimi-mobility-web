import Link from "next/link";
import { company, primaryNavigation } from "@/lib/site";
import BrandLogo from "@/components/ui/BrandLogo";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";

type FooterProps = {
  showCta?: boolean;
};

export default function Footer({ showCta = true }: FooterProps) {
  return (
    <footer className="bg-kimi-black text-white">
      <Container className="py-[var(--space-section)]">
        {showCta && (
          <div className="grid gap-14 border-b border-white/15 pb-16 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-kimi-green">
                Work with KIMI
              </p>
              <h2 className="mt-5 max-w-3xl text-[length:var(--text-heading)] font-semibold leading-[0.98] tracking-[-0.05em]">
                Move your operation forward.
              </h2>
            </div>
            <div className="lg:justify-self-end">
              <ButtonLink href="/contact">Start a Conversation</ButtonLink>
            </div>
          </div>
        )}

        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_.6fr_.6fr]">
          <div className="max-w-sm">
            <div className="w-40 rounded-sm bg-white px-3 py-2">
              <BrandLogo />
            </div>
            <p className="mt-6 leading-relaxed text-white/55">
              {company.statement}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Navigate
            </h3>
            <nav className="mt-5 flex flex-col items-start gap-3" aria-label="Footer navigation">
              {primaryNavigation.map((item) => (
                <Link
                  className="text-sm text-white/75 transition-colors hover:text-kimi-green focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kimi-green"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Contact
            </h3>
            <div className="mt-5 space-y-3 text-sm text-white/75">
              <a
                className="block transition-colors hover:text-kimi-green"
                href={`mailto:${company.email}`}
              >
                {company.email}
              </a>
              <a
                className="block transition-colors hover:text-kimi-green"
                href={`https://${company.website}`}
              >
                {company.website}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/15 pt-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.brand}. All rights reserved.</p>
          <p>{company.name}</p>
        </div>
      </Container>
    </footer>
  );
}
