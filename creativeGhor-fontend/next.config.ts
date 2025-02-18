import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["res.cloudinary.com"], // Add Cloudinary to allowed domains
  },
};

export default nextConfig;
