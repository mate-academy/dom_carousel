const carousel = document.querySelector('.carousel');
const buttons = document.querySelector('.buttons');
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');

checkScroll();

buttons.addEventListener('click', (event) => {
    const { target } = event;
    if (target.nodeName === 'BUTTON') {
        scroll(target.dataset.action);
    }
});

function scroll(action) {
    if (action === 'next') {
        carousel.scrollLeft += 390;
    }
    if (action === 'prev') {
        carousel.scrollLeft -= 390;
    }
    checkScroll();
}


function checkScroll() {
    if (carousel.scrollLeft === 0) {
        btnPrev.classList.add('disabled');
    } else {
        btnPrev.classList.remove('disabled');
    }
    if (carousel.scrollLeft > 909) {
        btnNext.classList.add('disabled');
    } else {
        btnNext.classList.remove('disabled');
    }
}