import { drawGrid } from "./grid.js";
import { canvas } from "./variables.js";

const blockPosition = (x) => {
    return x * 1;
}

var interval;
var timeout;

var e = 0;

export const LoadingScreen = async ({ loaded }) => {
    // drawGrid();
    timeout = setTimeout(() => {
        document.getElementById("body").innerHTML += `
        <canvas id="loading" class="loading" height="50"> </canvas>`;
        interval = setInterval(barAnimation, 0.5);
        drawLoadingBar();
    }, 500);
}

var position = {
    x: -50,
    y: 0.5
}

const barAnimation = () => {
    // console.log("Loading Game");
    if (position.x < 300) {
        position.x++;
        e++;
    }
    else {
        return position.x = -50;
    }

    if (e > 700) {
        clearInterval(interval);
        clearTimeout(timeout);
        document.getElementById("loading").remove();
    }
}

const drawLoadingBar = () => {
    var loadingCanvas = document.getElementById("loading");
    const bar = loadingCanvas.getContext('2d');
    bar.fillStyle = '#434f57';
    // bar.clearRect(0, 0, 300, 120);
    bar.beginPath();
    bar.fillRect(blockPosition(position.x), 0, 50, 50);
    bar.closePath();
    bar.fill();
    if (e < 700) {
        requestAnimationFrame(drawLoadingBar);
    }
}



export const LoadGame = async () => {
}
