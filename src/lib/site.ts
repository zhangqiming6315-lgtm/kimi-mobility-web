export type NavigationItem = {
  label: string;
  href: string;
};

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const siteUrl = (() => {
  if (!configuredSiteUrl) return "https://kimimobility.com";

  try {
    const url = new URL(configuredSiteUrl);
    return url.protocol === "http:" || url.protocol === "https:"
      ? url.origin
      : "https://kimimobility.com";
  } catch {
    return "https://kimimobility.com";
  }
})();

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteUrl}/`).toString();
}

export const primaryNavigation: NavigationItem[] = [
  { label: "Products", href: "/products" },
  { label: "Technology", href: "/#capability" },
  { label: "Company", href: "/#why-kimi" },
  { label: "Partners", href: "/#partners" },
  { label: "Contact", href: "/contact" },
];

export const activeLocale = {
  code: "EN",
  label: "English",
  locale: "en",
} as const;

export const company = {
  name: "Shanghai Kaimai New Energy Technology Co., Ltd.",
  brand: "KIMI Mobility",
  email: "admin@kimimobility.com",
  website: "kimimobility.com",
  statement: "Electric utility mobility solutions engineered for real work.",
} as const;
