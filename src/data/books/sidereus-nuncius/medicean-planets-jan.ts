import type { BookSection } from '../../../types/book';

export const mediceanPlanetsJanSections: BookSection[] = [
  {
    id: 'medicea-sidera-ianuarius',
    roman: 'IV',
    titleOriginal:
      'De Quatuor Planetis Mediceis (Pars I): Observationes Mensis Ianuarii MDCX',
    titleZh: '论四颗美第奇行星（上）：一六一〇年一月逐夜观测日志',
    aiModel: 'Gemini-4-Carbon',
    blocks: [
      {
        id: 'sn-s4-p01',
        type: 'paragraph',
        num: '§ 01',
        original:
          'De Luna, de inerrantibus Stellis ac de Galaxia, quae hactenus observata sunt, breviter enarravimus. Superest ut, quod maximum in praesenti negotio existimandum videtur, quatuor PLANETAS a primo mundi exordio ad nostra usque tempora nunquam conspectos, occasionem reperiendi atque observandi, necnon ipsorum loca, atque per duos proxime menses observationes circa eorundem lationes ac mutationes habitas, aperiamus ac promulgemus; Astronomos omnes convocantes, ut ad illorum periodos inquirendas atque definiendas se conferant, quod nobis in hanc usque diem, ob temporis angustiam, assequi minime licuit. Illos tamen iterum monitos facimus, ne ad talem inspectionem incassum accedant, Perspicillo exactissimo opus esse, et quale in principio sermonis huius descripsimus.',
        zh: '关于月球、恒星与银河，我们已将迄今所观测到的现象简略述毕。接下来，我们还须把眼下这桩事业中看来最重大的部分公之于众、昭告天下——那就是自开天辟地直至我们这个时代从未被人目睹过的**四颗行星**，包括发现与观测它们的契机、它们所在的天区位置，以及过去将近两个月间围绕它们的运行与变化所作的逐夜记录；我们谨此召唤全体天文学家投身于推求并测定它们的运行周期，盖因受限于时间仓促，直至今日我们尚无暇完成此项核算。不过，我们要再次郑重提醒诸位：切勿徒劳无功地贸然前往观测，此事非有一具如本篇开端所描述的那般极其精密的窥镜不可。'
      },
      {
        id: 'sn-s4-p02',
        type: 'paragraph',
        num: '§ 02',
        original:
          'Die itaque septima Ianuarii, instantis anni millesimi sexcentesimi decimi, hora sequentis noctis prima, cum caelestia sidera per Perspicillum spectarem, Iuppiter sese obviam fecit; cumque admodum excellens mihi parassem instrumentum (quod antea ob alterius organi debilitatem minime contigerat), tres illi adstare Stellulas, exiguas quidem, veruntamen clarissimas, cognovi; quae, licet e numero inerrantium a me crederentur, nonnullam tamen intulerunt admirationem, eo quod secundum exactam lineam rectam atque Eclipticae parallelam dispositae videbantur, ac caeteris magnitudine paribus splendidiores. Eratque illarum inter se et ad Iovem talis constitutio:',
        zh: '话说当今[一六一〇年一月七日，入夜后第一小时]{#g-sn-s4-01}，当我正用窥镜仰观天上星辰时，木星迎面映入眼帘；由于我已为自己备妥了一具极为精良的器械（此前因旧镜效力孱弱，从未有过这般际遇），我发觉木星身旁侍立着三颗小星——形体虽小，却明亮异常；当时我虽以为它们属于恒星之列，心中却仍生出几分惊异，因为它们看起来严格排成一条与黄道平行的直线，而且比其余同等大小的恒星更为璀璨。它们彼此之间及相对于木星的排列格局如下：',
        glosses: [
          {
            id: 'g-sn-s4-01',
            anchor: '一六一〇年一月七日，入夜后第一小时',
            content:
              '十七世纪意大利通行「意大利时制」（ore italiane，拉丁文作 horae ab occasu），一昼夜二十四等时并非自子夜或正午起算，而是以每日黄昏日落（晚祷钟声响起之时，约在几何日落后半小时）为第零时起点，「入夜后第一小时」（hora sequentis noctis prima）即黄昏日落后满一小时。一六一〇年一月七日帕多瓦日落约为地方平太阳时下午四时四十分，故此次载入史册的首测时刻约为当晚五时四十分至六时之间。'
          }
        ]
      },
      {
        id: 'sn-s4-fig13',
        type: 'verse',
        original: 'Ori.  *    *   O      *  Occ.',
        zh: '[东　　✦　　　✦　○　　　　✦　　西]{#g-sn-s4-02}',
        glosses: [
          {
            id: 'g-sn-s4-02',
            anchor: '东　　✦　　　✦　○　　　　✦　　西',
            content:
              '威尼斯初版全书共排印六十五幅木星卫星星位示意图，左端标 Ori.（Oriens「东」），右端标 Occ.（Occidens「西」），中央以大写圆圈字母 O 表木星，两侧以铅活字星花符号表卫星（本译本统一以 ○ 表木星、✦ 表卫星、★ 表二月底参照恒星，并按原文方位保留偏北或偏南的微移）。之所以左东右西，是因为在北半球面朝南方天空仰望黄道群星时，左手为东、右手为西，而伽利略式平凹目镜望远镜成正立虚像（不似后来开普勒双凸透镜望远镜上下左右倒置），故目镜中所见方位与肉眼直视完全一致。据现代天体力学历表回推，一月七日傍晚伽利略实测到的三光点实为全部四颗伽利略卫星：东侧最外为木卫四（卡利斯托），东侧紧靠木星的一点实为当时角距仅约 11 角秒、在二十倍镜下融为一星的木卫一（伊奥）与木卫二（欧罗巴），西侧则为木卫三（盖尼米德）。'
          }
        ]
      },
      {
        id: 'sn-s4-p03',
        type: 'paragraph',
        num: '§ 03',
        original:
          'ex parte scilicet orientali duae aderant Stellae, una vero occasum versus. Orientalior atque occidentalis, reliqua paulo maiores apparebant: de distantia inter ipsas et Iovem minime sollicitus fui; fixae enim, uti diximus primo, creditae fuerunt. Cum autem die octava, nescio quo fato ductus, ad inspectionem eandem reversus essem, longe aliam constitutionem reperi: erant enim tres Stellulae occidentales omnes, a Iove atque inter se, quam superiori nocte, viciniores, paribusque interstitiis mutuo disseparatae, veluti apposita praesefert delineatio.',
        zh: '也就是说，东侧有两颗星，朝向西侧则有一颗。最东侧的一颗与西侧的一颗，看起来比剩下那一颗略大少许；至于它们与木星之间的距离，我当时毫未在意，因为诚如方才所言，起初我以为它们只是恒星。然而到了八日，[不知受何种命运牵引，我重返同一观测]{#g-sn-s4-03}，却发现了截然不同的格局：三颗小星全都位于木星西侧，比前一晚更靠近木星及彼此，且以相等的间距相互隔开，一如所附草图所示：',
        glosses: [
          {
            id: 'g-sn-s4-03',
            anchor: '不知受何种命运牵引，我重返同一观测',
            content:
              '理解下一段伽利略困惑的关键在于当时木星的视运动方向：木星已于一六〇九年十二月八日过冲日点，至一六一〇年一月上旬正处于金牛座自东向西的「逆行」（motus retrogradus）阶段。倘若一月七日所见三星果真是固定不动的背景恒星，那么向西逆行的木星在一月八日理应跨过西侧那颗星而使三星落在自己东侧；然而一月八日三星却反而全都落在了木星西侧——除非天文历表算错了木星行度、木星其实正在自西向东「顺行」（directus）并超越了它们！这正是迫使伽利略在次夜继续追踪核实的悬念起点。'
          }
        ]
      },
      {
        id: 'sn-s4-fig14',
        type: 'verse',
        original: 'Ori.           O  *  *  *  Occ.',
        zh: '东　　　　　　○　✦　✦　✦　　西'
      },
      {
        id: 'sn-s4-p04',
        type: 'paragraph',
        num: '§ 04',
        original:
          'Hic, licet ad mutuam Stellarum appropinquationem minime cogitationem appulissem, haesitare tamen coepi, quonam pacto Iuppiter ab omnibus praedictis fixis posset orientalior reperiri, cum a binis ex illis pridie occidentalis fuisset: ac proinde veritus sum ne forte secus a computo astronomico directus foret, ac propterea motu proprio Stellas illas antevertisset. Quapropter maximo cum desiderio sequentem expectavi noctem; verum a spe frustratus fui, nubibus enim undiquaque obductum fuit caelum.\nAt die decima apparuerunt Stellae in eiusmodi ad Iovem positu:',
        zh: '此时，我虽尚未留心这些星辰彼此靠拢的现象，却开始狐疑起来：既然前一天木星尚在其中两颗恒星以西，如今它怎可能反而出现在上述全部恒星以东呢？因此我暗自担心，莫非木星与天文历算所得相反，当时正作顺行运动，因而凭自身运动抢先越过了那些恒星。为此我怀着极迫切的渴望盼望次夜降临；无奈事与愿违，整片天空四面八方都被浓云遮蔽了。\n到了十日，群星相对于木星呈现出如下方位：'
      },
      {
        id: 'sn-s4-fig15',
        type: 'verse',
        original: 'Ori.    *   *  O         Occ.',
        zh: '东　　✦　　✦　○　　　　　　西'
      },
      {
        id: 'sn-s4-p05',
        type: 'paragraph',
        num: '§ 05',
        original:
          'duae enim tantum, et orientales ambae, aderant; tertia, ut opinatus fui, sub Iove latitante. Erant pariter, veluti antea, in eadem recta cum Iove, ac iuxta Zodiaci longitudinem adamussim locatae. Haec cum vidissem, cumque mutationes consimiles in Iove nulla ratione reponi posse intelligerem, atque insuper spectatas Stellas semper easdem fuisse cognoscerem (nullae enim aliae, aut praecedentes, aut consequentes, intra magnum intervallum iuxta longitudinem Zodiaci aderant), iam ambiguitatem in admirationem permutans, apparentem commutationem, non in Iove, sed in Stellis adnotatis repositam esse comperi; ac proinde oculate et scrupulose magis deinceps observandum fore sum ratus.\nDie itaque undecima eiuscemodi constitutionem vidi:',
        zh: '当时只有两颗星在场，且全都位于东侧；我揣想第三颗正隐匿在木星背后。它们同先前一样，与木星处在同一条直线上，严格沿着黄道经度方向排列。目睹此景之后，我明白诸如此类的位置剧变断无可能归因于木星本身，况且我又确知连日所见的始终是同一批星辰（因为在黄道经度方向上很大一段间距之内，前后皆无任何其他亮星），于是狐疑顿化惊叹：我察明这种视位置变易并不在于木星，而在于我所记录的那些小星身上；因此我断定，嗣后必须更加目光如炬、一丝不苟地持续观测。\n到了十一日，我见到了如下格局：'
      },
      {
        id: 'sn-s4-fig16',
        type: 'verse',
        original: 'Ori.  *  *     O         Occ.',
        zh: '东　　✦　✦　　　○　　　　　　西'
      },
      {
        id: 'sn-s4-p06',
        type: 'paragraph',
        num: '§ 06',
        original:
          'Stellas scilicet tantum duas orientales; quarum media triplo distabat a Iove, quam ab orientaliori, eratque orientalior duplo fere maior reliqua, cum tamen antecedenti nocte aequales ferme apparuissent. Statutum ideo omnique procul dubio a me decretum fuit, tres in caelis adesse Stellas vagantes circa Iovem, instar Veneris atque Mercurii circa Solem; quod tandem luce meridiana clarius in aliis postmodum compluribus inspectionibus observatum est: ac non tantum tres, verum quatuor esse vaga Sidera circa Iovem suas circumvolutiones obeuntia; quorum permutationes, exactius consequenter observatas, subsequens narratio ministrabit: interstitia quoque inter ipsa per Perspicillum, superius explicata ratione, dimetitus sum: horas insuper observationum, praesertim cum plures in eadem nocte habitae fuerunt, apposui; adeo enim celeres horum Planetarum extant revolutiones, ut horarias quoque differentias plerunque liceat accipere.\nDie igitur duodecima, hora sequentis noctis prima, hac ratione disposita Sidera vidi:',
        zh: '也就是说，只有两颗位于东侧的星；居中那颗距木星的距离，是它距最东侧那颗的三倍；而且最东侧那颗看起来几乎比另一颗大一倍，尽管前一晚两颗看起来还几乎大小相等。由此，[我心中遂确立并毫无疑义地断定：天上存在着三颗环绕木星运行的游星]{#g-sn-s4-04}，恰如金星与水星环绕太阳一般；这一事实在此后接踵而至的许多次观测中，终于被看得比正午阳光还要昭然若揭——而且环绕木星周转不息的游星还不止三颗，实有**四颗**；下文记述将呈献此后更精确观测到的它们的位置变幻；我也按上文阐明的方法，透过窥镜测定了它们彼此间的角距；此外我还附记了观测时刻，尤其在同一夜进行多次观测之时——盖因这些行星的公转如此迅疾，往往连逐小时的差异都清晰可辨。\n十二日，入夜后第一小时，我见群星按如下方式排列：',
        glosses: [
          {
            id: 'g-sn-s4-04',
            anchor: '我心中遂确立并毫无疑义地断定：天上存在着三颗环绕木星运行的游星',
            content:
              '一六一四年，德国安斯巴赫宫廷数学家西蒙·马里乌斯（Simon Marius，1573—1624）刊行《木星世界》（Mundus Iovialis），宣称自己早在一六〇九年儒略历十二月二十九日（折合格里高利新历一六一〇年一月八日，即比伽利略一月七日首测晚一天）便已开始记录木星卫星，并采纳开普勒一六一三年提出的神话命名建议，以宙斯（朱庇特）的四位恋人将由内向外的四颗卫星命名为伊奥（Io，木卫一）、欧罗巴（Europa，木卫二）、盖尼米德（Ganymede，木卫三）与卡利斯托（Callisto，木卫四）。伽利略在一六二三年《试金者》中严词指控马里乌斯剽窃并伪造儒略历日期；现代科学史界公认两人系独立观测，但伽利略在观测时间、物理定性与公开发表（一六一〇年三月）上均享有无可争议的首创权。'
          }
        ]
      },
      {
        id: 'sn-s4-fig17',
        type: 'verse',
        original: 'Ori.     *     O     *   Occ.',
        zh: '东　　　✦　　　○　　　✦　　　西'
      },
      {
        id: 'sn-s4-p07',
        type: 'paragraph',
        num: '§ 07',
        original:
          'erat orientalior Stella occidentaliori maior, ambae tamen valde conspicuae ac splendidae: utraque distabat a Iove scrupulis primis duobus: tertia quoque Stellula apparere coepit hora tertia, prius minime conspecta, quae ex parte orientali Iovem fere tangebat, eratque admodum exigua. Omnes fuerunt in eadem recta et secundum Eclipticae longitudinem coordinatae.\nDie decimatertia primum a me quatuor conspectae fuerunt Stellulae in hac ad Iovem constitutione:',
        zh: '东侧那颗星比西侧那颗更大，但两颗都十分醒目璀璨；[两颗各自距木星皆为两角分]{#g-sn-s4-05}。到了第三小时，此前全未露面的第三颗小星也开始现身，在东侧几乎紧贴木星，形体极为细小。所有星辰皆处在同一条直线上，沿黄道经度方向排列。\n[十三日，我首次同时观测到全部四颗小星]{#g-sn-s4-07}，相对于木星呈如下格局：',
        glosses: [
          {
            id: 'g-sn-s4-05',
            anchor: '两颗各自距木星皆为两角分',
            content:
              '拉丁原文作 scrupulis primis duobus（下文亦常缩写为 min. pr. / m. p.，即 minuta prima「第一微份／角分」，1° = 60′；更次一级六十进位为 minuta secunda / scrupula secunda「第二微份／角秒」，1′ = 60″）。当时尚无测微器辅助，伽利略主要凭木星视圆盘直径（当时冲日后不久真实视直径约为 44 至 45 角秒，因光渗效应在窥镜中看起来略大，被伽利略估算为约 1 至 2 角分）及物镜光阑视场作目测比对，故本日志所载角距数值系统性偏大近一倍，但各卫星相对间距比例依然相当准确。'
          },
          {
            id: 'g-sn-s4-07',
            anchor: '十三日，我首次同时观测到全部四颗小星',
            content:
              '一六一〇年一月十三日夜是人类历史上首次在同一视场内看全四颗木星大卫星的时刻。据现代历表回推，当晚位于木星东侧的一颗为木卫二（欧罗巴），位于木星西侧由内向外依次为木卫一（伊奥）、略微偏北的木卫三（盖尼米德）与最外侧的木卫四（卡利斯托）。之所以四颗卫星每夜大多排成近乎贴合黄道的直线、偶尔微幅偏北或偏南，是因为木星轨道面对黄道倾角仅一点三度，木星赤道面对其公转轨道面倾角亦仅三点一度，地球视线几乎正对四颗规则卫星共处的木星赤道平面侧缘。'
          }
        ]
      },
      {
        id: 'sn-s4-fig18',
        type: 'verse',
        original: 'Ori.     *     O  * * *  Occ.',
        zh: '　　　　　　　　　　✦\n东　　　✦　　○　✦　　✦　　西'
      },
      {
        id: 'sn-s4-p08',
        type: 'paragraph',
        num: '§ 08',
        original:
          'erant tres occidentales et una orientalis: lineam proxime rectam constituebant; media enim occidentalium paululum a recta septentrionem versus deflectebat. Aberat orientalior a Iove minuta duo: reliquarum et Iovis intercapedines erant singulae unius tantum minuti. Stellae omnes eandem prae se fereban magnitudinem, ac, licet exiguam, lucidissimae tamen erant ac fixis eiusdem magnitudinis longe splendidiores.\nDie decimaquarta nubilosa fuit tempestas.\nDie decimaquinta, hora noctis tertia, in proxime depicta fuerunt habitudine quatuor Stellae ad Iovem:',
        zh: '西侧有三颗，东侧有一颗；它们大致构成一条直线，唯西侧三星居中那一颗略微偏离直线向北方抬升。东侧那颗距木星两角分；其余三星与木星及彼此之间的间距各自皆仅为一角分。所有小星呈现出同等大小，虽甚细小，却极其明亮，比同等星等的恒星璀璨得多。\n十四日，阴云密布，天气恶劣。\n十五日，入夜第三小时，四颗星相对于木星处于紧接下方所绘的态势：'
      },
      {
        id: 'sn-s4-fig19',
        type: 'verse',
        original: 'Ori.           O  *  *  *    *  Occ.',
        zh: '　　　　　　　　　　　✦\n东　　　　　○　✦　✦　　　✦　西'
      },
      {
        id: 'sn-s4-p09',
        type: 'paragraph',
        num: '§ 09',
        original:
          'occidentales omnes ac in eadem proxime recta linea dispositae; quae enim tertia a Iove numerabatur paululum in boream attollebatur: propinquior Iovi erat omnium minima, reliquae consequenter maiores apparebant: intervalla inter Iovem et tria consequentia Sidera erant aequalia omnia ac duorum minutorum; at occidentalius aberat a sibi propinquo minutis quatuor. Erant lucida valde, et nihil scintillantia, qualia semper, tum ante, tum post, apparuerunt. Verum hora septima tres solummodo aderant Stellae, in huiuscemodi cum Iove aspectu:',
        zh: '四颗星全都位于西侧，大致排在同一条直线上，唯从木星数起第三颗略微向北抬升；最靠近木星的那颗最小，其余几颗由内向外依次显得更大；木星与随后三颗星之间的间距全都相等，各为两角分，而最西侧那颗距紧邻它的那颗则为四角分。它们全都十分明亮，且丝毫不闪烁——无论此前还是此后，它们看起来始终如此。然而到了第七小时，却只有三颗星在场，与木星呈如下外貌：'
      },
      {
        id: 'sn-s4-fig20',
        type: 'verse',
        original: 'Ori.           O   * *     *  Occ.',
        zh: '东　　　　　○　　✦✦　　　✦　西'
      },
      {
        id: 'sn-s4-p10',
        type: 'paragraph',
        num: '§ 10',
        original:
          'erant nempe in eadem recta ad unguem: vicinior Iovi erat admodum exigua, et ab illo semota per minuta prima tria; ab hac secunda distabat min. uno; tertia vero a secunda min. pr. 4, sec. 30. Post vero aliam horam duae Stellulae mediae adhuc viciniores erant: aberant enim min. sc. vix 30 tantum.\nDie decimasexta, hora prima noctis, tres vidimus Stellas iuxta hunc ordinem dispositas:',
        zh: '它们[分毫不差地排在同一条直线上]{#g-sn-s4-08}：最靠近木星的那颗极为细小，距木星三角分；第二颗距第一颗一角分；第三颗距第二颗四角分三十角秒。又过了一个小时，居中那两颗小星靠得更近了，相距仅勉强三十角秒。\n十六日，入夜第一小时，我们看见三颗星按如下次序排列：',
        glosses: [
          {
            id: 'g-sn-s4-08',
            anchor: '分毫不差地排在同一条直线上',
            content:
              '拉丁原文作 in eadem recta ad unguem。古典成语 ad unguem（字面义「精确到指甲尖检验的地步」）源自古罗马大理石雕刻工匠习语：石匠以修剪齐整的拇指指甲滑过拼接缝隙，若丝毫不挂甲即谓「严丝合缝、毫发不爽」（见贺拉斯《讽刺诗集》I.5.32 与《诗艺》第 294 行）。伽利略在本观测志中十余次连用 ad unguem，专门标示未发生南北纬度偏折的严格共线状态。'
          }
        ]
      },
      {
        id: 'sn-s4-fig21',
        type: 'verse',
        original: 'Ori.       *   O   *        *  Occ.',
        zh: '东　　　　✦　○　✦　　　　　✦　西'
      },
      {
        id: 'sn-s4-p11',
        type: 'paragraph',
        num: '§ 11',
        original:
          'duae Iovem intercipiebant, ab eo per min. 0, sec. 40 hinc inde remotae; tertia vero occidentalis a Iove distabat min. 8. Iovi proximae non maiores, sed lucidiores apparebant remotiori.\nDie decimaseptima, hora ab occasu 0, min. 30, huiusmodi fuit configuratio:',
        zh: '两颗星夹持着木星，在东西两侧各距木星零角分四十角秒；西侧第三颗则距木星八角分。紧靠木星的两颗看起来并不比远处那颗更大，却更为明亮。\n十七日，日落后零小时三十分，星位格局如下：'
      },
      {
        id: 'sn-s4-fig22',
        type: 'verse',
        original: 'Ori.      *    O           *  Occ.',
        zh: '东　　　✦　　○　　　　　　　✦　西'
      },
      {
        id: 'sn-s4-p12',
        type: 'paragraph',
        num: '§ 12',
        original:
          'Stella una tantum orientalis a Iove distabat min. 3; occidentalis pariter una, a Iove distans min. 11. Orientalis duplo maior apparebat occidentali; nec plures aderant quam istae duae. Verum post horas quatuor, hora nempe proxime quinta, tertia ex parte orientali emergere coepit, quae antea, ut opinor, cum priori iuncta erat; fuitque talis positio:',
        zh: '东侧只有一颗星，距木星三角分；西侧同样只有一颗，距木星十一角分。东侧那颗看起来比西侧那颗大一倍；除这两颗外并无他星。然而四个小时之后，即大约第五小时，第三颗星开始在东侧浮现——我揣想它先前正与前一颗重合在一起；其方位如下：'
      },
      {
        id: 'sn-s4-fig23',
        type: 'verse',
        original: 'Ori.     **    O           *  Occ.',
        zh: '东　　　✦　　○　　　　　　　✦　西\n　　　　　✦'
      },
      {
        id: 'sn-s4-p13',
        type: 'paragraph',
        num: '§ 13',
        original:
          'Media Stella, orientali quam proxima, min. tantum sec. 20 elongabatur ab illa, et a linea recta, per extremas et Iovem producta, paululum versus austrum declinabat.\nDie decima octava, hora 0, min. 20 ab occasu, talis fuit aspectus:',
        zh: '居中那颗星紧挨着东侧那颗，距它仅二十角秒，并从穿过两侧外星与木星所引的直线上略微向南偏斜。\n十八日，日落后零小时二十分，外貌如下：'
      },
      {
        id: 'sn-s4-fig24',
        type: 'verse',
        original: 'Ori.   *       O          *   Occ.',
        zh: '东　　✦　　　　　○　　　　　　✦　西'
      },
      {
        id: 'sn-s4-p14',
        type: 'paragraph',
        num: '§ 14',
        original:
          'erat Stella orientalis maior occidentali, et a Iove distans min. pr. 8: occidentalis vero a Iove aberat min. 10.\nDie decimanona, hora noctis secunda, talis fuit Stellarum coordinatio:',
        zh: '东侧那颗星大于西侧那颗，距木星八角分；西侧那颗则距木星十角分。\n十九日，入夜第二小时，群星排列如下：'
      },
      {
        id: 'sn-s4-fig25',
        type: 'verse',
        original: 'Ori.    *      O     *    *   Occ.',
        zh: '东　　✦　　　　○　　　✦　　✦　西'
      },
      {
        id: 'sn-s4-p15',
        type: 'paragraph',
        num: '§ 15',
        original:
          'erant nempe secundum rectam lineam ad unguem tres cum Iove Stellae: orientalis una, a Iove distans min. pr. 6: inter Iovem et primam sequentem occidentalem mediabat min. 5 interstitium: haec autem ab occidentaliori aberat min. 4. Anceps eram tunc, nunquid inter orientalem Stellam et Iovem Stellula mediaret, verum Iovi quamproxima, adeo ut illum fere tangeret. At, hora quinta, hanc manifeste vidi medium iam inter Iovem et orientalem Stellam locum exquisite occupantem, ita ut talis fuerit configuratio:',
        zh: '三颗星与木星分毫不差地排成一条直线：东侧一颗，距木星六角分；木星与西侧紧随的第一颗之间隔着五角分的间距；这一颗距更西侧那颗则为四角分。当时我心中犹疑，不知在东侧那颗星与木星之间是否还夹着一颗极靠近木星、几乎与木星相切的小星。但到了第五小时，我便清楚看见这颗小星已恰好占据木星与东侧那颗星正中间的位置，构成如下格局：'
      },
      {
        id: 'sn-s4-fig26',
        type: 'verse',
        original: 'Ori.    *  *   O     *    *   Occ.',
        zh: '东　　✦　　✦　　○　　　✦　　✦　西'
      },
      {
        id: 'sn-s4-p16',
        type: 'paragraph',
        num: '§ 16',
        original:
          'Stella insuper novissime conspecta admodum exigua fuit; veruntamen, hora sexta, reliquis magnitudine fere fuit aequalis.\nDie vigesima, hora 1, min. 15, constitutio consimilis visa est:',
        zh: '况且这颗最新看清的小星起初极为细小；然而到了第六小时，它在大小上已几乎与其余几颗相等。\n二十日，一小时十五分，见到了相似的格局：'
      },
      {
        id: 'sn-s4-fig27',
        type: 'verse',
        original: 'Ori.       *   O  * *         Occ.',
        zh: '东　　　　✦　○　✦　✦　　　　西'
      },
      {
        id: 'sn-s4-p17',
        type: 'paragraph',
        num: '§ 17',
        original:
          'aderant tres Stellulae adeo exiguae, ut vix percipi possent: a Iove, et inter se non magis distabant minuto uno: incertus eram, nunquid ex occidente duae, an tres, adessent Stellulae. Circa horam sextam hoc pacto erant dispositae:',
        zh: '在场的三颗小星细小得几乎难以察觉；它们距木星及彼此之间的距离皆不超过一角分；我拿不准西侧究竟是有两颗还是三颗小星。大约第六小时，它们按如下方式排列：'
      },
      {
        id: 'sn-s4-fig28',
        type: 'verse',
        original: 'Ori.      *    O  **          Occ.',
        zh: '东　　　✦　　○　✦✦　　　　　西'
      },
      {
        id: 'sn-s4-p18',
        type: 'paragraph',
        num: '§ 18',
        original:
          'orientalis enim a Iove duplo magis aberat quam antea, nempe min. 2; media occidentalis a Iove distabat min. 0, sec. 40, ab occidentaliori vero min. 0, sec. 20. Tandem, hora septima, tres ex occidente visae fuerunt Stellulae:',
        zh: '此时东侧那颗距木星比先前远了一倍，即两角分；西侧居中那颗距木星零角分四十角秒，距更西侧那颗则为零角分二十角秒。终于到了第七小时，西侧清楚显出了三颗小星：'
      },
      {
        id: 'sn-s4-fig29',
        type: 'verse',
        original: 'Ori.      *    O ***          Occ.',
        zh: '东　　　✦　　○　✦　　✦　　　西\n　　　　　　　　　　✦'
      },
      {
        id: 'sn-s4-p19',
        type: 'paragraph',
        num: '§ 19',
        original:
          'Iovi proxima aberat ab eo min. 0, sec. 20; inter hanc et occidentaliorem intervallum erat minutorum secundorum 40: inter has vero alia spectabatur paululum ad meridiem deflectens, ab occidentaliori non pluribus decem secundis remota.\nDie vigesimaprima, hora 0, min. 30, aderant ex oriente Stellulae tres, aequaliter inter se et a Iove distantes:',
        zh: '最靠近木星的那颗距木星零角分二十角秒；它与最西侧那颗之间的间距为四十角秒；而在这两颗之间又可看到另一颗略微向南偏斜的小星，距最西侧那颗不超过十角秒。\n二十一日，零小时三十分，东侧有三颗小星，彼此之间及距木星的距离全都相等：'
      },
      {
        id: 'sn-s4-fig30',
        type: 'verse',
        original: 'Ori.    * * *  O    *         Occ.',
        zh: '东　　✦　✦　✦　○　　　✦　　　西'
      },
      {
        id: 'sn-s4-p20',
        type: 'paragraph',
        num: '§ 20',
        original:
          'interstitia vero, secundum existimationem, 50 secundorum minutorum fuere. Aderat quoque Stella ex occidente, a Iove distans min. pr. 4. Orientalis Iovi proxima erat omnium minima; reliquae vero aliquanto maiores, atque inter se proxime aequales.\nDie vigesima secunda, hora 2, consimilis fuit Stellarum dispositio:',
        zh: '据目测估计，各段间距约为五十角秒。西侧亦有一颗星，距木星四角分。东侧最靠近木星的那颗在众星中最小，其余几颗则略大一些，且彼此大小相近。\n二十二日，第二小时，群星排列相仿：'
      },
      {
        id: 'sn-s4-fig31',
        type: 'verse',
        original: 'Ori.     *     O * **      *  Occ.',
        zh: '东　　✦　　　○　✦　　　　✦　西\n　　　　　　　　　　✦'
      },
      {
        id: 'sn-s4-p21',
        type: 'paragraph',
        num: '§ 21',
        original:
          'a Stella orientali ad Iovem minutorum primorum 5 fuit intervallum, a Iove ad occidentaliorem pr. 7. Duae vero occidentales intermediae distabant ad invicem min. 0, sec. 40; propinquior vero Iovi aberat ab illo m. p. 1. Ipsae mediae Stellulae minores erant extremis: fuerunt vero secundum eandem rectam lineam iuxta Zodiaci longitudinem extensae, nisi quod trium occidentalium media paululum in austrum deflectebat. Sed, hora noctis sexta, in hac constitutione visae sunt:',
        zh: '从东侧那颗星到木星的间距为五角分，从木星到最西侧那颗为七角分。西侧居中的两颗彼此相距零角分四十角秒，较靠近木星的那颗距木星一角分。居中的这两颗小星小于两侧最外端的那两颗；它们沿黄道经度方向排在同一条直线上，唯西侧三星居中那颗略微向南偏斜。但到了入夜第六小时，它们呈现出如下格局：'
      },
      {
        id: 'sn-s4-fig32',
        type: 'verse',
        original: 'Ori.     *     O  *  *  *     Occ.',
        zh: '东　　✦　　　○　✦　✦　✦　　西'
      },
      {
        id: 'sn-s4-p22',
        type: 'paragraph',
        num: '§ 22',
        original:
          'orientalis admodum exigua erat, distans a Iove, ut antea, min. pr. 5. Tres vero occidentales, et a Iove et ad invicem, aequaliter dirimebantur, erantque intercapedines singulae min. 1, sec. 20 proxime: et Stella Iovi vicinior, reliquis duabus sequentibus minor apparebat: omnesque in eadem recta exquisite dispositae videbantur.\nDie vigesima tertia, hora 0, min. 40 ab occasu, in hunc ferme modum Stellarum constitutio se habuit:',
        zh: '东侧那颗极为细小，仍如先前一样距木星五角分。西侧三颗星距木星及彼此之间的距离全都相等，每段间距各约一角分二十角秒；最靠近木星的那颗星看起来小于随后两颗；所有星辰看起来都精准地排在同一条直线上。\n二十三日，日落后零小时四十分，群星格局大致如下：'
      },
      {
        id: 'sn-s4-fig33',
        type: 'verse',
        original: 'Ori.  *      * O   *          Occ.',
        zh: '东　✦　　　　✦　○　　✦　　　西'
      },
      {
        id: 'sn-s4-p23',
        type: 'paragraph',
        num: '§ 23',
        original:
          'erant tres Stellae cum Iove in recta linea secundum Zodiaci longitudinem, veluti semper fuerunt: orientales erant duae, una vero occidentalis. Orientalior aberat a sequenti min. pr. 7, haec vero a Iove min. 2, sec. 40, Iuppiter ab occidentali min. 3, sec. 20: erantque omnes magnitudine fere aequales. Sed, hora quinta, duae Stellae, quae prius Iovi erant proximae, amplius non cernebantur, sub Iove, ut arbitror, latitantes; fuitque talis aspectus:',
        zh: '三颗星与木星一如既往沿黄道经度排成直线：东侧两颗，西侧一颗。最东侧那颗距次东侧那颗七角分，次东侧那颗距木星两角分四十角秒，木星距西侧那颗三角分二十角秒；众星大小几乎相等。但到了第五小时，先前紧靠木星的那两颗星不再得见——我揣度它们正隐没在木星背后；其外貌如下：'
      },
      {
        id: 'sn-s4-fig34',
        type: 'verse',
        original: 'Ori.  *        O              Occ.',
        zh: '东　✦　　　　　　○　　　　　　西'
      },
      {
        id: 'sn-s4-p24',
        type: 'paragraph',
        num: '§ 24',
        original:
          'Die vigesimaquarta, tres Stellae, orientales omnes, visae sunt, ac fere in eadem cum Iove recta linea:',
        zh: '二十四日，见到三颗星全都位于东侧，且几乎与木星处在同一条直线上：'
      },
      {
        id: 'sn-s4-fig35',
        type: 'verse',
        original: 'Ori.  *        **  O          Occ.',
        zh: '东　✦　　　　　　✦　○　　　　西\n　　　　　　　　✦'
      },
      {
        id: 'sn-s4-p25',
        type: 'paragraph',
        num: '§ 25',
        original:
          'media enim modice in austrum deflectebat. Iovi propinquior distabat ab eo min. 2, sequens ab hac min. 0, sec. 30, ab hac vero aberat orientalior min. 9: erantque omnes admodum splendidae. Hora vero sexta, duae solummodo sese offerebant Stellae in hoc positu:',
        zh: '唯居中那颗略微向南偏斜。最靠近木星的那颗距木星两角分，次一颗距它零角分三十角秒，最东侧那颗距次一颗九角分；三颗全都极为璀璨。然而到了第六小时，却只有两颗星现身，呈如下方位：'
      },
      {
        id: 'sn-s4-fig36',
        type: 'verse',
        original: 'Ori.  *       *   O           Occ.',
        zh: '东　✦　　　　　✦　　○　　　　西'
      },
      {
        id: 'sn-s4-p26',
        type: 'paragraph',
        num: '§ 26',
        original:
          'nempe cum Iove in eadem recta linea ad unguem, a quo elongabatur propinquior min. p. 3, altera vero ab hac min. p. 8: in unam, ni fallor, coierant duae mediae prius observatae Stellulae.\nDie vigesimaquinta, hora 1, min. 40, ita se habebat constitutio:',
        zh: '亦即分毫不差地与木星排在同一条直线上，较近的一颗距木星三角分，另一颗距这一颗八角分：倘若我没有猜错，先前观测到的居中那两颗小星此时已合并成一颗了。\n二十五日，一小时四十分，格局如下：'
      },
      {
        id: 'sn-s4-fig37',
        type: 'verse',
        original: 'Ori.   *     *      O         Occ.',
        zh: '东　　✦　　　✦　　　　○　　　西'
      },
      {
        id: 'sn-s4-p27',
        type: 'paragraph',
        num: '§ 27',
        original:
          'aderant enim duae tantum Stellae ex orientali plaga, eaeque satis magnae: orientalior a media distabat min. 5, media vero a Iove min. 6.\nDie vigesima sexta, hora 0, min. 40, Stellarum coordinatio eiusmodi fuit:',
        zh: '只有两颗星位于东侧，且都相当硕大：最东侧那颗距居中那颗五角分，居中那颗距木星六角分。\n二十六日，零小时四十分，群星排列如下：'
      },
      {
        id: 'sn-s4-fig38',
        type: 'verse',
        original: 'Ori.  *     *     O     *     Occ.',
        zh: '东　✦　　　✦　　　○　　　✦　　西'
      },
      {
        id: 'sn-s4-p28',
        type: 'paragraph',
        num: '§ 28',
        original:
          'spectabantur enim Stellae tres, quarum duae orientales, tertia occidentalis a Iove: haec ab eo min. 5 aberat, media vero orientalis ab eodem distabat min. 5, sec. 20; orientalior vero a media min. 6: in eadem recta constitutae, et eiusdem magnitudinis erant. Hora deinde quinta, constitutio fere eadem fuit; in hoc tantum discrepans, quod prope Iovem quarta Stellula ex oriente emergebat, caeteris minor, a Iove tunc remota min. 30, sed paululum a recta linea versus Boream attollebatur, ut apposita figura demonstrat:',
        zh: '可见三颗星，其中两颗在木星以东，第三颗在木星以西：西侧这颗距木星五角分，东侧居中那颗距木星五角分二十角秒，最东侧那颗距居中那颗六角分；它们排在同一条直线上，且大小相同。随后到了第五小时，格局大体如旧，唯一的差别在于紧靠木星东侧新浮现出第四颗小星，比其余几颗更小，[当时距木星三十角分]{#g-sn-s4-06}，但从直线上略微向北抬升，如附图所示：',
        glosses: [
          {
            id: 'g-sn-s4-06',
            anchor: '当时距木星三十角分',
            content:
              '威尼斯初版与法瓦罗国家版拉丁原文此处均印作「a Iove tunc remota min. 30」（字面为三十角分），实为「min. sec. 30」（三十角秒）之漏略笔误或排印省文：一则木星最外侧卫星木卫四的最大距角亦不超过十至十一角分，绝无距木星三十角分之理；二则原文明言该星「紧靠木星东侧新浮现」（prope Iovem ex oriente emergebat），初版星位图亦将其紧贴于木星圆圈东侧边缘。为严格忠实底本字面，正文保留原貌而于此勘明。'
          }
        ]
      },
      {
        id: 'sn-s4-fig39',
        type: 'verse',
        original: 'Ori.  *     *    *O     *     Occ.',
        zh: '　　　　　　　　✦\n东　✦　　　✦　　○　　　✦　　西'
      },
      {
        id: 'sn-s4-p29',
        type: 'paragraph',
        num: '§ 29',
        original:
          'Die vigesima septima, hora 1 ab occasu, unica tantum Stellula conspiciebatur, eaque orientalis, secundum hanc constitutionem:',
        zh: '二十七日，日落后第一小时，只能看见唯一一颗小星，位于东侧，格局如下：'
      },
      {
        id: 'sn-s4-fig40',
        type: 'verse',
        original: 'Ori.   *       O              Occ.',
        zh: '东　　✦　　　　○　　　　　　西'
      },
      {
        id: 'sn-s4-p30',
        type: 'paragraph',
        num: '§ 30',
        original:
          'eratque admodum exigua, et a Iove remota min. 7.\nDie vigesima octava et vigesima nona, ob nubium interpositionem nihil observare licuit.\nDie trigesima, hora prima noctis, tali pacto constituta spectabantur Sidera:',
        zh: '它极为细小，距木星七角分。\n二十八日与二十九日，因云层遮挡，无从作任何观测。\n三十日，入夜第一小时，见群星按如下方式排布：'
      },
      {
        id: 'sn-s4-fig41',
        type: 'verse',
        original: 'Ori.      *    O   * *        Occ.',
        zh: '　　　　　　　　　　✦\n东　　　✦　　○　　　✦　　　西'
      },
      {
        id: 'sn-s4-p31',
        type: 'paragraph',
        num: '§ 31',
        original:
          'unum aderat orientale, a Iove distans min. 2, sec. 30, duo vero ex occidente, quorum Iovi propinquius aberat ab eo min. 3, reliquum ab hoc min. 1: extremorum et Iovis positus in eadem recta linea fuit, at media Stella paululum in Boream attollebatur: occidentalior fuit reliquis minor.\nDie ultima, hora secunda, visae sunt orientales Stellae duae, una vero occidua:',
        zh: '东侧有一颗，距木星两角分三十角秒；西侧有两颗，其中较靠近木星的那颗距木星三角分，另一颗距它一角分；两侧外星与木星处在同一条直线上，唯西侧居中那颗星略微向北抬升；最西侧那颗小于其余两颗。\n本月最后一日，第二小时，见到东侧两颗星、西侧一颗星：'
      },
      {
        id: 'sn-s4-fig42',
        type: 'verse',
        original: 'Ori.     **    O          *   Occ.',
        zh: '　　　　　✦\n东　　　✦　　○　　　　　　✦　西'
      },
      {
        id: 'sn-s4-p32',
        type: 'paragraph',
        num: '§ 32',
        original:
          'Orientalium media a Iove aberat min. 2, sec. 20; orientalior vero ab ipsa media min. 0, sec. 30; occidentalis distabat a Iove min. 10: erant in eadem recta linea proxime, orientalis tantum Iovi vicinior modicum quiddam in Septentrionem elevabatur. Hora vero quarta,',
        zh: '东侧居中那颗距木星两角分二十角秒，最东侧那颗距居中这颗零角分三十角秒，西侧那颗距木星十角分；它们大致处在同一条直线上，唯东侧较靠近木星的那颗略微向北抬高少许。到了第四小时，'
      },
      {
        id: 'sn-s4-fig43',
        type: 'verse',
        original: 'Ori.     **    O          *   Occ.',
        zh: '　　　　✦\n东　　　✦　　○　　　　　　✦　西'
      },
      {
        id: 'sn-s4-p33',
        type: 'paragraph',
        num: '§ 33',
        original:
          'duae orientales viciniores ad invicem adhuc erant; aberant enim solummodo min. sec. 20. Apparuit in hisce observationibus occidentalis Stella satis exigua.',
        zh: '东侧两颗星彼此靠得更近了，相距仅二十角秒。在这几次观测中，西侧那颗星显得颇为细小。'
      }
    ]
  }
];
