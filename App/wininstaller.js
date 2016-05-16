var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: '.',
    outputDirectory: '/MyAppinstaller64',
    authors: 'My App Inc.',
    exe: 'myapp.exe',
    description: "description"
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log("No dice:" + e.message));
