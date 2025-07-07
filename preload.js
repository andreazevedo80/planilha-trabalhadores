// preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  printToPDF: (htmlContent, suggestedFilename) => ipcRenderer.invoke('print-to-pdf', htmlContent, suggestedFilename)
});