import type { NextConfig } from "next";

// Empty for prod (apex domain dattam.in); set to "/dattam" on the
// mohit-origin test repo, which serves from a project-page subpath.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  transpilePackages: ["@dattam/ui"],
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
