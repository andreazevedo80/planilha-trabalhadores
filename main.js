const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs'); // Módulo para salvar arquivos

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      nodeIntegration: false, // Mantenha como false por segurança
      contextIsolation: true, // Mantenha como true por segurança
      preload: path.join(__dirname, 'preload.js') // Carrega o script preload
    },
    icon: path.join(__dirname, 'icon.ico') // Opcional
  });

  mainWindow.loadFile('index.html');

  // Adiciona um listener para a chamada printToPDF do renderer
  ipcMain.handle('print-to-pdf', async (event, htmlContent, suggestedFilename) => {
    try {
      // Cria uma janela temporária para renderizar o HTML antes de imprimir
      const printWindow = new BrowserWindow({
        show: false, // Não mostra a janela
        webPreferences: {
          nodeIntegration: false,
          contextIsolation: true,
          // Não precisa de preload para esta janela temporária
        }
      });

      // Carrega o conteúdo HTML na janela temporária
      await printWindow.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(htmlContent)}`);

      // Abre a caixa de diálogo para salvar o arquivo
      const { filePath } = await dialog.showSaveDialog(mainWindow, {
        title: 'Salvar Planilha PDF',
        defaultPath: suggestedFilename,
        filters: [
          { name: 'PDF Files', extensions: ['pdf'] }
        ]
      });

      if (filePath) {
        // Imprime o conteúdo da janela temporária para PDF
        const pdfBuffer = await printWindow.webContents.printToPDF({
          landscape: true, // Garante modo paisagem
          printBackground: true, // Garante que as cores de fundo sejam impressas
          pageSize: 'A4', // Define o tamanho da página, pode ajustar para 'Letter' ou outro
          scaleFactor: 100 // Escala padrão
        });
        
        fs.writeFileSync(filePath, pdfBuffer); // Salva o buffer no arquivo
        printWindow.destroy(); // Fecha a janela temporária
        return { success: true, filePath: filePath };
      } else {
        printWindow.destroy();
        return { success: false, message: 'Operação cancelada.' };
      }

    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      return { success: false, message: error.message };
    }
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// Script preload.js
// Crie um arquivo chamado 'preload.js' na mesma pasta do seu main.js e index.html
// Este script é executado ANTES do seu script principal (index.html) e tem acesso a APIs do Node.js
// mas expõe apenas o que você permitir ao renderer.