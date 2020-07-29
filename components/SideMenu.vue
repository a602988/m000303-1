<template lang="pug">
  .side-menu
    ul.list-unstyled
      li.list-item
        n-link.d-flex-center.btn.rounded-circle.btn-blue(:to="localePath('/help')")
          span.txt 幫助中心
          span.icon-block.icon-fs
            img-svg(name="icon-help")
      li.list-item
        button.d-flex-center.btn.rounded-circle.btn-blue(type="button")
          span.txt 線上客服
          span.icon-block.icon-fs
            img-svg(name="icon-customer-service")
      li.list-item
        button.d-flex-center.btn.rounded-circle.btn-blue(type="button")
          span.txt QR CODE
          span.icon-block.icon-fs
            img-svg(name="icon-qrcode")
      li.list-item.go-top
        button.d-flex-center.btn.rounded-circle.btn-darkGray(type="button")
          span.icon-block.icon-fs
            img-svg(name="icon-go-top")
</template>
<style lang="sass">
.side-menu
  position: fixed
  top: 50%
  right: 30px
  +translateY(-50%)
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
    toTop() {

    }
  }
}
</script>