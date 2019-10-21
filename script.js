class Carousel {
  constructor() {
    this.images = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png'];
    this.positionCounter = 0;
  }

  createHtmlCode() {
    document.body.innerHTML = `
      <div class="overflow">
        <div class="images">
          ${this.images.map(imgSrc => `<img class="image" src="img\\${imgSrc}">`).join('')}
        </div>
      </div>
      <div class="buttons">
        <button class="button">Previous</button>
        <button class="button">Next</button>
      </div>
    `;
  }

  eventNext() {
    const imgList = document.querySelector('.images');
    if (this.positionCounter === -780) {
      this.positionCounter -=130;
    }
    else if (this.positionCounter > -780) {
      this.positionCounter -= 390;
    }
    imgList.setAttribute('style', `left: ${this.positionCounter}px`);
  }

  eventPrevious() {
    const imgList = document.querySelector('.images');
    if (this.positionCounter === -130) {
      this.positionCounter += 130;
    }
    else if (this.positionCounter < 0) {
      this.positionCounter += 390;
    }
    imgList.setAttribute('style', `left: ${this.positionCounter}px`);
  }

  addEvents() {
    const buttons = document.querySelector('.buttons').children;
    
    for (const button of buttons) {
      if (button.textContent === 'Next') {
        button.addEventListener('click', this.eventNext.bind(this));
      } else if (button.textContent === 'Previous') {
        button.addEventListener('click', this.eventPrevious.bind(this));
      }
    }
  }


}

const carousel = new Carousel();
carousel.createHtmlCode();
carousel.addEvents();