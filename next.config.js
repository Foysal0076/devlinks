/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? {
          exclude: ['warn'],
        }
        : false,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'firebasestorage.googleapis.com'
      }
    ]
  }
}

module.exports = nextConfig
