// 'vscode'モジュールにはVS Code拡張APIが含まれています
import * as vscode from 'vscode';
import { dateFormat } from "./dateformat";

// このメソットは拡張機能がアクティベートされるときに一度だけ呼ばれます。
export function activate(context: vscode.ExtensionContext) {

  // 診断情報を出力するときはconsoleを、エラー情報を出力するときはconsole.error
  // をお使いください
  console.log('Congratulations, your extension "quickstart" is now active!');

  // package.jsonに定義されたコマンドの実装をregisterCommandで登録します
  // コマンドIDはpackage.jsonに記述したものと同一である必要があります
  let disposableHelloworld = vscode.commands.registerCommand('quickstart.helloWorld', () => {
    // ここに書かれたコードはコマンドが実行される度に実行されます

    // メッセージボックスを表示します
    vscode.window.showInformationMessage('Hello World from quickstart!');
  });

  // vscode.commands.registerCommandによりコマンドquickstart.getTodayを追加
  let disposableGettoday = vscode.commands.registerCommand('quickstart.getToday', () => {
    let today: Date = new Date();
    vscode.window.showInformationMessage("Today:" + dateFormat(today));
  });

  // 解放対象のリソースを追加します
  context.subscriptions.push(
    disposableHelloworld,
    disposableGettoday
  );
}

// このメソッドは拡張機能がディアクテベートされるときに呼ばれます
export function deactivate() {}

