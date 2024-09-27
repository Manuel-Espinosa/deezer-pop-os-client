import { app, BrowserWindow } from 'electron';
import * as path from 'path';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
     // preload: path.join(__dirname, 'preload.js'),  // Optional for using Electron APIs in renderer
      nodeIntegration: true,
    },
  });

  win.loadURL('http://localhost:3000');
  //win.webContents.openDevTools();  // Optional: Open DevTools by default
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
