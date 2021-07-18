import { updateTail } from "./drawSnake.js";
import { position, changePosition, gridNumber, session } from "./variables.js";
import { catchFoul } from "./catchFoul.js";

export const Move = () => {
    var newPosition;
    updateTail();
    switch (position.d) {
        case "right":
            newPosition = { ...position, d: position.d, x: position.x > gridNumber.x - 2 ? 0 : position.x + 1 };
            break;

        case "left":
            newPosition = { ...position, d: position.d, x: position.x == 0 ? gridNumber.x - 1 : position.x - 1 };
            break;

        case "up":
            newPosition = { ...position, d: position.d, y: position.y === 0 ? gridNumber.y - 1 : position.y - 1 };
            break;

        case "down":
            newPosition = { ...position, d: position.d, y: position.y > gridNumber.y - 2 ? 0 : position.y + 1 };
            break;
    }
    changePosition(newPosition);
    return catchFoul();
}

// KEYSTROKE DETECTOR 
document.addEventListener('keydown', event => {
    switch (event.keyCode) {
        case 37:
            // Left Arrow 
            Turn("left")
            break;

        case 39:
            // Right Arrow 
            Turn("right")
            break;

        case 38:
            // Up Arrow 
            Turn("up")
            break;

        case 40:
            // Down Arrow 
            Turn("down")
            break;

        default:
            break;
    }
});


const Turn = (dir) => {
    // THIS THIS THIS 
    // CALCULATE IF THE MOVE CAUSES FOUL FIRST
    // if the foul to be caused is with the first 4 tails then stop it 
    // THIS THIS THIS 
    var temp_position = position;
    switch (dir) {
        case "right":
            temp_position = { ...temp_position, d: dir, x: temp_position.x > gridNumber.x - 2 ? 0 : temp_position.x + 1 };
            break;

        case "left":
            temp_position = { ...temp_position, d: dir, x: temp_position.x == 0 ? gridNumber.x - 1 : temp_position.x - 1 };
            break;

        case "up":
            temp_position = { ...temp_position, d: dir, y: temp_position.y === 0 ? gridNumber.y - 1 : temp_position.y - 1 };
            break;

        case "down":
            temp_position = { ...temp_position, d: dir, y: temp_position.y > gridNumber.y - 2 ? 0 : temp_position.y + 1 };
            break;
    }

    var collision = session.tails.filter(tail => temp_position.x === tail[0] && temp_position.y === tail[1]);
    return collision.length > 0 ? console.log("STOPPED") : position.d = dir;
}