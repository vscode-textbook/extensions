import * as vscode from 'vscode';
import { dateFormat } from "./dateformat";
export function activate(context: vscode.ExtensionContext) {

  let disposableHelloWorld = vscode.commands.registerCommand('quickstart.helloWorld', () => {
    vscode.window.showInformationMessage('Hello World!');
  });
  
  let disposableGetToday = vscode.commands.registerCommand('quickstart.getToday', () => {
    let today: Date = new Date();
    vscode.window.showInformationMessage("Today:" + dateFormat(today));
  });

  context.subscriptions.push(
    disposableHelloWorld,
    disposableGetToday
  );
}

export function deactivate() {}
