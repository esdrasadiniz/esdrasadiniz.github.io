const progressBars = document.querySelectorAll('.progress-bar');

// Função para animar as barras de progresso
function animateProgressBar(bar) {
    const finalValue = parseInt(bar.dataset.value); // Usa o valor do atributo 'data-value'
    let currentValue = 0;

    const interval = setInterval(() => {
        currentValue+=2;
        bar.value = currentValue;

        if (currentValue >= finalValue) {
            clearInterval(interval);
        }
    }, 10); // Ajuste a velocidade da animação aqui
}

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

// Função para verificar todas as barras de progresso
function checkProgressBars() {
    progressBars.forEach((bar) => {
        if (isElementInViewport(bar) && !bar.classList.contains('animated')) {
            bar.classList.add('animated'); // Marca como animada
            animateProgressBar(bar); // Inicia a animação
        }
    });
}

// Evento de scroll para verificar as barras de progresso
window.addEventListener('scroll', checkProgressBars);

// Inicializa ao carregar a página, caso alguma barra já esteja visível
checkProgressBars();
