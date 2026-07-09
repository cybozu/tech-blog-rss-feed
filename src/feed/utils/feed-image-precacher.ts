import { PromisePool } from '@supercharge/promise-pool';
import { logger } from './logger';
import { imageCacheOptions } from '../../common/eleventy-cache-option';
import { to } from 'await-to-js';
import { CustomRssParserFeed, CustomRssParserItem, OgObjectMap } from './feed-crawler';
import EleventyImage from '@11ty/eleventy-img';
import constants from '../../common/constants';

const THUMBNAIL_OUTPUT_DIR = 'public/images/feed-thumbnails';
const THUMBNAIL_URL_PATH = `${constants.siteUrlStem}/images/feed-thumbnails/`;

export type ThumbnailUrlMap = Map<string, string>;

export class ImagePrecacher {
  public async fetchAndCacheFeedImages(
    feeds: CustomRssParserFeed[],
    feedItems: CustomRssParserItem[],
    ogObjectMap: OgObjectMap,
    concurrency: number,
  ): Promise<ThumbnailUrlMap> {
    const thumbnailUrlMap: ThumbnailUrlMap = new Map();
    let ogImageUrls: string[] = [];

    for (const feed of feeds) {
      const url = ogObjectMap.get(feed.link)?.customOgImage?.url;
      if (url) ogImageUrls.push(url);
    }

    for (const feedItem of feedItems) {
      const url = ogObjectMap.get(feedItem.link)?.customOgImage?.url;
      if (url) ogImageUrls.push(url);
    }

    // 重複排除
    ogImageUrls = [...new Set(ogImageUrls)];

    const ogImageUrlsLength = ogImageUrls.length;
    let fetchProcessCounter = 1;

    await PromisePool.for(ogImageUrls)
      .withConcurrency(concurrency)
      .process(async (ogImageUrl) => {
        const [error, metadata] = await to<EleventyImage.Metadata>(
          EleventyImage(ogImageUrl, {
            widths: [150, 450],
            formats: ['webp', 'jpeg'],
            outputDir: THUMBNAIL_OUTPUT_DIR,
            urlPath: THUMBNAIL_URL_PATH,
            cacheOptions: imageCacheOptions,
            sharpWebpOptions: { quality: 50 },
            sharpJpegOptions: { quality: 70 },
          }),
        );
        if (error) {
          logger.error('[cache-og-image] error', `${fetchProcessCounter++}/${ogImageUrlsLength}`, ogImageUrl);
          logger.trace(error);
          return;
        }

        // 最大サイズのjpegをfeed用サムネイルURLとして登録
        const jpegImages = metadata.jpeg;
        const largestJpeg = jpegImages?.[jpegImages.length - 1];
        if (largestJpeg?.url) {
          thumbnailUrlMap.set(ogImageUrl, largestJpeg.url);
        }
        logger.info('[cache-og-image] fetched', `${fetchProcessCounter++}/${ogImageUrlsLength}`, ogImageUrl);
      });

    logger.info('[cache-og-image] finished');

    return thumbnailUrlMap;
  }
}
