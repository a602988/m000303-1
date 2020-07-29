<template lang="pug">
  .wp
    <site-header :webname="$t('website.title')" />
    <Nuxt />
    <site-footer />
    <side-menu />
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SideMenu from '@/components/SideMenu'
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
    'site-footer': Footer,
    'side-menu': SideMenu
  }
}
</script>