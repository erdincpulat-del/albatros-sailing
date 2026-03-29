import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: true, // local image kullanımında sorunsuz çalışır
  },

  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;