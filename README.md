# Nuxt.js 專案

更新日期：2020-07-22  
&nbsp;  

## 目錄
1. [專案架構](#專案架構)
2. [npm指令](#npm指令)
3. [專案設定](#專案設定)
4. [已知問題](#已知問題)
5. [線上文檔](#線上文檔)

&nbsp;

## 專案架構
```
📦
 ┣ 📂 assets (資源)           需被打包的資源
 ┃  ┣ 📂 images (圖片)
 ┃  ┗ 📂 sass (樣式)
 ┣ 📂 components (Vue組件)    非頁面的vue組件放置於此
 ┃  ┗ 📜 <組件名稱>.vue        e.g. Header.vue
 ┣ 📂 layouts (Vue版型)
 ┃  ┗ 📜 default.vue          公用版型
 ┣ 📂 locales (語系資料)       若不需語系可刪除
 ┃  ┗ 📜 <語系>.json           e.g. zh-Hant.json / en.json
 ┣ 📂 middleware (中介件)
 ┣ 📂 pages (Vue頁面)
 ┃  ┗ 📜 <頁面名稱>.vue        e.g. index.vue (非頁面請勿放置於此)
 ┣ 📂 plugins (套件)
 ┃  ┗ 📜 <套件名稱>.js         e.g. bootstrap.js (須從nuxt.config.js引入)
 ┣ 📂 static (靜態資源)        不需被打包的資源
 ┃  ┣ 📂 js
 ┃  ┗ 📂 pug (頁面內容)        引入template用
 ┃    ┗ 📂 mixins (模版)       
 ┣ 📂 store (狀態管理)         組件之間的溝通管理(Vuex)
 ┣ 📜 nuxt.config.js          專案設定
 ┗ 📜 package.json            專案資訊
```  
&nbsp; 

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
&nbsp;
  
## 專案設定
> nuxt.config.js
```javascript
import webpack from 'webpack'; // 載入webpack

export default {
  mode: 'universal',
  target: 'server',
  /*
   * head 設定
   * 個別頁面head資訊可在.vue裡設定
   * ※ hid 為可以覆蓋的 meta，例如在index.vue裡設定不同的description，預設的description會被覆蓋
   */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'og:title', propety: 'og:title', content: '' },
      { hid: 'og:url', propety: 'og:url', content: '' },
      { hid: 'og:site_name', propety: 'og:site_name', content: '' },
      { hid: 'og:description', propety: 'og:description', content: '' },
      { hid: 'og:image', propety: 'og:image', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/...' }
    ],
  },
  /*
   * 公用樣式
   * 引入sass或SCSS，會自動編譯成CSS
   */
  css: [
    '@/assets/sass/style.sass'
  ],
  /*
   * 載入套件
   * 個別組件使用之套件可在.vue裡設定
   * ssr預設為true（前後端都做渲染）
   */
  plugins: [
    { src: '@/plugins/jquery.js', ssr: false },
    { src: '@/plugins/bootstrap.js', ssr: false }
  ],
  components: true,
  buildModules: [],
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
   * !! 只需引入需要使用的檔案，否則CSS會一直重複 !!
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
&nbsp;

## 路徑寫法
> vue/js/pug 內
```js
// 來源為 assets 或其他資料夾
'@/assets/images/path/to/demo.jpg'
'~assets/images/path/to/demo.jpg'

// 來源為 static 資料夾
'/path/to/demo.jpg' // 不須加static
```
> css 內
```css
background-image: url('~assets/path/to/demo.jpg')
```

## 已知問題
&nbsp;

## 線上文檔
自己玩，更好玩 (๑•̀ㅂ•́)و✧

* [Nuxt.js](https://nuxtjs.org/)
* [Vue.js](https://vuejs.org/)
* [BootstrapVue](https://bootstrap-vue.org/docs)
* [nuxt-i18n](https://i18n.nuxtjs.org/) (設定語系)
* [Vuex.js](https://vuex.vuejs.org/) (狀態管理)
* [Webpack](https://webpack.js.org/guides/)
* [Pug](https://pugjs.org/api/getting-started.html)
