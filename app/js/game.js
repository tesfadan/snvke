import { drawSnake } from "./drawSnake.js";
import { drawGrid } from "./grid.js";
import { Move } from "./move.js";
import { placeFood } from "./placeFood.js";
import { position, session } from "./variables.js";

export const Start = () => {
    var canvas = document.getElementById("canvas");
    // canvas.width = 1400;
    // canvas.height = 800;


    drawGrid({ canvas: canvas });

    placeFood({ canvas });

    setInterval(() => drawSnake({ canvas }), 10);

    session.move = setInterval(() => Move(), session.speed);
}