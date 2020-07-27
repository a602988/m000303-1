<template src="@/templates/index.pug" lang="pug"></template>

<script>
import Vue from 'vue'

// swiper
import { Swiper as SwiperClass, Pagination, Autoplay } from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
SwiperClass.use([Pagination, Autoplay])
Vue.use(getAwesomeSwiper(SwiperClass))
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass)
import 'swiper/swiper-bundle.css'

export default {
  components: {
    'marquee-text': () => process.client ? import('@/components/Marquee.vue') : null,
  },
  data() {
    return {
      title: this.$t('mainlinks.index'),
      swiperOptions: {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function(index, className) {
            const imgsrc = $('.home-banner').find('.swiper-slide').eq(index).find('img').attr('src')
            return '<span class="'+ className +'"><span class="bullet-thumbnail"><img src="'+ imgsrc+'" alt="" /></span></span>'
          }
        }
      }
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  mounted() {
    
  }
}
</script>

<style src="@/assets/sass/project/pages/_index.sass" lang="sass"></style>
