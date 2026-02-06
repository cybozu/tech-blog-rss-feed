import { getFeedInfoList, FeedInfo } from '../src/resources/feed-info-list';
import { FeedCrawler } from '../src/feed/utils/feed-crawler';
import { describe, it, expect } from 'vitest';
import { exponentialBackoff } from '../src/feed/utils/common-util';
import RssParser from 'rss-parser';

const rssParser = new RssParser({
  maxRedirects: 0,
});

// 設定のテスト（getFeedInfoList は存在する年のBLOG FES URLに解決済み）
describe('getFeedInfoList', () => {
  it('返すフィード一覧の設定が正しい', async () => {
    const feedInfoList = await getFeedInfoList();
    expect(() => {
      FeedCrawler.validateFeedInfoList(feedInfoList);
    }).not.toThrow();
  });
});

// フィード取得テスト（BLOG FESは getFeedInfoList で解決済みのURLを使用）
describe('フィードが取得可能', () => {
  it(
    '各フィードが取得可能',
    async () => {
      const feedInfoList = await getFeedInfoList();
      await Promise.all(
        feedInfoList.map(async (feedInfo: FeedInfo) => {
          const fetchFeed = async (url: string) => {
            return exponentialBackoff(async () => rssParser.parseURL(url));
          };
          const feed = await fetchFeed(feedInfo.url);
          expect(feed.items.length).toBeGreaterThanOrEqual(0);
        }),
      );
    },
    180 * 1000,
  );
});
