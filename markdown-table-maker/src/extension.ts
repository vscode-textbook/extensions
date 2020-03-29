import * as vscode from 'vscode';
import { makeMarkdownTable } from "./markdown";

export function activate(context: vscode.ExtensionContext) {

  let disposable = vscode.commands.registerCommand('mdtablemaker.maketable', async() => {

    // Quick Pick: Columns#
  	const colnum = await vscode.window.showQuickPick(
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], {
          canPickMany: false,
		      placeHolder: 'Choose number of columns (1-10)'
	      });
      
    // Wait 500ms before move on
    await new Promise(resolve => setTimeout(resolve, 500));

    // Quick Pick: Rows#
  	const rownum = await vscode.window.showQuickPick(
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], {
          canPickMany: false,
		      placeHolder: 'Choose number of rows (1-10)'
	      });

    // Render markdown table on editor
    const table = makeMarkdownTable(Number(colnum), Number(rownum));
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      editor.edit( builder => {
        builder.delete(editor.selection);
      }).then( () => {
        editor.edit( builder => {
          builder.insert(editor.selection.start, table);
        });
      });
    }

  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}