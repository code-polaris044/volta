"use strict";

$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true, // 自動再生
    arrows: true, // 前後の矢印を表示
    dots: true, // ページネーションドットを表示
    prevArrow: '<i class="fas fa-chevron-left"></i>',
    nextArrow: '<i class="fas fa-chevron-right"></i>',
  });
});
