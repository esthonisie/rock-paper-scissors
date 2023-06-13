function getComputerChoice() {
  const arrRPS = ["Rock", "Paper", "Scissors"];
  return arrRPS[(Math.floor(Math.random() * arrRPS.length))];
}

console.log(getComputerChoice());