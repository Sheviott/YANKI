// на десктопе убирает details
const defaultOffset = document.documentElement.clientWidth;
let details = document.querySelectorAll('.footer-menu details');
let detailsCatalog = document.querySelectorAll('.catalog details');
if (defaultOffset > 1023) {
  for (let index = 0; index < details.length; index++) {
    const detailsItem = details[index];
    detailsItem.open = true;
  }
}
if (defaultOffset > 1023) {
  for (let index = 0; index < detailsCatalog.length; index++) {
    const detailsCatalogItem = detailsCatalog[index];
    detailsCatalogItem.open = true;
  }
}
