import { session, updateSession } from "./variables.js";

export const countTime = () => {
    updateSession({ seconds: session.seconds + 1 });
    document.getElementById('timeKeeper').children[1].innerHTML = `${session.seconds.toString()}s`;
}