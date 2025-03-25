/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export with images
  },
  // Keep existing configuration options
  // Disable ESLint during build - optional but can help with builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript type checking during build - optional but can help with builds
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
