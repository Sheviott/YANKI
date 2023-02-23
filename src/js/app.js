import "./modules/ibg.js";
import "./modules/burger.js";
import "./modules/swiper.js";
import "./modules/popup.js";
import "./modules/dynamicAdapt.js";
import "./modules/selects.js";
import "./modules/details.js";
import "./modules/search.js";
import "./modules/counter.js";

import "./modules/profile.js";
import "./modules/catalog.js";

import * as Functions from "./modules/functions.js";

Functions.scroll();

//страницы сайта
const homePage = document.querySelector(".main-screen"); // страница каталога
const catalogPage = document.querySelector(".catalog"); // страница каталога
const productPage = document.querySelector(".product"); //страница товара
const cartPage = document.querySelector(".cart"); // страница корзины

if (catalogPage) {
  // на странице каталога
  //рендерим товары
  renderCatalog();
  //рендер каталога товаров
  function renderCatalog() {
    var template = _.template($("#catalog-template").html()),
      $goods = $("#goods");
    $.getJSON("files/data/goods.json", function (data) {
      $goods.html(template({ goods: data }));
    });
    //все данные в строковом формате и некоторые параметры нуждаются в преобразовании, см. далее
  }

  //получаем данные с товара
  //при клике на картинку, считываем все параметры товара и добавляем их в LS
  //картинка является контейнером параметров для товара
  getDataToLS();

  function getDataToLS() {
    document.addEventListener("click", function (e) {
      const product = e.target.closest(".item"); //клик по товару
      if (product) {
        const data = product.querySelector(".js-item__data"); //картинка товара
        const id = data.dataset.id,
          name = data.dataset.name,
          img = data.dataset.img, //основное изображение товара
          imgmini = data.dataset.imgmini.split(","), // мини изображения товара, для галлереи
          price = data.dataset.price,
          sizes = data.dataset.sizes.split(","), //
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
  };

  //ФИЛЬТР ТОВАРОВ
  let filter = function () {
    let searchHeader = document.querySelector(".js-search-input");
    let filterSize = document.querySelector(".js-filters-size");
    // let filterPrice = document.querySelector(".js-filters-price");
    // let filterColor = document.querySelector(".js-filters-color");
    // let option = filterSize.querySelectorAll("option");

    // отслеживаем текущий размер
    let activeSize = "";
    filterSize.addEventListener("change", function (e) {
      activeSize = filterSize.value.toLowerCase();
      let filterItems = document.querySelectorAll("#goods .item");

      filterItems.forEach((item) => {
        if (
          item
            .querySelector(".item__size")
            .innerHTML.toLowerCase()
            .indexOf(activeSize) > -1
        ) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });

    });
    // поиск по названию товара
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
    sizesArray = sizes[0].split(" "); // массив размеров

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
    console.log();
  });

  // отслеживаем текущий размер
  let selectSize = document.querySelector(".js-selectNative");
  let activeSize = "";
  selectSize.addEventListener("change", function (e) {
    activeSize = selectSize.value;
  });

  //создаем в LS массив товаров если ничего не добавляли
  if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify([]));
  }
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
          count,
        ];
        let products = JSON.parse(localStorage.getItem("products"));
        console.log(products.length);
        if (products.length > 0) {
          let isAdd = false;
          for (let i = 0; i < products.length; i++) {
            if (storageCartData.equals(products[i])) {
              isAdd = true;
              alert("Товар уже есть в корзине");
              console.log(isAdd, "Товар есть в корзине");
              return;
            }
          }
          if (!isAdd) {
            products.push(storageCartData);
            localStorage.setItem("products", JSON.stringify(products));
            alert("Готово!");
            console.log(!isAdd, "Товара нет в корзине");
          }
        } else {
          products.push(storageCartData);
          localStorage.setItem("products", JSON.stringify(products));
          alert("Готово!");
        }
      } else {
        alert("Пожалуйста выберите размер.");
      }
    } else {
      alert("Пожалуйста выберите цвет.");
    }
  });
}

// сравнение массивов
Array.prototype.equals = function (array) {
  if (!array) return false;
  if (array === this) return true;

  if (
    this[0] == array[0] &&
    this[1] == array[1] &&
    this[4] == array[4] &&
    this[5] == array[5]
  ) {
    return true;
  }
  return false;
};
Object.defineProperty(Array.prototype, "equals", { enumerable: false });

if (cartPage) {
  // на странице корзины
  update_goods(); // рендер товаров
 
  // удаление товара из LS и корзины
document.addEventListener("click", function (e) {
  let targetBtnRemove = e.target.dataset.delete;
  if (targetBtnRemove == undefined) {
    return;
  } else {
    let products = JSON.parse(localStorage.getItem("products"));
    for (let i = 0; i < products.length; i++) {
    const element = products[i];
      if (String(targetBtnRemove) === String(element[0] + "_" + i)) {
        products.splice(i, 1);
        localStorage.setItem("products", JSON.stringify(products));
        update_goods();
      }
    }
  }
});

}

// обновить данные в корзине
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
  let delAttr = 0;
  if (products.length) {
    // let sizeArray; // переменная для рендера массива доступных размеров
    for (let i = 0; i < products.length; i++) {
      const id = products[i][0],
        name = products[i][1],
        img = products[i][2],
        price = products[i][3],
        color = products[i][4],
        size = products[i][5],
        count = products[i][6];
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
            ${size}
        </div>
        <div class="product-cart__count count js-count">
          <button data-product="${id + i}" data-action="minus" style="padding-bottom: 5px" class="count__action">-</button>
          <div data-counter class="count__current">${count}</div>
          <button data-product="${id + i}" data-action="plus" class="count__action">+</button>
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
      delAttr = "_" + [i];
    }
    //рендер суммы товаров
    cart.insertAdjacentHTML(
      "beforeend",
      `<div class="cart__sumprice">К оплате:<span id="total-cart-summa">${resultPrice} руб.</span></div>`
    );

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
                products[i][6] > 0 &&
                (products[i][0] + i) == e.target.dataset.product
              ) {
                products[i].splice(6, 1, products[i][6] + 1);
                console.log(products);
                localStorage.setItem("products", JSON.stringify(products));
                update_goods();
              }
            }
          } else if (targetBtnCount === "minus") {
            for (let i = 0; i < products.length; i++) {
              if (
                products[i][6] > 1 &&
                (products[i][0] + i) == e.target.dataset.product
              ) {
                products[i].splice(6, 1, products[i][6] - 1);
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
    cart.insertAdjacentHTML("beforeend", `<div>Тут пусто...</div>`);
  }
}

if (homePage) {
  // анимация на мейскрине, смотреть  новинки
  window.onload = function () {
    var body = document.querySelector(".js-animated-show-active");
    body.addEventListener("click", onLinkClicked);

    function onLinkClicked(event) {
      event.preventDefault();
      body.classList.remove("animated-show-active");
      setTimeout(onAnimationComplete, 400);
    }
    function onAnimationComplete() {
      window.location = body.href;
    }
  };
}
//добавить в избранное (анимация иконки)
let toAddFavor = function () {
  document.addEventListener("click", function (e) {
    let btn = e.target.closest(".js-item__to-favorits");
    if (btn) {
      btn.classList.toggle("__in-favor");
    }
  });
};
toAddFavor();
