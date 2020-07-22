
<template lang="pug">
.sample
  div
    Logo
    h1.title nuxt-sample
    .links
      a(href="https://nuxtjs.org/" rel="noopener noreferrer" class="button--green") Documentation
      a(href="https://github.com/nuxt/nuxt.js" rel="noopener noreferrer" class="button--grey") GitHub
</template>

<script>
import Logo from '@/components/Logo';
export default {
  data() {
    return {
      title: '首頁',
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  components: { Logo }
}
</script>

<style lang="sass" scoped>

.sample
  margin: 0 auto
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  text-align: center
  .title
    display: block
    font-weight: 300
    font-size: 100px
    color: #35495e
    letter-spacing: 1px
  .subtitle
    font-weight: 300
    font-size: 42px
    color: #526488
    word-spacing: 5px
    padding-bottom: 15px
  .links
    padding-top: 15px

</style>
