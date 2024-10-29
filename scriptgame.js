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
    const overlay = document.getElementById('overlay');
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
        overlay.style.display = 'block'; // Exibe o fundo escurecido
        resultCard.style.display = 'flex'; // Exibe a tela de resultado
    }, 1000);


}

function closeResultCard() {
    // Pausar o contador
    clearInterval(timerInterval); 

    // Remover a exibição da tela de vitória e do fundo escurecido
    document.getElementById('resultCard').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';

    // O tabuleiro de jogo permanece como está, não precisa ser escondido ou reexibido
}
function shareResult() {
    // Data atual formatada
    const today = new Date();
    const date = today.toLocaleDateString('pt-BR'); // Formato "dia/mês/ano"

    // Número de tentativas e tempo do cronômetro
    const attempts = attemptCount;
    const elapsedTime = document.getElementById('timer').textContent; // Pega o tempo exibido no cronômetro

    // Mensagem de compartilhamento
    const shareMessage = `Eu venci o Triad no dia ${date} em ${attempts} tentativas e em ${elapsedTime}.`;

    // Copia para a área de transferência
    navigator.clipboard.writeText(shareMessage).then(() => {
        alert('Resultado copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar para a área de transferência: ', err);
    });
}

function toggleHelpCard() {
    const helpCard = document.getElementById('helpCard');
    helpCard.style.display = helpCard.style.display === 'none' || helpCard.style.display === '' ? 'block' : 'none';
}


function resetGame() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none'; // Oculta o fundo escurecido

    // Restante do código de reset...
    clearInterval(timerInterval);
    startTimer();
    selectedItems.forEach(item => item.classList.remove('selected'));
    selectedItems = [];
    currentGroup = 0;
    attemptCount = 0;
    document.getElementById('attemptCounter').textContent = 'Erros: 0 / 5';
    document.getElementById('correctGroupCount').textContent = '0';
    document.getElementById('resultGroups').innerHTML = '';
    document.getElementById('resultCard').style.display = 'none';

    const boardItems = document.querySelectorAll('.board-item');
    boardItems.forEach(item => item.classList.remove('correct', 'red', 'blue', 'yellow'));

    document.querySelector('.game-wrapper').style.display = 'block';
}





/*


TUDO DAQUI PRA BAIXO É 
O TIMER


*/



// Iniciar o timer

// Variáveis globais
let startTime; // Para armazenar o tempo de início
let timerInterval; // Para armazenar o intervalo do timer

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
