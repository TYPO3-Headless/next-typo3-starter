import type { T3NextConfig } from '@t3headless/next-typo3'

const nextConfig: T3NextConfig = {
  publicRuntimeConfig: {
    typo3: {
      baseUrl: 'localhost:3000',
      api: {
        baseUrl: 'https://api.t3pwa.com',
        // initialDataCache: 86400,
        // pageDataCache: 86400,
        proxyReqHeaders: ['cookie'],
      },
      i18n: {
        default: 'en',
        locales: ['en'],
      },
    },
  },
}

export default nextConfig
