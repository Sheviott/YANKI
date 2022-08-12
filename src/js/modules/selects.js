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
      console.log(e);
    });
    // скрываем все по клику вне объекта
    document.addEventListener('click', (e) => {
      const pathDropdown = e.composedPath().includes(dropdownOpenBlock);
      const pathCurrent = e.composedPath().includes(currentdropdownItem);
      console.log(pathCurrent)
      if (!pathDropdown & !pathCurrent) {
        dropdownOpenBlock.classList.add('visually-hidden');
        arrowItem.classList.remove('__arrow-rotate');
      }
    })

  }
}

