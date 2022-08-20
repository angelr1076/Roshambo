let gameDecision = '';
let computerPoints = 0;
let playerPoints = 0;

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
  } else {
    return (gameDecision = `You win! ${playerSelection} beats ${computerSelection}.`);
  }
}

// Write a NEW function called game().
function game() {
  let playerSelection = prompt('Please select Rock, Paper or Scissors');
  let computerSelection = getComputerChoice();
  let decision = playRound(playerSelection, computerSelection);

  if (decision.includes('You lose!')) {
    computerPoints++;
    console.log('Game, computer wins. Score: ', computerPoints);
  } else if (decision.includes('You win!')) {
    playerPoints++;
    console.log('Game, player wins. Score: ', playerPoints);
  } else {
    console.log(gameDecision);
  }

  if (computerPoints == 5 && playerPoints < 5) {
    return computerPoints;
  } else if (playerPoints == 5 && computerPoints < 5) {
    return playerPoints;
  }
}

game();
