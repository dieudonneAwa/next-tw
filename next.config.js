module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  target: 'serverless',
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts|svg)x?$/,
      },
      use: ['@svgr/webpack'],
    })
    // if (isServer) {
    //   require('./scripts/generate-sitemap')
    // }

    return config
  },
}
