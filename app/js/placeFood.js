import { blockPositionX, blockPositionY, random } from "./utils.js";
import { game, gridNumber, position, session } from "./variables.js";



const avoidThis = [...session.tails,
[1, 1], [2, 1], [3, 1],
[gridNumber.x - 1, 1],
[gridNumber.x - 2, 1]
[gridNumber.x - 3, 1]
]

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

const foodPosition = () => {
    var pos = { x: random(0, gridNumber.x - 1), y: random(0, gridNumber.y - 1) };
    var y = avoidThis.filter(item => item[0] === pos.x && item[1] === pos.y);
    while (y.length > 0) {
        pos = { x: random(0, gridNumber.x - 1), y: random(0, gridNumber.y - 1) };
        y = avoidThis.filter(item => item[0] === pos.x);
    }
    return pos
}


export const eatFood = ({ food }) => {
    if (position.x === session.foodPosition.x && position.y === session.foodPosition.y) {
        // score();
        food.clearRect(0, 0, game.width, game.height);
        session.foodPosition = foodPosition();
        session.tails.push({ ...session.foodPosition });
    }
}