Colorful Memory Match Game
Overview
The Colorful Memory Match Game is a classic memory card game implemented using HTML, CSS, and JavaScript. The objective of the game is to find and match pairs of cards with the same color. Players have a limited amount of time to match all pairs, and they earn points for each match. The game ends either when all pairs are matched or when time runs out.

Features
Colorful Cards: Each card has a color that is hidden until it is clicked.
Timer: A countdown timer to challenge players.
Score Tracking: Tracks the player's score based on the number of matches.
Win and Lose Alerts: Displays an alert when the player wins or when the time runs out.
Files
index.html: The HTML file that defines the structure of the game.
styles.css: The CSS file that provides styling for the game elements.
scripts.js: The JavaScript file that contains the game logic.
Setup
Clone the Repository

bash
Copy code
git clone <repository-url>
cd <repository-directory>
Open the Project

Open index.html in your web browser to start playing the game.

How to Play
Start the Game: Click the "Start / Restart" button to begin a new game.
Match Cards: Click on two cards to flip them over. If they match, they will stay flipped. If not, they will flip back after a short delay.
Score and Time: Keep track of your score and the remaining time. Your score increases with each successful match.
Win or Lose: The game ends when all pairs are matched or the time runs out. A congratulatory alert will appear if you win, while a "Game Over" alert will appear if time runs out.
Code Explanation
index.html
This file sets up the basic structure of the game, including:

A heading (<h1>) for the game title.
A container (<div id="container">) that holds the game grid and control buttons.
An empty <div id="game-container"> where the game cards are dynamically added.
A status display area (<div id="startdiv">) showing the score, timer, and start/restart button.
styles.css
This file provides styling for the game elements:

The body, header, and container styles for layout and appearance.
Grid layout for the game cards, ensuring they are evenly spaced.
Card styles including their appearance when matched and their default state.
scripts.js
This file contains the game logic:

Card Shuffling: The shuffle function randomizes the order of the cards.
Card Generation: The generateCards function creates and displays the card elements.
Card Click Handling: The handleCardClick function manages card interactions and tracks selected cards.
Matching Logic: The checkMatch function checks if two selected cards match and updates the score.
Game Timer: The startGameTimer function handles the countdown and checks for game end conditions.
End Game Handling: The endGame function displays an alert based on whether the player won or lost.
