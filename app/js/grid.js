import { game } from "./variables.js";

export const drawGrid = () => {
    const canvas = document.getElementById('background');
    const variables = { width: 1400, height: 800, color: game.border, size: 50 }
    const { width, height, color, size } = variables;
    const grid = canvas.getContext('2d');
    grid.beginPath();

    for (var x = 0; x <= width; x += size) {
        grid.moveTo(x, 0);
        grid.lineTo(x, width);
    }
    for (var y = 0; y <= height; y += size) {
        grid.moveTo(0, y);
        grid.lineTo(width, y);
    }
    grid.lineWidth = 1;
    grid.strokeStyle = color;
    grid.stroke();
}