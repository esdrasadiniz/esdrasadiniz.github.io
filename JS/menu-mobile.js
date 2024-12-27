// Selecionando os elementos
const openMenuButton = document.querySelector('.open-menu');
const closeMenuButton = document.querySelector('.close-menu');
const menu = document.querySelector('#menu');

// Função para abrir o menu
function openMenu() {
  menu.style.transform = 'translateX(-142%)'; // Move o menu para dentro da tela
}

// Função para fechar o menu
function closeMenu() {
  menu.style.transform = 'translateX(0)'; // Move o menu para fora da tela
}

// Adicionando os eventos de clique
openMenuButton.addEventListener('click', (e) => {
  e.preventDefault(); // Evita o comportamento padrão do link
  openMenu();
});

closeMenuButton.addEventListener('click', (e) => {
  e.preventDefault(); // Evita o comportamento padrão do link
  closeMenu();
});
