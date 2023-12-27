"use strict";

function showBtnScrollTop() {
  if ($('.scrollTop').length) {
    var windowScrollTop = $(window).scrollTop();
    if (windowScrollTop > 1) $('.scrollTop').fadeIn();else $('.scrollTop').fadeOut();
  }
}

$(".scrollTop .linkItem").on('click', function (e) {
  $('body,html').animate({
    scrollTop: 0
  }, 100);
  e.preventDefault();
});
$(window).on('load', function () {
  showBtnScrollTop();
});
var timeOut;
$(window).on('scroll', function () {
  showBtnScrollTop();
});