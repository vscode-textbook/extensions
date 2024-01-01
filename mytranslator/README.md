# 拡張機能サンプル: テキスト翻訳 (MyTranslator)

**\[Warning\] This is a deprecated project and will be removed in the future book revision.**

## VS Code API

### `vscode` module

- [`commands.registerCommand`](https://code.visualstudio.com/api/references/vscode-api#commands.registerCommand)
- [`window.activeTextEditor`](https://code.visualstudio.com/api/references/vscode-api#window.activeTextEditor)
- [`window.showInformationMessage`](https://code.visualstudio.com/api/references/vscode-api#window.showInformationMessage)
- [`workspace.getConfiguration`](https://code.visualstudio.com/api/references/vscode-api#workspace.getConfiguration)
- [`workspace.onDidChangeConfiguration`](https://code.visualstudio.com/api/references/vscode-api#workspace.onDidChangeConfiguration)


### Contribution Points

- [`contributes.commands`](https://code.visualstudio.com/api/references/contribution-points#contributes.commands)
- [`contributes.keybindings`](https://code.visualstudio.com/api/references/contribution-points#contributes.keybindings)
- [`contributes.configuration`](https://code.visualstudio.com/api/references/contribution-points#contributes.configuration)


## サンプル実行

- `npm install`を実行して依存パッケージをインストール
- `npm run webpack`でwebpackによるバンドル化実行
- `code .`を実行してVS Codeを立ち上げる
- `F5`を押下して`Extension Development Host`を立ち上げる
  - デバックViewの`Run Extension`を実行しても`Extension Development Host`を立ち上げることができる

