const next = document.getElementById("next");
const prev = document.getElementById("prev");
const container = document.getElementById("container");
const list = document.getElementById("list");

updateEnable();
const showNext = () => { 
	container.scrollLeft += container.clientWidth;
	updateEnable();
}

const showPrev = () => { 
	container.scrollLeft -= container.clientWidth;
	updateEnable();
}

function updateEnable() {
	prev.disabled = false;
	if(container.scrollLeft <= 0) {
		prev.disabled = true;
	}
	next.disabled = false;
	if(container.scrollLeft >= (list.childElementCount * 130 - container.clientWidth)) {
		next.disabled = true;
	}
}

next.addEventListener("click", showNext);
prev.addEventListener("click", showPrev);