document.getElementById('previous').onclick = arrowLeft;
document.getElementById('next').onclick = arrowRight;
let element = document.getElementsByClassName('carusel_slides')[0];
let counter =0;
counter += 260;

function arrowRight() {
    counter += 260;
    if (counter <= 1040) {
        element.style.right = counter + 'px';
    } else {
        return;
    }
}

function arrowLeft() {
    counter -= 260;
    if (element.style.right > 0) {
        element.style.right = counter + 'px';
    } else {
        return;
    }
}
