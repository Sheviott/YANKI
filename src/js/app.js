import "./modules/ibg.js";
import "./modules/burger.js";
import "./modules/swiper.js";
import "./modules/spoiler.js";
import "./modules/popup.js";
import "./modules/scroll.js";
import "./modules/dynamicAdapt.js";
import "./modules/selects.js";
import "./modules/details.js";
import "./modules/search.js";
import "./modules/counter.js";

import "./modules/profile.js";
import "./modules/cart.js";
import "./modules/catalog.js";
import { forEach } from "underscore";

//страницы сайта
const catalogPage = document.querySelector(".catalog"); // страница каталога
const productPage = document.querySelector(".product"); //страница товара
const cartPage = document.querySelector(".cart"); // страница корзины

if (catalogPage) {
  // на странице каталога
  //рендерим товары
  renderCatalog();
  // берем данные из массива JSON и заполняем ими шаблон (рендер каталога товаров)
  function renderCatalog() {
    var template = _.template($("#catalog-template").html()),
      $goods = $("#goods");
    $.getJSON("files/data/goods.json", function (data) {
      $goods.html(template({ goods: data }));
    });
    //все данные в строковом формате и некоторые параметры нуждаются в преобразовании, см. далее
  }

  //получаем данные с товара
  //при клике на картинку-ссылку, считываем все параметры товара и добавляем их в LS
  //картинка-ссылка является контейнером параметров для товара
  getDataToLS();

  function getDataToLS() {
    document.addEventListener("click", function (e) {
      const product = e.target.closest(".item"); //клик по товару
      if (product) {
        const data = product.querySelector(".js-item__data"); // контейнер ссылка//картинка товара
        const id = data.dataset.id,
          name = data.dataset.name,
          img = data.dataset.img, //основное изображение товара
          imgmini = data.dataset.imgmini.split(","), // мини изображения товара, для галлереи (преобразуем в массив для корректного рендера галереи)
          price = data.dataset.price,
          sizes = data.dataset.sizes.split(","), // убираем запятые на рендере
          colors = [
            //массив true/false цветов
            data.dataset.colorWhite,
            data.dataset.colorBlue,
            data.dataset.colorYellow,
          ];
        //помещаем данные в масив localStorage
        let dataPageProduct = [id, name, img, imgmini, price, sizes, colors];
        localStorage.setItem("pageProduct", JSON.stringify(dataPageProduct));
      }
    });
  }


//ФИЛЬТР ТОВАРОВ
let filter = function () {
  let searchHeader = document.querySelector(".js-search-input");
  let filterSize = document.querySelector(".js-filters-size");
  let filterPrice = document.querySelector(".js-filters-price");
  let filterColor = document.querySelector(".js-filters-color");
  let option = filterSize.querySelectorAll("option");

  // отслеживаем текущий размер
  let activeSize = "";
  filterSize.addEventListener("change", function (e) {
    activeSize = filterSize.value.toLowerCase();
    let bodyProducts = document.querySelector("#goods");
    let filterItems = document.querySelectorAll("#goods .item");

    filterItems.forEach((item) => {
      if (item.querySelector('.item__size').innerHTML.toLowerCase().indexOf(activeSize) > -1) {
        item.style.display = "";
        // bodyProducts.insertAdjacentHTML("beforend",
        // `<div>У нас нет такого!</div>`)
      } else {
        item.style.display = "none";
      }
    });
    // if (filterItems.querySelector(`style.display = "none"`)) {
    //   console.log('true');
    // }
    // let a = filterItems.querySelector(`style.display = "none"`)
    // console.log(a);
  });

  searchHeader.addEventListener("keyup", function () {
    let filter = searchHeader.value.toLowerCase(),
      filterItems = document.querySelectorAll("#goods .item");
    filterItems.forEach((item) => {
      if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });
};
filter();
}

if (productPage) {
  // на странице товара
  let productName = document.querySelector(".js-item__name"); //имя товара
  let productPrice = document.querySelector(".js-item__price"); // цена товара
  let productBtnToCart = document.querySelector(".js-toCart-btn"); // кнопка добавления в корзину
  let colorsArray = document.querySelector(".js-item__colors"); // массив цветов

  let dataPageFromLS = localStorage.getItem("pageProduct"); // localStorage
  dataPageFromLS = JSON.parse(dataPageFromLS);

  const id = dataPageFromLS[0],
    name = dataPageFromLS[1],
    img = dataPageFromLS[2],
    imageArray = dataPageFromLS[3],
    price = dataPageFromLS[4],
    sizes = dataPageFromLS[5],
    //Цвета
    colors = dataPageFromLS[6],
    colorWhite = dataPageFromLS[6][0],
    colorBlue = dataPageFromLS[6][1],
    colorYellow = dataPageFromLS[6][2],
    count = 1, // количество товара по умолчанию
    //Размеры
    sizesArray = sizes[0].split(" "); // массив размеров (преобразуем для корректного отображения в select)

  renderProductPage();
  function renderProductPage() {
    //загружаем информацию на страницу
    productBtnToCart.dataset.id = id; // кнопка служит контейнером для информации о товаре
    productName.innerHTML = name;
    productPrice.innerHTML = price + " руб.";

    renderGallery();
    function renderGallery() {
      let swiper = document.querySelector(".js-swiper-wrapper"); // Массив с изображениями
      let miniSwiper = document.querySelector(".js-mini-swiper-wrapper"); // Мини-массив с изображениями
      //Рендер галереи изображений товара
      if (imageArray.length) {
        miniSwiper.insertAdjacentHTML(
          "afterBegin",
          `<div class="item__image swiper-slide ">
                   <img class="js-item__image" src='${imageArray[0]}' srcset='' alt=''>
                 </div>
                 <div class="item__image swiper-slide">
                   <img src='${imageArray[1]}' srcset='' alt=''>
                 </div>
                 <div class="item__image  swiper-slide">
                   <img src='${imageArray[2]}' srcset='' alt=''>
                 </div>
                 <div class="item__image  swiper-slide">
                   <img src='${imageArray[3]}' srcset='' alt=''>
                 </div>
                 <div class="item__image  swiper-slide">
                   <img src='${imageArray[4]}' srcset='' alt=''>
                 </div>
                 <div class="item__image  swiper-slide">
                   <img src='${imageArray[5]}' srcset='' alt=''>
                 </div>`
        );
        swiper.insertAdjacentHTML(
          "afterBegin",
          `<div class="item__image swiper-slide ">
                       <img class="js-item__image" src='${imageArray[0]}' srcset='' alt=''>
                     </div>
                     <div class="item__image swiper-slide">
                       <img src='${imageArray[1]}' srcset='' alt=''>
                     </div>
                     <div class="item__image swiper-slide">
                       <img src='${imageArray[2]}' srcset='' alt=''>
                     </div>
                     <div class="item__image swiper-slide">
                       <img src='${imageArray[3]}' srcset='' alt=''>
                     </div>
                     <div class="item__image swiper-slide">
                       <img src='${imageArray[4]}' srcset='' alt=''>
                     </div>
                     <div class="item__image swiper-slide">
                       <img src='${imageArray[5]}' srcset='' alt=''>
                     </div>`
        );
      }
    }
    renderColors();
    function renderColors() {
      if (colorWhite == "true") {
        colorsArray.insertAdjacentHTML(
          "afterBegin",
          `<input name="colors" id='white' class="item__color-input" type="radio">
          <label class="item__color-label" for="white">Цвет: Мороженое с ванилью
          </label>
          <span class="radio-color item__color item__color--white"></span>`
        );
      }
      if (colorBlue == "true") {
        colorsArray.insertAdjacentHTML(
          "afterBegin",
          `
          <input name="colors" id='blue' class="item__color-input" type="radio">
          <label class="item__color-label" for="blue">Цвет: Глубокий океан
          </label>
          <span class="radio-color item__color item__color--blue"></span>`
        );
      }
      if (colorYellow == "true") {
        colorsArray.insertAdjacentHTML(
          "afterBegin",
          `
          <input name="colors" id='yellow' class="item__color-input" type="radio">
          <label class="item__color-label" for="yellow">Цвет: Кофе с молоком меланж
          </label>
          <span class="radio-color item__color item__color--yellow"></span>`
        );
      }
    }
    renderSizes(); // ренедер select
    function renderSizes() {
      sizesArray.forEach((element) => {
        let selectSize = document.querySelector(".js-selectNative"); // массив размеров
        selectSize.insertAdjacentHTML(
          "beforeEnd",
          `<option value="${element}">${element}</option>`
        );
      });
    }
  }

  //добавление в корзину

  // отслеживаем текущий цвет
  let formColor = document.querySelector(".form__colors");
  let activeColor = "";
  formColor.addEventListener("click", function (e) {
    activeColor = e.target.id;
  });

  // отслеживаем текущий размер
  let selectSize = document.querySelector(".js-selectNative");
  let activeSize = "";
  selectSize.addEventListener("click", function (e) {
    activeSize = selectSize.value;
  });

  //при клике на кнопку добавляем в LS данные о товаре
  productBtnToCart.addEventListener("click", function (e) {
    if (activeColor) {
      // если выбрали цвет
      if (activeSize) {
        // если выбрали размер
        //записываем данные в LS
        let storageCartData = [
          id,
          name,
          img,
          price,
          activeColor,
          activeSize,
          sizesArray,
          count,
        ];
        let products = JSON.parse(localStorage.getItem("products"));
        products.push(storageCartData);
        localStorage.setItem("products", JSON.stringify(products));
      } else {
        alert("Пожалуйста выберите размер.");
      }
    } else {
      alert("Пожалуйста выберите цвет.");
    }
  });
  //создаем в LS массив товаров если ничего не добавляли
  if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify([]));
  }
}

