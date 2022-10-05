const pictures = document.querySelector('.pictures');
let counter = 0;
let widthOfPictures = 130;

function shiftPictures () {
  pictures.style.transform = `translate(${counter}px)`;
}

left.onclick = function () {
  right.style.visibility = '';
  
  const left = document.getElementById('left');
  if (counter === -widthOfPictures) {
    counter = -3 * widthOfPictures; 
  }
  counter += 3 * widthOfPictures;
  shiftPictures();
  if (counter === 0) {
    left.style.visibility = 'hidden';
  } 
};

right.onclick = function() {
  left.style.visibility = 'visible';
  const right = document.getElementById('right');
  if (counter === -(6 * widthOfPictures)) {
    counter = -(4 * widthOfPictures); 
  }
  counter -= 3 * widthOfPictures;
  shiftPictures();  
  if (counter === -7 * widthOfPictures) {
    right.style.visibility = 'hidden';    
  }           
};

