/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  /** 允許您將應用程序的頁面和組件放在 app 目錄中，而不是預設的 pages 目錄中 */
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
