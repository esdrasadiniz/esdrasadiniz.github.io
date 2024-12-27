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

//const track = document.querySelector('.carousel-track');

let isDragging = false;
let startX, currentTranslate, prevTranslate = 0;

// Função para iniciar o arraste
function startDrag(e) {
  isDragging = true;
  startX = getPositionX(e); // Obtém a posição inicial do toque ou clique
  caroussel.style.cursor = 'grabbing';
  caroussel.style.transition = 'none'; // Remove a transição durante o arraste
}

// Função para realizar o movimento
function drag(e) {
  if (!isDragging) return;
  const currentPosition = getPositionX(e);
  const movement = currentPosition - startX; // Calcula o movimento
  currentTranslate = prevTranslate + movement;
  caroussel.style.transform = `translateX(${currentTranslate}px)`;
}

// Função para finalizar o arraste
function stopDrag() {
  if (!isDragging) return;
  isDragging = false;
  prevTranslate = currentTranslate; // Armazena a posição final
  caroussel.style.transition = 'transform 0.3s ease';
  caroussel.style.cursor = 'grab';
}

// Função auxiliar para obter a posição X
function getPositionX(e) {
  return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
}

// Adicionando eventos para desktop e touch
caroussel.addEventListener('mousedown', startDrag);
caroussel.addEventListener('mousemove', drag);
caroussel.addEventListener('mouseup', stopDrag);
caroussel.addEventListener('mouseleave', stopDrag); // Caso o mouse saia do elemento
caroussel.addEventListener('touchstart', startDrag);
caroussel.addEventListener('touchmove', drag);
caroussel.addEventListener('touchend', stopDrag);
