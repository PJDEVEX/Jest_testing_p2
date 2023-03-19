// imports the "game" object from 
// a file located in the parent directory's "game.js" 
const { game } = require("../game");

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
    // test to ensure that the 'choices' array 
    // in the game object contains 
    // correct IDs of the buttons
    test("choices contains correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});