'use strict';

const forward = document.querySelector('.forward');
const backward = document.querySelector('.backward');
const images = document.querySelector('.images');
const slideStep = 390;

function scrollBackward (event) {
    images.scrollLeft -= slideStep;
    forward.classList.remove('disabled');
    if (images.scrollLeft <= 0) {
        event.target.classList.add('disabled');
    }
}
backward.addEventListener('click', scrollBackward);

function scrollForward (event) {
    images.scrollLeft += slideStep;
    backward.classList.remove('disabled');
    if (images.scrollLeft > slideStep * 2) {
        event.target.classList.add('disabled');
    }
}

forward.addEventListener('click', scrollForward);
