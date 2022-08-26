let gameButton = document.querySelector('#start-game');
let rockButton = document.querySelector('#rock');
let paperButton = document.querySelector('#paper');
let scissorButton = document.querySelector('#scissors');
let gameDisplay = document.querySelector('#game-display');
let playerScore = document.querySelector('#player-score');
let computerScore = document.querySelector('#computer-score');
let roundDecision = document.querySelector('#round-decision');
let roundDisplay = document.querySelector('#round-display');
let gameDecision = document.querySelector('#game-decision');
let computerPoints = 0;
let playerPoints = 0;
let roundCount = 0;
let gameActive = true;
let playerChoice;

// Begin with a function called getComputerChoice
function getComputerChoice() {
  // Create computer choices
  let computerChoices = ['Rock', 'Paper', 'Scissors'];
  // Randomly generate a choice
  let randomChoice = Math.floor(Math.random() * computerChoices.length);
  // Return the choice, uppercase
  return computerChoices[randomChoice];
}

// Write a function that plays a single round of Rock Paper Scissors that takes two parameters - the playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {
  // Define win/lose parameters
  if (playerSelection == computerSelection) {
    roundDecision.textContent = 'Tie game.';
    // renderDisplay();
    return roundDecision.textContent;
  } else if (
    // The function should - and then return a string that declares the winner of the round
    // Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
    (computerSelection == 'Rock' && playerSelection == 'Scissors') ||
    (computerSelection == 'Paper' && playerSelection == 'Rock') ||
    (computerSelection == 'Scissors' && playerSelection == 'Paper')
  ) {
    roundDecision.textContent = `You lose!`;
    return roundDecision.textContent;
  } else if (
    // The function should - and then return a string that declares the winner of the round
    // Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
    (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
    (playerSelection == 'Paper' && computerSelection == 'Rock') ||
    (playerSelection == 'Scissors' && computerSelection == 'Paper')
  ) {
    roundDecision.textContent = `You win!`;
    return roundDecision.textContent;
  }
}

// Write a NEW function called game().
// Called by event listeners
function initGame() {
  let computerSelection = getComputerChoice();
  let play = playRound(playerChoice, computerSelection);
  let winner;
  roundCount++;
  playerScore.innerHTML = `${playerPoints} <br> Chose: ${playerChoice.toUpperCase()}`;
  computerScore.innerHTML = `${computerPoints} <br> Chose: ${computerSelection.toUpperCase()}`;

  if (play.includes('You win!')) {
    playerPoints++;
    roundDisplay.textContent = roundCount;
    roundDecision.textContent = 'Player wins this round';
    winner = 'Player';
    playerPoints === 5 ? callGame(playerPoints, winner) : (gameActive = true);
  } else if (play.includes('You lose!')) {
    computerPoints++;
    roundDisplay.textContent = roundCount;
    roundDecision.textContent = 'Computer wins this round';
    winner = 'Computer';
    computerPoints === 5
      ? callGame(computerPoints, winner)
      : (gameActive = true);
  } else {
    roundDisplay.textContent = roundCount;
    // playerScore.innerHTML = `${playerPoints} <br> Chose: ${playerChoice.toUpperCase()}`;
    // computerScore.innerHTML = `${computerPoints} <br> Chose: ${computerSelection.toUpperCase()}`;
    roundDecision.textContent = `It's a tie! The player and the computer both chose ${computerSelection.toUpperCase()}.`;
  }
}

// ----------------------- Game decision -----------------------

function callGame(points, whoWon) {
  gameDecision.textContent = `${whoWon} wins the game with ${points} points`;
  roundDecision.classList.remove('round-decision');
  roundDecision.classList.add('end-game');
  roundDecision.textContent = 'Game Over';
  gameOver();
}

// ----------------------- End/reset -----------------------

function gameOver() {
  computerPoints = 0;
  playerPoints = 0;
  gameActive = false;
  setChoicesInactive();
}

function resetGame() {
  return window.location.reload(true);
}

// ----------------------- Display -----------------------

function setChoicesInactive() {
  rockButton.classList.add('inactive');
  paperButton.classList.add('inactive');
  scissorButton.classList.add('inactive');
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorButton.disabled = true;
}

// ----------------------- Game buttons -----------------------

gameButton.addEventListener('click', () => {
  resetGame();
  initGame();
});

// ----------------------- Player choices -----------------------

rockButton.addEventListener('click', e => {
  playerChoice = e.target.value;
  initGame();
});

paperButton.addEventListener('click', e => {
  playerChoice = e.target.value;
  initGame();
});

scissorButton.addEventListener('click', e => {
  playerChoice = e.target.value;
  initGame();
});
