import { updateTail } from "./drawSnake.js";
import { position, changePosition, gridNumber, session, game } from "./variables.js";
import { catchFoul, gameOver } from "./catchFoul.js";
import { score } from "./score.js";
import { pauseResume, speed } from "./functions.js";
import { enterKey, keyMove, keyPause } from "./keystroke.js";
import { Start } from "./game.js"
import { MainMenu } from "./screens.js";

export const Move = () => {
    var newPosition;
    updateTail();

    const moveScore = () => {
        if (position.d === 'left' || position.d === 'right') {
            if (session.tails.length >= gridNumber.x) {
                score(1)
            }
        }
        else {
            if (session.tails.length >= gridNumber.y) {
                score(1)
            }
        }
    }

    moveScore();

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
    // console.log(event.keyCode);
    switch (event.keyCode) {
        case 37:
            // Left Arrow 
            keyMove("left")
            break;

        case 65:
            // a
            keyMove("left")
            break;

        case 39:
            // Right Arrow 
            keyMove("right")
            break;

        case 68:
            // d  
            keyMove("right")
            break;

        case 38:
            // Up Arrow 
            keyMove("up")
            break;

        case 87:
            // w  
            keyMove("up")
            break;

        case 40:
            // Down Arrow 
            keyMove("down")
            break;

        case 83:
            // s  
            keyMove("down")
            break;

        case 80:
            // p  
            keyPause()
            break;

        case 79:
            gameOver()
            break

        case 220:
            Start();
            break

        case 73:
            MainMenu();
            break;
        case 16:
            // speed('up');
            break;
        case 13:
            enterKey()
            break;
        default:
            break;
    }
});

document.addEventListener('keyup', event => {
    switch (event.keyCode) {
        case 16:
            // speed('down')
            break;

        default:
            break;
    }
})


export const Turn = (dir) => {
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