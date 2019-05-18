document.addEventListener('DOMContentLoaded', function(){
  let next = document.querySelector('.next');
  next.onclick = function() {
    document.querySelector(".container").scrollLeft += 390;
  };
  let prev = document.querySelector('.prev');
  prev.onclick = function() {
    document.querySelector(".container").scrollLeft -= 390;
  };
}, false );