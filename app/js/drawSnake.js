import { blockPositionX, blockPositionY } from "./utils.js";
import { game, position, session } from "./variables.js";

// Draw Snake
export const drawSnake = ({ canvas }) => {
    const head = canvas.getContext('2d');
    head.fillStyle = game.snakeColor;
    head.clearRect(0, 0, canvas.width, canvas.height);
    head.beginPath();
    head.fillRect(blockPositionX(position.x), blockPositionY(position.y), game.size, game.size);
    head.closePath();
    head.fill();

    session.tails.map((block, index) => {
        const tail = canvas.getContext('2d');
        head.fillStyle = game.snakeColor;
        tail.beginPath();
        tail.fillRect(blockPositionX(block[0]), blockPositionY(block[1]), game.size, game.size);
        tail.closePath();
        tail.fill();
    })
}

export const updateTail = () => {
    session.tails.forEach((tail, index) => {
        var i = session.tails.length - index - 1;
        if (i > 0) {
            session.tails[i] = session.tails[i - 1];
        }
        else {
            session.tails[0] = [position.x, position.y];
        }
    });
}