const greemhouseProduct = document.querySelector('.greenhouse-product__info-slider');

if (greemhouseProduct) {
  const swiperGreenhouseProduct = new Swiper('.greenhouse-product__info-slider', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.greenhouse-product__info-pagination',
      clickable: true,
    },

    autoplay: {
      delay: 6000,
    },
  });
};

