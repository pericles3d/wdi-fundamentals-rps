var playerMove;
var computerMove;
var playerWins = 0;
var computerWins = 0;

// This function should continue to play Rock Paper Scissors until either the
// player or the computer has won five times.
// After each 'round', display some text in the console indicating who played
// what, who won, and what the current scoreboard looks like.
// For example,
//  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
//  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
function playToFive() {
  playerMove = getPlayerMove();
  computerMove = getComputerMove();
  console.log("Computer chose " + computerMove);
  var winner = getWinner(playerMove,computerMove);
  if(winner === 'player') { playerWins += 1; console.log ("Player Wins") }
  else if(winner === 'computer') { computerWins += 1; console.log ("Computer Wins") }
  else if (winner === 'tie') {console.log("Tie")}
  else { console.log ("error") }


  if(playerWins === 5) { console.log("Player wins the game!") }
  else if(computerWins == 5) { console.log("Computer wins the game!") }
  else {
    console.log("Player " + playerWins + " x " + computerWins + " Computer");
    playToFive();
  }
}

// Write an expression that operates on a variable called `move`
// If a `move` has a value, your expression should evaluate to that value.
// However, if `move` is not specified / is null, your expression should equal `getInput()`.
function getPlayerMove(move) {
  if (move) {
    return move;
  } else {
      return getInput();
    }
}

// Write an expression that operates on a variable called `move`
// If a `move` has a value, your expression should evaluate to that value.
// However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
// function getComputerMove() { return randomPlay() }
function getComputerMove() {
  return randomPlay()
  }

////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////

function getInput() {
  console.log("Please choose either 'rock', 'paper', or 'scissors'.");
  return prompt();
}

function randomPlay() {
  var randomNumber = Math.random();
  if (randomNumber < 0.33) { return "rock" }
  else if (randomNumber < 0.66) { return "paper" }
  else { return "scissors" }
}

// Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
// Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
// The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
function getWinner(playerMove,computerMove) {
  if (playerMove === computerMove) { return 'tie'}
  else if (playerMove === "rock" && computerMove === "scissors"){ return 'player' }
  else if (playerMove === "paper" && computerMove === "rock") { return 'player' }
  else if (playerMove === "scissors" && computerMove === "paper"){ return 'player'}
  else { return 'computer'}
  }

console.log("Let's play Rock, Paper, Scissors");
playToFive();
