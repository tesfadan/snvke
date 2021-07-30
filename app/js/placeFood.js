import { score } from "./score.js";
import { blockPositionX, blockPositionY, random } from "./utils.js";
import { game, gridNumber, position, session, avoidThese } from "./variables.js";

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

export const foodPosition = () => {
    var pos = { x: random(0, gridNumber.x - 1), y: random(0, gridNumber.y - 1) };
    var y = avoidThese.filter(item => item[0] === pos.x && item[1] === pos.y);
    while (y.length > 0) {
        pos = { x: random(0, gridNumber.x - 1), y: random(0, gridNumber.y - 1) };
        y = avoidThese.filter(item => item[0] === pos.x);
    }
    session.foodPosition = pos;
    return pos
}

foodPosition();

export const eatFood = ({ food }) => {
    if (position.x === session.foodPosition.x && position.y === session.foodPosition.y) {
        score(10);
        food.clearRect(0, 0, game.width, game.height);
        foodPosition();
        session.tails.push({ ...session.foodPosition });
    }
}