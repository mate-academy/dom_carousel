'use strict';
const container = document.querySelector('.container');
const buttonNext = document.querySelector('.button-next');
const buttonPrev = document.querySelector('.button-prev');
const posX = container.scrollLeft;

buttonNext.disabled = false;
buttonPrev.disabled = true;

buttonNext.addEventListener('click', scrollNext);
buttonPrev.addEventListener('click', scrollPrev);

if (container.scrollLeft > 0 && container.scrollLeft < 910) {
  buttonPrev.disabled = false;
  buttonNext.disabled = false;
}

function scrollNext() {
  const x = container.scrollLeft;
  container.scrollLeft = x + 390;
  if (container.scrollLeft === 910) {
    buttonPrev.disabled = false;
    buttonNext.disabled = true;
  }
  if (container.scrollLeft > 0 && container.scrollLeft < 910) {
    buttonPrev.disabled = false;
    buttonNext.disabled = false;
  }
}

function scrollPrev() {
  const x = container.scrollLeft;
  container.scrollLeft = x - 390;
  if (posX === 0) {
    buttonPrev.disabled = true;
    buttonNext.disabled = false;
  }
  if (container.scrollLeft > 0 && container.scrollLeft < 910) {
    buttonPrev.disabled = false;
    buttonNext.disabled = false;
  }
}
