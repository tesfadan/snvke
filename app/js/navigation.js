import { session } from "./variables.js";

export var focused = 0;

export const updateFocused = (e) => {
    focused = e;
}

export const Navigation = (options) => {
    var content;
    options.map((option, index) => {
        content += `<span class="navButton btn ${focused === index ? "selected" : ''}" id="${option.id}">${option.label}</span>`
    });

    return content.replace('undefined', '');
}


const update = () => {
    // console.log(focused)
    session.options.map((option, index) => {
        var btn = document.getElementById(option.id);

        btn !== null ? btn.className = focused === index ? 'btn optionItem selected' : 'btn optionItem blurred' : console.log("Can't update that");
    });
}


export const NavMove = (dir) => {
    if (dir === 'up') {
        focused === 0 ? focused = session.options.length - 1 : focused--;
        update();
    }
    else if (dir === 'down') {
        focused === session.options.length - 1 ? focused = 0 : focused++;
        update();
    }
}

export const NavEnter = () => {
    session.options[focused].action();
}