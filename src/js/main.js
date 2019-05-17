document.getElementById('previous').onclick = arrowLeft;

let nullPosition = 0;

function arrowLeft() {
    console.log('carusel');
    nullPosition -= 260;
    document.getElementsByClassName('carusel_slides').style.left = -260;
  //carusel.style.left = -260 + 'px';
}
