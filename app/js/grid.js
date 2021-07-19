
export const drawGrid = ({ canvas }) => {
    const variables = { width: 1400, height: 800, color: '#434f5750', size: 50 }
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
    requestAnimationFrame(() => drawGrid({ canvas }));
}