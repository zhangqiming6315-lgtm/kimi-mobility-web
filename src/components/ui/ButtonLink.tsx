import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "light" | "dark";
  size?: "small" | "default" | "large";
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const variants = {
  primary:
    "bg-kimi-green text-kimi-black hover:bg-white focus-visible:outline-kimi-green",
  secondary:
    "border border-white/45 text-white hover:border-white hover:bg-white hover:text-kimi-black focus-visible:outline-white",
  light:
    "bg-white text-kimi-black hover:bg-kimi-green focus-visible:outline-kimi-green",
  dark:
    "bg-kimi-black text-white hover:bg-kimi-green hover:text-kimi-black focus-visible:outline-kimi-green active:bg-kimi-black active:text-white",
} as const;

const sizes = {
  small: "min-h-10 px-5 py-2.5 text-[0.8125rem]",
  default: "min-h-12 px-7 py-3 text-sm",
  large: "min-h-14 px-8 py-3.5 text-[0.9375rem]",
} as const;

export default function ButtonLink({
  children,
  href,
  variant = "primary",
  size = "default",
  className = "",
  onClick,
}: ButtonLinkProps) {
  return (
    <Link
      className={`inline-flex items-center justify-center rounded-full font-semibold tracking-[-0.01em] transition-[color,background-color,border-color,transform] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 ${sizes[size]} ${variants[variant]} ${className}`}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
