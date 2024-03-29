const gameButton = document.querySelector('#start-game');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorButton = document.querySelector('#scissors');
const gameDisplay = document.querySelector('#game-display');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const roundDecision = document.querySelector('#round-decision');
const roundDisplay = document.querySelector('#round-display');
const gameDecision = document.querySelector('#game-decision');
const pointsToWin = 3;
let computerPoints = 0;
let playerPoints = 0;
let roundCount = 1;

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

function clearResults() {
  playerScore.innerHTML = '';
  computerScore.innerHTML = '';
}

// Write a NEW function called game().
function initGame() {
  clearResults();

  let computerSelection = getComputerChoice();
  setChoicesInactive();

  setTimeout(() => {
    let play = playRound(playerChoice, computerSelection);
    let winner;

    if (play.includes('You win!')) {
      playerPoints++;
      roundDisplay.textContent = roundCount;
      roundDecision.textContent = `You won round ${roundCount}`;
      winner = 'player';
      playerPoints === pointsToWin
        ? callGame(playerPoints, winner)
        : (gameActive = true);
    } else if (play.includes('You lose!')) {
      computerPoints++;
      roundDisplay.textContent = roundCount;
      roundDecision.textContent = `The computer wins round ${roundCount}`;
      winner = 'computer';
      computerPoints === pointsToWin
        ? callGame(computerPoints, winner)
        : (gameActive = true);
    } else {
      roundDisplay.textContent = roundCount;
      roundDecision.textContent = `It's a tie! You and the computer both chose ${computerSelection.toUpperCase()}.`;
    }

    roundCount++;
    playerScore.innerHTML = `${playerPoints} <br> Chose: ${playerChoice.toUpperCase()}`;
    computerScore.innerHTML = `${computerPoints} <br> Chose: ${computerSelection.toUpperCase()}`;
    setChoicesActive();
  }, 1000);
}

function setChoicesActive() {
  rockButton.classList.remove('inactive');
  paperButton.classList.remove('inactive');
  scissorButton.classList.remove('inactive');
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorButton.disabled = false;
}

// ----------------------- Game decision -----------------------

function callGame(points, whoWon) {
  const title = document.querySelector('.title__game');

  // gameDecision.textContent = `The ${whoWon} wins the game with ${points} points`;
  roundDecision.textContent = `The ${whoWon} wins the game`;
  roundDecision.classList.remove('round-decision');
  roundDecision.classList.add('end-game');
  title.textContent = 'Game Over';
  gameOver();
  setChoicesInactive();
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
  gameActive = true;
});

// ----------------------- Player choices -----------------------

rockButton.addEventListener('click', e => {
  if (gameActive) {
    playerChoice = e.target.value;
    initGame();
  }
});

paperButton.addEventListener('click', e => {
  if (gameActive) {
    playerChoice = e.target.value;
    initGame();
  }
});

scissorButton.addEventListener('click', e => {
  if (gameActive) {
    playerChoice = e.target.value;
    initGame();
  }
});
