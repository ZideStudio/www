import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  devIndicators: false,
  output: 'standalone',
  trailingSlash: false,
  experimental: {
    optimizePackageImports: ['next-intl'],
  },
  // Project assets moved to one folder per project, keep legacy URLs (shared OG images, external links) working
  async redirects() {
    return [
      { source: '/assets/projects/slotfinder-logo.png', destination: '/assets/projects/slotfinder/logo.png', permanent: true },
      { source: '/assets/projects/:slug([a-z0-9-]+)\\.png', destination: '/assets/projects/:slug/background.png', permanent: true },
    ];
  },
};

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

export default withNextIntl(nextConfig);
