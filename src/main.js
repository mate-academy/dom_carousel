const buttons = Array.from(document.querySelectorAll(".arrow"));
const imgContainer = document.querySelector(".img_container");
const width = imgContainer.querySelector("img").width;
const imgLength = imgContainer.querySelectorAll("img").length;
const quantityPictures = document.querySelector('.img_wrapper').offsetWidth / width;
const bezier = "cubic-bezier(.56,-1.99,.64,1.99)";


buttons.forEach(elem => elem.addEventListener("click", slide, false));

function slide(event) {
  
  event.target.removeEventListener('click', slide);
  
  const position = getOffsetX(imgContainer);
  const direction = getAttribute(event.target, "direction");
  const step = width * quantityPictures;
  const stepRight = Math.max(position - step, -width * (imgLength - quantityPictures));
  const stepLeft = Math.min(position + step, 0);


  switch (direction) {
    case "left":
      imgContainer.style.transform = `translateX(${stepLeft}px)`;
      imgContainer.style.transition = `2s ${bezier}`;
      break;

    case "right":
      imgContainer.style.transform = `translateX(${stepRight}px)`;
      imgContainer.style.transition = `2s ${bezier}`;
      break;

    default:
      break;
  }
  imgContainer.addEventListener('transitionend', () => {
    buttons.forEach(elem => elem.addEventListener("click", slide, false));
  })
}

function getAttribute(elem, attribute) {
  return elem.dataset[attribute];
}

function getOffsetX(elem) {
  const children = elem.getBoundingClientRect().left;
  const parrent = document.querySelector(".img_wrapper");
  return children - parrent.getBoundingClientRect().left;
}
