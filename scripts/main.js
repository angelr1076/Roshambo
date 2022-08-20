let gameDecision = '';
let computerPoints = 0;
let playerPoints = 0;
let gameActive = true;

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
    return (gameDecision = 'Tie game.');
  } else if (
    // The function should - and then return a string that declares the winner of the round
    // Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
    (computerSelection == 'Rock' && playerSelection == 'Scissors') ||
    (computerSelection == 'Paper' && playerSelection == 'Rock') ||
    (computerSelection == 'Scissors' && playerSelection == 'Paper')
  ) {
    return (gameDecision = `You lose! ${computerSelection} beats ${playerSelection}.`);
  } else if (playerSelection == null || playerSelection == '') {
    return alert('Please enter a choice.');
  } else {
    return (gameDecision = `You win! ${playerSelection} beats ${computerSelection}.`);
  }
}

// Write a NEW function called game().
function game() {
  let playerSelection = prompt('Please select Rock, Paper or Scissors');
  let computerSelection = getComputerChoice();
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
  (computerPoints == 5 && playerPoints < 5) ||
  (playerPoints == 5 && computerPoints < 5)
    ? gameOver()
    : game();
}

function gameOver() {
  gameActive = false;
  // alert()
  return;
}

game();
