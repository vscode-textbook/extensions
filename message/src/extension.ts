import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

  let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
    vscode.window.showInformationMessage('INFO: Hello World!');
    vscode.window.showWarningMessage('WARNING: Hello World!');
    vscode.window.showErrorMessage('ERROR: Hello World!');
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
