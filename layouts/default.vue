<template lang="pug">
  .wp
    <site-header :webname="$t('website.title')"></site-header>
    <Nuxt />
    <site-footer></site-footer>
</template>

<style lang="sass">
// global style
</style>

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
  mounted() {
    this.$nextTick(() => {
      this.$functions.svg()
      this.$functions.imgFill()
    })
  },
}
</script>