const carousel = document.querySelector('.carousel');
const arrowRight = carousel.querySelector('#right');
const arrowLeft = carousel.querySelector('#left');
let listWidth = carousel.querySelector('.carousel-list').offsetWidth;
let scroll = carousel.querySelector('.carousel-slide');
let scrollPosition = 0;

const maxWidthCarousel = carousel.querySelectorAll('img').length
* carousel.querySelector('img').offsetWidth;

carousel.addEventListener("click", function(event) {
  clickArrow[event.target.dataset.arrow]();
});

let clickArrow = {
  right: function() {
    arrowLeft.disabled = false;
    scrollPosition += listWidth;
    if (scrollPosition > maxWidthCarousel - listWidth) {
      scrollPosition = maxWidthCarousel - listWidth;
      event.target.disabled = true;
    }
    scroll.scrollLeft = `${scrollPosition}`;
  },
  left: function() {
    arrowRight.disabled = false;
    scrollPosition -= listWidth;
    if (scrollPosition <= 0) {
      scrollPosition = 0;
      event.target.disabled = true;
    }
    scroll.scrollLeft = `${scrollPosition}`;
  }
}
