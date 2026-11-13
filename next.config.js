// GitHub Pages 项目页部署在 /homepage 子路径下，其他托管平台（Vercel / EdgeOne / 对象存储等）
// 通常部署在域名根路径。用环境变量控制，默认根路径。
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
}
