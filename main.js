const { app, BrowserWindow, Menu } = require('electron');

// include the Node.js 'path' module at the top of your file
const path = require('path');

// modify your existing createWindow() function
function createWindow() {
    const win = new BrowserWindow({
        name: 'snvke',
        width: 1400,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        },
        frame: false,
        transparent: true,
        titleBarStyle: 'hiddenInset',
        resizable: false,
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

// const { Menu } = require('electron');

const isMac = process.platform === 'darwin'

const template = [
    // { role: 'appMenu' }
    ...(isMac ? [{
        label: app.name,
        submenu: [
            { role: 'about' },
            { type: 'separator' },
            { role: 'services' },
            { type: 'separator' },
            { role: 'hide' },
            { role: 'hideothers' },
            { role: 'unhide' },
            { type: 'separator' },
            { role: 'quit' }
        ]
    }] : []),
    // { role: 'fileMenu' }
    // {
    //     label: 'File',
    //     submenu: [
    //         isMac ? { role: 'close' } : { role: 'quit' }
    //     ]
    // },
    // { role: 'editMenu' }
    // { role: 'viewMenu' }
    {
        label: 'Game Play',
        submenu: [
            {
                label: 'Play/Pause',
                click: async () => {
                }
            }
        ]
    },
    {
        label: 'View',
        submenu: [
            { role: 'reload' },
            { role: 'forceReload' },
            { type: 'separator' },
            { role: 'resetZoom' },
            { role: 'zoomIn' },
            { role: 'zoomOut' },
            { type: 'separator' },
            { role: 'togglefullscreen' }
        ]
    },
    // { role: 'windowMenu' }
    {
        role: 'help',
        submenu: [
            {
                label: 'How to Play snvke',
                click: async () => {
                    const { shell } = require('electron')
                    await shell.openExternal('https://addismind.com/snvke')
                }
            }
        ]
    }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

// console.log(Menu.getApplicationMenu())