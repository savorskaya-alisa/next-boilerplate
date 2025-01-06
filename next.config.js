require('path')

const mainConfig = {
  reactStrictMode: false,
  env: {
    API_BASE_URL: process.env.API_BASE_URL
  },
  images: {
    // Allow loading images from https (cdn, s3)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  }
}
/** @type {import('next').NextConfig} */
module.exports = {
  ...mainConfig,
  output: 'standalone',
  logging: {
    fetches: {
      fullUrl: true
    }
  }
}
