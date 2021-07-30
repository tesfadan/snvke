const { app, BrowserWindow } = require('electron');

// include the Node.js 'path' module at the top of your file
const path = require('path')

// modify your existing createWindow() function
function createWindow() {
    const win = new BrowserWindow({
        width: 1400,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        },
        frame: false,
        transparent: true
    })

    win.loadFile('./app/index.html')
}
// ...

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
