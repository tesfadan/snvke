import { random, randomDirection } from "./utils.js";

export var canvas = document.getElementById("canvas");
canvas.width = 1400;
canvas.height = 800;


export var position = { x: 0, y: 0, d: "up" };

export const startingPoint = () => {
    var pos = { x: random(0, gridNumber.x - 1), y: random(0, gridNumber.y - 1), d: randomDirection() };
    var y = avoidThese.filter(item => item[0] === pos.x && item[1] === pos.y);
    while (y.length > 0) {
        pos = { x: random(0, gridNumber.x - 1), y: random(0, gridNumber.y - 1), d: randomDirection() };
        y = avoidThese.filter(item => item[0] === pos.x);
    }
    // session.foodPosition = pos;
    // return pos
    position = pos;
    return pos;
}


export const changePosition = (newPosition) => {
    position = newPosition;
}


export var game = {
    title: 'sssnake',
    size: 50,
    foodColor: '#ff1c3a',
    snakeColor: '#12e772',
    snakeColorAlt: '#12e772',
    secondary: '#ff00d4',
    border: '#ff00d430',
    width: 1400,
    height: 800,
    colors: {
        primary: '#ffee00',
        head: '#12e772',
        dying: '#ff0022'
    },
    highscore: 0,
    level: 0
}


export var gridNumber = { x: 28, y: 16 };

export var session = {
    playing: false,
    tails: [],
    speed: 80,
    foodPosition: { x: 4, y: 7 },
    move: null,
    timeInterval: null,
    seconds: 0,
    score: 0,
    gameOver: false,
    paused: false,
    navigationEventListener: null,
    focused: 0,
    options: null,
    navigation: true
};

export const resetSession = () => {
    // countTime();
    session = {
        ...session,
        playing: false,
        tails: [],
        // speed: 80,
        // foodPosition: { x: 4, y: 7 },
        move: null,
        timeInterval: null,
        seconds: 0,
        score: 0,
        gameOver: false
    };
}

export const updateSession = (update) => {
    session = { ...session, ...update };
}

export const updateGame = (update) => {
    game = { ...game, ...update };
}

export const avoidThese = [...session.tails,
[1, 1], [2, 1], [3, 1],
[gridNumber.x - 1, 1],
[gridNumber.x - 2, 1],
[gridNumber.x - 3, 1],
// 
[gridNumber.x - 1, gridNumber.y - 1],
[gridNumber.x - 2, gridNumber.y - 1],
[gridNumber.x - 3, gridNumber.y - 1]
]