const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  basePath: isProd ? '/homepage' : '',
  assetPrefix: isProd ? '/homepage' : '',
  images: {
    unoptimized: true,
  },
}
