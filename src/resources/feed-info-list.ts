import { existsUrl } from '../feed/utils/common-util';

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

const getYear = () => new Date().getFullYear();

/** 今年のBLOG FESのRSSフィードURL */
const getBlogFesRssUrl = (year: number) => `https://summer-blog-fes.cybozu.io/${year}/rss.xml` as ValidUrl;

/** 今年のBLOG FESのbaseUrl */
const getBlogFesBaseUrl = (year: number) => `https://summer-blog-fes.cybozu.io/${year}` as ValidUrl;

/**
 * CYBOZU SUMMER BLOG FESのRSSフィードURLとbaseUrlを解決する。
 * 今年・前年の順に存在確認し、どちらも存在しなければnullを返す。
 */
const resolveBlogFesUrls = async (): Promise<{ url: ValidUrl; baseUrl: ValidUrl } | null> => {
  const thisYear = getYear();
  for (const year of [thisYear, thisYear - 1]) {
    const rssUrl = getBlogFesRssUrl(year);
    if (await existsUrl(rssUrl)) {
      return { url: rssUrl, baseUrl: getBlogFesBaseUrl(year) };
    }
  }
  return null;
};

/**
 * フィード情報一覧を取得する（BLOG FESはRSSが存在する年のURLに解決され、存在しない場合はスキップ）
 */
export const getFeedInfoList = async (): Promise<FeedInfo[]> => {
  const blogFes = await resolveBlogFesUrls();
  const blogFesTuples: FeedInfoTuple[] = blogFes
    ? [['CYBOZU SUMMER BLOG FES', blogFes.url, blogFes.baseUrl, 'blog']]
    : [];
  return createFeedInfoList([
    ...blogFesTuples,
    ['Cybozu Vietnam Tech Sharing', 'https://tech.cybozu.vn/rss.xml', 'https://tech.cybozu.vn', 'blog'],
    ['Kintone Engineering Blog', 'https://blog.kintone.io/feed', 'https://blog.kintone.io/', 'blog'],
    [
      'サイボウズ Developer Concourse',
      'https://note.com/cybozu_dev_px/m/m000a1ff77a6b/rss',
      'https://note.com/cybozu_dev_px/m/m000a1ff77a6b',
      'blog',
    ],
    ['サイボウズ Inside Out', 'https://blog.cybozu.io/feed', 'https://blog.cybozu.io/', 'blog'],
    ['サイボウズ Necoチーム', 'https://zenn.dev/p/cybozu_neco/feed', 'https://zenn.dev/p/cybozu_neco', 'blog'],
    [
      'サイボウズ PeopleExperienceチーム',
      'https://note.com/cybozu_dev_px/m/me5cfe2c532ef/rss',
      'https://note.com/cybozu_dev_px/m/me5cfe2c532ef',
      'blog',
    ],
    [
      'サイボウズ Product Design',
      'https://note.com/cybozu_design/m/mc12622f890cf/rss',
      'https://note.com/cybozu_design/m/mc12622f890cf',
      'blog',
    ],
    ['サイボウズ PSIRT', 'https://zenn.dev/p/cybozu_psirt/feed', 'https://zenn.dev/p/cybozu_psirt', 'blog'],
    ['サイボウズ データチーム', 'https://zenn.dev/p/cybozu_data/feed', 'https://zenn.dev/p/cybozu_data', 'blog'],
    ['サイボウズ 生産性向上チーム', 'https://zenn.dev/p/cybozu_ept/feed', 'https://zenn.dev/p/cybozu_ept', 'blog'],
    [
      'サイボウズ フロントエンド',
      'https://zenn.dev/p/cybozu_frontend/feed',
      'https://zenn.dev/p/cybozu_frontend',
      'blog',
    ],
    ['サイボウズ セキュリティ室', 'https://note.com/security_cybozu/rss', 'https://note.com/security_cybozu', 'blog'],
    [
      'サイボウズ コネクト支援チーム',
      'https://note.com/cybozutech/m/mc0c086e78c4f/rss',
      'https://note.com/cybozutech/m/mc0c086e78c4f',
      'blog',
    ],
    [
      'サイボウズ Tech Media Platformチーム',
      'https://note.com/cybozutech/m/m459547f65fe8/rss',
      'https://note.com/cybozutech/m/m459547f65fe8',
      'blog',
    ],
    [
      'サイボウズ 流氷自由帳',
      'https://note.com/cybozutech/m/m9707f4c496e6/rss',
      'https://note.com/cybozutech/m/m9707f4c496e6',
      'blog',
    ],
    [
      'サイボウズ フロントエンド通信',
      'https://anchor.fm/s/ec10d0c8/podcast/rss',
      'https://creators.spotify.com/pod/profile/cybozu-frontend',
      'podcast',
    ],
    [
      'Cybozu Design Podcast',
      'https://feed.podbean.com/cybozudesign/feed.xml',
      'https://cybozudesign.podbean.com',
      'podcast',
    ],
    [
      '流氷交差点',
      'https://feeds.soundcloud.com/users/soundcloud:users:970362685/sounds.rss',
      'https://soundcloud.com/cybozutech',
      'podcast',
    ],
  ]);
};

/**
 * フィード情報一覧（同期用・BLOG FESは当年URL）。
 * 取得処理では getFeedInfoList() を使うこと。
 */
// prettier-ignore
export const FEED_INFO_LIST: FeedInfo[] = createFeedInfoList([
  ['CYBOZU SUMMER BLOG FES', getBlogFesRssUrl(getYear()), getBlogFesBaseUrl(getYear()), 'blog'],
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
  ['サイボウズ Tech Media Platformチーム', 'https://note.com/cybozutech/m/m459547f65fe8/rss', 'https://note.com/cybozutech/m/m459547f65fe8', 'blog'],
  // 音声コンテンツ
  ['サイボウズ フロントエンド通信', 'https://anchor.fm/s/ec10d0c8/podcast/rss', 'https://creators.spotify.com/pod/profile/cybozu-frontend', 'podcast'],
  ['Cybozu Design Podcast', 'https://feed.podbean.com/cybozudesign/feed.xml', 'https://cybozudesign.podbean.com', 'podcast'],
  ['流氷交差点', 'https://feeds.soundcloud.com/users/soundcloud:users:970362685/sounds.rss', 'https://soundcloud.com/cybozutech', 'podcast'],
 ]);

/**
 * その他候補
 *
 * CYBOZU SUMMER BLOG FES'YYのRSSフィードは追加済。
 * 開催年ごとに更新するのではなく、開催年をFeed URLとBase URLに適用して設定している。
 */
