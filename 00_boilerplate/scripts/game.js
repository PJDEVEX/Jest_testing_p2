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


// This exports the "game" object so that other files 
// can access it
module.exports = { game };