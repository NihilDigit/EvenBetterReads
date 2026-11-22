import type { BookSection } from '../../../types/book';

export const dedicationTelescopeSections: BookSection[] = [
  {
    id: 'praefatio-dedicatio',
    roman: 'Praefatio',
    titleOriginal:
      'Titulus, Epistola Dedicatoria ad Cosmum II Medices et Licentia Consilii X',
    titleZh: '一六一〇年初版扉页、致科西莫二世献辞与威尼斯十人团准印状',
    aiModel: 'Gemini-4-Carbon',
    blocks: [
      {
        id: 'sn-ded-p01',
        type: 'paragraph',
        num: '§ 01',
        original:
          'SIDEREUS NUNCIUS, MAGNA, LONGEQUE ADMIRABILIA Spectacula pandens, suspiciendaque proponens unicuique, praesertim vero PHILOSOPHIS, atq. ASTRONOMIS, quae a GALILEO GALILEO PATRITIO FLORENTINO Patavini Gymnasii Publico Mathematico PERSPICILLI Nuper a se reperti beneficio sunt observata in LUNAE FACIE, FIXIS INNUMERIS, LACTEO CIRCULO, STELLIS NEBULOSIS, Apprime vero in QUATUOR PLANETIS Circa IOVIS Stellam disparibus intervallis, atque periodis, celeritate mirabili circumvolutis; quos, nemini in hanc usque diem cognitos, novissime Author depraehendit primus; atque MEDICEA SIDERA NUNCUPANDOS DECREVIT. VENETIIS, Apud Thomam Baglionum. M DC X. Superiorum Permissu, & Privilegio.',
        zh: '[《星际信使》]{#g-sn-ded-01}：向世人——尤其是**哲学家与天文学家**——展布并呈献伟大而奇异的壮观景象；此乃[佛罗伦萨贵族、帕多瓦大学公立数学教授伽利略·伽利莱]{#g-sn-ded-02}借其[新近创制的窥镜]{#g-sn-ded-03}之助，在**月球表面、无数恒星、银河天带、星云状星体**之中，首要更在**四颗行星**之上所观测到的奇观——这四颗行星以不等的间距与周期、凭惊人的速度环绕木星运行，直至今日从未为任何前人所知，由著者最新率先察获，并决意命名为**「美第奇之星」**。一六一〇年刊于威尼斯，托马索·巴廖尼印行。奉尊长准许并享专印特权。',
        glosses: [
          {
            id: 'g-sn-ded-01',
            anchor: '《星际信使》',
            content:
              '拉丁语书名 Sidereus Nuncius（古典拼写亦作 Sidereus Nuntius）自一六一〇年三月十三日在威尼斯印行五百五十册并迅速售罄之日起，即蕴含著名的古典语文学双关：阳性名词 nuncius 既可指「信使、使者」，亦可指「讯息、战报、通告」。一六一〇年四月，帝国数学家约翰内斯·开普勒撰成回应小册《与星际信使的对话》（Dissertatio cum Nuncio Sidereo），率先将其拟人化理解为「来自星空的信使」；一六一九年耶稣会天文学家奥拉齐奥·格拉齐在彗星论战中借此讥讽伽利略自诩天界使者，伽利略遂在一六二三年《试金者》（Il Saggiatore）中专门辩白，声称拉丁语 nuncius 在本书原意实为「讯息、通报」（意大利语 ambasciata），而非信使本人。然四百年来，自开普勒确立的「星际信使」译名已成科学史定称。'
          },
          {
            id: 'g-sn-ded-02',
            anchor: '佛罗伦萨贵族、帕多瓦大学公立数学教授伽利略·伽利莱',
            content:
              '一六一〇年威尼斯巴廖尼初版扉页因排印仓促，误将作者署名排作夺格重文「a GALILEO GALILEO」（后世校勘本依作者通例正作 Galileo Galilei）。伽利莱家族系佛罗伦萨共和国古老的市民贵族世家（Patritius Florentinus，十四至十五世纪曾出任执政团成员与正义旗手）；伽利略本人自一五九二年起执掌威尼斯共和国治下帕多瓦大学（Patavinum Gymnasium）数学讲席长达十八年，本书正是他借天象大发现谋求辞去教学重负、重返故乡佛罗伦萨宫廷任职的敲门砖。'
          },
          {
            id: 'g-sn-ded-03',
            anchor: '新近创制的窥镜',
            content:
              '拉丁语 perspicillum（源自动词 perspicere「看穿、透视」，本指老花镜或凹凸透镜片，意大利语作 occhiale 或 cannocchiale）。一六一〇年春本书付梓时，「望远镜」（telescopium，由古希腊语 τῆλε「远」与 σκοπεῖν「观看」复合而成）一词尚未问世；直至一六一一年四月十四日，林琴科学院（Accademia dei Lincei）创办人费代里科·切西亲王在罗马雅尼库鲁姆山设宴欢迎伽利略入社时，方才正式公布由希腊数学家伊奥安尼斯·德米西亚尼（Ioannes Demisiani）创制的希腊化新词 telescopium。为保存一六一〇年科学术语原貌，本译本依原词直译为「窥镜」。'
          }
        ]
      },
      {
        id: 'sn-ded-p02',
        type: 'paragraph',
        num: '§ 02',
        original:
          'SERENISSIMO COSMO MEDICES II, MAGNO ETRURIAE DUCI IIII.\nPraeclarum sane atque humanitatis plenum eorum fuit institutum, qui excellentium virtute virorum res praeclare gestas ab invidia tutari, eorumque immortalitate digna nomina ab oblivione atque interitu vindicare, conati sunt. Hinc ad memoriam posteritatis proditae imagines, vel marmore insculptae, vel ex aere fictae; hinc positae statuae, tam pedestres, quam equestres; hinc columnarum atque pyramidum, ut inquit ille, sumptus ad sidera ducti; hinc denique urbes aedificatae, eorumque insignitae nominibus, quos grata posteritas aeternitati commendandos existimavit. Eiusmodi est enim humanae mentis conditio, ut nisi assiduis rerum simulacris in eam extrinsecus irrumpentibus pulsetur, omnis ex illa recordatio facile effluat.',
        zh: '谨献给[最尊贵的托斯卡纳第四代大公科西莫二世·德·美第奇]{#g-sn-ded-04}：\n凡竭力护卫卓绝有德之士的丰功伟绩免遭嫉恨侵蚀、挽救其堪配不朽之英名免于遗忘与泯灭的人，他们所立下的规制诚然高尚辉煌，且饱含人文温情。正因如此，才有雕诸大理石或铸诸青铜的肖像留传后世以资铭记；才有步立与骑乘的塑像巍然耸立；才有[诚如那位诗人所言，高耸入云的纪功柱与金字塔之豪举]{#g-sn-ded-05}；最后也才有城池兴筑，并冠以那些被感念后人认为理当托付给永恒之辈的名讳。盖因人类心智的禀赋便是如此：倘若没有外在事物的形象持续不断地闯入并叩击它，一切记忆都会轻易从中流逝。',
        glosses: [
          {
            id: 'g-sn-ded-04',
            anchor: '最尊贵的托斯卡纳第四代大公科西莫二世·德·美第奇',
            content:
              '科西莫二世·德·美第奇（Cosimo II de’ Medici，1590—1621），斐迪南一世与洛林的克里斯蒂娜之长子，一六〇九年二月继任托斯卡纳第四代大公（拉丁语 Etruria 即古伊特鲁里亚，文艺复兴人文主义拉丁文用以指代托斯卡纳）。据一六一〇年二月伽利略与托斯卡纳国务秘书贝利萨里奥·温塔（Belisario Vinta）的往返密信，伽利略最初曾在「科西莫之星」（Cosmica Sidera，亦暗合希腊语 κόσμος「宇宙」双关）与「美第奇之星」（Medicea Sidera）之间权衡，温塔建议采用家族姓氏「美第奇之星」，以便将科西莫二世本人及其三位胞弟弗朗切斯科、卡洛、洛伦佐一并纳入天象荣耀。'
          },
          {
            id: 'g-sn-ded-05',
            anchor: '诚如那位诗人所言，高耸入云的纪功柱与金字塔之豪举',
            content:
              '化用古罗马挽歌诗人普罗佩提乌斯（Propertius）《哀歌集》第三卷第二首（Elegiae III.2.19：「金字塔耗费巨资直抵星辰」，Pyramidum sumptus ad sidera ducti）与贺拉斯《颂诗集》第三卷第三十首（Carmina III.30.1–2：「我已筑起一座比青铜更恒久、比王家金字塔更高耸的纪念碑」）。伽利略直接嵌用普罗佩提乌斯的原句词组 sumptus ad sidera ducti，为下文从地面石碑转向真实星空埋下修辞伏笔。'
          }
        ]
      },
      {
        id: 'sn-ded-p03',
        type: 'paragraph',
        num: '§ 03',
        original:
          'Verum alii firmiora ac diuturniora spectantes aeternum summorum virorum praeconium non saxis ac metallis, sed Musarum custodiae et incorruptis litterarum monumentis consecrarunt. At quid ego ista commemoro? quasi vero humana solertia, his contenta regionibus, ulterius progredi non sit ausa; attamen longius illa prospiciens, cum optime intelligeret, omnia humana monumenta vi tempestate ac vetustate tandem interire, incorruptiora signa excogitavit, in quae tempus edax atque invidiosa vetustas nullum sibi ius vindicaret. In caelum itaque migrans, clarissimorum Siderum notis sempiternis illis Orbibus eorum nomina consignavit, qui ob egregia ac prope divina facinora digni habiti sunt, qui una cum Astris aevo sempiterno fruerentur. Quam ob rem non prius Iovis, Martis, Mercurii, Herculis caeterorumque heroum, quorum nominibus Stellae appellantur, fama obscurabitur, quam ipsorum Siderum splendor extinguatur.',
        zh: '然而，另有一些人着眼于更加坚固、更加长久的事物，他们不把至高伟人的永恒礼赞托付给顽石与金属，而是奉献给缪斯的守护与不朽的文学典籍。可我又何必重提这些呢？仿佛人类的巧思满足于尘世疆域，便不敢再向前迈进一步似的；实则它目光更为深远，深知一切人造纪念物终究都会毁于外力、风暴与岁月侵蚀，遂构想出更为不朽的标记，令[吞噬万物的光阴与善妒的岁月]{#g-sn-ded-06}无从对之主张丝毫权利。于是，人类的巧思迁居天界，借最璀璨星辰的印记，将那些因超凡而近乎神圣的功业被视为堪与群星共享万古永生之人的名字，铭刻在永恒的天球之上。正因如此，朱庇特、玛尔斯、墨丘利、赫拉克勒斯以及其余众英雄——星辰正是以他们的名字命名的——其盛名除非等到星辰本身的光辉熄灭，否则永不黯淡。',
        glosses: [
          {
            id: 'g-sn-ded-06',
            anchor: '吞噬万物的光阴与善妒的岁月',
            content:
              '直接征引古罗马诗人奥维德《变形记》第十五卷名句（Metamorphoses XV.234）：「吞噬万物的光阴，还有你，善妒的岁月，你们摧毁一切」（Tempus edax rerum, tuque, invidiosa vetustas, omnia destruitis）。'
          }
        ]
      },
      {
        id: 'sn-ded-p04',
        type: 'paragraph',
        num: '§ 04',
        original:
          'Hoc autem humanae sagacitatis inventum, cum primis nobile ac mirandum, multorum iam saeculorum intervallo exolevit, priscis heroibus lucidas illas sedes occupantibus ac suo quasi iure tenentibus: in quorum coetum frustra pietas Augusti Iulium Caesarem cooptare conata est; nam cum Stellam suo tempore exortam, ex iis quas Graeci Cometas, nostri Crinitas vocant, Iulium Sidus nuncupari voluisset, brevi illa evanescens, tantae cupiditatis spem delusit. Atqui longe veriora ac feliciora, Princeps Serenissime, Celsitudini tuae possumus augurari; nam vix dum in terris immortalia animi tui decora fulgere coeperunt, cum in Caelis lucida Sidera sese offerunt, quae tanquam linguae praestantissimas virtutes tuas in omne tempus loquantur ac celebrent. En igitur quatuor Sidera tuo inclyto nomini reservata, neque illa de gregario ac minus insigni inerrantium numero, sed ex illustri vagantium ordine; quae quidem disparibus inter se motibus circum Iovis Stellam caeterarum nobilissimam, tanquam germana eius progenies, cursus suos orbesque conficiunt celeritate mirabili, interea dum unanimi concordia circa mundi centrum, circa Solem nempe ipsum, omnia simul duodecimo quoque anno magnas convolutiones absolvunt.',
        zh: '不过，人类睿智的这一无比高贵而奇妙的创举，历经漫长世纪的间隔早已废弛，因为上古众英雄早已占据那些璀璨席位，俨然将其据为己有；[奥古斯都的一片孝思曾徒劳地试图将尤利乌斯·恺撒增补进这一行列]{#g-sn-ded-07}——当他意欲把自己在位时代出现的一颗星（即希腊人称为「彗星」、我国古人称为「长发星」的那一类天体）命名为「尤利乌斯之星」时，那颗星不久便消逝无踪，辜负了如此热切的期盼。然而，最尊贵的君主啊，我们却能向殿下预告远为真实、远为吉祥的征兆：因为殿下灵魂的不朽风采在地上刚刚开始闪耀，天界便有璀璨星辰主动现身，宛如千万条舌头，在万古岁月中传诵并礼赞殿下最卓绝的美德。请看，这四颗星辰正是专为殿下显赫的名讳而留存的；它们并非出自寻常而不甚起眼的恒星之群，而是属于尊贵的游星行列；它们以彼此不等的运动，宛如嫡亲血脉一般，凭惊人的速度环绕众星之中最高贵的木星完成各自的轨道运行，与此同时又齐心协力，[每隔十二年一同绕着宇宙的中心——亦即绕着太阳本身——完成宏大的公转]{#g-sn-ded-08}。',
        glosses: [
          {
            id: 'g-sn-ded-07',
            anchor: '奥古斯都的一片孝思曾徒劳地试图将尤利乌斯·恺撒增补进这一行列',
            content:
              '公元前四十四年七月，屋大维（后来的奥古斯都）为遇刺养父尤利乌斯·恺撒举行葬礼竞技会期间，白昼天空连续七日出现一颗耀眼大彗星（现代编号 C/-43 K1）。屋大维宣称此乃恺撒灵魂升入神界之兆，将其命名为「尤利乌斯之星」（Sidus Iulium 或 Caesaris astrum，见老普林尼《自然史》卷二第九十三至九十四节、苏维托尼乌斯《神圣的尤利乌斯传》第八十八节及维吉尔《牧歌》第九首）。拉丁语 crinita（意为「披散长发的星」）正是希腊语 κομήτης（komētēs，「蓄长发者」）的意译。'
          },
          {
            id: 'g-sn-ded-08',
            anchor: '每隔十二年一同绕着宇宙的中心——亦即绕着太阳本身——完成宏大的公转',
            content:
              '木星绕太阳公转的恒星周期约为十一点八六年（古称岁星十二年一周天）。值得注意的是，伽利略在此处致托斯卡纳大公的公开献辞中，毫不掩饰地将「宇宙的中心」（mundi centrum）直接等同于「太阳本身」（Solem nempe ipsum），公开亮出其自一五九七年致开普勒书信以来私下秉持的哥白尼日心体系立场。'
          }
        ]
      },
      {
        id: 'sn-ded-p05',
        type: 'paragraph',
        num: '§ 05',
        original:
          'Ut autem inclito Celsitudinis tuae nomini prae ceteris novos hosce Planetas destinarem, ipsemet Siderum Opifex perspicuis argumentis me admonere visus est. Etenim, quemadmodum hae Stellae, tanquam Iove digna proles, nunquam ab illius latere, nisi exiguo intervallo, discedunt; ita quis ignorat clementiam, animi mansuetudinem, morum suavitatem, regii sanguinis splendorem, in actionibus maiestatem, auctoritatis et Imperii in alios amplitudinem, quae quidem omnia in tua Celsitudine sibi domicilium ac sedem collocarunt, quis, inquam, ignorat, haec omnia ex benignissimo Iovis astro, secundum Deum omnium bonorum fontem, emanare? Iuppiter, Iuppiter, inquam, a primo Celsitudinis tuae ortu, turbidos horizontis vapores iam transgressus, mediumque caeli cardinem occupans, orientalemque angulum sua regia illustrans, felicissimum partum ex sublimi illo throno prospexit, omnemque splendorem atque amplitudinem suam in purissimum aërem profudit, ut universam illam vim ac potestatem tenerum corpusculum una cum animo, nobilioribus ornamentis iam a Deo decorato, primo spiritu hauriret.',
        zh: '至于我为何要越过旁人、将这几颗新行星专门献给殿下显赫的名讳，仿佛正是群星的造物主本人以昭然若揭的凭据点醒了我。诚然，正如这几颗星辰宛如堪配木星的子嗣，除极微小的间距外从不离开木星身侧；试问谁人不知，仁慈、心性的温厚、仪态的雍容、王室血统的光辉、行事的威严，以及统御万民的崇高权威——这一切美德既已在殿下身上安家落座——试问谁人不知，在万善之源的上帝之下，这一切全都流溢自最仁慈的木星？正是木星，我说正是木星，[自殿下降生之初便已越过地平线上浑浊的蒸气，坐镇中天枢轴，并以自己的王宫照亮东方命宫之角]{#g-sn-ded-09}，从那崇高的宝座上俯瞰这至吉的诞辰，将自身全部光辉与宏伟倾注进至纯的大气之中，好让殿下娇嫩的初生之躯连同早已蒙上帝饰以更高贵禀赋的灵魂，在吸入第一口气息时便将那全部力量与权能悉数汲入胸怀。',
        glosses: [
          {
            id: 'g-sn-ded-09',
            anchor: '自殿下降生之初便已越过地平线上浑浊的蒸气，坐镇中天枢轴，并以自己的王宫照亮东方命宫之角',
            content:
              '此处化用文艺复兴宫廷盛行的生辰星占学（genethliaca）与美第奇家族自科西莫一世以来确立的「木星—奥古斯都」王朝图像学。科西莫二世生于一五九〇年五月十二日佛罗伦萨夜间：在古典占星天宫图中，「中天枢轴」（medium caeli cardo，即第十宫天顶 MC）主掌君权、威望与荣耀，「东方之角」（orientalis angulus，即第一宫上升命宫 Ascendens）当时落在人马座，而人马座正是木星的昼间本垣「王宫」（regia / domicilium）。需要指出的是，按文艺复兴天主教正统神学（托马斯·阿奎那《神学大全》及一五八六年教宗西克斯图斯五世通谕 Coeli et terrae），星象仅能影响人的肉体气质而绝不能决定自由意志，故伽利略特意补入「在万善之源的上帝之下」与「灵魂早已蒙上帝饰以更高贵禀赋」两道神学安全阀。'
          }
        ]
      },
      {
        id: 'sn-ded-p06',
        type: 'paragraph',
        num: '§ 06',
        original:
          'Verum, quid ego probabilibus utor argumentationibus, cum id necessaria propemodum ratione concludere ac demonstrare queam? Placuit Deo Optimo Maximo, ut a Serenissimis parentibus tuis non indignus existimarer, qui Celsitudini tuae in tradendis Mathematicis disciplinis operam navarem; quod quidem praestiti quatuor superioribus annis proxime elapsis, eo anni tempore, quo a severioribus studiis ocium esse consuevit. Quo circa cum mihi divinitus plane contigerit, ut Celsitudini tuae inservirem, atque ideo incredibilis clementiae ac benignitatis tuae radios propius exceperim, quid mirum si animus meus adeo incaluit, ut nihil aliud propemodum dies noctesque meditetur, quam ut ego, qui non solum animo, sed etiam ipso ortu ac natura, sub tua dominatione sum, tuae gloriae cupidissimus et quam gratissimus erga te esse cognoscar? Quae cum ita sint, cum, te Auspice, COSME Serenissime, has Stellas superioribus Astronomis omnibus incognitas exploraverim, optimo iure eas Augustissimo Prosapiae tuae nomine insignire decrevi. Quod si illas primus indagavi, quis me iure reprehendat, si iisdem quoque nomen imposuero, ac MEDICEA SIDERA appellaro? sperans fore, ut tantum dignitatis ex hac appellatione iis Sideribus accedat, quantum alia caeteris Heroibus attulerunt. Nam, ut taceam de Serenissimis tuis Maioribus, quorum gloriam sempiternam omnium historiarum monumenta testantur, sola tua virtus, Maxime Heros, illis Astris impertiri potest nominis immortalitatem. Cui enim dubium esse potest, quin, quam tui expectationem felicissimis imperii auspiciis concitasti, quamvis summam, eam non solum sustineas ac tuearis, verum etiam longo intervallo superaturus sis? ut cum alios tui similes viceris, tecum nihilominus ipse certes, ac te ipso ac magnitudine tua in dies maior evadas.',
        zh: '不过，既然我几乎能够凭必然的推理论定并证明此事，又何必动用或然的修辞论据呢？蒙至善至大的上帝垂允，殿下最尊贵的双亲曾认为我尚不失格，命我效力于向殿下传授数学诸科；[在过去紧邻的四年间，每逢从繁重学业中得暇休沐的时节]{#g-sn-ded-10}，我确实履行了这一职责。因此，既然我显然是蒙天意眷顾而得以侍奉殿下，并得以近距离沐浴殿下无比仁慈与恩泽的光芒，那么我不仅在心志上、而且在出身与本性上皆为殿下治下臣民，如今心怀炽热，日夜思虑的几乎别无他事，唯愿世人知晓我最热切地仰慕殿下的荣光、对殿下怀有最深挚的感戴，这又有什么奇怪呢？既然如此，最尊贵的科西莫啊，既然我是在殿下的吉兆庇佑下探明了这些为往昔一切天文学家所未知的星辰，我便理直气壮地决意以殿下家族最崇高的姓氏为之冠名。倘若是我第一个将它们搜寻出来，那么我为它们命名、称之为**「美第奇之星」**，谁又有理由指责我呢？我深信，这一称号为这些星辰增添的尊荣，必不亚于其他星辰曾为其余众英雄带来的荣耀。因为，且不说殿下最尊贵的列祖列宗——一切史册典籍都在见证他们永恒的荣光——单凭殿下一人的美德，至伟的英雄啊，便足以赋予那些星辰以不朽的名声。殿下在嗣位之初的吉祥气象中激起了世人何等崇高的期许，试问谁会怀疑殿下不仅能担当并守护这份期许，更将远远超越它呢？以至于殿下在胜过其他同侪君王之后，仍将与自己较量，日复一日超越自我与自身的伟大。',
        glosses: [
          {
            id: 'g-sn-ded-10',
            anchor: '在过去紧邻的四年间，每逢从繁重学业中得暇休沐的时节',
            content:
              '指一六〇五至一六〇八年间每逢帕多瓦大学暑期休假，伽利略受大公斐迪南一世与大公夫人克里斯蒂娜·德·洛林之邀返回佛罗伦萨及普拉托利诺（Pratolino）等美第奇郊野别墅，向少年王储科西莫讲授几何学、筑城学与军用比例规（compasso geometrico e militare，伽利略一六〇六年已将《几何与军用比例规用法》题献给少年科西莫）。一六一〇年七月，科西莫二世正是凭《星际信使》的献礼正式任命伽利略为「大公首席数学家兼哲学家」及比萨大学首席数学教授（免除授课义务）。'
          }
        ]
      },
      {
        id: 'sn-ded-p07',
        type: 'paragraph',
        num: '§ 07',
        original:
          'Suscipe itaque, Clementissime Princeps, hanc tibi ab Astris reservatam gentiliciam gloriam, et illis divinis bonis, quae non tam a Stellis, quam a Stellarum Opifice ac Moderatore Deo, tibi deferuntur, quam diutissime fruere.\nDatum Patavii, 4 Idus Martii, MDCX.\nCelsitudinis tuae Addictissimus Servus, Galileus Galileus.',
        zh: '因此，最仁慈的君主啊，请收纳这份由群星专为殿下留存的家族荣耀，并愿殿下无比长久地享有那些并非源自星辰、而是由星辰的造物主与主宰者上帝亲自赐予殿下的神圣福祉。\n[一六一〇年三月十二日写于帕多瓦]{#g-sn-ded-11}。\n殿下最忠顺的仆人，伽利略·伽利莱谨上。',
        glosses: [
          {
            id: 'g-sn-ded-11',
            anchor: '一六一〇年三月十二日写于帕多瓦',
            content:
              '拉丁原文作「4 Idus Martii, MDCX」（古罗马历三月伊杜斯日即三月十五日之前第四日，按古罗马首尾兼计法即三月十二日）。此时本书正文印张已在威尼斯巴廖尼印坊基本印毕，次日（三月十三日）全书即正式装订面世，当日伽利略便将未装订散页寄往佛罗伦萨呈送大公。'
          }
        ]
      },
      {
        id: 'sn-ded-p08',
        type: 'paragraph',
        num: '§ 08',
        original:
          "Gli Eccellentissimi Signori Capi dell'Ecc. Cons. de' X infrascritti, avuta fede dalli Signori Reformatori del Studio di Padova per relazione delli due a questo deputati, cioè dal Rever. P. Inquisitor, e dal circospetto Secretario del Senato, Gio. Maraviglia, con giuramento, come nel libro intitolato: SIDEREUS NUNCIUS etc. di D. Galileo Galilei non si trova alcuna cosa contraria alla Santa Fede Cattolica, Prencipi e buoni costumi, e che è degno di stampa, concedono licenza che possi esser stampato in questa Città.\nDatum die primo Martii 1610.\nD. M. Ant. Valaresso, D. Nicolò Bon, D. Lunardo Marcello, Capi dell'Ecc. Cons. de' X.\nIllustrissimi Consilii X Secretarius Bartholomaeus Cominus.\n1610, a dì 8 Marzo. Regist. in libro a car. 39. Ioan. Baptista Breatto off. Con. Blasph. Coad.",
        zh: '下署[威尼斯十人团三位首脑]{#g-sn-ded-12}钧鉴：兹据帕多瓦大学督学官凭特派审查员二人——即尊贵的宗教裁判官神父与审慎的元老院秘书乔瓦尼·马拉维利亚——宣誓具结之审查报告证实，伽利略·伽利莱先生所著题为《星际信使》等语之书册，并无任何违背神圣天主教信仰、各国君主及善良风俗之处，堪付剞劂，特准予在本城印行。\n一六一〇年三月一日签发。\n十人团首脑：马克·安东尼奥·瓦拉雷索大人、尼科洛·邦大人、卢纳尔多·马尔切洛大人。\n最尊贵的十人团秘书：巴托洛梅奥·科米诺。\n一六一〇年三月八日，登记于簿册第三十九叶。反亵渎署助理书记官乔瓦尼·巴蒂斯塔·布雷亚托。',
        glosses: [
          {
            id: 'g-sn-ded-12',
            anchor: '威尼斯十人团三位首脑',
            content:
              '此段准印执照系全书唯一以威尼斯意大利语混排拉丁套语刊印的官文书。按威尼斯共和国出版审查制度，凡在威尼斯城付印之新书，须先由「帕多瓦大学督学官」（Riformatori dello Studio di Padova，全城学务与出版最高监管机构）指派威尼斯宗教裁判官（代表教会审查信仰）与元老院秘书（代表共和国审查涉政内容）双线审读，再由最高安全机构「十人团」（Consiglio dei Dieci）当月轮值的三位首脑签发印行许可，最后送交「反亵渎署」（Esecutori contro la Bestemmia）登记备案。耐人寻味的是，执照签发于三月一日，而书中最后一条木星卫星观测却记至三月二日，献辞更迟至三月十二日定稿——伽利略显然先行送审了未完书稿，随观随排、边审边印，以抢在欧洲任何同行之前确立优先发现权。'
          }
        ]
      }
    ]
  },
  {
    id: 'exordium-et-perspicillum',
    roman: 'I',
    titleOriginal:
      'Astronomicus Nuncius: Exordium, Perspicilli Inventio et Ratio Dimetiendi',
    titleZh: '天文信使总纲：四大新象、窥镜创制始末与视径测角法',
    aiModel: 'Gemini-4-Carbon',
    blocks: [
      {
        id: 'sn-s1-p01',
        type: 'paragraph',
        num: '§ 01',
        original:
          "ASTRONOMICUS NUNCIUS, OBSERVATIONES RECENS HABITAS NOVI PERSPICILLI BENEFICIO IN LUNAE FACIE, LACTEO CIRCULO STELLISQUE NEBULOSIS, INNUMERIS FIXIS, NECNON IN QUATUOR PLANETIS 'MEDICEA SIDERA' NUNCUPATIS, NUNQUAM CONSPECTIS ADHUC, CONTINENS ATQUE DECLARANS.\nMagna equidem in hac exigua tractatione singulis de natura speculantibus inspicienda contemplandaque propono. Magna, inquam, tum ob rei ipsius praestantiam, tum ob inauditam per aevum novitatem, tum etiam propter Organum, cuius beneficio eadem sensui nostro obviam sese fecerunt.",
        zh: '[《天文信使》]{#g-sn-s1-01}：载录并阐明新近借新制窥镜之助，在月球表面、银河天带与星云状星体、无数恒星，以及四颗迄今从未得见、现命名为「美第奇之星」的行星上所获之观测。\n在这册篇幅短小的论著中，我向每一位探究自然的人呈献诸多伟大的事物，供其省察与沉思。我说它们**伟大**，既是因为事物本身的卓绝非凡，也是因为其旷古未闻的新颖，更是因为那件器械——正是仰赖它的帮助，这些事物才得以迎面呈现在我们的感官之前。',
        glosses: [
          {
            id: 'g-sn-s1-01',
            anchor: '《天文信使》',
            content:
              '一六一〇年初版正文首叶（B1r）顶栏大标题仍作 ASTRONOMICUS NUNCIUS（「天文信使」或「天文通报」），而全书各页眉栏及最后印制的A印张扉页则作 SIDEREUS NUNCIUS。印刷史家据此考定，伽利略初拟书名本为《天文信使》，正文B印张率先上机开印后，方才为呼应「美第奇之星」（Medicea Sidera）将书名改定为更具诗意与宫廷庄严感的《星际信使》，遂留下内文卷首标题与扉页异名的珍贵历史印记。'
          }
        ]
      },
      {
        id: 'sn-s1-p02',
        type: 'paragraph',
        num: '§ 02',
        original:
          'Magnum sane est, supra numerosam inerrantium Stellarum multitudinem, quae naturali facultate in hunc usque diem conspici potuerunt, alias innumeras superaddere oculisque palam exponere, antehac conspectas nunquam, et quae veteres ac notas plusquam supra decuplam multiplicitatem superent.',
        zh: '在直至今日凭自然目力所能看见的繁多恒星之外，再添上无数颗此前从未得见的恒星，将它们公开展露在眼前，且其数量超过旧有已知恒星十倍以上——这诚然是一件伟大的事。'
      },
      {
        id: 'sn-s1-p03',
        type: 'paragraph',
        num: '§ 03',
        original:
          'Pulcherrimum atque visu iucundissimum est, lunare corpus, per sex denas fere terrestres semidiametros a nobis remotum, tam ex propinquo intueri, ac si per duas tantum easdem dimensiones distaret; adeo ut eiusdem Lunae diameter vicibus quasi terdenis, superficies vero noningentis, solidum autem corpus vicibus proxime viginti septem millibus, maius appareat, quam dum libera tantum oculorum acie spectatur: ex quo deinde sensata certitudine quispiam intelligat, Lunam superficie leni et perpolita nequaquam esse indutam, sed aspera et inaequali; ac, veluti ipsiusmet Telluris facies, ingentibus tumoribus, profundis lacunis atque anfractibus undiquaque confertam existere.',
        zh: '将[距离我们近六十个地球半径的月球球体]{#g-sn-s1-02}放到如此近处端详，仿佛它只隔着两个地球半径那么远，致使同一轮月球的直径看起来比仅凭裸眼观看时增大近三十倍，表面积增大九百倍，立体体积更增大近两万七千倍；并由此令任何人都能凭[感官的确定性]{#g-sn-s1-03}洞悉，月球绝非披着一层光滑平整、打磨无瑕的外表，而是粗糙不平，恰如地球本身的面貌一般，处处密布着巨大的隆起、幽深的洼谷与崎岖的曲折——这更是无比壮美、无比赏心悦目的事。',
        glosses: [
          {
            id: 'g-sn-s1-02',
            anchor: '距离我们近六十个地球半径的月球球体',
            content:
              '自古希腊喜帕恰斯、托勒密《至大论》（Almagest V.13–15）至哥白尼《天球运行论》（卷四第十七章），古典天文学测算的地月平均距离均约为地球半径的六十倍（现代实测平均值约为六十点二七个地球赤道半径）。在伽利略亲笔初稿（佛罗伦萨国立中央图书馆藏手稿 Ms. Gal. 48）中，此处曾误写作「六十个地球直径」（diametros terrestres），付印前及时校正为「地球半径」（terrestres semidiametros）。当窥镜线性视角放大三十倍（30¹）时，视面积放大九百倍（30²），立体体积则按立方比放大两万七千倍（30³）。'
          },
          {
            id: 'g-sn-s1-03',
            anchor: '感官的确定性',
            content:
              '拉丁语 sensata certitudo（意大利语作 sensata esperienza「感官经验」），系伽利略一生对抗经院哲学书本权威的核心认识论术语。在亚里士多德《论天》（De caelo II.8–11）与中世纪经院自然哲学中，月上天界由不生不灭、无瑕可击的「第五元素」（以太，quinta essentia）构成，故月球与诸天体按本性必为绝对光滑的正球体；伽利略则以光学仪器延伸后的直接视觉证据打破了这一延续近两千年的宇宙论公理。'
          }
        ]
      },
      {
        id: 'sn-s1-p04',
        type: 'paragraph',
        num: '§ 04',
        original:
          'Altercationes insuper de Galaxia, seu de Lacteo circulo, substulisse, eiusque essentiam sensui, nedum intellectui, manifestasse, parvi momenti existimandum minime videtur; insuperque substantiam Stellarum, quas Nebulosas hucusque Astronomorum quilibet appellavit, digito demonstrare, longeque aliam esse quam creditum hactenus est, iocundum erit atque perpulcrum.',
        zh: '此外，一举平息关于银河（亦即乳白天环）的历代纷争，将其本质不仅向理智、而且直接向感官昭示出来，这绝不能视为无足轻重的小事；更何况，亲手指出迄今每一位天文学家都称之为「星云星」的那些星体的实体，证明它们与人们向来信以为真的面貌截然不同，亦是赏心乐事、美妙绝伦。'
      },
      {
        id: 'sn-s1-p05',
        type: 'paragraph',
        num: '§ 05',
        original:
          'Verum, quod omnem admirationem longe superat, quodve admonitos faciendos cunctos Astronomos atque Philosophos nos apprime impulit, illud est, quod scilicet quatuor Erraticas Stellas, nemini eorum qui ante nos cognitas aut observatas, adinvenimus, quae circa Stellam quandam insignem e numero cognitarum, instar Veneris atque Mercurii circa Solem, suas habent periodos, eamque modo praeeunt, modo subsequuntur, nunquam extra certos limites ab illa digredientes. Quae omnia ope Perspicilli a me excogitati, divina prius illuminante gratia, paucis abhinc diebus, reperta atque observata fuerunt.',
        zh: '然而，远远超越一切惊叹之上、并且最迫切地驱使我们必须昭告全体天文学家与哲学家的，乃是这一桩事实：我们发现了四颗游星——在我们之前的任何人皆未曾知晓或观测过它们——它们环绕已知群星中某一颗显赫的星体，[恰如金星与水星环绕太阳一般]{#g-sn-s1-04}各有其运行周期，时而先行于它，时而尾随其后，从不超出一定界限之外而远离它。凡此种种，皆是在神圣恩典率先光照之下，借我所构想制成的窥镜之助，于数日前刚刚发现并观测到的。',
        glosses: [
          {
            id: 'g-sn-s1-04',
            anchor: '恰如金星与水星环绕太阳一般',
            content:
              '金星与水星作为内行星，在地球观测者看来永远只在太阳东西两侧有限的最大距角内摆动（水星最大距角约十八至二十八度，金星约四十五至四十八度），时而作晨星先行于日出之前，时而作昏星尾随于日落之后。早在公元前四世纪本都的赫拉克利德斯（Heraclides Ponticus）与晚期古典注疏家马提亚努斯·卡佩拉（Martianus Capella）体系，乃至第谷·布拉赫的折衷体系与哥白尼体系中，金、水二星环绕太阳运行已是天文学家熟知的几何模型，伽利略遂以此类比木星四卫星在木星东西两侧作有界往复摆动的视运动。'
          }
        ]
      },
      {
        id: 'sn-s1-p06',
        type: 'paragraph',
        num: '§ 06',
        original:
          'Alia forte praestantiora, vel a me, vel ab aliis, in dies adinvenientur consimilis Organi beneficio; cuius formam et apparatum, necnon illius excogitandi occasionem, prius breviter commemorabo, deinde habitarum a me observationum historiam recensebo.\nMensibus abhinc decem fere, rumor ad aures nostras increpuit, fuisse a quodam Belga Perspicillum elaboratum, cuius beneficio obiecta visibilia, licet ab oculo inspicientis longe dissita, veluti propinqua distincte cernebantur; ac huius profecto admirabilis effectus nonnullae experientiae circumferebantur, quibus fidem alii praebebant, negabant alii. Idem paucos post dies mihi per literas a nobili Gallo Iacobo Badovere ex Lutetia confirmatum est; quod tandem in causa fuit, ut ad rationes inquirendas, necnon media excogitanda, per quae ad consimilis Organi inventionem devenirem, me totum converterem; quam paulo post, doctrinae de refractionibus innixus, assequutus sum: ac tubum primo plumbeum mihi paravi, in cuius extremitatibus vitrea duo Perspicilla, ambo ex altera parte plana, ex altera vero unum sphaerice convexum, alterum vero cavum aptavi; oculum deinde ad cavum admovens obiecta satis magna et propinqua intuitus sum; triplo enim viciniora, nonuplo vero maiora apparebant, quam dum sola naturali acie spectarentur. Alium postmodum exactiorem mihi elaboravi, qui obiecta plusquam sexagesies maiora repraesentabat. Tandem, labori nullo nullisque sumptibus parcens, eo a me deventum est, ut Organum mihi construxerim adeo excellens, ut res per ipsum visae millies fere maiores appareant, ac plusquam in terdecupla ratione viciniores, quam si naturali tantum facultate spectentur.',
        zh: '借同类器械之助，日后或许还会有更为卓异的事物由我或他人陆续发现；在此，我先简略记述这件器械的形制与装置，以及构想它的契机，随后再详述我所作诸项观测的始末。\n大约十个月前，一则传闻传入我们耳中，说是[某位佛兰德斯人制成了一具窥镜]{#g-sn-s1-05}，借其帮助，可见的物体纵使距观察者的眼睛十分遥远，也能如同近在咫尺般清晰看见；关于这一诚然奇妙的效应，坊间流传着若干实验传闻，有人深信不疑，也有人矢口否认。数日之后，[巴黎的法兰西贵族雅克·巴多维尔来信]{#g-sn-s1-06}向我证实了此事；这最终促使我全身心投入其中，探究其原理并构想种种途径，以期推导出同类器械的发明；不久之后，我[依托折射学理]{#g-sn-s1-07}达成了这一目标。我首先备好一根铅管，在其两端装上两枚玻璃透镜，两枚皆是一面平直，另一面则一枚呈球面凸起、一枚呈球面凹陷；随后我将眼睛凑近凹透镜一端，便看见物体显得相当硕大而切近：因为它们看起来比单凭自然目力观看时拉近了三倍，面积则增大了九倍。此后我又亲手精制了另一具更准确的窥镜，能将物体放大六十倍以上。最后，我不惜一切辛劳与耗费，终于造出一具精良绝伦的器械，透过它所见之物显得增大了近一千倍，距离则比单凭自然目力观看时拉近了三十倍以上。',
        glosses: [
          {
            id: 'g-sn-s1-05',
            anchor: '某位佛兰德斯人制成了一具窥镜',
            content:
              '文艺复兴新拉丁语习惯以古罗马行省名 Belga（「比利其人／佛兰德斯人」）统称低地国家（尼德兰南北诸省）居民。一六〇八年十月二日，尼德兰泽兰省米德尔堡（Middelburg）眼镜匠汉斯·利珀希（Hans Lipperhey，约 1570—1619）向海牙荷兰联省共和国议会递交双透镜望远器专利申请；数周内，同城眼镜匠扎卡里亚斯·杨森（Sacharias Janssen）与阿尔克马尔的雅各布·梅蒂乌斯（Jacob Metius）亦各自声称拥有该项发明。消息随外交信使迅速传遍欧洲，一六〇九年五月传抵威尼斯（当时为威尼斯共和国神学顾问的保罗·萨尔皮神父最早获知此事并与伽利略交流）。'
          },
          {
            id: 'g-sn-s1-06',
            anchor: '巴黎的法兰西贵族雅克·巴多维尔来信',
            content:
              '雅克·巴多维尔（Jacques Badovere，约 1575—1620，拉丁化名 Iacobus Badovere；Lutetia 即巴黎古罗马旧称 Lutetia Parisiorum），法国外交官，早年信奉胡格诺新教（后改宗天主教），一五九〇年代末游学帕多瓦时曾寄宿于伽利略家中修习数学，与萨尔皮及法国驻欧外交圈过从甚密。一六〇九年春巴黎街头已出现低倍率玩具窥镜出售，巴多维尔遂自巴黎致信恩师核实传闻。'
          },
          {
            id: 'g-sn-s1-07',
            anchor: '依托折射学理',
            content:
              '伽利略式折射望远镜以平凸透镜为物镜（汇聚入射平行光）、以平凹透镜置于物镜焦点内侧为目镜（在焦点前将汇聚光束发散为平行光入眼），故成正立虚像。文中按面积放大倍数记录了三次关键迭代：（一）首具铅管样机（一六〇九年六至七月）：线性放大 3 倍、面积放大 9 倍；（二）第二具精制品（一六〇九年八月二十一日登上威尼斯圣马可钟楼向总督莱奥纳尔多·多纳与元老院现场演示并获终身教席加薪）：面积放大逾 60 倍，即线性放大约 8 倍；（三）第三具天文观测主力镜（一六〇九年十一月底制成，由伽利略亲自选购威尼斯穆拉诺光学玻璃坯研磨抛光）：面积放大近 1000 倍，即线性放大逾 30 倍（实测现存佛罗伦萨伽利略博物馆原镜放大率约为 20 至 21 倍，物镜被纸质光阑缩孔至约 1.6 厘米以抑制球差与色差）。'
          }
        ]
      },
      {
        id: 'sn-s1-p07',
        type: 'paragraph',
        num: '§ 07',
        original:
          'Huius Instrumenti quot quantaque sint commoda, tam in re terrestri quam in maritima, omnino supervacaneum foret enumerare. Sed, missis terrenis, ad Caelestium speculationes me contuli; ac Lunam prius tam ex propinquo sum intuitus, ac si vix per duas Telluris diametros abesset. Post hanc, Stellas tum fixas, tum vagas, incredibili animi iucunditate saepius observavi; cumque harum maximam frequentiam viderem, de ratione, qua illarum interstitia dimetiri possem, excogitare coepi, ac demum reperi. Qua de re singulos praemonitos esse decet, qui ad huiuscemodi observationes accedere volunt. Primo enim necessarium est, ut sibi Perspicillum parent exactissimum, quod obiecta perlucida, distincta et nulla caligine obducta repraesentet; eademque ad minus secundum quatercentuplam rationem multiplicet; tunc enim illa bisdecuplo viciniora commonstrabit: nisi enim tale fuerit Instrumentum, ea omnia quae a nobis conspecta sunt in caelis, quaeve infra enumerabuntur, intueri tentabitur frustra. Ut autem de multiplicatione instrumenti quilibet parvo negotio certior reddatur, circulos binos aut quadrata bina chartacea contornabit, quorum alterum quatercenties altero maius existat; id autem erit tunc, cum maioris diameter ad diametrum alterius longitudine fuerit vigecupla: deinde superficies ambas in eodem pariete infixas simul a longe spectabit, minorem quidem altero oculo ad Perspicillum admoto, maiorem vero altero oculo libero; commode enim id fieri licet uno eodemque tempore, oculis ambobus adapertis: tunc enim figurae ambae eiusdem apparebunt magnitudinis, si Organum secundum optatam proportionem obiecta multiplicaverit.',
        zh: '这件仪器在陆地与航海事务上究竟有多少、有多大的用处，在此一一列举纯属多余。但我撇下尘世俗务，转向了对天界事物的省察；首先，我从如此切近之处端详月球，仿佛它[只离地球不到两个直径那么近]{#g-sn-s1-08}。继月球之后，我又怀着难以言喻的满心欢悦，屡屡观测恒星与游星；当我看见它们如此稠密繁多时，便开始思索如何测定它们彼此之间的角距，并最终找到了办法。关于此事，凡欲着手作此类观测的人，都理应预先知悉以下要领。第一，必须为自己备置一具极其精准的窥镜，能将物体呈现得澄澈、分明而毫无雾翳遮蔽，且至少将物体按四百倍的比例放大——如此一来，它便会将物体拉近二十倍；倘若仪器达不到这一水准，想要看清我们在天上所见并将在下文逐一列举的这一切景象，终归只是徒劳。为使任何人都能不费吹灰之力确知仪器的放大倍率，可剪出两个纸圆或两个纸方框，使其中一个的面积为另一个的四百倍——只要大者的直径或边长在长度上为小者的二十倍，即可达成此数；随后将两张纸面固定在同一堵墙上，从远处同时观看：一只眼睛凑近窥镜看较小的那张，另一只裸眼直接看较大的那张——双目同时睁开，便可轻而易举地在同一时刻办到此事；此时倘若两幅图形显得大小相同，即说明该器械已按所期望的比例将物体放大了。',
        glosses: [
          {
            id: 'g-sn-s1-08',
            anchor: '只离地球不到两个直径那么近',
            content:
              '拉丁原文作「per duas Telluris diametros」（两个地球直径）。按本节第三段所述地月距离为六十个地球半径（即三十个地球直径），经三十倍窥镜拉近后应为「两个地球半径」（即一个地球直径）；伽利略在此处显然沿用了初稿将「半径」写作「直径」的笔误，威尼斯初版与法瓦罗国家版均保留原貌未改。下文用双目比对大小纸圆测定放大率的方法（双眼重合比较法），是近代实验光学史上最早记录的望远镜放大率实测规程。'
          }
        ]
      },
      {
        id: 'sn-s1-p08',
        type: 'paragraph',
        num: '§ 08',
        original:
          'Consimili parato Instrumento, de ratione distantiarum dimetiendarum inquirendum erit: quod tali artificio assequemur. Sit enim, facilioris intelligentiae gratia, tubus ABCD. Oculus inspicientis esto E. Radii, dum nulla in tubo adessent Perspicilla, ad obiectum FG secundum lineas rectas ECF, EDG ferrentur; sed, appositis Perspicillis, ferantur secundum lineas refractas ECH, EDI: coarctantur enim, et qui prius liberi ad FG obiectum [Figura geometrica perspicilli ABCD] dirigebantur, partem tantummodo HI compraehendent. Accepta deinde ratione distantiae EH ad lineam HI, per tabulam sinuum reperietur quantitas anguli in oculo ex obiecto HI constituti, quem minuta quaedam tantum continere comperiemus. Quod si Specillo CD bracteas, alias maioribus, alias vero minoribus perforatas foraminibus, aptaverimus, modo hanc, modo illam, prout opus fuerit, superimponentes, angulos alios atque alios pluribus paucioribusque minutis subtendentes, pro libito constituemus; quorum ope Stellarum intercapedines, per aliquot minuta adinvicem dissitarum, citra unius aut alterius minuti peccatum, commode dimetiri poterimus. Haec tamen sic leviter tetigisse, et quasi primoribus libasse labiis, in praesentiarum sit satis; per aliam enim occasionem absolutam huius Organi theoriam in medium proferemus. Nunc observationes a nobis duobus proxime elapsis mensibus habitas recenseamus, ad magnarum profecto contemplationum exordia omnes verae philosophiae cupidos convocantes.',
        zh: '备妥这样的仪器之后，便须探讨测定角距的方法；我们将借如下巧法达成此事。为便于理解起见，设镜筒为 ABCD，观察者的眼睛位于 E。当镜筒内未装透镜时，视线原本沿直线 ECF、EDG 射向物体 FG；但装上透镜之后，视线便沿折射线 ECH、EDI 行进——盖因视线受到收束，原本自由投向物体 FG 的视线，如今只涵盖其中的 HI 一段。随后量取距离 EH 与线段 HI 之比，查算正弦表，即可求得物体 HI 在眼中所张视角的大小，我们会发现它仅含寥寥数角分。倘若我们再[在物镜 CD 上装配钻有或大或小圆孔的薄片]{#g-sn-s1-09}，视需要时而覆上这一片、时而换上那一片，便能随心所欲地构造出张角为更多或更少角分的不同视场角；借助它们，我们便能方便地测定彼此相距若干角分的星辰间距，而误差不超过一两角分。不过，眼下将此理略加点染、犹如浅尝辄止便已足够；待他日另有机会，我们再将这件器械的完备理论公诸于世。现在，让我们逐一述说过去紧邻的两个月间由我们所获的各项观测，召唤一切热爱**真正哲学**的人士共同奔赴这伟大沉思的开端。',
        glosses: [
          {
            id: 'g-sn-s1-09',
            anchor: '在物镜 CD 上装配钻有或大或小圆孔的薄片',
            content:
              '初版此处嵌有全书第一幅木刻几何示意图：长管左端 AB 为目镜端（眼点 E 紧贴其外），右端 CD 为物镜端，远方竖直标尺上外侧大段为 FG、内侧小段为 HI。按近现代几何光学分析，伽利略式凹目镜望远镜并无实像焦平面（无法像后来开普勒望远镜那样在焦点置十字丝），其真实视场角不仅取决于物镜通光孔径，还受观测者瞳孔直径与渐晕效应制约，故仅靠更换物镜光阑薄片（bracteae）测角并不十分精确；至一六一二年一月，伽利略进一步发明了装于镜筒外部、以另一只裸眼重合观测的刻度格栅测微器，将木星卫星角距测量精度提升至十角秒量级。至于文末承诺的「这件器械的完备理论」，因开普勒于一六一〇年秋迅速撰成《屈光学》（Dioptrice，一六一一年刊行）奠定近代透镜成象几何光学，伽利略本人终生未另行出版屈光学专书。'
          }
        ]
      }
    ]
  }
];
