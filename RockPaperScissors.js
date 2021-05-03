//Keeps Track of Rounds
let roundNumber = 1;
const round = document.querySelector("#round");
round.innerText = roundNumber;

// Keep Track of Wins
let computerWins = 0;
let playerWins = 0;

// Listens for "clicks" on Rock, Paper, Scissors elements.
const userChoice = document.querySelectorAll(".userChoice");
const options = Array.from(userChoice);
options.forEach(option => 
    option.addEventListener("click", initiateRound)
);

function initiateRound(e) {
    let userPick = e.toElement.id;
    let playerChoice = userPlay(userPick);
    let computerChoice = computerPlay();
    playRound(computerChoice, playerChoice);
    let feedback = document.querySelector(".feedbackContainer");
    feedback.classList.add("opacityAnimation");
}

function userPlay(userPick) {
    if (userPick.toUpperCase() === "ROCK") {
        let playerChoice = "Rock";
        return playerChoice;
    }
    else if (userPick.toUpperCase() === "PAPER") {    
        let playerChoice = "Paper";
        return playerChoice;
    }
    else if (userPick.toUpperCase() === "SCISSORS") {
        let playerChoice = "Scissors";
        return playerChoice;
    }
}

// PICK RANDOM COMPUTER CHOICE
function computerPlay() {
    let computerPick = Math.floor((Math.random() * 3));
    if (computerPick === 0) {
        let computerChoice = "Rock";
        return computerChoice;
    }
    else if (computerPick === 1) {
        let computerChoice = "Paper";
        return computerChoice;
    }
    else if (computerPick === 2) {
        let computerChoice = "Scissors";
        return computerChoice;
    }
}


// TRACKS ROUND WINNERS
function playRound(computerChoice, playerChoice) {
    if (playerChoice === computerChoice) {
        console.log("It's a draw!")
        roundNumber++;
        round.innerText = roundNumber;
    }
    else {
        console.log(playerChoice + " " + computerChoice);
        switch (playerChoice + " " + computerChoice) {
            case "Rock Paper":
                console.log("You lose! Paper beats Rock!");
                computerWins++;
                roundNumber++;
                round.innerText = roundNumber;
                break;
            case "Rock Scissors":
                console.log("You win! Rock beats Scissors!");
                playerWins++;
                roundNumber++;
                round.innerText = roundNumber;
                break;
            case "Paper Rock":
                console.log("You win! Paper beats Rock!");
                playerWins++;
                roundNumber++;
                round.innerText = roundNumber;
                break;
            case "Paper Scissors":
                console.log("You lose! Scissors beats Paper");
                computerWins++;
                roundNumber++;
                round.innerText = roundNumber;
                break;
            case "Scissors Rock":
                console.log("You lose! Rock beats Scissors");
                computerWins++;
                roundNumber++;
                round.innerText = roundNumber;
                break;
            case "Scissors Paper":
                console.log("You win! Scissors beats Paper");
                playerWins++;
                roundNumber++;
                round.innerText = roundNumber;
                break;

            default:
                console.log("ERROR");
        }
    }
}

function winner(computerWins, playerWins) {
    // CHECKS FOR WINNER
    if (computerWins > playerWins) {
        console.log("Computer WON!");
        console.log(`Computer WON ${computerWins} round(s) out of 5.`);
        console.log(`Player WON ${playerWins} round(s) out of 5.`);

    }
    else if (computerWins < playerWins) {
        console.log("You WON!");
        console.log(`Player WON ${playerWins} round(s) out of 5.`);
        console.log(`Computer WON ${computerWins} round(s) out of 5.`);
    }
    else if (computerWins == playerWins) {
        console.log("It's a DRAW!");
        console.log(`Player WON ${playerWins} round(s) out of 5.`);
        console.log(`Computer WON ${computerWins} round(s) out of 5.`);
    }
}


