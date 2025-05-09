
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // ✅ Disable image optimization for static export
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ This disables ESLint during `next build`
  }
};

module.exports = nextConfig;

