import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the site portable: every route is exported as static HTML so it can
  // be hosted on Netlify, Cloudflare Pages, GitHub Pages or similar services.
  output: "export",
};

export default nextConfig;
