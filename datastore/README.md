# 拡張機能サンプル: データストレージ/永続化 (Data Storage)

## VS Code API

### `vscode` module

- [`commands.registerCommand`](https://code.visualstudio.com/api/references/vscode-api#commands.registerCommand)
- [`window.showInformationMessage`](https://code.visualstudio.com/api/references/vscode-api#window.showInformationMessage)
- [`ExtensionContext.workspaceState`](https://code.visualstudio.com/api/references/vscode-api#ExtensionContext.workspaceState)
- [`ExtensionContext.storageUri`](https://code.visualstudio.com/api/references/vscode-api#ExtensionContext.storageUri)
- [`ExtensionContext.globalStorageUri`](https://code.visualstudio.com/api/references/vscode-api#ExtensionContext.globalStorageUri)

### Contribution Points

- [`contributes.commands`](https://code.visualstudio.com/api/references/contribution-points#contributes.commands)


## サンプル実行

- `npm install`を実行して依存パッケージをインストール
- `code .`を実行してVS Codeを立ち上げる
- `F5`を押下して`Extension Development Host`を立ち上げる
  - デバックViewの`Run Extension`を実行しても`Extension Development Host`を立ち上げることができる
