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
  },
  render (h) {
    return h(
      'div',
      { 
        class: { 'imgFill': true },
        style: {
          backgroundImage: 'url(' + this.src + ')'
        }
      },
      [
        this.hasImg ?
        h('img', {
          attrs: {
            src: this.src
          }
        })
        : null
      ]
    )
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
