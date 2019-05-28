let arrowLeft = document.getElementById('previous');
let arrowRight = document.getElementById('next');
let element = document.querySelector('.carusel_slides');
let counter = 0;
let imgWidth = document.querySelector('img').offsetWidth;
let initialValue = 390;

arrowRight.addEventListener('click', ()=> {
  counter += initialValue;
  arrowRight.disabled = false;
   if (counter > 780) {
    arrowRight.disabled = true;
   }
  element.style.right = counter + 'px';
  arrowLeft.disabled = false;
});

arrowLeft.addEventListener('click', ()=> {
  arrowRight.disabled = false;
  counter -= initialValue;
  arrowLeft.disabled = false;
  if (counter <= 0) {
    counter = 0;
    arrowLeft.disabled = true;
  }
  element.style.right = counter + 'px';
}); 
