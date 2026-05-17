import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {
  trailingSlash: true,
  allowedDevOrigins: ["localhost"],
};

export default nextConfig;
