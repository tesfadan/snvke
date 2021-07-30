
export const Navigation = (options) => {
    var focused = 0;
    var content;
    options.map((option, index) => {
        content += `<span class="navButton btn ${focused === index ? "selected" : ''}" id="${option.id}">${option.label}</span>`
    });

    const update = () => {
        console.log(focused)
        options.map((option, index) => {
            var btn = document.getElementById(option.id);
            btn.className = focused === index ? 'btn optionItem selected' : 'btn optionItem blurred';
        });
    }

    document.addEventListener("keydown", event => {
        console.log(event.keyCode);
        console.log(options.length)
        switch (event.keyCode) {
            case 38:
                // up 
                focused === 0 ? focused = options.length - 1 : focused--;
                update();
                break;

            case 40:
                // down 
                focused === options.length - 1 ? focused = 0 : focused++;
                update();
                break;

            case 13:
                // enter 
                options[focused].action();
            default:
                break;
        }
    });

    return content.replace('undefined', '');
}