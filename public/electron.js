const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({width: 820, height: 700});
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
    if (isDev) {
        // Open the DevTools.
        /*  BrowserWindow.addDevToolsExtension('/home/klonek/.config/BraveSoftware/Brave-Browser/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.0.2_0/');
          BrowserWindow.addDevToolsExtension('/home/klonek/.config/BraveSoftware/Brave-Browser/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.17.0_0/');*/
        mainWindow.webContents.openDevTools({mode: "bottom"});
    }
    mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
