const container = document.querySelector(".container");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
let containerWidth;

const quantityElemnts = parseInt(prompt("How much elements would you like to see?", "cancell for default"));
if (typeof quantityElemnts === 'number' && !isNaN(quantityElemnts)) {
  containerWidth = quantityElemnts * 130;
  container.style.setProperty('--container-width', `${containerWidth}px`)
}

const lastSrcollPos = 1300 - containerWidth;

visibilityToggle();

leftArrow.addEventListener('click', handler);
rightArrow.addEventListener('click', handler);

function visibilityToggle() {
  if (container.scrollLeft === 0) {
    leftArrow.classList.add('disable_arrow');
  } else if (container.scrollLeft === lastSrcollPos) {
    rightArrow.classList.add('disable_arrow');
  } else {
    leftArrow.classList.remove('disable_arrow');
    rightArrow.classList.remove('disable_arrow');
  }
}

function handler() {
  if (this.classList.contains('left')) {
    container.scrollLeft -= containerWidth;
    visibilityToggle()
  } else if (this.classList.contains('right')) {
    container.scrollLeft += containerWidth;
    visibilityToggle();
  } else {
    console.log('error: left or right class not found');
  }
}
