/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用实验性功能
  experimental: {
    serverComponentsExternalPackages: ['sharp'],
  },

  // 图片优化配置
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // 压缩和优化
  compress: true,
  poweredByHeader: false,

  // 响应头配置
  async headers() {
    const allowedOrigin = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.avif-heicconverter.info';

    return [
      // 全局安全头
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://pagead2.googlesyndication.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self'; connect-src 'self' https://www.google-analytics.com https://analytics.google.com; frame-src https://googleads.g.doubleclick.net https://www.google.com;"
          },
        ],
      },
      // API 专用头
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: allowedOrigin },
          { key: 'Access-Control-Allow-Methods', value: 'POST, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
          { key: 'Access-Control-Max-Age', value: '86400' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
