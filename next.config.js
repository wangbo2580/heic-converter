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

  // 响应头配置
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'POST, OPTIONS' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
