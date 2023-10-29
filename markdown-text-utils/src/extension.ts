import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

  let disposable_bold = vscode.commands.registerCommand(
    'mdtextutils.bold', () => {
      replaceText( text => {
        return `**${text}**`;
      });
  });
  let disposable_italic = vscode.commands.registerCommand(
    'mdtextutils.italic', () => {
      replaceText( text => {
        return `_${text}_`;
      });
  });
  let disposable_strikethrough = vscode.commands.registerCommand(
    'mdtextutils.strikethrough', () => {
      replaceText( text => {
        return `~~${text}~~`;
      });
  });
  context.subscriptions.push(
    disposable_bold,
    disposable_italic,
    disposable_strikethrough
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
