// This is a game object that keeps track of the game's score, 
// current progress, player moves, and available choices.
let game = {
    score: 0, // Initialize the score to zero
    currentGame: [], // Initialize an empty array to store 
    // current game progress
    playerMoves: [], // Initialize an empty array to store 
    // player moves
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
    showScore();
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

// This exports the "game", "newGame", & showScore 
// object so that other files 
// can access it
module.exports = { game, newGame, showScore };


