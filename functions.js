/* Functions.js
21/01/2024 MM created to cleanup index.html for GUI addition 

 */


//Function to set username
function setUsername() {
  let localuser = prompt("What is your username?");

  //dom changes
  let scoreName = document.querySelector("span#playerName");
  let choiceName = document.querySelector("div#userChoice h3");
  scoreName.textContent = localuser;
  choiceName.textContent = localuser + " Choice";

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
function whoWins(userChoice, comChoice) {
  //Compare user choice against computer choice
  //if same call a draw
  if (userChoice === comChoice) {
    return "draw";
  }
  
  //Matrix of If's to find the winner.
  if (userChoice === "scissors" && comChoice === "paper") {
    return "user win";
  } else if (userChoice === "scissors" && comChoice === "rock") {
    return "computer win";
  } else if (userChoice === "paper" && comChoice === "scissors") {
    return "computer win";
  } else if (userChoice === "paper" && comChoice === "rock") {
    return "user win";
  } else if (userChoice === "rock" && comChoice === "paper") {
    return "computer win";
  } else if (userChoice === "rock" && comChoice === "scissors") {
    return "user win";
  } else {
    //console log if I forgot something
    console.log("Error in whoWins function");
    return "draw";
  }
}

//this plays a single round and returns the winner 
function playARound(userChoice){
  //set a computer choice
  let comChoice = getComputerChoice();
  //decide who won a round
  let localRoundWinner = whoWins(userChoice, comChoice);
  console.log(localRoundWinner);
  return localRoundWinner;
}

function game(firstToo) {
  while (userScore != firstToo && comScore != firstToo) {
  
  let roundWinner = playARound();
  if (roundWinner === "user win") {
    alert(username + " has won a round");
    userScore++;
    alert("Current score is:\n" + username + " has " + userScore + " points.\nThe computer has " + comScore + " points.");
    
  } else if (roundWinner === "computer win"){
    alert("The computer has won a round");
    comScore++
    alert("Current score is:\n" + username + " has " + userScore + " points.\nThe computer has " + comScore + " points.");
  } else {
    alert("Looks like a draw\nTry again");
  }
}
}


//setup a game
//get a username
var username = setUsername();
//set a start score
var userScore = 0;
var  comScore = 0;

let userScissors = document.querySelector("#scissors");
userScissors.addEventListener('click', () => playARound("scissors"));

let userPaper = document.querySelector("#paper");
userPaper.addEventListener('click', () => playARound("paper"));

let userRock = document.querySelector("#rock");
userRock.addEventListener('click', () => playARound("rock"));

//console.log(playARound());

//play a game first to 3
//game(3);

//decide who won
if (comScore > userScore) {
alert("THE WINNER WAS THE COMPUTER");
} else {
alert(username + " HAS WON!!!")
}
alert("The final score was:\n" + username + " has " + userScore + " points.\nThe computer has " + comScore + " points.");




