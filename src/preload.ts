import { ipcRenderer, contextBridge } from "electron";

// 💣 WARNING: pretty much anything besides imports here will crash the preload script and prevent it from loading
// everything in this script generator must be contained in contextBridge function.

contextBridge.exposeInMainWorld("api", {
  getProcessRunningTime: (port: number) =>
    ipcRenderer.invoke("getProcessRunningTime", port),
});
