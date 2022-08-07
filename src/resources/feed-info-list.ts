export type FeedInfo = {
  label: string;
  url: string;
};

const createFeedInfoList = (feedInfoTuples: [label: string, url: string][]) => {
  const feedInfoList: FeedInfo[] = [];

  for (const [label, url] of feedInfoTuples) {
    feedInfoList.push({ label, url });
  }

  return feedInfoList;
};

// フィード情報一覧。アルファベット順
export const FEED_INFO_LIST: FeedInfo[] = createFeedInfoList([
  // ['企業名・製品名など', 'RSS/AtomフィードのURL'],
  ['10ANTZ', 'https://developers.10antz.co.jp/feed'],
  ['10X', 'https://product.10x.co.jp/feed'],
  ['207', 'https://tech.207-inc.com/feed'],
  ['ABEJA', 'https://tech-blog.abeja.asia/feed'],
  ['ACES', 'https://tech.acesinc.co.jp/feed'],
  ['AI inside', 'https://note.com/aiinside_tech/rss'],
  ['AIREV', 'https://zenn.dev/airev/feed'],
  ['ANDPAD', 'https://tech.andpad.co.jp/feed'],
  ['Acroquest Technology', 'https://acro-engineer.hatenablog.com/feed'],
  ['Adways', 'https://blog.engineer.adways.net/feed'],
  ['Aiming', 'https://developer.aiming-inc.com/feed'],
  ['AppBrew', 'https://tech.appbrew.io/feed'],
  ['Assured', 'https://tech.assured.jp/feed'],
  ['BASE', 'https://devblog.thebase.in/feed'],
  ['BEENOS', 'https://zenn.dev/beenos/feed'],
  ['BFT名古屋', 'https://bftnagoya.hateblo.jp/feed'],
  ['BIGLOBE', 'https://style.biglobe.co.jp/feed/category/TechBlog'],
  ['BRANU', 'https://tech.branu.jp/feed'],
  ['Babel', 'https://dev.babel.jp/feed'],
  ['Baseconnect', 'https://techblog.baseconnect.in/feed'],
  ['Basicinc', 'https://tech.basicinc.jp/feed'],
  ['Beatrust', 'https://tech.beatrust.com/feed'],
  ['BrainPad', 'https://blog.brainpad.co.jp/feed'],
  ['CADDi', 'https://caddi.tech/feed'],
  ['CARTA', 'https://techblog.cartaholdings.co.jp/feed'],
  ['CCCマーケティング', 'https://techblog.cccmk.co.jp/feed'],
  ['CData Software', 'https://www.cdatablog.jp/feed'],
  ['CHUGAI DIGITAL', 'https://note.chugai-pharm.co.jp/m/mdaeaf24de472/rss'],
  ['COOSY', 'https://coosy.co.jp/blog/category/system-develop/feed/'],
  ['CROOZ SHOPLIST', 'https://crooz.shoplist.com/blog-category/technology/feed'],
  ['CROOZ', 'https://croozblog.hatenablog.com/feed'],
  ['CULTA', 'https://techblog.culta.jp/feed'],
  ['CauchyE', 'https://zenn.dev/cauchye/feed'],
  ['Cerevo', 'https://tech-blog.cerevo.com/feed'],
  ['Chatwork', 'https://creators-note.chatwork.com/feed'],
  ['Classi', 'https://tech.classi.jp/feed'],
  ['Cluster', 'https://note.com/cluster_official/m/m2ad487750b4e/rss'],
  ['Colorful Palette', 'https://media.colorfulpalette.co.jp/m/m753f507dae79/rss'],
  ['ContractS', 'https://tech.contracts.co.jp/feed'],
  ['Croooober', 'https://tech.croooober.co.jp/feed'],
  ['CyberZ', 'https://note.com/cyberz_cto/rss'],
  ['DATAFLUCT', 'https://note.datafluct.jp/m/m61a989a0a473/rss'],
  ['DMM', 'https://inside.dmm.com/feed'],
  ['DeNA SWET', 'https://swet.dena.com/feed'],
  ['DeNA', 'https://engineering.dena.com/blog/index.xml'],
  ['Dentsu Digital', 'https://note.com/dd_techblog/rss'],
  ['Diverse', 'https://developer.diverse-inc.com/feed'],
  ['ELYZA', 'https://elyza-inc.hatenablog.com/feed'],
  ['ENECHANGE', 'https://tech.enechange.co.jp/feed'],
  ['Emotion Tech', 'https://tech.emotion-tech.co.jp/feed'],
  ['Eureka', 'https://medium.com/feed/eureka-engineering'],
  ['FLINTERS', 'https://labs.septeni.co.jp/feed'],
  ['FiNC', 'https://medium.com/feed/finc-engineering'],
  ['Filot', 'https://filot-nextd2.hatenablog.com/feed'],
  ['Finatext', 'https://medium.com/feed/finatext'],
  ['Findy', 'https://findy-code.io/engineer-lab/feed/atom'],
  ['Flatt Security', 'https://blog.flatt.tech/feed'],
  ['Fusic', 'https://tech.fusic.co.jp/feed'],
  ['G-gen', 'https://blog.g-gen.co.jp/feed'],
  ['GA TECHNOLOGIES', 'https://tech.ga-tech.co.jp/feed'],
  ['GMOアドパートナーズ', 'https://techblog.gmo-ap.jp/feed/'],
  ['GMOインターネット', 'https://developers.gmo.jp/feed/'],
  ['GMOグローバルサイン・ホールディングス', 'https://tech.gmogshd.com/feed'],
  ['GMOペパボ', 'https://tech.pepabo.com/feed.xml'],
  ['GMOメディア', 'https://blog.gmo.media/feed/atom/'],
  ['GMOリサーチ', 'https://gmor-sys.com/feed'],
  ['GREE', 'https://labs.gree.jp/blog/feed/'],
  ['GRIPHONE', 'https://tech.griphone.co.jp/feed/'],
  ['Game Server Services', 'https://gs2.hatenablog.com/feed'],
  ['GameWith', 'https://tech.gamewith.co.jp/feed'],
  ['Goodpatch', 'https://goodpatch-tech.hatenablog.com/feed'],
  ['Google', 'https://developers-jp.googleblog.com/atom.xml'],
  ['GreenSnap', 'https://greensnap-tech.hatenablog.com/feed'],
  ['Grooves', 'https://tech.grooves.com/feed'],
  ['Gunosy', 'https://tech.gunosy.io/feed'],
  ['Gunosyデータ分析', 'https://data.gunosy.io/feed'],
  ['HERP', 'https://tech-hub.herp.co.jp/feed.xml'],
  ['HRBrain', 'https://times.hrbrain.co.jp/feed'],
  ['Hajimari', 'https://tech.hajimari.inc/feed'],
  ['HiCustomer', 'https://tech.hicustomer.jp/index.xml'],
  ['HiTTO', 'https://product-blog.hitto.co.jp/feed'],
  ['HiTalent', 'https://medium.com/feed/@hitalent'],
  ['HireRoo', 'https://tech.hireroo.io/feed'],
  ['IDCフロンティア', 'https://blog.idcf.jp/feed'],
  ['IIJ', 'https://eng-blog.iij.ad.jp/feed'],
  ['JBCC', 'https://jbcc-tech.hatenablog.com/feed'],
  ['JMDC', 'https://techblog.jmdc.co.jp/feed'],
  ['JTP', 'https://tech-blog.jtp.co.jp/feed'],
  ['JX通信社', 'https://tech.jxpress.net/feed'],
  ['KAIZEN PLATFORM', 'https://developer.kaizenplatform.com/feed'],
  ['KARAKURI', 'https://medium.com/feed/karakuri'],
  ['KDL', 'https://kdl-di.hatenablog.com/feed'],
  ['KLab DSAS', 'http://dsas.blog.klab.org/index.rdf'],
  ['KLab', 'https://www.klab.com/jp/assets/rss/rss_tech.xml'],
  ['Kyash', 'https://blog.kyash.co/feed'],
  ['LAPRAS', 'https://ai-lab.lapras.com/feed/'],
  ['LCL', 'https://techblog.lclco.com/feed'],
  ['LIFULL', 'https://www.lifull.blog/feed'],
  ['LINE', 'https://engineering.linecorp.com/ja/feed/'],
  ['LIVESENSE', 'https://made.livesense.co.jp/feed'],
  ['LayerX', 'https://tech.layerx.co.jp/feed'],
  ['Leaner', 'https://zenn.dev/leaner_tech/feed'],
  ['LegalForce', 'https://tech.legalforce.co.jp/feed'],
  ['Legoliss', 'https://blog.legoliss.co.jp/feed'],
  ['Libra Studio', 'https://tech.librastudio.co.jp/feed'],
  ['Liquid', 'https://tech.liquid.bio/feed'],
  ['Lisa Technologies', 'https://zenn.dev/lisatech/feed'],
  ['Luup', 'https://zenn.dev/luup/feed'],
  ['M&Aクラウド', 'https://tech.macloud.jp/feed'],
  ['MESON', 'https://zenn.dev/meson/feed'],
  ['MNTSQ', 'https://tech.mntsq.co.jp/feed'],
  ['MUGENUP', 'https://mugenup-tech.hatenadiary.com/feed'],
  ['Magic Moment', 'https://zenn.dev/magicmoment/feed'],
  ['MicroAd', 'https://developers.microad.co.jp/feed'],
  ['Mirrativ', 'https://tech.mirrativ.stream/feed'],
  ['Money Forward Kessai', 'https://tech.mfkessai.co.jp/index.xml'],
  ['N-Technologies', 'https://zenn.dev/n1nc/feed'],
  ['N.F.Laboratories', 'https://blog.nflabs.jp/feed'],
  ['NEMTUS', 'https://zenn.dev/nemtus/feed'],
  ['NHNテコラス', 'https://techblog.nhn-techorus.com/feed'],
  ['NRIネットコム', 'https://tech.nri-net.com/feed/category/Technology'],
  ['NTTコミュニケーションズ', 'https://engineers.ntt.com/feed'],
  ['NTTソフトウェアイノベーションセンタ ', 'https://medium.com/feed/nttlabs'],
  ['Nature', 'https://engineering.nature.global/feed'],
  ['NearMe', 'https://tech.nearme.jp/feed'],
  ['Nextat', 'https://nextat.co.jp/staff/index.rss'],
  ['Nota', 'https://blog.notainc.com/feed'],
  ['OLTA', 'https://techblog.olta.co.jp/feed'],
  ['OPEN8', 'https://open8tech.hatenablog.com/feed'],
  ['OPTiM', 'https://tech-blog.optim.co.jp/feed'],
  ['ORENDA', 'https://orenda.co.jp/blog/feed/'],
  ['Offers', 'https://zenn.dev/offers/feed'],
  ['Open Reach Tech', 'https://zenn.dev/openreachtech/feed'],
  ['OpenWork', 'https://techblog.openwork.co.jp/feed'],
  ['OptFit', 'https://zenn.dev/optfit/feed'],
  ['PHONE APPLI', 'https://phoneappli.net/recruit/blog/atom.xml'],
  ['PLAID', 'https://tech.plaid.co.jp/rss.xml'],
  ['POL', 'https://note.com/pollabbase/m/ma74382b91025/rss'],
  ['PR TIMES', 'https://developers.prtimes.jp/feed/'],
  ['Pentagon', 'https://blog.pentagon.tokyo/category/engineer/feed/'],
  ['Playground', 'https://tech.playground.style/feed/'],
  ['Polestar-ID', 'https://www.psid.co.jp/news/feed/'],
  ['Progate', 'https://tech.prog-8.com/feed'],
  ['QualiArts', 'https://technote.qualiarts.jp/rss.xml'],
  ['R&D', 'https://zenn.dev/randd/feed'],
  ['READYFOR', 'https://tech.readyfor.jp/feed'],
  ['RIT', 'https://rit-inc.hatenablog.com/feed'],
  ['ROBOT PAYMENT', 'https://tech.robotpayment.co.jp/feed'],
  ['ROXX', 'https://techblog.roxx.co.jp/feed'],
  ['Red Hat', 'https://rheb.hatenablog.com/feed'],
  ['Repro', 'https://tech.repro.io/feed'],
  ['Retail AI', 'https://note.com/retail_ai/rss'],
  ['Retty', 'https://engineer.retty.me/feed'],
  ['Ridge-i', 'https://iblog.ridge-i.com/feed'],
  ['SCSK', 'https://blog.usize-tech.com/feed/'],
  ['SEGA XD', 'https://note.com/segaxd/m/m81bdf8ff4be8/rss'],
  ['SEGA', 'https://techblog.sega.jp/feed'],
  ['SHIFT Group', 'https://note.com/shift_tech/rss'],
  ['SO Technologies', 'https://developer.so-tech.co.jp/feed'],
  ['SOELU', 'https://engineering.soelu.com/feed'],
  ['SQUARE ENIX', 'https://blog.jp.square-enix.com/iteng-blog/index.xml'],
  ['SRE Holdings', 'https://zenn.dev/sre_aip_tech/feed'],
  ['Safie', 'https://engineers.safie.link/feed'],
  ['Salesforce', 'https://developer.salesforce.com/jpblogs/feed/'],
  ['Sansan', 'https://buildersbox.corp-sansan.com/feed'],
  ['Seeed', 'https://lab.seeed.co.jp/feed'],
  ['Showcase Gig', 'https://note.com/scg_tech/rss'],
  ['SmartBank', 'https://blog.smartbank.co.jp/feed'],
  ['SmartHR', 'https://tech.smarthr.jp/feed'],
  ['SmartNews', 'https://developer.smartnews.com/blog/feed'],
  ['SmartNewsメディア担当チーム', 'https://www.mediatechnology.jp/feed'],
  ['Speee', 'https://tech.speee.jp/feed'],
  ['Studyplus', 'https://tech.studyplus.co.jp/feed'],
  ['Synamon', 'https://synamon.hatenablog.com/feed'],
  ['Sysdig', 'https://www.scsk.jp/sp/sysdig/rss.xml'],
  ['TANP', encodeURI('https://www.tanp-blog.com/feed/category/エンジニアブログ')],
  ['TENTIAL', 'https://tech.tential.jp/feed'],
  ['THECOO', 'https://note.com/thecoo_engineer/rss'],
  ['TOWN', 'https://town.biz/tag/engineer/feed'],
  ['TURING', 'https://zenn.dev/turing/feed'],
  ['TVISION INSIGHTS', 'https://tech.tvisioninsights.co.jp/feed'],
  ['TVer Technologies', 'https://techblog.tver-tech.co.jp/feed'],
  ['TVer', 'https://techblog.tver.co.jp/feed'],
  ['TeamSpirit', 'https://teamspirit.hatenablog.com/feed'],
  ['TechRacho', 'https://techracho.bpsinc.jp/feed'],
  ['TechTrain', 'https://zenn.dev/techtrain/feed'],
  ['Tier IV', 'https://tech.tier4.jp/feed'],
  ['Tokyo Otaku Mode', 'https://blog.otakumode.com/atom.xml'],
  ['UUUM', 'https://system.blog.uuum.jp/feed'],
  ['Ubie', 'https://zenn.dev/ubie/feed'],
  ['UnReact', 'https://zenn.dev/unreact/feed'],
  ['Unipos', 'https://fringeneer.hatenablog.com/feed'],
  ['Uzabase', 'https://tech.uzabase.com/feed'],
  ['VA Linux', 'https://valinux.hatenablog.com/feed'],
  ['VirtualCast', 'https://virtualcast.jp/blog/category/tech/feed/'],
  ['Visional', 'https://engineering.visional.inc/blog/index.xml'],
  ['Voicy', 'https://medium.com/feed/voicy-engineering'],
  ['WASD', 'https://tech.wasd-inc.com/feed'],
  ['WESEEK', 'https://weseek.co.jp/tech/feed/'],
  ['Wiz', 'https://tech.012grp.co.jp/feed'],
  ['YAZ', 'https://www.yaz.co.jp/feed'],
  ['YOJO Technologies', 'https://note.com/yojo_engineering/m/m59a0657d21e2/rss'],
  ['YOUTRUST', 'https://tech.youtrust.co.jp/feed'],
  ['Yahoo! JAPAN', 'https://techblog.yahoo.co.jp/atom.xml'],
  ['Yappli', 'https://tech.yappli.io/feed'],
  ['ZOZO', 'https://techblog.zozo.com/feed'],
  ['Zaim', 'https://blog.zaim.co.jp/rss'],
  ['Zeals', 'https://tech.zeals.co.jp/feed'],
  ['atama plus', 'https://zenn.dev/atamaplus_dev/feed'],
  ['aumo', 'https://techblog.aumo.co.jp/feed'],
  ['auカブコム証券', 'https://engineering.kabu.com/feed'],
  ['auコマース＆ライフ', 'https://kcf-developers.hatenablog.jp/feed'],
  ['cloud.config', 'https://tech-blog.cloud-config.jp/feed/'],
  ['crispy', 'https://blog.crispy-inc.com/feed'],
  ['dely', 'https://tech.dely.jp/feed'],
  ['dip', 'https://developer.dip-net.co.jp/feed'],
  ['divx', 'https://engineering.divx.co.jp/feed'],
  ['efoo', 'https://efoo.hatenablog.com/feed'],
  ['estie', 'https://inside.estie.co.jp/feed'],
  ['for Startups', 'https://tech.forstartups.com/feed'],
  ['freee', 'https://developers.freee.co.jp/feed'],
  ['gaudiy', 'https://techblog.gaudiy.com/feed'],
  ['hacomono', 'https://techblog.hacomono.jp/feed'],
  ['hokan', 'https://medium.com/feed/@hokan_dev'],
  ['i-Vinci', 'https://www.i-vinci.co.jp/techblog/feed'],
  ['i-plug', 'https://itbl.hatenablog.com/feed'],
  ['iChain', 'https://ichain.hatenablog.com/feed'],
  ['intage', 'https://www.intage-ts.com/feed'],
  ['ispec', 'https://zenn.dev/ispec/feed'],
  ['jig.jp', 'https://note.com/jigjp_engineer/rss'],
  ['justInCaseTechnologies', 'https://jict.hatenablog.com/feed'],
  ['mikan', 'https://mikan-tech.hatenablog.jp/feed'],
  ['mofmof', 'https://tech.mof-mof.co.jp/feed.xml'],
  ['nana music', 'https://tech.nana-music.com/feed'],
  ['no plan', 'https://zenn.dev/no_plan/feed'],
  ['paiza', 'https://paiza.hatenablog.com/feed'],
  ['stand.fm', 'https://note.com/standfm_company/rss'],
  ['var', 'https://zenn.dev/var/feed'],
  ['vivit', 'https://vivit.hatenablog.com/feed'],
  ['x garden', 'https://x-garde-creation.hatenablog.com/feed'],
  ['あした', 'https://engineer.ashita-team.com/feed'],
  ['あすけん', 'https://tech.asken.inc/feed'],
  ['おてつたび', 'https://zenn.dev/otetsutabi_tech/feed'],
  ['くらしのマーケット', 'https://tech.curama.jp/feed'],
  ['ぐるなび', 'https://developers.gnavi.co.jp/feed'],
  ['さくら', 'https://knowledge.sakura.ad.jp/rss/'],
  ['はてな', 'https://developer.hatenastaff.com/feed'],
  ['みてね', 'https://team-blog.mitene.us/feed'],
  ['みらい翻訳', 'https://miraitranslate-tech.hatenablog.jp/feed'],
  ['アイキューブドシステムズ', 'https://tech.i3-systems.com/feed'],
  ['アイスタイル', 'https://techblog.istyle.co.jp/feed'],
  ['アイプランニング', 'https://iplanning.hatenablog.jp/feed'],
  ['アカツキ', 'https://hackerslab.aktsk.jp/feed'],
  ['アクセルマーク', 'https://zenn.dev/axelmark/feed'],
  ['アクトインディ', 'https://tech.actindi.net/feed'],
  ['アスクル', 'https://tech.askul.co.jp/feed'],
  ['アスタミューゼ', 'https://lab.astamuse.co.jp/feed'],
  ['アソビュー', 'https://tech.asoview.co.jp/feed'],
  ['アットホーム', 'https://dblog.athome.co.jp/feed'],
  ['アトラエ', 'https://atraetech.hatenablog.com/feed'],
  ['アプトポッド', 'https://tech.aptpod.co.jp/feed'],
  ['アプリボット', 'https://blog.applibot.co.jp/feed'],
  ['アメリエフ', 'https://staffblog.amelieff.jp/feed'],
  ['アルダグラム', 'https://zenn.dev/aldagram/feed'],
  ['イエソド', 'https://zenn.dev/yesodco/feed'],
  ['イノベーター・ジャパン', 'https://tech.innovator.jp.net/feed'],
  ['インターステラ', 'https://blog.interstellar.co.jp/feed/'],
  ['インテリジェントテクノロジー', 'https://iti.hatenablog.jp/feed'],
  ['インフィニットループ', 'https://www.infiniteloop.co.jp/tech-blog/feed/'],
  ['ウィルゲート', 'https://tech.willgate.co.jp/feed'],
  ['ウェイブ', 'https://tech.wwwave.jp/feed'],
  ['ウエディングパーク', 'https://engineers.weddingpark.co.jp/feed'],
  ['ウォーターセル', 'https://watercelldev.hatenablog.jp/feed'],
  ['エキサイト', 'https://tech.excite.co.jp/feed'],
  ['エクサウィザーズ', 'https://techblog.exawizards.com/feed'],
  ['エス・エム・エス', 'https://tech.bm-sms.co.jp/feed'],
  ['エニグモ', 'https://tech.enigmo.co.jp/feed'],
  ['エブリー', 'https://tech.every.tv/feed'],
  ['エムオーテックス', 'https://tech.motex.co.jp/feed'],
  ['エムスリー', 'https://www.m3tech.blog/feed'],
  ['エムティーアイ', 'https://tech.mti.co.jp/feed'],
  ['エーピーコミュニケーションズ', 'https://techblog.ap-com.co.jp/feed'],
  ['オイシックス', 'https://creators.oisix.co.jp/feed'],
  ['オプトテクノロジーズ', 'https://tech-magazine.opt.ne.jp/feed'],
  ['オルターブース', 'https://aadojo.alterbooth.com/feed'],
  ['オールアバウト', 'https://allabout-tech.hatenablog.com/feed'],
  ['カケハシ', 'https://kakehashi-dev.hatenablog.com/feed'],
  ['カミナシ', 'https://kaminashi-developer.hatenablog.jp/feed'],
  ['カヤック', 'https://techblog.kayac.com/feed'],
  ['カラビナテクノロジー', 'https://zenn.dev/karabiner/feed'],
  ['カンムテック', 'https://tech.kanmu.co.jp/feed'],
  ['ガイアックス', 'https://gaiax.hatenablog.com/feed'],
  ['キカガク', 'https://blog.kikagaku.co.jp/feed'],
  ['キッチハイク', 'https://tech.kitchhike.com/feed'],
  ['キャスレーコンサルティング', 'https://www.casleyconsulting.co.jp/blog/engineer/feed/'],
  ['キュービック', 'https://cuebic.hatenablog.com/feed'],
  ['クイック', 'https://aimstogeek.hatenablog.com/feed'],
  ['クイックガード', 'https://tech.quickguard.jp/index.xml'],
  ['クックパッド', 'https://techlife.cookpad.com/feed'],
  ['クラウドワークス', 'https://engineer.crowdworks.jp/feed'],
  ['クラシコム', 'https://note.com/kurashicom_tech/rss'],
  ['クラッソーネ', 'https://tech.crassone.jp/rss.xml'],
  ['クリアコード', 'https://www.clear-code.com/blog/index.rdf'],
  ['グッドワークス', 'https://zenn.dev/goodworks/feed'],
  ['コインチェック', 'https://tech.coincheck.blog/feed'],
  ['ココナラ', 'https://yomoyamablog.coconala.co.jp/feed'],
  ['ココネ', 'https://engineering.cocone.io/feed/'],
  ['コネヒト', 'https://tech.connehito.com/feed'],
  ['コミューン', 'https://tech.commmune.jp/feed'],
  ['コロプラ', 'https://blog.colopl.dev/feed'],
  ['サイオステクノロジー', 'https://tech-lab.sios.jp/feed'],
  ['サイゼント', 'https://cyzennt.co.jp/blog/feed/'],
  ['サイバーエージェント', 'https://developers.cyberagent.co.jp/blog/feed/'],
  ['サイボウズ', 'https://blog.cybozu.io/feed'],
  ['サムザップ', 'https://tech.sumzap.co.jp/feed'],
  ['シェアフル', 'https://zenn.dev/sharefull/feed'],
  ['シタテル', 'https://tech-blog.sitateru.com/feeds/posts/default'],
  ['シナジーマーケティング', 'https://techscore.hatenablog.com/feed'],
  ['シナプス', 'https://tech.synapse.jp/feed'],
  ['シビラ', 'https://zenn.dev/sivira/feed'],
  ['シンシア', 'https://tech-blog.xincere.jp/feed'],
  ['シンプルフォーム', 'https://zenn.dev/simpleform/feed'],
  ['シー・エス・エス', 'https://blog.css-net.co.jp/feed'],
  ['ジェイテックジャパン', 'https://zenn.dev/jtechjapan/feed'],
  ['ジモティー', 'https://jmty-tech.hatenablog.com/feed'],
  ['ジークレスト', 'https://blog.gcrest.com/feed'],
  ['スイッチサイエンス', 'https://tech.144lab.com/feed'],
  ['スタディサプリ', 'https://blog.studysapuri.jp/feed'],
  ['スタディスト', 'https://studist.tech/feed'],
  ['スタメン', 'https://tech.stmn.co.jp/feed'],
  ['スタートアップテクノロジー', 'https://startup-technology.com/feed'],
  ['スターフェスティバル', 'https://zenn.dev/stafes/feed'],
  ['ストックマーク', 'https://tech.stockmark.co.jp/index.xml'],
  ['スピッカート', 'https://zenn.dev/spicato_inc/feed'],
  ['スペースリー', 'https://tech.spacely.co.jp/feed'],
  ['スマートキャンプ', 'https://tech.smartcamp.co.jp/feed'],
  ['スマートスタイル', 'https://blog.s-style.co.jp/feed/'],
  ['スマートラウンド', 'https://zenn.dev/smartround/feed'],
  ['セキュアスカイ･テクノロジー', 'https://techblog.securesky-tech.com/feed'],
  ['ゼネット', 'https://media.zenet-web.co.jp/feed'],
  ['タイマーズ', 'https://techblog.timers-inc.com/feed'],
  ['タイミー', 'https://tech.timee.co.jp/feed'],
  ['ダイアログ', 'https://dialog-tech.hatenablog.com/feed'],
  ['ダイニー', 'https://note.com/dinii/m/mf6424286cfa2/rss'],
  ['テクニカルエージェント', 'https://tracl.cloud/archives/engineerblog/feed/'],
  ['テコテック', 'https://tec.tecotec.co.jp/feed'],
  ['テックタッチ', 'https://tech.techtouch.jp/feed'],
  ['テックファーム', 'https://www.techfirm.co.jp/blog/?feed=rss2'],
  ['テリロジー', 'https://terilogy-tech.hatenablog.com/feed'],
  ['デザインワン・ジャパン', 'https://tech.designone.jp/feed'],
  ['デザミス', 'https://zenn.dev/u_motion/feed'],
  ['トップゲート', 'https://www.topgate.co.jp/category/engineer/feed'],
  ['トドケール', 'https://zenn.dev/todoker/feed'],
  ['トヨクモ', 'https://tech.toyokumo.co.jp/feed'],
  ['トライステージ', 'https://blog.ddm.tri-stage.jp/feed/'],
  ['トライト', 'https://tryt-group.hatenablog.com/feed'],
  ['トラストバンク', 'https://tech.trustbank.co.jp/feed'],
  ['トラベルブック', 'https://tech.travelbook.co.jp/index.xml'],
  ['トラーナ', 'https://toranabox.com/rss/category/Tech'],
  ['トレタ', 'https://tech.toreta.in/feed'],
  ['ドクターズプライム', encodeURI('https://blog.drsprime.com/feed/category/エンジニアリング')],
  ['ドコカデ', 'https://zenn.dev/dokokade/feed'],
  ['ドリコム', 'https://tech.drecom.co.jp/feed/'],
  ['ドワンゴ', 'https://dwango.github.io/index.xml'],
  ['ドワンゴ教育サービス', 'https://blog.nnn.dev/feed'],
  ['ナレッジコミュニケーション', 'https://recipe.kc-cloud.jp/feed'],
  ['ニフクラ', 'https://blog.pfs.nifcloud.com/feed'],
  ['ニフティライフスタイル', 'https://tech.niftylifestyle.co.jp/feed'],
  ['ヌーラボ', 'https://nulab.com/ja/blog/categories/techblog/feed/'],
  ['ネクストビート', 'https://medium.com/feed/nextbeat-engineering'],
  ['ネフロック', 'https://blog.nefrock.com/feed'],
  ['ハイウィザード', 'https://high-wizard.hatenablog.com/feed'],
  ['ハウテレビジョン', 'https://blog.howtelevision.co.jp/feed'],
  ['ハロー', 'https://tech.hello.ai/feed'],
  ['ハンズラボ', 'https://www.hands-lab.com/feed'],
  ['ハートビーツ', 'https://heartbeats.jp/hbblog/atom.xml'],
  ['バイセル', 'https://tech.buysell-technologies.com/feed'],
  ['バスキュール', 'https://blog.bascule.co.jp/feed'],
  ['バレットグループ', 'https://blog.bltinc.co.jp/feed'],
  ['パトコア', 'https://tech.patcore.com/feed'],
  ['パーソルプロセス＆テクノロジー', 'https://note.com/ppt_hr/m/md77242321979/rss'],
  ['ヒストリア', 'https://historia.co.jp/feed'],
  ['ヒュープロ', 'https://hupro-techblog.hatenablog.com/feed'],
  ['ビザスク', 'https://tech.visasq.com/feed'],
  ['ビットバンク', 'https://tech.bitbank.cc/rss/'],
  ['ピクシブ', 'https://inside.pixiv.blog/feed'],
  ['ピクスタ', 'https://texta.pixta.jp/feed'],
  ['ピリカ', 'https://devblog.pirika.org/feed'],
  ['ファブリカ', 'https://www.fabrica-com.co.jp/techblog/feed/'],
  ['ファンタラクティブ', 'https://zenn.dev/funteractive/feed'],
  ['フィードフォース', 'https://developer.feedforce.jp/feed'],
  ['フェンリル', 'https://engineers.fenrir-inc.com/feed'],
  ['フォトシンス', 'https://akerun.hateblo.jp/feed'],
  ['フォージビジョン', 'https://techblog.forgevision.com/feed'],
  ['フューチャー', 'https://future-architect.github.io/atom.xml'],
  ['フリュー', 'https://tech.furyu.jp/index.xml'],
  ['ブックウォーカー', 'https://developers.bookwalker.jp/feed'],
  ['プラミナス', 'https://zenn.dev/plminus/feed'],
  ['プレックス', 'https://product.plex.co.jp/feed'],
  ['ヘイ データチーム', 'https://data.hey.jp/feed'],
  ['ヘイ', 'https://tech.hey.jp/feed'],
  ['ベルシステム', 'https://note.com/pocke_techblog/rss'],
  ['ペイトナー', 'https://paytner.hatenablog.com/feed'],
  ['ペライチ', 'https://zenn.dev/peraichi/feed'],
  ['ホクソエム', 'https://blog.hoxo-m.com/feed'],
  ['ホワイトプラス', 'https://blog.wh-plus.co.jp/feed'],
  ['マイベスト', 'https://zenn.dev/mybest/feed'],
  ['マクロミル', 'https://techblog.macromill.com/feed'],
  ['マナリンク', 'https://zenn.dev/manalink/feed'],
  ['マネックス', 'https://blog.tech-monex.com/feed'],
  ['マネーフォワード ', 'https://moneyforward.com/engineers_blog/feed/'],
  ['マンハッタンコード', 'https://zenn.dev/manhattan_code/feed'],
  ['ミクシィ', 'https://mixi-developers.mixi.co.jp/feed'],
  ['ミツエーリンクス', 'https://tsd.mitsue.co.jp/assets/rss/atom.xml'],
  ['メディアエンジン', 'https://zenn.dev/media_engine/feed'],
  ['メディアドゥ', 'https://techdo.mediado.jp/feed'],
  ['メドピア', 'https://tech.medpeer.co.jp/feed'],
  ['メドレー', 'https://developer.medley.jp/rss.xml'],
  ['メルカリ', 'https://engineering.mercari.com/blog/feed.xml/'],
  ['メンテモ', 'https://engineering.mentemo.com/feed'],
  ['モノグサ', 'https://tech.monoxer.com/feed'],
  ['モノタロウ', 'https://tech-blog.monotaro.com/feed'],
  ['モバイルファクトリー', 'https://tech.mobilefactory.jp/feed'],
  ['モルフォ', 'https://techblog.morphoinc.com/feed'],
  ['ユカシカド', 'https://note.com/tech_yukashikado/rss'],
  ['ユニファ', 'https://tech.unifa-e.com/feed'],
  ['ユニラボ', 'https://note.unilabo.jp/m/mc84cf9468445/rss'],
  ['ライトハウス', 'https://developers.lighthouse-frontier.tech/feed'],
  ['ラクス', 'https://tech-blog.rakus.co.jp/feed'],
  ['ラクスフロントエンドチーム', 'https://note.com/rakus_fe/m/m653605948abe/rss'],
  ['ラクスル', 'https://tech.raksul.com/feed'],
  ['ラクーン', 'https://techblog.raccoon.ne.jp/feed'],
  ['ラック', 'https://devblog.lac.co.jp/feed'],
  ['ランサーズ', 'https://engineer.blog.lancers.jp/feed/'],
  ['リクルートコミュニケーションズ', 'https://blog.recruit.co.jp/rco/feed.xml'],
  ['リクルートテクノロジーズ', 'https://blog.recruit.co.jp/rtc/feed/'],
  ['リクルートマーケティングパートナーズ', 'https://tech.recruit-mp.co.jp/feed/'],
  ['リクルートライフスタイル', 'https://engineer.recruit-lifestyle.co.jp/techblog/feed.xml'],
  ['リサーチ・アンド・イノベーション', 'https://rni-dev.hatenablog.com/feed'],
  ['リゾーム', 'https://tech.rhizome-e.com/feed'],
  ['リンカーズ', 'https://linkers.hatenablog.com/feed'],
  ['リンクアンドモチベーション', 'https://link-and-motivation.hatenablog.com/feed'],
  ['リンコード', 'https://blog.linkode.co.jp/feed'],
  ['レアジョブ', 'https://rarejob-tech-dept.hatenablog.com/feed'],
  ['レアゾン', 'https://techblog.reazon.jp/feed'],
  ['レイ・フロンティア', 'https://tech-blog.rei-frontier.jp/feed'],
  ['レコチョク', 'https://techblog.recochoku.jp/feed/atom'],
  ['レバレジーズ', 'https://tech.leverages.jp/feed'],
  ['レブコム', 'https://tech.revcomm.co.jp/feed'],
  ['レンジャーシステムズ', 'https://ranger-systems.co.jp/blog-engineer/feed'],
  ['レンティオ', 'https://zenn.dev/rentio/feed'],
  ['ロコガイド', 'https://techblog.locoguide.co.jp/feed'],
  ['ロジカルビート', 'https://logicalbeat.jp/blog/feed/'],
  ['ロジカル・アーツ', 'https://blog.logical.co.jp/feed'],
  ['ロジクラ', 'https://blog.logikura.dev/feed'],
  ['ワウテック', 'https://engineer.wowtech.co.jp/feed'],
  ['ワンキャリア', 'https://note.com/dev_onecareer/rss'],
  ['ワンダープラネット', 'https://developers.wonderpla.net/feed'],
  ['一休', 'https://user-first.ikyu.co.jp/feed'],
  ['分析屋', 'https://note.com/bunsekiya_tech/rss'],
  ['富士通クラウドテクノロジーズ', 'https://tech.fjct.fujitsu.com/feed'],
  ['富士通研究所', 'https://blog.fltech.dev/feed'],
  ['弁護士ドットコム', 'https://creators.bengo4.com/feed'],
  ['弥生', 'https://tech-blog.yayoi-kk.co.jp/feed'],
  ['日本仮想化技術', 'https://tech.virtualtech.jp/feed'],
  ['日販テクシード', 'https://www.techceed-inc.com/engineer_blog/feed/'],
  ['朝日ネット', 'https://techblog.asahi-net.co.jp/feed'],
  ['朝日新聞社', 'https://note.com/asahi_ictrad/rss'],
  ['楽天コマース', encodeURI('https://commerce-engineer.rakuten.careers/feed/category/テック')],
  ['永和システムマネジメント', 'https://blog.agile.esm.co.jp/feed'],
  ['現場サポート', 'https://support.genbasupport.com/techblog/feed/'],
  ['虎の穴', 'https://toranoana-lab.hatenablog.com/feed'],
  ['遊舎工房', 'https://blog.yushakobo.jp/feed'],
  ['電通国際情報サービス', 'https://tech.isid.co.jp/feed'],
  ['食べチョク', 'https://tech.tabechoku.com/feed'],
  ['食べログ', 'https://note.com/tabelog_frontend/rss'],
  ['ＦＦＲＩセキュリティ', 'https://engineers.ffri.jp/feed'],
]);

