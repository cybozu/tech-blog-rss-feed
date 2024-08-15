// @ts-check
const siteUrlStem = 'https://cybozu.github.io/tech-blog-rss-feed';
const siteUrl = `${siteUrlStem}/`;

module.exports = {
  // サイト設定
  siteUrl: `${siteUrl}`,
  siteUrlStem: siteUrlStem,
  siteTitle: 'サイボウズのTech系ブログRSS',
  siteDescription:
    'サイボウズのTech系ブログの更新をまとめたRSSフィードを配信しています。記事を読んで、サイボウズの技術・カルチャーを知っていただくことを目的としています。',

  // フィード設定
  feedTitle: 'サイボウズのTech系ブログRSS',
  feedDescription: 'サイボウズのTech系ブログの更新をまとめたRSSフィード',
  feedLanguage: 'ja',
  feedCopyright: 'cybozu/tech-blog-rss-feed',
  feedGenerator: 'cybozu/tech-blog-rss-feed',
  feedUrls: {
    atom: `${siteUrl}feeds/atom.xml`,
    rss: `${siteUrl}feeds/rss.xml`,
    json: `${siteUrl}feeds/feed.json`,
  },

  // GitHub
  author: 'cybozu',
  gitHubUserUrl: 'https://github.com/cybozu/',
  gitHubRepositoryUrl: 'https://github.com/cybozu/tech-blog-rss-feed/',

  // Google Analytics系。フォークして使う際は値を空にするか書き換えてください
  googleSiteVerification: '',
  globalSiteTagKey: '',

  // フィードの取得などに使う UserAgent
  requestUserAgent: 'facebookexternalhit/1.1; cybozu/tech-blog-rss-feed',

  // サイトの追加方法のリンク
  howToAddSiteLink:
    '',
};
