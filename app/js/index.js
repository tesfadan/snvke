// sssnake
// Tesfa Demissie
// 2021 
// https://tesfadan.com

import { getHighscore, getLevel } from "./functions.js";
import { drawGrid } from "./grid.js";
import { LoadingScreen } from "./loading.js";
import { MainMenu } from "./screens.js";
import { updateGame } from "./variables.js";


updateGame({ level: getLevel(), highscore: getHighscore() });

drawGrid();
MainMenu();

// LoadingScreen({ loaded: false });
// setTimeout(() => MainMenu(), 3350);