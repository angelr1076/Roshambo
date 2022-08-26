let gameButton = document.querySelector('#start-game');
let rockButton = document.querySelector('#rock');
let paperButton = document.querySelector('#paper');
let scissorButton = document.querySelector('#scissors');
let display = document.querySelector('#game-display');
let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.computer-score');
let roundDecision = document.querySelector('.round-decision');
let gameDecision = document.querySelector('.game-decision');
let computerPoints = 0;
let playerPoints = 0;
let gameActive = true;
let playerChoice;

// Begin with a function called getComputerChoice
function getComputerChoice() {
  // Create computer choices
  let computerChoices = ['rock', 'paper', 'scissors'];
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
    renderDisplay();
    return roundDecision.textContent;
  } else if (
    // The function should - and then return a string that declares the winner of the round
    // Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
    (computerSelection == 'rock' && playerSelection == 'scissors') ||
    (computerSelection == 'paper' && playerSelection == 'rock') ||
    (computerSelection == 'scissors' && playerSelection == 'paper')
  ) {
    roundDecision.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
    renderDisplay();
    return roundDecision.textContent;
  } else if (
    // The function should - and then return a string that declares the winner of the round
    // Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
    (playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')
  ) {
    roundDecision.textContent = `You win! ${playerSelection} beats ${computerSelection} ${playerSelection}.`;
    renderDisplay();
    return roundDecision.textContent;
  }
}

// Write a NEW function called game().
function initGame() {
  let computerSelection = getComputerChoice();
  let play = playRound(playerChoice, computerSelection);
  let winner;
  console.log(play);

  if (play.includes('You lose!')) {
    computerPoints++;
    computerScore.innerHTML = `Computer score: ${computerPoints}`;
    roundDecision.textContent = 'Computer wins this round';
    winner = 'Computer';
    computerPoints === 5
      ? callGame(computerPoints, winner)
      : (gameActive = true);
  } else if (play.includes('You win!')) {
    playerPoints++;
    console.log(playerPoints);
    playerScore.innerHTML = `Player score: ${playerPoints}`;
    roundDecision.textContent = 'Player wins this round';
    winner = 'Player';
    playerPoints === 5 ? callGame(playerPoints, winner) : (gameActive = true);
  } else {
    roundDecision.textContent = `It's a tie! The player and the computer both chose ${computerSelection}.`;
  }
}

// ----------------------- Game decision -----------------------

function callGame(points, whoWon) {
  gameDecision.textContent = `${whoWon} wins the game with ${points}`;
  setTimeout(() => {
    gameOver();
  }, 3000);
}

// ----------------------- End/reset -----------------------

function gameOver() {
  computerPoints = 0;
  playerPoints = 0;
  gameActive = false;
}

function resetGame() {
  return window.location.reload(true);
}

// ----------------------- Display -----------------------

function renderDisplay() {
  display.appendChild(playerScore);
  display.appendChild(computerScore);
  display.appendChild(roundDecision);
}

// ----------------------- Game buttons -----------------------

gameButton.addEventListener('click', () => {
  resetGame();
  initGame();
});

// ----------------------- Player choices -----------------------

rockButton.addEventListener('click', e => {
  playerChoice = e.target.value.toLowerCase();
  initGame();
});

paperButton.addEventListener('click', e => {
  playerChoice = e.target.value.toLowerCase();
  initGame();
});

scissorButton.addEventListener('click', e => {
  playerChoice = e.target.value.toLowerCase();
  initGame();
});
