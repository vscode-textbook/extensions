# 拡張機能サンプル: Markdown テーブル作成機能 (Markdown Table Maker)

## VS Code API

### `vscode` module

- [`commands.registerCommand`](https://code.visualstudio.com/api/references/vscode-api#commands.registerCommand)
- [`window.showQuickPick`](https://code.visualstudio.com/api/references/vscode-api#window.showQuickPick)
- [`window.activeTextEditor`](https://code.visualstudio.com/api/references/vscode-api#window.activeTextEditor)


### Contribution Points

- [`contributes.commands`](https://code.visualstudio.com/api/references/contribution-points#contributes.commands)
- [`contributes.menus`](https://code.visualstudio.com/api/references/contribution-points#contributes.menus)

## サンプル実行

- `npm install`を実行して依存パッケージをインストール
- `code .`を実行してVS Codeを立ち上げる
- `F5`を押下して`Extension Development Host`を立ち上げる
  - デバックViewの`Run Extension`を実行しても`Extension Development Host`を立ち上げることができる
