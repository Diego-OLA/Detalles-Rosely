import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    allowedDevOrigins: ["192.168.1.99"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co', 
      },
       {
        protocol: 'https',
        hostname: '*i.postimg.cc', 
      },
    ],
  },
};

export default nextConfig;
