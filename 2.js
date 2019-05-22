const left = document.querySelector('.left');
const right = document.querySelector('.right');
const list = document.querySelector('.imgList');

left.addEventListener('click', function(e){
    list.scrollLeft += 390;
});

right.addEventListener('click', function(e){
    list.scrollLeft -= 390;
});

