import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enables static site export
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  // basePath: '/sinji-portfolio',
  // assetPrefix: '/sinji-portfolio'
};

export default nextConfig;
