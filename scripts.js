'use strict';

window.onload = function(event){

  const updateButtonState = function() {
    document.querySelector('#scrollRightButton').disabled = true;
      document.querySelector('#scrollLeftButton').disabled = true;
    if (document.querySelector('.hider').scrollLeft > 0) {
      document.querySelector('#scrollRightButton').disabled = false;
    }
    if (document.querySelector('.hider').scrollLeft < 1049) {
      document.querySelector('#scrollLeftButton').disabled = false;
    }
  }
  updateButtonState()

  const scrollLeftButton = document.querySelector('#scrollLeftButton');
  scrollLeftButton.addEventListener('click', function(event) {
    document.querySelector('.hider').scrollLeft += 450;
    updateButtonState()
  });

  const scrollRightButton = document.querySelector('#scrollRightButton');
  scrollRightButton.addEventListener('click', function(event) {
    document.querySelector('.hider').scrollLeft -= 450;
    updateButtonState()
  });
};
