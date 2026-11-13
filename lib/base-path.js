// 与 next.config.js 保持一致：默认部署在域名根路径，
// GitHub Pages 项目页通过 NEXT_PUBLIC_BASE_PATH=/homepage 覆盖。
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const withBasePath = (path) => `${basePath}${path}`
