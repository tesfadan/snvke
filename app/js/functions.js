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
    var highscore = parseInt(window.localStorage.getItem('highscore'));
    return highscore;
}

export const resetHighscore = async () => {
    // const handleClick = () => {
    //     alert("Reset")
    // }
    // document.getElementById('overlay').innerHTML = `<div class="alert">
    // <h4>Reset Highscore to 0? </h4>
    // <button> Confirm </button>
    // <button> Cancel </button>
    // </div>`
    window.localStorage.setItem('highscore', '0');

    return 1
}

export const setLevel = async (level) => {
    window.localStorage.setItem("level", level.toString());
    updateGame({ level: level });

    return 1
}

export const getLevel = () => {
    return parseInt(window.localStorage.getItem("level"));
}

export const speed = (e) => {
    clearInterval(session.move);
    session.move = setInterval(() => Move(), e === 'up' ? session.speed / 1.5 : session.speed * 1.5);
}