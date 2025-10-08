import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ourlegacy.centracdn.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'poolhousenewyork.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'bananarepublic.gap.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.cos.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'california-arts.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
