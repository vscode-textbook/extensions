//@ts-check

'use strict';

const path = require('path');
const webpack = require('webpack');

/**@type {import('webpack').Configuration}*/
const config = {
  target: 'webworker', // VS Code拡張機能が実行されるコンテキスト。ここではwebworkerを推奨

  entry: './src/extension.ts', // 拡張機能のエントリーポイントとなるファイル
  output: {
    //  バンドルが'dist'フォルダに保存される
    path: path.resolve(__dirname, 'dist'),
    filename: 'extension.js',
    libraryTarget: 'commonjs2',
    devtoolModuleFilenameTemplate: '../[resource-path]'
  },
  devtool: 'source-map',
  externals: {
    vscode: 'commonjs vscode' // バンドルに含めない物を指定。vscodeはオンザフライで作成されるので含めない
  },
  resolve: {
    // WebpackはTypeScriptとJavaScirptファイル読み込みをサポート
    mainFields: ['browser', 'module', 'main'],
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader' // TypeScriptを扱うためにts-loaderをロード
          }
        ]
      }
    ]
  }
};
module.exports = config;
