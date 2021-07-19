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
    foodColor: '#ff1c3a',
    snakeColor: '#12e772',
    snakeColorAlt: '#12e772',
    secondary: '#ff00d4',
    border: '#ff00d430',
    width: 1400,
    height: 800,
    colors: {
        head: '#12e772',
        dying: '#ff0022'
    }
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