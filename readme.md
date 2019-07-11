## フロントエンド環境構築手順

- Node.jsは10.16.0(LTS)の使用を想定しています
- Node.jsのインストール方法はWikiを参照してください
- `npm install`を実行して必要なモジュールを読み込んでください
- `npm run dev`で開発環境用のJavaScript・CSSファイルを出力します
- `npm prod`で本番環境用のJavaScript・CSSファイルを出力します

## サーバーサイド環境手順

- macOSに標準搭載されているPHPの使用を推奨します
- PHP5.4以降であればビルトインサーバーを使えるのでそれを使います
- ドキュメントルートで`php -S localhost:8000`を実行してください
- `http://localhost:8000/`にアクセスして、index.htmlが無事観れるようであれば構築完了です
