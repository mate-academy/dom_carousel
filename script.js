const conteiner = document.querySelector(".conteiner");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

const quantityElemnts = parseInt(prompt("How much elements would you like to see?", "cancell for default"));
if (typeof quantityElemnts === 'number' && !isNaN(quantityElemnts)) {
  alert("IN!")
  conteiner.style.width = quantityElemnts * 130 + "px";
}

const conteinerWidth = conteiner.offsetWidth;
const lastSrcollPos = 1300 - conteinerWidth;

visibilityToggle();

leftArrow.addEventListener('click', handler);
rightArrow.addEventListener('click', handler);

function visibilityToggle () {
  if(conteiner.scrollLeft === 0) {
    leftArrow.classList.add('disableArrow');
  } else if(conteiner.scrollLeft === lastSrcollPos) {
    rightArrow.classList.add('disableArrow');
  } else {
    leftArrow.classList.remove('disableArrow');
    rightArrow.classList.remove('disableArrow');
  }
}

function handler() {
  if(this.className.indexOf('left') !== -1) {
    conteiner.scrollLeft -= conteinerWidth;
    visibilityToggle()
  } else if(this.className.indexOf('right') !== -1) {
    conteiner.scrollLeft += conteinerWidth;
    visibilityToggle();
  } else {
    console.log('error: left or right class not found');
  }
}
