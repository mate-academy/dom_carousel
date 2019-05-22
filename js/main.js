document.addEventListener('DOMContentLoaded', function(){
  const container = document.querySelector(".container");
  const next = document.querySelector('.next');
  const width = container.offsetWidth;
  const imgWidth = 130;
  next.addEventListener('click', function(){
    container.scrollLeft += width;
    if (container.scrollLeft >= (width * 2 + imgWidth) ) {
      next.classList.add('disabled');
    }else if (container.scrollLeft >= width) { 
      prev.classList.remove('disabled');
    }
  })

  const prev = document.querySelector('.prev');
  prev.addEventListener('click', function(){
    container.scrollLeft -= width;
    if (container.scrollLeft < width * 3 && container.scrollLeft > width) {
      next.classList.remove('disabled');
    }else if (container.scrollLeft === 0) {
      prev.classList.add('disabled');
    }
  });
}, false );