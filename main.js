const prev = document.getElementById('prev');
const next = document.getElementById('next');
const container = document.querySelector('.container');

prev.addEventListener('click', (e) => {
    container.scrollLeft -= container.clientWidth;
    next.classList.remove('btn-disabled');

    if (!container.scrollLeft) {
        e.target.classList.add('btn-disabled');
    }
});

next.addEventListener('click', (e) => {
    container.scrollLeft += container.clientWidth;
    prev.classList.remove('btn-disabled');

    if ((container.scrollLeft + container.clientWidth) === container.scrollWidth) {
        e.target.classList.add('btn-disabled');
    }
});

