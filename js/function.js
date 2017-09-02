$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.logo').css({
    'transform' : 'translate(0px, '+ wScroll /2 + 'px)'
  });

  $('.background').css({
    'transform' : 'translate(0px, '+ wScroll /4 + 'px)'
  });

  $('.foreground').css({
    'transform' : 'translate(0px, -'+ wScroll /6 + 'px)'
  });

  var wScroll = $(this).scrollTop();

  $('.connit-blue').css({
    'transform' : 'translate(0px, -'+ wScroll /6 + 'px)'
  });

  $('.connit-light').css({
    'transform' : 'translate(0px, -'+ wScroll /8 + 'px)'
  });

  $('.connit-lighter').css({
    'transform' : 'translate(0px, -'+ wScroll /10 + 'px)'
  });

  if (wScroll > $('.gallery').offset().top - ($(window).height() / 1.1)) {

    $('.gallery .grid .box').each(function(i) {

      setTimeout(function() {
        $('.gallery .grid .box').eq(i).addClass('is-showing');
      }, 150 * (i+1))
    });
  }
});
