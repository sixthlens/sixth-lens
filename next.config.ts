import type { NextConfig } from "next";
import path from "path";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
// A repository base path is only required for GitHub Pages project sites.
// Other CI providers, including the AWS deployment workflow, publish at `/`.
const isProjectPage = process.env.DEPLOY_TARGET === "github-pages" && !repositoryName.endsWith(".github.io");
const basePath = isProjectPage ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
};

export default nextConfig;
