// imports the "game", "newGame" & showScore  object from 
// a file located in the parent directory's "game.js" 
const { game, newGame, showScore } = require("../game");

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
     * The test checks if the player move is set to 
     * empty after calling the newGame function.
     */
    test("should clear the playerMove array", () => {
        expect(game.playerMoves.length).toBe(0);
    });
    /**
 * The test checks if the player move is set to 
 * empty after calling the newGame function.
 */
    test("should clear the Currentgame array", () => {
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