import { drawSnake } from "./drawSnake.js";
import { drawGrid } from "./grid.js";
import { Move } from "./move.js";
import { placeFood } from "./placeFood.js";
import { blockPositionX, blockPositionY } from "./utils.js";
import { game, position, session } from "./variables.js";

export const Start = () => {
    var canvas = document.getElementById("canvas");
    canvas.width = 1400;
    canvas.height = 800;

    drawOverlay({ canvas });

    drawGrid({ canvas: canvas });
    placeFood({ canvas });
    setInterval(() => drawSnake({ canvas }), 10);

    session.move = setInterval(() => Move(), session.speed);

}

const drawOverlay = ({ canvas }) => {
    var items = [
        {
            label: 'Time',
            value: '34s',
            id: 'timeKeeper'
        },
        {
            label: 'Score',
            value: 420,
            id: 'scoreKeeper'
        },
        {
            label: null,
            value: 'P/Pause',
            btn: true,
            id: 'pauseBtn'
        }

    ]

    const className = (item, index) => {
        var pos = index === 0 ? 'topLeft' :
            index === 1 ? 'topRight' :
                index === 2 ? 'bottomRight' : 'bottomLeft'

        var btn = item.btn ? 'btn' : ''

        return `overlayItem ${btn} ${pos}`
    }
    items.map((item, index) => {
        return document.getElementById('overlay').innerHTML += `<div id=${item.id} class="${className(item, index)}">${item.label !== null ? `<label>${item.label}</label>` : ''
            }
            <div>${item.value}</div></div > `;
    })
}