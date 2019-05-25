let arrowLeft = document.getElementById('previous');
let arrowRight = document.getElementById('next');
let element = document.getElementsByClassName('carusel_slides')[0];
let counter =260;
let initialValue = 260;
let moveRight =  element.style.right = counter + 'px';

arrowRight.addEventListener('click', ()=> {
  counter += initialValue;
  arrowRight.disabled = false;
  element.style.right = counter + 'px';
  if (counter > 780) arrowRight.disabled = true;
  arrowLeft.disabled = false;
});

arrowLeft.addEventListener('click', ()=> {
  arrowLeft.disabled = true;
  arrowRight.disabled = false;
  counter -= initialValue;
  arrowLeft.disabled = false;
  element.style.right = (counter - initialValue) + 'px';
  if (parseInt(getComputedStyle(element).right) <= 260) arrowLeft.disabled = true;
 }); 
