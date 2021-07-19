import { Start } from "./game.js";
import { drawGrid } from "./grid.js";
import { session, updateSession, canvas } from "./variables.js";

const bootOptions = [
    { label: "New Game", id: "newGameBtn", action: () => changeHandler("newGame") },
    { label: "Levels", id: "levelsBtn", action: () => changeHandler('levelsBtn') },
    { label: "Highscore", id: "highScoreBtn", action: () => changeHandler("highscoreBtn") }
]

const levelOptions = [
    { label: "Easy", id: "easyMode", action: () => changeHandler("easyMode") },
    { label: "Medium", id: "mediumMode", action: () => changeHandler("mediumMode") },
    { label: "Extreme", id: "extremeMode", action: () => changeHandler("extremeMode") }
]

const highscoreOptions = [
    { label: "Back", id: "Back", action: () => changeHandler("back") },
    { label: "Reset", id: "resetHS", action: () => changeHandler("resetHS") }
]

var focus = 0;
var options = bootOptions;
var timeout;

// const render = (opt) => { return opt.map(option => `<span class=${0 === focus ? "btn selected" : "btn"} id=${option.id}>${option.label}</span>`) }

const render = (opt) => {
    const className = () => {
        return 0 === focus ? 'btn selected' : 'btn'
    }
    var content;

    opt.map(element => {
        content += (`<div class=${className()} id=${element.id}>${element.label}</div>`);
    })

    return content.replace('undefined', '');
}


const renderOptions = (options) => {
    console.log(focus);
    document.getElementById('options').innerHTML = render(options);
    update();
}
var lastOptions = [];

const home = () => {
    changeHeading('Game Title');
    options = bootOptions;
    focus = 0;
    renderOptions(options);
}

const changeHandler = (e) => {
    switch (e) {
        case 'levelsBtn':
            console.log("Change to Levels");
            options = levelOptions;
            focus = 0;
            renderOptions(options);
            changeHeading('Difficulty');
            break;
        case 'easyMode':
            console.log("Change Level to easy");
            updateSession({ speed: 80 });
            options = bootOptions;
            focus = 1;
            renderOptions(options);
            home();
            break;
        case 'mediumMode':
            console.log("Change Level to Medium");
            updateSession({ speed: 60 });
            options = bootOptions;
            focus = 1;
            home();
            break;
        case 'extremeMode':
            console.log("Change Level to Exrtrem");
            updateSession({ speed: 40 });
            options = bootOptions;
            focus = 1;
            home();
            break;
        case 'highscoreBtn':
            lastOptions = options;
            focus = 0;
            console.log("Highscore");
            options = highscoreOptions;
            renderOptions(options);
            changeHeading('Highscore');
            break;
        case 'back':
            focus = 2;
            options = lastOptions;
            changeHeading('Game Title');
            renderOptions(lastOptions);
            break;
        case 'resetHS':
            focus = options.length - 1;
            options = lastOptions;
            home();
            break;
        case 'newGame':
            document.getElementById('intro').remove();
            updateSession({ playing: true })
            Start();
            break;
        default:
            break;
    }

    // document.getElementById("audio").innerHTML += '<audio src="/audio/sssnake_2bleep.mp3" id="2bleep" autoPlay></audio>';
    // var bleep = document.getElementById(`2bleep`);
    // timeout = setTimeout(() => bleep.remove(), 300);
}

const changeHeading = (heading) => {
    document.getElementById("heading").innerHTML = `<h1>${heading}</h1>`;
}

export const Intro = ({ status }) => {

    const initialRender = () => {
        return document.getElementById('body').innerHTML += `<div class="intro" id="intro">
        <div id="heading">
        </div>
    <div class="options" id="options"></div></div>` }
    initialRender();

    if (status === 'boot') {
        document.getElementById('heading').innerHTML += `<h1> Game Title </h1>`
    }
    else if (status === 'gameOver') {
        focus = 0;
        document.getElementById('heading').innerHTML += `<h1> Game Over </h1>`
    }

    renderOptions(options);
    options.forEach((option) => {
        var btn = document.getElementById(option.id);
        btn.addEventListener('click', () => {
            document.getElementById("audio").innerHTML += '<audio src="/audio/sssnake_2bleep.mp3" id="2bleep" autoPlay></audio>';
            var bleep = document.getElementById(`2bleep`);
            timeout = setTimeout(() => bleep.remove(), 300);
            option.action;
        });
    })

    clearTimeout(timeout)
    update();


    document.getElementById('intro').remove();
    updateSession({ playing: true })
    Start();
}

const update = () => {
    options.map((option, index) => {
        var btn = document.getElementById(option.id);
        btn.className = focus === index ? 'btn selected' : 'btn blurred';
    });
    // document.getElementById("audio").innerHTML += '<audio src="/audio/sssnake_bleep.mp3" id="bleep" autoPlay></audio>';
    // var bleep = document.getElementById(`bleep`);
    // timeout = setTimeout(() => bleep.remove(), 120);
}

document.addEventListener('keydown', event => {
    // if (!session.playing) {
    switch (event.keyCode) {
        case 13:
            options[focus].action();
            break;
        case 38:
            // Up Arrow 
            if (focus === 0) { focus = options.length - 1 }
            else { focus-- }
            update();
            break;

        case 40:
            // Down Arrow 
            if (focus === options.length - 1) { focus = 0 }
            else { focus++ }
            update();
            break;

        default:
            break;
    }
    // }
});