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
  }
}
</script>