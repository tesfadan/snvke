import { drawSnake } from "./drawSnake.js";
import { getHighscore } from "./functions.js";
import { drawGrid } from "./grid.js";
import { Move } from "./move.js";
import { placeFood } from "./placeFood.js";
import { countTime } from "./time.js";
import { game, resetSession, session, startingPoint, updateGame, updateSession } from "./variables.js";

export const Start = () => {
    clearInterval(session.move);
    clearInterval(session.timeInterval);

    // document.removeEventListener("keydown", document)

    console.log(session.navigationEventListener)

    var canvas = document.getElementById("canvas");
    canvas.width = 1400;
    canvas.height = 800;
    startingPoint();
    resetSession();
    document.getElementById('ui').innerHTML = '';
    drawOverlay(ovelayItems.gamePlay);
    placeFood({ canvas });
    updateSession({ tails: [], navigation: false, speed: game.level === 0 ? 90 : game.level === 1 ? 70 : 40 });

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


export const ovelayItems = {
    gamePlay: [
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
}


export const drawOverlay = (items) => {
    const className = (item, index) => {
        var pos = index === 0 ? 'topLeft' :
            index === 1 ? 'topRight' :
                index === 2 ? 'bottomRight' : 'bottomLeft'

        var btn = item.btn ? 'btn' : ''

        return `overlayItem ${btn} ${pos}`
    }
    // document.getElementById('ui').innerHTML = '';
    items.map((item, index) => {
        return document.getElementById('ui').innerHTML += `<div id=${item.id} class="${className(item, index)}">${item.label !== null ? `<label>${item.label}</label>` : ''
            }
            <div>${item.value}</div></div > `;
    })
}