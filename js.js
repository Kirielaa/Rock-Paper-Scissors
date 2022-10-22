// First the user is gonna input one of three choices. We'll do this with a prompt.
// Then the computer is gonna output one of the same three choices.
// We're gonna play a round.
// if both choices are the same, it's a tie
// It's a win (to the user) if: paper-rock, scissors-paper, rock-scissors.

// First the user is gonna input one of three choices. We'll do this with a prompt.
let playerChoice = prompt("What is your choice? ", "rock");
playerChoice = playerChoice.toLowerCase();


// Then the computer is gonna output one of the same three choices.

function getComputerChoice() {
    const gameChoices = ["rock", "paper", "scissors"];
    let choice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return choice;
}

let computerChoice = getComputerChoice();

console.log(playerChoice);
console.log(computerChoice);

// We're gonna play a round.

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
    return "It's a tie!"; // if both choices are the same, it's a tie
} else if (playerChoice === "paper" && computerChoice === "rock") {
    return "You win! Paper beats rock"; // It's a win (to the user) if: paper-rock, scissors-paper, rock-scissors.
} else if (playerChoice === "paper" && computerChoice === "scissors") {
    return "You lose! Paper loses to scissors";
} else if (playerChoice === "rock" && computerChoice === "scissors") {
    return "You win! Rock beats scissors"; // It's a win (to the user) if: paper-rock, scissors-paper, rock-scissors.
} else if (playerChoice === "rock" && computerChoice === "paper") {
    return "You lose. Rock loses to paper";
} else if (playerChoice === "scissors" && computerChoice === "paper") {
    return "You win! Scissors beats paper" // It's a win (to the user) if: paper-rock, scissors-paper, rock-scissors.
} else if (playerChoice === "scissors" && computerChoice === "rock") {
    return "You lose! Scissors loses to rock";
} else {
    return alert("Pick rock, paper, or scissors please.");
}
}

// console.log (playRound(playerChoice, computerChoice));

function game() {
    for (let i = 1; i <= 5; i++) {
        if (i <= 5) {
            playerChoice = prompt("What is your choice? ", "rock");
            computerChoice = getComputerChoice();
            console.log (playRound(playerChoice, computerChoice));
        } 
    }
}

