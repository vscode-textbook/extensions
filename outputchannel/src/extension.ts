import * as vscode from 'vscode';

let _channel: vscode.OutputChannel;
export function activate(context: vscode.ExtensionContext) {

  let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
    if (!_channel) {
      _channel = vscode.window.createOutputChannel('Test Output');
    }
    _channel.show(true);
    _channel.appendLine("log1 is appended");
    _channel.appendLine("log2 is appended");
    _channel.appendLine("log3 is appended");
    _channel.appendLine("log4 is appended");
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
