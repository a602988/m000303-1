<template lang="pug">
  .side-menu
    ul.list-unstyled
      li.list-item
        n-link.d-flex-center.btn.rounded-circle.btn-blue.text-white(:to="localePath('/help')")
          span.txt 幫助中心
          span.icon-block.icon-fs
            img-svg(name="icon-help")
      li.list-item
        button.d-flex-center.btn.rounded-circle.btn-blue.text-white(type="button")
          span.txt 線上客服
          span.icon-block.icon-fs
            img-svg(name="icon-customer-service")
      li.list-item
        button.d-flex-center.btn.rounded-circle.btn-blue.text-white(type="button")
          span.txt QR CODE
          span.icon-block.icon-fs
            img-svg(name="icon-qrcode")
      li.list-item.go-top
        button.d-flex-center.btn.rounded-circle.btn-darkGray.text-white(type="button" @click="goTop()")
          span.icon-block.icon-fs
            img-svg(name="icon-go-top")
</template>
<style lang="sass">
.side-menu
  position: fixed
  z-index: 999
  top: 50%
  right: 30px
  +translateY(-50%)
  display: none
  .list-item
    + .list-item
      margin-top: 7.5px
      &.go-top
        margin-top: 30px
    .btn
      width: 60px
      height: 60px
      overflow: hidden
      box-shadow: 0 0 12px rgba(0,0,0,.2)
      .txt
        display: none
      .icon-block
        font-size: 26px
</style>
<script>
export default {
  methods: {
    goTop() {
      $('html, body').animate({ scrollTop: 0 }, 1200)
    }
  }
}
</script>