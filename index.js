const { app, BrowserWindow } = require('electron');

function startApp() {
    const win = new BrowserWindow({
        width: 800,
        height: 500,
        resizable: true,
        backgroundColor: "#222",
        webPreferences: {
            devTools: true,
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    });
    const devtools = new BrowserWindow()

    win.loadFile("index.html");
    win.webContents.setDevToolsWebContents(devtools.webContents)
    win.webContents.openDevTools({ mode: 'detach' })
}

(async function chooch() {
    await app.whenReady();
    startApp();
})();