const left = document.querySelector('.left_button');
const right = document.querySelector('.right_button');
const list = document.querySelector('.imgList');

left.addEventListener('click', function(e){
    right.disabled = false;
    if (list.scrollLeft === 910) {
        left.disabled = true;
    }
    list.scrollLeft += 390;
});

right.addEventListener('click', function(e){
    left.disabled = false;
    if (right.scrollLeft === 0) {
        right.disabled = true;
    }
    list.scrollLeft -= 390;
});

