document.addEventListener('DOMContentLoaded', function(){
  const container = document.querySelector(".container");
  const next = document.querySelector('.next');
  const width = container.offsetWidth;
  const imgWidth = 130;
  next.addEventListener('click', function(){
    container.scrollLeft += width;
    if (container.scrollLeft >= (width * 2 + imgWidth) ) {
      next.setAttribute("disabled", "disabled");
    }else{ 
      prev.removeAttribute("disabled", "disabled");
    }
  })

  const prev = document.querySelector('.prev');
  prev.addEventListener('click', function(){
    container.scrollLeft -= width;
    if (container.scrollLeft < width * 3 && container.scrollLeft > width) {
      next.removeAttribute("disabled", "disabled");
    }else if (container.scrollLeft === 0) {
      prev.setAttribute("disabled", "disabled");
    }
  });
}, false );