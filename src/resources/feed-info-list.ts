type ValidUrl = `${'http' | 'https'}://${string}.${string}`;

type FeedInfoTuple = [label: string, url: ValidUrl];

export interface FeedInfo {
  label: string;
  url: ValidUrl;
}

const createFeedInfoList = (feedInfoTuples: FeedInfoTuple[]) => {
  const feedInfoList: FeedInfo[] = [];

  for (const [label, url] of feedInfoTuples) {
    feedInfoList.push({
      label,
      url,
    });
  }

  return feedInfoList;
};

/**
 * フィード情報一覧。アルファベット順
 * ラベルが被るとバリデーションエラーになるので別のラベルを設定してください
 */
// prettier-ignore
export const FEED_INFO_LIST: FeedInfo[] = createFeedInfoList([
  // ['企業名・製品名など', 'RSS/AtomフィードのURL'],
  ['サイボウズ Necoチーム', 'https://zenn.dev/p/cybozu_neco/feed'],
  ['サイボウズ データチーム', 'https://zenn.dev/p/cybozu_data/feed'],
  ['サイボウズ フロントエンド', 'https://zenn.dev/p/cybozu_frontend/feed'],
  ['サイボウズ 生産性向上チーム', 'https://zenn.dev/p/cybozu_ept/feed'],
  ['サイボウズ Inside Out', 'https://blog.cybozu.io/feed'],
  ['サイボウズ Product Design', 'https://note.com/cybozu_design/m/mc12622f890cf/rss'],
  ['サイボウズ セキュリティ室', 'https://note.com/security_cybozu/rss'],
  ['サイボウズ PeopleExperienceチーム', 'https://note.com/cybozu_dev_px/m/me5cfe2c532ef/rss'],
  ['サイボウズ Developer Concourse', 'https://note.com/cybozu_dev_px/m/m000a1ff77a6b/rss'],
  ['サイボウズ コネクト支援チーム', 'https://note.com/cybozutech/m/mc0c086e78c4f/rss'],
  ['Kintone Engineering Blog', 'https://blog.kintone.io/feed'],
  ['Cybozu Vietnam Tech Sharing', 'https://tech.cybozu.vn/rss.xml'],
  ['サイボウズ 流氷自由帳', 'https://note.com/cybozutech/m/m9707f4c496e6/rss'],
  ['サイボウズ PSIRT', 'https://zenn.dev/p/cybozu_psirt/feed'],
  // 音声コンテンツ
  ['サイボウズ フロントエンド通信', 'https://anchor.fm/s/ec10d0c8/podcast/rss'],
  ['Cybozu Design Podcast', 'https://feed.podbean.com/cybozudesign/feed.xml'],
  ['流氷交差点', 'https://feeds.soundcloud.com/users/soundcloud:users:970362685/sounds.rss'],
 ]);

/**
 * その他候補
 *
 * RSSがなくなった。復活したら入れたい
 * https://blog.gmo.media/
 *
 * リニューアルされてフィードが消えたのでしばらくしたら確認
 * ['DMM', 'https://inside.dmm.com/feed'],
 * ['divx', 'https://engineering.divx.co.jp/feed'],
 *
 * 技術のカテゴリ切られてないので悩ましい
 * ['Ragate', 'https://www.ragate.co.jp/blog/'],
 *
 * 403 Forbidden
 * ['Cygames', 'https://tech.cygames.co.jp/feed/'],
 * ['BRANU', 'https://tech.branu.jp/feed'],
 * ['i-plug', 'https://itbl.hatenablog.com/feed'],
 * ['UUUM', 'https://system.blog.uuum.jp/feed'],
 * ['CROOZ SHOPLIST', encodeURI('https://crooz.co.jp/recruit_group/blog/category/テックブログ/feed/')],
 * ['マクロミル', 'https://techblog.macromill.com/feed'],
 *
 * 404
 * ['リクルートデータ', 'https://blog.recruit.co.jp/data/index.json'],
 * ['Findy Teams', 'https://engineering-org.findy-teams.com/feed.xml'],
 * ['KINTOテクノロジーズ', 'https://blog.kinto-technologies.com/feed.xml'],
 * ['テリロジー', 'https://terilogy-tech.hatenablog.com/feed'],
 * ['ヘイ データチーム', 'https://data.hey.jp/feed'],
 * ['FLINTERS', 'https://labs.septeni.co.jp/feed'],
 * ['crispy', 'https://blog.crispy-inc.com/feed'],
 * ['スタートアップテクノロジー', 'https://startup-technology.com/feed'],
 * ['JBCC', 'https://jbcc-tech.hatenablog.com/feed'],
 * ['UnReact', 'https://zenn.dev/unreact/feed'],
 * ['Zeals', 'https://tech.zeals.co.jp/feed'],
 * ['hokan', 'https://medium.com/feed/@hokan_dev'],
 *
 * unable to verify the first certificate
 * ['エムアールピー', 'https://mrp-net.co.jp/tech_blog/feed'],
 *
 * certificate has expired
 * ['キャスレーコンサルティング', 'https://www.casleyconsulting.co.jp/blog/engineer/feed/'],
 *
 * pubDate なし
 * ['リクルート', 'https://engineers.recruit-jinji.jp/techblog/feed/']
 *
 * 削除された？
 * ['NAXA', 'https://blog.naxa.co.jp/feed'],
 * ['Reigle', 'https://www.reigle.info/feed'],
 * ['HiTTO', 'https://product-blog.hitto.co.jp/feed'],
 * ['グッドワークス', 'https://zenn.dev/goodworks/feed'],
 * ['Croooober', 'https://tech.croooober.co.jp/feed'],
 * ['トライステージ', 'https://blog.ddm.tri-stage.jp/feed/'],
 * ['ヒュープロ', 'https://hupro-techblog.hatenablog.com/feed'],
 * ['ファンコミュニケーションズ', 'https://tech-blog.fancs.com/feed'],
 * ['HiCustomer', 'https://tech.hicustomer.jp/index.xml'],
 * ['シタテル', 'https://tech-blog.sitateru.com/feeds/posts/default'],
 * ['Salesforce', 'https://developer.salesforce.com/jpblogs/feed/'],
 * ['ホクソエム', 'https://blog.hoxo-m.com/feed'],
 *
 * フィードなし。スクレイピング？
 * https://lab.mo-t.com/blog
 * https://tech-blog.sweeep.ai/
 * https://minedia-engineer-hub-minedia.vercel.app/
 * https://segaxd.co.jp/news/?category=blog
 * https://tech.smartshopping.co.jp/
 * https://olaris.jp/category/technology
 * https://licensecounter.jp/engineer-voice/blog/
 * https://tech.ilovex.co.jp/
 * https://developer.nvidia.com/ja-jp/blog/
 * https://www.vision-c.co.jp/engineerblog
 * https://www.cresco.co.jp/blog/
 * https://blog.genda.jp/creators/
 * https://lab.hokadoko.com/news/RTEPiK54
 * https://subthread.co.jp/blog/
 * ['QualiArts', 'https://technote.qualiarts.jp/rss.xml'],
 * https://securesky-plus.com/engineerblog/
 * https://www.monolithsoft.co.jp/techblog/
 *
 * 日本語以外
 * https://medium.com/feed/mcdonalds-technical-blog
 * https://netflixtechblog.com/
 * https://discord.com/blog/
 * https://www.twilio.com/blog
 * https://engineering.monstar-lab.com/en/
 *
 * TODO: スライド系も追加？
 * https://speakerdeck.com/line_developers
 */
