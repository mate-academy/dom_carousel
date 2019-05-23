document.getElementById('previous').onclick = arrowLeft;
document.getElementById('next').onclick = arrowRight;
let element = document.getElementsByClassName('carusel_slides')[0];
let counter =0;

function arrowRight() {
  counter += 260;
  if(counter > 1040) counter = 1040;
  if (counter <= 1040) {
     element.style.right = counter + 'px';
  } 
  return;
}

function arrowLeft() {
  let styleRight = element.style.right;
  counter -= 260;
  if(counter < 0) counter = 0;
  if ( parseInt(styleRight.replace(/\D+/g,"")) > 0) {
      element.style.right = counter + 'px';
  } 
  return;
}

