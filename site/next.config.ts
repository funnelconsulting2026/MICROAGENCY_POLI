import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(isGithubPages
    ? {
        output: "export" as const,
        trailingSlash: true,
        images: { unoptimized: true },
        basePath: "/MICROAGENCY_POLI",
        assetPrefix: "/MICROAGENCY_POLI/",
      }
    : {}),
};

export default nextConfig;
