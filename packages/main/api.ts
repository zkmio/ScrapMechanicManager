import { ActionLogger, ScrapMechanicHub } from "./lib/src/ScrapMechanicHubLib";
import { BrowserWindow, dialog, ipcMain } from 'electron';
import { Channels } from "packages/common/Constants";
import { v4 as uuidv4 } from 'uuid'
import fs from "fs";

class Context {

  private hub = new ScrapMechanicHub()

  loadGame(gamePath: string, actionLogger: ActionLogger) {
    this.hub.loadGame(gamePath, actionLogger)
  }

  getContentInfo() {
    return this.hub.getContentInfo()
  }

  generateModpack(config: ModpackData) {
    this.hub.geneateModpack(config)
  }
}

const ctx = new Context();

export function registerApi(mainWindow: BrowserWindow) {
  ipcMain.on(Channels.Api.OpenGamePath, async(evt) => {
      let ret = await dialog.showOpenDialog({
        title: 'Open Game Path',
        properties: ['openDirectory']
      })
      evt.returnValue = ret.filePaths[0]
    })

  ipcMain.on(Channels.Api.LoadGameContent, (evt, gamePath) => {
    let tempChannel = uuidv4()
    const actionLogger = {
      write(data) {
        mainWindow.webContents.send(tempChannel, {log: data} as LoadGameLog)
      },
      close(actionSuccess) {
        mainWindow.webContents.send(tempChannel, {complete: true, success: actionSuccess} as LoadGameLog)
      },
    } as ActionLogger
    ctx.loadGame(gamePath, actionLogger)
    evt.returnValue = tempChannel
  })

  ipcMain.on(Channels.Api.LoadModpack, async(evt) => {
    let ret = await dialog.showOpenDialog({
      title: 'Load Modpack',
      properties: ['openFile'],
      filters: [{name: 'modpack', extensions: ['json']}]
    })
    let filePath = ret.filePaths[0]
    if (fs.existsSync(filePath)) {
      evt.returnValue = JSON.parse(fs.readFileSync(filePath).toString())
    } else {
      evt.returnValue = null;
    }
  })

  ipcMain.on(Channels.Api.GetContentInfo, evt => evt.returnValue = ctx.getContentInfo())
  ipcMain.on(Channels.Api.GenerateModpack, (evt, data) => evt.returnValue = ctx.generateModpack(data))
}