# 拡張機能サンプル: Markdown簡単入力機能 (Markdown Text Utilities)

- 太字
- イタリック
- 打ち消し線

## VS Code API

### `vscode` module

- [`commands.registerCommand`](https://code.visualstudio.com/api/references/vscode-api#commands.registerCommand)
- [`window.activeTextEditor`](https://code.visualstudio.com/api/references/vscode-api#window.activeTextEditor)

### Contribution Points

- [`contributes.commands`](https://code.visualstudio.com/api/references/contribution-points#contributes.commands)

## サンプル実行

- `npm install`を実行して依存パッケージをインストール
- `code .`を実行してVS Codeを立ち上げる
- `F5`を押下して`Extension Development Host`を立ち上げる
  - デバックViewの`Run Extension`を実行しても`Extension Development Host`を立ち上げることができる
