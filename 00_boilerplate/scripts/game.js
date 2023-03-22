// This is a game object that keeps track of the game's score, 
// current progress, player moves, and available choices.
let game = {
    score: 0, // Initialize the score to zero
    currentGame: [], // Initialize an empty array to store 
    // current game progress
    playerMoves: [], // Initialize an empty array to store 
    // player moves
    turnNumber: 0,
    lastButton: "",
    turnInProgress: false,
    choices: ["button1", "button2", "button3", "button4"],
    // Initialize an array with the available choices
};

/**

Resets the game by setting the score to zero,
and clearing the playerMoves and currentGame arrays.
Calls the showScore function to display the updated score on the page.
@function
@name newGame
*/
function newGame() {
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
    for (let circle of document.getElementsByClassName("circle")) {
        if (circle.getAttribute("data-listener") !== "true") {
            circle.addEventListener("click", (e) => {
                if (game.currentGame.length > 0 && !game.turnInProgress) {
                    let move = e.target.getAttribute("id");
                    game.lastButton = move;
                    lightsOn(move);
                    game.playerMoves.push(move);
                    playerTurn();
                }
            });
            circle.setAttribute("data-listener", "true");
        }
    }
    showScore();
    addTurn();
}

/** 
 * Generates a random move and adds it to the end of the
 * current game array. Clears the player moves array.
 * @function
 * @name addTurn
*/
function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    showTurns();
}

/**
 * Updates the game's turnNumber variable to 0 and then plays the current game sequence
 * by calling the lightsOn() function for each element in the game.currentGame array
 * at an interval of 800 milliseconds. The game.turnNumber variable is incremented
 * for each element in the array, and clearInterval() is called when the end of the array
 * is reached.
 *
 * @function
 * @name showTurns
 * @global
 * 
 * @property {object} game - The game object containing the current game state.
 * @property {number} game.turnNumber - The current turn number.
 * @property {array} game.currentGame - The current game sequence to play.
 * 
 * @returns {undefined}
 *
 */
function showTurns() {
    game.turnInProgress = true;
    game.turnNumber = 0;
    let turns = setInterval(function () {
        lightsOn(game.currentGame[game.turnNumber]);
        game.turnNumber++;
        if (game.turnNumber >= game.currentGame.length) {
            clearInterval(turns);
            game.turnInProgress = false;
        }
    }, 800);
}

/**

Adds a "light" class to the element with the ID matching the circ parameter.
This will highlight the button associated with the current game sequence.
After 400 milliseconds, the "light" class is removed from the element,
turning off the button highlight.
@function
@name lightsOn
@param {string} circ - The ID of the button to be highlighted.
*/
function lightsOn(circ) {
    document.getElementById(circ).classList.add("light");
    setTimeout(function () {
        document.getElementById(circ).classList.remove("light");
    }, 400);
}

/**
 * This function represents the turn of the player in the game. 
 * It compares the player's moves with the current game's moves and 
 * checks if the player has made a correct move or not. 
 * If the move is correct, it increments the player's score, 
 * displays the updated score and adds a new turn. 
 * If the move is incorrect, 
 * it displays an alert with a message "Wrong move!" and starts a new game.
 * 
 * @returns void
 */
function playerTurn() {
    let i = game.playerMoves.length - 1; // Index of the 
    // last move made by the player
    if (game.currentGame[i] === game.playerMoves[i]) {
        // Check if the last move made by the player is 
        // the same as the one made by the game
        if (game.currentGame.length === game.playerMoves.length) {
            // Check if the player has completed the current game
            game.score++; // Increment the player's score
            showScore(); // Display the updated score
            addTurn(); // Add a new turn
        }
    } else { // If the last move made by the player is 
        // not the same as the one made by the game
        alert("Wrong move!"); // Display an alert 
        // with a message "Wrong move!"
        newGame(); // Start a new game
    }
}

/**

Sets the inner text of the HTML element with the id "score"
to the value of the score property of the game object.
@function
@name showScore
*/
function showScore() {
    document.getElementById("score").innerText = game.score;
}

/**
 * Exports the game-related functions as an object so that they can be accessed by other files.
 * 
 * @module simonGame
 * @exports game - The game object containing the current game state.
 * @exports newGame - A function that creates a new game and resets the game state.
 * @exports showScore - A function that displays the player's current score.
 * @exports addTurn - A function that adds a new turn to the game sequence and updates the game state.
 * @exports lightsOn - A function that turns on the corresponding lights and plays the sound for a given color.
 * @exports showTurns - A function that plays the current game sequence.
 * 
 * @type {object}
 * @property {object} game - The game object containing the current game state.
 * @property {function} newGame - A function that creates a new game and resets the game state.
 * @property {function} showScore - A function that displays the player's current score.
 * @property {function} addTurn - A function that adds a new turn to the game sequence and updates the game state.
 * @property {function} lightsOn - A function that turns on the corresponding lights and plays the sound for a given color.
 * @property {function} showTurns - A function that plays the current game sequence.
 */
module.exports = {
    game,
    newGame,
    showScore,
    addTurn,
    lightsOn,
    showTurns,
    playerTurn
};




