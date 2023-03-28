let index = 1;
const outer = document.querySelector('.outer');
const slides =  document.querySelectorAll('.slide');
const firstSlide = slides[0];
const endSlide = slides[slides.length-1];
let num = slides.length;
console.log(outer);
const cloneFirst = firstSlide.cloneNode(true);
const cloneend =  endSlide.cloneNode(true);
let lastSlide = slides[slides.length - 1]; 
  outer.insertBefore(cloneend, slides[0]);
  outer.appendChild(cloneFirst);

  let isTransitioning = false;

  function handle(direction) {
    if (isTransitioning) {
      return;
    }
    isTransitioning = true;
    outer.style.transition = '0.5s';
    direction !=='right' ? (index -=1) : (index +=1);
    console.log(index);
    moveslide();
  }

document.addEventListener('DOMContentLoaded', () => {
  outer.style.transform = `translateX(-${index *100}%)`;
});


const moveslide = () => {
  outer.style.transform = `translateX(-${index * 100}%)`;
  if (index === 0) {
    outer.addEventListener('transitionend', starttoend);
    function starttoend() {
      outer.style.transition = '0s'
      index = slides.length;
      outer.style.transform = `translateX(-${index *100}%)`;
      outer.removeEventListener('transitionend',starttoend);
      isTransitioning = false;
    }
    outer.style.transition = '0.5s';
  } else if (index === slides.length+1) {
    outer.addEventListener('transitionend', myFunction);
    function myFunction() {
      outer.style.transition = '0s'
      index = 1;
      outer.style.transform = `translateX(-${index *100}%)`;
      outer.removeEventListener('transitionend',myFunction);
      isTransitioning = false;
    }
    outer.style.transition = '0.5s';
  } else {
    outer.addEventListener('transitionend', end);
    function end() {
      outer.removeEventListener('transitionend', end);
      isTransitioning = false;
    }
  }
};
