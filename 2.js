const left = document.querySelector('.left');
const right = document.querySelector('.right');
const list = document.querySelector('.imgList');

left.onclick = function () {
    list.scrollLeft += 260;
}

right.onclick = function () {
    list.scrollLeft -= 260
}

