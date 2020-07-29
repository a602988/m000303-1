import Vue from 'vue'
import ImgSVG from '@/components/ImgSVG.vue'
import ImgFill from '@/components/ImgFill.vue'

// import all svg
~function (requireContext) {
  return requireContext.keys().map(requireContext)
}(require.context('@/assets/images', true, /\.svg$/))

Vue.component('img-svg', ImgSVG)
Vue.component('img-fill', ImgFill)