let gameDecision = '';
let gameButton = document.querySelector('#start-game');
let rockButton = document.querySelector('#rock');
let paperButton = document.querySelector('#paper');
let scissorButton = document.querySelector('#scissors');
let display = document.querySelector('#game-display');
let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.computer-score');
let roundDecision = document.querySelector('.game-decision');
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
    return [playerSelection, computerSelection];
  } else if (
    // The function should - and then return a string that declares the winner of the round
    // Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
    (computerSelection == 'rock' && playerSelection == 'scissors') ||
    (computerSelection == 'paper' && playerSelection == 'rock') ||
    (computerSelection == 'scissors' && playerSelection == 'paper')
  ) {
    roundDecision.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
    renderDisplay();
    return [playerSelection, computerSelection];
  } else if (
    // The function should - and then return a string that declares the winner of the round
    // Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
    (playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')
  ) {
    roundDecision.textContent = `You win! ${playerSelection} beats ${computerSelection} ${playerSelection}.`;
    renderDisplay();
    return [playerSelection, computerSelection];
  }
}

// Write a NEW function called game().
function initGame() {
  let computerSelection = getComputerChoice();
  let play = playRound(playerChoice, computerSelection);

  console.log('comp:', computerSelection, 'player:', playerChoice);

  if (play.includes('You lose!')) {
    computerPoints++;
    console.log('Computer wins. Score: ', computerPoints);
    // callGame();
  } else if (play.includes('You win!')) {
    playerPoints++;
    console.log('Player wins. Score: ', playerPoints);
    // callGame();
  } else {
    console.log(gameDecision);
    // callGame();
  }
}

function renderDisplay() {
  display.appendChild(playerScore);
  display.appendChild(computerScore);
  display.appendChild(roundDecision);
}

// function callGame() {
//   if (computerPoints == 5 && playerPoints < 5) {
//     alert(`The computer won the game with ${computerPoints} points`);
//     gameOver();
//   } else if (playerPoints == 5 && computerPoints < 5) {
//     alert(`The player won the game with ${playerPoints} points`);
//     gameOver();
//   } else {
//     initGame();
//   }
// }

// Prompt player for choice
// function getPlayerPrompt() {
//   return prompt('Please select Rock, Paper or Scissors').toLowerCase();
// }

function gameOver() {
  computerPoints = 0;
  playerPoints = 0;
  gameActive = false;
  return;
}

function resetGame() {
  return window.location.reload(true);
}

gameButton.addEventListener('click', () => {
  resetGame();
  initGame();
});

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
