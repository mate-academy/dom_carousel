const carousel = document.querySelector('.carousel');
const arrowPrev = carousel.querySelector('.btn-prev');
const arrowNext = carousel.querySelector('.btn-next');
const carousel_slider = carousel.querySelector('.carousel-slide');



carousel.addEventListener('click', function(event) {
  let target = event.target;
  if(target === arrowPrev) {
    carousel_slider.scrollLeft += 130;
  }
  if(target === arrowNext) {
    carousel_slider.scrollLeft -= 130;
  }
});