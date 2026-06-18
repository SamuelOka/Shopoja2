import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "placeimg.com" },
      { protocol: "https", hostname: "i.imgur.com" },
      { protocol: "https", hostname: "api.escuelajs.co" },
    ],
  },
};

export default nextConfig;
