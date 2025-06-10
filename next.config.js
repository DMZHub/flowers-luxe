/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static export to Cloudflare Pages
  trailingSlash: true, // Recommended for static sites
  images: {
    unoptimized: true, // Required for static export - disables Next.js image optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
};

module.exports = nextConfig;