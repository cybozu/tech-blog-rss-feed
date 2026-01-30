type ValidUrl = `${'http' | 'https'}://${string}.${string}`;

type FeedInfoTuple = [label: string, url: ValidUrl, baseUrl: ValidUrl, mediatype: string];

export interface FeedInfo {
  label: string;
  url: ValidUrl;
  baseUrl: ValidUrl;
  mediatype: string;
}

const createFeedInfoList = (feedInfoTuples: FeedInfoTuple[]) => {
  const feedInfoList: FeedInfo[] = [];

  for (const [label, url, baseUrl, mediatype] of feedInfoTuples) {
    feedInfoList.push({
      label,
      url,
      baseUrl,
      mediatype,
    });
  }

  return feedInfoList;
};

/**
 * フィード情報一覧。アルファベット順
 * ラベルが被るとバリデーションエラーになるので別のラベルを設定してください
 * ブログリストでブログと音声コンテンツを分けて表示するために、feedとの比較用のbaseUrlとメディアタイプ（blog, podcast のみ）を設定してください
 */
// prettier-ignore
export const FEED_INFO_LIST: FeedInfo[] = createFeedInfoList([
  // ['企業名・製品名など', 'RSS/AtomフィードのURL', feedとの比較用のbaseUrl, 'メディアタイプ（blog, podcast)],
  ['Cybozu Vietnam Tech Sharing', 'https://tech.cybozu.vn/rss.xml','https://tech.cybozu.vn', 'blog'],
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
  // 音声コンテンツ
  ['サイボウズ フロントエンド通信', 'https://anchor.fm/s/ec10d0c8/podcast/rss', 'https://podcasters.spotify.com/pod/show/cybozu-frontend', 'podcast'],
  ['Cybozu Design Podcast', 'https://feed.podbean.com/cybozudesign/feed.xml', 'https://cybozudesign.podbean.com', 'podcast'],
  ['流氷交差点', 'https://feeds.soundcloud.com/users/soundcloud:users:970362685/sounds.rss', 'https://soundcloud.com/cybozutech', 'podcast'],
 ]);

/**
 * その他候補
 *
 * CYBOZU SUMMER BLOG FES'25のRSSフィードは入れていない。
 * 2026年開催時に、以下の対応をしたい
 * - 既存のfeedと重複したらFESの記事を優先してマージ
 * - CYBOZU SUMMER BLOG FES'26用のタグ追加（どのフィールドが使えるか確認も必要）
 * CYBOZU SUMMER BLOG FES'25のRSSフィード
 * https://cybozu.github.io/summer-blog-fes-2025/rss.xml
 */
