'use strict';

const scrollLeftButton = document.querySelector('#scrollLeftButton');
scrollLeftButton.addEventListener('click', function(event) {
  document.querySelector('.container').scrollLeft += 260;
  console.log('next');
});

const scrollRightButton = document.querySelector('#scrollRightButton');
scrollRightButton.addEventListener('click', function(event) {
  document.querySelector('.container').scrollLeft -= 260;
  console.log('previous');
});