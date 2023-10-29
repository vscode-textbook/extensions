import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

  let disposableBold = vscode.commands.registerCommand(
    'mdtextutils.bold', () => {
      replaceText( text => {
        return `**${text}**`;
      });
  });
  let disposableItalic = vscode.commands.registerCommand(
    'mdtextutils.italic', () => {
      replaceText( text => {
        return `_${text}_`;
      });
  });
  let disposableStrikethrough = vscode.commands.registerCommand(
    'mdtextutils.strikethrough', () => {
      replaceText( text => {
        return `~~${text}~~`;
      });
  });
  context.subscriptions.push(
    disposableBold,
    disposableItalic,
    disposableStrikethrough
  );
}

export function deactivate() {}

function replaceText(callback: (text: string) => string): void {
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    editor.edit(builder => {
      for (const selection of editor.selections) {
        const selectedText = editor.document.getText(
          new vscode.Range(selection.start, selection.end
        ));
        builder.replace(selection, callback(selectedText));
      }
    });
  }
}
