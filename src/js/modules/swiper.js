
//import Swiper, { Navigation, Pagination } from 'swiper';
//import Swiper from 'swiper/bundle';
new Swiper('.category__slider ', {
  //modules: [Navigation, Pagination],
  spaceBetween: 5,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    374.99: {
      slidesPerView: 2,
    },
    599.99: {
      slidesPerView: 3,
    },
    767.99: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
