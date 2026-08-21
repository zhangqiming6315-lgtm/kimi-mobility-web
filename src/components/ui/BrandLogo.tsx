import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  variant?: "lockup" | "symbol";
  priority?: boolean;
  className?: string;
};

const logos = {
  lockup: {
    src: "/logo/KIMI_Master_Lockup.svg",
    width: 283,
    height: 315,
  },
  symbol: {
    src: "/logo/KIMI_Master_Symbol.svg",
    width: 320,
    height: 226,
  },
} as const;

export default function BrandLogo({
  variant = "lockup",
  priority = false,
  className = "",
}: BrandLogoProps) {
  const logo = logos[variant];
  const image = (
    <Image
      alt={variant === "lockup" ? "KIMI Mobility" : "KIMI Mobility symbol"}
      className={`object-contain ${variant === "lockup" ? "h-full w-auto" : "h-auto w-full"} ${className}`}
      height={logo.height}
      priority={priority}
      src={logo.src}
      width={logo.width}
    />
  );

  if (variant === "symbol") {
    return image;
  }

  return (
    <Link
      aria-label="KIMI Mobility home"
      className="flex h-12 w-12 shrink-0 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kimi-green sm:h-[3.25rem] sm:w-[3.25rem]"
      href="/"
    >
      {image}
    </Link>
  );
}
