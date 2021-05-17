document.addEventListener("DOMContentLoaded", function () {

//Keep Track of Rounds
let roundNumber = 1;
let round = document.querySelector("#round");
round.innerText = roundNumber;

// Keep Track of Wins and Draws
let computerWins = 0;
let playerWins = 0;
let draw = 0;

//Hover Animation For Logo
const logo = document.querySelector("#logo");
logo.addEventListener("mouseenter", gif);
logo.addEventListener("mouseleave", png);

function gif() {
    logo.src = "images/Rock Paper Scissors.gif";
}

function png() {
    logo.src = "images/Rock Paper Scissors.png";
}

// Table that tracks wins and draws
const tableHead = document.querySelector("#tableHead");
const adversaryWins = document.querySelector("#adversaryWins");
adversaryWins.innerText = computerWins;
const draws = document.querySelector("#draws");
draws.innerText = draw;
const userWins = document.querySelector("#userWins");
userWins.innerText = playerWins;


// Feedback Div that shows the result of each round
const feedback = document.querySelector(".feedback");
const feedbackContainer = document.querySelector(".feedbackContainer");

// "Play Again" Div for Button
const startAgain = document.querySelector(".startAgain");

// Listen for "clicks" on Rock, Paper, Scissors elements and run "initiateRound" on Click.
const userChoice = document.querySelectorAll(".userChoice");
const options = Array.from(userChoice);
options.forEach(option => 
    option.addEventListener("click", initiateRound)
);

function initiateRound(e) {
    if (feedbackContainer.classList.contains("opacityAnimation")) {
        removeOpacityAnimation();
    }
    if (roundNumber == 4) {
        tableHead.innerText = "Last Round!";
    }
    let userPick = e.toElement.id;
    let playerChoice = userPlay(userPick);
    let computerChoice = computerPlay();
    playRound(computerChoice, playerChoice);
    if (roundNumber < 6) {
    feedbackContainer.classList.add("opacityAnimation");
    feedbackContainer.addEventListener('animationend', removeOpacityAnimation);
    }
    if (roundNumber === 6) {
        winner(computerWins, playerWins);
    }
}

function removeOpacityAnimation() {
    feedbackContainer.classList.remove("opacityAnimation");
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
    if (roundNumber < 6) {
        if (playerChoice === computerChoice) {
            feedback.innerText = "Round " + roundNumber + ": It's a draw!";
            draw++;
            roundNumber++;
            round.innerText = roundNumber;
            updateScoreTable();
        }
        else {
            switch (playerChoice + " " + computerChoice) {
                case "Rock Paper":
                    feedback.innerText = "Round " + roundNumber + ": You lost! Paper beats Rock!";
                    computerWins++;
                    roundNumber++;
                    round.innerText = roundNumber;
                    updateScoreTable();
                    break;
                case "Rock Scissors":
                    feedback.innerText = "Round " + roundNumber + ": You won! Rock beats Scissors!";
                    playerWins++;
                    roundNumber++;
                    round.innerText = roundNumber;
                    updateScoreTable();
                    break;
                case "Paper Rock":
                    feedback.innerText = "Round " + roundNumber + ": You won! Paper beats Rock!";
                    playerWins++;
                    roundNumber++;
                    round.innerText = roundNumber;
                    updateScoreTable();
                    break;
                case "Paper Scissors":
                    feedback.innerText = "Round " + roundNumber + ": You lost! Scissors beats Paper";
                    computerWins++;
                    roundNumber++;
                    round.innerText = roundNumber;
                    updateScoreTable();
                    break;
                case "Scissors Rock":
                    feedback.innerText = "Round " + roundNumber + ": You lost! Rock beats Scissors";
                    computerWins++;
                    roundNumber++;
                    round.innerText = roundNumber;
                    updateScoreTable();
                    break;
                case "Scissors Paper":
                    feedback.innerText = "Round " + roundNumber +  ": You won! Scissors beats Paper";
                    playerWins++;
                    roundNumber++;
                    round.innerText = roundNumber;
                    updateScoreTable();
                    break;

                default:
                    console.log("ERROR");
            }
        }
    }
}

function updateScoreTable() {
    adversaryWins.innerText = computerWins;
    draws.innerText = draw;
    userWins.innerText = playerWins;
}

function winner(computerWins, playerWins) {
    // CHECKS FOR WINNER
    if (computerWins > playerWins) {
        tableHead.innerText = "Computer WON!";
        tableHead.classList.add("results");
        makeResetButtonVisible();
    }
    else if (computerWins < playerWins) {
        tableHead.innerText = "You WON!";
        tableHead.classList.add("results");
        makeResetButtonVisible();
    }
    else if (computerWins == playerWins) {
        tableHead.innerText = "It's a DRAW!";
        tableHead.classList.add("results");
        makeResetButtonVisible();
    }
}

function makeResetButtonVisible() {
    startAgain.classList.add("startAgainVisible");
    button = document.querySelector(".startAgainVisible")
    button.addEventListener("click", resetGame);
}


/* Resets integrers to original values before the game started. Assign these values to the table (reset table).
Reset table head to original values before the game started. Make "Start Again" button invisible again. */
function resetGame() {
    roundNumber = 1;
    computerWins = 0;
    playerWins = 0;
    draw = 0;
    adversaryWins.innerText = computerWins;
    draws.innerText = draw;
    userWins.innerText = playerWins;
    tableHead.innerHTML = "Round <span id='round'></span>/5";
    let round = document.querySelector("#round");
    round.innerText = roundNumber;
    tableHead.classList.remove("results");
    startAgain.classList.remove("startAgainVisible");
}

});
