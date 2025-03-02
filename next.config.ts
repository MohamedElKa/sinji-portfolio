import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enables static site export
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
};

export default nextConfig;
