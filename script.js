const computerSelection = getComputerSelection();
const playerSelection = capitalize("rOcK");

function capitalize(input) {
  const lowercase = input.toLowerCase();
  return (lowercase.charAt(0).toUpperCase() + lowercase.slice(1));
}

function getComputerSelection() {
  const arrRPS = ["Rock", "Paper", "Scissors"];
  return arrRPS[(Math.floor(Math.random() * arrRPS.length))];
}

function compareSelection(you, other) {
  if(you === "Rock" && other === "Paper") {
      return "Paper beats Rock.\nYou've lost this round!";
  } else if(you === "Rock" && other === "Scissors") {
      return "Rock beats Scissors.\nYou've won this round!"; 
  } else if(you === "Paper" && other === "Rock") {
      return "Paper beats Rock.\nYou've won this round!";
  } else if(you === "Paper" && other === "Scissors") {
      return "Scissors beats Paper.\nYou've lost this round!";
  } else if(you === "Scissors" && other === "Rock") {
      return "Rock beats Scissors.\nYou've lost this round!";
  } else if(you === "Scissors" && other === "Paper") {
      return "Scissors beats Paper.\nYou've won this round!";
  } else if(you === other) {
      return "It's a tie!";
  } 
}

console.log(`Your Choice: ${playerSelection}`);
console.log(`Computer's Choice: ${computerSelection}`);
console.log(compareSelection(playerSelection, computerSelection))

