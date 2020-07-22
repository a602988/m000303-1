<template lang="pug">

</template>

<script>
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
  }
}
</script>

<style lang="sass" scoped>
/* scoped = local style */

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
