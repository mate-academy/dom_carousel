const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const container = document.querySelector('.container');
console.log(window.onload);

nextButton.addEventListener('click', function () {
    prevButton.disabled = false;
    if (container.scrollLeft === 910) {
        nextButton.disabled = true;
    }
    container.scrollLeft += 390;
});

prevButton.addEventListener('click', function () {
    nextButton.disabled = false;
    if (container.scrollLeft === 0) {
        prevButton.disabled = true;
    }
    container.scrollLeft -= 390;
});
