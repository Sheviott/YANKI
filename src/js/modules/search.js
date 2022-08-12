//search button
let searchIcon = document.querySelector('.icons__search');
let searchInput = document.querySelector('.menu__search');
console.log(searchIcon, searchInput)
searchIcon.addEventListener("click", function (e) {
  searchInput.classList.toggle('visually-hidden')
  searchIcon.classList.toggle('visually-hidden')
});