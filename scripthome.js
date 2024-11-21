// script.js

window.onload = function() {
    setTimeout(() => {
        document.getElementById('splashLogo').style.animation = 'none';
        document.getElementById('homeLogo').style.display = 'block';
        document.getElementById('homeScreen').style.display = 'block';
        document.querySelector('.splash-screen').style.display = 'none';
        document.getElementById('homeText').style.display = 'block';
        document.querySelector('.button-container').style.display = 'flex';
    }, 2000);
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
    }, 2000);
});

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

        // Traduzindo as opções dos seletores
        document.getElementById('language').options[0].text = "Portuguese";
        document.getElementById('language').options[1].text = "English";
        document.getElementById('sound').options[0].text = "On";
        document.getElementById('sound').options[1].text = "Off";

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

        // Traduzindo de volta para português
        document.getElementById('language').options[0].text = "Português";
        document.getElementById('language').options[1].text = "Inglês";
        document.getElementById('sound').options[0].text = "Ativado";
        document.getElementById('sound').options[1].text = "Desativado";
    }
}

function toggleAboutCard() {
    var aboutCard = document.getElementById('aboutCard');
    if (aboutCard.style.display === 'none' || aboutCard.style.display === '') {
        aboutCard.style.display = 'block';
    } else {
        aboutCard.style.display = 'none';
    }
}

// ID do elemento de áudio
const audioElement = document.getElementById('backgroundMusic');

// Função para iniciar a música
function startMusic() {
    const savedTime = localStorage.getItem('musicTime') || 0; // Recupera o tempo salvo
    audioElement.currentTime = savedTime; // Define o tempo inicial
    audioElement.play().catch(console.error); // Tenta iniciar a reprodução
}

// Função para pausar e salvar o tempo atual
function saveMusicTime() {
    localStorage.setItem('musicTime', audioElement.currentTime); // Salva o tempo atual
}

// Inicia a música ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    startMusic();
});

// Salva o tempo quando a página é descarregada
window.addEventListener('beforeunload', () => {
    saveMusicTime();
});

// Seleciona o elemento de música
const backgroundMusic = document.getElementById("backgroundMusic");

// Função para alternar a música
function toggleMusic() {
    const musicSetting = document.getElementById("music").value;

    if (musicSetting === "on") {
        backgroundMusic.play();
    } else {
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0; // Reinicia a música
    }
}