if (cartPage) {
  // на странице корзины
  update_goods(); // рендер товаров
}

function update_goods() {
  let resultPrice = 0; // итоговая сумма товаров
  let sumPrice; // итоговая сумма товаров
  const cart = document.querySelector(".js-cart");
  cart.innerHTML = ""; //очищаем товары
  let currColor = ""; // переменная для рендера цвета
  let products = JSON.parse(localStorage.getItem("products"));
  if (products == null) {
    // условие для отображения что корзина пуста, при отсутствии товаров
    products = 0;
  }

  if (products.length) {
    let sizeArray; // переменная для рендера массива доступных размеров
    for (let i = 0; i < products.length; i++) {
      const id = products[i][0],
        name = products[i][1],
        img = products[i][2],
        price = products[i][3],
        color = products[i][4],
        size = products[i][5],
        aviableSize = products[i][6],
        count = products[i][7];
      // рендер цвета
      if (color == "yellow") {
        currColor = "yellow";
      }
      if (color == "white") {
        currColor = "white";
      }
      if (color == "blue") {
        currColor = "blue";
      }
      //рендер товаров
      cart.insertAdjacentHTML(
        "beforeend",
        `<div class="cart__item product-cart">
            <div class="product-cart__image js-product-cart__image item__image">
              <img src="${img}" srcset="" alt="" />
            </div>
        <div class="product-cart__info">
          <div class="product-cart__top">
            <div class="product-cart__id">арт. ${id}</div>
            <div class="product-cart__name">${name}</div>
          </div>
          <div class="product-cart__bottom">
          <span class="product-cart__color radio-color item__color item__color--${currColor}"></span>
        <div class="product-cart__size">
          <div class="product-cart__select selectWrapper">
            <select
              class="product-cart__selectNative selectNative js-selectNative"
              aria-labelledby="jobLabel">
            </select>
          </div>
        </div>
        <div class="product-cart__count count js-count">
          <button data-product="${id}" data-action="minus" style="padding-bottom: 5px" class="count__action">-</button>
          <div data-counter class="count__current">${count}</div>
          <button data-product="${id}" data-action="plus" class="count__action">+</button>
        </div>
        <div class="product-cart__price js-product-cart__price">${
          count * price
        } руб.</div>
        <button
          data-action="remove"
          data-delete="${id + "_" + [i]}"
          class="product-cart__remove"
          type="button">
            <svg class="product-cart__remove--icon">
              <use xlink:href="../images/icons.svg#clear"></use>
            </svg>
        </button>
        </div>
      </div>
    </div>
  `
      );
      sumPrice = count * price;
      resultPrice += parseInt(sumPrice); // Сумма всех товаров

      const selectSize = document.querySelectorAll(".js-selectNative"); // select размеров
      const bodySelectSize = selectSize[i]; // обращаемся к каждому select-у товара
      sizeArray = products[i][6]; //массив доступных размеров
      sizeArray.forEach((element) => {
        // заполняем select-ы товаров доступными размерами
        //при этом выделим размер, выбранный пользователем
        if (element == products[i][5]) {
          bodySelectSize.insertAdjacentHTML(
            "beforeEnd",
            `<option selected class="js-option" value="${element}">${element}</option>`
          );
        } else {
          bodySelectSize.insertAdjacentHTML(
            "beforeEnd",
            `<option class="js-option" value="${element}">${element}</option>`
          );
        }
      });
    }
    //рендер суммы товаров
    cart.insertAdjacentHTML(
      "beforeend",
      `<div class="cart__sumprice">К оплате:<span id="total-cart-summa">${resultPrice} руб.</span></div>`
    );

    // удаление товара из LS и корзины
    document.addEventListener("click", function (e) {
      let targetBtnRemove = e.target.dataset.delete;
      if (!targetBtnRemove) {
        return;
      } else {
        let products = JSON.parse(localStorage.getItem("products"));
        for (let i = 0; i < products.length; i++) {
          if (parseInt(targetBtnRemove) == parseInt(products[i][0])) {
            console.log("true");
            products.splice(i, 1);
            localStorage.setItem("products", JSON.stringify(products));
            update_goods();
          }
        }
      }
    });

    // меняем количество товара
    const countBody = document.querySelectorAll(".js-count");
    countBody.forEach((product) => {
      product.addEventListener("click", function (e) {
        if (!e.target.dataset.product) {
          console.log("return");
          return;
        } else {
          let products = JSON.parse(localStorage.getItem("products"));
          let targetBtnCount = e.target.dataset.action;

          if (targetBtnCount === "plus") {
            console.log("+1");
            for (let i = 0; i < products.length; i++) {
              if (
                products[i][7] > 0 &&
                products[i][0] == e.target.dataset.product
              ) {
                products[i].splice(7, 1, products[i][7] + 1);
                console.log(products);
                localStorage.setItem("products", JSON.stringify(products));
                update_goods();
              }
            }
          } else if (targetBtnCount === "minus") {
            for (let i = 0; i < products.length; i++) {
              if (
                products[i][7] > 1 &&
                products[i][0] == e.target.dataset.product
              ) {
                products[i].splice(7, 1, products[i][7] - 1);
                localStorage.setItem("products", JSON.stringify(products));
                update_goods();
              }
            }
          }
        }
      });
    });
  } else {
    // если корзина пуста
    cart.insertAdjacentHTML("beforeend", `<div>А в корзине пустота!</div>`);
  }
}
