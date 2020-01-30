const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

require('electron-reload')(__dirname);


app.on('ready', ()=>{
    let main = new BrowserWindow(
        {
        width:600, 
        height:400,
        title:'Convertidor de Markdown a HTML', 
        webPreferences:{
            nodeIntegration:true
          },
         
       })
  
    main.loadURL(url.format({
      pathname: path.join(__dirname,'index.html'),
      protocol:'file',
      slashes:true  
  }))

  
    main.on('closed', ()=> {
      app.quit()
    })

  
})