# Nuxt.js 專案

更新日期：2020-07-30  
&nbsp;  

## 目錄
1. [專案架構](#專案架構)
2. [npm指令](#npm指令)
3. [專案設定](#專案設定)
4. [路徑寫法](#路徑寫法)
5. [公用組件](#公用組件)
6. [線上文檔](#線上文檔)

&nbsp;

## 專案架構
```
📦
 ┣ 📂 assets (資源)           需被編譯的資源
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
 ┣ 📂 static (靜態資源)        不需被編譯的資源(會直接在根目錄下產生連結，開發用資源請勿放置於此)
 ┣ 📂 templates (pug模版)      引入.vue用
 ┃  ┗ 📂 mixins       
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
import webpack from 'webpack' // 載入webpack
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin' // SVG 套件

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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/...' } // 也可從CSS引入
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
   */
  plugins: [
    { src: '@/plugins/global.js', ssr: true }, // 引入公用組件，ssr須為true
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
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        // svg 設定
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
      // webpack 設定
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery',
      }),
      // svg 套件
      new SpriteLoaderPlugin()
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
'~/assets/images/path/to/demo.jpg'

// 來源為 static 資料夾
'/path/to/demo.jpg' // 不須加static
```
> css 內
```css
/* ~後不加斜線！重要！ */
background-image: url('~assets/path/to/demo.jpg')
```
&nbsp;

## 公用組件
### img-fill
> 取代imgLiquid.js

|  屬性  |   類型  |  預設值  | 說明           |
|:------:|:-------:|:-------:|:----------------|
| src    | String  | null    | 圖片連結        |
| hasImg | Boolean | false   | 是否在div下產出圖片（同imgLiquid，圖片會被隱藏）|

HTML 寫法
```html
<img-fill :src="require('@/assets/path/to/demo.jpg')"></img-fill>
<img-fill class="my-class" :src="require('~/assets/path/to/demo.jpg')" :hasImg="true"></img-fill>
```

Pug 寫法
```pug
img-fill(:src="require('@/assets/path/to/demo.jpg')")
img-fill.my-class(:src="require('" + imgUrl + "')" hasImg=true)
```

渲染結果
```html
<div class="imgFill my-class" style="background-image: url('/_nuxt/assets/path/to/demo.jpg')">
  <!-- 若 hasImg="true" 才會產出 -->
  <img src="/_nuxt/assets/path/to/demo.jpg" alt="" />
</div>
```

預設樣式（可至 `components/ImgFill.vue` 修改或另寫樣式覆蓋）
```css
.imgFill {
  background-size: cover;
  background-position: center center;
}
.imgFill img {
  display: none;
}
```
### img-svg
> 取代img轉svg，使用[svg-sprite-loader](https://github.com/JetBrains/svg-sprite-loader)（全站svg需從 `plugins/global.js` 引入）

|  屬性  |   類型  |  預設值  | 說明       |
|:------:|:-------:|:-------:|:----------|
| name   | String  | null    | svg檔名   |

HTML 寫法
```html
<!-- assets/images/svg/my-icon.svg -->
<img-svg name="my-icon"></img-svg>
```

Pug 寫法
```pug
//- assets/images/svg/my-icon.svg
img-svg(name="my-icon")
```

渲染結果
```html
<svg><use xlink:href="#my-icon"></use></svg>
```
&nbsp;

## 線上文檔

* [Nuxt.js](https://nuxtjs.org/)
* [Vue.js](https://vuejs.org/)
* [BootstrapVue](https://bootstrap-vue.org/docs)
* [nuxt-i18n](https://i18n.nuxtjs.org/) (設定語系)
* [Vuex.js](https://vuex.vuejs.org/) (狀態管理)
* [Webpack](https://webpack.js.org/guides/)
* [Pug](https://pugjs.org/api/getting-started.html)
