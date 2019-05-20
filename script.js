'use strict';
  
const buttonNext = document.getElementById('next');
const buttonPrevious = document.getElementById('previous');
const images = document.getElementById('images');

buttonPrevious.addEventListener('click', (even) => {
    images.scrollLeft -= 390;
    buttonNext.classList.remove('disabled');
    if (images.scrollLeft<=0) {
        even.target.classList.add('disabled');
    }
});


buttonNext.addEventListener('click', (even) => {
    images.scrollLeft += 390;
    buttonPrevious.classList.remove('disabled');
    if (images.scrollLeft>780) {
        even.target.classList.add('disabled');
    } 
});