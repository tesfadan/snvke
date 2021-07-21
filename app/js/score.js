import { session, updateSession } from "./variables.js"


export const score = (val) => {
    updateSession({ score: session.score + val });
    document.getElementById('scoreKeeper').children[1].innerHTML = session.score.toString();
}