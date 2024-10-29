let selectedItems = [];
let correctGroups = [
    {
        words: ['amo', 'adoro', 'gosto'],
        description: 'Palavras que expressam amor'
    },
    {
        words: ['adereço', 'ornamento', 'mestre'],
        description: 'Termos relacionados a decoração'
    },
    {
        words: ['curto', 'longo', 'extenso'],
        description: 'Termos que descrevem tamanhos'
    }
];

let currentGroup = 0;
let attemptCount = 0; // Contador de tentativas
let maxAttempts = 5;  // Limite de tentativas

function selectItem(element) {
    const item = element.querySelector('.board-item');
    if (item.classList.contains('selected')) {
        item.classList.remove('selected');
        selectedItems = selectedItems.filter(selectedItem => selectedItem !== item);
    } else if (selectedItems.length < 3) {
        item.classList.add('selected');
        selectedItems.push(item);
    }

    if (selectedItems.length === 3) {
        checkSelection();
    }
}

function checkSelection() {
    const selectedTexts = selectedItems.map(item => item.textContent);

    if (correctGroups.some(group => group.words.every(value => selectedTexts.includes(value)))) {
        // Lógica para grupo correto
        selectedItems.forEach((item, index) => {
            item.classList.add('correct');
            if (currentGroup === 0) {
                item.classList.add('red');
            } else if (currentGroup === 1) {
                item.classList.add('blue');
            } else if (currentGroup === 2) {
                item.classList.add('yellow');
            }
            item.classList.remove('selected');
        });

        selectedItems = [];
        currentGroup++;

        if (currentGroup === 3) {
            updateResultCard();
        }
    } else {
        // Lógica para seleção errada
        attemptCount++; // Incrementa o contador de tentativas
        document.getElementById('attemptCounter').textContent = `Erros: ${attemptCount} / ${maxAttempts}`; // Atualiza o contador

        if (attemptCount >= maxAttempts) {
            alert('Você atingiu o número máximo de tentativas!'); 
            resetGame(); 
        } else {
            selectedItems.forEach(item => {
                item.classList.add('wrong-selection');
                setTimeout(() => {
                    item.classList.remove('wrong-selection', 'selected');
                }, 500);
            });
            selectedItems = [];
        }
    }
}

function updateResultCard() {
    const resultCard = document.getElementById('resultCard');
    const correctGroupCount = document.getElementById('correctGroupCount');
    const resultGroups = document.getElementById('resultGroups');

    correctGroupCount.textContent = currentGroup; // Contador de grupos formados
    resultGroups.innerHTML = ''; // Limpa grupos anteriores

    correctGroups.forEach((group, index) => {
        const groupDiv = document.createElement('div');
        groupDiv.classList.add('result-group', `group${index + 1}`); // Adiciona a classe para o grupo
        groupDiv.innerHTML = `<h3>${group.description}</h3><p>${group.words.join(', ')}</p>`;
        resultGroups.appendChild(groupDiv);
    });


    setTimeout(() => {
        resultCard.style.display = 'flex'; // Delay para aparecer a tela de resultado
    }, 1000);

}

function closeResultCard() {
    const resultCard = document.getElementById('resultCard');
    resultCard.style.display = 'none'; // Fecha o card de resultados
}

function shareResult() {
    alert('Resultado compartilhado!'); // Simulação de compartilhamento
}

function toggleHelpCard() {
    const helpCard = document.getElementById('helpCard');
    helpCard.style.display = helpCard.style.display === 'none' || helpCard.style.display === '' ? 'block' : 'none';
}


function resetGame() {
    // Limpar a seleção
    clearInterval(timerInterval); // Para o timer anterior
    startTimer(); // Inicia um novo timer
    selectedItems.forEach(item => item.classList.remove('selected'));
    selectedItems = [];
    currentGroup = 0; // Resetar o grupo atual
    attemptCount = 0; // Resetar tentativas

    // Reiniciar contagem de tentativas e atualizar a exibição
    document.getElementById('attemptCounter').textContent = 'Erros: 0 / 5'; // Reiniciar o contador de tentativas

    document.getElementById('correctGroupCount').textContent = '0'; // Reiniciar contagem de grupos corretos
    document.getElementById('resultGroups').innerHTML = ''; // Limpar os grupos de resultados

    // Ocultar o card de resultados
    document.getElementById('resultCard').style.display = 'none';

    // Mostrar os itens do tabuleiro novamente
    const boardItems = document.querySelectorAll('.board-item');
    boardItems.forEach(item => {
        item.classList.remove('correct', 'red', 'blue', 'yellow'); // Limpar classes de correção
    });

    // Reexibir o tabuleiro de jogo
    document.querySelector('.game-wrapper').style.display = 'block';
}

// Atualizar a função closeResultCard para ocultar também o tabuleiro de jogo
function closeResultCard() {
    document.getElementById('resultCard').style.display = 'none';
    document.querySelector('.game-wrapper').style.display = 'block'; // Reexibir o tabuleiro ao fechar o card de resultados
}

// Variáveis globais
let startTime; // Para armazenar o tempo de início
let timerInterval; // Para armazenar o intervalo do timer

/*


TUDO DAQUI PRA BAIXO É 
O TIMER


*/

// Iniciar o timer
function startTimer() {
    startTime = Date.now(); // Captura o tempo de início
    timerInterval = setInterval(updateTimer, 1000); // Atualiza a cada segundo
}

// Atualizar o timer
function updateTimer() {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000); // Calcula o tempo decorrido em segundos
    const minutes = Math.floor(elapsedTime / 60); // Calcula os minutos
    const seconds = elapsedTime % 60; // Calcula os segundos restantes

    // Formata os minutos e segundos
    document.getElementById('timer').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; 
}

// Inicia o timer quando a página é carregada
window.onload = function() {
    startTimer(); // Inicia o timer ao carregar a página
};
