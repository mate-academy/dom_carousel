'use strict';

let leftArrow = document.querySelector('.previous');
let rightArrow = document.querySelector('.next');
let count = 0;

leftArrow.addEventListener('click', function(){
    document.querySelector('.galery').scrollLeft -= 420;
    count -= 1;
});

rightArrow.addEventListener('click', function(){
    document.querySelector('.galery').scrollLeft += 420;
    count += 1;

});

if (count <= 0) {
    leftArrow.classList.add('disabled');
    rightArrow.classList.remove('disabled')
} else if (count > 1) {
    rightArrow.classList.add('disabled');
    leftArrow.classList.remove('disabled')
}
