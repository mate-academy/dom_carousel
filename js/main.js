document.addEventListener('DOMContentLoaded', function(){
  let next = document.querySelector('.next');
  next.onclick = function() {
    document.querySelector(".container").scrollLeft += 390;
    if (document.querySelector(".container").scrollLeft >= 900) {
      next.classList.add('disabled');
    }else if (document.querySelector(".container").scrollLeft >= 390) { 
      prev.classList.remove('disabled');
    }
  };
  let prev = document.querySelector('.prev');
  prev.onclick = function() {
    document.querySelector(".container").scrollLeft -= 390;
    if (document.querySelector(".container").scrollLeft < 900 && document.querySelector(".container").scrollLeft > 391) {
      next.classList.remove('disabled');
    }else if (document.querySelector(".container").scrollLeft === 0) {
      prev.classList.add('disabled');
    }
  };
}, false );