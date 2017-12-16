## 導入

### 1. 以下に従って作業

```bash
# package.json 作成
$ yarn init

# react/react-dom のインストールと、package.json への追加
# これにより node_modules ディレクトリと yarn.lock ファイルができる
$ yarn add react react-dom

# webpack と babel のインストール
$ yarn add --dev webpack babel-loader babel-core babel-preset-react babel-preset-es2015
```

### 2. webpack.config.js を作成

### 3. src 以下を作成

### 4. dest/index.html を作成

### 5. webpack で src 以下のファイルをバンドルする(良い感じに一つにまとめる)

以下を実行することで、dist/bundle.js が作成される

```bash
$ ./node_modules/.bin/webpack
```

エラーになる場合は、以下で詳細なメッセージを出力可能。
この時点でエラーになる場合はタイポを疑うべし

```bash
$ ./node_modules/.bin/webpack --display-error-details
```

ここまで行うと、index.html をブラウザで開いたときに Hello が表示されるようになっている

### 6. ローカルサーバの作成

```bash
$ yarn add --dev webpack-dev-server
```

webpack.config.js の設定も行う。
以下を実行することでローカルサーバが起動する。

```bash
$ ./node_modules/.bin/webpack-dev-server
```

### 7. yarn start コマンドのエイリアスを設定
package.json の中身に以下を追加

```json
{
  {
    ...
  },
  "scripts": {
      "start": "webpack-dev-server"
    },
  {
    ...
  },
}
```

これで `yarn start` するだけでローカルサーバを起動できる

### おまけ
#### この時点の webpack.config.js

```js
const path = require("path");

module.exports = {
  entry: __dirname + "/src/index.jsx", // トランスパイル対象
  output: {
    path: __dirname + "/dist", // 出力先ディレクトリ
    filename: "bundle.js" // 入力されたファイルをまとめて出力するときのファイル名
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: "babel-loader", // Babel を webpack で利用できるようにする
        options: {
          presets: ["react", "es2015"] // react と es2015 をトランスパイル対象とする
        }
      }
    ]
  },
  devServer: {  // ここは 6. で追加
    contentBase: path.resolve(__dirname, "dist"), // dist ディレクトリのファイルを確認する
    port: 3000, //3000 ポートを使用
  },
  resolve: {
    extensions: [".js", ".jsx"] // js ファイル、jsx ファイルを対象とする
  }
};
```

## TODO
* js 用の vim 設定 
