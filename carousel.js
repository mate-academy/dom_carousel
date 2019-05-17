const prev = document.querySelector('.arrow-prev');
const next = document.querySelector('.arrow-next');
const slideElement = document.querySelector('.images');

next.onclick = function () {
  slideElement.scrollLeft += 260;
}

prev.onclick = function () {
  slideElement.scrollLeft -= 260;
}
