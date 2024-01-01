//@ts-check

'use strict';

const path = require('path');
const glob = require("glob");

const entries = glob.sync("./src/*.ts", {
    ignore: './src/test/*.ts'
})
//const entries = glob.sync("./src/*.ts")

/**@type {import('webpack').Configuration}*/
const config = {
    target: 'node', //バンドルが実行される環境。ここではnode.js環境での実行を指定
    //entry: './src/extension.ts', // 拡張機能のエントリーポイントとなるファイル
    entry: entries, // 拡張機能のエントリーポイントとなるファイル
    output: {                // バンドルが'dist'フォルダに保存される
        path: path.resolve(__dirname, 'dist'),
        filename: 'extension.js',
        libraryTarget: "commonjs2",
        devtoolModuleFilenameTemplate: "../[resource-path]",
    },
    devtool: 'source-map',
    externals: {
        vscode: "commonjs vscode" // バンドルに含めない物を指定。vscodeはオンザフライで作成されるので含めない
    },
    resolve: { // WebpackはTypeScriptとJavaScirptをその順番に読み込みを行う
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            use: [{
                loader: 'ts-loader'  // TypeScriptを扱うためにts-loaderをロード
            }]
        }]
    },
}

module.exports = config;
