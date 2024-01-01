# 拡張機能サンプル: ユーザー設定 (Configurations)

## VS Code API

### `vscode` module

- [`commands.registerCommand`](https://code.visualstudio.com/api/references/vscode-api#commands.registerCommand)
- [`window.showInformationMessage`](https://code.visualstudio.com/api/references/vscode-api#window.showInformationMessage)
- [`workspace.getConfiguration`](https://code.visualstudio.com/api/references/vscode-api#workspace.getConfiguration)

### Contribution Points

- [`contributes.commands`](https://code.visualstudio.com/api/references/contribution-points#contributes.commands)
- [`contributes.configuration`](https://code.visualstudio.com/api/references/contribution-points#contributes.configuration)

## サンプル実行

- `npm install`を実行して依存パッケージをインストール
- `code .`を実行してVS Codeを立ち上げる
- `F5`を押下して`Extension Development Host`を立ち上げる
  - デバックViewの`Run Extension`を実行しても`Extension Development Host`を立ち上げることができる

