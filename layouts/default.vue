<template lang="pug">
  .wp
    <site-header webname="網站名稱"></site-header>
    <Nuxt />
    .footer
</template>

<style lang="sass">

html, body
  margin: 0
  font-family: $font-family
  font-size: 1rem
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box

*, *:focus
  outline: none

a, a:hover
  color: inherit
  text-decoration: none

.btn
  &:hover
    box-shadow: none

.button--green 
  display: inline-block
  border-radius: 4px
  border: 1px solid #3b8070
  color: #3b8070
  text-decoration: none
  padding: 10px 30px
  &:hover 
    color: #fff
    background-color: #3b8070

.button--grey
  display: inline-block
  border-radius: 4px
  border: 1px solid #35495e
  color: #35495e
  text-decoration: none
  padding: 10px 30px
  margin-left: 15px
  &:hover 
    color: #fff
    background-color: #35495e

</style>

<script>
import $ from 'jquery';
import Header from '@/components/Header';

export default {
  components: {
    'site-header': Header,
  },
}
</script>