const promoSliderElement = document.querySelector('.promo-slider');
let swiper;

const initSwiper = (slider) => {
  swiper = new Swiper(slider, {
    navigation: {
      nextEl: ".promo-slider__button--next",
      prevEl: ".promo-slider__button--prev",
    },
    pagination: {
      el: '.promo-slider__pagination',
    },
    autoplay: {
      delay: 5000,
    },
    loop: true,
  });
  return swiper;
};

const initPromoSlider = () => {
  if (!promoSliderElement) {
    return;
  }

  initSwiper(promoSliderElement);
};

initPromoSlider();

