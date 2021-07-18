import { blockPositionX, blockPositionY, random } from "./utils.js";
import { game, gridNumber, position, session } from "./variables.js";

// Draw Food
export const placeFood = ({ canvas }) => {
    const food = canvas.getContext('2d');
    food.fillStyle = game.foodColor;
    food.beginPath();
    food.fillRect(blockPositionX(session.foodPosition.x), blockPositionY(session.foodPosition.y), game.size, game.size);
    food.closePath();
    food.fill();
    requestAnimationFrame(() => placeFood({ canvas }));
    eatFood({ food });
}


export const eatFood = ({ food }) => {
    if (position.x === session.foodPosition.x && position.y === session.foodPosition.y) {
        // score();
        food.clearRect(0, 0, game.width, game.height);
        session.foodPosition = { x: random(0, gridNumber.x - 1), y: random(0, gridNumber.y - 1) };
        session.tails.push({ ...session.foodPosition });
    }
}