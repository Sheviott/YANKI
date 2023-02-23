let dropdownBlock = document.querySelectorAll('[data-js-dropdown-active]');
let dropdownOpen = document.querySelectorAll('[data-js-dropdown-open]');
let arrow = document.querySelectorAll('.icon-arrow');

if (dropdownBlock.length > 0) {
  for (let index = 0; index < dropdownBlock.length; index++) {
    const dropdownBlockItem = dropdownBlock[index];
    const dropdownOpenBlock = dropdownOpen[index];
    const arrowItem = arrow[index];

    dropdownBlockItem.addEventListener("click", function (e) {
      dropdownOpenBlock.classList.toggle('visually-hidden');
      arrowItem.classList.toggle('__arrow-rotate');
    });
    // скрываем все по клику вне объекта
    document.addEventListener('click', (e) => {
      const pathDropdown = e.composedPath().includes(dropdownOpenBlock);
      const pathCurrent = e.composedPath().includes(dropdownBlockItem);
      if (!pathDropdown & !pathCurrent) {
        dropdownOpenBlock.classList.add('visually-hidden');
        arrowItem.classList.remove('__arrow-rotate');
      }
    });

  }
}
let selectProfile = document.querySelectorAll('.item-order__row');
for (let i = 0; i < selectProfile.length; i++) {
  const element = selectProfile[i];
  element.addEventListener("click", function (e) {
    console.log(element.closest('.item-order'));
    const bodyOrder = element.closest('.item-order');
    bodyOrder.querySelector('.item-order__body').classList.toggle('_active');
    bodyOrder.querySelector('.icon-arrow').classList.toggle('_active');
  });
}
