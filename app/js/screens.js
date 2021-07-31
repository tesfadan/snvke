import { getHighscore, resetHighscore, setLevel } from "./functions.js";
import { Start } from "./game.js";
import { Navigation, updateFocused } from "./navigation.js";
import { updateSession } from "./variables.js";

const options = {
    mainMenu: [
        { label: "New Game", id: "playBtn", action: () => { Start() } },
        { label: "Levels", id: "levelsBtn", action: () => { Levels() } },
        { label: "Highscore", id: "highscoreBtn", action: () => { HighScore() } },
    ],
    gameOver: [
        { label: "Play Again", id: "playAgain", action: () => { Start() } },
        { label: "Main Menu", id: "mainMenu", action: () => { MainMenu(0) } }
    ],
    levels: [
        { label: "Easy", id: "easyBtn", action: () => { setLevel(0).then(() => MainMenu(1)) } },
        { label: "Intermediate", id: "intermediateBtn", action: () => { setLevel(1).then(() => MainMenu(1)) } },
        { label: "Extreme", id: "extremeBtn", action: () => { setLevel(2).then(() => MainMenu(1)) } }
    ],
    highscore: [
        { label: "Back", id: "Back", action: () => { MainMenu(2) } },
        { label: "Reset", id: "resetHS", action: () => resetHighscore() }
    ]
}

const ui = document.getElementById("ui");


const Credit = () => {
    return `
        <div class="credit">
            <a href="https://twitter.com/tesfadan" traget="_blank">tesfadan.com</a>
        </div>
    `
}

export const MainMenu = (f) => {
    // param f is focused 
    f !== undefined ? updateFocused(f) : null;

    updateSession({ options: options.mainMenu });
    ui.innerHTML = `
        <div id="mainMenuScreen" class="screen mainMenuScreen">
        <h1 class="gameTitle heading">snvke</h1>
        ${Navigation(options.mainMenu)}
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
            <span class="highScoreValue" id="hsValue">
            ${getHighscore()}
            </span>

            <span class="bgValue highScoreValue" id="hsValueBg">
            ${getHighscore()}
            </span>
        </div>
        ${Navigation(options.highscore)}
        </div>
    `;
}