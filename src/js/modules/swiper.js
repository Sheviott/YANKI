const categorySlider = new Swiper('.category__slider', {
  spaceBetween: 15,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    424.99: {
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
let mainScreen = new Swiper('.main-screen__swiper', {
  observer: true, 
  observeParents: true,
  allowTouchMove: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    424.99: {
      slidesPerView: 2,
    },
    767.99: {
      slidesPerView: 3,
      autoplay: false,
      loop: false,
    },
  },
  loop: true,
  autoplay: {
    delay: 1800,
  },
});

const galleryThumbs = new Swiper('.product__swiper-mini', {
  slidesPerView: 5,
  initialSlide: 6,
  freeMode: true,
  spaceBetween: 5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: { // условия для разных размеров окна браузера
		0: { // при 0px и вышеZ
			direction: 'horizontal', // горизонтальная прокрутка
		},

		768: { // при 768px и выше
			direction: 'vertical', // вертикальная прокрутка
		}
	},
});

const galleryProduct = new Swiper('.product__swiper', {
  slideToClickedSlide: true,
  direction: 'vertical', // вертикальная прокрутка
  slidesPerView: 'auto',
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 5000,
  },
  thumbs: {
    swiper: galleryThumbs,
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

let resize = document.querySelector('.swiper__icon');
let gallery = document.querySelector('.item__gallery');

if (resize) {
  resize.addEventListener('click', function(e) {
    gallery.classList.toggle('fullscreen');
    document.querySelector("body").classList.toggle('__lock');
  }, false);
}

var closeButtons = document.querySelectorAll('.close-button');
for (var y = 0; y < closeButtons.length; ++y) {
   closeButtons[y].addEventListener('click', function(event) {
      console.log(event);
      var fullScreenElements = document.querySelectorAll('.fullscreen');
      console.log(fullScreenElements);
      for (var x = 0; x < fullScreenElements.length; ++x) {
         fullScreenElements[x].classList.remove('fullscreen');
         setTimeout(function() {
            galleryTop.update();
            galleryThumbs.update();
         }, 200);
      }
   });
}