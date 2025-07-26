import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // experimental:{
  //   serverActions: true,
  // }
  images: {
    domains: ["cdn.sanity.io"],
  }
};

export default nextConfig;
