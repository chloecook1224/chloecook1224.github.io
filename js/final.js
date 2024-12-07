const gameBoard = document.getElementById('game-board');
const moveCountElement = document.getElementById('move-count');
const levelElement = document.getElementById('level');
const messageElement = document.getElementById('message');
const nextLevelBtn = document.getElementById('next-level-btn');
const restartBtn = document.getElementById('restart-btn');
let moveCount = 0;
let flippedCards = [];
let matchedCards = [];
let currentLevel = 1;
let bombCardClicked = false; 

// Cards content for the different levels
const levelCards = {
  1: ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D'], 
  2: ['A', 'B', 'C', 'D', 'E', 'F', 'A', 'B', 'C', 'D', 'E', 'F'], 
  3: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] 
};

// Shuffle function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Create the game board for the current level
function createGameBoard() {
    gameBoard.innerHTML = '';
    matchedCards = [];
    flippedCards = [];
    moveCount = 0;
    bombCardClicked = false; 
    moveCountElement.textContent = moveCount;
    messageElement.textContent = ''; 
  
    const cardsForLevel = shuffleArray([...levelCards[currentLevel], 'bomb']);
    const numberOfCards = cardsForLevel.length;
    const columns = (currentLevel === 1) ? 3 : 4;
    const rows = Math.ceil(numberOfCards / columns);
    gameBoard.style.gridTemplateColumns = `repeat(${columns}, 120px)`;
    gameBoard.style.gridTemplateRows = `repeat(${rows}, 120px)`; 
  
    const remainingCardsInBottomRow = numberOfCards % columns;
    if (remainingCardsInBottomRow > 0 && remainingCardsInBottomRow < 2) {
      gameBoard.style.justifyItems = 'center'; 
    } else {
      gameBoard.style.justifyItems = 'stretch';
    }
  
    cardsForLevel.forEach(value => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.dataset.value = value;
      card.addEventListener('click', flipCard);
      gameBoard.appendChild(card);
    });
  }
  
// Flip card function
function flipCard() {
  if (bombCardClicked || flippedCards.length >= 2 || this.classList.contains('flipped') || this.classList.contains('matched')) {
    return;
  }

  this.classList.add('flipped');
  this.textContent = this.dataset.value;

  if (this.dataset.value === 'bomb') {
    bombCardClicked = true;
    this.classList.add('bomb'); 
    messageElement.textContent = 'Game Over! You hit a bomb!';
    setTimeout(resetGame, 1000); 
    return;
  }

  flippedCards.push(this);
  if (flippedCards.length === 2) {
    moveCount++;
    moveCountElement.textContent = moveCount;
    setTimeout(checkMatch, 1000);
  }
}

// Check if two flipped cards match
function checkMatch() {
  const [firstCard, secondCard] = flippedCards;

  if (firstCard.dataset.value === secondCard.dataset.value) {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    matchedCards.push(firstCard, secondCard);
  } else {
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');
    firstCard.textContent = '';
    secondCard.textContent = '';
  }

  flippedCards = [];

  if (matchedCards.length === levelCards[currentLevel].length) {
    messageElement.textContent = 'You won this level! Press Next Level to continue.';
  }
}

// Next Level function
function nextLevel() {
  if (currentLevel < 3) {
    currentLevel++;
    levelElement.textContent = currentLevel;
    messageElement.textContent = `Moving to level ${currentLevel}...`;
    createGameBoard();
  } else {
    messageElement.textContent = 'Congratulations! You completed all levels!';
    nextLevelBtn.disabled = true; 
  }
}

// Reset the game to level 1
function resetGame() {
  setTimeout(() => {
    currentLevel = 1;  
    levelElement.textContent = currentLevel;
    messageElement.textContent = '';
    createGameBoard();
  }, 1000); 
}

// Event listeners
nextLevelBtn.addEventListener('click', nextLevel);
restartBtn.addEventListener('click', () => {
  currentLevel = 1;
  levelElement.textContent = currentLevel;
  messageElement.textContent = '';
  createGameBoard();
});

// Initialize game at level 1
createGameBoard();
