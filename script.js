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

window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("splashScreen").style.display = "none";
        document.getElementById("homeScreen").style.display = "block";
    }, 2000); // Ajuste o tempo, em milissegundos
});

function endGame() {
    // Adiciona um delay de 500ms antes de exibir a tela final
    setTimeout(() => {
      showFinalScreen(); // Função que exibe a tela final
    }, 500);
  }
  
  function showFinalScreen() {
    // Lógica para exibir a tela final
    document.getElementById("final-screen").style.display = "block";
  }
  
// Função para alternar o idioma
function changeLanguage() {
    const language = document.getElementById('language').value;

    if (language === 'en') {
        document.getElementById('homeText').innerText = "Form 3 groups of 3 words that have something in common";
        document.getElementById('playButton').innerText = "Play";
        document.getElementById('configButton').innerText = "Settings";
        document.getElementById('feedbackButton').innerText = "Feedback";
        document.getElementById('aboutButton').innerText = "About";
        document.getElementById('configTitle').innerText = "Settings";
        document.getElementById('languageLabel').innerText = "Language:";
        document.getElementById('soundLabel').innerText = "Sound:";
        document.getElementById('closeConfigButton').innerText = "Close";
        document.getElementById('aboutTitle').innerText = "About";
        document.getElementById('aboutText').innerText = "Inspired by the BBC TV show Only Connect's Connecting Wall game.";
        document.getElementById('closeAboutButton').innerText = "Close";
    } else {
        document.getElementById('homeText').innerText = "Forme 3 grupos de 3 palavras que tenham algo em comum";
        document.getElementById('playButton').innerText = "Jogar";
        document.getElementById('configButton').innerText = "Configurações";
        document.getElementById('feedbackButton').innerText = "Feedback";
        document.getElementById('aboutButton').innerText = "Sobre";
        document.getElementById('configTitle').innerText = "Configurações";
        document.getElementById('languageLabel').innerText = "Idioma:";
        document.getElementById('soundLabel').innerText = "Som:";
        document.getElementById('closeConfigButton').innerText = "Fechar";
        document.getElementById('aboutTitle').innerText = "Sobre";
        document.getElementById('aboutText').innerText = "Inspirado pelo jogo Connecting Wall do programa de TV da BBC Only Connect.";
        document.getElementById('closeAboutButton').innerText = "Fechar";
    }
}
