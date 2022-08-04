let currentdropdown = document.querySelectorAll('.current-dropdown');
let dropdownOpen = document.querySelectorAll('.dropdown');
let arrow = document.querySelectorAll('.arrow-icon');

if (currentdropdown.length > 0) {
  for (let index = 0; index < currentdropdown.length; index++) {
    const currentdropdownItem = currentdropdown[index];
    const dropdownOpenBlock = dropdownOpen[index];
    const arrowItem = arrow[index];

    currentdropdownItem.addEventListener("click", function (e) {
      dropdownOpenBlock.classList.toggle('visually-hidden');
      arrowItem.classList.toggle('__arrow-rotate');
      
    });
    
    //document.addEventListener( 'click', (e) => {
    //  let target = e.target;
    //    if(!target.contains(currentdropdownItem) && target.parentElement.contains(currentdropdownItem)) {
    //      dropdownOpenBlock.classList.add('visually-hidden');
    //    }
    //    console.log(target.parentElement.contains(currentdropdownItem));
      
    //})
   
  }
}
//currentdropdown.onclick = function {
  
//}
