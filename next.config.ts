import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: 'build',
  output: "export",
  basePath: "/me",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
