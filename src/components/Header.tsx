"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { activeLocale, primaryNavigation } from "@/lib/site";
import BrandLogo from "@/components/ui/BrandLogo";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileMenuOpen]);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-xl">
      <Container className="grid h-[5.25rem] grid-cols-[1fr_auto] items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
        <BrandLogo priority />

        <nav
          aria-label="Primary navigation"
          className="hidden h-full items-center gap-9 lg:flex xl:gap-11"
        >
          {primaryNavigation.map((item) => (
            <Link
              className="inline-flex h-full items-center text-[0.8125rem] font-medium tracking-[0.01em] text-kimi-black transition-colors hover:text-kimi-green focus-visible:outline-2 focus-visible:outline-offset-[-0.5rem] focus-visible:outline-kimi-green"
              href={item.href}
              key={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 justify-self-end lg:flex">
          <span aria-label="Current language: English only" className="inline-flex min-h-10 items-center gap-2 border-l border-black/15 pl-4 text-xs font-semibold tracking-[0.16em] text-kimi-black">
            {activeLocale.code}
            <span className="sr-only">English only</span>
          </span>
          <ButtonLink className="header-quote-cta" href="/contact" size="small" variant="dark">Request a Quote</ButtonLink>
        </div>

        <details
          className="group relative justify-self-end lg:hidden"
          onToggle={(event) => setMobileMenuOpen(event.currentTarget.open)}
          open={mobileMenuOpen}
        >
          <summary
            aria-label="Open navigation menu"
            className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-black/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kimi-green"
          >
            <span className="relative block h-3.5 w-5">
              <span className="absolute left-0 top-0 h-px w-5 bg-kimi-black transition-transform group-open:translate-y-[6px] group-open:rotate-45" />
              <span className="absolute bottom-0 left-0 h-px w-5 bg-kimi-black transition-transform group-open:-translate-y-[7px] group-open:-rotate-45" />
            </span>
          </summary>
          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-[4.125rem] flex w-[min(20rem,calc(100vw-2.5rem))] flex-col rounded-2xl border border-black/10 bg-white p-3 shadow-2xl"
          >
            {primaryNavigation.map((item) => (
              <Link
                className="rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-kimi-light/60 focus-visible:outline-2 focus-visible:outline-kimi-green"
                href={item.href}
                key={item.href}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isCurrent(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <div aria-label="Current language" className="mt-2 flex items-center justify-between border-y border-black/10 px-4 py-3 text-sm" role="status">
              <span className="text-kimi-gray">Language</span>
              <span className="font-semibold text-kimi-black">{activeLocale.label} only</span>
            </div>
            <ButtonLink
              className="mt-2 w-full"
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request a Quote
            </ButtonLink>
          </nav>
        </details>
      </Container>
    </header>
  );
}
