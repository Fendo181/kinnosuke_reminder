'use script';

//モジュールを読み込む
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow; // Blowserを読み込む
const Menu = electron.Menu; //メニューモジュールを作成する。
const dialog = electron.dialog; //ダイアログを読み込む。
const ipcMain = electron.ipcMain; //ipcモジュールを読むこむ。ipc:inter-Process Communication

let mainWindow;

let menuTemplate = [{
    label: 'kinnosuke_reminder',
    submenu: [
        { label: 'About', accelerator: 'CmdOrCtrl+Shift+A', click: function(){
            showAboutDaialog();
        } },
        { type: 'separator'},
        { label: 'Quit', accelerator: 'CmdOrCtrl+C', click: function(){
            app.quit();
        } }
    ]
}]

// テンプレートを読みこんでくる。
let menu = Menu.buildFromTemplate(menuTemplate)

// 送られてくる退勤時間を受け取る。
ipcMain.on('settings_leave', function(event, leave) {
    mainWindow.webContents.send('set_leave', leave);
});

// 送られてくる出勤時間を受け取る。
ipcMain.on('settings_attend', function(event, attend) {
    mainWindow.webContents.send('set_attend', attend);
});




function showAboutDaialog(){
    dialog.showMessageBox({
        type: 'info',
        buttons: ['OK'],
        message: 'About This App',
        detail: 'This app was created by @endu,@tecchan'
    })
}


function createMainWinowd(){
    Menu.setApplicationMenu(menu);
    // create window
    mainWindow = new BrowserWindow({width: 600, height:400 });
    mainWindow.loadURL('file://'+ __dirname + '/index.html');
    // chomeのツールを読み込む
    // mainWindow.webContents.openDevTools();
    // 閉じた際の処理
    mainWindow.on('closed', function(){
        mainWindow = null;
    });
}

app.on('ready', function(){
    createMainWinowd();
});

app.on('window-all-closed', function(){
    //macユーザ以外の処理
    if(process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('activate',function(){
    if(mainWindow  === null){
      createMainWinowd();
    }
});
