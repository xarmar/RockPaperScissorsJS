//Keeps Track of Rounds
let roundNumber = 1;
const round = document.querySelector("#round");
round.innerText = roundNumber;

// Keep Track of Wins
let computerWins = 0;
let playerWins = 0;
let draw = 0;

//Listens for image hover
const logo = document.querySelector("#logo");
logo.addEventListener("mouseenter", gif);
logo.addEventListener("mouseleave", png);

function gif() {
    logo.src = "Rock Paper Scissors.gif";
}

function png() {
    console.log("left");
    logo.src = "Rock Paper Scissors.png";
}


// Listens for "clicks" on Rock, Paper, Scissors elements.
const userChoice = document.querySelectorAll(".userChoice");
const options = Array.from(userChoice);

// Table that tracks wins and draws
const adversaryWins = document.querySelector("#adversaryWins");
adversaryWins.innerText = computerWins;
const draws = document.querySelector("#draws");
draws.innerText = draw;
const userWins = document.querySelector("#userWins");
userWins.innerText = playerWins;

// Feedback Div that shows result of rounds
const feedback = document.querySelector(".feedback");
const feedbackContainer = document.querySelector(".feedbackContainer");
const winnerContainer = document.querySelector(".winnerContainer");


options.forEach(option => 
    option.addEventListener("click", initiateRound)
);

function initiateRound(e) {
    let userPick = e.toElement.id;
    let playerChoice = userPlay(userPick);
    let computerChoice = computerPlay();
    playRound(computerChoice, playerChoice);
    feedbackContainer.classList.add("opacityanimation");
    adversaryWins.innerText = computerWins;
    draws.innerText = draw;
    userWins.innerText = playerWins;
    if (roundNumber === 6) {
        winner(computerWins, playerWins);
    }
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
        draw++;
        roundNumber++;
        round.innerText = roundNumber;
    }
    else {
        console.log(playerChoice + " " + computerChoice);
        switch (playerChoice + " " + computerChoice) {
            case "Rock Paper":
                feedbackContainer.classList.remove("opacityanimation");
                console.log(feedbackContainer.classList.contains("opacityanimation"));
                feedback.innerText = "Round " + roundNumber + " You lost! Paper beats Rock!";
                computerWins++;
                roundNumber++;
                round.innerText = roundNumber;
                break;
            case "Rock Scissors":
                feedbackContainer.classList.remove("opacityanimation");
                console.log(feedbackContainer.classList.contains("opacityanimation"))
                feedback.innerText = "Round " + roundNumber + ": You won! Rock beats Scissors!";
                playerWins++;
                roundNumber++;
                round.innerText = roundNumber;
                break;
            case "Paper Rock":
                feedbackContainer.classList.remove("opacityanimation");
                console.log(feedbackContainer.classList.contains("opacityanimation"))
                feedback.innerText = "Round " + roundNumber + ": You won! Paper beats Rock!";
                playerWins++;
                roundNumber++;
                round.innerText = roundNumber;
                break;
            case "Paper Scissors":
                feedbackContainer.classList.remove("opacityanimation");
                console.log(feedbackContainer.classList.contains("opacityanimation"))
                feedback.innerText = "Round " + roundNumber + ": You lost! Scissors beats Paper";
                computerWins++;
                roundNumber++;
                round.innerText = roundNumber;
                break;
            case "Scissors Rock":
                feedbackContainer.classList.remove("opacityanimation");
                console.log(feedbackContainer.classList.contains("opacityanimation"))
                feedback.innerText = "Round " + roundNumber + ": You lost! Rock beats Scissors";
                computerWins++;
                roundNumber++;
                round.innerText = roundNumber;
                break;
            case "Scissors Paper":
                feedbackContainer.classList.remove("opacityanimation");
                console.log(feedbackContainer.classList.contains("opacityanimation"))
                feedback.innerText = "Round " + roundNumber +  ": You won! Scissors beats Paper";
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
        winner.innerText = "Computer WON!";
        console.log(`Computer WON ${computerWins} round(s) out of 5.`);
        console.log(`Player WON ${playerWins} round(s) out of 5.`);

    }
    else if (computerWins < playerWins) {
        winner.innerText = "You WON!";
        console.log(`Player WON ${playerWins} round(s) out of 5.`);
        console.log(`Computer WON ${computerWins} round(s) out of 5.`);
    }
    else if (computerWins == playerWins) {
        winner.innerText = "It's a DRAW!";
        console.log(`Player WON ${playerWins} round(s) out of 5.`);
        console.log(`Computer WON ${computerWins} round(s) out of 5.`);
    }
}


