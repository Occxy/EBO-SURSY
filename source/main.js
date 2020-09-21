const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

/*require('update-electron-app')({repo: 'rosset_bruno/ebola/src/master',
		  updateInterval: '1 hour',
		  host: 'https://bitbucket.org' }
)*/

let mainWindow;

function createWindow () {

  mainWindow = new BrowserWindow({width: 1800, height: 1200});
  
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.on('closed', () => {
	  mainWindow = null;
  });
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

/*const isDev = require('electron-is-dev');
if (isDev) {
	console.log('Running in development');
} else {
	console.log('Running in production');
	
	const { app, autoUpdater, dialog } = require('electron')
	
	//const server = 'https://ebola-qggn8qdqj.vercel.app'
	const server = 'https://vercel.com/rosset-bruno/ebola'
	const url = `${server}/update/${process.platform}/${app.getVersion()}`

	autoUpdater.setFeedURL({ url })
	
	autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
	  const dialogOpts = {
	    type: 'info',
	    buttons: ['Restart', 'Later'],
	    title: 'Application Update',
	    message: process.platform === 'win32' ? releaseNotes : releaseName,
	    detail: 'A new version has been downloaded. Redémarrez l application pour appliquer les mises à jour.'
	  }
	
	  dialog.showMessageBox(dialogOpts).then((returnValue) => {
	    if (returnValue.response === 0) autoUpdater.quitAndInstall()
	  })
	})
	
	autoUpdater.on('error', message => {
	  console.error('There was a problem updating the application')
	  console.error(message)
	})
	
}*/
