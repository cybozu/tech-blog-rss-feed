# <img src="src/site/images/icon-transparent.png" height=26> Cybozu技術系ブログRSS
サイボウズのTech系ブログの更新をまとめたRSSフィードを配信しています。  
記事を読んでCybozuのエンジニアの技術・カルチャーを知っていただくことを目的としています。
このRSSフィード配信は、[@yamadashy](https://github.com/yamadashy)さんが開発された「[企業テックブログRSS](https://yamadashy.github.io/tech-blog-rss-feed/)」をもとに、Cybozuの技術系ブログ用にカスタマイズしています。

## 開発

### 仕組み
GitHub Actions で定期的に更新されており、サイトの生成は [Eleventy](https://www.11ty.dev/) を使用しています。

更新は多少遅延ありますが以下のタイミングで行います。
- 平日 8時-24時の1時間おき
- 休日 8時-24時の2時間おき

### 開発環境とコマンド
環境
- Node.js >= 20

パッケージのインストール
```bash
$ yarn
```

フィード生成とサイト立ち上げ
```bash
$ # フィードを取得して作成
$ yarn feed-generate

$ # localhost:8080 で確認
$ yarn site-serve
```

コードのチェック
```bash
$ # eslint, tsc --noEmit
$ yarn lint

$ # テスト
$ yarn test
```

## ライセンス
MIT
