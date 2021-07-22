import { getHighscore, setHighscore } from "./functions.js";
import { Intro } from "./intro.js";
import { game, position, session, updateSession } from "./variables.js";

export const catchFoul = () => {
    var foul_pos = session.tails.filter(tail => tail[0] === position.x && tail[1] === position.y);
    if (foul_pos.length > 0) {
        // get_audio_option().then(
        //     res => res ? score_sound.play() : console.log("Audio Off")
        // )
        // game.snake_color = "#ff0000";
        gameOver();

        // updateSession({ tails: [] })
        // session = defaults.session;
        // return document.getElementById("points").innerText = "00";
    }
}


export const gameOver = () => {
    session.playing = false;
    session.gameOver = true;
    clearInterval(session.move);
    clearInterval(session.timeInterval);
    var snakeMainColor = game.snakeColor;
    game.snakeColor = game.colors.dying;
    var popInterval;
    popInterval = setInterval(() => { session.tails.pop() }, session.speed / 2);


    if (session.score > getHighscore()) {
        console.log("New Highscore")
        setHighscore({ score: session.score });
    }


    setTimeout(() => {
        document.getElementById("canvas").style = `opacity: 0.3;     filter: grayscale(1);`;
        game.snakeColor = snakeMainColor;
        session.gameOver = false;
        session.paused = false;
        Intro({ status: 'gameOver' });
        clearInterval(popInterval);
        removeOverlay();
    }, (session.tails.length * session.speed / 2) + 250)
}

const removeOverlay = () => {
    document.getElementById('overlay').remove();
}
