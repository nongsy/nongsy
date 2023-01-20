/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://www.kamis.or.kr/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
