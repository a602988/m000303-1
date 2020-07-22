# Nuxt.js 專案
更新日期：2020-07-22

## 目錄
1. [專案架構](#專案架構)
2. [npm指令](#npm指令)
3. [專案設定](#專案設定)
## 專案架構
```
📦
 ┣ 📂 assets (資源)           需被打包的資源
 ┃  ┣ 📂 images (圖片)
 ┃  ┗ 📂 sass (樣式)
 ┣ 📂 components (Vue組件) 
 ┣ 📂 layouts (Vue版型)
 ┣ 📂 locales (語系資料)
 ┣ 📂 middleware (中介件)
 ┣ 📂 pages (Vue頁面)
 ┃  ┗ 📂 _lang (頁面內容)      如無語系設定可省略此層
 ┣ 📂 plugins (套件)
 ┣ 📂 static（靜態資源）        不需被打包的資源
 ┃  ┣ 📂 js
 ┃  ┗ 📂 pug (頁面)            引入template用
 ┃    ┗ 📂 mixins (模版)       mixin無法被引入template !!
 ┣ 📂 store（狀態管理)          Vue組件之間的溝通管理
 ┣ 📜 nuxt.config.js          專案設定
 ┗ 📜 package.json            專案資訊
```
## npm指令
```bash
# 安裝依賴模組
$ npm install

# 開發模式 localhost:3000
$ npm run dev

# 服務端渲染部署
$ npm run build
$ npm run start

# 靜態應用部署
$ npm run generate
```
## 專案設定
> nuxt.config.js
```javascript
import webpack from 'webpack'; // 載入webpack

export default {
  mode: 'universal',
  target: 'server',
  /* head 設定
   * 個別頁面head資訊可在.vue裡設定
   */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/...' }
    ],
  },
  /* 公用樣式 */
  css: [
    '@/assets/sass/style.sass'
  ],
  /* 載入套件 */
  plugins: [
    {
      src: '@/plugins/bootstrap.js',
      ssr: false
    }
  ],
  components: true,
  buildModules: [
  ],
  /* 使用模組 */
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    'nuxt-i18n'
  ],
  /*
   * bootstrap-vue 設定
   * 關閉自動引入bootstrap CSS
   */
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },
  /*
   * style-resource 設定
   * 將scss變數/mixin傳送至所有CSS
   * !!!! 只需引入需要使用的檔案，否則CSS會一直重複 !!!!
   */
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
  /*
   * nuxt-i18n 設定
   * 語系設定，需在locales資料夾建立語系資料
   */
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
  /* 生產模式 */
  build: {
    extractCSS: true, // 將CSS打包為獨立.css檔，否則會直接生成<style>標籤
    plugins: [
      // webpack 設定
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery',
      }),
    ],
  }
}
```
