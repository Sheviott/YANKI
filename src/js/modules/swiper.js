//import { tree } from 'gulp';
//import Swiper, { Mousewheel, Navigation, Pagination} from 'swiper';
//import Swiper from 'swiper';
//// import Swiper styles
//import 'swiper/css';

var consist = new Swiper('.consist', {
  // pass modules here
  // Пагинация
  pagination: {
    el: '.swiper-pagination',
    //Буллеты
    clickable: true,
    //Динамические буллеты
    //dynamicBullets: true,
    //Кастомные буллеты
    //renderBullet: function (index, className) {
    //  return '<span class="' + className + '">' + (index + 1) + '</span>';
    //},

    // Фракция
    //type: 'fraction',
    //Кастомные фракции
    //renderFraction: function (currentClass, totalClass) {
    //  return 'Фото <span class="' + currentClass + '"></span>' +
    //  ' из ' +
    //  ' <span class="' + totalClass + '"></span>';
    //},

    //Прогрессбар
    //type: 'progressbar'
  },

  //scrollbar: {
  //  el: '.swiper-scrollbar',
  //  //возможность перетаскивать скролл
  //  draggable: true
  //},


  ////включение/отключение
  ////перетаскивания на ПК
  //simulateTouch: true,
  ////Чувствительность свайпа
  //touchRatio: 1,
  //// Угол срабатывания свайпа/ перетаскивания
  //touchAngle: 45,
  ////Курсор перетаскивания
  //grabCursor: true,

  ////Переключение при клике на слайд
  //slideToClickedSlide: true,

  ////Навигация по хэшу
  ////data-hash="slide-1" - имя слайда
  //hashNavigation: {
  //  //отслеживать состояние
  //  watchState: true,
  //},

  //Управление клавиатурой
  keyboard: {
    //включить/выключить
    enabled: true,
    //включить выключить
    //только когда слайдер в пределах вьюпорта
    onlyInViewport: true,
    //включить выключить
    //управление клавиатурой
    //pageUp, pageDown
    pageUpDown: true,
  },
  breakpoints: {
    678: {
      slidesPerView: 2,
    },
  }

  ////управление колесом мыши
  //scrollbar: {
  //  el: "consist__slider",
  //},
  //mousewheel: true,
  // автовысота
  //autoHeight: true,
  ////количество слайдов для показа
  //slidesPerView: 3,
  //  // отключение функционала если слайдеров больше чем нужно
  //watchOverflow: true,
  ////отступ между слайдами в px
  //spaceBetween: 30,

  //// количество пролистываемых слайдеров
  //slidesPerGroup: 3,

  ////активный слайд по центру
  //centeredSlides: true,

  ////стартовый слайд c 0
  //initialSlide: 0,
  ////бесконечный слайдер (без скролла?)
  //loop: true,
  ////свободный режим
  //freeMode: true,
  ////скорость по умл. 300
  //speed: 300 

  ////эффекты переключения слайдов
  //effect: 'fade',
  //crossFade: true,
});
var trial = new Swiper('.trial-set__swiper', {
  // pass modules here

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  watchSlidesView: true,
  watchSlidesProgress: true,
  spaceBetween: 30,
  breakpoints: {
    375: {
      slidesPerView: 1.25,
    },
    479.99: {
      slidesPerView: 2,
    },
    679.99: {
      slidesPerView: 3,

    },
  }
});
var ration = new Swiper('.ration__swiper', {
  // pass modules here

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  controller: {
    inverse: true,
  },
  watchSlidesView: true,
  watchSlidesProgress: true,
  spaceBetween: 30,
  breakpoints: {
    319: {
      slidesPerView: 1.25,
    },
    479.99: {
      slidesPerView: 2,
    },
    679.99: {
      slidesPerView: 3,

    },
    1023.99: {
      slidesPerView: 4,

    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

var galleryThumbs = new Swiper('.popup-item-set__thumbs', {
  spaceBetween: 10,
  slidesPerView: 3,
  initialSlide: 3,
});
var galleryTop = new Swiper('.popup-item-set__swiper', {
  spaceBetween: 10,
  loop: true,
  thumbs: {
    swiper: galleryThumbs,
  },
});




const gallery = document.querySelector('.gallery');
const preview = document.querySelector('.gallery > .preview');
    gallery.addEventListener('click', ({ target }) => {
      if (!target.classList.contains('preview') && target.getAttribute('src'))
        [preview.src, target.src] = [target.src, preview.src];
    });

 

//var galleryTop = new Swiper('.popup-item-set__swiper', {
//  // pass modules here
//  spaceBetween: 10,
//      navigation: {
//        nextEl: '.swiper-button-next',
//        prevEl: '.swiper-button-prev',
//      },
//	 		loop: true,
//			loopedSlides: 4
//  //watchSlidesView: true,
//  //watchSlidesProgress: true,
//  //thumbs: {
//  //  swiper: {
//  //    el: '.popup-item-set__mini-swiper',
//  //    slidesPerView: 4,
//  //  }
//  //},
//});

//var galleryThumbs = new Swiper('.popup-item-set__thumbs', {
//  spaceBetween: 10,
//      centeredSlides: true,
//      slidesPerView: 'auto',
//      touchRatio: 0.2,
//      slideToClickedSlide: true,
//			loop: true,
//			loopedSlides: 4
//  //watchSlidesView: true,
//  //watchSlidesProgress: true,
//});

//galleryTop.controller.control = galleryThumbs;
//galleryThumbs.controller.control = galleryTop;

//document.addEventListener('resize', () => {
//  const width = window.innerWidth;
//  if (width < 400){
//    const slider = new Swiper('.recommendations__swiper', {
//      // pass modules here
//      modules: [Navigation, Pagination, Mousewheel],
//      // Пагинация
//        // отключение функционала если слайдеров больше чем нужно
//      pagination: {
//        el: '.swiper-pagination',
//        //Буллеты
//        clickable: true,
//        slidesPerView: 'auto',

//        renderBullet: function (index, className) {
//          let names = ['<span style="display:block; margin-top:-25px">Для взрослых</span>', '<span style="display:block; margin-top:-25px">Для щенков</span>'];
//          return '<span class="' + className + '">' + names[index] + '</span>';
//        },
//      },
//      breakpoints: {
//        376.99: {
//          slidesPerView: 'auto',
//        },
//      },
//      watchOverflow: true,

//    });
//  }
//})


var catalogSlider = null;
var mediaQuerySize = 376;

function catalogSliderInit() {
  if (!catalogSlider) {
    catalogSlider = new Swiper('.recommendations__swiper', {
      // pass modules here
      modules: [Navigation, Pagination, Mousewheel],
      // Пагинация
      // отключение функционала если слайдеров больше чем нужно
      pagination: {
        el: '.swiper-pagination',
        //Буллеты
        clickable: true,
        slidesPerView: 'auto',

        renderBullet: function (index, className) {
          let names = ['<span style="display:block; margin-top:-25px; font-size: 15px;">Для взрослых</span>', '<span style="display:block; margin-top:-25px">Для щенков</span>'];
          return '<span class="' + className + '">' + names[index] + '</span>';
        },
      },
      breakpoints: {
        376.99: {
          slidesPerView: 'auto',
        },
        //425.99: {
        //  slidesPerView: 2,

        //},
      },
      //watchOverflow: true,

    });
  }
}

function catalogSliderDestroy() {
  if (catalogSlider) {
    catalogSlider.destroy();
    catalogSlider = null;
  }
}

$(window).on("load resize", function (e) {
  // Берём текущую ширину экрана
  var windowWidth = $(this).innerWidth();

  // Если ширина экрана меньше или равна mediaQuerySize(1024)
  if (windowWidth <= mediaQuerySize) {
    // Инициализировать слайдер если он ещё не был инициализирован
    catalogSliderInit()
  } else {
    // Уничтожить слайдер если он был инициализирован
    catalogSliderDestroy()
  }
});

