import { game, gridNumber } from "./variables.js";

export const blockPositionX = (x) => {
    if (x > gridNumber.x - 1) {
        return (0) * game.size
    }
    else {
        return x * game.size
    }
}

export const blockPositionY = (x) => {
    if (x > gridNumber.y - 1) {
        return (0) * game.size
    }
    else {
        return x * game.size
    }
}

export const random = (min, max) => {
    let num = Math.random() * (max - min) + min;
    return Math.floor(num)
}

export const randomDirection = () => {
    var dr = random(0, 3);
    switch (dr) {
        case 0:
            return 'up'
        case 1:
            return 'right'
        case 2:
            return 'down'
        case 3:
            return 'left'
    }
}