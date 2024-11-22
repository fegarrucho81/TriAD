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

function changeLanguage() {
    const language = document.getElementById('language').value;

    if (language === 'en') {
        // Traduz o texto geral
        document.getElementById('homeText').innerText = "Form 3 groups of 3 words that have something in common";
        document.getElementById('playButton').innerText = "Play";
        document.getElementById('configButton').innerText = "Settings";
        document.getElementById('feedbackButton').innerText = "Feedback";
        document.getElementById('aboutButton').innerText = "About";

        // Traduz o menu de configurações
        document.getElementById('configTitle').innerText = "Settings";
        document.getElementById('languageLabel').innerText = "Language:";
        document.getElementById('musicLabel').innerText = "Music:";
        document.getElementById('closeConfigButton').innerText = "Close";

        // Traduz o menu de "Sobre"
        document.getElementById('aboutTitle').innerText = "About";
        document.getElementById('aboutText').innerText = "Inspired by the BBC TV show Only Connect's Connecting Wall game.";
        document.getElementById('closeAboutButton').innerText = "Close";

        // Traduz opções do dropdown
        document.getElementById('language').options[0].text = "Portuguese";
        document.getElementById('language').options[1].text = "English";
        document.getElementById('music').options[0].text = "Enabled";
        document.getElementById('music').options[1].text = "Disabled";

    } else {
        // Volta ao texto em português
        document.getElementById('homeText').innerText = "Forme 3 grupos de 3 palavras que tenham algo em comum";
        document.getElementById('playButton').innerText = "Jogar";
        document.getElementById('configButton').innerText = "Configurações";
        document.getElementById('feedbackButton').innerText = "Feedback";
        document.getElementById('aboutButton').innerText = "Sobre";

        // Volta ao menu de configurações
        document.getElementById('configTitle').innerText = "Configurações";
        document.getElementById('languageLabel').innerText = "Idioma:";
        document.getElementById('musicLabel').innerText = "Música:";
        document.getElementById('closeConfigButton').innerText = "Fechar";

        // Volta ao menu de "Sobre"
        document.getElementById('aboutTitle').innerText = "Sobre";
        document.getElementById('aboutText').innerText = "Inspirado pelo jogo Connecting Wall do programa de TV da BBC Only Connect.";
        document.getElementById('closeAboutButton').innerText = "Fechar";

        // Volta as opções do dropdown
        document.getElementById('language').options[0].text = "Português";
        document.getElementById('language').options[1].text = "Inglês";
        document.getElementById('music').options[0].text = "Ativada";
        document.getElementById('music').options[1].text = "Desativada";
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
    let musicState = localStorage.getItem('musicState');

    // Define como "off" se for a primeira vez que o usuário acessa
    if (!musicState) {
        musicState = "off";
        localStorage.setItem('musicState', musicState); // Salva o estado padrão
    }

    const savedTime = localStorage.getItem('musicTime') || 0; // Tempo salvo no localStorage

    audioElement.currentTime = savedTime; // Define o tempo inicial

    if (musicState === "on") {
        const playPromise = audioElement.play(); // Tenta iniciar a reprodução

        if (playPromise !== undefined) {
            playPromise.catch(() => {
                console.warn('Reprodução automática bloqueada. O usuário precisa interagir com a página.');
            });
        }
    }
}

// Função para alternar o estado da música
function toggleMusic() {
    const musicSetting = document.getElementById("music").value; // Valor atual do select
    localStorage.setItem('musicState', musicSetting); // Salva o estado no localStorage

    if (musicSetting === "on") {
        audioElement.play().catch(console.error); // Reproduz novamente se permitido
    } else {
        audioElement.pause();
        audioElement.currentTime = 0; // Reinicia a música
    }
}

// Função para atualizar o estado do select com base no localStorage
function updateMusicSelect() {
    const musicState = localStorage.getItem('musicState') || "off"; // Recupera o estado salvo (padrão "off")
    document.getElementById("music").value = musicState; // Atualiza o select
}

// Função para salvar o tempo da música ao descarregar a página
function saveMusicTime() {
    localStorage.setItem('musicTime', audioElement.currentTime); // Salva o tempo atual
}

// Inicia a música ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    startMusic(); // Inicia a música com base no estado salvo
    if (document.getElementById("music")) {
        updateMusicSelect(); // Atualiza o select se existir
    }
});

// Salva o tempo quando a página é descarregada
window.addEventListener('beforeunload', () => {
    saveMusicTime();
});
