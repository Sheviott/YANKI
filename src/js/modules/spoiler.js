
let elem = document.querySelector('summary');
if (elem) {
  elem.onclick = function () {
    let line = document.querySelector('.spoilers--block__icon');
    line.classList.toggle('icon-spoilerrr');
  };
};
