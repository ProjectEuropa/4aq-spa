## フロントエンド環境構築手順

- Node.jsは10.16.0(LTS)の使用を想定しています
- Node.jsのインストール方法は[Wiki](https://github.com/ProjectEuropa/4aq-spa/wiki/Node.js%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E6%89%8B%E9%A0%86)を参照してください
- `npm install`を実行して必要なモジュールを読み込んでください
- `npm run dev`で開発環境用のJavaScript・CSSファイルを出力します
- `npm run prod`で本番環境用のJavaScript・CSSファイルを出力します

## サーバーサイド環境手順

- macOSに標準搭載されているPHPの使用を推奨します
- PHP5.4以降であればビルトインサーバーを使えるのでそれを使います
- ドキュメントルートで`php -S localhost:8000`を実行してください
- `http://localhost:8000/`にアクセスして、index.htmlが無事観れるようであれば構築完了です
