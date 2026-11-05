import type { BookSection, GlossItem } from '../../../types/book';

export const laNauseeDedication = {
  toOriginal: 'AU CASTOR',
  toZh: '献给河狸',
  noteZh:
    '「[河狸]{#g-ln-1a-castor}」（Castor）是萨特与友人对西蒙娜·德·波伏瓦（Simone de Beauvoir）的终生昵称。',
  glosses: [
    {
      id: 'g-ln-1a-castor',
      anchor: '河狸',
      content:
        '这一绰号由萨特与波伏瓦的共同好友雷内·马厄（René Maheu）于 1929 年在巴黎高等师范学院备考哲学教师资格会考（Agrégation）期间所起：英语中「河狸」（Beaver）与波伏瓦的姓氏（Beauvoir）读音相近，且河狸性情勤勉、喜爱群居并善于筑造工程，恰如波伏瓦在写作与思想工作中的旺盛精力。《恶心》自 1931 年在勒阿弗尔萌生构想，历经数轮推翻重写，每一稿皆经波伏瓦逐页审读批改。'
    }
  ] satisfies GlossItem[]
};

export const laNauseeEpigraph = {
  quoteZh: '「他是个毫无集体重要性的小伙子，彻头彻尾只是个个体罢了。」',
  authorZh: '路易-费迪南·塞利纳',
  sourceZh: '《教会》（L’Église）'
};

