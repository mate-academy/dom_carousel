'use strict';

const arrows = document.querySelectorAll('.arrow');
const sliderImages = document.querySelector('.slider-images');

arrows.forEach((arrow) => {
  arrow.addEventListener('click', arrowsHandler);
})

let shiftValue = 0;

function arrowsHandler() {

  if (this.classList.contains('left')) {
    shiftValue += 390;
  } else {
    shiftValue -= 390;
  }

  if (shiftValue > 0) {
    shiftValue = 0;
    arrows[0].classList.add('disabled');
  } else if (shiftValue <= -sliderImages.clientWidth + 390) {
    shiftValue = -sliderImages.clientWidth + 390;
    arrows[1].classList.add('disabled');
  } else {
    arrows.forEach((arrow) => arrow.classList.remove('disabled'));
  }

  sliderImages.style.transform = `translateX(${shiftValue +"px"})`;
}
