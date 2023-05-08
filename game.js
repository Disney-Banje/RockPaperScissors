// game playing against the computer choices. 
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomPick = Math.floor(Math.random() * 3);
    return choices[randomPick];
}
// console.log(getComputerChoice());

//This function plays a single round of Rock Paper Scissors.
function roundPlay(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return `It is a draw! ${playerSelection} is the same as ${computerSelection}`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        return `You have won! ${playerSelection} beats ${computerSelection}`;
    }

    return `You have lost! ${computerSelection} beats ${playerSelection}`;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i <=5; i++) {
    const playerSelection = prompt(`This is round ${i}: Choose Rock, Paper or Scissors`);
    const computerSelection = getComputerChoice();
    const result = roundPlay(playerSelection, computerSelection);
    console.log(result);

    if (result.startsWith('You have won')) {
        playerScore++;
    } else if (result.startsWith('You have lost')) {
        computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log(`You win the game with a score of ${playerScore} to ${computerScore}`);
  } else if (playerScore < computerScore) {
    console.log(`You have lost the game with a score of  ${playerScore} to ${computerScore}`);
  } else {
    console.log(`The game ends in a tie score of ${playerScore} to ${computerScore}`);
  }
}

game()

//for testing purposes.
// const playerSelection = 'Rock';
// const computerSelection = getComputerChoice();
// console.log(roundPlay(playerSelection, computerSelection));

