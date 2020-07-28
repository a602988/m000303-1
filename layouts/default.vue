<template lang="pug">
  .wp
    <site-header :webname="$t('website.title')"></site-header>
    <Nuxt />
    <site-footer></site-footer>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      titleTemplate: this.$t('website.title') + ' - %s'
    }
  },
  components: {
    'site-header': Header,
    'site-footer': Footer
  },
  methods: {
    init(el) {
      el.$functions.svg()
      el.$functions.imgFill()
      // img draggable false
      $('img').on('dragstart', function(e) {
        e.preventDefault()
      })
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init(this)
    })
  },
  watch: {
    '$route'(to, from) {
      const $this = this
      this.$nextTick(() => {
        setTimeout(() => {
          $this.init($this)
        }, 100)
      })
    }
  }
}
</script>