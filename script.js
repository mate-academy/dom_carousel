const carousel = document.querySelector('.carousel');
const buttons = document.querySelector('.buttons');
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');

checkScroll();

buttons.onclick = function (e) {
    const target = e.target;
    console.log(carousel.scrollLeft);
    if(target.nodeName === 'BUTTON') {
        scroll(target.dataset.action);
    }
};

function scroll(action) {
    if(action === 'next') {
        carousel.scrollLeft += 390;
    }
    if (action === 'prev') {
        carousel.scrollLeft -= 390;
    }
    checkScroll();
}


function checkScroll() {
    if (carousel.scrollLeft === 0) {
        btnPrev.disabled = true;
        btnPrev.style.opacity = "0.5";
    } else {
        btnPrev.disabled = false;
        btnPrev.style.opacity = "1";
    }
    if (carousel.scrollLeft > 909.5) {
        btnNext.disabled = true;
        btnNext.style.opacity = "0.5";
    } else {
        btnNext.disabled = false;
        btnNext.style.opacity = "1";
    }
}