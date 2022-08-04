//search button
let searchButton = document.querySelector('.user--menu__icons .icons__search');
let searchRow = document.querySelector('.menu__search');
let searchOpen = document.querySelector('.__search--open');

//let searchButton = document.querySelector('.user--menu__icons');
console.log(searchButton);
console.log(searchRow);

searchButton.addEventListener("click", function (e) {
  searchRow.classList.toggle('__search--open');
console.log('ds');

});
if (searchOpen) {
  document.addEventListener( 'click', (e) => {
    let target = e.target;
      if(!target.contains(searchRow) ) {
        searchRow.classList.remove('__search--open');
        console.log('ds');
      }

  })
}
   