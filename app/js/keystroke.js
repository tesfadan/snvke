// This will detect keystroke events and send off the appropriate action
// Direction

import { pauseResume } from "./functions.js";
import { Turn } from "./move.js";
import { session } from "./variables.js";

export function keyMove(dir) {
    if (session.playing && !session.paused) {
        Turn(dir);
    }
    else {
    }
}

export function keyPause() {
    if (session.playing) {
        pauseResume();
    }
}