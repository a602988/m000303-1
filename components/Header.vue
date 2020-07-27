<template src="@/templates/header.pug" lang="pug"></template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      userLogin: false,
    }
  },
  props: ['webname'],
  methods : {
    ...mapActions(['logout']),
    userLogOut() {
      this.logout()
      this.$nextTick(() => {
        this.$functions.svg()
      })
    }
  },
  mounted() {
    this.$nextTick(() => {
      $('.ml-category').each(function() {
        const $category = $(this),
              $mltt = $category.find('.ml-tt'),
              $mldd = $category.find('.ml-dd');
        $mltt.find('.ml-tt-txt').on('mouseenter', function() {
          $category.addClass('active').siblings('.ml-category').removeClass('active');
        });
        if ( $mldd.length ) {
          $category.on('mouseleave', function() {
            $category.removeClass('active');
          });
        } else {
          $mltt.find('.ml-tt-txt').on('mouseleave', function() {
            $category.removeClass('active');
          });
        }
      });
    });
  }
}
</script>