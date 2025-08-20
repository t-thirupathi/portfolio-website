import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // enables static export
  images: {
    unoptimized: true // required for Firebase Hosting
  }
};

export default nextConfig;