export const laNauseePart1ASections: BookSection[] = [
  {
    id: 'feuillet-sans-date',
    roman: 'I',
    titleOriginal: 'Avertissement des éditeurs & Feuillet sans date',
    titleZh: '出版者按语与无日期散页',
    blocks: [
      {
        id: 'ln-1a-p01',
        type: 'paragraph',
        num: '§ 01',
        fr: 'AVERTISSEMENT DES ÉDITEURS',
        zh: '[出版者按语]{#g-ln-1a-01}',
        glosses: [
          {
            id: 'g-ln-1a-01',
            anchor: '出版者按语',
            content:
              '卷首题词引自路易-费迪南·塞利纳（Louis-Ferdinand Céline，1894—1961）写于 1926 至 1927 年、1933 年出版的五幕讽刺剧《教会》（L’Église，主人公巴尔达米即次年长篇小说《漫漫黑夜行》的前身）。该剧第三幕讽刺国际联盟的官僚机器，台词出自国联官员对一位不属于任何党派与利益集团的小人物的评价。开篇的「出版者按语」则借用自十八世纪卢梭《新爱洛伊丝》以来的「遗稿发现」叙事传统，将整部哲学小说托名为偶然整理出版的私人日记。'
          }
        ]
      },
      {
        id: 'ln-1a-p02',
        type: 'paragraph',
        num: '§ 02',
        fr: "Ces cahiers ont été trouvés parmi les papiers d’Antoine Roquentin. Nous les publions sans y rien changer.",
        zh: '这几本笔记是在[安托万·洛冈丹]{#g-ln-1a-02}的遗留文稿中发现的。我们未作任何改动，照原样予以付梓。',
        glosses: [
          {
            id: 'g-ln-1a-02',
            anchor: '安托万·洛冈丹',
            content:
              '法语姓氏「Roquentin」原本是一个古老的民间俗语名词，源自十七世纪一首讽刺歌谣，指称「满腹牢骚、古怪落魄的滑稽老头」；词根「roc」（岩石、石块）同时在语音上暗含矿石般的坚硬与荒凉感。'
          }
        ]
      },
      {
        id: 'ln-1a-p03',
        type: 'paragraph',
        num: '§ 03',
        fr: "La première page n’est pas datée, mais nous avons de bonnes raisons pour penser qu’elle est antérieure de quelques semaines au début du journal proprement dit. Elle aurait donc été écrite, au plus tard, vers le commencement de janvier 1932.",
        zh: '第一页没有标明日期，但我们有充分的理由认为，它比正式开启的日记要早几个星期。因此，这一页最迟大约写于一九三二年一月初。'
      },
      {
        id: 'ln-1a-p04',
        type: 'paragraph',
        num: '§ 04',
        fr: "À cette époque, Antoine Roquentin, après avoir voyagé en Europe Centrale, en Afrique du Nord et en Extrême-Orient, s’était fixé depuis trois ans à Bouville, pour y achever ses recherches historiques sur le marquis de Rollebon.",
        zh: '彼时，安托万·洛冈丹在游历了中欧、北非与远东之后，已在[布维尔]{#g-ln-1a-03}定居三年，以便在那里完成他对[罗尔邦侯爵]{#g-ln-1a-04}的历史研究。',
        glosses: [
          {
            id: 'g-ln-1a-03',
            anchor: '布维尔',
            content:
              '「布维尔」（Bouville）在法语字面上由「boue」（泥浆、淤泥）与「ville」（城市）拼合而成，直译即「泥城」。其现实地理与社会原型是法国诺曼底大港勒阿弗尔（Le Havre）：萨特于 1931 年 3 月至 1936 年 7 月在勒阿弗尔国立男子中学（现弗朗索瓦一世中学）任哲学教师，长期租住于火车站附近的旅馆，并在市立图书馆与港口咖啡馆完成了本书的初稿（萨特手稿中直接称这一构想为「关于偶然性的宣传册」）。'
          },
          {
            id: 'g-ln-1a-04',
            anchor: '罗尔邦侯爵',
            content:
              '罗尔邦侯爵（marquis de Rollebon）为萨特虚构的十八世纪末至十九世纪初法国流亡贵族与政治阴谋家，其生平事迹综合了多位大革命时期的真实历史人物，核心史料原型包括曾出仕俄国宫廷并卷入 1801 年沙皇保罗一世遇刺案的法国流亡文人奥古斯特·德·科策布（August von Kotzebue）、梅斯梅尔催眠术信徒皮塞居尔侯爵（marquis de Puységur），以及外交冒险家安特赖格伯爵（comte d’Antraigues）。'
          }
        ]
      },
      {
        id: 'ln-1a-p05',
        type: 'paragraph',
        num: '§ 05',
        fr: 'Les éditeurs.',
        zh: '出版者谨识。'
      },
      {
        id: 'ln-1a-p06',
        type: 'paragraph',
        num: '§ 06',
        fr: 'FEUILLET SANS DATE',
        zh: '**无日期散页**'
      },
      {
        id: 'ln-1a-p07',
        type: 'paragraph',
        num: '§ 07',
        fr: "Le mieux serait d’écrire les événements au jour le jour. Tenir un journal pour y voir clair. Ne pas laisser échapper les nuances, les petits faits, même s’ils n’ont l’air de rien, et surtout les classer. Il faut dire comment je vois cette table, la rue, les gens, mon paquet de tabac, puisque c’est cela qui a changé. Il faut déterminer exactement l’étendue et la nature de ce changement.",
        zh: '最好的办法是把每天发生的事情逐日记下来。记日记，好把事情看个明白。不要放过任何细微的差别、任何微不足道的小事，哪怕它们看起来算不得什么，最要紧的是把它们归类整理。我必须写下我是如何看待这张桌子、这条街、这些人、我那包烟草的，因为发生改变的正是这些东西。必须确切地界定这场变化的范围与性质。'
      },
      {
        id: 'ln-1a-p08',
        type: 'paragraph',
        num: '§ 08',
        fr: "Par exemple, voici un étui de carton qui contient ma bouteille d’encre. Il faudrait essayer de dire comment je le voyais avant et comment à présent je le",
        zh: '[比方说，这里有一个装着我那瓶墨水的硬纸盒]{#g-ln-1a-05}。我得试着说清楚，以前我是怎么看它的，而如今我又是怎么[^ln-1a-fn01]',
        authorNotes: [
          {
            id: 'ln-1a-fn01',
            fr: 'Un mot laissé en blanc.',
            zh: '此处原稿留白，缺一字。'
          }
        ],
        glosses: [
          {
            id: 'g-ln-1a-05',
            anchor: '比方说，这里有一个装着我那瓶墨水的硬纸盒',
            content:
              '1933 年春，雷蒙·阿隆（Raymond Aron）从柏林回到巴黎，在蒙帕纳斯大道煤气灯酒吧向萨特与波伏瓦介绍埃德蒙·胡塞尔（Edmund Husserl）的现象学，指着桌上的杏子鸡尾酒杯说：「你看，如果你是个现象学家，你就可以谈论这杯鸡尾酒，而且这就是哲学！」萨特随即于 1933 至 1934 学年赴柏林法兰西学院研读胡塞尔的《纯粹现象学通论》，将现象学「回到事物本身（zu den Sachen selbst）」的直观描述方法直接熔铸进洛冈丹对桌上墨水瓶纸盒、烟草包与啤酒杯的凝视之中。'
          }
        ]
      },
      {
        id: 'ln-1a-p09',
        type: 'paragraph',
        num: '§ 09',
        fr: "Eh bien, c’est un parallélépipède rectangle, il se détache sur — c’est idiot, il n’y a rien à en dire. Voilà ce qu’il faut éviter, il ne faut pas mettre de l’étrange où il n’y a rien. Je pense que c’est le danger si l’on tient un journal : on s’exagère tout, on est aux aguets, on force continuellement la vérité. D’autre part, il est certain que je peux, d’un moment à l’autre — et précisément à propos de cet étui ou de n’importe quel autre objet — retrouver cette impression d’avant-hier. Je dois être toujours prêt, sinon elle me glisserait encore entre les doigts. Il ne faut rien mais noter soigneusement et dans le plus grand détail tout ce qui se produit.",
        zh: '好吧，它是个直角平行六面体，凸现于——真蠢，关于它根本没什么好说的。这正是必须避免的事：绝不能在本来什么都没有的地方硬塞进古怪。我想这就是记日记的危险所在：人会把一切都夸大，时刻竖着耳朵戒备，没完没了地强扭真相。但另一方面，千真万确的是，我随时都可能——而且恰恰是在面对这个纸盒或随便什么别的物件时——重新撞见前天那种印象。我必须时刻有所准备，否则它又会从我指缝间溜走。绝不能[^ln-1a-fn02]任何东西，而要仔仔细细、极尽详尽地记下所发生的一切。',
        authorNotes: [
          {
            id: 'ln-1a-fn02',
            fr: 'Un mot est raturé (peut-être « forcer » ou « forger »), un autre rajouté en surcharge est illisible.',
            zh: '原稿此处涂掉了一词（似为「强扭」或「杜撰」），上方叠写的另一词字迹漫漶不可辨。'
          }
        ]
      },
      {
        id: 'ln-1a-p10',
        type: 'paragraph',
        num: '§ 10',
        fr: "Naturellement je ne peux plus rien écrire de net sur ces histoires de samedi et d’avant-hier, j’en suis déjà trop éloigné ; ce que je peux dire seulement, c’est que, ni dans l’un ni dans l’autre cas, il n’y a rien eu de ce qu’on appelle à l’ordinaire un événement. Samedi les gamins jouaient aux ricochets, et je voulais lancer comme eux un caillou dans la mer. À ce moment-là, je me suis arrêté, j’ai laissé tomber le caillou et je suis parti. Je devais avoir l’air égaré, probablement, puisque les gamins ont ri derrière mon dos.",
        zh: '自然，对于星期六和前天的那些事，我已经写不出什么清晰的头绪了，我已经离它们太远；我唯一能说的，就是无论在哪一桩事情里，都没有发生任何通常所谓「事件」的东西。星期六，几个野孩子在玩打水漂，我也想学他们往海里扔一块石子。就在那一刻，我停住了，松手任石子掉在地上，转身走了。我当时的神情八成显得魂不守舍，因为那帮孩子在背后哄笑起来。'
      },
      {
        id: 'ln-1a-p11',
        type: 'paragraph',
        num: '§ 11',
        fr: "Voilà pour l’extérieur. Ce qui s’est passé en moi n’a pas laissé de traces claires. Il y avait quelque chose que j’ai vu et qui m’a dégoûté, mais je ne sais plus si je regardais la mer ou le galet. Le galet était plat, sec sur tout un côté, humide et boueux sur l’autre. Je le tenais par les bords, avec les doigts très écartés, pour éviter de me salir.",
        zh: '以上是从外部看到的经过。而在我内心发生的事，并没有留下清晰的痕迹。当时有样东西被我看见了，叫我阵阵反胃，但我已经记不清我当时盯着看的究竟是大海还是那枚鹅卵石。[那枚鹅卵石扁扁的，一整面干爽，另一面却潮湿而沾满烂泥]{#g-ln-1a-07}。我把手指叉得老开，只捏着石子的边缘，免得弄脏自己的手。',
        glosses: [
          {
            id: 'g-ln-1a-07',
            anchor: '那枚鹅卵石扁扁的，一整面干爽，另一面却潮湿而沾满烂泥',
            content:
              '勒阿弗尔海滩并非细沙海滩，而是由大面积潮湿的灰黑色燧石鹅卵石（galets）铺成。鹅卵石朝上一面呈现符合日常预期的干燥固体形态，翻过来的底面却黏附着湿冷的泥浆；这种介于固体与液体之间的半流体「黏滞性（le visqueux）」，受科学哲学家加斯东·巴什拉（Gaston Bachelard）物质想象理论启发，日后被萨特在《存在与虚无》（L’Être et le Néant，1943）第四卷第二章第三节专门升华为「对物质进行存在论精神分析」的核心范畴。'
          }
        ]
      },
      {
        id: 'ln-1a-p12',
        type: 'paragraph',
        num: '§ 12',
        fr: "Avant-hier, c’était beaucoup plus compliqué. Et il y a eu aussi cette suite de coïncidences, de quiproquos, que je ne m’explique pas. Mais je ne vais pas m’amuser à mettre tout cela sur le papier. Enfin il est certain que j’ai eu peur ou quelque sentiment de ce genre. Si je savais seulement de quoi j’ai eu peur, j’aurais déjà fait un grand pas.",
        zh: '前天的事则要复杂得多。而且还接二连三地出了一串叫我无从解释的巧合与阴差阳错。不过我可没兴致把那些全都搬到纸上来。总之，可以肯定的是，我当时害怕了，或者生出了某种诸如此类的情绪。只要我能搞明白自己究竟怕的是什么，就算已经迈出了一大步。'
      },
      {
        id: 'ln-1a-p13',
        type: 'paragraph',
        num: '§ 13',
        fr: "Ce qu’il y a de curieux, c’est que je ne suis pas du tout disposé à me croire fou, je vois même avec évidence que je ne le suis pas : tous ces changements concernent les objets. Au moins c’est ce dont je voudrais être sûr.",
        zh: '奇怪的是，我丝毫不觉得自己疯了，我甚至明明白白地看出自己没疯：**所有这些变化都出在物件身上。**至少，这一点是我巴不得能够确信的。'
      },
      {
        id: 'ln-1a-p14',
        type: 'paragraph',
        num: '§ 14',
        fr: '10 heures et demie.',
        zh: '**十点半**[^ln-1a-fn03]。',
        authorNotes: [
          {
            id: 'ln-1a-fn03',
            fr: 'Du soir, évidemment. Le paragraphe qui suit est très postérieur aux précédents. Nous inclinons à croire qu’il fut écrit, au plus tôt, le lendemain.',
            zh: '显然指晚上十点半。以下段落的写作时间远晚于前文。我们倾向于认为，它最早也是在次日写下的。'
          }
        ]
      },
      {
        id: 'ln-1a-p15',
        type: 'paragraph',
        num: '§ 15',
        fr: "Peut-être bien, après tout, que c’était une petite crise de folie. Il n’y en a plus trace. Mes drôles de sentiments de l’autre semaine me semblent bien ridicules aujourd’hui : je n’y entre plus. Ce soir, je suis bien à l’aise, bien bourgeoisement dans le monde. Ici c’est ma chambre, orientée vers le nord-est. En dessous, la rue des Mutilés et le chantier de la nouvelle gare. Je vois de ma fenêtre, au coin du boulevard Victor-Noir, la flamme rouge et blanche du Rendez-vous des Cheminots. Le train de Paris vient d’arriver. Les gens sortent de l’ancienne gare et se répandent dans les rues. J’entends des pas et des voix. Beaucoup de personnes attendent le dernier tramway. Elles doivent faire un petit groupe triste autour du bec de gaz, juste sous ma fenêtre. Eh bien, il faut qu’elles attendent encore quelques minutes : le tram ne passera pas avant dix heures quarante-cinq. Pourvu qu’il ne vienne pas de voyageurs de commerce cette nuit : j’ai tellement envie de dormir et tellement de sommeil en retard. Une bonne nuit, une seule, et toutes ces histoires seraient balayées.",
        zh: '说到底，那没准只是一场小小的精神失常发作罢了。如今已经踪影全无。上星期我那些古怪的感触，今天想来实在荒唐可笑：我已经完全进不到那种心境里去了。今晚，我自在极了，规规矩矩、颇具资产阶级腔调地安居于这个世界之中。这里是我的房间，朝向东北。楼下是伤残军人街，还有[新火车站的建筑工地]{#g-ln-1a-08}。从窗口望出去，在[维克多·努瓦尔林荫道]{#g-ln-1a-09}的拐角处，我能看见「铁道员聚会咖啡馆」红白相间的灯火。巴黎开来的列车刚刚进站。人们走出老火车站，四散到街巷里。我听见脚步声和人声。许多人在等末班有轨电车。他们准是正聚在我窗子正下方的煤气街灯四周，围成凄清的一小簇。好吧，他们还得再等上几分钟：十点四十五分之前电车是不会来的。但愿今夜别有什么旅行推销员住店：我困极了，欠了太多太多的觉。只需美美睡上一夜，只要一夜，所有这些怪事便会一扫而空。',
        glosses: [
          {
            id: 'g-ln-1a-08',
            anchor: '新火车站的建筑工地',
            content:
              '原型为勒阿弗尔中央火车站（Gare du Havre）改建工程。旧站建于 1887 年，由建筑师亨利·帕孔（Henri Pacon）设计的新装饰艺术风格（Art Déco）车站于 1931 年动工、1932 年 10 月落成揭幕。萨特初到勒阿弗尔时租住的牛津旅馆（Hôtel Oxford）与布列塔尼旅馆正对着这片泥泞喧嚣的拆建工地。'
          },
          {
            id: 'g-ln-1a-09',
            anchor: '维克多·努瓦尔林荫道',
            content:
              '维克多·努瓦尔（Victor Noir，1848—1870），法兰西第二帝国末期的年轻共和派记者，1870 年 1 月因报刊争端前往与拿破仑三世的堂弟皮埃尔·波拿巴王子交涉决斗事宜时，被后者当场开枪射杀。其葬礼引发十余万巴黎市民上街抗议，成为法兰西第三共和国的标志性殉道者之一。法国外省许多城镇的市政当局热衷以第三共和国名人命名街道，此处连同「伤残军人街（rue des Mutilés，纪念一战伤兵）」共同构成典型的外省市政空间。'
          }
        ]
      },
      {
        id: 'ln-1a-p16',
        type: 'paragraph',
        num: '§ 16',
        fr: "Onze heures moins le quart : il n’y a plus rien à craindre, ils seraient déjà là. À moins que ce ne soit le jour du monsieur de Rouen. Il vient toutes les semaines, on lui réserve la chambre n° 2, au premier, celle qui a un bidet. Il peut encore s’amener : souvent il prend un bock au Rendez-vous des Cheminots avant de se coucher. Il ne fait pas trop de bruit, d’ailleurs. Il est tout petit et très propre, avec une moustache noire cirée et une perruque. Le voilà.",
        zh: '差一刻十一点：没什么好担心的了，要是有人来住店，这会儿早该到了。除非今天是那位鲁昂先生来的日子。他每个星期都来，旅馆给他留着二楼带坐浴盆的二号房间。他这会儿还可能露面：他睡觉前常去「铁道员聚会咖啡馆」喝上一杯扎啤。不过他倒不怎么吵闹。他个头矮小，收拾得干干净净，蓄着打了蜡的黑胡子，戴一顶假发。瞧，他来了。'
      },
      {
        id: 'ln-1a-p17',
        type: 'paragraph',
        num: '§ 17',
        fr: "Eh bien, quand je l’ai entendu monter l’escalier, ça m’a donné un petit coup au cœur, tant c’était rassurant : qu’y a-t-il à craindre d’un monde si régulier ? Je crois que je suis guéri.",
        zh: '听见他上楼梯的脚步声时，我心头微微一颤，那是何等踏实的宽慰啊：面对一个如此循规蹈矩的世界，又有什么可怕的呢？我想我是痊愈了。'
      },
      {
        id: 'ln-1a-p18',
        type: 'paragraph',
        num: '§ 18',
        fr: "Et voici le tramway 7 « Abattoirs-Grands Bassins ». Il arrive avec un grand bruit de ferraille. Il repart. À présent il s’enfonce, tout chargé de valises et d’enfants endormis, vers les Grands Bassins, vers les Usines dans l’Est noir. C’est l’avant-dernier tramway ; le dernier passera dans une heure.",
        zh: '七路有轨电车「屠宰场—大船坞线」也来了。它带着一阵哐啷作响的废铁轰鸣驶近，又开走了。这会儿，它正满载着旅行箱和睡熟的孩童，一头扎进漆黑的东区，驶向大船坞，驶向工厂区。这是倒数第二班电车；末班车将在一小时后经过。'
      },
      {
        id: 'ln-1a-p19',
        type: 'paragraph',
        num: '§ 19',
        fr: "Je vais me coucher. Je suis guéri, je renonce à écrire mes impressions au jour le jour, comme les petites filles, dans un beau cahier neuf.",
        zh: '我要去睡了。我已经痊愈，不再像小姑娘那样，在一个漂亮的新本子上逐日记下自己的感想了。'
      },
      {
        id: 'ln-1a-p20',
        type: 'paragraph',
        num: '§ 20',
        fr: "Dans un cas seulement il pourrait être intéressant de tenir un journal : ce serait si",
        zh: '只有一种情况，记日记或许还有点意思：那就是倘若[^ln-1a-fn04]',
        authorNotes: [
          {
            id: 'ln-1a-fn04',
            fr: 'Le texte du feuillet sans date s’arrête ici.',
            zh: '无日期散页的正文到此戛然而止。'
          }
        ]
      }
    ]
  },
  {
    id: 'lundi-25-et-mardi-26-janvier',
    roman: 'II',
    titleOriginal: 'Lundi 25 janvier 1932 & Mardi 26 janvier',
    titleZh: '一九三二年一月二十五日星期一与一月二十六日星期二',
    blocks: [
      {
        id: 'ln-1a-p21',
        type: 'paragraph',
        num: '§ 21',
        fr: 'JOURNAL\n\nLundi 25 janvier 1932.',
        zh: '**日记** — [一九三二年一月二十五日星期一]{#g-ln-1a-10}。',
        glosses: [
          {
            id: 'g-ln-1a-10',
            anchor: '一九三二年一月二十五日星期一',
            content:
              '按万年历，1932 年 1 月 25 日确为星期一，次日 1 月 26 日为星期二（部分早期排版或数字化文本曾因铅字磨损将「25」「26」误植为「29」「30」，伽利玛七星文库版《萨特小说全集》已据原历核定为 1 月 25 日与 26 日）。'
          }
        ]
      },
      {
        id: 'ln-1a-p22',
        type: 'paragraph',
        num: '§ 22',
        fr: "Quelque chose m’est arrivé, je ne peux plus en douter. C’est venu à la façon d’une maladie, pas comme une certitude ordinaire, pas comme une évidence. Ça s’est installé sournoisement, peu à peu ; je me suis senti un peu bizarre, un peu gêné, voilà tout. Une fois dans la place ça n’a plus bougé, c’est resté coi et j’ai pu me persuader que je n’avais rien, que c’était une fausse alerte. Et voilà qu’à présent cela s’épanouit.",
        zh: '有桩事情临到我头上了，我再也无法怀疑。它像一场疾病那样袭来，而不像一种寻常的确信，也不像一条一目了然的明证。它鬼鬼祟祟、一点一滴地潜入并安顿下来；我只是觉得有点异样、有点别扭，仅此而已。一旦占据了地盘，它便按兵不动，悄无声息地蛰伏着，以至于我竟能说服自己根本没事，那不过是一场虚惊。而如今，它却骤然盛放开来。'
      },
      {
        id: 'ln-1a-p23',
        type: 'paragraph',
        num: '§ 23',
        fr: "Je ne pense pas que le métier d’historien dispose à l’analyse psychologique. Dans notre partie, nous n’avons affaire qu’à des sentiments entiers sur lesquels on met des noms génériques comme Ambition, Intérêt. Pourtant si j’avais une ombre de connaissance de moi-même, c’est maintenant qu’il faudrait m’en servir.",
        zh: '我不认为历史学家这一行当有助于心理分析。在我们这一行里，我们打交道的尽是些浑然整块的情感，人们往上面贴上诸如「野心」「利益」之类的现成通名。然而，假如我对自己还有哪怕一丝半点的认识，现在也到了非用上不可的时候了。'
      },
      {
        id: 'ln-1a-p24',
        type: 'paragraph',
        num: '§ 24',
        fr: "Dans mes mains, par exemple, il y a quelque chose de neuf, une certaine façon de prendre ma pipe ou ma fourchette. Ou bien c’est la fourchette qui a, maintenant, une certaine façon de se faire prendre, je ne sais pas. Tout à l’heure, comme j’allais entrer dans ma chambre, je me suis arrêté net, parce que je sentais dans ma main un objet froid qui retenait mon attention par une sorte de personnalité. J’ai ouvert la main, j’ai regardé : je tenais tout simplement le loquet de la porte. Ce matin, à la bibliothèque, quand l’Autodidacte est venu me dire bonjour, j’ai mis dix secondes à le reconnaître. Je voyais un visage inconnu, à peine un visage. Et puis il y avait sa main, comme un gros ver blanc dans ma main. Je l’ai lâchée aussitôt et le bras est retombé mollement.",
        zh: '比方说，在我的双手里，就有了某种前所未有的东西，某种拿起我的烟斗或餐叉的特殊方式。又或者，是餐叉如今有了一种让人拿起的特殊方式，我说不好。刚才，我正要跨进房门，却猛地停住脚步，因为我感觉到手里握着一件冰冷的物件，正以某种类似「个性」的东西死死攫住我的注意力。我摊开手掌一看：我握着的不过是门闩罢了。今天上午在图书馆，当那位[自学者]{#g-ln-1a-11}[^ln-1a-fn05]走过来向我道早安时，我足足花了十秒钟才认出他来。我看见的是一张陌生的脸，甚至简直算不上一张脸。接着便是他的手，像一条肥硕的白虫子卧在我掌心里。我立刻松开手，他的胳膊便软绵绵地垂了下去。',
        authorNotes: [
          {
            id: 'ln-1a-fn05',
            fr: "Ogier P..., dont il sera souvent question dans ce journal. C’était un clerc d’huissier. Roquentin avait fait sa connaissance en 1930 à la bibliothèque de Bouville.",
            zh: '即奥吉耶·P……，本篇日记中将屡屡提及此人。他是一名司法执达员事务所的书记员。洛冈丹于一九三〇年在布维尔市立图书馆与他结识。'
          }
        ],
        glosses: [
          {
            id: 'g-ln-1a-11',
            anchor: '自学者',
            content:
              '法语「Autodidacte」（源自古希腊语 autodidaktos，意为「自我教导者」）。在第三共和国普及世俗公共教育的背景下，外省市立图书馆里常有出身小职员阶层、试图靠业余苦读百科全书掌握人类全部知识的平民读者。'
          }
        ]
      },
      {
        id: 'ln-1a-p25',
        type: 'paragraph',
        num: '§ 25',
        fr: "Dans les rues, aussi, il y a une quantité de bruits louches qui traînent.",
        zh: '街上也一样，游荡着一大堆形迹可疑的声响。'
      },
      {
        id: 'ln-1a-p26',
        type: 'paragraph',
        num: '§ 26',
        fr: "Donc il s’est produit un changement, pendant ces dernières semaines. Mais où ? C’est un changement abstrait qui ne se pose sur rien. Est-ce moi qui ai changé ? Si ce n’est pas moi, alors c’est cette chambre, cette ville, cette nature ; il faut choisir.",
        zh: '可见，在最近这几个星期里，确实发生了一场变化。可究竟发生在哪里？这是一种悬在半空、不落到任何实处的抽象变化。是我变了吗？倘若不是我，那就是这间屋子、这座城市、这片自然变了；二者必居其一。'
      },
      {
        id: 'ln-1a-p27',
        type: 'paragraph',
        num: '§ 27',
        fr: "Je crois que c’est moi qui ai changé : c’est la solution la plus simple. La plus désagréable aussi. Mais enfin je dois reconnaître que je suis sujet à ces transformations soudaines. Ce qu’il y a, c’est que je pense très rarement ; alors une foule de petites métamorphoses s’accumulent en moi sans que j’y prenne garde et puis, un beau jour, il se produit une véritable révolution. C’est ce qui a donné à ma vie cet aspect heurté, incohérent. Quand j’ai quitté la France, par exemple, il s’est trouvé bien des gens pour dire que j’étais parti sur un coup de tête. Et quand j’y suis revenu, brusquement, après six ans de voyage, on eût encore très bien pu parler de coup de tête. Je me revois encore, avec Mercier, dans le bureau de ce fonctionnaire français qui a démissionné l’an dernier à la suite de l’affaire Pétrou. Mercier se rendait au Bengale avec une mission archéologique. J’avais toujours désiré aller au Bengale, et il me pressait de me joindre à lui. Je me demande pourquoi, à présent. Je pense qu’il n’était pas sûr de Portal et qu’il comptait sur moi pour le tenir à l’œil. Je ne voyais aucun motif de refus. Et même si j’avais pressenti, à l’époque, cette petite combine au sujet de Portal, c’était une raison de plus pour accepter avec enthousiasme. Eh bien, j’étais paralysé, je ne pouvais pas dire un mot. Je fixais une petite statuette khmère, sur un tapis vert, à côté d’un appareil téléphonique. Il me semblait que j’étais rempli de lymphe ou de lait tiède. Mercier me disait, avec une patience angélique qui voilait un peu d’irritation :",
        zh: '我想，发生改变的是我自己：这是最省事的解释，却也是最叫人不快的解释。不过我终究得承认，我向来容易遭遇这类突如其来的剧变。症结在于，我极少真正去思考；于是无数细小的蜕变在我不知不觉间积聚起来，直到某一天，轰然爆发一场真正的革命。正是这一点，使我的生平呈现出那种顿挫突兀、支离破碎的面貌。比方说，当年我离开法国时，就有不少人说我是凭一时心血来潮出走的。而等我漂泊六年后又突然折返法国时，人们也完全可以再说我是一时冲动。我至今仍清楚地记得自己同梅西耶一起，坐在那位去年因佩特鲁案而辞职的法国官员办公室里的情景。梅西耶正要随一个考古团前往孟加拉。我一直渴望去孟加拉，他便极力撺掇我同他一道去。如今我倒纳闷他当时为什么那么热心。我猜他是信不过波尔塔尔，指望我去帮他盯紧那个人。我当时找不到任何拒绝的理由。哪怕我那会儿已经嗅出了这桩冲着波尔塔尔去的小小算计，那也只会让我更有理由满腔热情地应承下来。然而，我当时却像瘫痪了一样，一个字也吐不出来。我死死盯着电话机旁绿色桌毯上的一尊[高棉小雕像]{#g-ln-1a-12}。我只觉得自己体内灌满了淋巴液或温吞的牛奶。梅西耶带着一副掩饰着些许焦躁的菩萨般的耐心对我说：',
        glosses: [
          {
            id: 'g-ln-1a-12',
            anchor: '高棉小雕像',
            content:
              '指法属印度支那柬埔寨吴哥古迹出土的高棉石雕或青铜造像。1923 年，22 岁的安德烈·马尔罗（André Malraux）曾携妻深入柬埔寨丛林盗凿女王宫（Banteay Srei）高棉浮雕，在金边被殖民当局逮捕受审，随后于 1930 年出版以远东丛林考古为主题的小说《王家大道》（La Voie royale）。萨特本人从未到访印度支那，此处洛冈丹随梅西耶考古团赴远东的经历即化用自这一背景。'
          }
        ]
      },
      {
        id: 'ln-1a-p28',
        type: 'paragraph',
        num: '§ 28',
        fr: "— N’est-ce pas, j’ai besoin d’être fixé officiellement. Je sais que vous finirez par dire oui : il vaudrait mieux accepter tout de suite.",
        zh: '「您瞧，我需要一个正式的准信儿。我知道您最后总会答应的：还不如现在就痛快应下来。」'
      },
      {
        id: 'ln-1a-p29',
        type: 'paragraph',
        num: '§ 29',
        fr: "Il a une barbe d’un noir roux, très parfumée. À chaque mouvement de sa tête, je respirais une bouffée de parfum. Et puis, tout d’un coup, je me réveillai d’un sommeil de six ans.",
        zh: '他蓄着一把黑中泛红的胡须，香气浓烈。他每动一下脑袋，我便吸入一团扑鼻的香风。就在这时，我猛然从长达六年的昏睡中惊醒过来。'
      },
      {
        id: 'ln-1a-p30',
        type: 'paragraph',
        num: '§ 30',
        fr: "La statue me parut désagréable et stupide et je sentis que je m’ennuyais profondément. Je ne parvenais pas à comprendre pourquoi j’étais en Indochine. Qu’est-ce que je faisais là ? Pourquoi parlais-je avec ces gens ? Pourquoi étais-je si drôlement habillé ? Ma passion était morte. Elle m’avait submergé et roulé pendant des années ; à présent, je me sentais vide. Mais ce n’était pas le pis : devant moi, posée avec une sorte d’indolence, il y avait une idée volumineuse et fade. Je ne sais pas trop ce que c’était, mais je ne pouvais pas la regarder tant elle m’écœurait. Tout cela se confondait pour moi avec le parfum de la barbe de Mercier.",
        zh: '那尊雕像在我眼里变得既讨厌又愚蠢，我感到自己正陷入深不见底的厌倦。我无论如何也想不通自己为什么会待在印度支那。我在那儿干什么？我为什么要跟这些人说话？我为什么穿得如此滑稽？我的激情已经死了。它曾将我淹没、裹挟着我翻滚了整整好几年；而此刻，我只觉得两手空空、五内俱虚。但这还不是最糟的：就在我面前，带着某种懒洋洋的姿态，盘踞着一个硕大无朋却又寡淡无味的念头。我不大清楚那究竟是什么，但它叫我恶心到了极点，连正眼看它一下都受不了。在我感官里，这一切全都同梅西耶胡须上的香气混作了一团。'
      },
      {
        id: 'ln-1a-p31',
        type: 'paragraph',
        num: '§ 31',
        fr: "Je me secouai, outré de colère contre lui, je répondis sèchement :",
        zh: '我浑身一振，对他怒不可遏，冷冰冰地回绝道：'
      },
      {
        id: 'ln-1a-p32',
        type: 'paragraph',
        num: '§ 32',
        fr: "— Je vous remercie, mais je crois que j’ai assez voyagé : il faut maintenant que je rentre en France.",
        zh: '「多谢您的好意，不过我想我已经走得够多了：现在我必须回法国去。」'
      },
      {
        id: 'ln-1a-p33',
        type: 'paragraph',
        num: '§ 33',
        fr: "Le surlendemain, je prenais le bateau pour Marseille.",
        zh: '后天一早，我便搭上了开往马赛的轮船。'
      },
      {
        id: 'ln-1a-p34',
        type: 'paragraph',
        num: '§ 34',
        fr: "Si je ne me trompe pas, si tous les signes qui s’amassent sont précurseurs d’un nouveau bouleversement de ma vie, eh bien, j’ai peur. Ce n’est pas qu’elle soit riche, ma vie, ni lourde, ni précieuse. Mais j’ai peur de ce qui va naître, s’emparer de moi — et m’entraîner où ? Va-t-il falloir encore que je m’en aille, que je laisse tout en plan, mes recherches, mon livre ? Me réveillerai-je dans quelques mois, dans quelques années, éreinté, déçu, au milieu de nouvelles ruines ? Je voudrais voir clair en moi avant qu’il ne soit trop tard.",
        zh: '倘若我没有弄错，倘若眼下聚拢来的所有征兆都预示着我生活里即将爆发一场新的天翻地覆，那么，我很害怕。这倒不是因为我的生活有多么丰盈、多么厚重、多么珍贵。可我害怕那个即将诞生、即将攫住我的东西——它又会把我和盘拖往何方？难道我又得拔腿出走，把我的研究、我的书统统半途抛下？难道几个月后、几年之后，我又将在一片新的废墟中央精疲力竭、大失所望地醒来？我想在一切无可挽回之前，把自己看个透彻。'
      },
      {
        id: 'ln-1a-p35',
        type: 'paragraph',
        num: '§ 35',
        fr: 'Mardi 26 janvier.',
        zh: '**一月二十六日星期二。**'
      },
      {
        id: 'ln-1a-p36',
        type: 'paragraph',
        num: '§ 36',
        fr: 'Rien de nouveau.',
        zh: '毫无新事。'
      },
      {
        id: 'ln-1a-p37',
        type: 'paragraph',
        num: '§ 37',
        fr: "J’ai travaillé de neuf heures à une heure à la bibliothèque. J’ai mis sur pied le chapitre XII et tout ce qui concerne le séjour de Rollebon en Russie, jusqu’à la mort de Paul Ier. Voilà du travail fini : il n’en sera plus question jusqu’à la mise au net.",
        zh: '从上午九点到下午一点，我一直在图书馆工作。我搭起了第十二章的框架，把罗尔邦旅居俄国直至[保罗一世遇刺]{#g-ln-1a-13}为止的全部材料都理顺了。这一段工作算是大功告成：在最终誊清定稿之前，再也不必为它费心了。',
        glosses: [
          {
            id: 'g-ln-1a-13',
            anchor: '保罗一世遇刺',
            content:
              '俄国沙皇保罗一世（Paul Ier，1754—1801，叶卡捷琳娜二世之子）性格反复无常、推崇普鲁士式严苛军纪，在对外政策上先参加反法同盟，后又转而与拿破仑修好并疏远英国，引发俄国近卫军与宫廷贵族集团的恐慌。1801 年 3 月 23 日深夜，以圣彼得堡军事总督帕伦伯爵（Pahlen）与汉诺威将军本尼格森（Bennigsen）为首的密谋军官潜入新建的米哈伊洛夫斯基宫卧室，逼迫保罗一世退位未果后，将其击倒并用军官绶带勒死，对外则宣称沙皇死于「脑溢血」。其长子亚历山大一世对政变事先知情并随之继位。'
          }
        ]
      },
      {
        id: 'ln-1a-p38',
        type: 'paragraph',
        num: '§ 38',
        fr: "Il est une heure et demie. Je suis au café Mably, je mange un sandwich, tout est à peu près normal. D’ailleurs, dans les cafés, tout est toujours normal et particulièrement au café Mably, à cause du gérant, M. Fasquelle, qui porte sur sa figure un air de canaillerie bien positif et rassurant. C’est bientôt l’heure de sa sieste, et ses yeux sont déjà roses, mais son allure reste vive et décidée. Il se promène entre les tables et s’approche, en confidence, des consommateurs :",
        zh: '现在是一点半。我坐在[马布利咖啡馆]{#g-ln-1a-14}里吃三明治，一切都还算正常。说起来，在咖啡馆里，一切永远是正常的，尤其是在马布利咖啡馆，这全仗着经理法斯凯尔先生——他脸上挂着一副踏实可靠、叫人安心的市侩狡黠相。马上就到他午睡的钟点了，他的眼圈已经泛红，但举止依旧麻利果断。他在餐桌之间踱来踱去，凑到顾客跟前，像交换机密似的低声问道：',
        glosses: [
          {
            id: 'g-ln-1a-14',
            anchor: '马布利咖啡馆',
            content:
              '「马布利咖啡馆」（Café Mably）的现实原型是位于勒阿弗尔市政厅广场与巴黎街一带的商业咖啡馆（如居伊咖啡馆 Café Guillaume），名称则借用了法国启蒙思想家马布利院长（Abbé de Mably，1709—1785，哲学家孔狄亚克之兄）。萨特与波伏瓦一生习惯在喧闹温暖、灯火通明的咖啡馆里写作与会友，在小说中，咖啡馆是外省市民通过闲谈、纸牌与集体规训来屏蔽存在之偶然性的典型避难所。'
          }
        ]
      },
      {
        id: 'ln-1a-p39',
        type: 'paragraph',
        num: '§ 39',
        fr: "— C’est bien comme cela, monsieur ?",
        zh: '「先生，这样还合您的意吧？」'
      },
      {
        id: 'ln-1a-p40',
        type: 'paragraph',
        num: '§ 40',
        fr: "Je souris de le voir si vif : aux heures où son établissement se vide, sa tête se vide aussi. De deux à quatre le café est désert, alors M. Fasquelle fait quelques pas d’un air hébété, les garçons éteignent les lumières et il glisse dans l’inconscience : quand cet homme est seul, il s’endort.",
        zh: '看着他这副神采奕奕的模样，我禁不住微微一笑：每当他这家店面空下来的时候，他的脑袋也会跟着空下来。下午两点到四点，咖啡馆里空无一人，那时法斯凯尔先生便会神情呆滞地走上几步，待侍者们把灯关掉，他便滑入不省人事的境地：**这个人一旦独处，就会睡过去。**'
      },
      {
        id: 'ln-1a-p41',
        type: 'paragraph',
        num: '§ 41',
        fr: "Il reste encore une vingtaine de clients, des célibataires, de petits ingénieurs, des employés. Ils déjeunent en vitesse dans des pensions de famille qu’ils appellent leurs popotes et, comme ils ont besoin d’un peu de luxe, ils viennent ici, après leur repas, ils prennent un café et jouent au poker d’as ; ils font un peu de bruit, un bruit inconsistant qui ne me gêne pas. Eux aussi, pour exister, il faut qu’ils se mettent à plusieurs.",
        zh: '店里还留着二十来个客人，尽是些单身汉、小工程师、公司职员。他们在被自己称作「伙食团」的家庭寄宿公寓里匆匆扒完午饭，又因为需要一点小小的排场，便在饭后踱到这里，喝杯咖啡，玩几局[骰子扑克]{#g-ln-1a-15}；他们闹出一点响动，一种空洞散漫、并不妨碍我的嘈杂声。**他们也一样，非得凑成好几个人，才能够存在下去。**',
        glosses: [
          {
            id: 'g-ln-1a-15',
            anchor: '骰子扑克',
            content:
              '法语「poker d’as」（字面意为「王牌扑克」），是二十世纪上半叶法国咖啡馆吧台盛行的五颗六面骰子博弈游戏，每颗骰子六个面分别印有扑克牌的 A（As）、K（Roi）、Q（Dame）、J（Valet）、10 与 9，玩家通过摇骰凑出同花顺、四条、葫芦等牌型来赌咖啡或开胃酒。'
          }
        ]
      },
      {
        id: 'ln-1a-p42',
        type: 'paragraph',
        num: '§ 42',
        fr: "Moi je vis seul, entièrement seul. Je ne parle à personne, jamais ; je ne reçois rien, je ne donne rien. L’Autodidacte ne compte pas. Il y a bien Françoise, la patronne du Rendez-vous des Cheminots. Mais est-ce que je lui parle ? Quelquefois, après dîner, quand elle me sert un bock, je lui demande :",
        zh: '而我，我孤身一人生活，彻头彻尾地孤身一人。我从不跟任何人交谈，从来不；我一无所受，亦一无所予。自学者算不上数。诚然还有弗朗索瓦丝，「铁道员聚会咖啡馆」的老板娘。可我跟她算得上交谈吗？有时候，晚饭过后，当她给我端来一杯扎啤时，我会问她一句：'
      },
      {
        id: 'ln-1a-p43',
        type: 'paragraph',
        num: '§ 43',
        fr: "— Vous avez le temps ce soir ?",
        zh: '「您今晚有空吗？」'
      },
      {
        id: 'ln-1a-p44',
        type: 'paragraph',
        num: '§ 44',
        fr: "Elle ne dit jamais non et je la suis dans une des grandes chambres du premier étage, qu’elle loue à l’heure ou à la journée. Je ne la paie pas : nous faisons l’amour au pair. Elle y prend plaisir (il lui faut un homme par jour et elle en a bien d’autres que moi) et je me purge ainsi de certaines mélancolies dont je connais trop bien la cause. Mais nous échangeons à peine quelques mots. À quoi bon ? Chacun pour soi ; à ses yeux, d’ailleurs, je reste avant tout un client de son café. Elle me dit, en ôtant sa robe :",
        zh: '她从不说个「不」字，我便跟在她身后走上二楼，进到她按钟点或按天出租的某间大客房里。我不付她钱：我们做爱是两相抵消的互惠交易。她从中享受到快感（她每天都少不了一个男人，而除了我之外她还有的是相好），我也借此排遣掉某些我太清楚起因的郁结。但我们几乎不交谈几句。又何必呢？各人顾各人罢了；况且在她眼里，我首先依然是她咖啡馆里的一个主顾。她一边脱下连衣裙，一边对我说：'
      },
      {
        id: 'ln-1a-p45',
        type: 'paragraph',
        num: '§ 45',
        fr: "— Dites, vous connaissez ça, le Bricot, un apéritif ? Parce qu’il y a deux clients qui en ont demandé, cette semaine. La petite ne savait pas, elle est venue me prévenir. C’étaient des voyageurs, ils ont dû boire ça à Paris. Mais je n’aime pas acheter sans savoir. Si ça ne vous fait rien, je garderai mes bas.",
        zh: '「哎，您听说过那种叫『布里科』的开胃酒吗？因为这星期有两个客人点这酒。小女招待没听说过，跑来知会我。那两个是过路旅客，准是在巴黎喝过那玩意儿。可我不喜欢稀里糊涂就进货。要是您不介意的话，我就留着长筒袜不脱了。」'
      },
      {
        id: 'ln-1a-p46',
        type: 'paragraph',
        num: '§ 46',
        fr: "Autrefois — longtemps même après qu’elle m’ait quitté — j’ai pensé pour Anny. Maintenant, je ne pense plus pour personne ; je ne me soucie même pas de chercher des mots. Ça coule en moi, plus ou moins vite, je ne fixe rien, je laisse aller. La plupart du temps, faute de s’attacher à des mots, mes pensées restent des brouillards. Elles dessinent des formes vagues et plaisantes, s’engloutissent : aussitôt, je les oublie.",
        zh: '从前——甚至在她离开我之后的很长一段时间里——我是为了安妮而思考的。如今，我不再为任何人思考；我甚至懒得去搜寻字眼。思绪在我体内流淌，或快或慢，我什么也不去固定，只任其自流。大多数时候，由于没有依附在字词上，我的思绪始终只是一团团迷雾。它们勾勒出模糊而逗人的形状，旋即吞没无踪：转眼之间，我便将它们忘得一干二净。'
      },
      {
        id: 'ln-1a-p47',
        type: 'paragraph',
        num: '§ 47',
        fr: "Ces jeunes gens m’émerveillent : ils racontent, en buvant leur café, des histoires nettes et vraisemblables. Si on leur demande ce qu’ils ont fait hier, ils ne se troublent pas : ils vous mettent au courant en deux mots. À leur place, je bafouillerais. Il est vrai que personne, depuis bien longtemps, ne se soucie plus de l’emploi de mon temps. Quand on vit seul, on ne sait même plus ce que c’est que raconter : le vraisemblable disparaît en même temps que les amis. Les événements aussi, on les laisse couler ; on voit surgir brusquement des gens qui parlent et qui s’en vont, on plonge dans des histoires sans queue ni tête : on ferait un exécrable témoin. Mais tout l’invraisemblable en compensation, tout ce qui ne pourrait pas être cru dans les cafés, on ne le manque pas. Par exemple samedi, vers quatre heures de l’après-midi, sur le bout du trottoir en planches du chantier de la gare, une petite femme en bleu ciel courait à reculons, en riant, en agitant un mouchoir. En même temps, un Nègre avec un imperméable crème, des chaussures jaunes et un chapeau vert, tournait le coin de la rue et sifflait. La femme est venue le heurter, toujours à reculons, sous une lanterne qui est suspendue à la palissade et qu’on allume le soir. Il y avait donc là, en même temps, cette palissade qui sent si fort le bois mouillé, cette lanterne, cette petite bonne femme blonde dans les bras d’un Nègre, sous un ciel de feu. À quatre ou cinq, je suppose que nous aurions remarqué le choc, toutes ces couleurs tendres, le beau manteau bleu qui avait l’air d’un édredon, l’imperméable clair, les carreaux rouges de la lanterne ; nous aurions ri de la stupéfaction qui paraissait sur ces deux visages d’enfants.",
        zh: '眼前这些年轻人真叫我惊叹：他们一面喝着咖啡，一面讲着条理分明、合情合理的故事。要是有人问他们昨天干了些什么，他们丝毫不会慌乱：三言两语就能向你交代得清清楚楚。要是换作我，准会结结巴巴。诚然，已经好久好久没有人关心我是怎么打发时间的了。**当一个人独自生活时，他甚至不再懂得什么叫「讲述」：那份「合情合理」会随着朋友一道消失不见。**就连事件，人也会任其流逝；你看见一些人冷不丁冒出来，说着话，又走掉了，你一头扎进没头没尾的桩桩怪事里：这样的人要是去当证人，准是个糟糕透顶的证人。但作为补偿，一切不近情理的事物，一切在咖啡馆里绝不会有人相信的东西，你却一样也不会错过。比方说上星期六，下午四点钟光景，在火车站工地木板人行道的尽头，一个穿天蓝色大衣的小女人正倒退着奔跑，一边格格地笑，一边挥舞着手帕。与此同时，一个身穿奶油色雨衣、脚蹬黄皮鞋、头戴绿礼帽的黑人，正吹着口哨转过街角。那女人依旧倒退着，在挂在工地围栏上、入夜才点亮的一盏提灯底下，一头撞进了他怀里。于是，在同一时刻，那里便并存着这道散发着浓烈湿木头气味的围栏、这盏提灯、火烧云天空下扑在一个黑人怀里的这个金发小女人。假如我们有四五个人在一起，我猜我们会注意到那一下碰撞、所有那些柔和的色彩、那件像羽绒被一样蓬松的漂亮蓝大衣、那件浅色雨衣、提灯的红玻璃窗格；我们会看着那两张孩子气的脸上露出的惊愕神情而哄然大笑。'
      },
      {
        id: 'ln-1a-p48',
        type: 'paragraph',
        num: '§ 48',
        fr: "Il est rare qu’un homme seul ait envie de rire : l’ensemble s’est animé pour moi d’un sens très fort et même farouche, mais pur. Puis il s’est disloqué, il n’est resté que la lanterne, la palissade et le ciel : c’était encore assez beau. Une heure après, la lanterne était allumée, le vent soufflait, le ciel était noir : il ne restait plus rien du tout.",
        zh: '独处的人是很少想笑的：那整个画面在我眼里活了起来，充满了一种极其强烈、甚至野性难驯，却又无比纯粹的意味。随后它便解体了，原地只剩下提灯、围栏与天空：那依然相当美。一小时后，提灯点亮了，风刮了起来，天空一片漆黑：原先的一切连一丝痕迹都不复存留。'
      },
      {
        id: 'ln-1a-p49',
        type: 'paragraph',
        num: '§ 49',
        fr: "Tout ça n’est pas bien neuf ; ces émotions inoffensives je ne les ai jamais refusées ; au contraire. Pour les ressentir il suffit d’être un tout petit peu seul, juste assez pour se débarrasser au bon moment de la vraisemblance. Mais je restais tout près des gens, à la surface de la solitude, bien résolu, en cas d’alerte, à me réfugier au milieu d’eux : au fond j’étais jusqu’ici un amateur.",
        zh: '这一切倒也算不上多么新鲜；这类无害的感触，我向来从不抗拒；恰恰相反。要想体会它们，只需要有一点点孤独就够了，刚好够在恰当的时刻甩脱那层「合情合理」。但我过去一直待在离人群很近的地方，只浮在孤独的表面，打定主意一旦遇上险情，就立刻逃回人群当中避难：说到底，直到今天为止，我不过是个把玩孤独的业余票友。'
      },
      {
        id: 'ln-1a-p50',
        type: 'paragraph',
        num: '§ 50',
        fr: "Maintenant, il y a partout des choses comme ce verre de bière, là, sur la table. Quand je le vois, j’ai envie de dire : pouce, je ne joue plus. Je comprends très bien que je suis allé trop loin. Je suppose qu’on ne peut pas « faire sa part » à la solitude. Cela ne veut pas dire que je regarde sous mon lit avant de me coucher, ni que j’appréhende de voir la porte de ma chambre s’ouvrir brusquement au milieu de la nuit. Seulement, tout de même, je suis inquiet : voilà une demi-heure que j’évite de regarder ce verre de bière. Je regarde au-dessus, au-dessous, à droite, à gauche : mais lui je ne veux pas le voir. Et je sais très bien que tous les célibataires qui m’entourent ne peuvent m’être d’aucun secours : il est trop tard, je ne peux plus me réfugier parmi eux. Ils viendraient me tapoter l’épaule, ils me diraient : « Eh bien, qu’est-ce qu’il a, ce verre de bière ? Il est comme les autres. Il est biseauté, avec une anse, il porte un petit écusson avec une pelle et sur l’écusson on a écrit « Spatenbräu ». » Je sais tout cela, mais je sais qu’il y a autre chose. Presque rien. Mais je ne peux plus expliquer ce que je vois. À personne. Voilà : je glisse tout doucement au fond de l’eau, vers la peur.",
        zh: '而如今，到处都是像桌上这只啤酒杯一样的东西。一看见它，我就想喊暂停：我不玩了。我心里再清楚不过，我已经走得太远了。我猜，人是没办法跟孤独「讲条件划界限」的。这并不是说我睡觉前会往床底下看，也不是说我提心吊胆地怕房门在半夜里突然洞开。只不过，我依然忐忑不安：我已经避开这只啤酒杯的视线足足半个钟头了。我朝上看、朝下看、朝左看、朝右看：唯独不想看见它。而且我深知，周围这群单身汉全都帮不了我半点忙：已经太迟了，我再也无法逃到他们中间去避难了。他们大抵会走过来拍拍我的肩膀，对我说：「得了吧，这只啤酒杯能有什么毛病？它跟别的杯子一模一样。磨斜棱的杯身，带一个把手，上面印着一块画有铁铲的小纹章，纹章上写着『[施帕滕啤酒]{#g-ln-1a-16}』。」这些我全都清楚，可我知道那里头还有别的东西。几乎算不上什么东西。但我再也无法向任何人解释我所看到的一切了。向谁也解释不了。就是这样：我正慢悠悠地向水底滑去，滑向恐惧。',
        glosses: [
          {
            id: 'g-ln-1a-16',
            anchor: '施帕滕啤酒',
            content:
              '施帕滕啤酒厂（Spatenbräu）创立于 1397 年，是德国慕尼黑历史最悠久的酿酒厂之一。「Spaten」在德语中意为「铁铲、麦芽铲」，其酒杯纹章图案即为一柄翻转麦芽的酿酒铁铲，缩写为加布里埃尔·泽德尔迈尔（Gabriel Sedlmayr）姓名首字母「G. S.」。'
          }
        ]
      },
      {
        id: 'ln-1a-p51',
        type: 'paragraph',
        num: '§ 51',
        fr: "Je suis seul au milieu de ces voix joyeuses et raisonnables. Tous ces types passent leur temps à s’expliquer, à reconnaître avec bonheur qu’ils sont du même avis. Quelle importance ils attachent, mon Dieu, à penser tous ensemble les mêmes choses. Il suffit de voir la tête qu’ils font quand passe au milieu d’eux un de ces hommes aux yeux de poisson, qui ont l’air de regarder en dedans et avec lesquels on ne peut plus du tout tomber d’accord. Quand j’avais huit ans et que je jouais au Luxembourg, il y en avait un qui venait s’asseoir dans une guérite, contre la grille qui longe la rue Auguste-Comte. Il ne parlait pas, mais, de temps à autre, il étendait la jambe et regardait son pied d’un air effrayé. Ce pied portait une bottine, mais l’autre pied était dans une pantoufle. Le gardien a dit à mon oncle que c’était un ancien censeur. On l’avait mis à la retraite parce qu’il était venu lire les notes trimestrielles dans les classes en habit d’académicien. Nous en avions une peur horrible parce que nous sentions qu’il était seul. Un jour il a souri à Robert, en lui tendant les bras de loin : Robert a failli s’évanouir. Ce n’est pas l’air misérable de ce type qui nous faisait peur, ni la tumeur qu’il avait au cou et qui frottait contre le bord de son faux col : mais nous sentions qu’il formait dans sa tête des pensées de crabe ou de langouste. Et ça nous terrorisait, qu’on pût former des pensées de langouste, sur la guérite, sur nos cerceaux, sur les buissons.",
        zh: '置身于这一片欢快而通情达理的谈笑声中央，我却形单影只。所有这些家伙把时间全花在彼此表白、欣喜若狂地确认大家所见略同上。老天爷，他们对于「大伙儿一块儿想同样的事情」这件事，看得多么重啊！只要看看当一个长着死鱼眼、目光仿佛朝向内里、谁也无法再同他达成任何共识的人从他们中间走过时，他们脸上露出的是什么脸色就够了。我八岁那年在[卢森堡公园与奥古斯特·孔德街]{#g-ln-1a-17}铁栅栏旁玩耍时，就有这么一个怪人，常来坐在紧靠栅栏的一座看守岗亭里。他从不说话，却时不时伸直一条腿，满脸惊恐地盯着自己的脚看。他那只脚穿着半统靴，另一只脚却套着拖鞋。公园管理员告诉我舅舅，那人从前是个中学学监。只因他有一次竟穿了一身法兰西学院院士的礼服跑进教室宣读季度成绩单，校方便勒令他退休了。我们怕他怕得要命，因为我们嗅出他是孤立于人群之外的。有一天，他朝罗贝尔笑了笑，远远地向他伸出双臂：罗贝尔差点当场昏厥过去。叫我们害怕的，并不是这家伙潦倒寒酸的模样，也不是他脖子上那颗蹭着硬领边缘的肉瘤：而是我们隐隐觉得，他脑子里正在成形的，是[螃蟹或龙虾般的思想]{#g-ln-1a-18}。竟然有人能对着岗亭、对着我们的铁环、对着灌木丛，生出龙虾般的思想——正是这一点叫我们魂飞魄散。',
        glosses: [
          {
            id: 'g-ln-1a-17',
            anchor: '卢森堡公园与奥古斯特·孔德街',
            content:
              '卢森堡公园（Jardin du Luxembourg）位于巴黎左岸第六区，其南侧铁栅栏外即为纪念实证主义哲学创始人奥古斯特·孔德（Auguste Comte，1798—1857）的奥古斯特·孔德街。童年萨特随外祖父夏尔·施韦泽（Charles Schweitzer）一家居住在卢森堡公园附近的勒戈夫街（rue Le Goff），正如他日后在自传《词语》（Les Mots）中所写，卢森堡公园正是他儿时尝试融入同龄孩童游戏却屡感格格不入的真实场所；而将疯癫的前中学学监置于以实证主义鼻祖命名的街道栅栏边，亦在空间上构成了理性秩序与边缘疯狂的对峙。'
          },
          {
            id: 'g-ln-1a-18',
            anchor: '螃蟹或龙虾般的思想',
            content:
              '萨特一生对甲壳类动物（螃蟹、龙虾、螯虾）怀有强烈的幽闭恐惧与痴迷。1935 年初，为亲身研究心理意象与幻觉机制（即后来出版的《想象》与《想象心理学》），萨特在圣安娜医院医生丹尼尔·拉加什（Daniel Lagache）的注射监控下服用了致幻剂麦司卡林（mescaline），随后长达数月饱受「身后随时有螃蟹与龙虾尾随爬行」的残留幻觉困扰。在萨特的哲学意象库中，甲壳包裹、长满节肢、眼神呆滞的螃蟹与龙虾代表着彻底异质于人类主体性、冰冷机械的非人存在。'
          }
        ]
      },
      {
        id: 'ln-1a-p52',
        type: 'paragraph',
        num: '§ 52',
        fr: "Est-ce donc ça qui m’attend ? Pour la première fois cela m’ennuie d’être seul. Je voudrais parler à quelqu’un de ce qui m’arrive avant qu’il ne soit trop tard, avant que je ne fasse peur aux petits garçons. Je voudrais qu’Anny soit là.",
        zh: '难道等待着我的就是这种下场吗？生平第一次，独处叫我感到烦恼了。真想在一切还不算太晚之前，在我还没变成叫小男孩们吓破胆的怪物之前，找个人谈谈临到我头上的这件事。真希望安妮就在身边。'
      },
      {
        id: 'ln-1a-p53',
        type: 'paragraph',
        num: '§ 53',
        fr: "C’est curieux : je viens de remplir dix pages et je n’ai pas dit la vérité — du moins pas toute la vérité. Quand j’écrivais, sous la date, « Rien de nouveau », c’était avec une mauvaise conscience : en fait une petite histoire, qui n’est ni honteuse ni extraordinaire, refusait de sortir. « Rien de nouveau. » J’admire comme on peut mentir en mettant la raison de son côté. Évidemment, il ne s’est rien produit de nouveau, si l’on veut, ce matin, à huit heures et quart, comme je sortais de l’hôtel Printania pour me rendre à la bibliothèque, j’ai voulu et je n’ai pas pu ramasser un papier qui traînait par terre. C’est tout et ce n’est même pas un événement. Oui, mais, pour dire toute la vérité, j’en ai été profondément impressionné : j’ai pensé que je n’étais plus libre. À la bibliothèque j’ai cherché sans y parvenir à me défaire de cette idée. J’ai voulu la fuir au café Mably. J’espérais qu’elle se dissiperait aux lumières. Mais elle est restée là, en moi, pesante et douloureuse. C’est elle qui m’a dicté les pages qui précèdent.",
        zh: '真奇怪：我刚刚写满了整整十页纸，却没有说出实情——至少没有说出全部实情。当我在日期底下写下「毫无新事」那四个字时，我其实是心虚的：事实上，有一桩既不丢人也算不上惊世骇俗的小事，硬是卡在笔下不肯出来。「毫无新事。」我真佩服人竟然能够把理性拉到自己一边，撒谎撒得如此理直气壮。诚然，要是按常理说，今天早上八点一刻，当我走出普兰塔尼亚旅馆前往图书馆时，确实没发生什么新鲜事——我不过是想要捡起地上散落的一张纸片，却没能捡起来罢了。就这么回事，这甚至根本算不上一个事件。是的，可是，要想把实话和盘托出，我就得承认自己当时受到了极深的震动：**我心想，我已经不再自由了。**在图书馆里，我千方百计想甩掉这个念头，却徒劳无功。我逃进马布利咖啡馆，指望它会在明亮的灯光下烟消云散。可它依旧沉甸甸、火辣辣地梗在我心头。前面的那几页文字，其实全是由它口授写下的。'
      },
      {
        id: 'ln-1a-p54',
        type: 'paragraph',
        num: '§ 54',
        fr: "Pourquoi n’en ai-je pas parlé ? Ça doit être par orgueil, et puis, aussi, un peu par maladresse. Je n’ai pas l’habitude de me raconter ce qui m’arrive, alors je ne retrouve pas bien la succession des événements, je ne distingue pas ce qui est important. Mais à présent c’est fini : j’ai relu ce que j’écrivais au café Mably et j’ai eu honte ; je ne veux pas de secrets, ni d’états d’âme, ni d’indicible ; je ne suis ni vierge ni prêtre, pour jouer à la vie intérieure.",
        zh: '我刚才为什么对它只字不提？八成是出于虚荣，此外，也多少有点笨拙的缘故。我没有向自己复述亲身经历的习惯，因而理不大清事情的先后次序，也分不清什么是紧要的。但现在这一切结束了：我重读了一遍自己在马布利咖啡馆里写下的文字，感到一阵羞愧；我不要什么秘密，不要什么灵魂心境，也不要什么只可意会不可言传的东西；[我既不是待字闺中的处女，也不是神父，犯不着去玩弄什么「内在精神生活」]{#g-ln-1a-19}。',
        glosses: [
          {
            id: 'g-ln-1a-19',
            anchor: '我既不是待字闺中的处女，也不是神父，犯不着去玩弄什么「内在精神生活」',
            content:
              '直接针对十九世纪末至二十世纪三十年代法国文坛与学院哲学的「内在生活（vie intérieure）」传统——文学上以阿米耶尔（Amiel）、保罗·布尔热（Paul Bourget）与早期纪德的私密心理日记为代表，哲学上则以莱昂·布伦瑞克（Léon Brunschvicg）的新康德主义唯心论与柏格森的内省绵延论为代表。萨特在《胡塞尔现象学的一个基本观念：意向性》（1939）与保罗·尼赞（Paul Nizan）的《看门狗》（Les Chiens de garde，1932）中，均批判这种将意识当作封闭容器的「内在生活」观念，主张意识本质上是指向外部世界的「意向性」投射，「意识没有『内部』，它不过是它自身的外部」。'
          }
        ]
      },
      {
        id: 'ln-1a-p55',
        type: 'paragraph',
        num: '§ 55',
        fr: "Il n’y a pas grand-chose à dire : je n’ai pas pu ramasser le papier, c’est tout.",
        zh: '其实也没多少好说的：我没能把那张纸捡起来，仅此而已。'
      },
      {
        id: 'ln-1a-p56',
        type: 'paragraph',
        num: '§ 56',
        fr: "J’aime beaucoup ramasser les marrons, les vieilles loques, surtout les papiers. Il m’est agréable de les prendre, de fermer ma main sur eux ; pour un peu je les porterais à ma bouche, comme font les enfants. Anny entrait dans des colères blanches quand je soulevais par un coin des papiers lourds et somptueux, mais probablement salis de merde. En été ou au début de l’automne, on trouve dans les jardins des bouts de journaux que le soleil a cuits, secs et cassants comme des feuilles mortes, si jaunes qu’on peut les croire passés à l’acide picrique. D’autres feuillets, l’hiver, sont pilonnés, broyés, maculés, ils retournent à la terre. D’autres tout neufs et même glacés, tout blancs, tout palpitants, sont posés comme des cygnes, mais déjà la terre les englue par en dessous. Ils se tordent, ils s’arrachent à la boue, mais c’est pour aller s’aplatir un peu plus loin, définitivement. Tout cela est bon à prendre. Quelquefois je les palpe simplement en les regardant de tout près, d’autres fois je les déchire pour entendre leur long crépitement, ou bien, s’ils sont très humides, j’y mets le feu, ce qui ne va pas sans peine ; puis j’essuie mes paumes remplies de boue à un mur ou à un tronc d’arbre.",
        zh: '我平素极喜欢捡拾七叶树果、破布条，尤其是废纸片。把它们抓起来、合拢手掌将它们攥在手心里的感觉叫我着迷；差一点儿我就会像小孩子那样把它们往嘴里塞了。每当我捏着一角拎起那些沉甸甸、质地考究却八成沾了粪便的废纸时，安妮总会气得脸色煞白。每逢夏日或初秋，在公园里总能找到被太阳烤透的碎报纸，像枯叶一样干脆易碎，黄得简直像用[苦味酸]{#g-ln-1a-20}浸泡过一般。另一些散页，到了冬天，被人踩踏、碾碎、污损，重又化归泥土。还有一些崭新的、甚至上了光釉的纸页，雪白雪白的，扑簌簌地颤动着，像天鹅一样停落在地上，但底下的泥土已经在把它们牢牢粘住。它们扭曲着身子，奋力从烂泥里挣脱出来，却只是为了飞到稍远一点的地方，彻底瘫平在地上。所有这些纸片都是值得拿在手里的好东西。有时候我只是凑得极近地端详着、摩挲着它们；有时候我把它们撕碎，好听那声绵长的脆响；又或者，要是它们实在太潮湿，我便费上半天劲把它们点燃；完事后，我再把糊满烂泥的手掌往墙上或树干上蹭干净。',
        glosses: [
          {
            id: 'g-ln-1a-20',
            anchor: '苦味酸',
            content:
              '苦味酸（acide picrique，即三硝基苯酚），一种呈鲜亮柠檬黄色的结晶化合物，十九世纪下半叶起广泛用作丝绸与羊毛的黄色染料、烧伤收敛消毒药剂，并在第一次世界大战期间作为法军炮弹的主装填炸药（法军称之为「麦宁炸药」Mélinite）。接触过苦味酸的器物、皮肤或纸张都会被染上一层极难褪去的刺眼明黄色。'
          }
        ]
      },
      {
        id: 'ln-1a-p57',
        type: 'paragraph',
        num: '§ 57',
        fr: "Donc, aujourd’hui, je regardais les bottes fauves d’un officier de cavalerie, qui sortait de la caserne. En les suivant du regard, j’ai vu un papier qui gisait à côté d’une flaque. J’ai cru que l’officier allait, de son talon, écraser le papier dans la boue, mais non : il a enjambé, d’un seul pas, le papier et la flaque. Je me suis approché : c’était une page réglée, arrachée sans doute à un cahier d’école. La pluie l’avait trempée et tordue, elle était couverte de cloques et de boursouflures, comme une main brûlée. Le trait rouge de la marge avait déteint en une buée rose ; l’encre avait coulé par endroits. Le bas de la page disparaissait sous une croûte de boue. Je me suis baissé, je me réjouissais déjà de toucher cette pâte tendre et fraîche qui se roulerait sous mes doigts en boulettes grises... Je n’ai pas pu.",
        zh: '话说回来，今天早上，我正盯着一名走出兵营的骑兵军官那双棕黄色的马靴看。我的目光一路追随着那双长靴，瞥见一洼水坑旁边躺着一张纸。我原以为那军官会一脚后跟把纸片踩进烂泥里，不料他没有：他一步便跨过了纸片和水坑。我走上前去：那是一页带横格的纸，多半是从小学生的练习本上撕下来的。雨水把它泡透、拧曲了，纸面上布满了水泡与隆起的肿块，活像一只被烧伤的手。页边那道红线已经褪色，洇成一团粉红的雾气；好几处墨水都化开了。纸页的下半截掩埋在一层泥壳底下。我弯下腰去，心里已经满怀欢喜地盘算着去触碰那团柔嫩冰凉的纸浆，在指间把它搓成一颗颗灰扑扑的小泥丸……我却没能下手。'
      },
      {
        id: 'ln-1a-p58',
        type: 'paragraph',
        num: '§ 58',
        fr: "Je suis resté courbé, une seconde, j’ai lu « Dictée : le Hibou blanc », puis je me suis relevé, les mains vides. Je ne suis plus libre, je ne peux plus faire ce que je veux.",
        zh: '我保持着弯腰的姿势停了一秒钟，读出纸上的字迹：「听写：《白猫头鹰》」，随后便两手空空地直起身来。我不再自由了，我再也无法随心所欲地行事了。'
      },
      {
        id: 'ln-1a-p59',
        type: 'paragraph',
        num: '§ 59',
        fr: "Les objets, cela ne devrait pas toucher, puisque cela ne vit pas. On s’en sert, on les remet en place, on vit au milieu d’eux : ils sont utiles, rien de plus. Et moi, ils me touchent, c’est insupportable. J’ai peur d’entrer en contact avec eux tout comme s’ils étaient des bêtes vivantes.",
        zh: '[物件，本不该触动人，更不该反过来触碰人，因为它们并不是活物。人们使用它们，再把它们放回原处，人们生活在它们中间：它们是有用的，仅此而已]{#g-ln-1a-21}。可它们却触碰着我，这实在叫人无法忍受。我害怕同它们发生接触，简直就像它们是一头头活生生的野兽。',
        glosses: [
          {
            id: 'g-ln-1a-21',
            anchor: '物件，本不该触动人，更不该反过来触碰人，因为它们并不是活物。人们使用它们，再把它们放回原处，人们生活在它们中间：它们是有用的，仅此而已',
            content:
              '法语动词「toucher」兼具「肉体触碰」与「情感触动」双重含义。马丁·海德格尔在《存在与时间》（Sein und Zeit，1927）第一篇第三章中区分了日常用具的「上手状态（Zuhandenheit）」与失去功用后的「现成在手状态（Vorhandenheit）」：在日常实用操劳中，锤子、门把手、纸张作为顺手的工具（Zeug）隐入背景，只呈现「有用性」；一旦工具链条断裂或实用目的抽空，物件便脱离人类赋予的工具意义网，裸露出令人惊惧的陌生存在。'
          }
        ]
      },
      {
        id: 'ln-1a-p60',
        type: 'paragraph',
        num: '§ 60',
        fr: "Maintenant je vois ; je me rappelle mieux ce que j’ai senti, l’autre jour, au bord de la mer, quand je tenais ce galet. C’était une espèce d’écœurement douceâtre. Que c’était donc désagréable ! Et cela venait du galet, j’en suis sûr, cela passait du galet dans mes mains. Oui, c’est cela, c’est bien cela : une sorte de nausée dans les mains.",
        zh: '现在我明白了；我更清楚地回想起前些天在海边握着那枚鹅卵石时的感受了。那是一种甜腻腻的反胃感。那是何等叫人难受啊！而且我敢肯定，那感觉是从鹅卵石里传出来的，是从鹅卵石一直渗进了我双手里。是的，就是这个，千真万确就是这个：**一种在双手里的恶心。**'
      }
    ]
  }
];
