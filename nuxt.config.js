import webpack from 'webpack'
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'og:title', propety: 'og:title', content: '' },
      { hid: 'og:url', propety: 'og:url', content: '' },
      { hid: 'og:site_name', propety: 'og:site_name', content: '' },
      { hid: 'og:description', propety: 'og:description', content: '' },
      { hid: 'og:image', propety: 'og:image', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/sass/style.sass'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '@/plugins/bootstrap.js', mode: 'client', ssr: false },
    { src: '@/plugins/global.js', mode: 'client', ssr: false }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    'nuxt-i18n'
  ],
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },
  styleResources: {
    scss: [
      'bootstrap/scss/_functions.scss',
      'bootstrap/scss/_variables.scss',
      'bootstrap/scss/_mixins.scss',
      'bootstrap-vue/src/_variables.scss',
      '@/assets/sass/config/*.scss'
    ],
    sass: [
      '@/assets/sass/config/*.sass'
    ]
  },
  i18n: {
    locales: ['zh-Hant', 'zh-Hans', 'vi', 'th'],
    defaultLocale: 'zh-Hant',
    vueI18n: {
      fallbackLocale: 'zh-Hant',
      messages: {
        'zh-Hant': require('./locales/zh-Hant.json'),
        'zh-Hans': require('./locales/zh-Hans.json'),
        'vi': require('./locales/vi.json'),
        'th': require('./locales/th.json')
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extractCSS: true,
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        // svg loader
        const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
        svgRule.test = /\.(png|jpe?g|gif|webp)$/
        config.module.rules.push({
          test: /\.svg$/,
          loader: 'svg-sprite-loader',
          options: {
            symbolId: '[name]'
          }
        })
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery',
      }),
      new SpriteLoaderPlugin()
    ]
  }
}
