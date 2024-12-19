// Seleciona todas as barras de progresso
const progressBars = document.querySelectorAll('.progress-bar');

// Função para verificar se o elemento está visível na tela
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para ativar a animação ao elemento visível
function checkProgressBars() {
    progressBars.forEach((bar) => {
        if (isElementInViewport(bar) && !bar.classList.contains('animated')) {
            bar.classList.add('animated'); // Adiciona a classe 'animated'

            // Adiciona a classe correspondente com base no atributo 'data-value'
            const progressType = bar.getAttribute('data-type'); // 'html', 'css', etc.
            if (progressType) {
                bar.querySelector('.progress-fill').classList.add(`progress-${progressType}`);
            }
        }
    });
}

// Evento de scroll para verificar as barras de progresso
window.addEventListener('scroll', checkProgressBars);

// Inicializa ao carregar a página
checkProgressBars();
