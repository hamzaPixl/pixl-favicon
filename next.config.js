const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const withImages = require('next-images')
const injected = require('./src/injected.json')

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})

module.exports = withPlugins(
  [
    optimizedImages,
    withPWA,
    withImages({
      images: {
        domains: ['flowbite.s3.amazonaws.com'],
      },
    }),
  ],
  {
    i18n: {
      locales: injected.locales,
      defaultLocale: injected.defaultLocale,
    },
  },
)
