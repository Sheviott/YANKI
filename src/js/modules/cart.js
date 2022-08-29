// // Div внутри корзины, в который мы добавляем товары
// const cartWrapper =  link.import.querySelector('.cart__wrapper');

// // Отслеживаем клик на странице
// window.addEventListener('click', function (event) {
// 	// Проверяем что клик был совершен по кнопке "Добавить в корзину"
// 	if (event.target.hasAttribute('data-cart')) {
// 		// Находим карточку с товаром, внутри котрой был совершен клик
//         console.log(event.target.hasAttribute('data-cart'));

// 		const card = event.target.closest('.product__item');
//         console.log(card);
// 		// Собираем данные с этого товара и записываем их в единый объект productInfo
// 		const productInfo = {
// 			// id: card.dataset.id,
// 			imgSrc: card.querySelector('.swiper-slide img').getAttribute('src'),
// 			title: card.querySelector('.item__name').innerText,
// 			itemsColor: card.querySelector('item__color-input').getAttribute('selected'),
// 			price: card.querySelector('.item__price').innerText,
// 		};
//         console.log(productInfo);
// 		// Собранные данные подставим в шаблон для товара в корзине
// 		const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
// 								<div class="cart-item__top">
// 									<div class="cart-item__img">
// 										<img src="${productInfo.imgSrc}" alt="${productInfo.title}">
// 									</div>
// 									<div class="cart-item__desc">
// 										<div class="cart-item__title">${productInfo.title}</div>
// 										<div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

// 										<!-- cart-item__details -->
// 										<div class="cart-item__details">

// 											<div class="items items--small counter-wrapper">
// 												<div class="items__control" data-action="minus">-</div>
// 												<div class="items__current" data-counter="">${productInfo.counter}</div>
// 												<div class="items__control" data-action="plus">+</div>
// 											</div>

// 											<div class="price">
// 												<div class="price__currency">${productInfo.price}</div>
// 											</div>

// 										</div>
// 										<!-- // cart-item__details -->

// 									</div>
// 								</div>
// 							</div>`;

// 		// Отобразим товар в корзине
//         cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
// 	}
// });
