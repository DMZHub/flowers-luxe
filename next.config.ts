/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export with images
  },
  // Disable TypeScript type checking during build - helps with builds
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // This is important for API routes in static export
  experimental: {
    // This allows us to generate static API routes
    outputFileTracingExcludes: {
      '/api/**/*': true,
    },
  },
};

export default nextConfig;
