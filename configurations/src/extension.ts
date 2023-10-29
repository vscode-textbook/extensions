import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "sampleconfigurations" is now active!');

  let getconfigCommand = vscode.commands.registerCommand('extension.getconfig', () => {
    vscode.window.showInformationMessage('Get Config!');
    const config = vscode.workspace.getConfiguration('sampleconfig');
    console.log(`sampleconfig.stringitem=${config.get('stringitem')}`);
    console.log(`sampleconfig.numberitem=${config.get('numberitem')}`);
    console.log(`sampleconfig.booleanitem=${config.get('booleanitem')}`);
  });

  //Update a configuration value. The updated configuration values are persisted.
  let updateconfigCommand = vscode.commands.registerCommand('extension.updateconfig', () => {
    vscode.window.showInformationMessage('Update Config!');
    const config = vscode.workspace.getConfiguration('sampleconfig');
    config.update('stringitem', 'hey', true);
    config.update('numberitem', 20, true);
    config.update('booleanitem', true, true);
  });

  context.subscriptions.push(getconfigCommand, updateconfigCommand);
}

export function deactivate() {}
