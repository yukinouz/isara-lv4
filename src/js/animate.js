
// WordPress対応のため"jQuery"で記述開始＋function($)で以降は$の使用を可能にする
jQuery(function($){
  // fadeIn
  $(window).scroll(function () {
    $('.fade-in').each(function () {
      var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 100) {
        $(this).addClass('scroll-in');
      }
    });
  });
  // fadeInLeft
  $(window).scroll(function () {
    $('.fade-in-left').each(function () {
      var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 100) {
        $(this).addClass('scroll-in');
      }
    });
  });
  // fadeInRight
  $(window).scroll(function () {
    $('.fade-in-right').each(function () {
      var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 100) {
        $(this).addClass('scroll-in');
      }
    });
  });
});