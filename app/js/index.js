// sssnake
// Tesfa Demissie
// 2021 
// https://tesfadan.com

import { getHighscore, getLevel } from "./functions.js";
import { drawGrid } from "./grid.js";
import { Intro } from "./intro.js";
import { LoadingScreen } from "./loading.js";
import { game, session, updateGame, updateSession } from "./variables.js";

// LoadingScreen({ loaded: false });
// setTimeout(() => Intro({ status: 'boot' }), 3350);


updateGame({ level: getLevel(), highscore: getHighscore() });

drawGrid();
Intro({ status: 'boot' })
