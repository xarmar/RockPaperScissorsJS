// KEEP TRACK OF WINS
let computerWins = 0;
let playerWins = 0;

// START GAME
game();

function game() {
    // RUN 5 ROUNDS
    for (round = 1; round<=5; round++) {
        console.log("Round " + round + "!")
        let computer = computerPlay();
        let user = userPlay();
        console.log("You picked " + user + ".")
        console.log("Computer picked " + computer + ".")
        play(computer, user);
    }
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

// ASK USER FOR A CHOICE
function userPlay() {
    let userPick = prompt("Type your choice: 'Rock', 'Paper' or 'Scissors'.")
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
    else {
        alert("ONLY 'Rock', 'Paper' and 'Scissors' allowed.");
        return userPlay();
    }
}
// TRACKS ROUND WINNERS
function play(computerChoice, playerChoice) {
    if (playerChoice === computerChoice) {
        console.log("It's a draw!")
    }
    else {
        console.log(playerChoice + " " + computerChoice);
        switch (playerChoice + " " + computerChoice) {
            case "Rock Paper":
                console.log("You lose! Paper beats Rock!");
                computerWins++;
                break;
            case "Rock Scissors":
                console.log("You win! Rock beats Scissors!");
                playerWins++;
                break;
            case "Paper Rock":
                console.log("You win! Paper beats Rock!");
                playerWins++;
                break;
            case "Paper Scissors":
                console.log("You lose! Scissors beats Paper");
                computerWins++;
                break;
            case "Scissors Rock":
                console.log("You lose! Rock beats Scissors");
                computerWins++;
                break;
            case "Scissors Paper":
                console.log("You win! Scissors beats Paper");
                playerWins++;
                break;

            default:
                console.log("ERROR");
        }
    }
    
}
