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



let win = 0;
let lose = 0;
const score = document.querySelector('#score');
const result = document.querySelector('#result');
const buttons = document.querySelectorAll('.p-options');


score.textContent = `${win} - ${lose}`
// Then the computer is gonna output one of the same three choices.

function getComputerChoice() {
    const gameChoices = ["archer", "knight", "spearman"];
    let choice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return choice;
}

let playerChoice;
let computerChoice = getComputerChoice();


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.textContent;
        playerChoice = playerChoice.toLowerCase();
        computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
        console.log(playerChoice);
        console.log(computerChoice);
    });
});


// buttons.forEach((button) => {
//     button.addEventListener('click', (playRound(playerChoice, computerChoice)) );
// });


// We're gonna play a round.

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
    result.textContent = "It's a tie!"; // if both choices are the same, it's a tie
} else if (playerChoice === "archer" && computerChoice === "spearman" || 
        playerChoice === "knight" && computerChoice === "archer" ||
        playerChoice === "spearman" && computerChoice === "knight") {
    result.textContent = `You win! ${playerChoice} beats ${computerChoice}`; // It's a win (to the user) if: paper-rock, scissors-paper, rock-scissors.
} else if (playerChoice === "archer" && computerChoice === "knight" ||
        playerChoice === "knight" && computerChoice === "spearman" || 
        playerChoice === "spearman" && computerChoice === "archer") {
    result.textContent = `You lose! ${playerChoice} loses to ${computerChoice}`;
}  else {
    result.textContent = "Ops";
}
}

// // console.log (playRound(playerChoice, computerChoice));

// //We're gonna make it more complex. We're gonna play 5 rounds.



// function game() {
//     for (let i = 0; i < 5; i++) {
//         if (i < 5) {
//             let playerChoice = prompt("What is your choice: Rock, paper or scissors? ", "scissors");
//             playerChoice = playerChoice.toLowerCase(); // way for the user to input his choice
//             computerChoice = getComputerChoice();
//             let result = (playRound(playerChoice, computerChoice));
//             console.log(result);
//             alert(result);
//             // make a function that keeps track of how many times you win/lose
//             if (result.substr(0, 7) === "You win") {
//                 win++;        
//             } else if (result.substr(0, 8) === "You lose") {
//                 lose++;
//             }
//         }
//     }
// }

// game();


// //At the end display the winner

// function finalResult() {
//     if (win > lose) {
//         result.textContent = (`You're the winner, congratulations! You won ${win} times` );
//     } else if (win < lose) {
//         result.textContent = `You lost ${lose} times, better luck next time :(`;
//     } else if (win === lose) {
//         result.textContent = "It's a tie! So close. Better luck next time! :)";
//     }
// }

// console.log(finalResult());
// // alert(finalResult());
