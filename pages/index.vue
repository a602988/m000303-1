<template lang="pug">

</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      title: this.$t('mainlinks.index')
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  methods: {
    ...mapMutations(['detectLogin'])
  },
  beforeMount() {
    this.detectLogin(true)
  }
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
