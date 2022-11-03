// First the user is gonna input one of three choices. We'll do this with a prompt.
// Then the computer is gonna output one of the same three choices.
// We're gonna play a round. ----- This has been scratched, it's 5 rounds now.
// if both choices are the same, it's a tie
// It's a win (to the user) if: paper-rock, scissors-paper, rock-scissors.
//Next we're gonna make it more complex. We're gonna play 5 rounds.
//At the end display the winner







let win = 0;
let lose = 0;
let playerChoice;
let computerChoice = getComputerChoice();
const score = document.querySelector('#score');
const result = document.querySelector('#result');
const buttons = document.querySelectorAll('.p-options');
const cButtons = document.querySelectorAll('.c-options');

score.textContent = `${win} - ${lose}`

// Then the computer is gonna output one of the same three choices.

function getComputerChoice() {
    const gameChoices = ["Archer", "Knight", "Spearman"];
    let choice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return choice;
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.textContent;
        computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
        cChoice();
        finalResult();
        // console.log(playerChoice);
        // console.log(computerChoice);
    });
});

function rmvTransition() {
    this.classList.remove('selected');
}

function cChoice() {cButtons.forEach ((e) => {
    if (e.textContent === computerChoice) {
       e.classList.add('selected');
    }
})
}

cButtons.forEach(button => button.addEventListener('transitionend', rmvTransition));

// We're gonna play a round.

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
    result.textContent = "It's a tie!"; // if both choices are the same, it's a tie
} else if (playerChoice === "Archer" && computerChoice === "Spearman" || 
        playerChoice === "Knight" && computerChoice === "Archer" ||
        playerChoice === "Spearman" && computerChoice === "Knight") {
    result.textContent = `You win! ${playerChoice} beats ${computerChoice}`; // It's a win (to the user) if: paper-rock, scissors-paper, rock-scissors.
    win++;
    score.textContent = `${win} - ${lose}`
} else if (playerChoice === "Archer" && computerChoice === "Knight" ||
        playerChoice === "Knight" && computerChoice === "Spearman" || 
        playerChoice === "Spearman" && computerChoice === "Archer") {
    result.textContent = `You lose! ${playerChoice} loses to ${computerChoice}`;
    lose++;
    score.textContent = `${win} - ${lose}`
}  else {
    result.textContent = "Ops, I don't know how you got this result.";
}
}

// At the end display the winner

function finalResult() {
    if (win == 5 || lose == 5) {
        if (win > lose) {
            result.textContent = (`You're the winner, congratulations! You won ${win} times. ALGARTALHOS É CARO` );
            win = 0;
            lose = 0;
            score.textContent = `${win} - ${lose}`
        }   else if (win < lose) {
        result.textContent = `You lost ${lose} times, ALGARTALHOS É CARO :(`;
        win = 0;
        lose = 0;
        score.textContent = `${win} - ${lose}` 
        }
    } 
};

// Outdated



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

// First the user is gonna input one of three choices. We'll do this with a prompt.
// let playerChoice = prompt("What is your choice? ", "rock");
// playerChoice = playerChoice.toLowerCase();

// game();



    

// console.log(finalResult());
// // alert(finalResult());
