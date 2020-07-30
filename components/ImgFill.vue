<template lang="pug">
  .imgFill(:style="{'background-image': 'url(' + src + ')'}")
    img(v-if="hasImg" :src="src" alt="")
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    hasImg: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="sass" scoped>
.imgFill
  background-size: cover
  background-position: center center
  img
    display: none
</style>
