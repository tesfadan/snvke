export var canvas = document.getElementById("canvas");
canvas.width = 1400;
canvas.height = 800;

export var position = {
    x: 2,
    y: 3,
    d: 'up'
}

export const changePosition = (newPosition) => {
    position = newPosition;
}

export var game = {
    size: 50,
    foodColor: '#ff0000',
    snakeColor: '#ff0',
    width: 1400,
    height: 800
}

export var gridNumber = { x: 28, y: 16 };


export var session = {
    playing: false,
    tails: [],
    speed: 80,
    foodPosition: { x: 4, y: 7 },
    move: null,
    gameOver: false
}

export const updateSession = (update) => {
    session = { ...session, ...update };
}