const buttonRight = window.document.querySelector('.button-arrow.-right');
const buttonLeft = window.document.querySelector('.button-arrow.-left');
const caroussel = window.document.querySelector('.item-wrap.-node-card');


let pixels = 500;

buttonRight.addEventListener('click', function() {
    pixels = pixels - 200;
    caroussel.style = `transform: translateX(${pixels}px)`;
})

buttonLeft.addEventListener('click', function() {
    pixels = pixels + 200;
    caroussel.style = `transform: translateX(${pixels}px)`;
})