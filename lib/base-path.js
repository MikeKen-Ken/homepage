const isProd = process.env.NODE_ENV === 'production'

export const basePath = isProd ? '/homepage' : ''

export const withBasePath = (path) => `${basePath}${path}`
