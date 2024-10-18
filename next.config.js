/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { 
    unoptimized: true,
    domains: ['i.imgur.com', 'images.unsplash.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;