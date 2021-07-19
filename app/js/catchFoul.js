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
    game.snakeColor = "#ff0000";
    var popInterval;
    popInterval = setInterval(() => { session.tails.pop() }, session.speed);

    setTimeout(() => {
        session.tails = [];
        game.snakeColor = "#ff0";
        session.gameOver = false;
        Intro({ status: 'gameOver' });
        clearInterval(popInterval)
    }, (session.tails.length * session.speed) + 500)
}