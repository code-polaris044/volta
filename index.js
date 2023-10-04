"use strict";

$(function () {
  $(".slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,

    responsive: [
      {
        breakpoint: 768, // ブレイクポイントを指定
        settings: {
          slidesToShow: 2,
          speed: 600,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "10%",
        },
      },
    ],
  });
});

// $(".slider").slick();

// $(".slider").slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
// });
