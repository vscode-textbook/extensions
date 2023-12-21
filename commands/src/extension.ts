import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

  let show = vscode.commands.registerCommand('extension.show', message => {
    if (message) {
      vscode.window.showInformationMessage(message); 
    }
  });

  let helloWorld = vscode.commands.registerCommand('extension.helloWorld',
    () => vscode.commands.executeCommand("extension.show", "Hello World"));

  context.subscriptions.push(show, helloWorld);
}
