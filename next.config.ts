import type { NextConfig } from "next";

// GitHub Pages 向け静的エクスポート設定
// Pages の URL: https://wynne-rei.github.io/isekai-shachou-mock/
const isProd = process.env.NODE_ENV === "production";
const repo = "isekai-shachou-mock";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  images: {
    unoptimized: true, // GitHub Pages は静的のみ、Next/Image 最適化は無効化
  },
  trailingSlash: true,
};

export default nextConfig;
