'use strict';

let leftArrow = document.querySelector('.previous');
let rightArrow = document.querySelector('.next');
let count = 0;
leftArrow.classList.add('disabled')
rightArrow.addEventListener('click', function(event){
    count += 420;
    document.querySelector('.galery').scrollLeft += 420;
    if (count >= 420) {
        leftArrow.classList.remove('disabled');
    }
    if (count >= 1260) {
        count = 1260;
        rightArrow.classList.add('disabled');
    }
});

leftArrow.addEventListener('click', function(event) {
    count -= 420;
    document.querySelector('.galery').scrollLeft -= 420;
    if (count <= 0) {
        count = 0;
        leftArrow.classList.add('disabled');
    }
    if (count <= 840) {
        rightArrow.classList.remove('disabled');
    }
});
