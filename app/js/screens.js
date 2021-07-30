import { getHighscore, resetHighscore, setLevel } from "./functions.js";
import { Start } from "./game.js";
import { focused, Navigation, updateFocused } from "./navigation.js";
import { session, updateSession } from "./variables.js";

const options = {
    mainMenu: [
        { label: "New Game", id: "playBtn", action: () => { Start() } },
        { label: "Levels", id: "levelsBtn", action: () => { Levels() } },
        { label: "Highscore", id: "highscoreBtn", action: () => { HighScore() } },
    ],
    gameOver: [
        { label: "Play Again", id: "playAgain", action: () => { Start() } },
        { label: "Main Menu", id: "mainMenu", action: () => { MainMenu() } }
    ],
    levels: [
        { label: "Easy", id: "easyBtn", action: () => { setLevel(0).then(() => MainMenu()) } },
        { label: "Intermediate", id: "intermediateBtn", action: () => { setLevel(1).then(() => MainMenu()) } },
        { label: "Extreme", id: "extremeBtn", action: () => { setLevel(2).then(() => MainMenu()) } }
    ],
    highscore: [
        { label: "Back", id: "Back", action: () => { MainMenu() } },
        { label: "Reset", id: "resetHS", action: () => resetHighscore() }
    ]
}

const ui = document.getElementById("ui");


const Credit = () => {

    return `
        <div class="credit">
            <a href="https://twitter.com/tesfadan">tesfadan</a>
        </div>
    `
}

export const MainMenu = () => {
    updateSession({ options: options.mainMenu });
    ui.innerHTML = `
        <div id="mainMenuScreen" class="screen mainMenuScreen">
        <h1 class="gameTitle heading">snvke</h1>
        ${Navigation(options.mainMenu)}
        ${Credit()}
    </div>
    `;
}

export const GameOverScreen = () => {
    updateSession({ options: options.gameOver });

    ui.innerHTML += `
        <div id="gameOverScreen" class="screen gameOverScreen">
        <h1 class="gameOverText heading">Game Over</h1>
        ${Navigation(options.gameOver)}
        </div>
    `;
}

export const Levels = () => {
    updateFocused(0);
    updateSession({ options: options.levels });

    ui.innerHTML = `
        <div id="levelsScreen" class="screen levelsScreen">
        <h1 class="level heading">Level</h1>
        ${Navigation(options.levels)}
        </div>
    `;
}

export const HighScore = () => {
    updateSession({ options: options.highscore });
    updateFocused(0);
    ui.innerHTML = `
        <div id="highscoreScreen" class="screen highscoreScreen">
        <h1 class="highscoreText heading">Highscore</h1>
        <div class="highScoreBox">
            <span class="highScoreValue">
            ${getHighscore()}
            </span>

            <span class="bgValue highScoreValue">
            ${getHighscore()}
            </span>
        </div>
        ${Navigation(options.highscore)}
        </div>
    `;
}