
export const Channels = {
  Api: {
    OpenGamePath: 'open-game-path',
    LoadGameContent: 'load-game-content',
    GetContentInfo: 'get-content-info',
    LoadModpack: 'load-modpack',
    GenerateModpack: 'generate-modpack'
  },
  WindowAction: {
    WindowRestore: 'window-restore',
    FetchWindowState: 'fetch-window-state',
    MinimizeWindow: 'minimize-window',
    MaximizeWindow: 'maximize-window',
    UnmaximizeWindow: 'unmaximize-window',
    EnterFullScreen: 'enter-fullscreen',
    CloseWindow: 'close-window',
  }
}

export const WINDOW_STATE = {
  FULLSCREEN: 0,
  MAXIMIZED: 1,
  MINIMIZED: 2,
  HIDDEN: 3,
  NORMAL: 4
}