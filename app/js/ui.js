import { getHighscore } from "./functions.js";

export const GameTitle = (size) => {
    return `
    <div class="gameTitle ${size}" id="gameTitle">
        <div>Purple Snake</div>
    </div>
    `
}


export const HighScore = () => {
    return `
    <div class="highscore" id="highscore">
        <label>Highscore </label>
        <div>${getHighscore()}</div>
    </div>
    `
}

