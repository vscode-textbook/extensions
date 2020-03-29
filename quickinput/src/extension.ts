import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

  let choosecolor_command = vscode.commands.registerCommand('samplequickinput.choosecolor', () => {
    chooseColor();
  });
  let chooseaction_command = vscode.commands.registerCommand('samplequickinput.chooseaction', () => {
    chooseAction();
  });
  let inputyourname_command = vscode.commands.registerCommand('samplequickinput.inputyourname', () => {
    inputYourName();
  });

  context.subscriptions.push(
    choosecolor_command, chooseaction_command, inputyourname_command);
}

export function deactivate() {}

function chooseColor() {
  vscode.window.showQuickPick(
    ['Red', 'Green', 'Blue', 'Yellow'],{
      canPickMany: false,
      placeHolder: 'Choose your favorite color'
  }).then(
    selectedItem => {
      if (selectedItem) {
        vscode.window.showInformationMessage(`You choose ${selectedItem}`);
      }
  });
}

function chooseAction() {
  const actions: vscode.QuickPickItem[] = [
    { label: 'Action1', description: 'Description of Action1'},
    { label: 'Action2', description: 'Description of Action2'},
    { label: 'Action3', description: 'Description of Action3'},
    { label: 'Action4', description: 'Description of Action4'},
  ];
  vscode.window.showQuickPick(
    actions,{
      canPickMany: false,
      placeHolder: 'Choose your favorite action'
  }).then (
    selectedItem => {
      if (selectedItem) {
        vscode.window.showInformationMessage(`You choose ${selectedItem.label}`);
      }
  });
}

function inputYourName() {
  vscode.window.showInputBox({
    prompt: "Input your name",
    validateInput: (s: string): string | undefined =>
      (!s) ? "You must input something!" : undefined 
  }).then(
    inputString => {
      vscode.window.showInformationMessage(`Your name is ${inputString}`);
  });
}