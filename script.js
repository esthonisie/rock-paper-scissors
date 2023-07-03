playGame();

function playGame() {

  let playerPoints = 0;
  let computerPoints = 0;
  
  let roundNumber = 1;
  let roundNumberPrompt = "Round: ";
  let roundNumberTotal = "/5"
  let roundNumberAlert = "Result of ROUND "

  let roundResult = "";

  while (roundNumber < 6) {
    playRound();
    roundNumber++;
  }

  function playRound() {
    const computerSelection = getComputerSelection();
    const playerSelection = capitalize(prompt(`${roundNumberPrompt}${roundNumber}${roundNumberTotal}\nRock, paper or scissors. Your choice:`));

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
          roundResult = "Paper beats Rock.\nYou've lost this round!";
          computerPoints += 10;
      } else if(you === "Rock" && other === "Scissors") {
          roundResult = "Rock beats Scissors.\nYou've won this round!"; 
          playerPoints += 10;
      } else if(you === "Paper" && other === "Rock") {
          roundResult = "Paper beats Rock.\nYou've won this round!";
          playerPoints += 10;
      } else if(you === "Paper" && other === "Scissors") {
          roundResult = "Scissors beats Paper.\nYou've lost this round!";
          computerPoints += 10;
      } else if(you === "Scissors" && other === "Rock") {
          roundResult = "Rock beats Scissors.\nYou've lost this round!";
          computerPoints += 10;
      } else if(you === "Scissors" && other === "Paper") {
          roundResult = "Scissors beats Paper.\nYou've won this round!";
          playerPoints += 10;
      } else if(you === other) {
          roundResult = "It's a tie!";
          playerPoints += 5;
          computerPoints += 5;
      } else if(you === "" || (you !== "Rock" && you !== "Paper" && you !== "Scissors")) {
          roundResult = "Hello User. Please make a choice: rock, paper or scissors.";
      }
    }

    function replayRound(you) {
      if(you === "" || (you !== "Rock" && you !== "Paper" && you !== "Scissors")) {
        roundNumber -= 1;
      }
    }

    compareSelection(playerSelection, computerSelection);

    alert(`${roundNumberAlert}${roundNumber}\n\nYour Choice: ${playerSelection}  |  Computer's Choice: ${computerSelection}\n${roundResult}\n\nYour Score: ${playerPoints} points  |  Computer's Score: ${computerPoints} points`);
    
    replayRound(playerSelection);
  }

  function checkWinner() {
    if(playerPoints > computerPoints) {
      alert("YOU'VE WON THE GAME!");
    } else if(playerPoints < computerPoints) {
      alert("SORRY, YOU'VE LOST THE GAME.");
    } 
  }

  function playExtraRound() {
    alert("NO WINNERS, NO LOSERS.\nPlay an extra round!");
    for (let i = 0; playerPoints === computerPoints; i++) {
      roundNumber = "EXTRA ROUND";
      roundNumberTotal = "";
      roundNumberPrompt = "";
      roundNumberAlert = "Result of ";
      playRound();
      checkWinner();
    }
  }

  if(playerPoints !== computerPoints) {
    checkWinner();
  } else playExtraRound();
  
}




