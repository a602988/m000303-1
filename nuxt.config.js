import webpack from 'webpack';

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
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;700&family=Noto+Sans+TC:wght@300;400;500;700&family=Poppins:wght@400;500;600;700&display=swap' }
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
    {
      src: '@/plugins/bootstrap.js',
      ssr: false
    }
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
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery',
      }),
    ],
  }
}
