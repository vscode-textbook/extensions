import * as vscode from 'vscode';
import * as jwtDecode from "jwt-decode";
import { getWebviewContent } from './webview';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('jwtviewer.decode', () => {
 
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }
    if (editor.selections.length > 1) {
      vscode.window.showErrorMessage('[JWTDebugger] Sorry, multiple text is not supported!');
      return;
    }
    let selection:vscode.Selection = editor.selections[0];
    let encodedText:string = editor.document.getText(
      new vscode.Range(selection.start, selection.end
    ));
    if (encodedText.length < 1) {
      vscode.window.showErrorMessage('Please select text!');
      return;
    }

    try {
      
      const decodedHeader = jwtDecode(encodedText, { header: true });
      const decodedPayload = jwtDecode(encodedText);
      const panel = vscode.window.createWebviewPanel(
          'previewJWTDecoded',
          'Preview JWT Decoded Result',
          vscode.ViewColumn.Two,
          {}
        );
      panel.webview.html = getWebviewContent(encodedText, decodedHeader, decodedPayload);
    
    } catch (e){
      if ((e as any).name === 'InvalidTokenError') {
        vscode.window.showErrorMessage('Invalid Token Error!');
      }
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
