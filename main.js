const carousel = document.querySelector('.container');
const buttonsContainer = document.querySelector('.buttons');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

buttonsVisibility();

buttonsContainer.addEventListener('click', scroll)

function buttonsVisibility() {
  if (carousel.scrollLeft === 0) {
    prevButton.classList.add('disable');
  } else if (carousel.scrollLeft > 909) {
    nextButton.classList.add('disable');
  } else {
    prevButton.classList.remove('disable');
    nextButton.classList.remove('disable');
  }
}

function scroll(e) {
  console.log(e);
  if (e.target === nextButton) {
    carousel.scrollLeft += 390;
    buttonsVisibility();
  }
  if (e.target === prevButton) {
    carousel.scrollLeft -= 390;
    buttonsVisibility();
  }
}
