import { drawSnake } from "./drawSnake.js";
import { drawGrid } from "./grid.js";
import { Move } from "./move.js";
import { placeFood } from "./placeFood.js";
import { blockPositionX, blockPositionY } from "./utils.js";
import { game, position, session } from "./variables.js";

export const Start = () => {
    var canvas = document.getElementById("canvas");
    canvas.width = 1400;
    canvas.height = 800;

    drawOverlay({ canvas });

    drawGrid({ canvas: canvas });
    placeFood({ canvas });
    setInterval(() => drawSnake({ canvas }), 10);

    session.move = setInterval(() => Move(), session.speed);

}

const drawOverlay = ({ canvas }) => {
    // const overlay = canvas.getContext("2d");
    // overlay.fillStyle = game.border;
    // // overlay.clearRect(0, 0, canvas.width, canvas.height);
    // overlay.beginPath();
    // overlay.fillRect(blockPositionX(1), blockPositionY(1), game.size * 4, game.size * 2);
    // overlay.closePath();
    // overlay.fill();

    var items = [
        {},
    ]

    var scoreKeeper = `<div class="overlayItem scoreKeeper topLeft">
            <label>Score</label>
            <div>420</div>
        </div>`

    var timeKeeper = `<div class="overlayItem timeKeeper bottomLeft">
        <label>Time</label>
        <div>34s</div>
    </div>`

    var exitBtn = `<div class="overlayItem timeKeeper topRight btn"><div>E/Exit</div></div>`

    var pause = `<div class="overlayItem pause bottomRight btn"><div>P/Pause</div></div>`

    document.getElementById('overlay').innerHTML += scoreKeeper;
    document.getElementById('overlay').innerHTML += exitBtn;
    document.getElementById('overlay').innerHTML += pause;
}