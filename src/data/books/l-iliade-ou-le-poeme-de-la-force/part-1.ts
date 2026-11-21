import type { BookSection } from '../../../types/book';

export const iliadePart1Sections: BookSection[] = [
  {
    id: 'la-force-qui-tue',
    roman: 'I',
    titleOriginal: 'La force qui tue : l’homme fait cadavre',
    titleZh: '杀戮的力量：化人为尸骸',
    aiModel: 'Gemini-4-Carbon',
    blocks: [
      {
        id: 'il-s1-b01',
        type: 'paragraph',
        num: '§ 01',
        fr: 'Le vrai héros, le vrai sujet, le centre de l’Iliade, c’est la force. La force qui est maniée par les hommes, la force qui soumet les hommes, la force devant quoi la chair des hommes se rétracte. L’âme humaine ne cesse pas d’y apparaître modifiée par ses rapports avec la force, entraînée, aveuglée par la force dont elle croit disposer, courbée sous la contrainte de la force qu’elle subit. Ceux qui avaient rêvé que la force, grâce au progrès, appartenait désormais au passé, ont pu voir dans ce poème un document ; ceux qui savent discerner la force, aujourd’hui comme autrefois, au centre de toute histoire humaine, y trouvent le plus beau, le plus pur des miroirs.',
        zh: '[《伊利亚特》真正的英雄、真正的主题、它的中心，是力量]{#g-il-s1-01}。为人所操持的力量，使人屈服的力量，令人的血肉在它面前抽缩退避的力量。在诗中，人的灵魂无时无刻不显得因它与力量的关系而发生改变：被自以为能够支配的力量裹挟、蒙蔽，又在所承受的力量之挟制下弯曲佝偻。那些曾梦想仰赖进步便可让力量从此归于往昔的人，大可把这部诗篇看作一份文献；而那些懂得无论古今、力量始终居于一切人类历史之中心的人，则会在其中找到最美、最纯粹的明镜。',
        glosses: [
          {
            id: 'g-il-s1-01',
            anchor: '《伊利亚特》真正的英雄、真正的主题、它的中心，是力量',
            content:
              '西蒙娜·薇依（Simone Weil，1909—1943）于 1939 年夏至 1940 年春撰成此文，原拟交由让·保兰（Jean Paulhan）主编的巴黎《新法兰西评论》（Nouvelle Revue Française）刊发，因保兰建议修改文中逐行直译的荷马引诗而未决；1940 年 6 月德军占领巴黎后，薇依撤回稿件随父母南迁马赛。同年 10 月 3 日维希政权颁布排犹法案《犹太人地位法》（Statut des Juifs），禁止犹太裔学者任教与发表作品；经友人引介，让·巴拉尔（Jean Ballard）主持的马赛文学期刊《南方手册》（Les Cahiers du Sud）于 1940 年 12 月号（第 230 期，第 561—574 页）与 1941 年 1 月号（第 231 期，第 21—34 页）分两期全文刊出，署名采用「Simone Weil」的字母易位笔名「埃米尔·诺维斯」（Émile Novis）。1953 年，阿尔贝·加缪（Albert Camus）将其编入伽利玛出版社「希望」丛书（Collection Espoir）中的薇依遗著集《希腊源泉》（La Source grecque），恢复真名并列为开卷首篇。法文 **la force** 在荷马希腊语中主要对应 **βία**（bía，直接作用于躯体的强制武力与生命冲力）与 **κράτος**（krátos，压倒性的制胜实力与支配权柄）；在埃斯库罗斯《被缚的普罗米修斯》开场中，二者即人格化为替宙斯押解并钉死普罗米修斯的两名执刑神仆。',
          },
        ],
      },
      {
        id: 'il-s1-b02',
        type: 'paragraph',
        num: '§ 02',
        fr: 'La force, c’est ce qui fait de quiconque lui est soumis une chose. Quand elle s’exerce jusqu’au bout, elle fait de l’homme une chose au sens le plus littéral, car elle en fait un cadavre. Il y avait quelqu’un, et, un instant plus tard, il n’y a personne. C’est un tableau que l’Iliade ne se lasse pas de nous présenter :',
        zh: '**力量，就是使任何受制于它的人变成一件物的东西。**当它行使到底时，它便在最字面的意义上把人变成一件物，因为它把人变成了一具尸骸。方才还有一个人，转瞬之间，便没有人了。这是《伊利亚特》从不厌倦向我们呈现的一幅图景：',
      },
      {
        id: 'il-s1-b03',
        type: 'verse',
        num: '§ 03',
        fr: '        … les chevaux\nFaisaient résonner les chars vides par les chemins de la guerre,\nEn deuil de leurs conducteurs sans reproche. Eux sur terre\nGisaient, aux vautours beaucoup plus chers qu’à leurs épouses [1].',
        zh: '……战马\n使空荡的战车在战争的道路上轰鸣作响，\n哀悼它们无可指摘的驭手。他们在大地上\n僵卧，[对秃鹫远比对他们的妻子更加亲爱]{#g-il-s1-02}。[^il-fn01]',
        authorNotes: [
          {
            id: 'il-fn01',
            fr: 'La traduction des passages cités est nouvelle. Chaque ligne traduit un vers grec, les rejets et enjambements sont scrupuleusement reproduits ; l’ordre des mots grecs à l’intérieur de chaque vers est respecté autant que possible. (Note de S. Weil.)',
            zh: '文中引诗均为新译。每一行对应一行希腊文原诗，诗句的跨行顿挫与跨行连绵均予严格复现；每一诗行内部的希腊文词序亦尽可能予以遵循。',
          },
        ],
        glosses: [
          {
            id: 'g-il-s1-02',
            anchor: '对秃鹫远比对他们的妻子更加亲爱',
            content:
              '出自《伊利亚特》第 11 卷第 159—162 行（阿伽门农鏖战冲杀场面，史诗传统称为阿伽门农「显威篇」，**ἀριστεία**）。希腊文末句作 **γύπεσσιν πολὺ φίλτεροι ἢ ἀλόχοισιν**，其中形容词比较级 **φίλτεροι**（phílteroi，源于 **φίλος**，意为「亲爱的、属于自家的」）在荷马惯用语中通常修饰生者对亲族与自身肢体的眷恋，此处却直接移用于食腐秃鹫。薇依在流亡马赛期间随身携带希腊文原典逐行重译全部引诗，摒弃了当时法国通行的勒孔特·德·李尔（Leconte de Lisle，1866）散文化复古译本与保罗·马宗（Paul Mazon，1937—1938，法兰西大学协会「比代丛书」本）流畅归化的散文译法，以无韵长句严格复现荷马六音步英雄诗行（dactylic hexameter）的跨行连绵（enjambement）与回行句首顿挫（rejet，如本段末行首词「僵卧」对应希腊文 **κείατο** 的跨行置首）。',
          },
        ],
      },
      {
        id: 'il-s1-b04',
        type: 'paragraph',
        num: '§ 04',
        fr: 'Le héros est une chose traînée derrière un char dans la poussière :',
        zh: '英雄是一件跟在战车后面、在尘土中拖曳的物：',
      },
      {
        id: 'il-s1-b05',
        type: 'verse',
        num: '§ 05',
        fr: '        … Tout autour, les cheveux\nNoirs étaient répandus, et la tête entière dans la poussière\nGisait, naguère charmante ; à présent Zeus à ses ennemis\nAvait permis de l’avilir sur sa terre natale.',
        zh: '……四周，头发\n乌黑地披散开来，整颗头颅在尘土之中\n倒卧，往昔曾那样动人；如今宙斯却容许他的敌人\n[在他的故土上将他凌辱]{#g-il-s1-03}。',
        glosses: [
          {
            id: 'g-il-s1-03',
            anchor: '在他的故土上将他凌辱',
            content:
              '出自《伊利亚特》第 22 卷第 401—404 行。阿喀琉斯在特洛伊城下刺死赫克托耳后，穿透其双脚脚踝至脚跟的肌腱，用牛皮带绑在战车后方策马狂奔，在特洛伊国王夫妇与城头市民眼前拖行尸身。希腊文动词 **ἀεικίσσασθαι**（aeikíssasthai，薇依译作 **avilir**）由否定前缀 **ἀ-** 与 **εἰκός**（相称、得体）合成，本义为「毁损人应有的形貌、施以不成体统的侮辱」。',
          },
        ],
      },
      {
        id: 'il-s1-b06',
        type: 'paragraph',
        num: '§ 06',
        fr: 'L’amertume d’un tel tableau, nous la savourons pure, sans qu’aucune fiction réconfortante vienne l’altérer, aucune immortalité consolatrice, aucune fade auréole de gloire ou de patrie.',
        zh: '这样一幅图景的苦涩，我们是纯粹地品尝到的，没有任何抚慰人心的虚构前来冲淡它，没有慰藉性的永生，也没有荣耀或祖国那类寡淡的光环。',
      },
      {
        id: 'il-s1-b07',
        type: 'verse',
        num: '§ 07',
        fr: 'Son âme hors de ses membres s’envola, s’en alla chez Hadès,\nPleurant sur son destin, quittant sa virilité et sa jeunesse.',
        zh: '他的灵魂飞出四肢，往哈得斯那里去了，\n哀哭着自己的命运，[离弃了他的男子气概与青春]{#g-il-s1-04}。',
        glosses: [
          {
            id: 'g-il-s1-04',
            anchor: '离弃了他的男子气概与青春',
            content:
              '出自《伊利亚特》第 22 卷第 362—363 行（此二行亦一字不易地见于第 16 卷第 856—857 行帕特洛克罗斯气绝之时，系荷马专为两人之死保留的叠句）。荷马史诗中的「灵魂」（**ψυχή**，psychḗ）并非柏拉图或基督教传统中承载人格与理智的不朽实体，而是人咽气时从口中或伤口逸出的虚弱气息与幽影；真正构成生者血肉人格的是充盈于四肢（**ῥέθεα**）之中的气力与心神，故亡魂坠入冥王哈得斯之境时，所哀悼的正是被迫弃留人间的「男子气概与青春」（**ἀνδροτῆτα καὶ ἥβην**）。',
          },
        ],
      },
      {
        id: 'il-s1-b08',
        type: 'paragraph',
        num: '§ 08',
        fr: 'Plus poignante encore, tant le contraste est douloureux, est l’évocation soudaine, aussitôt effacée, d’un autre monde, le monde lointain, précaire et touchant de la paix, de la famille, ce monde où chaque homme est pour ceux qui l’entourent ce qui compte le plus.',
        zh: '更令人刺痛的——只因这对照如此惨痛——是另一个世界蓦然唤起却旋即抹去的浮影：那是遥远、脆弱而动人的和平与家庭的世界，在那个世界里，每一个人对于围绕在他身边的人来说，都是最要紧的。',
      },
      {
        id: 'il-s1-b09',
        type: 'verse',
        num: '§ 09',
        fr: 'Elle criait à ses servantes aux beaux cheveux par la demeure\nDe mettre auprès du feu un grand trépied, afin qu’il y eût\nPour Hector un bain chaud au retour du combat.\nLa naïve ! Elle ne savait pas que bien loin des bains chauds\nLe bras d’Achille l’avait soumis, à cause d’Athèna aux yeux verts.',
        zh: '她在居室里向秀发侍女们高声吩咐，\n在火旁架起一口大三足鼎，好预备下\n赫克托耳从战场归来时的热水浴。\n[天真的人啊]{#g-il-s1-05}！她不知道，在远离热水浴的地方，\n阿喀琉斯的手臂已因[碧眼雅典娜]{#g-il-s1-06}而将他制伏。',
        glosses: [
          {
            id: 'g-il-s1-05',
            anchor: '天真的人啊',
            content:
              '出自《伊利亚特》第 22 卷第 442—446 行。赫克托耳之妻安德洛玛刻此时尚在内室织布，对城外死讯一无所知。薇依译作「天真的人啊！」（**La naïve !**）的词对应希腊文句首感叹词 **νηπίη**（nēpíē，阳性作 **νήπιος**），原义为「尚不能言的婴孩」，在荷马史诗中专指凡人因蒙昧无知、看不穿神意与近在咫尺的杀机而怀抱徒劳期盼的盲目境况。',
          },
          {
            id: 'g-il-s1-06',
            anchor: '碧眼雅典娜',
            content:
              '希腊文常设饰词 **γλαυκῶπις Ἀθήνη**（glaukōpis Athḗnē），词根 **γλαυκός** 指海水或猫头鹰眼眸般泛着微光的蓝绿色或灰青色，薇依直译为「绿眼雅典娜」（**Athèna aux yeux verts**）。在《伊利亚特》第 22 卷第 226—299 行中，雅典娜化身为赫克托耳最敬爱的胞弟得伊福玻斯（Déiphobe），诱使赫克托耳停步于斯开亚门外迎战阿喀琉斯；待赫克托耳投出长枪扑空、转身向弟弟索要替补长枪时，身旁已空无一人，雅典娜却将阿喀琉斯掷偏的长枪暗中拾回交还阿喀琉斯之手。',
          },
        ],
      },
      {
        id: 'il-s1-b10',
        type: 'paragraph',
        num: '§ 10',
        fr: 'Certes, il était loin des bains chauds, le malheureux. Il n’était pas le seul. Presque toute l’Iliade se passe loin des bains chauds. Presque toute la vie humaine s’est toujours passée loin des bains chauds.',
        zh: '不错，这不幸的人确实远离了热水浴。不止他一个。几乎整部《伊利亚特》都发生在远离热水浴的地方。**几乎整个人类生活，向来都发生在远离热水浴的地方。**',
      },
    ],
  },
  {
    id: 'la-force-qui-ne-tue-pas-encore',
    roman: 'II',
    titleOriginal: 'La force qui ne tue pas encore : suppliants et esclaves',
    titleZh: '尚未杀戮的力量：乞命者与奴隶',
    aiModel: 'Gemini-4-Carbon',
    blocks: [
      {
        id: 'il-s2-b01',
        type: 'paragraph',
        num: '§ 01',
        fr: 'La force qui tue est une forme sommaire, grossière de la force. Combien plus variée en ses procédés, combien plus surprenante en ses effets, est l’autre force, celle qui ne tue pas ; c’est-à-dire celle qui ne tue pas encore. Elle va tuer sûrement, ou elle va tuer peut-être, ou bien elle est seulement suspendue sur l’être qu’à tout instant elle peut tuer ; de toutes façons, elle change l’homme en pierre. Du pouvoir de transformer un homme en chose en le faisant mourir procède un autre pouvoir, et bien autrement prodigieux, celui de faire une chose d’un homme qui reste vivant. Il est vivant, il a une âme ; il est pourtant une chose. Être bien étrange qu’une chose qui a une âme ; étrange état pour l’âme. Qui dira combien il lui faut à tout instant, pour s’y conformer, se tordre et se plier sur elle-même ? Elle n’est pas faite pour habiter une chose ; quand elle y est contrainte, il n’est plus rien en elle qui ne souffre violence.',
        zh: '杀戮的力量只是力量的一种简略而粗暴的形态。另一种力量，即那种不杀戮的力量——也就是说，**尚未杀戮的力量**——在手段上何其多变，在效用上又何其惊人。它必定会杀戮，或者它也许会杀戮，又或者它只是高悬在那个它随时都能杀死的人头上；无论哪一种情形，它都把人化作石头。从杀死一个人而将他变成一件物的权能中，衍生出另一种权能，一种远为奇崛的权能：**把一个仍然活着的人变成一件物。**他活着，他有灵魂；然而他却是一件物。一件拥有灵魂的物，这是何等奇异的存在；对于灵魂而言，这又是何等奇异的境地。谁能说清，为了迁就这种境地，灵魂每时每刻必须怎样扭曲自身、向内折弯？灵魂本不是为了栖居在一件物里而造的；一旦被迫如此，它内部便再无一处不遭受暴力。',
      },
      {
        id: 'il-s2-b02',
        type: 'paragraph',
        num: '§ 02',
        fr: 'Un homme désarmé et nu sur lequel se dirige une arme devient cadavre avant d’être touché. Un moment encore il combine, agit, espère :',
        zh: '一个手无寸铁、赤身裸体而有兵刃对准他的人，在被刺中之前就已经成了尸骸。有那么片刻，他还在盘算、行动、怀抱希望：',
      },
      {
        id: 'il-s2-b03',
        type: 'verse',
        num: '§ 03',
        fr: 'Il pensait, immobile. L’autre approche, tout saisi,\nAnxieux de toucher ses genoux. Il voulait dans son cœur\nÉchapper à la mort mauvaise, au destin noir…\nEt d’un bras il étreignait pour le supplier ses genoux,\nDe l’autre il maintenait la lance aiguë sans la lâcher…',
        zh: '他伫立思忖。另一人走近前来，满心惊骇，\n急切地想要触碰他的双膝。他在心中渴望\n逃脱凶恶的死亡与漆黑的命运……\n他用一只手臂[抱住双膝向他哀求]{#g-il-s2-01}，\n另一只手死死抓住锋利的长枪不肯松开……',
        glosses: [
          {
            id: 'g-il-s2-01',
            anchor: '抱住双膝向他哀求',
            content:
              '出自《伊利亚特》第 21 卷第 64—66、71—72 行。特洛伊王子吕卡翁（Lycaon，普里阿摩斯与拉奥托厄之子）此前曾被阿喀琉斯掳往勒姆诺斯岛贩卖为奴，后由友人赎回，返城方满十二日，便在斯卡曼德罗斯河畔脱卸盔甲攀爬上岸时再度撞见阿喀琉斯；阿喀琉斯举枪投刺扑空，长枪插进河岸泥土，吕卡翁遂一手死按枪杆防其拔出，一手俯身抱膝。古希腊「乞命礼」（**ἱκετεία**，hiketeía）要求乞求者自弃武装，一手紧抱对方双膝、一手托触对方下颌，借此将自身置于「护佑乞命者之宙斯」（**Ζεὺς Ἱκέσιος**，Zeus Hikésios）的宗教庇护之下；只要身体接触不中断，施威者在礼法上便受神圣忌惮约束。',
          },
        ],
      },
      {
        id: 'il-s2-b04',
        type: 'paragraph',
        num: '§ 04',
        fr: 'Mais bientôt il a compris que l’arme ne se détournera pas, et, respirant encore, il n’est plus que matière, encore pensant ne peut plus rien penser :',
        zh: '但很快他就明白兵刃不会移开了，于是，尚在一呼一吸的他已不过是一团物质，尚有思绪却已无法再思考任何事情：',
      },
      {
        id: 'il-s2-b05',
        type: 'verse',
        num: '§ 05',
        fr: 'Ainsi parla ce fils si brillant de Priam\nEn mots qui suppliaient. Il entendit une parole inflexible :\n. . . . . . . . . . . . . . . . . . . .\nIl dit ; à l’autre défaillent les genoux et le cœur ;\nIl lâche la lance et tombe assis, les mains tendues,\nLes deux mains. Achille dégaine son glaive aigu,\nFrappe à la clavicule, le long du cou, et tout entier\nPlonge le glaive à deux tranchants. Lui, sur la face, à terre\nGît étendu, et le sang noir s’écoule en humectant la terre.',
        zh: '普里阿摩斯这位如此耀眼的儿子这般说道，\n用的是乞命的言辞。他听到的却是不可转圜的话语：\n……………………\n他说罢；另一人[双膝与心神俱告瘫软]{#g-il-s2-02}；\n他松开长枪，瘫坐下去，伸开双手，\n两只手。阿喀琉斯拔出锋利的长剑，\n顺着脖颈击中锁骨，将整把\n双刃剑尽数刺入。他脸朝下，在大地上\n俯卧伸展，乌黑的血涌流出来，浸湿大地。',
        glosses: [
          {
            id: 'g-il-s2-02',
            anchor: '双膝与心神俱告瘫软',
            content:
              '出自《伊利亚特》第 21 卷第 97—98、114—119 行（中间省略号隐去阿喀琉斯拒绝饶命的答辞）。希腊文常设套语 **λύτο γούνατα καὶ φίλον ἦτορ**（lýto goúnata kaì phílon êtor，字面义为「双膝与心房松散解体」）：在荷马的身心观中，人的生命力凝聚于「双膝」（支撑站立与奔逃的关节）与「心房」（胸腔内的血气器官），极度惊惧或死亡降临时二者便同时「松脱」。',
          },
        ],
      },
      {
        id: 'il-s2-b06',
        type: 'paragraph',
        num: '§ 06',
        fr: 'Quand, hors de tout combat, un étranger faible et sans armes supplie un guerrier, il n’est pas de ce fait condamné à mort ; mais un instant d’impatience de la part du guerrier suffirait à lui ôter la vie. C’est assez pour que sa chair perde la principale propriété de la chair vivante. Un morceau de chair vivante manifeste la vie avant tout par le sursaut ; une patte de grenouille, sous le choc électrique, sursaute ; l’aspect proche ou le contact d’une chose horrible ou terrifiante fait sursauter n’importe quel paquet de chair, de nerfs et de muscles. Seul, un pareil suppliant ne tressaille pas, ne frémit pas ; il n’en a plus licence ; ses lèvres vont toucher l’objet pour lui le plus chargé d’horreur :',
        zh: '当在一切战斗之外，一个虚弱而手无寸铁的异乡人向一名武士乞求时，他并不因此就已被判死刑；然而武士片刻的不耐烦，便足以夺去他的性命。仅此一点，就足以使他的血肉丧失活体血肉最首要的属性。一块活的血肉首先通过惊跳来显现生命；[一只蛙腿在电流刺激下会抽动惊跳]{#g-il-s2-03}；可怕或骇人之物的逼近与触碰，会让任何一团血肉、神经与肌肉本能地惊缩。唯独这样一个乞命者不战栗，不发抖；他已不再有这份自由；他的嘴唇即将去触碰对他而言最满载恐怖的那件东西：',
        glosses: [
          {
            id: 'g-il-s2-03',
            anchor: '一只蛙腿在电流刺激下会抽动惊跳',
            content:
              '指意大利解剖学家与物理学家路易吉·伽伐尼（Luigi Galvani，1737—1798）著名的生物电反射实验。伽伐尼于 1780 年代发现，即使青蛙已被处死解剖，只要用双金属弧或莱顿瓶放电刺激其坐骨神经，离体蛙腿仍会产生剧烈的肌肉收缩抽动，并于 1791 年发表《论肌肉运动中的电力》（De viribus electricitatis in motu musculari commentarius），此后这一现象成为近代生理学说明最低限度神经肌肉应激性的经典例证。',
          },
        ],
      },
      {
        id: 'il-s2-b07',
        type: 'verse',
        num: '§ 07',
        fr: 'On ne vit pas entrer le grand Priam. Il s’arrêta,\nÉtreignit les genoux d’Achille, baisa ses mains,\nTerribles, tueuses d’hommes, qui lui avaient massacré tant de fils.',
        zh: '无人看见伟大的[普里阿摩斯走进帐来]{#g-il-s2-04}。他停下脚步，\n抱住阿喀琉斯的双膝，亲吻他的双手——\n那可怖的、杀人的双手，曾屠戮了他那么多儿子。',
        glosses: [
          {
            id: 'g-il-s2-04',
            anchor: '普里阿摩斯走进帐来',
            content:
              '出自《伊利亚特》第 24 卷第 477—479 行。特洛伊老王普里阿摩斯为赎回爱子赫克托耳的遗体，携重礼乘骡车夜赴阿开亚军营；途中赫耳墨斯神奉宙斯之命扮作密耳弥多涅斯青年侍从为其引路，施法催眠守营哨兵、推开沉重门闩后隐身离去，使普里阿摩斯得以在无人察觉的情况下直入阿喀琉斯营帐内室。末行「可怖的、杀人的」（**δεινὰς ἀνδροφόνους**）系荷马在全诗中惯常冠于赫克托耳名下的饰词（「杀人的赫克托耳」），此处移用于杀死赫克托耳的阿喀琉斯之手。',
          },
        ],
      },
      {
        id: 'il-s2-b08',
        type: 'paragraph',
        num: '§ 08',
        fr: 'Le spectacle d’un homme réduit à ce degré de malheur glace à peu près comme glace l’aspect d’un cadavre :',
        zh: '一个人沦落到这步苦难境地的景象，几乎像一具尸骸的模样那样令人心生寒栗：',
      },
      {
        id: 'il-s2-b09',
        type: 'verse',
        num: '§ 09',
        fr: 'Comme quand le dur malheur saisit quelqu’un, lorsque dans son pays\nIl a tué, et qu’il arrive à la demeure d’autrui,\nDe quelque riche ; un frisson saisit ceux qui le voient ;\nAinsi Achille frissonna en voyant le divin Priam.\nLes autres aussi frissonnèrent, se regardant les uns les autres.',
        zh: '[正如沉重的苦难攫住某人——当他在故乡]{#g-il-s2-05}\n杀了人，流亡来到异乡人的居室，\n来到某个富户家中；见他的人无不一阵寒战；\n阿喀琉斯望见神样的普里阿摩斯，也这般打了个寒战。\n其余众人也打起寒战，彼此面面相觑。',
        glosses: [
          {
            id: 'g-il-s2-05',
            anchor: '正如沉重的苦难攫住某人——当他在故乡',
            content:
              '出自《伊利亚特》第 24 卷第 480—484 行。古典语文学称之为荷马的「倒置明喻」（reverse simile）：在古希腊习俗法中，过失或冲动杀人者（身负 **ἄτη**，átē，薇依译作 **le dur malheur**「沉重的苦难」）为躲避死者亲族的血亲复仇，须逃往异邦富贵之家乞求净罪与收留，其携血污突入厅堂的模样会令在座者惊骇寒战（希腊文动词 **θάμβησεν**，含惊愕与敬畏交织的战栗之意）。而在营帐实景中，手染鲜血的杀戮者恰是端坐帐内的阿喀琉斯，登门跪求的则是丧子老王，荷马却将流亡凶手的比喻加诸老王身上。',
          },
        ],
      },
      {
        id: 'il-s2-b10',
        type: 'paragraph',
        num: '§ 10',
        fr: 'Mais ce n’est qu’un moment, et bientôt la présence même du malheureux est oubliée :',
        zh: '但那不过是一瞬之间，很快连这不幸者本人的在场也被遗忘了：',
      },
      {
        id: 'il-s2-b11',
        type: 'verse',
        num: '§ 11',
        fr: 'Il dit. L’autre, songeant à son père, désira le pleurer ;\nLe prenant par le bras, il poussa un peu le vieillard.\nTous deux se souvenaient, l’un d’Hector tueur d’hommes,\nEt il fondait en larmes aux pieds d’Achille, contre la terre ;\nMais Achille, lui, pleurait son père, et par moments aussi\nPatrocle ; leurs sanglots emplissaient la demeure.',
        zh: '他说罢。另一人想起[自己的父亲]{#g-il-s2-06}，心中涌起痛哭的渴望；\n他抓住老人的手臂，将他轻轻推开一点。\n两人各自追怀：一人思念杀人的赫克托耳，\n蜷伏在阿喀琉斯脚下的泥地上失声痛哭；\n阿喀琉斯则哭他自己的父亲，时而又哭\n帕特洛克罗斯；他们的恸哭声充满了整座营帐。',
        glosses: [
          {
            id: 'g-il-s2-06',
            anchor: '自己的父亲',
            content:
              '出自《伊利亚特》第 24 卷第 507—512 行。在此前的第 486—506 行中，普里阿摩斯开口便请阿喀琉斯念及远在故土弗提亚（Phthia）、与自己同处暮年的生父佩琉斯（Pélée）：佩琉斯虽遭邻邦围逼却尚知独子仍在人间，而自己五十个儿子大多命丧战火，唯一守护城邦的赫克托耳亦刚死于阿喀琉斯剑下，自己甚至不得不亲吻杀子仇人的手。这番话触动了深知自己命定战死特洛伊、无法归家侍奉老父的阿喀琉斯。',
          },
        ],
      },
      {
        id: 'il-s2-b12',
        type: 'paragraph',
        num: '§ 12',
        fr: 'Ce n’est pas par insensibilité qu’Achille a d’un geste poussé à terre le vieillard collé contre ses genoux ; les paroles de Priam évoquant son vieux père l’ont ému jusqu’aux larmes. Tout simplement il se trouve être aussi libre dans ses attitudes, dans ses mouvements, que si au lieu d’un suppliant c’était un objet inerte qui touchait ses genoux. Les êtres humains autour de nous ont par leur seule présence un pouvoir, et qui n’appartient qu’à eux, d’arrêter, de réprimer, de modifier chacun des mouvements que notre corps esquisse ; un passant ne détourne pas notre marche sur une route de la même manière qu’un écriteau, on ne se lève pas, on ne marche pas, on ne se rassied pas dans sa chambre quand on est seul de la même manière que lorsqu’on a un visiteur. Mais cette influence indéfinissable de la présence humaine n’est pas exercée par les hommes qu’un mouvement d’impatience peut priver de la vie avant même qu’une pensée ait eu le temps de les condamner à mort. Devant eux les autres se meuvent comme s’ils n’étaient pas là ; et eux à leur tour, dans le danger où ils se trouvent d’être en un instant réduits à rien, ils imitent le néant. Poussés ils tombent, tombés demeurent à terre, aussi longtemps que le hasard ne fait pas passer dans l’esprit de quelqu’un la pensée de les relever. Mais qu’enfin relevés, honorés de paroles cordiales, ils ne s’avisent pas de prendre au sérieux cette résurrection, d’oser exprimer un désir ; une voix irritée les ramènerait aussitôt au silence :',
        zh: '阿喀琉斯随手将紧贴在自己双膝上的老人推倒在地，并非出于麻木无情；普里阿摩斯提起他年迈老父的话语，已令他感动得潸然泪下。只不过，他在自己的姿态与举动上竟是如此自在无碍，仿佛触碰他双膝的不是一个乞命的人，而是一件无生命的惰性物体。我们周围的人类单凭其在场，就拥有一种唯独属于人的权能，能够阻断、抑制、调整我们身体刚要起意的每一个动作；路上一名行人让我们绕道而行的方式，不同于一块路牌；一个人在房间里独处时的起身、走动与落座，也不同于有访客在座之时。然而，人类在场这种难以言传的影响力，却无法由那些只要对方一动不耐烦的念头、甚至还来不及在思想中判处其死刑便会丧命的人施展出来。在他们面前，旁人行动起来就仿佛他们根本不在那里；而他们自己，由于时刻面临转瞬化为乌有的危险，也就模仿起虚无来。被推便倒下，倒下便留在地上，只要偶然间还没有谁心念一动想到去扶他们起身。哪怕他们终于被搀扶起来，蒙受亲切言辞的礼遇，也切莫当真以为自己已经死而复生，竟敢吐露哪怕一丝愿望；一声恼怒的呵斥便会立刻将他们重新喝回沉默之中：',
      },
      {
        id: 'il-s2-b13',
        type: 'verse',
        num: '§ 13',
        fr: 'Il dit, et le vieillard trembla et obéit.',
        zh: '他说罢，[老人战栗着顺从了]{#g-il-s2-07}。',
        glosses: [
          {
            id: 'g-il-s2-07',
            anchor: '老人战栗着顺从了',
            content:
              '出自《伊利亚特》第 24 卷第 571 行。阿喀琉斯扶起普里阿摩斯并请他落座后，焦灼的老王婉拒入座，恳求立即一睹赫克托耳遗体并早日领回；阿喀琉斯骤然动怒（第 560—570 行），警告老王切勿在悲痛中继续撩拨自己的肝火，否则自己纵然知道他是神灵护送而来的乞命者，也恐难自持而在营帐内杀他、违逆宙斯敕令。',
          },
        ],
      },
      {
        id: 'il-s2-b14',
        type: 'paragraph',
        num: '§ 14',
        fr: 'Du moins les suppliants, une fois exaucés, redeviennent-ils des hommes comme les autres. Mais il est des êtres plus malheureux qui, sans mourir, sont devenus des choses pour toute leur vie. Il n’y a dans leurs journées aucun jeu, aucun vide, aucun champ libre pour rien qui vienne d’eux-mêmes. Ce ne sont pas des hommes vivant plus durement que d’autres, placés socialement plus bas que d’autres ; c’est une autre espèce humaine, un compromis entre l’homme et le cadavre. Qu’un être humain soit une chose, il y a là, du point de vue logique, contradiction ; mais quand l’impossible est devenu une réalité, la contradiction devient dans l’âme déchirement. Cette chose aspire à tous moments à être un homme, une femme, et à aucun moment n’y parvient. C’est une mort qui s’étire tout au long d’une vie ; une vie que la mort a glacée longtemps avant de l’avoir supprimée.',
        zh: '乞命者一旦获准如愿，至少还能重新变回同常人无异的人。但还有比他们更不幸的生灵：他们并未死去，却终身变成了物。在他们的白昼里，没有任何余地、任何空隙、任何自由的园地容得下哪怕一丝发自他们自身的东西。他们并非比旁人生活得更艰辛、社会地位比旁人更低微的人；**他们是另一个人类物种，是人与尸骸之间的一种折中物。**一个人类竟是一件物，从逻辑观点看，这里存在着矛盾；然而当不可能之事沦为现实时，逻辑上的矛盾在灵魂中便化作了撕裂。这件物无时无刻不渴望成为一个男人、一个女人，却没有任何一刻能够如愿。这是一场绵延整整一生的死亡；是一段早在被死亡抹除之前许久，便已被死亡冻结的生命。',
      },
      {
        id: 'il-s2-b15',
        type: 'paragraph',
        num: '§ 15',
        fr: 'La vierge, fille d’un prêtre, subira ce sort :',
        zh: '祭司的处女女儿将遭受这种命运：',
      },
      {
        id: 'il-s2-b16',
        type: 'verse',
        num: '§ 16',
        fr: 'Je ne la rendrai pas. Auparavant la vieillesse l’aura prise,\nDans notre demeure, dans Argos, loin de son pays,\nÀ courir devant le métier, à venir vers mon lit.',
        zh: '[我绝不归还她]{#g-il-s2-08}。在此之前，衰老早已将她攫住，\n在我们的宫室里，在阿耳戈斯，远离她的故国，\n在织机前往来奔忙，前来侍奉我的床榻。',
        glosses: [
          {
            id: 'g-il-s2-08',
            anchor: '我绝不归还她',
            content:
              '出自《伊利亚特》第 1 卷第 29—31 行。阿波罗神庙祭司克律塞斯（Chrysès）手持缠有神圣羊毛冠带的金权杖，携丰厚赎金前往阿开亚军营，恳求赎回在底比（Thébé）劫掠中被分给统帅阿伽门农的女俘——其女克律塞伊斯（Chryséis）。阿伽门农当众出言羞辱并驱逐老祭司，由此招致阿波罗降下九日瘟疫，拉开全诗序幕。',
          },
        ],
      },
      {
        id: 'il-s2-b17',
        type: 'paragraph',
        num: '§ 17',
        fr: 'La jeune femme, la jeune mère, épouse du prince, le subira :',
        zh: '年轻的妻子、年轻的母亲、王子的配偶将遭受这种命运：',
      },
      {
        id: 'il-s2-b18',
        type: 'verse',
        num: '§ 18',
        fr: 'Et peut-être un jour dans Argos tu tisseras la toile pour une autre\nEt tu porteras l’eau de la Messéis ou l’Hypérée,\nBien malgré toi, sous la pression d’une dure nécessité.',
        zh: '或许终有一日，在阿耳戈斯，你将为另一个女人织布，\n你将从[墨塞伊斯泉或许佩雷亚泉]{#g-il-s2-09}汲水挑担，\n满心不甘，迫于冷酷必然性的重压。',
        glosses: [
          {
            id: 'g-il-s2-09',
            anchor: '墨塞伊斯泉或许佩雷亚泉',
            content:
              '出自《伊利亚特》第 6 卷第 456—458 行，系赫克托耳在斯开亚门城楼诀别妻子安德洛玛刻时的预言。墨塞伊斯泉（Messéis）与许佩雷亚泉（Hypérée）为希腊本土名泉，古注分别将其定位在拉科尼亚（或色萨利法尔萨洛斯）与色萨利费莱（Phères）境内，此处泛指特洛伊陷落后王室女眷沦为希腊主妇家奴的服役之地。末行「冷酷必然性」（法文 **dure nécessité**，对应荷马希腊文 **κρατερὴ ἀνάγκη**，kraterḕ anánkē）亦是薇依晚期哲学借以界定物质世界与社会强制之盲目重力的核心概念。',
          },
        ],
      },
      {
        id: 'il-s2-b19',
        type: 'paragraph',
        num: '§ 19',
        fr: 'L’enfant héritier du sceptre royal le subira :',
        zh: '继承王室权杖的幼童也将遭受这种命运：',
      },
      {
        id: 'il-s2-b20',
        type: 'verse',
        num: '§ 20',
        fr: 'Elles sans doute s’en iront au fond des vaisseaux creux,\nMoi parmi elles ; toi, mon enfant, ou avec moi\nTu me suivras et tu feras d’avilissants travaux,\nPeinant aux yeux d’un maître sans douceur…',
        zh: '她们多半都要被押进空心大船的舱底离去，\n我也在她们中间；而你，[我的孩子]{#g-il-s2-10}，要么随我一道\n跟在我身旁，去干屈辱的苦役，\n在毫无温情的主人眼皮底下受苦劳作……',
        glosses: [
          {
            id: 'g-il-s2-10',
            anchor: '我的孩子',
            content:
              '出自《伊利亚特》第 24 卷第 731—734 行。赫克托耳遗体运返特洛伊后，安德洛玛刻手捧他的头颅抚尸哭悼，怀抱尚在襁褓中的独子阿斯蒂阿那克斯（Astyanax，本名斯卡曼德里俄斯）。在薇依此处节引的句末省略号之后（第 734—738 行），安德洛玛刻紧接着设想了幼子另一重结局：某个曾在战场上被赫克托耳杀死父兄或儿子的阿开亚武士将抓住孩子的双臂，从高耸的城塔上将他掷下摔死——在后来散佚的古希腊「史诗系」（Epic Cycle）之《小伊利亚特》与《伊利昂劫》中，这一结局确在破城之夜应验。',
          },
        ],
      },
      {
        id: 'il-s2-b21',
        type: 'paragraph',
        num: '§ 21',
        fr: 'Un tel sort, aux yeux de la mère, est aussi redoutable pour son enfant que la mort même ; l’époux souhaite avoir péri avant d’y voir sa femme réduite ; le père appelle tous les fléaux du ciel sur l’armée qui y soumet sa fille. Mais chez ceux sur qui il s’abat, un destin si brutal efface les malédictions, les révoltes, les comparaisons, les méditations sur l’avenir et le passé, presque le souvenir. Il n’appartient pas à l’esclave d’être fidèle à sa cité et à ses morts.',
        zh: '在母亲眼中，这样的命运对她的孩子而言同死亡本身一样可怖；丈夫宁愿在目睹妻子沦落至此之前便已战死沙场；父亲则呼求上天降下一切灾疫，惩罚那支使他女儿受此屈辱的军队。然而，在那些真正遭此厄运当头击中的人身上，如此蛮横的命运却抹去了一切诅咒、一切反抗、一切今昔对比、一切对未来与过往的沉思，甚至几乎抹去了记忆。忠于自己的城邦与亡灵，已不再是奴隶分内所能拥有的事。',
      },
      {
        id: 'il-s2-b22',
        type: 'paragraph',
        num: '§ 22',
        fr: 'C’est quand souffre ou meurt l’un de ceux qui lui ont fait tout perdre, qui ont ravagé sa ville, massacré les siens sous ses yeux, c’est alors que l’esclave pleure. Pourquoi non ? Alors seulement les pleurs lui sont permis. Ils sont même imposés. Mais dans la servitude, les larmes ne sont-elles pas prêtes à couler dès qu’elles le peuvent impunément ?',
        zh: '恰恰是当那些令他丧失一切、夷平他的城池、当着他的面屠杀他至亲的人中间有谁受苦或死去时，奴隶才放声痛哭。为什么不呢？唯独在那个时刻，眼泪才是被允许的，甚至是奉命必须流下的。可是在奴役之中，只要能够不受惩罚地流泪，眼泪岂不是随时都准备奔涌而出吗？',
      },
      {
        id: 'il-s2-b23',
        type: 'verse',
        num: '§ 23',
        fr: 'Elle dit en pleurant, et les femmes de gémir,\nPrenant prétexte de Patrocle, chacune sur ses propres angoisses.',
        zh: '她哭着说罢，众女俘随之悲泣呻吟，\n[借着哭悼帕特洛克罗斯的由头，各自哀哭自身的苦楚]{#g-il-s2-11}。',
        glosses: [
          {
            id: 'g-il-s2-11',
            anchor: '借着哭悼帕特洛克罗斯的由头，各自哀哭自身的苦楚',
            content:
              '出自《伊利亚特》第 19 卷第 301—302 行（希腊文原文 **Πάτροκλον πρόφασιν, σφῶν δ᾽ αὐτῶν κήδε᾽ ἑκάστη**，其中 **πρόφασιν** 意为「表面托辞、借口」）。薇依在此先引述这段哭丧的结句，紧接着在下一段倒叙引出第 291—300 行女俘布里塞伊斯（Briséis）面对帕特洛克罗斯遗体所唱的挽歌正文。',
          },
        ],
      },
      {
        id: 'il-s2-b24',
        type: 'paragraph',
        num: '§ 24',
        fr: 'En aucune occasion l’esclave n’a licence de rien exprimer, sinon ce qui peut complaire au maître. C’est pourquoi si, dans une vie aussi morne, un sentiment peut poindre et l’animer un peu, ce ne peut être que l’amour du maître ; tout autre chemin est barré au don d’aimer, de même que pour un cheval attelé les brancards, les rênes, le mors barrent tous les chemins sauf un seul. Et si par miracle apparaît l’espoir de redevenir un jour, par faveur, quelqu’un, à quel degré n’iront pas se porter la reconnaissance et l’amour pour des hommes envers qui un passé tout proche encore devrait inspirer de l’horreur :',
        zh: '在任何场合，除了能够取悦主人的话之外，奴隶都无权表达任何东西。正因如此，如果在如此死寂的生活中竟还有某种情感能够萌生、为生命添上些微生气，那就只能是对主人的爱；爱的禀赋通往其他一切方向的道路都被堵死了，正如对于一匹套上车辕的马，车辕、缰绳与马嚼子封死了除唯一一条路之外的所有去路。倘若奇迹般地浮现出一线希望——终有一日能蒙受恩惠而重新变回「某个人」——那么，对于那些凭着尚在眼前的往事本应激起满心惊惧的人，这份感激与爱又将倾注到何等地步：',
      },
      {
        id: 'il-s2-b25',
        type: 'verse',
        num: '§ 25',
        fr: 'Mon époux, à qui m’avaient donnée mon père et ma mère respectée,\nJe l’ai vu devant ma cité transpercer par l’airain aigu.\nMes trois frères, que m’avait enfantés une seule mère,\nSi chéris ! ils ont trouvé le jour fatal.\nMais tu ne m’as pas laissée, quand mon mari par le rapide Achille\nFut tué, et détruite la cité du divin Mynès,\nVerser des larmes ; tu m’as promis que le divin Achille\nMe prendrait pour femme légitime et m’emmènerait dans ses vaisseaux\nEn Phthia, célébrer le mariage parmi les Myrmidons.\nAussi sans répit je te pleure, toi qui as toujours été doux.',
        zh: '我的丈夫——父亲和受敬重的母亲曾将我许配给他——\n我亲眼看见他在我的城池前被锋利的青铜刺穿。\n我的三个兄弟，同一位母亲为我生下，\n何等亲爱！他们都迎来了命绝之日。\n然而，当我的丈夫被迅捷的阿喀琉斯\n杀死、[神样的米涅斯之城]{#g-il-s2-12}被夷平之际，你却不曾任我\n独自垂泪；你曾向我许诺，神样的阿喀琉斯\n会娶我为合法的妻子，用他的船舰载我前往\n弗提亚，在密耳弥多涅斯人中间举行婚礼。\n因此我无休止地哭你，你向来都是如此温和。',
        glosses: [
          {
            id: 'g-il-s2-12',
            anchor: '神样的米涅斯之城',
            content:
              '出自《伊利亚特》第 19 卷第 291—300 行。说话者为布里塞伊斯（Briséis），原是特洛伊南郊盟邦吕耳涅索斯城（Lyrnessos）国王米涅斯（Mynès）之妻。阿喀琉斯率军攻陷该城时当场杀死米涅斯及布里塞伊斯的三个同胞兄弟，将她掳为战利品侍妾；第 1 卷中阿伽门农被迫交还克律塞伊斯后强夺布里塞伊斯自偿，引发阿喀琉斯罢战，直至第 19 卷帕特洛克罗斯阵亡、两帅和解后她才被送返阿喀琉斯营帐，一见帕特洛克罗斯遗体便扑上前去唱出此段挽歌。弗提亚（Phthia）为阿喀琉斯及其部族密耳弥多涅斯人（Myrmidons）在色萨利南部的故国。',
          },
        ],
      },
      {
        id: 'il-s2-b26',
        type: 'paragraph',
        num: '§ 26',
        fr: 'On ne peut perdre plus que ne perd l’esclave ; il perd toute vie intérieure. Il n’en retrouve un peu que lorsque apparaît la possibilité de changer de destin. Tel est l’empire de la force : cet empire va aussi loin que celui de la nature. La nature aussi, lorsque entrent en jeu les besoins vitaux, efface toute vie intérieure et même la douleur d’une mère :',
        zh: '人不可能失去得比奴隶所失去的更多了；**他失去了一切内在生命。**只有当改变命运的可能性浮现时，他才稍微找回一点点内在生命。这就是力量的统治版图：这片版图延伸得同自然的统治版图一样遥远。自然也是如此，一旦关乎生存的生理需求开始起作用，它便会抹去一切内在生命，甚至抹去一位母亲的悲痛：',
      },
      {
        id: 'il-s2-b27',
        type: 'verse',
        num: '§ 27',
        fr: 'Car même Niobé aux beaux cheveux a songé à manger,\nElle à qui douze enfants dans sa maison périrent,\nSix filles et six fils à la fleur de leur âge.\nEux, Apollon les tua avec son arc d’argent\nDans sa colère contre Niobé ; elles, Artémis qui aime les flèches.\nC’est qu’elle s’était égalée à Lèto aux belles joues,\nDisant « elle a deux enfants ; moi, j’en ai enfanté beaucoup ».\nEt ces deux, quoiqu’ils ne fussent que deux, les ont fait tous mourir.\nEux neuf jours furent gisants dans la mort ; nul ne vint\nLes enterrer. Les gens étaient devenus des pierres par le vouloir de Zeus.\nEt eux le dixième jour furent ensevelis par les dieux du ciel.\nMais elle a songé à manger, quand elle fut fatiguée des larmes.',
        zh: '因为就连秀发的[尼俄柏]{#g-il-s2-13}也曾想到进食，\n她家中有十二个儿女惨遭横死，\n六个女儿与六个儿子，正当青春盛年。\n儿子们，阿波罗用他的银弓射杀，\n只因迁怒于尼俄柏；女儿们，则死于喜箭的阿耳忒弥斯之手。\n原来她曾自比于美颊的勒托，\n说道：「她只有两个孩子；我却生下了许多。」\n而那两个孩子，尽管只有两人，却叫他们全都丧命。\n他们九天倒卧在死亡中；无人前来\n掩埋他们。众人已顺从宙斯的旨意化作了石头。\n到了第十天，天上的诸神才将他们安葬。\n可她哭得精疲力竭之后，还是想到了进食。',
        glosses: [
          {
            id: 'g-il-s2-13',
            anchor: '尼俄柏',
            content:
              '出自《伊利亚特》第 24 卷第 602—613 行，系阿喀琉斯在妥善擦洗并安放赫克托耳遗体后，劝说彻夜未进水米的普里阿摩斯共同进餐时引述的神话先例。底比斯王后尼俄柏（Niobé，坦塔罗斯之女）自恃多子而讥讽提坦女神勒托（Lèto）仅育阿波罗与阿耳忒弥斯一双孪生神，遂招致兄妹二神射杀其全部十二名子女；在荷马紧接下文的叙述（第 614—617 行）中，进食后的尼俄柏自己也在吕底亚的西皮洛斯山（Sipylos）化作山岩，终年流淌山泉泪水。第 611 行「众人化作石头」（**λαοὺς δὲ λίθους ποίησε Κρονίων**）暗含古希腊民间词源谐音：希腊语「民众」（**λαός**，laós）与「石头」（**λᾶας**，lâas）语音相通。',
          },
        ],
      },
      {
        id: 'il-s2-b28',
        type: 'paragraph',
        num: '§ 28',
        fr: 'On n’a jamais exprimé avec tant d’amertume la misère de l’homme, qui le rend même incapable de sentir sa misère.',
        zh: '从来没有人以如此深重的苦涩道出过人的悲惨境遇——**这种悲惨甚至使人丧失了感受自身悲惨的能力。**',
      },
      {
        id: 'il-s2-b29',
        type: 'paragraph',
        num: '§ 29',
        fr: 'La force maniée par autrui est impérieuse sur l’âme comme la faim extrême, dès qu’elle consiste en un pouvoir perpétuel de vie et de mort. Et c’est un empire aussi froid, aussi dur que s’il était exercé par la matière inerte. L’homme qui se trouve partout le plus faible est au cœur des cités aussi seul, plus seul que ne peut l’être l’homme perdu au milieu d’un désert.',
        zh: '掌握在他人手中的力量一旦化作持久不断的生杀予夺之权，它对灵魂的专横支配便如同极度的饥饿一般不容抗拒。这种统治是如此冰冷、如此坚硬，仿佛是由无生命的惰性物质在行使。那个在任何地方都处于最弱势地位的人，置身繁华城邦的腹心，却同迷失在荒漠深处的人一样孤立无援，甚至比他更加孤独。',
      },
      {
        id: 'il-s2-b30',
        type: 'verse',
        num: '§ 30',
        fr: 'Deux tonneaux se trouvent placés au seuil de Zeus,\nOù sont les dons qu’il donne, mauvais dans l’un, bons dans l’autre…\nÀ qui il fait des dons funestes, il l’expose aux outrages ;\nL’affreux besoin le chasse au travers de la terre divine ;\nIl erre et ne reçoit d’égards ni des hommes ni des dieux.',
        zh: '[两只大瓮立在宙斯的门槛上]{#g-il-s2-14}，\n盛着他所赐予的礼赠，一瓮装的是恶运，另一瓮装的是福泽……\n宙斯把凶险的礼赠赐给谁，就使谁暴露在凌辱之下；\n[可怖的匮乏]{#g-il-s2-15}驱赶着他走遍神圣的大地；\n他四处漂泊，既得不到凡人的敬重，也得不到诸神的眷顾。',
        glosses: [
          {
            id: 'g-il-s2-14',
            anchor: '两只大瓮立在宙斯的门槛上',
            content:
              '出自《伊利亚特》第 24 卷第 527—528、531—533 行，系阿喀琉斯在营帐中宽慰普里阿摩斯时阐发的命运观。希腊文 **πίθοι**（píthoi，薇依译作 **tonneaux**）指古希腊家户半埋于地窖中储藏谷物、橄榄油或葡萄酒的巨型陶瓮。在薇依省略的第 529—530 行中，阿喀琉斯指出宙斯对凡人至多是祸福参半地舀取掺杂（如自己的父亲佩琉斯与特洛伊王普里阿摩斯，前半生极尽尊荣而晚景凄凉），绝无纯享福泽之人；若宙斯纯粹从灾祸之瓮中舀取赐人，则此人将沦入彻底被神人共弃的绝境（柏拉图后来在《理想国》第 2 卷 379d 中曾批判这段诗句有违神明公义）。',
          },
          {
            id: 'g-il-s2-15',
            anchor: '可怖的匮乏',
            content:
              '薇依译作 **l’affreux besoin** 的词对应荷马全集仅此处一见的孤证词（hapax legomenon）**βούβρωστις**（boúbrōstis，第 24 卷第 532 行）：由表程度剧烈的词头 **βου-**（原义「牛一般巨大的」）与动词词根 **βιβρώσκω**（「吞噬、啃食」）复合而成，本义为「如牛虻叮咬般剧烈的饥馑」，古注亦解作吞噬生计的赤贫困厄。',
          },
        ],
      },
    ],
  },
];
