<template lang="pug">
//- mainlinks
mixin mainlink(title, url)
  li
    .ml-tt.d-flex.align-items-center
      a.ml-tt-txt(href=url + '.html')= title
    if block
      .ml-dd
        block
mixin mainlinks
  ul(data-level="0").d-lg-flex.list-unstyled
    +mainlink('關於我們', 'about')
      ul(data-level="1").d-lg-none.list-unstyled
        +mainlink('公司沿革', 'about-history')
        +mainlink('經營理念', 'about-philosophy')
    +mainlink('最新消息', 'news')
    +mainlink('產品專區', 'products')
      ul(data-level="1").d-lg-none.list-unstyled
        +mainlink('產品分類', 'product')
        +mainlink('產品分類', 'product')
        +mainlink('產品分類', 'product')
        +mainlink('產品分類', 'product')
    +mainlink('投資人專區', 'investor')
      ul(data-level="1").d-lg-none.list-unstyled
        +mainlink('公司治理', 'governance')
        +mainlink('重大訊息', 'announcement')
        +mainlink('財務資訊', 'finance')
        +mainlink('股東專區', 'stockholders')
        +mainlink('利害關係人', 'stakeholders')
        +mainlink('企業社會責任', 'csr')
    +mainlink('聯絡我們', 'contact')

//- site header
header.site-header
  .header-topbar
    .topbar-inner.container.d-flex.justify-content-between
      .logo
        a(href='./' :title="webname")
          img(:title="webname" alt="")
      .toggle.d-lg-none
        button(type="button")
      nav.mainlinks.desktop-menu(v-if="!isMobile")
        +mainlinks
  nav.mainlinks.mobile-menu(v-if="isMobile")
    +mainlinks
</template>

<script>
export default {
  data() {
    return {
      isMobile: false,
    }
  },
  delimiters: ['${', '}'],
  props: ['webname'],
  mounted() {
    this.$nextTick(() => {
      $(window).on('load resize', () => {
        if ( window.innerWidth >= 992 ) {
          this.isMobile = false;
          console.log(this.isMobile);
        } else {
          this.isMobile = true;
          console.log(this.isMobile);
        }
      });
    });
  },
}
</script>