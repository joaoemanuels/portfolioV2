import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "seudominio.com",
      },
    ],
  },
};

export default nextConfig;
