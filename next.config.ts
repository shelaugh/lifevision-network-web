import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {
  trailingSlash: true,
  allowedDevOrigins: ["localhost"],
  images: {
    remotePatterns: [
      // Unsplash 写真直接埋め込み (Phase 3 で本写真選定するまでの placeholder 兼用)
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
  },
};

export default nextConfig;
