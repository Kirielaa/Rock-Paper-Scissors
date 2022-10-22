// First the user is gonna input one of three choices. We'll do this with a prompt.
// Then the computer is gonna output one of the same three choices.
// We're gonna play a round. ----- This has been scratched, it's 5 rounds now.
// if both choices are the same, it's a tie
// It's a win (to the user) if: paper-rock, scissors-paper, rock-scissors.
//Next we're gonna make it more complex. We're gonna play 5 rounds.
//At the end display the winner



// First the user is gonna input one of three choices. We'll do this with a prompt.
// let playerChoice = prompt("What is your choice? ", "rock");
// playerChoice = playerChoice.toLowerCase();


// Then the computer is gonna output one of the same three choices.

function getComputerChoice() {
    const gameChoices = ["rock", "paper", "scissors"];
    let choice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return choice;
}

let computerChoice = getComputerChoice();

// console.log(playerChoice);
// console.log(computerChoice);

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

//Next we're gonna make it more complex. We're gonna play 5 rounds.


let win = 0;
let lose = 0;
function game() {
    for (let i = 0; i < 5; i++) {
        if (i < 5) {
            let playerChoice = prompt("What is your choice? ", "rock");
            playerChoice = playerChoice.toLowerCase();
            computerChoice = getComputerChoice();
            let result = (playRound(playerChoice, computerChoice));
            console.log(result);
            // make a function that keeps track of how many times you win/lose
            if (result.substr(0, 7) === "You win") {
                win++;        
            } else if (result.substr(0, 8) === "You lose") {
                lose++;
            }
        } if (i === 4) {
            finalResult();
        }
    }
}

game();


//At the end display the winner

function finalResult() {
    if (win > lose) {
        return (`You're the winner, congratulations! You won ${win} times` );
    } else if (win < lose) {
        return `You lost ${lose} times, better luck next time :(`;
    } else if (win === lose) {
        return "It's a tie! So close. Better luck next time! :)";
    }
}

console.log(finalResult());
