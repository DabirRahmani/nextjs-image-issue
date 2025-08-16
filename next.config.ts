import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  async headers() {
    return [
      {
        source: "/_next/image",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800", // 1 day cache, 7 day stale
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.set.ir",
      },
      {
        protocol: "http",
        hostname: "172.16.20.33"
      }
    ],
    qualities: [100],
  },
};

export default nextConfig;
