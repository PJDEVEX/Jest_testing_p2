/**
 * Imports the game-related objects and functions from the parent directory's "game.js" file.
 * 
 * @type {object}
 * @property {object} game - The game object that holds game data.
 * @property {function} newGame - The function that resets the game and starts a new one.
 * @property {function} showScore - The function that displays the game score on the webpage.
 * @property {function} addTurn - The function that adds a new turn to the game.
 * @property {function} lightsOn - The function that lights up the game buttons.
 * @property {function} showTurn - The function that plays the current game sequence.
 */
const { game, newGame, showScore, addTurn, lightsOn, showTurn } = require("../game");



/**
 * @jest-environment jsdom
 */

/**
 * Set up the test environment by resetting the HTML body before each test.
 */
beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("00_boilerplate/index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

/**
 * This function tests whether the 'game' object contains 
 * the correct keys
 */
describe("Game object contains correct keys", () => {
    /**
     * tests whether the 'game' object contains 
     * the 'score' key.
     */
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    /**
     * tests whether the 'game' object contains 
     * the 'currentGame' key.
     */
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    /**
     * tests whether the 'game' object contains 
     * the 'playerMoves' key.
     */
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    /**
    * tests whether the 'game' object contains 
    * the 'playerMoves' key.
    */
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    /** test to ensure that the 'choices' array 
    * in the game object contains 
    * correct IDs of the buttons
    */
    test("choices contains correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});

/**
* Describes a test suite for the newGame function.
* The test checks if the game score is set to
* zero after calling the newGame function.
*/


describe("newGame works correctly", () => {
    /**
    * Before the test, sets the game score to 42,
    * playerMoves array to contain some sample moves,
    * currentGame array to contain some sample moves,
    * set the score to 42 before newgame
    * and calls the newGame function to reset the game.
    */
    beforeAll(() => {
        game.score = 42;
        game.playerMoves = ["button1", "button2"];
        game.currentGame = ["button1", "button2"];
        document.getElementById("score").innerHTML = "42";
        newGame();
    });

    /**
     * The test checks if the game score is set to 
     * zero after calling the newGame function.
     */
    test("should set the game score to zero", () => {
        expect(game.score).toEqual(0);
    });
    /**
     * The test checks if the current game is set to 
     * 1 after calling the newGame function.
     */
    test("should be one move in the computer's game array", () => {
        expect(game.currentGame.length).toBe(1);
    });
    /**
 * The test checks if the player move is set to 
 * empty after calling the newGame function.
 */
    test("should clear the player move array", () => {
        expect(game.playerMoves.length).toBe(0);
    });

    /**
    
    This is a Jest test case that checks if the element with id "score" is displaying 0.
    @function
    @name test
    @param {string} description - A description of what the test is checking.
    @param {function} testFunction - A function that contains the test logic.
    @test {document.getElementById}
    @test {expect}
    */
    test("should display 0 for the element with id of score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
});

/**

Describes a test suite for the gameplay of the game.

Before each test in the suite, it sets the game score to zero, clears

the currentGame and playerMoves arrays, and adds a turn to the game.

After each test in the suite, it sets the game score to zero, and clears

the currentGame and playerMoves arrays.
*/
describe("gameplay works correctly", () => {
    beforeEach(() => {
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = [];
        addTurn();
    });

    afterEach(() => {
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = [];
    });

    /**
     * Test to check if a new turn is added to the 
     * game when addTurn function is called.
     * It adds a turn by pushing a random choice 
     * to the currentGame array.
     * @function
     * @name addTurn
    */
    test("addTurn adds a new turn to the game", () => {
        addTurn();
        expect(game.currentGame.length).toBe(2);
    });
    /**
    
    Test whether the lightsOn function adds the "light" class to the button corresponding
    to the first item in the currentGame array.
    @function
    @name shouldAddCorrectClassToLightUpTheButtons
    */
    test("should add correct class to light up the buttons", () => {
        let button = document.getElementById(game.currentGame[0]);
        lightsOn(game.currentGame[0]);
        expect(button.classList).toContain("light");
    });

    test("showTurn should update game.turnNumber", () => {
        // Set the initial value of game.turnNumber to 42
        game.turnNumber = 42;
      
        // Call the showTurn function
        showTurn();
      
        // Expect the value of game.turnNumber to be 0
        expect(game.turnNumber).toBe(0);
      });
});
