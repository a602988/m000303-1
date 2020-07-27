import Vue from 'vue'
Vue.prototype.$functions = {
  svg: function() {
    $('img.svg').each(function () {
      const $img = $(this),
        imgID = $img.attr('id'),
        imgClass = $img.attr('class'),
        imgURL = $img.attr('src') || $img.data('src');
      $.get(imgURL, function (data) {
        let $svg = $(data).find('svg');
        if (typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
        }
        if (typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
          $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }
        $img.replaceWith($svg);
      }, 'xml');
    });
  },
  imgFill: function() {
    $('.imgFill').imgLiquid()
  }
}