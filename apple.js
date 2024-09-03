const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultParagraph = document.getElementById('result');

let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Tie!';
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
               (userChoice === 'paper' && computerChoice === 'rock') ||
               (userChoice === 'scissors' && computerChoice === 'paper')) {
        userScore++;
        return `You win! ${userChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `Computer wins! ${computerChoice} beats ${userChoice}.`;
    }
}

rockButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = determineWinner('rock', computerChoice);
    resultParagraph.textContent = result;
    resultParagraph.textContent += ` Score: You - ${userScore}, Computer - ${computerScore}`;
});

paperButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = determineWinner('paper', computerChoice);
    resultParagraph.textContent = result;
    resultParagraph.textContent += ` Score: You - ${userScore}, Computer - ${computerScore}`;
});

scissorsButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = determineWinner('scissors', computerChoice);
    resultParagraph.textContent = result;
    resultParagraph.textContent += ` Score: You - ${userScore}, Computer - ${computerScore}`;
});