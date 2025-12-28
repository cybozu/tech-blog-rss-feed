const path = require('path');
const fs = require('fs/promises');
const dayjs = require('dayjs');
require('dayjs/locale/ja');

dayjs.extend(require('dayjs/plugin/relativeTime'));
dayjs.extend(require('dayjs/plugin/timezone'));
dayjs.extend(require('dayjs/plugin/utc'));
dayjs.locale('ja');
dayjs.tz.setDefault('Asia/Tokyo');

// feed-info-list.ts から mediatype を取得
// esbuild-register を有効にしてTypeScriptファイルを読み込む
let FEED_INFO_LIST;
try {
  // esbuild-register が有効な場合、TypeScriptファイルを読み込める
  require('esbuild-register');
  FEED_INFO_LIST = require('../../resources/feed-info-list').FEED_INFO_LIST;
} catch (error) {
  console.error('[blogFeeds] error loading feed-info-list.ts', error);
  // TypeScriptファイルが読み込めない場合は、直接データを定義
  // feed-info-list.ts のデータを再現
  const createFeedInfoList = (feedInfoTuples) => {
    const feedInfoList = [];
    for (const [label, url, baseUrl, mediatype] of feedInfoTuples) {
      feedInfoList.push({ label, url, baseUrl, mediatype });
    }
    return feedInfoList;
  };
  FEED_INFO_LIST = createFeedInfoList([
    ['Cybozu Vietnam Tech Sharing', 'https://tech.cybozu.vn/rss.xml', 'https://tech.cybozu.vn', 'blog'],
    ['Kintone Engineering Blog', 'https://blog.kintone.io/feed', 'https://blog.kintone.io/', 'blog'],
    ['サイボウズ Developer Concourse', 'https://note.com/cybozu_dev_px/m/m000a1ff77a6b/rss', 'https://note.com/cybozu_dev_px/m/m000a1ff77a6b', 'blog'],
    ['サイボウズ Inside Out', 'https://blog.cybozu.io/feed', 'https://blog.cybozu.io/', 'blog'],
    ['サイボウズ Necoチーム', 'https://zenn.dev/p/cybozu_neco/feed', 'https://zenn.dev/p/cybozu_neco', 'blog'],
    ['サイボウズ PeopleExperienceチーム', 'https://note.com/cybozu_dev_px/m/me5cfe2c532ef/rss', 'https://note.com/cybozu_dev_px/m/me5cfe2c532ef', 'blog'],
    ['サイボウズ Product Design', 'https://note.com/cybozu_design/m/mc12622f890cf/rss', 'https://note.com/cybozu_design/m/mc12622f890cf', 'blog'],
    ['サイボウズ PSIRT', 'https://zenn.dev/p/cybozu_psirt/feed', 'https://zenn.dev/p/cybozu_psirt', 'blog'],
    ['サイボウズ データチーム', 'https://zenn.dev/p/cybozu_data/feed', 'https://zenn.dev/p/cybozu_data', 'blog'],
    ['サイボウズ 生産性向上チーム', 'https://zenn.dev/p/cybozu_ept/feed', 'https://zenn.dev/p/cybozu_ept', 'blog'],
    ['サイボウズ フロントエンド', 'https://zenn.dev/p/cybozu_frontend/feed', 'https://zenn.dev/p/cybozu_frontend', 'blog'],
    ['サイボウズ セキュリティ室', 'https://note.com/security_cybozu/rss', 'https://note.com/security_cybozu', 'blog'],
    ['サイボウズ コネクト支援チーム', 'https://note.com/cybozutech/m/mc0c086e78c4f/rss', 'https://note.com/cybozutech/m/mc0c086e78c4f', 'blog'],
    ['サイボウズ 流氷自由帳', 'https://note.com/cybozutech/m/m9707f4c496e6/rss', 'https://note.com/cybozutech/m/m9707f4c496e6', 'blog'],
    ['サイボウズ フロントエンド通信', 'https://anchor.fm/s/ec10d0c8/podcast/rss', 'https://podcasters.spotify.com/pod/show/cybozu-frontend', 'podcast'],
    ['Cybozu Design Podcast', 'https://feed.podbean.com/cybozudesign/feed.xml', 'https://cybozudesign.podbean.com', 'podcast'],
    ['流氷交差点', 'https://feeds.soundcloud.com/users/soundcloud:users:970362685/sounds.rss', 'https://soundcloud.com/cybozutech', 'podcast'],
  ]);
}


// baseUrl から mediatype を取得するマップを作成
const feedUrlToMediatypeMap = new Map();
for (const feedInfo of FEED_INFO_LIST) {
  feedUrlToMediatypeMap.set(feedInfo.baseUrl, feedInfo.mediatype);
}

module.exports = async () => {
  let blogFeeds = JSON.parse(await fs.readFile(path.join(__dirname, '../blog-feeds/blog-feeds.json')));

  // データ調整
  for (const blogFeed of blogFeeds) {
    let lastUpdated = blogFeed.items[0]?.isoDate;

    if (lastUpdated) {
      blogFeed.lastUpdated = lastUpdated;
      blogFeed.diffLastUpdatedDateForHuman = dayjs().to(blogFeed.lastUpdated);
      blogFeed.lastUpdatedForHuman = dayjs(blogFeed.lastUpdated).tz().format('YYYY-MM-DD HH:mm:ss');
      blogFeed.lastUpdatedIso = new Date(blogFeed.lastUpdated).toISOString();
    }

    // mediatype を追加
    const mediatype = feedUrlToMediatypeMap.get(blogFeed.link);
    if (!mediatype) {
      // デバッグ用: URLが見つからない場合にログ出力
      console.warn(`[blogFeeds] mediatype not found for URL: ${blogFeed.link}`);
    }
    blogFeed.mediatype = mediatype || 'blog';

    for (const feedItem of blogFeed.items) {
      feedItem.diffDateForHuman = dayjs().to(feedItem.isoDate);
      feedItem.pubDateForHuman = dayjs(feedItem.isoDate).format('YYYY-MM-DD HH:mm:ss');
    }
  }

  // ソート
  blogFeeds = blogFeeds.sort((a, b) => {
    if (!a.lastUpdated) {
      return 1;
    }
    if (!b.lastUpdated) {
      return -1;
    }

    return -1 * a.lastUpdated.localeCompare(b.lastUpdated);
  });

  return blogFeeds;
};
