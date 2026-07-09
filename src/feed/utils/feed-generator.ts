import { Feed, FeedOptions } from 'feed';
import { CustomRssParserItem, FeedItemHatenaCountMap, OgObjectMap } from './feed-crawler';
import { ThumbnailUrlMap } from './feed-image-precacher';
import { escapeTextForXml, textToMd5Hash, textTruncate } from './common-util';
import { logger } from './logger';
import * as constants from '../../common/constants';

export interface FeedDistributionSet {
  atom: string;
  rss: string;
  json: string;
}

export interface GenerateFeedResult {
  aggregatedFeed: Feed;
  feedDistributionSet: FeedDistributionSet;
}

export class FeedGenerator {
  public generateFeeds(
    feedItems: CustomRssParserItem[],
    feedItemOgObjectMap: OgObjectMap,
    allFeedItemHatenaCountMap: FeedItemHatenaCountMap,
    maxFeedDescriptionLength: number,
    maxFeedContentLength: number,
    thumbnailUrlMap: ThumbnailUrlMap = new Map(),
  ): GenerateFeedResult {
    const aggregatedFeed = this.generateAggregatedFeed(
      feedItems,
      feedItemOgObjectMap,
      allFeedItemHatenaCountMap,
      maxFeedDescriptionLength,
      maxFeedContentLength,
      thumbnailUrlMap,
    );

    return {
      aggregatedFeed,
      feedDistributionSet: {
        // 出力されているXMLで & がエスケープされていないのでパッチ対応
        atom: escapeTextForXml(aggregatedFeed.atom1()),
        rss: escapeTextForXml(aggregatedFeed.rss2()),
        json: aggregatedFeed.json1(),
      },
    };
  }

  private generateAggregatedFeed(
    feedItems: CustomRssParserItem[],
    feedItemOgObjectMap: OgObjectMap,
    allFeedItemHatenaCountMap: FeedItemHatenaCountMap,
    maxFeedDescriptionLength: number,
    maxFeedContentLength: number,
    thumbnailUrlMap: ThumbnailUrlMap,
  ): Feed {
    const outputFeed = new Feed({
      title: constants.feedTitle,
      description: constants.feedDescription,
      language: constants.feedLanguage,
      id: `${constants.siteUrlStem}/`,
      link: `${constants.siteUrlStem}/`,
      feedLinks: constants.feedUrls,
      image: `${constants.siteUrlStem}/images/icon.png`,
      favicon: `${constants.siteUrlStem}/images/favicon.ico`,
      copyright: constants.feedCopyright,
      generator: constants.feedGenerator,
      updated: new Date(),
    } as FeedOptions);

    for (const feedItem of feedItems) {
      logger.info('[create-feed-item]', feedItem.isoDate, feedItem.title);

      const feedItemId = feedItem.guid || feedItem.link;
      const feedItemContent = (feedItem.summary || feedItem.contentSnippet || '').replace(/(\n|\t+|\s+)/g, ' ');

      const ogObject = feedItemOgObjectMap.get(feedItem.link);
      // 配列担っているが2つ目以降を使う理由もないので0を使う
      const ogImage = ogObject?.customOgImage;
      const feedThumbnailUrl = ogImage?.url ? thumbnailUrlMap.get(ogImage.url) : undefined;
      // cross-origin-resource-policy: same-originでブロックされるOG画像URLの代わりに
      // キャッシュ済みサムネイルURLを使用する
      const imageForFeed = feedThumbnailUrl
        ? { url: feedThumbnailUrl, type: 'jpeg' }
        : ogImage && ogImage.url
          ? ogImage
          : undefined;

      // 日付がないものは入れない
      if (!feedItem.isoDate) {
        logger.warn('[feed-item] フィードの日付がありません。', feedItem.isoDate, feedItem.title);
        continue;
      }

      outputFeed.addItem({
        id: feedItemId,
        guid: feedItemId,
        // 「記事タイトル | ブログ名」の形にする。タイトルだけでどの企業かわかるように
        title: `${feedItem.title} | ${feedItem.blogTitle}`,
        description: textTruncate(feedItemContent, maxFeedDescriptionLength),
        content: textTruncate(feedItemContent, maxFeedContentLength),
        link: feedItem.link,
        category: (feedItem.categories || []).map((category) => {
          return {
            name: category,
          };
        }),
        author:
          feedItem.creator && typeof feedItem.creator === 'string'
            ? [
                {
                  name: feedItem.creator,
                },
              ]
            : undefined,
        image: imageForFeed,
        published: new Date(feedItem.isoDate),
        date: new Date(feedItem.isoDate),
        extensions: [
          {
            name: '_custom',
            objects: {
              hatenaCount: allFeedItemHatenaCountMap.get(feedItem.link) || 0,
              originalTitle: feedItem.title,
              blogTitle: feedItem.blogTitle,
              blogLink: feedItem.blogLink,
              blogLinkMd5Hash: textToMd5Hash(feedItem.blogLink),
              favicon: ogObject?.favicon,
              feedThumbnailUrl: feedThumbnailUrl || '',
            },
          },
        ],
      });
    }

    logger.info('[create-feed] finished');

    return outputFeed;
  }
}
