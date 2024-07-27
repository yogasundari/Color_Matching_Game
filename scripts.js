const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = shuffle(colors);
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval;
let totalCards = colors.length * 2; // Total number of cards
let matchedCards = 0;
let gameFinished = false; // Flag to track if the game is finished

const startBtn = document.getElementById('button');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

function generateCards() {
    for (const color of cards) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color = color;
        card.textContent = '?';
        card.style.backgroundColor = '#ddd';
        gameContainer.appendChild(card);
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function handleCardClick(event) {
    if (gameFinished) return; // Prevent clicking if game is finished
    
    const card = event.target;
    if (!card.classList.contains('card') || card.classList.contains('matched') || selectedCards.includes(card)) {
        return;
    }
    card.textContent = '';
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);
    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    const [card1, card2] = selectedCards;
    if (card1.dataset.color === card2.dataset.color) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
        matchedCards += 2; // Increase the count of matched cards
        if (matchedCards === totalCards) {
            endGame(true); // End the game with a win
            return; // Ensure no further code is executed
        }
    } else {
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }
    selectedCards = [];
}

function startGame() {
    startBtn.disabled = true;
    score = 0;
    matchedCards = 0; // Reset matched cards
    gameFinished = false; // Reset game finished flag
    scoreElement.textContent = `Score: ${score}`;
    cards = shuffle(colors);
    selectedCards = [];
    gameContainer.innerHTML = '';
    generateCards();
    gameContainer.addEventListener('click', handleCardClick);
    startGameTimer();
}

function startGameTimer() {
    timeLeft = 30;
    timerElement.textContent = `Time Left: ${timeLeft}`;
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;
        if (timeLeft <= 0) {
            clearInterval(gameInterval);
            if (!gameFinished) { // Check if the game is not finished
                endGame(false); // End the game with a loss
            }
        }
    }, 1000);
}

function endGame(win) {
    if (win) {
        alert('You won the match! Congratulations!');
    } else {
        alert('Game Over! Time is up.');
    }
    gameFinished = true; // Set the game as finished
    startBtn.disabled = false;
}

startBtn.addEventListener('click', startGame);
