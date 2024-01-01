import * as vscode from 'vscode';

const COUNTER_KEY = "visit_counter";

export function activate(context: vscode.ExtensionContext) {

  let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
    // Workspace level counter 
    // Get counter value from workspace storage
    let val =  context.workspaceState.get(COUNTER_KEY, 0);  // default 0
    let counter : number = Number(val);
    counter++;
    vscode.window.showInformationMessage(`Command call #: ${counter}`);
    // Update counter value in workspace storage
    context.workspaceState.update(COUNTER_KEY, counter);

    //// Show Storage Uri
    console.log(`Workspace Storage Uri: ${context.storageUri}`);
    // storagePath is deprecated
    // console.log(`Workspace Storage Path: ${context.storagePath}`);

    console.log(`Global Storage Uri: ${context.globalStorageUri}`);
    // globalStoragePath is deprecated
    // console.log(`Global Storage Path: ${context.globalStoragePath}`);
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
