/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [320, 360, 414, 640, 768, 1024, 1152],
    imageSizes: [256, 340, 360, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
};

module.exports = nextConfig;
