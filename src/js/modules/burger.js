// Меню бургер
const header = document.querySelector('.header');

const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
// выпадашка с языком
const langDropdown = document.querySelector(".header__actions .js-dropdown");

if (iconMenu) {
  iconMenu.onclick = function () {
    header.classList.toggle('__menu-open');
    document.body.classList.toggle('__lock');
  };
};

