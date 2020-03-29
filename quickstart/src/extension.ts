import * as vscode from 'vscode';
import { dateFormat } from "./dateformat";
export function activate(context: vscode.ExtensionContext) {

  let disposable_helloworld = vscode.commands.registerCommand('extension.helloWorld', () => {
    vscode.window.showInformationMessage('Hello World!');
  });
  
  let disposable_gettoday = vscode.commands.registerCommand('extension.getToday', () => {
    let today: Date = new Date();
    vscode.window.showInformationMessage("Today:" + dateFormat(today));
  });

  context.subscriptions.push(
    disposable_helloworld,
    disposable_gettoday
  );
}

export function deactivate() {}
