'use strict';
  
const buttonNext = document.getElementById('next');

buttonNext.onclick = function () {
    document.getElementById('images').scrollLeft += 390;
};

const buttonPrevious = document.getElementById('previous');

buttonPrevious.onclick = function () {
    document.getElementById('images').scrollLeft -= 390;
};
