/* Functions.js
21/01/2024 MM created to cleanup index.html for GUI addition 

 */


//Function to set username
function setUsername() {
  enterName = document.querySelector("#name");
  let localuser = enterName.value;

  //dom changes
  let scoreName = document.querySelector("span#playerName");
  let choiceName = document.querySelector("div#userChoice h3");
  scoreName.textContent = localuser  + "'s";
  choiceName.textContent = localuser + "'s Choice";

  return localuser;

}

//Function to generate a computer choice
function getComputerChoice() {
  //Generate a random value between 1 and 3
  let randomNumber = Math.floor(Math.random() * (4-1)) + 1;
  //assign this to scissors, Paper or Rock
  let comChoice = "";
  switch (randomNumber) {
    case 1:
      comChoice = "scissors";
      break;
    case 2:
      comChoice = "paper";
      break;
    case 3:
      comChoice = "rock"
      break;
    default:
      console.log("Function getComputerChoice is broken.");
  }
  return comChoice;
}

//decide who won total game
function checkRounds(rounds) {
  let winner = document.createElement("div");
  let winnerHeading = document.createElement("h1");
  let finalScore = document.createElement("p");

  if (rounds == numberRounds){
    if (comScore > userScore) {
      winnerHeading.textContent = "You Lost!";

      //alert("THE WINNER WAS THE COMPUTER");
    } else {
      winnerHeading.textContent = "You Won!";
      //alert(username + " HAS WON!!!")
    }
      finalScore.textContent = "The final score was: " + username + " has " + userScore + " points. The computer has " + comScore + " points."
    //alert("The final score was:\n" + username + " has " + userScore + " points.\nThe computer has " + comScore + " points.");
    winner.appendChild(winnerHeading);
    winner.appendChild(finalScore);
    let gameDiv = document.querySelector("#game");
    gameDiv.replaceChildren(winner);
  
    return "Game Over";
  }
}



/* //A validate user entry function to make sure the user can spell  
function validateUserEntry(string) {
  switch (string) {
    case "scissors":
    case "paper":
    case "rock":
      return true;
      break;
    default:
      alert("WRONG ENTRY");
      return false;
  }
}


//function to Have the user enter a choice
function getUserChoice() {
  //Prompt for entry
  let userEntry = prompt("Please enter your choice as Scissors, Paper or Rock?")
  //validate this choice
  //Trim it
  userEntry = userEntry.trim();
  //get rid of capitals in random spots
  userEntry = userEntry.toLowerCase();
  return userEntry;
}
 */

//function to check who the winner is
function whoWins(userChoice, comChoice) {
  //display choices 
    imgComChoice.setAttribute("src", "images/com-"+comChoice+".png");
    imgUserChoice.setAttribute("src", "images/user-"+userChoice+".png");
  
  
    //Compare user choice against computer choice
  //if same call a draw
  if (userChoice === comChoice) {
    imgComChoice.setAttribute("class", "draw");
    imgUserChoice.setAttribute("class", "draw");
    return "draw";
  }
  
  //Matrix of If's to find the winner.
  if (userChoice === "scissors" && comChoice === "paper") {
    imgComChoice.setAttribute("class", "loser");
    imgUserChoice.setAttribute("class", "winner");
    return "user win";
  } else if (userChoice === "scissors" && comChoice === "rock") {
    imgComChoice.setAttribute("class", "winner");
    imgUserChoice.setAttribute("class", "loser");
    return "computer win";
  } else if (userChoice === "paper" && comChoice === "scissors") {
    imgComChoice.setAttribute("class", "winner");
    imgUserChoice.setAttribute("class", "loser");
    return "computer win";
  } else if (userChoice === "paper" && comChoice === "rock") {
    imgComChoice.setAttribute("class", "loser");
    imgUserChoice.setAttribute("class", "winner");
    return "user win";
  } else if (userChoice === "rock" && comChoice === "paper") {
    imgComChoice.setAttribute("class", "winner");
    imgUserChoice.setAttribute("class", "loser");
    return "computer win";
  } else if (userChoice === "rock" && comChoice === "scissors") {
    imgComChoice.setAttribute("class", "loser");
    imgUserChoice.setAttribute("class", "winner");
    return "user win";
  } else {
    //console log if I forgot something
    console.log("Error in whoWins function");
    imgComChoice.setAttribute("class", "draw");
    imgUserChoice.setAttribute("class", "draw");
    return "draw";
  }


}

//this plays a single round and returns the winner 
function playARound(userChoice){
  //set a computer choice
  let comChoice = getComputerChoice();
  //decide who won a round
  let roundWinner = whoWins(userChoice, comChoice);

  if (roundWinner === "user win") {
    //alert(username + " has won a round");
    userScore++;
    rounds++;
    //alert("Current score is:\n" + username + " has " + userScore + " points.\nThe computer has " + comScore + " points.");
  } else if (roundWinner === "computer win"){
    //alert("The computer has won a round");
    comScore++;
    rounds++;
    //alert("Current score is:\n" + username + " has " + userScore + " points.\nThe computer has " + comScore + " points.");
  } else {
    //alert("Looks like a draw\nTry again");
    draws++;
  }

  playerScore.textContent = userScore;
  computerScore.textContent = comScore;
  roundsCounter.textContent = rounds + " Of " + numberRounds;

  checkRounds(rounds)
}

//function to begin game
function beginGame(para) {
  username = setUsername();

  enterRounds = document.querySelector("#enterRounds");
  numberRounds = enterRounds.value
  let startGame = document.querySelector("#startGame");
  startGame.setAttribute("style", "display:none;")
  
  let choose= document.querySelector("#choose");
  choose.setAttribute("style", "display:flex;")
}


//setup a game
//get a username
var username = "Player";
//set a start score
var userScore = 0;
var  comScore = 0;
var draws = 0;
var rounds = 0;
let numberRounds = 5;

let userScissors = document.querySelector("#scissors");
userScissors.addEventListener('click', () => playARound("scissors"));

let userPaper = document.querySelector("#paper");
userPaper.addEventListener('click', () => playARound("paper"));

let userRock = document.querySelector("#rock");
userRock.addEventListener('click', () => playARound("rock"));

let beginGameBtn = document.querySelector("#begin");
beginGameBtn.addEventListener('click', () => beginGame());


let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#comScore");
let roundsCounter = document.querySelector("#rounds");

let imgUserChoice = document.querySelector("img#userChoice");
let imgComChoice = document.querySelector("img#comChoice");

//console.log(playARound());

//play a game first to 3
//game(3);




