# 拡張機能サンプル: JWT Viewer (Webpack対応版)

## VS Code API

### `vscode` module

- [`commands.registerCommand`](https://code.visualstudio.com/api/references/vscode-api#commands.registerCommand)
- [`window.activeTextEditor`](https://code.visualstudio.com/api/references/vscode-api#window.activeTextEditor)
- [`window.showErrorMessage`](https://code.visualstudio.com/api/references/vscode-api#window.showErrorMessage)

### Contribution Points

- [`contributes.commands`](https://code.visualstudio.com/api/references/contribution-points#contributes.commands)
- [`contributes.keybindings`](https://code.visualstudio.com/api/references/contribution-points#contributes.keybindings)
- [`contributes.menus`](https://code.visualstudio.com/api/references/contribution-points#contributes.menus)

## サンプル実行

- `npm install`を実行して依存パッケージをインストール
- `npm run webpack`でwebpackによるバンドル化実行
- `code .`を実行してVS Codeを立ち上げる
- `F5`を押下して`Extension Development Host`を立ち上げる
  - デバックViewの`Run Extension`を実行しても`Extension Development Host`を立ち上げることができる
