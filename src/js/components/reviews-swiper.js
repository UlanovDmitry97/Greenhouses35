const swiperReviews = new Swiper('.swiper-reviews', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 50,

  navigation: {
    nextEl: '.swiper-reviews-button-next',
    prevEl: '.swiper-reviews-button-prev',
  },

  breakpoints: {
    576: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    968: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 60,
    }
  }
});
