import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/products",
    "/products/delivery-x1",
    "/products/urban-x1",
    "/products/utility-x1",
    "/solutions/delivery-fleet",
    "/partners/distributors",
    "/contact",
  ];

  return routes.map((route) => ({
    url: absoluteUrl(route || "/"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/products" ? 0.9 : 0.8,
  }));
}
