module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: `Naoki Kishi's Portfolio`,
    titleTemplate: `%s | Naoki Kishi's Portfolio`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Naoki Kishiのポートフォリオサイトです'
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@plus_kyoto' },
      { name: 'og:title', content: `Naoki Kishi's Portfolio Site` },
      {
        name: 'og:description',
        content: 'Naoki Kishiのポートフォリオサイトです'
      },
      {
        name: 'og:url',
        content: 'https://naoki.dev/'
      },
      {
        name: 'og:image',
        content: 'https://naoki.dev/og.png'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/vue-scrollto'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      'nuxt-sass-resources-loader',
      ['@/assets/styles/_colors.scss', '@/assets/styles/_mixins.scss']
    ],
    '@nuxtjs/pwa',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-127036212-5'
      }
    ]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
