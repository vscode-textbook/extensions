# 拡張機能サンプル: ユーザー入力用UI (QuickPick & InputBox API)

## VS Code API

### `vscode` module

- [`commands.registerCommand`](https://code.visualstudio.com/api/references/vscode-api#commands.registerCommand)
- [`window.showInformationMessage`](https://code.visualstudio.com/api/references/vscode-api#window.showInformationMessage)
- [`window.showQuickPick`](https://code.visualstudio.com/api/references/vscode-api#window.showQuickPick)
- [`window.showInputBox`](https://code.visualstudio.com/api/references/vscode-api#window.showInputBox)
- [`QuickPickItem`](https://code.visualstudio.com/api/references/vscode-api#QuickPickItem)

### Contribution Points

- [`contributes.commands`](https://code.visualstudio.com/api/references/contribution-points#contributes.commands)


## サンプル実行

- `npm install`を実行して依存パッケージをインストール
- `code .`を実行してVS Codeを立ち上げる
- `F5`を押下して`Extension Development Host`を立ち上げる
  - デバックViewの`Run Extension`を実行しても`Extension Development Host`を立ち上げることができる
