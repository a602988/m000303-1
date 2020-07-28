<template></template>
<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    src: {
      type: String,
      required: true
    }
  },
  render: function (createElement) {
    let data = {
      'style': {
        'background-image': 'url(' + this.src + ')'
      }
    }
    return createElement(this.tag, [this.$slots.default])
  },
}
</script>
