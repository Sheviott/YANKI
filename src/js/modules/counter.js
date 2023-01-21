// let counter;
// let price;
// window.addEventListener("click", function (event) {
//   // Проверяем клик строго по кнопкам Плюс либо Минус
//   if ( event.target.dataset.action === "plus" || event.target.dataset.action === "minus"
//   ) {
//     const counterBody = event.target.closest(".count");
//     counter = counterBody.querySelector("[data-counter]");
// 	price = document.querySelector(".product-cart__price");
// 	console.log(price);
//   }

//   // Проверяем является ли элемент по которому был совершен клик кнопкой Плюс
//   if (event.target.dataset.action === "plus") {
//     counter.innerText = ++counter.innerText;
//   }

//   // Проверяем является ли элемент по которому был совершен клик кнопкой Минус
//   if (event.target.dataset.action === "minus") {
//     // Проверяем чтобы счетчик был больше 1
//     if (parseInt(counter.innerText) > 1) {
//       // Изменяем текст в счетчике уменьшая его на 1
//       counter.innerText = --counter.innerText;
//     }
//   }
//   //Удаляем из корзины товар
//   // if (event.target.dataset.action === "remove") {
//   //   event.target.closest(".cart__item").remove();
//   // }

// });
