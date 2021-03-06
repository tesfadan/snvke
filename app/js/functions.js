import { Move } from "./move.js";
import { countTime } from "./time.js";
import { game, session, updateGame } from "./variables.js"

export const pauseResume = () => {
    // Pauses and resumes game play 
    if (!session.paused) {
        clearInterval(session.move);
        clearInterval(session.timeInterval);
        document.getElementById("pauseBtn").children[0].innerHTML = 'P/Resume';
    }
    else {
        session.move = setInterval(() => Move(), session.speed);
        session.timeInterval = setInterval(countTime, 1000);
        document.getElementById("pauseBtn").children[0].innerHTML = 'P/Pause';
    }
    session.paused = !session.paused;
}

export const setHighscore = ({ score }) => {
    window.localStorage.setItem('highscore', score.toString());
    game.highscore = score;
}

export const getHighscore = () => {
    var highscore = window.localStorage.getItem('highscore');
    var intHighscore = parseInt(highscore);

    if (highscore === null || highscore === undefined || intHighscore === NaN) {
        return 0
    }
    else {
        return intHighscore
    }
}

export const resetHighscore = async () => {
    let reset = confirm("Confirm that you would like to reset the current highscore.");

    document.getElementById('hsValue').innerText = '0';
    document.getElementById('hsValueBg').innerText = '0';

    reset ? window.localStorage.setItem('highscore', '0') : null;
    return 1;
}

export const setLevel = async (level) => {
    window.localStorage.setItem("level", level.toString());
    updateGame({ level: level });
    return 1
}

export const getLevel = () => {
    var level = window.localStorage.getItem("level");
    var intLevel = parseInt(level);

    switch (intLevel) {
        case 0:
            break;
        case 1:
            break;
        case 2:
            break;

        default:
            intLevel = 0;
            break;
    }

    return intLevel
}

export const speed = (e) => {
    clearInterval(session.move);
    session.move = setInterval(() => Move(), e === 'up' ? session.speed / 1.5 : session.speed * 1.5);
}