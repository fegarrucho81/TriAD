// script.js

window.onload = function() {
    setTimeout(() => {
        document.getElementById('splashLogo').style.animation = 'none'; // Para parar a animação
        document.getElementById('homeLogo').style.display = 'block'; // Exibir o logo na home
        document.getElementById('homeScreen').style.display = 'block'; // Exibir a tela de home
        document.querySelector('.splash-screen').style.display = 'none'; // Esconder a tela de splash
        // Exibir o texto e o conteúdo da tela de home
        document.getElementById('homeText').style.display = 'block';
        document.querySelector('.button-container').style.display = 'flex';
    }, 2000); // Tempo da animação do logo (2s)
}

function toggleConfigCard() {
    var configCard = document.getElementById('configCard');
    if (configCard.style.display === 'none' || configCard.style.display === '') {
        configCard.style.display = 'block';
    } else {
        configCard.style.display = 'none';
    }
}