/**
 * その他候補
 *
 * できたばかりなので様子見
 * ['Amayz', 'https://blog.amayz.co.jp/?feed=rss2'],
 *
 * パースエラー修正
 * ['Qiita', 'https://zine.qiita.com/'],
 * ['サイバーディフェンス研究所', 'https://io.cyberdefense.jp/index.xml'],
 *
 * 日本語以外が交じるのを解消できたら入れたい
 * ['クラスメソッド', 'https://dev.classmethod.jp/feed'],
 *
 * 403 Forbidden
 * ['Cygames', 'https://tech.cygames.co.jp/feed/'],
 * ['AI Shift', 'https://www.ai-shift.co.jp/techblog/feed'],
 *
 * 404
 * ['リクルートデータ', 'https://blog.recruit.co.jp/data/index.json'],
 * ['Findy Teams', 'https://engineering-org.findy-teams.com/feed.xml'],
 *
 * 406
 * ['AsiaQuest', 'https://techblog.asia-quest.jp/rss.xml'],
 * ['Supership', 'https://www.wantedly.com/stories/s/Supership/rss.xml'],
 * ['Wantedly', 'https://www.wantedly.com/stories/s/wantedly_engineers/rss.xml'],
 *
 * 500
 * ['LIG', 'https://liginc.co.jp/technology/feed'],
 *
 * 503
 * ['フクロウラボ', 'https://developers.fukurou-labo.co.jp/feed/'],
 *
 * Error: unable to verify the first certificate
 * ['スペースマーケット', 'https://blog.spacemarket.com/category/code/feed/'],
 * ['エムアールピー', 'https://mrp-net.co.jp/tech_blog/feed'],
 *
 * pubDate なし
 * ['リクルート', 'https://engineers.recruit-jinji.jp/techblog/feed/']
 *
 * 削除された？
 * ['NAXA', 'https://blog.naxa.co.jp/feed'],
 * ['Reigle', 'https://www.reigle.info/feed'],
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
 *
 * TODO: スライド系も追加？
 * https://speakerdeck.com/line_developers
 */
