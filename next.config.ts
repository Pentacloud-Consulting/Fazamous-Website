import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  // output: 'export' causes Turbopack fatal panic in dev — only apply for production builds
  ...(isDev ? {} : { output: "export" }),
  trailingSlash: true,
  images: {
    // Allow Next.js <Image> to work in both dev and static export
    unoptimized: true,
  },
};

export default nextConfig;
