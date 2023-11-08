// Define variables to track scores
let playerScore = 0;
let computerScore = 0;

// Get the HTML elements
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const gameResultDisplay = document.getElementById("game-result");

// Function to enable buttons
function enableButtons() {
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}

// Function to reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = "0";
    computerScoreDisplay.textContent = "0";
    gameResultDisplay.textContent = "";
    enableButtons();
    playAgainButton.style.display = "none";
}

// Add event listener to the "Play Again" button
const playAgainButton = document.getElementById("play-again");
playAgainButton.addEventListener("click", resetGame);

// Function to get a random computer choice
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to play a single round of Rock Paper Scissors
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    if (playerScore < 5 && computerScore < 5) {
        // Only continue playing if the game is not over
        if (
            (playerSelection === "Rock" && computerSelection === "Scissors") ||
            (playerSelection === "Paper" && computerSelection === "Rock") ||
            (playerSelection === "Scissors" && computerSelection === "Paper")
        ) {
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            gameResultDisplay.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        } else if (playerSelection === computerSelection) {
            gameResultDisplay.textContent = "It's a tie!";
        } else {
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            gameResultDisplay.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        }

        // Check for a winner
        if (playerScore >= 5) {
            gameResultDisplay.textContent = "You win the game!";
            playAgainButton.style.display = "block"; // Show "Play Again" button
            disableButtons();
        } else if (computerScore >= 5) {
            gameResultDisplay.textContent = "Computer wins the game!";
            playAgainButton.style.display = "block"; // Show "Play Again" button
            disableButtons();
        }
    }
}

// Function to disable buttons after the game ends
function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

// Add event listeners to the buttons
rockButton.addEventListener("click", () => playRound("Rock"));
paperButton.addEventListener("click", () => playRound("Paper"));
scissorsButton.addEventListener("click", () => playRound("Scissors"));

