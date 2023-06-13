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

console.log(computerSelection);
console.log(playerSelection);

