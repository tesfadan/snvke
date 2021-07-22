import { drawSnake } from "./drawSnake.js";
import { getHighscore } from "./functions.js";
import { drawGrid } from "./grid.js";
import { Move } from "./move.js";
import { placeFood } from "./placeFood.js";
import { countTime } from "./time.js";
import { game, resetSession, session, startingPoint, updateGame, updateSession } from "./variables.js";

export const Start = () => {
    var canvas = document.getElementById("canvas");
    canvas.width = 1400;
    canvas.height = 800;
    startingPoint();
    resetSession();
    drawOverlay({ canvas });
    placeFood({ canvas });
    updateSession({ speed: game.level === 0 ? 70 : game.level === 1 ? 50 : 40 })

    updateSession({ tails: [] })

    document.getElementById("canvas").style = `opacity:1`;

    updateGame({ highscore: getHighscore() })

    const redraw = () => {
        drawSnake({ canvas });
    }

    session.playing = true;

    setInterval(() => redraw(), 10);
    session.move = setInterval(() => Move(), session.speed);
    session.timeInterval = setInterval(countTime, 1000);

}



export const drawOverlay = () => {
    var items = [
        {
            label: 'Time',
            value: '0s',
            id: 'timeKeeper'
        },
        {
            label: 'Score',
            value: 0,
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
    document.getElementById('overlay').innerHTML = '';
    items.map((item, index) => {
        return document.getElementById('overlay').innerHTML += `<div id=${item.id} class="${className(item, index)}">${item.label !== null ? `<label>${item.label}</label>` : ''
            }
            <div>${item.value}</div></div > `;
    })
}