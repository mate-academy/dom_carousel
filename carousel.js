const prev = document.querySelector('.arrow-prev');
const next = document.querySelector('.arrow-next');
const slideElement = document.querySelector('.images');

next.addEventListener('click', (event)=> {
  slideElement.scrollLeft += 260;
});

prev.addEventListener('click', (event)=> {
  slideElement.scrollLeft -= 260;
});
