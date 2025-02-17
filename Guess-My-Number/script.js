'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1; // Generate random secret number (1-20)
let score = 20; // Initialize score
let highscore = 0; // Initialize highscore

// Event listener for check button
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value); // Get user input

    // When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = 'No number!'; // Error message
    }
    // When player guesses the correct number
    else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber; // Show secret number
        document.querySelector('.message').textContent = '🎉 Correct Number!'; // Success message
        document.querySelector('body').style.backgroundColor = '#60b347'; // Change background color
        document.querySelector('.number').style.width = '30rem'; // Increase size of number
        document.querySelector('.guess').disabled = true; // Disable input field

        // Update highscore if necessary
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore; // Update highscore display
        }
    }
    // When guess is greater than the secret number
    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too High!'; // Too high message
            score--; // Decrease score
            document.querySelector('.score').textContent = score; // Display updated score
        } else {
            document.querySelector('.message').textContent = 'You lost the game!'; // Game over message
            document.querySelector('.score').textContent = 0; // Score becomes 0
        }
    }
    // When guess is less than the secret number
    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Too Low!'; // Too low message
            score--; // Decrease score
            document.querySelector('.score').textContent = score; // Display updated score
        } else {
            document.querySelector('.message').textContent = 'You lost the game!'; // Game over message
            document.querySelector('.score').textContent = 0; // Score becomes 0
        }
    }
});

// Event listener for again button to reset the game
document.querySelector('.again').addEventListener('click', function() {
    score = 20; // Reset score
    document.querySelector('.message').textContent = 'Start guessing...'; // Reset message
    document.querySelector('.score').textContent = score; // Display reset score
    document.querySelector('.number').textContent = '?'; // Hide the secret number
    document.querySelector('.guess').value = ''; // Clear the input field
    document.querySelector('body').style.backgroundColor = '#222'; // Reset background color
    document.querySelector('.number').style.width = '15rem'; // Reset number size
});
