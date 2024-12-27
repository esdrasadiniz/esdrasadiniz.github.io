const buttonRight = window.document.querySelector('.button-arrow.-right');
const buttonLeft = window.document.querySelector('.button-arrow.-left');
const caroussel = window.document.querySelector('.item-wrap.-node-card');

let vw = 10; // Valor inicial em vw, representa o deslocamento por clique.

// Converte vw para pixels
function vwToPx(vwValue) {
  return (vwValue / 100) * window.innerWidth;
}

let currentTranslate = 0;

// Botão para mover à direita
buttonRight.addEventListener('click', function () {
  currentTranslate -= vwToPx(vw); // Reduz o valor em vw
  caroussel.style.transform = `translateX(${currentTranslate}px)`;
});

// Botão para mover à esquerda
buttonLeft.addEventListener('click', function () {
  currentTranslate += vwToPx(vw); // Aumenta o valor em vw
  caroussel.style.transform = `translateX(${currentTranslate}px)`;
});

// Arrastar o carrossel
let isDragging = false;
let startX, prevTranslate = 0;

// Função para iniciar o arraste
function startDrag(e) {
  isDragging = true;
  startX = getPositionX(e);
  caroussel.style.cursor = 'grabbing';
  caroussel.style.transition = 'none'; // Remove transições durante o arraste
}

// Função para movimentar
function drag(e) {
  if (!isDragging) return;
  const currentPosition = getPositionX(e);
  const movement = currentPosition - startX;
  currentTranslate = prevTranslate + movement;
  caroussel.style.transform = `translateX(${currentTranslate}px)`;
}

// Função para finalizar o arraste
function stopDrag() {
  if (!isDragging) return;
  isDragging = false;
  prevTranslate = currentTranslate; // Salva a posição final
  caroussel.style.transition = 'transform 0.3s ease';
  caroussel.style.cursor = 'grab';
}

// Função auxiliar para obter a posição X
function getPositionX(e) {
  return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
}

// Adiciona os eventos
caroussel.addEventListener('mousedown', startDrag);
caroussel.addEventListener('mousemove', drag);
caroussel.addEventListener('mouseup', stopDrag);
caroussel.addEventListener('mouseleave', stopDrag);
caroussel.addEventListener('touchstart', startDrag);
caroussel.addEventListener('touchmove', drag);
caroussel.addEventListener('touchend', stopDrag);
