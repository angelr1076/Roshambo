let gameDecision = '';
let btn = document.querySelector('#btn');
let computerPoints = 0;
let playerPoints = 0;
let gameActive = true;

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
    return (gameDecision = 'Tie game.');
  } else if (
    // The function should - and then return a string that declares the winner of the round
    // Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
    (computerSelection == 'rock' && playerSelection == 'scissors') ||
    (computerSelection == 'paper' && playerSelection == 'rock') ||
    (computerSelection == 'scissors' && playerSelection == 'paper')
  ) {
    return (gameDecision = `You lose! ${computerSelection} beats ${playerSelection}.`);
  } else if (
    playerSelection == null ||
    playerSelection == '' ||
    playerSelection != 'rock' ||
    playerSelection != 'paper' ||
    playerSelection != 'scissors'
  ) {
    return alert('Please enter a choice.');
  } else {
    return (gameDecision = `You win! ${playerSelection} beats ${computerSelection}.`);
  }
}

// Prompt player for choice
function playerPrompt() {
  return prompt('Please select Rock, Paper or Scissors').toLowerCase();
}

function gameOver() {
  gameActive = false;
  return;
}

// Write a NEW function called game().
function game() {
  let computerSelection = getComputerChoice();
  let playerSelection = playerPrompt();
  let play = playRound(playerSelection, computerSelection);

  if (play.includes('You lose!')) {
    computerPoints++;
    console.log('Computer wins. Score: ', computerPoints);
    callGame();
  } else if (play.includes('You win!')) {
    playerPoints++;
    console.log('Player wins. Score: ', playerPoints);
    callGame();
  } else {
    console.log(gameDecision);
    callGame();
  }
}

function callGame() {
  if (computerPoints == 5 && playerPoints < 5) {
    alert(`The computer won the game with ${computerPoints} points`);
    gameOver();
  } else if (playerPoints == 5 && computerPoints < 5) {
    alert(`The player won the game with ${playerPoints} points`);
    gameOver();
  } else {
    game();
  }
}

function resetGame() {
  return window.location.reload(true);
}

btn.addEventListener('click', () => {
  resetGame();
  game();
});
