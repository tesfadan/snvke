import { resetHighscore, setLevel } from "./functions.js";
import { Start } from "./game.js";
import { Navigation } from "./navigation.js";

const options = {
    mainMenu: [
        { label: "New Game", id: "playBtn", action: () => Start() },
        { label: "Levels", id: "levelsBtn", action: () => Levels() },
        { label: "Highscore", id: "highscoreBtn", action: () => HighScore() },
    ],
    gameOver: [
        { label: "Play Again", id: "playAgain", action: () => Start() },
        { label: "Main Menu", id: "mainMenu", action: () => MainMenu() }
    ],
    levels: [
        { label: "Easy", id: "easyBtn", action: () => setLevel(0).then(() => MainMenu()) },
        { label: "Intermediate", id: "intermediateBtn", action: () => setLevel(1).then(() => MainMenu()) },
        { label: "Extreme", id: "extremeBtn", action: () => setLevel(2).then(() => MainMenu()) }
    ],
    highscore: [
        { label: "Back", id: "Back", action: () => MainMenu() },
        { label: "Reset", id: "resetHS", action: () => resetHighscore().then(() => MainMenu()) }
    ]
}

const ui = document.getElementById("ui");
export const MainMenu = () => {
    ui.innerHTML = `
        <div id="mainMenuScreen" class="screen mainMenuScreen">
        <h1 class="gameTitle heading">snvke</h1>
        ${Navigation(options.mainMenu)}
    </div>
    `;
}

export const GameOverScreen = () => {
    ui.innerHTML = `
        <div id="gameOverScreen" class="screen gameOverScreen">
        <h1 class="gameOverText heading">Game Over</h1>
        ${Navigation(options.gameOver)}
        </div>
    `;
}

export const Levels = () => {
    ui.innerHTML = `
        <div id="levelsScreen" class="screen levelsScreen">
        <h1 class="level heading">Level</h1>
        ${Navigation(options.levels)}
        </div>
    `;
}

export const HighScore = () => {
    ui.innerHTML = `
        <div id="highscoreScreen" class="screen highscoreScreen">
        <h1 class="highscoreText heading">Highscore</h1>
        ${Navigation(options.highscore)}
        </div>
    `;
}