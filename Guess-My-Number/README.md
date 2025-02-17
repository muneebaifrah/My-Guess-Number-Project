## Guess My Number Game

A simple number guessing game where the player tries to guess a randomly generated number between 1 and 20. The game keeps track of the player's score and allows them to try again if they wish.

## Features

Secret Number Generation: The game randomly generates a number between 1 and 20 for the player to guess.
Guess Feedback: Players receive feedback after each guess, including:
"Too High!" if the guess is greater than the secret number.
"Too Low!" if the guess is smaller than the secret number.
"🎉 Correct Number!" when the guess is correct.

## Score System:

The player starts with a score of 20, and it decreases by 1 for each incorrect guess. If the score reaches 0, the player loses.

## Highscore Tracking:

The game tracks the highest score reached during a session and displays it.

## Reset Option:

The player can restart the game with the "Again!" button, resetting the secret number, score, and messages.
How to Play
The game generates a secret number between 1 and 20.
Enter a number in the input field and click "Check!" to guess.
Based on your guess, you will receive feedback:
"Too High!" if your guess is higher than the secret number.
"Too Low!" if your guess is lower than the secret number.
"🎉 Correct Number!" if your guess is correct.
Each incorrect guess reduces your score by 1.
If you guess correctly, your score is compared to the previous highscore and the highscore is updated if your score is higher.
If you lose the game (score reaches 0), the message will show "You lost the game!"
Click "Again!" to reset the game.


## Technologies Used

HTML: The structure of the game interface.
CSS: Styling for the game, including layout, colors, and fonts.
JavaScript: The game logic, including number generation, guess checking, score tracking, and resetting.

## Getting Started

To play the game locally:

![Uploading image.png…]()


## Clone the Repository:

bash
Copy code
git clone https://github.com/yourusername/guess-my-number.git
Open in VS Code: Open the project folder in Visual Studio Code or any code editor of your choice.

Open index.html: Open the index.html file in a browser to play the game.

## File Structure

bash
Copy code
/guess-my-number
├── index.html         # Main HTML file for game interface
├── style.css          # Styles for game layout and elements
└── script.js          # JavaScript logic for game functionality

## License

This project is licensed under the MIT License - see the LICENSE file for details.
