# <img src="src/site/images/icon-transparent.png" height=26> サイボウズのTech系ブログRSS
サイボウズのTech系ブログの更新をまとめたRSSフィードを配信しています。  
記事を読んでサイボウズのエンジニアの技術・カルチャーを知っていただくことを目的としています。
このRSSフィード配信は、[@yamadashy](https://github.com/yamadashy)さんが開発された「[企業テックブログRSS](https://yamadashy.github.io/tech-blog-rss-feed/)」をもとに、サイボウズのTech系ブログ用にカスタマイズしています。

## 開発

### 仕組み
GitHub Actions で定期的に更新されており、サイトの生成は [Eleventy](https://www.11ty.dev/) を使用しています。

更新は、以下のスケジュールで実行しています。（多少の処理遅延は、あります）
- 毎日 9時-18時(JST)の1時間おき

### 開発環境とコマンド
環境
- Node.js >= 20

パッケージのインストール
```bash
$ pnpm install
```

フィード生成とサイト立ち上げ
```bash
$ # フィードを取得して作成
$ pnpm feed-generate

$ # localhost:8080 で確認
$ pnpm site-serve
```

コードのチェック
```bash
$ # eslint, tsc --noEmit
$ pnpm lint

$ # テスト
$ pnpm test
```

## ライセンス
MIT
