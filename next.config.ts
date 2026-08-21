import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      { source: "/products/delivery", destination: "/products/delivery-x1", permanent: true },
      { source: "/products/urban", destination: "/products/urban-x1", permanent: true },
      { source: "/products/utility", destination: "/products/utility-x1", permanent: true },
    ];
  },
};

export default nextConfig;
