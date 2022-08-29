
//import Swiper, { Navigation, Pagination } from 'swiper';

// const autoPrefixer = require("gulp-autoprefixer");
// var x = window.matchMedia("(min-width: 768px)")
//import Swiper from 'swiper/bundle';
new Swiper('.category__slider', {
  //modules: [Navigation, Pagination],
  spaceBetween: 15,

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
var galleryThumbs = new Swiper('.product__swiper-mini', {
  spaceBetween: 10,
  slidesPerView: 5,direction: 'vertical', // вертикальная прокрутка
  initialSlide: 6,
  breakpoints: { // условия для разных размеров окна браузера
		0: { // при 0px и выше
			direction: 'horizontal', // горизонтальная прокрутка
		},
		768: { // при 768px и выше
			direction: 'vertical', // вертикальная прокрутка
		}
	},
});

new Swiper('.product__swiper', {
  loop: true,
  slideToClickedSlide: true,direction: 'vertical', // вертикальная прокрутка
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs,
  //   swiper: {
  //     el: '.item__image-mini',
  // initialSlide: 6,
  // slidesPerView: 5,
  //   }
  },
  breakpoints: { // условия для разных размеров окна браузера
		0: { // при 0px и выше
			direction: 'horizontal', // горизонтальная прокрутка
		},
		768: { // при 768px и выше
			direction: 'vertical', // вертикальная прокрутка
		}
	},

});
// function myFunction(x) {
//   if (x.matches) { // Если медиа запрос совпадает
//     document.body.style.backgroundColor = "yellow";
//   } else {
//     document.body.style.backgroundColor = "pink";
//   }
// }
// myFunction(x) // Вызов функции прослушивателя во время выполнения
// x.addListener(myFunction)
// const gallery = document.querySelector('.gallery');
// const preview = document.querySelector('.gallery > .preview');
//     gallery.addEventListener('click', ({ target }) => {
//       if (!target.classList.contains('preview') && target.getAttribute('src'))
//         [preview.src, target.src] = [target.src, preview.src];
//     });
