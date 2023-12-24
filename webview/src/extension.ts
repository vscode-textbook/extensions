import * as path from 'path';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

  let disposable = vscode.commands.registerCommand('extension.hellovscode', () => {

    const panel = vscode.window.createWebviewPanel(
      'previewHelloVSCode',
      'Preview Hello VS Code',
       vscode.ViewColumn.Two,
      {
        // Restrict the webview to only loading content from our extension's `media` directory.
        localResourceRoots: [vscode.Uri.file(path.join(context.extensionPath, 'media'))]
      }
    );

    const onDiskPath = vscode.Uri.file(
      path.join(context.extensionPath, 'media', 'vscode-logo.png')
    );
    const imageUri = panel.webview.asWebviewUri(onDiskPath);
    panel.webview.html = getWebviewContent(panel.webview, imageUri);
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}

function getWebviewContent(webview: vscode.Webview, imageUri: vscode.Uri) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src ${webview.cspSource} https:;">
  <title>Hello VS Code</title>
</head>
<body>
  <h1>Hello VS Code</h1>
  <IMG src="${imageUri}">
</body>
</html>`;
}
