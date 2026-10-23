import type { BookSection, GlossItem } from '../../../types/book';

export const villesDedication = {
  toOriginal: 'AVANT-PROPOS',
  toZh: '序言',
  noteOriginal:
    'Ce petit livre contient la substance de leçons faites dans diverses Universités des États-Unis d’Amérique. Le texte anglais en a été publié en 1925 sous le titre : Medieval Cities. Their origins and the revival of trade (Princeton, University Press). Quelques personnes ayant exprimé le désir d’en voir paraître une édition d’un prix plus approprié à l’état actuel des changes, je me suis décidé à en donner le texte français. Il ne comporte d’autres changements que de légères retouches à l’annotation.\n\nOn ne trouvera rien ici d’un manuel didactique. Je me suis simplement proposé de consacrer un essai de synthèse à l’un des sujets les plus intéressants de l’histoire sociale de l’Europe. J’espère que l’on m’excusera de n’avoir pu résister à la tentation de décrire, après de longues années de recherches spéciales, les grands mouvements de l’évolution urbaine depuis la fin de l’Antiquité jusque vers le milieu du XIIe siècle. La nature de ce travail ne me permettait ni de m’attarder en controverses ni de m’abstenir d’hypothèses. Parmi celles-ci il en est qui paraîtront peut-être assez hardies. Je serai heureux si elles rencontrent quelque adhésion. Je le serai davantage si elles suscitent de nouvelles recherches dans un domaine où, en dehors des chemins battus, bien des parties restent encore à explorer.',
  noteZh:
    '这本小书收录了我在美利坚合众国若干大学所作系列讲演的精要。[其英文本已于 1925 年以《中世纪城市：其起源与贸易的复兴》（普林斯顿大学出版社）为题梓行问世]{#g-vm-princeton}。鉴于不少读者希望看到一种定价更契合当前外汇行情的版本，我遂决意将法文原稿付梓。除对注释略作润色外，正文未作其他改动。\n\n读者在这里不会看到一部教科书式的讲义。我只是试图围绕欧洲社会史中最引人入胜的课题之一，撰写一篇[综合性的试论]{#g-vm-synthese}。在从事多年专门考证之后，我终究未能抵御住诱惑，想要勾勒出从古典时代晚期直至十二世纪中叶城市演进的宏大脉络，尚祈学界见谅。这一工作的性质，既不容许我在学派争讼上流连缠斗，也不容许我回避提出假说。其中若干假说或许会显得颇为大胆。倘若它们能赢得些许赞同，我将深感欣慰；倘若在一个除了老生常谈的熟路之外尚有大片疆域留待开拓的领域里，它们能激发出崭新的探索，我将更为欢喜。',
  signatureOriginal: 'Henri Pirenne, Sart-lez-Spa, 11 août 1926.',
  signatureZh: '亨利·皮朗，1926 年 8 月 11 日于萨尔—莱—斯帕',
  glosses: [
    {
      id: 'g-vm-princeton',
      anchor: '其英文本已于 1925 年以《中世纪城市：其起源与贸易的复兴》（普林斯顿大学出版社）为题梓行问世',
      content:
        '1922 年秋，比利时历史学家亨利·皮朗（Henri Pirenne，1862—1935）应美国历史学会及多所名校邀请赴美讲学，先后在普林斯顿、哈佛、耶鲁、哥伦比亚、芝加哥及加州大学发表关于欧洲中世纪城市起源与商业复兴的系列演说。普林斯顿大学出版社的弗兰克·卢米斯（Frank D. Halsey）将皮朗的法文讲稿译为英文，于 1925 年率先出版。由于一战后比利时法郎与法国法郎对美元大幅贬值，欧洲学者难以负担美版高昂的折算书价，布鲁塞尔莫里斯·拉梅尔坦（Maurice Lamertin）书店遂于 1927 年刊印了这部法文原版《中世纪城市》（Les villes du Moyen Âge: Essai d’histoire économique et sociale）。'
    },
    {
      id: 'g-vm-synthese',
      anchor: '综合性的试论',
      content:
        '皮朗自十九世纪八十年代末起深耕迪南（Dinant）、根特与佛兰德斯市政档案逾三十年，早年以实证主义宪政与经济史名世。1916 年至 1918 年第一次世界大战期间，他因领导比利时学术界抵制德军占领当局的根特大学分裂计划而被捕，先后关押于德国克雷费尔德、霍尔茨明登战俘营与耶拿，最后被软禁在图林根小镇克罗伊茨堡（Creuzburg）。在没有任何档案与参考书的幽禁岁月里，皮朗凭记忆写成《欧洲史》，并完成了从区域实证向宏观比较历史社会学的跃升。本序言中所谓「颇为大胆的假说」，正是他在 1922—1923 年间初露锋芒、在本书前两章首次系统化呈现，并于临终绝笔《穆罕默德与查理曼》（1935 年完稿、1937 年遗作出版）中定型的「皮朗命题（Thèse de Pirenne）」。'
    }
  ] satisfies GlossItem[]
};

export const section1: BookSection = {
  id: 'le-commerce-de-la-mediterranee',
  roman: 'I',
  titleOriginal: 'Le commerce de la Méditerranée jusqu’à la fin du VIIIe siècle',
  titleZh: '直到八世纪末的地中海贸易',
  blocks: [
    {
      id: 'vm-s1-p01',
      type: 'paragraph',
      num: '§ 01',
      original:
        'Si l’on jette un coup d’œil d’ensemble sur l’Empire Romain, ce qui frappe tout d’abord, c’est son caractère méditerranéen. Son étendue ne dépasse guère le bassin du grand lac intérieur qu’il enserre de toutes parts. Ses frontières lointaines du Rhin, du Danube, de l’Euphrate, du Sahara forment un vaste cercle de défenses destiné à en protéger les abords. Incontestablement la mer est tout à la fois le garant de son unité politique et de son unité économique. Leur existence dépend de la maîtrise qu’il exerce sur elle. Sans cette grande voie de communication ni le gouvernement, ni l’alimentation de l’orbis romanus ne seraient possibles. Il est intéressant de constater combien en vieillissant, l’Empire accentue davantage son caractère maritime. Sa capitale de terre ferme, Rome, est abandonnée au IVe siècle pour une capitale qui est en même temps un port admirable : Constantinople.',
      zh: '倘若对罗马帝国投以全盘的鸟瞰，首先扑面而来的，便是它的**地中海性格**。帝国的疆域几乎并未超出这片被它从四面八方环抱在内的巨大内湖盆地。莱茵河、多瑙河、幼发拉底河与撒哈拉沙漠那些遥远的边疆，不过是构成了一道旨在拱卫内湖门户的辽阔防御圈。无可争辩的是，这片海洋同时充当着帝国政治统一与经济统一的保障。这两重统一的存续，全系于帝国对海洋所握有的制海权。倘若没有这条伟大的交通干道，无论对[罗马世界（orbis romanus）]{#g-vm-s1-orbis}的统治还是粮食补给，都将无从谈起。耐人寻味的是，随着帝国日趋衰老，它的海洋性格反倒愈发凸显。四世纪时，它那座地处内陆的首都罗马被舍弃，取而代之的新首都同时又是一座得天独厚的良港：**君士坦丁堡**。',
      glosses: [
        {
          id: 'g-vm-s1-orbis',
          anchor: '罗马世界（orbis romanus）',
          content:
            '拉丁语「罗马寰宇 / 罗马世界圈」。自西塞罗与奥古斯都时代起，罗马人将环地中海盆地的文明秩序视为与「人类文明世界（orbis terrarum）」同义的闭合共同体。皮朗在开篇即点出其空间本质：罗马帝国并非一个向内陆无限延展的大陆帝国，而是一个以地中海为内湖（Mare Nostrum，「我们的海」）、以陆上长城与河流防线（limes）为外围护栏的「环海共同体」。一旦内湖航道被切断，整个古典世界的政治中枢与物资循环便会瞬间瓦解。'
        }
      ]
    },
    {
      id: 'vm-s1-p02',
      type: 'paragraph',
      num: '§ 02',
      original:
        'Certes, depuis la fin du IIIe siècle, la civilisation trahit un incontestable affaissement. La population diminue, l’énergie faiblit, les barbares commencent à ébranler les frontières, les dépenses croissantes du gouvernement s’acharnant à lutter pour la vie, entraînent une exploitation fiscale, qui de plus en plus, asservit les hommes à l’État. Pourtant, cette décadence ne paraît pas avoir atteint sensiblement la navigation de la Méditerranée. L’activité qu’elle présente encore contraste avec l’atonie qui, peu à peu, s’empare des provinces continentales. Elle continue à maintenir en contact l’un avec l’autre l’Orient et l’Occident. On ne voit point cesser l’intercourse des produits manufacturés ou des productions naturelles des climats si divers baignés par la mer : tissus de Constantinople, d’Édesse, d’Antioche, d’Alexandrie, vins, huiles et épices de Syrie, papyrus d’Égypte, blés d’Égypte, d’Afrique, d’Espagne, vins de Gaule et d’Italie. La réforme monétaire de Constantin basée sur le solidus d’or a même dû favoriser singulièrement le mouvement commercial en le dotant du bienfait d’un excellent numéraire, universellement usité comme instrument des échanges et expression des prix.',
      zh: '诚然，自三世纪末叶以来，古典文明显露出无可讳言的衰颓。人口萎缩，元气消磨，蛮族开始撼动帝国边防；苦苦挣扎求存的政府开支浩繁，引发了变本加厉的财政盘剥，一步步将臣民捆绑为国家的奴仆。然而，这场衰落似乎并未显著波及地中海的航运。海上依然呈现的繁忙气象，与内陆各行省逐渐陷入的麻木萎靡恰成鲜明对照。地中海继续维系着东方与西方的往来互通。受这片海水浸润的各个气候悬殊的地区之间，手工业制成品与自然物产的流转从未中断：君士坦丁堡、埃德萨、安条克与亚历山大里亚的织物，叙利亚的葡萄酒、橄榄油与香料，埃及的纸草，埃及、阿非利加与西班牙的谷物，高卢与意大利的葡萄酒。以[金币「索里达（solidus）」为基础的君士坦丁货币改革]{#g-vm-s1-solidus}，甚至必定极大地惠及了商业流转，为之提供了一种普遍充当交换媒介与价格尺度的优良硬通货。',
      glosses: [
        {
          id: 'g-vm-s1-solidus',
          anchor: '金币「索里达（solidus）」为基础的君士坦丁货币改革',
          content:
            '公元 309—312 年间，君士坦丁大帝废除了三世纪危机以来严重贬值的旧金币「奥雷乌斯（aureus）」，创制新标准金币「索里达（solidus，意为坚固、足值之币）」，规定每罗马磅（约 327.45 克）纯金铸造 72 枚，每枚重约 4.55 克。这一币制在此后七百余年间保持了惊人的成色与重量稳定，被誉为古典晚期与拜占庭世界的「地中海美元」。法语中的货币单位「苏（sou）」即直接由拉丁语 solidus 音变而来。'
        }
      ]
    },
    {
      id: 'vm-s1-p03',
      type: 'paragraph',
      num: '§ 03',
      original:
        'Des deux grandes régions de l’Empire, l’Orient et l’Occident, la première l’emportait infiniment sur la seconde, non seulement par la supériorité de sa civilisation, mais par le niveau beaucoup plus élevé de sa vitalité économique. À partir du IVe siècle il n’y a plus de véritables grandes villes qu’en Orient, et c’est là aussi que se concentrent, en Syrie et en Asie Mineure, les industries d’exportation et en particulier celle des textiles, dont le monde romain constitue le marché et que transportent les bateaux syriens. La prédominance commerciale des Syriens est certainement l’un des faits les plus intéressants de l’histoire du Bas Empire. Elle a dû contribuer largement à cette orientalisation progressive de la société qui devait aboutir finalement au byzantisme. Et cette orientalisation dont la Méditerranée est le véhicule, est une preuve évidente de l’importance croissante de la mer à mesure que l’Empire vieillissant s’affaiblit, recule au Nord sous la pression des barbares et se resserre de plus en plus sur les rivages.',
      zh: '在帝国的东方与西方这两大区域中，东方无论就其文明的优越性而言，还是就其远为旺盛的经济活力而言，都无可比拟地压倒了西方。自四世纪起，真正配得上大都会之名的城市已唯独存于东方；而以整个罗马世界为销路、由叙利亚商船队承运的各类出口手工业——尤其是纺织业——同样集中于东方的叙利亚与小亚细亚。[叙利亚人在商业上的支配地位]{#g-vm-s1-syriens}，无疑是晚期罗马帝国史上最耐人寻味的事实之一[^fn-vm-1-1]。这种支配地位必定在很大程度上促成了社会的渐进「东方化」，并最终凝结为**拜占庭文明**。而这场以地中海为媒介的东方化进程本身便昭示了一条明证：随着衰老的帝国国力日蹙、在蛮族进逼下从北方节节后撤、并愈发紧密地收缩回海岸线一带，这片海洋的分量反而与日俱增。',
      authorNotes: [
        {
          id: 'fn-vm-1-1',
          original:
            'P. Scheffer-Boichorst, Zur Geschichte der Syrer im Abendlande (Mitteilungen des Instituts für Œsterreichische Geschichtsforschung, t. VI [1885], p. 521) ; L. Bréhier, Les colonies d’Orientaux en Occident au commencement du Moyen Âge (Byzantinische Zeitschrift, t. XII [1903]). Cf. F. Cumont, Les religions orientales dans le paganisme romain, p. 132 (Paris, 1907).',
          zh: '参看保罗·舍费尔—博伊肖斯特：《西方叙利亚人史考》（载《奥地利历史研究所通报》第六卷［1885 年］，第 521 页）；路易·布雷耶：《中世纪初期西方的东方人侨民聚落》（载《拜占庭学刊》第十二卷［1903 年］）。并参看弗朗茨·居蒙：《罗马异教中的东方宗教》，第 132 页（巴黎，1907 年）。'
        }
      ],
      glosses: [
        {
          id: 'g-vm-s1-syriens',
          anchor: '叙利亚人在商业上的支配地位',
          content:
            '在古典晚期与墨洛温时代的拉丁文献中，「叙利亚人（Syri）」是一个广义概念，泛指来自黎凡特海岸（安条克、推罗、贝鲁特）、叙利亚内陆乃至亚历山大里亚与君士坦丁堡的近东长途海商。他们不仅垄断了波斯与中国丝绸、埃及纸草、黎凡特葡萄酒及香料的跨地中海批发贸易，还在意大利（拉文纳、罗马、那不勒斯）与高卢（马赛、阿尔勒、里昂、奥尔良、巴黎、特里尔）建立了永久性的商业侨民聚落。591 年，甚至有一位出身叙利亚商贾的教士欧塞比乌斯（Eusebius）用重金买下教职、当选为巴黎主教，并将巴黎主教座堂的教廷财务全数交由同族叙利亚人打理。'
        }
      ]
    },
    {
      id: 'vm-s1-p04',
      type: 'paragraph',
      num: '§ 04',
      original:
        'On ne peut donc s’étonner de voir les Germains, dès le début de la période des invasions, s’efforcer d’atteindre ces mêmes rivages pour s’y établir. Lorsque, dans le courant du IIIe siècle, les frontières cèdent pour la première fois sous leur poussée, ils se portent d’un même élan vers le Sud. Les Quades et les Marcomans envahissent l’Italie, les Goths marchent sur le Bosphore, les Francs, les Suèves, les Vandales qui ont franchi le Rhin, loin de s’y attarder, se dirigent aussitôt vers l’Aquitaine et vers l’Espagne. Ils ne songent pas à se fixer dans les provinces septentrionales qui les avoisinent. Manifestement ils convoitent ces régions bénies où la douceur de l’air et la fécondité de la nature s’allient à la richesse et aux charmes de la civilisation.',
      zh: '因此，自蛮族大迁徙时代开启之初，日耳曼人便竭力向这同一片海岸挺进以求立足定居，也就不足为奇了。当三世纪间帝国边疆在他们的冲击下首度洞开时，他们便怀着同一股冲动扑向南方。夸迪人与马克曼尼人侵入意大利，哥特人进逼博斯普鲁斯海峡；渡过莱茵河的法兰克人、苏维汇人与汪达尔人，非但没有在河畔流连驻足，反而即刻掉头直奔阿基坦与西班牙。他们根本无意在毗邻故土的北方行省安家落户。显而易见，他们垂涎的是南方那些得天独厚的乐土——在那里，温煦的气候与丰饶的自然，同文明的富庶与魅力融为一体。'
    },
    {
      id: 'vm-s1-p05',
      type: 'paragraph',
      num: '§ 05',
      original:
        'Cette première tentative des barbares n’eut de durable que les ruines qu’elle causa. Rome conservait assez de vigueur pour repousser les envahisseurs au delà du Rhin et du Danube. Pendant un siècle et demi encore elle parvint à les contenir en y épuisant ses armées et ses finances. Mais l’équilibre des forces devenait de plus en plus inégal entre les Germains, dont la pression se faisait plus puissante à mesure que l’augmentation de leur nombre les poussait plus impérieusement à se répandre au dehors, et l’Empire, auquel sa population décroissante permettait de moins en moins une résistance dont on ne peut s’empêcher d’ailleurs d’admirer l’habileté et la constance. Au commencement du Ve siècle, c’en est fait. L’Occident tout entier est envahi. Ses provinces se transforment en royaumes germaniques. Les Vandales s’installent en Afrique, les Wisigoths en Aquitaine et en Espagne, les Burgondes dans la vallée du Rhône, les Ostrogoths en Italie.',
      zh: '蛮族的这第一波进犯，除了留下一片持久的废墟外，并未取得稳固的战果。罗马尚保有足够的元气，将入侵者击退到莱茵河与多瑙河以北。在随后的一个半世纪里，帝国倾尽大军与国库，总算勉力将其遏制在防线之外。然而，双方的力量天平却日益失衡：一边是日耳曼人，随着人口繁衍，向外扩张的冲动愈发急迫，对边疆的压迫也愈发强悍；另一边则是帝国，不断萎缩的人口使其越来越无力维持防务——尽管人们依然不能不叹服其抵抗策略之巧妙与坚韧。到了五世纪初，大局已定。整个西方悉数沦陷，昔日的帝国行省纷纷蜕变为日耳曼诸王国：汪达尔人盘踞阿非利加，西哥特人入主阿基坦与西班牙，勃艮第人立足罗讷河谷，东哥特人则据有意大利。'
    },
    {
      id: 'vm-s1-p06',
      type: 'paragraph',
      num: '§ 06',
      original:
        'Cette nomenclature est significative. Elle ne comprend, on le voit, que des pays méditerranéens et il n’en faut pas davantage pour montrer que l’objectif des vainqueurs, libres enfin de s’établir à leur gré, c’était la mer, cette mer que durant si longtemps les Romains avaient appelée avec autant d’affection que d’orgueil « mare nostrum ». C’est vers elle que sans exception tous ils se dirigent, impatients de s’établir sur ses bords et de jouir de sa beauté. Si les Francs, au début, ne l’ont pas atteinte, c’est que, venus trop tard, ils ont trouvé la place occupée. Mais, eux aussi, s’obstinent à sa possession. Déjà Clovis a voulu conquérir la Provence et il a fallu que Théodoric intervînt pour l’empêcher d’étendre les frontières de son royaume jusqu’à la Côte d’Azur. Ce premier insuccès ne devait pas décourager ses successeurs. Un quart de siècle plus tard, en 536, ils profiteront de l’offensive de Justinien contre les Ostrogoths pour se faire céder par ceux-ci la région convoitée, et il est frappant de remarquer combien inlassablement la dynastie mérovingienne tend depuis lors à devenir à son tour une puissance méditerranéenne. En 542, Childebert et Clothaire risquent une expédition, d’ailleurs malheureuse, au delà des Pyrénées. L’Italie surtout attire la convoitise des rois francs. Ils s’allient aux Byzantins puis aux Lombards dans l’espoir de prendre pied au Sud des Alpes. Constamment déçus ils s’acharnent en nouvelles tentatives. Déjà, en 539, Theudebert a franchi les Alpes et lorsque Narsès, en 553, aura reconquis les territoires qu’il avait occupés, de nombreux efforts seront faits en 584-585 et de 588 à 590 pour s’en emparer de nouveau.',
      zh: '这份疆域清单意味深长。不难看出，其中所列无一不是地中海沿岸之地；单凭这一点便足以证明，这些终于得以随心所欲择地而居的胜利者，其终极目标正是大海——这片在如此漫长的岁月里被罗马人满怀眷恋与自豪地称为**「我们的海（mare nostrum）」**的海洋。所有蛮族毫无例外地朝着它奔涌而去，迫不及待地要在其岸畔安营扎寨，饱览其风华。法兰克人起初之所以未能染指地中海，仅仅是因为他们来得太晚，发现海岸早已被他人捷足先登。但他们同样执着于将大海据为己有。克洛维生前便已图谋征服普罗旺斯，全靠东哥特王狄奥多里克出面干预，才阻止他将法兰克王国的疆界推进至蔚蓝海岸。这初次受挫并未令克洛维的继承者们灰心丧气。四分之一个世纪后的 536 年，[他们趁查士丁尼大帝向东哥特人发动攻势之机，迫使后者割让了这片梦寐以求的普罗旺斯地区]{#g-vm-s1-provence}；而格外引人注目的是，自那以后，墨洛温王朝便百折不挠地力图使自己也跻身为地中海强权。542 年，希尔德贝特与克洛泰尔孤注一掷地越过比利牛斯山远征西班牙，尽管最终铩羽而归。意大利更是令法兰克诸王垂涎三尺。他们为了在阿尔卑斯山以南立住脚跟，先是联结拜占庭人，继而又同伦巴第人结盟。尽管屡遭挫败，他们仍执拗地发起一轮又一轮新攻势。早在 539 年，提乌德贝尔特便已翻越阿尔卑斯山；即便到了 553 年拜占庭名将纳尔塞斯收复了他所占领的北意大利领土之后，法兰克人仍在 584 至 585 年以及 588 至 590 年间屡次三番出兵，企图卷土重来。',
      glosses: [
        {
          id: 'g-vm-s1-provence',
          anchor: '他们趁查士丁尼大帝向东哥特人发动攻势之机，迫使后者割让了这片梦寐以求的普罗旺斯地区',
          content:
            '507 年法兰克王克洛维在武耶战役击溃西哥特王国，正欲南下夺取地中海出海口，统治意大利的东哥特王狄奥多里克大帝于 508 年发兵出援，将普罗旺斯（含阿尔勒与马赛）纳入东哥特保护之下。直至 535 年东罗马皇帝查士丁尼一世派遣贝利撒留跨海讨伐东哥特王国，陷入两线作战绝境的东哥特王维蒂吉斯（Vitigis）为换取法兰克人的中立与军事援助，于 536 年冬季将普罗旺斯正式割让给墨洛温诸王，并奉上两千磅黄金。法兰克王国由此获得了马赛与阿尔勒两大商业咽喉及金币铸造厂。'
        }
      ]
    },
    {
      id: 'vm-s1-p07',
      type: 'paragraph',
      num: '§ 07',
      original:
        'L’établissement des Germains dans le bassin de la Méditerranée ne marque nullement le point de départ d’une époque nouvelle dans l’histoire de l’Europe. Si gros de conséquences qu’il ait été, il n’a point fait table rase du passé et cassé la tradition. Le but des envahisseurs n’était pas d’anéantir l’Empire Romain, mais de s’y installer pour en jouir. À tout prendre, ce qu’ils en ont conservé dépasse de beaucoup ce qu’ils en ont détruit et ce qu’ils y ont apporté de neuf. Certes les royaumes qu’ils constituèrent sur le sol de l’Empire firent disparaître celui-ci en tant qu’État dans l’Europe Occidentale. À envisager les choses du point de vue politique, l’orbis romanus, refoulé désormais en Orient, a perdu le caractère œcuménique qui faisait jadis coïncider ses frontières avec les frontières de la chrétienté. Il s’en faut de beaucoup cependant qu’il devienne dès lors étranger aux provinces qu’il a perdues. Sa civilisation y survit à sa domination. Par l’Église, par la langue, par la supériorité des institutions et du droit, elle s’impose à ses vainqueurs. Au milieu des troubles, de l’insécurité, de la misère et de l’anarchie qui ont accompagné les invasions, elle se dégrade il est vrai, mais dans cette dégradation elle conserve une physionomie encore nettement romaine. Les Germains n’ont pas pu et d’ailleurs n’ont pas voulu se passer d’elle. Ils l’ont barbarisée, mais ils ne l’ont pas consciemment germanisée.',
      zh: '日耳曼人在地中海盆地的定居，绝不标志着欧洲历史上一个全新时代的开端。无论这一事件带来了多么深远的后果，它都既未将过往一笔勾销，也未曾斩断传统的脉络。入侵者的目的根本不是毁灭罗马帝国，而是住进帝国的屋檐下享用其福祉。通盘权衡起来，他们从罗马保存下来的东西，远远超过他们所摧毁的以及他们新带来的东西。诚然，他们在帝国故土上建立的诸王国，使罗马帝国作为一个主权国家在西欧烟消云散。若从政治视角审视，自此退缩回东方的「罗马世界（orbis romanus）」，固然丧失了昔日使其疆界与整个基督教世界疆界完全重合的那种普世（œcuménique）性质；然而，它距离就此同那些失地行省形同陌路，还差得远呢。**罗马的文明在罗马的统治覆灭之后依然存续。**凭借教会、凭借拉丁语言、凭借制度与罗马法的卓越优势，这一文明反过来降服了它的征服者。诚然，在伴随蛮族入侵而来的动荡、不宁、困顿与无政府状态中，古典文明不可避免地走向粗鄙退化；但即便在这番退化之中，它依然保有一副清晰可辨的罗马面貌。日耳曼人既无能力、更无意愿抛开罗马文明自行其是。[他们使罗马文明「蛮族化」了，却从未有意识地将其「日耳曼化」]{#g-vm-s1-germanise}。',
      glosses: [
        {
          id: 'g-vm-s1-germanise',
          anchor: '他们使罗马文明「蛮族化」了，却从未有意识地将其「日耳曼化」',
          content:
            '这是皮朗对十九世纪德国浪漫主义与日耳曼法制史学派（Germanisten，如毛雷尔、基尔克、怀茨）的锋利清算。德国史学界长期宣称公元五世纪日耳曼人的入侵推翻了腐朽的罗马旧世界，为欧洲注入了自由村社（Markgenossenschaft）与日耳曼精神的新生血液；皮朗则继承法国史家菲斯泰尔·德·古朗日（Fustel de Coulanges）的罗马延续论传统，指出入居帝国的日耳曼人数极少（通常不足行省人口的百分之五），迅速被拉丁语言、天主教会与罗马行政体制同化，五至七世纪的西欧只是「退化版的晚期罗马社会」，而非日耳曼新文明。'
        }
      ]
    },
    {
      id: 'vm-s1-p08',
      type: 'paragraph',
      num: '§ 08',
      original:
        'Rien ne confirme plus hautement cette observation que la persistance jusqu’au VIIIe siècle du caractère maritime que nous avons constaté tout à l’heure comme essentiel à l’Empire. La Méditerranée ne perd pas son importance après la période des invasions. Elle reste pour les Germains ce qu’elle était avant leur arrivée : le centre même de l’Europe, le mare nostrum. Si considérable qu’elle ait été dans l’ordre politique, la déposition du dernier empereur romain en Occident (476) n’a donc point suffi à faire dévier l’évolution historique de sa direction séculaire. Elle continue, au contraire, à se développer sur le même théâtre et sous les mêmes influences. Aucun indice n’annonce encore la fin de la communauté de civilisation établie par l’Empire des Colonnes d’Hercule à la Mer Egée et des côtes d’Égypte et d’Afrique à celles de Gaule, d’Italie et d’Espagne. Colonisé par les barbares, le monde nouveau conserve dans ses traits généraux la physionomie du monde antique. Pour suivre le cours des événements de Romulus Augustulus à Charlemagne, on est obligé de diriger constamment ses regards vers la Méditerranée.',
      zh: '没有什么比直到八世纪依然存续的海洋性格更能有力地印证上述观察了——而我们方才已指明，这种海洋性格正是罗马帝国的命脉所在。大迁徙时代落幕之后，地中海并未丧失其中枢地位。对于日耳曼人而言，它依然是他们到来之前的那个模样：欧洲本身的心脏，名副其实的「我们的海」。因此，[476 年西方末代罗马皇帝的废黜]{#g-vm-s1-476}，尽管在政治秩序上影响重大，却远不足以使历史演进偏离其绵延数百年之久的固有航向。恰恰相反，历史依然在同一座舞台上、受着同一些力量的牵引而继续铺展。从赫拉克勒斯之柱（直布罗陀海峡）到爱琴海，从埃及与阿非利加海岸到高卢、意大利与西班牙海岸，由罗马帝国缔造的那个文明共同体，尚无任何行将终结的征兆。这个被蛮族殖民的新世界，在总体轮廓上依然保持着古典世界的容颜。要想追寻从罗慕路斯·奥古斯都路斯直到查理曼之间的历史进程，人们的目光就必须时刻投向地中海[^fn-vm-1-2]。',
      authorNotes: [
        {
          id: 'fn-vm-1-2',
          original:
            'H. Pirenne, Mahomet et Charlemagne (Revue belge de philologie et d’histoire, t. I [1922]), p. 77).',
          zh: '参看亨利·皮朗：《穆罕默德与查理曼》（载《比利时语文学与历史学刊》第一卷［1922 年］，第 77 页）。'
        }
      ],
      glosses: [
        {
          id: 'g-vm-s1-476',
          anchor: '476 年西方末代罗马皇帝的废黜',
          content:
            '公元 476 年 9 月，日耳曼雇佣军统帅奥多亚塞（Odoacer）在拉文纳废黜年幼的西罗马皇帝罗慕路斯·奥古斯都路斯（Romulus Augustulus），并将帝国御林徽记送交君士坦丁堡的东罗马皇帝芝诺（Zeno），自领「意大利贵族（Patricius）」头衔代为管辖意大利。自文艺复兴与启蒙运动（如吉本《罗马帝国衰亡史》）以来，教科书习惯将 476 年定为古典时代终结与中世纪开端的绝对分界线；皮朗则指出，在同时代人眼中，这不过是罗马帝国重归君士坦丁堡单一皇帝名义统辖的常规政变，地中海的经济与文化一体性丝毫未受动摇。'
        }
      ]
    },
    {
      id: 'vm-s1-p09',
      type: 'paragraph',
      num: '§ 09',
      original:
        'Toutes les grandes péripéties de l’histoire se déroulent sur ses bords. De 493 à 526, l’Italie gouvernée par Théodoric exerce sur tous les royaumes germaniques une hégémonie par laquelle se perpétue et s’affirme la puissance de la tradition romaine. Puis, Théodoric disparu, cette puissance s’atteste plus clairement encore. Il s’en faut de peu que Justinien ne restaure l’unité impériale (527-565). L’Afrique, l’Espagne, l’Italie sont reconquises. La Méditerranée redevient un lac romain. Byzance, il est vrai, épuisée par l’immense effort qu’elle vient de fournir, ne peut ni achever, ni même conserver intacte l’œuvre surprenante qu’elle a accomplie. Les Lombards lui enlèvent le Nord de l’Italie (568), les Wisigoths s’affranchissent de son joug. Pourtant elle n’abandonne point ses prétentions. Elle conserve longtemps encore l’Afrique, la Sicile, l’Italie méridionale. Elle ne renonce point à dominer l’Occident grâce à la mer, dont ses flottes possèdent la maîtrise, si bien que le sort de l’Europe se joue plus que jamais en ce moment sur les flots de la Méditerranée.',
      zh: '历史上所有惊心动魄的剧变，全都上演于地中海沿岸。从 493 年到 526 年，由狄奥多里克统治的意大利对所有日耳曼王国行使着霸权，罗马传统的伟力借此得以延续并彰显。随后，狄奥多里克离世，这股罗马传统的力量甚至得到了更为昭彰的印证。查士丁尼大帝（527—565 年在位）几乎差一点便全面恢复了帝国的大一统：阿非利加、西班牙南部与意大利相继光复，**地中海再度变回一座罗马内湖**。诚然，刚刚付出浩大代价的拜占庭已然筋疲力尽，既无力彻底完成、甚至也无法原封不动地守住它所建立的这一惊人伟业。568 年伦巴第人从它手中夺走了意大利北部，西哥特人也挣脱了它的羁縻。然而，拜占庭从未放弃自己的主权宣称。在此后漫长的岁月里，它依然牢牢控制着阿非利加、西西里与意大利南部；仰仗麾下舰队所掌握的制海权，它从未放弃依托海洋去主宰西方，以至于在那个时刻，欧洲的命运比以往任何时候都更系于地中海的波涛之上。'
    },
    {
      id: 'vm-s1-p10',
      type: 'paragraph',
      num: '§ 10',
      original:
        'Ce qui est vrai du mouvement politique ne l’est pas moins, s’il ne l’est davantage encore, de la civilisation. Faut-il rappeler que Boëce (480-525) et Cassiodore (477-c. 562) sont Italiens, comme Saint Benoît (480-543) et comme Grégoire le Grand (590-604) et qu’Isidore de Séville (570-636) est Espagnol ? C’est l’Italie qui conserve les dernières écoles en même temps qu’elle répand le monachisme au Nord des Alpes. C’est chez elle que se rencontre à la fois ce qui subsiste encore de la culture antique et ce qui s’enfante de nouveau au sein de l’Église. Tout ce que l’Église d’Occident atteste de vigueur se rencontre dans les régions méditerranéennes. Là seulement elle possède une organisation et un esprit capables de grandes entreprises. Au Nord de la Gaule, le clergé croupit dans la barbarie et l’impuissance. Il a fallu que le christianisme fût apporté aux Anglo-Saxons (596) non point des côtes voisines de la Gaule, mais des côtes lointaines de l’Italie. L’arrivée de Saint Augustin parmi eux, est, elle aussi, une attestation éclatante de l’importance historique conservée par la Méditerranée. Et celle-ci apparaît plus significative encore si l’on songe que l’évangélisation de l’Irlande est due à des missionnaires venus de Marseille et que les apôtres de la Belgique, Saint Amand († c. 675) et Saint Remacle († c. 668), sont des Aquitains.',
      zh: '政治演进的真相是如此，精神文明的实情更是有过之而无不及。难道还需要提醒读者：[波爱修斯（480—525）与卡西奥多罗斯（477—约 562）是意大利人，正如圣本笃（480—543）与大格雷戈里教宗（590—604 年在位）是意大利人，而塞维利亚的伊西多尔（570—636）是西班牙人]{#g-vm-s1-boece}吗？正是意大利保存了最后一批世俗学校，同时又将隐修制度传播到阿尔卑斯山以北；古典文化尚存的硕果与教会内部孕育的新生力量，全都汇聚于意大利一身。西方教会所展现的一切生机与魄力，悉数分布在地中海区域；唯独在那里，教会才具备足以担当宏伟事业的组织架构与精神气度。反观高卢北部，教士阶层却在野蛮与无能中苟且沉沦。公元 596 年，基督教信仰之所以能传给盎格鲁—撒克逊人，靠的根本不是近在咫尺的高卢海岸，而是万里迢迢之外的意大利海岸。坎特伯雷的圣奥古斯丁率传教团登陆不列颠，本身便是地中海依然保有历史中枢地位的辉煌明证；而倘若想到爱尔兰的福音化同样归功于从马赛启程的传教士，想到比利时地区的两位使徒——圣阿芒（约卒于 675 年）与圣雷马克尔（约卒于 668 年）——皆出身于南方阿基坦，这一事实就愈发显得意味深长了。',
      glosses: [
        {
          id: 'g-vm-s1-boece',
          anchor: '波爱修斯（480—525）与卡西奥多罗斯（477—约 562）是意大利人，正如圣本笃（480—543）与大格雷戈里教宗（590—604 年在位）是意大利人，而塞维利亚的伊西多尔（570—636）是西班牙人',
          content:
            '皮朗在此一口气列举了古典晚期向中世纪过渡的五位西方文化巨擘，无一例外全出自环地中海的意大利与西班牙：波爱修斯（Boethius）在东哥特王国任执政官与内廷长官，翻译亚里士多德逻辑学著作并于狱中写成《哲学的慰藉》；卡西奥多罗斯（Cassiodorus）历任狄奥多里克大帝秘书与近卫军长官，晚年退隐南意大利维瓦里乌姆（Vivarium）修道院，创立修士抄写古典文献与研习「自由七艺」的传统；努尔西亚的圣本笃创立蒙特卡西诺修道院并撰成《本笃会规》；大格雷戈里教宗（Gregory I）出身罗马元老贵族，于 596 年从罗马圣安德烈修道院直接派遣奥古斯丁率四十名修士远赴英格兰肯特王国传教；塞维利亚大主教伊西多尔则在西哥特治下的西班牙编纂了二十卷百科全书《词源》（Etymologiae）。在七世纪以前，阿尔卑斯山以北几乎不曾产生过任何具有原创性的知识中心。'
        }
      ]
    },
    {
      id: 'vm-s1-p11',
      type: 'paragraph',
      num: '§ 11',
      original:
        'Plus clairement encore, le mouvement économique de l’Europe se révèle comme la continuation directe du mouvement économique de l’Empire Romain. Sans doute, le fléchissement de l’activité sociale apparaît dans ce domaine comme dans tous les autres. Déjà les derniers temps de l’Empire nous font assister à une décadence que la catastrophe des invasions a naturellement contribué à accentuer. Mais on se tromperait du tout au tout si l’on s’imaginait que l’arrivée des Germains a eu pour résultat de substituer au commerce et à la vie urbaine une économie purement agricole et une stagnation générale de la circulation. La prétendue répulsion des barbares pour les villes est une fable convenue démentie par la réalité. Si sur les frontières extrêmes de l’Empire quelques villes ont été pillées, incendiées et détruites, il est incontestable que l’immense majorité d’entre elles a survécu. Une statistique des villes existant aujourd’hui en France, en Italie et même aux bords du Rhin et du Danube, attesterait que, pour la plupart, elles s’élèvent à l’endroit où s’élevaient des villes romaines et que leur nom n’est bien souvent qu’une transformation du nom de celles-ci.',
      zh: '欧洲的经济脉动，更是再清晰不过地表现为罗马帝国经济脉动的直接延续。固然，社会活力的衰退在经济领域也同在其他一切领域一样显而易见。早在帝国末期，我们便已目睹了一场衰落，而蛮族入侵的浩劫自然进一步加剧了这一颓势。然而，倘若有人以为日耳曼人的到来导致商业与城市生活被一套纯粹的农业经济和普遍的流通停滞所取代，那就彻头彻尾地大错特错了[^fn-vm-1-3]。所谓「蛮族天生厌恶城市」，不过是一则被事实彻底戳穿的学界流俗神话。诚然，在帝国最外围的边疆地带有若干城市遭到劫掠、焚毁与夷平，但无可争辩的是，绝大多数罗马城市都幸存了下来。只需对今日法国、意大利乃至莱茵河与多瑙河沿岸现存的城市做一番统计，便能证明它们中的大多数都坐落于昔日罗马城市的原址之上，就连它们的现代地名，往往也不过是古罗马城名的语音讹变而已。',
      authorNotes: [
        {
          id: 'fn-vm-1-3',
          original:
            'A. Dopsch, Wirtschaftliche und Soziale Grundlagen der Europäischen Kulturentwickelung, t. II, p. 527 (Vienne, 1920) s’élève avec force contre l’idée que les Germains auraient fait disparaître la civilisation romaine.',
          zh: '阿尔方斯·多普施在《欧洲文化发展的经济与社会基础》第二卷第 527 页（维也纳，1920 年）中，曾力驳「日耳曼人消灭了罗马文明」这一成见。'
        }
      ]
    },
    {
      id: 'vm-s1-p12',
      type: 'paragraph',
      num: '§ 12',
      original:
        'L’Église avait calqué, on le sait, ses circonscriptions religieuses sur les circonscriptions administratives de l’Empire. En règle générale, chaque diocèse correspondait à une civitas. Or, l’organisation ecclésiastique n’ayant subi presque aucune altération à l’époque des invasions, il en résulte qu’elle a conservé son caractère municipal dans les royaumes nouveaux fondés par les conquérants germaniques. Cela est tellement vrai qu’à partir du VIe siècle, le mot civitas prend le sens spécial de cité épiscopale, de centre de diocèse. En survivant à l’Empire sur lequel elle s’était fondée, l’Église a donc contribué très largement à sauvegarder l’existence des villes romaines.',
      zh: '众所周知，教会当初完全是照搬帝国的行政区划来划定自身教区版图的。按照通例，每一个主教区（diocèse）都精确对应着一座罗马[「城邦（civitas）」]{#g-vm-s1-civitas}。既然教会组织在大迁徙时代几乎未曾遭受任何损毁，那么在日耳曼征服者建立的各个新王国里，它自然也就完整保留了自身的市政属性。这一事实是如此确凿，以至于从六世纪起，`civitas`（城）一词便获得了「主教驻跸之城」、「教区中枢」的专门涵义。因此，教会由于在它所依托的罗马帝国覆亡之后依然屹立不倒，便在极大程度上帮助保全了罗马城市的生命。',
      glosses: [
        {
          id: 'g-vm-s1-civitas',
          anchor: '「城邦（civitas）」',
          content:
            '在古罗马高卢与西方行省体制中，civitas 指一个以核心城市（caput civitatis）为首府、连同周边广袤乡野（territorium / pagus）构成的自治行政单元。四世纪基督教成为罗马国教后，教会规定每一座行政首府（civitas）设一主教席位。五世纪帝国崩溃后，世俗行省机构渐次瓦解，唯有驻节城内的主教（episcopus）留守不去，致使拉丁语 civitas（古法语演变为 cité）的词义发生历史性收缩：不再指代公民共同体或一般城镇，而专门指称「拥有主教座堂的古罗马主教城」，与中世纪后期新兴的商业「市镇（burgus / ville）」形成严格的概念区分。'
        }
      ]
    },
    {
      id: 'vm-s1-p13',
      type: 'paragraph',
      num: '§ 13',
      original:
        'Mais il faut reconnaître aussi que ces villes ont longtemps conservé par elles-mêmes une importance considérable. Leurs institutions municipales n’ont pas brusquement disparu à l’arrivée des Germains. On remarque que non seulement en Italie, mais en Espagne et même en Gaule elles restent en possession de leurs Decuriones, c’est à dire d’un corps de magistrats pourvu d’une autorité judiciaire et administrative dont les détails nous échappent, mais dont il n’est permis de nier ni l’existence, ni l’origine romaine. On y relève encore la présence du Defensor civitatis, et la pratique de l’inscription des actes authentiques aux Gesta Municipalia. D’autre part, et d’une manière plus incontestable, elles nous apparaissent comme les foyers d’une activité économique qui, elle aussi, est une survivance de la civilisation antérieure. Chaque cité reste le marché des campagnes environnantes, le domicile d’hiver des grands propriétaires fonciers de sa région et, pour peu qu’elle soit favorablement située, le centre d’un commerce de plus en plus développé à mesure que l’on se rapproche des bords de la Méditerranée. Il suffit de lire Grégoire de Tours pour se convaincre que la Gaule de son temps possède encore une classe de marchands de profession fixés dans les villes. Il cite en des passages tout à fait caractéristiques ceux de Verdun, de Paris, d’Orléans, de Clermont-Ferrand, de Marseille, de Nîmes, de Bordeaux. Il importe sans doute de ne pas s’exagérer leur importance. Ce serait une faute aussi grande que de la sous-évaluer. Il est certain que la constitution économique de la Gaule Mérovingienne était fondée beaucoup plus sur l’agriculture que sur toute autre forme d’activité, et cela est même d’autant plus évident qu’il en allait déjà ainsi sous l’Empire Romain. Mais il n’empêche que la circulation intérieure, que l’importation et l’exportation des denrées et des marchandises y jouaient un rôle assez actif pour qu’on doive les reconnaître comme indispensables à l’alimentation et à la subsistance de la société. Une preuve indirecte de ce fait est fournie par les revenus du tonlieu (theloneum). On appelait ainsi, on le sait, les péages établis par l’administration romaine le long des routes, dans les ports, au passage des ponts, etc. Les rois francs les ont tous laissé subsister, et ils en tiraient des ressources si abondantes que les percepteurs de ce genre de taxes (thelonearii) figuraient au nombre de leurs fonctionnaires les plus utiles.',
      zh: '但同样必须承认，这些城市单凭自身也在很长时期内保持着相当可观的分量。它们的市政制度并未随日耳曼人的到来而骤然湮灭。人们注意到，不仅在意大利，就连在西班牙乃至高卢，城市依然保有其[「市议会元老（Decuriones）」]{#g-vm-s1-curia}——即一个握有司法与行政职权的市政长官团；尽管其运作细节今已难考，但它的存续本身及其罗马渊源却是任何人都无法抹杀的[^fn-vm-1-4]。文献中同样还能见到「护民官（Defensor civitatis）」的身影，以及将公证文书登记入「市政档案卷宗（Gesta Municipalia）」的惯例。另一方面，而且更为确凿无疑的是，这些城市在我们眼前依然呈现为经济活动的汇聚点，而这种经济活动同样是先代文明的遗存。每一座城市依然是周边乡村的集市，是本地区大地主过冬的居所；只要地理位置稍有便利，它便依然是一座商业中心，并且越是靠近地中海沿岸，其贸易就越发繁盛。只需翻读[都尔的格雷戈里]{#g-vm-s1-gregoire}的著作，便足以确信在他那个时代的高卢，依然存在着一个常年定居于城市中的**职业商人阶级**。他在若干极具代表性的段落里，明确提到了凡尔登、巴黎、奥尔良、克莱蒙费朗、马赛、尼姆与波尔多的商人。诚然，我们切不可夸大这批商人的比重，但低估他们同样会犯下大错。墨洛温高卢的经济结构无疑远比其他任何活动都更深地植根于农业，况且早在罗马帝国治下情形便已如此，这一点自不待言。但即便如此，内部流通以及粮食与商品的进出口，在当时社会中依然扮演着相当活跃的角色，以至于我们必须承认它们对于整个社会的供养与生计是不可或缺的。这一事实的间接明证，便是[「通行税（tonlieu / theloneum）」]{#g-vm-s1-tonlieu}的丰厚岁入。众所周知，所谓通行税，即罗马行政当局沿陆路大道、海港、内河桥梁渡口等处设立的过境关卡税。法兰克诸王将这套税制全盘保留下来，并从中汲取了极为充沛的财源，以至于负责征收此类捐税的税官（thelonearii）跻身于王室最得力的官吏之列。',
      authorNotes: [
        {
          id: 'fn-vm-1-4',
          original:
            'Fustel de Coulanges, La Monarchie franque, p. 236 ; A. Dopsch, Wirtschaftliche und Soziale Grundlagen der Europäischen Kulturenentwickelung, t. II, p. 342 ; E. Mayer, Deutsche und französische Verfassungsgeschichte, t. I, p. 296 (Leipzig, 1899). — Voy. entre autres Historia Francorum, éd. Krusch, l. IV, § 43, l. VI, § 45, l. VIII, § 1, 33, l. III, § 34.',
          zh: '参看菲斯泰尔·德·古朗日：《法兰克君主国》，第 236 页；阿尔方斯·多普施：《欧洲文化发展的经济与社会基础》第二卷，第 342 页；恩斯特·迈耶：《德法宪政史》第一卷，第 296 页（莱比锡，1899 年）。并参看都尔的格雷戈里《法兰克人史》（克鲁施校勘本）卷四第 43 节、卷六第 45 节、卷八第 1 及 33 节、卷三第 34 节。'
        }
      ],
      glosses: [
        {
          id: 'g-vm-s1-curia',
          anchor: '「市议会元老（Decuriones）」',
          content:
            '古罗马各自治市议会（Curia municipalis）的世袭议员（又称 curiales）。晚期罗马帝国赋税繁重，市议会元老须以个人家产对本城税额承担连带赔付责任，但同时也掌握城市治安、市场监管与非讼公证权。「护民官（Defensor civitatis）」创设于公元 364 年瓦伦提尼安一世时期，旨在保护平民免受豪强与官吏勒索；「市政档案卷宗（Gesta Municipalia）」则是罗马城市专门登记遗嘱、赠与及土地买卖契约的官方公证簿册，墨洛温时代的《马尔库夫文书程式集》（Formulae Marculfi）证明这一罗马市政公证制度在高卢一直沿用到七世纪末。'
        },
        {
          id: 'g-vm-s1-gregoire',
          anchor: '都尔的格雷戈里',
          content:
            '都尔的格雷戈里（Grégoire de Tours，538—594），出身高卢克莱蒙（奥弗涅）显赫的罗马元老贵族世家，573 年出任都尔主教。其十卷本《历史十书》（通常称《法兰克人史》，Historia Francorum）是研究六世纪墨洛温高卢政治、教会与社会生活最核心的第一手叙事史料。皮朗从格雷戈里随手记录的奇闻轶事中，敏锐钩稽出大量关于马赛港口油酒贸易、奥尔良叙利亚与犹太语欢呼、巴黎商肆失火以及凡尔登商人向国王借贷的经济社会史铁证。'
        },
        {
          id: 'g-vm-s1-tonlieu',
          anchor: '「通行税（tonlieu / theloneum）」',
          content:
            '拉丁语 teloneum（源自希腊语 telōnion，「税关」），在罗马帝国原称 portorium（关税与过境税，通常按货物价值的 2.5% 即四十分之一征收）。墨洛温诸王完整继承了罗马水陆税卡网络，且关键在于：在五至七世纪的墨洛温时代，通行税是以流通中的金币与银币（货币形态）向职业商旅征收的，构成了王室金库（fiscus）源源不断的现金流，这与九世纪加洛林时代通行税蜕变为封建领主在桥头直接抢夺过往实物的勒索截然不同。'
        }
      ]
    },
    {
      id: 'vm-s1-p14',
      type: 'paragraph',
      num: '§ 14',
      original:
        'Le maintien du commerce après les invasions germaniques et, en même temps, le maintien des villes qui en étaient les centres et des marchands qui en étaient les instruments s’explique par la continuation du trafic méditerranéen. Tel il existait depuis Constantin, tel il se retrouve, dans ses grandes lignes, du Ve au VIIIe siècle. Si, comme il est probable, son déclin s’est accentué, il n’en reste pas moins vrai qu’il nous présente le spectacle d’une intercourse ininterrompue entre l’Orient byzantin et l’Occident dominé par les barbares. Par la navigation qui s’exerce des côtes d’Espagne et de Gaule à celles de Syrie et d’Asie Mineure, le bassin de la Méditerranée ne cesse pas de constituer l’unité économique qu’il formait depuis des siècles au sein de la communauté impériale. Par lui l’organisation économique du monde survit à son morcellement politique.',
      zh: '日耳曼人入侵之后商业之所以得以维持，并连带使作为商业中心的城市与作为商业媒介的商人阶级得以存续，根本原因就在于**地中海贸易的绵延不绝**。这套贸易体系自君士坦丁大帝以来是何种格局，从五世纪到八世纪在大体轮廓上便依然是何种格局。即便其衰落很可能有所加剧，但无可抹杀的事实依然是：它在我们眼前展现出一幅拜占庭东方与蛮族统治下的西方之间往来不绝的图景。借由往返于西班牙、高卢海岸与叙利亚、小亚细亚海岸之间的航运，地中海盆地从未停止构成它数百年来在帝国共同体内部所形成的那个**经济统一体**。仰赖于此，世界的经济组织在政治版图四分五裂之后依然屹立不倒。'
    },
    {
      id: 'vm-s1-p15',
      type: 'paragraph',
      num: '§ 15',
      original:
        'Faute d’autres preuves, le système monétaire des rois francs établirait cette vérité jusqu’à l’évidence. Ce système, on le sait trop bien pour qu’il soit nécessaire d’y insister ici, est purement romain, ou pour parler plus exactement, romano-byzantin. Il l’est par les monnaies qu’il frappe, le solidus, le triens et le denarius, c’est à dire le sou, le tiers de sou et le denier. Il l’est encore par le métal qu’il emploie, l’or, utilisé pour la frappe des sous et des tiers de sou. Il l’est aussi par les poids qu’il donne aux espèces. Il l’est enfin par les effigies qu’il y imprime. Rappelons que les ateliers monétaires ont longtemps conservé, sous les rois mérovingiens, la coutume de faire figurer le buste de l’empereur sur les monnaies, de représenter au revers des pièces la Victoria Augusti et que, poussant l’imitation à l’extrême, ils n’ont pas manqué, lorsque les Byzantins ont substitué la croix à l’image de cette Victoire, de suivre aussitôt leur exemple. Une servilité si complète s’explique nécessairement par des motifs impérieux. Elle a évidemment pour cause la nécessité de conserver entre la monnaie nationale et la monnaie impériale une conformité qui serait sans raison si les rapports les plus intimes n’avaient subsisté entre le commerce mérovingien et le commerce général de la Méditerranée, c’est à dire si ce commerce n’avait continué de se rattacher par les liens les plus étroits au commerce de l’Empire byzantin. De ces liens, au surplus, les preuves abondent et il suffira d’en rappeler ici quelques-unes des plus significatives.',
      zh: '哪怕没有任何其他旁证，单凭法兰克诸王的货币制度，便足以将这一真理证实得一目了然。这一货币制度为人所熟知，此处无须赘言：它是纯粹罗马式的，或者更确切地说，是**罗马—拜占庭式的**。无论就其铸造的币种——索里达（solidus）、[三分之一索里达（triens）]{#g-vm-s1-triens}与第纳尔（denarius），即金币苏、三分之一苏与银币第纳尔——而言；还是就其用于铸造苏与三分之一苏的贵金属材质——**黄金**——而言；抑或就其赋予铸币的重量标准，乃至压印在币面上的肖像而言，全都彻头彻尾承袭自罗马与拜占庭。不妨回想一下：在墨洛温诸王治下，各地造币作坊在漫长岁月里始终沿袭着旧制，在钱币正面镌刻君士坦丁堡罗马皇帝的半身像，在背面铸上「奥古斯都之胜利女神（Victoria Augusti）」；甚至将这种模仿推向极致——当拜占庭人把钱币背面的胜利女神像替换为十字架时，墨洛温造币厂竟也刻不容缓地纷纷效尤。如此彻底的亦步亦趋，必然源于某种不可抗拒的现实需要。其原因显而易见：本国货币与帝国货币之间必须保持高度一致；而倘若墨洛温商业与地中海总体贸易之间不曾维系着最紧密的联系——也就是说，倘若这一商业不曾以最牢固的纽带继续挂靠在拜占庭帝国的商业网络之上——这种币制上的一致性便毫无存在的理由[^fn-vm-1-5]。况且，关于这些贸易纽带的直接证据比比皆是，此处只需举出其中最富代表性的数端便足够了。',
      authorNotes: [
        {
          id: 'fn-vm-1-5',
          original:
            'M. Prou, Catalogue des monnaies mérovingiennes de la Bibliothèque Nationale de Paris. Introduction ; H. Pirenne, Un contraste économique. Mérovingiens et Carolingiens (Revue belge de philologie et d’histoire, t. II [1923], p. 225).',
          zh: '参看莫里斯·普鲁：《巴黎国立图书馆藏墨洛温钱币目录》导言；亨利·皮朗：《一场经济对照：墨洛温时代与加洛林时代》（载《比利时语文学与历史学刊》第二卷［1923 年］，第 225 页）。'
        }
      ],
      glosses: [
        {
          id: 'g-vm-s1-triens',
          anchor: '三分之一索里达（triens）',
          content:
            '又称 tremissis，重约 1.52 克（后在高卢微调为约 1.3 克），是墨洛温高卢实际流通中最普遍的黄金铸币。六世纪末拜占庭皇帝提比略二世（578—582）与莫里斯（582—602）在君士坦丁堡推进钱币基督教化改革，将金币背面的异教胜利女神（Victoria Augusti）改为立于台阶上的十字架（Crux potent）；高卢南部的马赛、阿尔勒、维埃纳等造币厂几乎在同一年内同步改版，证明拜占庭金币源源不断流入高卢港口并充当全境商业结算的基准。'
        }
      ]
    },
    {
      id: 'vm-s1-p16',
      type: 'paragraph',
      num: '§ 16',
      original:
        'Remarquons tout d’abord que Marseille n’a pas cessé d’être jusqu’au commencement du VIIIe siècle, le grand port de la Gaule. Les termes employés par Grégoire de Tours dans les nombreuses anecdotes où il lui arrive de parler de cette ville, nous obligent à la considérer comme un centre économique singulièrement animé. Une navigation très active la relie à Constantinople, à la Syrie, à l’Afrique, à l’Égypte, à l’Espagne et à l’Italie. Les produits de l’Orient, le papyrus, les épices, les tissus de luxe, le vin et l’huile y font l’objet d’une importation régulière. Des marchands étrangers, Juifs et Syriens pour la plupart, y sont établis à demeure, et leur nationalité atteste l’étroitesse des rapports entretenus par Marseille avec les régions byzantines. Enfin la quantité extraordinaire des monnaies qui y ont été frappées pendant l’époque mérovingienne nous fournit une preuve matérielle de l’activité même de son commerce. La population de la ville devait comprendre, à côté des négociants, une classe d’artisans assez nombreuse. À tous égards, elle semble donc bien conserver sous le gouvernement des rois francs, le caractère nettement municipal des cités romaines.',
      zh: '首先应当指出，直到八世纪初叶，[马赛始终不曾停止作为高卢的第一大港]{#g-vm-s1-marseille}。都尔的格雷戈里在众多偶或提及该城的轶事中所使用的字眼，迫使我们将马赛视为一座异常繁华喧腾的经济中心[^fn-vm-1-6]。极为频密的航线将它同君士坦丁堡、叙利亚、阿非利加、埃及、西班牙与意大利连接在一起。来自东方的物产——纸草、香料、名贵织物、美酒与橄榄油——在那里构成了定期的大宗进口商品。大批外籍商人（其中绝大多数是犹太人与叙利亚人）在城内长年定居，他们的族裔身份本身便证实了马赛与拜占庭辖区所保持的密切往来。最后，墨洛温时代在马赛铸造的钱币数量之巨，更为我们提供了其商业繁盛的实物铁证。在批发大商贾之外，城内居民必定还包含着一个人数颇众的手工业工匠阶层。因此，无论从哪个角度看，在法兰克诸王治下，马赛都显然完好地保留着罗马城邦鲜明的市政特征。',
      authorNotes: [
        {
          id: 'fn-vm-1-6',
          original:
            'Historia Francorum, édit. Krusch, l. IV, § 43, l. V, § 5, l. VI, § 17, 24, l. IX, § 22. Cf. Grégoire le Grand, Epistolae, I, 45. Il y avait à Marseille un entrepôt (cellarium fisci, catabolus) pourvu d’une caisse alimentée incontestablement par les droits d’entrée et qui était encore assez riche à la fin du VIIe siècle, pour que le roi pût constituer sur elle des rentes se montant au chiffre de 100 sous d’or. Voy. un exemple pour l’abbaye de Saint-Denys dans Mon. Germ. Hist. Diplomata, t. I, nos 61 et 82. Cf. Mon. Germ. Hist. Script. Rerum Merovingicarum, t. II, p. 406. — M. Prou, Catalogue des monnaies mérovingiennes de la Bibliothèque Nationale de Paris, p. 300. — Il est impossible, en effet, de pas supposer à Marseille une classe d’artisans au moins aussi importante que celle qui existait encore à Arles au milieu du VIe siècle. F. Kiener, Verfassungsgeschichte der Provence, p. 29 (Leipzig, 1900).',
          zh: '参看《法兰克人史》（克鲁施校勘本）卷四第 43 节、卷五第 5 节、卷六第 17 及 24 节、卷九第 22 节；并参看大格雷戈里教宗《书信集》卷一第 45 封。马赛港设有一座皇家海关栈房（cellarium fisci，亦称 catabolus），配有一座无疑由进口关税充盈的金库；直到七世纪末，该金库依然相当富足，足以让法兰克国王在上面为圣但尼修道院设定高达每年 100 枚金币苏（sous d’or）的定额年金，实例见《日耳曼历史文献集成：墨洛温王室特许状卷》第一卷第 61 及 82 号文书，并参看同丛书《墨洛温史家卷》第二卷第 406 页。关于马赛铸币，参看普鲁《巴黎国立图书馆藏墨洛温钱币目录》第 300 页。至于工匠阶层，我们确实不可能设想马赛的工匠规模会逊色于六世纪中叶阿尔勒尚存的工匠群体，参看弗里茨·基纳：《普罗旺斯宪政史》，第 29 页（莱比锡，1900 年）。'
        }
      ],
      glosses: [
        {
          id: 'g-vm-s1-marseille',
          anchor: '马赛始终不曾停止作为高卢的第一大港',
          content:
            '马赛（古希腊殖民城邦 Massalia，拉丁名 Massilia）扼守罗讷河谷出海口之东翼。在都尔的格雷戈里笔下，马赛是六世纪高卢与君士坦丁堡及近东联系的总枢纽：574 年高卢显贵伊奥维努斯与阿尔比努斯在马赛港因争夺进口的「整船橄榄油与百味杂货（adipe et reliquis speciebus）」爆发诉讼；582 年伪王位觊觎者贡多瓦尔德（Gundovald）携拜占庭皇帝提比略二世资助的巨额黄金在马赛登岸；588 年一艘自西班牙驶抵马赛的商船将鼠疫传入高卢内陆。所有政治信使、朝圣者、教会遗物与东方大宗货船均在此集散。'
        }
      ]
    },
    {
      id: 'vm-s1-p17',
      type: 'paragraph',
      num: '§ 17',
      original:
        'Le mouvement économique de Marseille se propage naturellement dans le hinterland du port. Sous son influence tout le commerce de la Gaule s’oriente vers la Méditerranée. Les tonlieux les plus importants du royaume franc sont situés dans les environs de la ville, à Fos, à Arles, à Toulon, à Sorgues, à Valence, à Vienne, à Avignon.',
      zh: '马赛的经济脉动自然而然地向该港口的广阔腹地（hinterland）层层辐射。在它的牵引之下，整个高卢的商业悉数朝向地中海。法兰克王国最重要的通行税关卡，全部分布在马赛周遭及罗讷河谷沿线：福斯（Fos）、阿尔勒、土伦、索尔格、瓦朗斯、维埃纳与阿维尼翁。'
    },
    {
      id: 'vm-s1-p18',
      type: 'paragraph',
      num: '§ 18',
      original:
        'C’est là une preuve évidente que les marchandises débarquées dans la ville étaient expédiées vers l’intérieur. Par le cours du Rhône et de la Saône ainsi que par les routes romaines, elles atteignaient le Nord du pays. Nous possédons encore les diplômes par lesquels l’abbaye de Corbie a obtenu des rois l’exemption du péage à Fos sur une foule de denrées et de produits, parmi lesquels on remarque une variété surprenante d’épices de provenance orientale, ainsi que du papyrus. Dans ces conditions, il ne paraît pas trop hardi d’admettre que l’activité commerciale des ports de Rouen et de Nantes, sur les côtes de l’Atlantique, de Quentovic et de Duurstede, sur celles de la mer du Nord, était entretenue par l’attraction de Marseille. La foire de Saint Denys, comme devaient le faire au XIIe et au XIIIe siècles les foires de Champagne, dont on peut la considérer comme la « préfiguration », met en contact les marchands anglo-saxons venus par Rouen et Quentovic avec ceux de Lombardie, d’Espagne et de Provence et les fait participer ainsi au commerce de la Méditerranée. Mais c’est évidemment dans le sud du pays que le rayonnement de celle-ci était le plus sensible. Toutes les villes les plus considérables de la Gaule mérovingienne se trouvent encore, comme au temps de l’Empire Romain, au sud de la Loire. Les détails que Grégoire de Tours nous donne sur Clermont-Ferrand et sur Orléans montrent qu’elles renfermaient de véritables colonies de Juifs et de Syriens, et s’il en était ainsi de ces « cités » dont rien ne permet de croire qu’elles jouissaient d’une situation privilégiée, il devait en être de même de centres bien plus importants tels que Bordeaux et Lyon. On sait d’ailleurs que Lyon possédait encore à l’époque carolingienne une population juive fort nombreuse.',
      zh: '这就是一条确凿的明证，表明在马赛卸船的货物源源不断地被转运往内陆腹地。沿着罗讷河与索恩河的水道，并借由四通八达的罗马古道，这些商品一路北上，直抵高卢北部。我们今天依然保存着[科尔比修道院从法兰克国王那里获得的几份特许状：国王豁免了该修道院在福斯税关提取大宗物资与商品时的通行税，而在那份免税清单上，人们惊讶地看到了品类繁多的东方香料，以及埃及纸草]{#g-vm-s1-corbie}[^fn-vm-1-7]。在这样的条件下，倘若认为大西洋沿岸的鲁昂港与南特港、北海沿岸的[康托维克（Quentovic）与杜尔斯泰德（Duurstede）]{#g-vm-s1-quentovic}两港的商业活力皆是由马赛的磁吸力所维系的，恐怕绝不算过于大胆的臆断。[圣但尼集市]{#g-vm-s1-saint-denys}——我们不妨将其视为十二、十三世纪香槟集市的「先声」——令经由鲁昂与康托维克前来的盎格鲁—撒克逊商人，得以同来自伦巴第、西班牙与普罗旺斯的商人直接洽谈交易，从而把他们也吸纳进地中海贸易圈之中[^fn-vm-1-8]。不过，地中海辐射力最强烈的地方，自然还是高卢南部。墨洛温高卢所有最繁华的大城市，依然同罗马帝国时代一样，悉数分布在卢瓦尔河以南。都尔的格雷戈里为我们提供的关于克莱蒙费朗与[奥尔良]{#g-vm-s1-orleans}的细节表明，这两座城市里都聚居着名副其实的犹太人与叙利亚人侨民社群；既然在这两座并无任何理由认为享有特殊地理优待的内陆「主教城」里尚且如此，那么在波尔多与里昂这类重要得多的都会中心里，情况就更不待言了。况且众所周知，即便到了加洛林时代，里昂依然拥有人口相当庞大的犹太社群。',
      authorNotes: [
        {
          id: 'fn-vm-1-7',
          original:
            'L. Levillain, Examen critique des chartes mérovingiennes et carolingiennes de l’abbaye de Corbie, p. 220, 231, 235 (Paris, 1902). Il s’agit du tonlieu de Fos près d’Aix-en-Provence. Une formule de Marculf (éd. Zeumer, p. 11), prouve que le garum, les dattes, le poivre et bien d’autres produits d’Orient faisaient partie de l’alimentation courante dans le Nord de la Gaule. Quant au papyrus, un texte conservé en appendice aux statuts d’Adalard de Corbie (Guérard, Polyptique d’Irminon, t. II, p. 336) atteste qu’il devait être fort répandu et d’emploi journalier. Ce texte le mentionnant cum seburo, permet de croire qu’il servait, comme de nos jours le papier huilé, à former les parois des lanternes. Je sais bien qu’on attribue le texte en question à l’époque carolingienne. Mais on ne peut alléguer d’autres arguments en faveur de cette opinion que le fait qu’il se rencontre à la suite des statuts d’Adalard. C’est là une circonstance qui ne peut passer pour une preuve. La disparition du papyrus à partir du commencement du IXe siècle nous oblige à reporter à une centaine d’années plus haut ce curieux document.',
          zh: '参看莱昂·勒维兰：《科尔比修道院墨洛温与加洛林特许状考辨》，第 220、231、235 页（巴黎，1902 年）。此处所指系普罗旺斯地区艾克斯附近的福斯（Fos）税关。《马尔库夫文书程式集》（蔡默尔校勘本，第 11 页）中的一则官修驿站供应程式证明，鱼露（garum）、椰枣、胡椒以及许多其他东方物产，在当时高卢北部的日常饮食中司空见惯。至于纸草（papyrus），保存在科尔比修道院院长阿达拉尔规章附录中的一份文献（见盖拉尔编《伊尔米农多联庄园清册》第二卷，第 336 页）证实，纸草在当时必定极为普及且属日常消耗品。该文献将纸草与牛脂蜡（cum seburo）并提，使我们有理由相信它就像今天的油纸一样，被用来糊制灯笼罩壁。我深知学界惯常将上述文献归入加洛林时代；但支持该看法的唯一理由，不过是它被抄录在阿达拉尔规章之后而已，这一编纂位置根本算不上年代铁证。鉴于纸草自九世纪初便在高卢彻底绝迹，我们必须将这份奇特的文献向上推早大约一百年（即归入墨洛温晚期）。'
        },
        {
          id: 'fn-vm-1-8',
          original:
            'Le diplôme de Dagobert ratifiant en 629 les droits de S. Denys sur cette foire (MG. Dipl. I, 140) est généralement considéré comme suspect. On ne donne pourtant aucune preuve valable contre son authenticité. Quand bien même d’ailleurs il ne sortirait pas de la chancellerie de Dagobert, il est incontestablement antérieur à l’époque carolingienne et aucune raison n’existe de révoquer en doute les détails qu’il nous fournit sur la fréquentation de la foire.',
          zh: '达戈贝尔特一世于 629 年确认圣但尼修道院对该集市享有征税权的特许状（《日耳曼历史文献集成：墨洛温特许状卷》第一卷第 140 页），通常被文献学家视作伪托存疑之作。然而，人们其实并未提出任何否定其真实性的过硬证据。退一步讲，即便这份文书并非直接出自达戈贝尔特的王室文书局，它也毫无疑问早于加洛林时代，我们没有任何理由怀疑其中所载关于各国商人云集该集市的具体细节。'
        }
      ],
      glosses: [
        {
          id: 'g-vm-s1-corbie',
          anchor: '科尔比修道院从法兰克国王那里获得的几份特许状：国王豁免了该修道院在福斯税关提取大宗物资与商品时的通行税，而在那份免税清单上，人们惊讶地看到了品类繁多的东方香料，以及埃及纸草',
          content:
            '科尔比修道院（Abbaye de Corbie）位于法国最北部的皮卡第索姆河谷（亚眠以东），由克洛泰尔三世与其母后巴蒂尔德于约 657—661 年创立。661 年、695 年与 716 年（希尔佩里克二世特许状），墨洛温王室三次向科尔比修道院颁授提货凭单，准许修道院每年直接从高卢最南端地中海福斯海湾（Fos-sur-Mer，古罗马马略运河入海口海关仓库 cellarium fisci）免税提取巨量物资并配备十余匹驿马北运：清单中除了一万磅橄榄油、三十桶地中海鱼露（garum）外，还详列了胡椒（piper）、孜然、丁香（caryophylli）、肉桂（cinnamomum）、甘松香、苦木香、椰枣、无花果、杏仁、开心果、大米以及整整五十卷埃及进口纸草（carta tomi quinquaginta）。这是皮朗证明墨洛温时代高卢南北长途大宗贸易畅通无阻的「皇冠铁证」。'
        },
        {
          id: 'g-vm-s1-quentovic',
          anchor: '康托维克（Quentovic）与杜尔斯泰德（Duurstede）',
          content:
            '墨洛温与加洛林早期法兰克王国通往英吉利海峡与北海的两大北方门户港口：康托维克位于今法国加来海峡省埃塔普勒（Étaples）附近的康什河（Canche）河口，是大陆与盎格鲁—撒克逊英格兰往来的主要渡口及造币中心；杜尔斯泰德（今荷兰乌得勒支省维克拜杜尔斯泰德 Wijk bij Duurstede）位于下莱茵河与莱克河分流处，是弗里斯兰船商连接莱茵河流域与不列颠、斯堪的纳维亚的贸易枢纽。'
        },
        {
          id: 'g-vm-s1-saint-denys',
          anchor: '圣但尼集市',
          content:
            '由墨洛温国王达戈贝尔特一世（Dagobert I，629—639 年在位）特许在巴黎北郊圣但尼修道院门前创立的秋季国际大集市（每年 10 月 9 日圣但尼瞻礼日开市，持续四周）。来自不列颠的盎格鲁—撒克逊商人在此采购高卢葡萄酒与南方转运来的橄榄油及东方奢侈品，并出售英格兰锡、铅与战俘奴隶。'
        },
        {
          id: 'g-vm-s1-orleans',
          anchor: '奥尔良',
          content:
            '据都尔的格雷戈里《法兰克人史》卷八第 1 节记载：公元 585 年，勃艮第国王贡特拉姆（Guntram）巡幸卢瓦尔河畔重镇奥尔良，全城民众出城夹道迎驾，队列中分别响起了拉丁语、叙利亚语和希伯来语的欢呼颂赞歌（「Et hinc lingua Syrorum, hinc Latinorum, hinc etiam ipsorum Judaeorum in diversis laudibus varie concrepabat」）。这一著名场景生动说明，在六世纪末的高卢腹地城市里，叙利亚商团与犹太商团不仅人数众多，而且作为正式的市政共同体成员公开参与皇家礼仪。'
        }
      ]
    },
    {
      id: 'vm-s1-p19',
      type: 'paragraph',
      num: '§ 19',
      original:
        'En voilà sans doute assez pour conclure que les temps mérovingiens ont connu, grâce à la persistance de la navigation méditerranéenne et par l’intermédiaire de Marseille, ce que l’on peut véritablement appeler un grand commerce. Ce serait certainement une erreur que de prétendre restreindre le négoce des marchands orientaux de la Gaule, aux seuls objets de luxe. Sans doute, la vente des orfèvreries, des émaux et des étoffes de soie devait leur fournir d’abondants bénéfices. Mais elle ne suffirait pas à expliquer leur nombre et leur diffusion extraordinaire dans tout le pays. Le trafic de Marseille était, au surplus, alimenté par des denrées de consommation générale, comme le vin et l’huile, sans compter les épices et le papyrus, qui étaient exportés, on l’a vu, jusque dans le Nord. Dès lors, force est bien de considérer les marchands orientaux de la monarchie franque comme pratiquant le commerce en gros. Leurs bateaux, après s’être déchargés sur les quais de Marseille, emportaient certainement, en quittant les rives de Provence, non seulement des voyageurs, mais du fret de retour. Les sources, à vrai dire, ne nous renseignent point sur la nature de ce fret. Parmi les conjectures dont il peut être l’objet, l’une des plus vraisemblables est qu’il consistait, tout au moins pour une bonne partie, en denrées humaines, je veux dire en esclaves. Le commerce des esclaves n’a pas cessé d’être pratiqué dans le royaume franc jusqu’à la fin du IXe siècle. Les guerres menées contre les barbares de Saxe, de Thuringe et des régions slaves lui fournissaient une matière qui semble avoir été assez abondante. Grégoire de Tours nous parle d’esclaves saxons appartenant à un marchand orléanais, et l’on peut conjecturer avec la plus grande vraisemblance que ce Samo, parti dans la première moitié du VIIe siècle avec une bande de compagnons pour le pays des Wendes dont il finit par devenir le roi, n’était qu’un aventurier trafiquant d’esclaves. Rappelons enfin que le commerce d’esclaves auquel les Juifs s’adonnaient encore assez activement au IXe siècle, remonte certainement à une époque plus ancienne.',
      zh: '以上举证无疑已足以得出结论：墨洛温时代仰仗地中海航运的存续，并通过马赛的中转媒介，确实曾拥有过名副其实的**大宗长途贸易（grand commerce）**。倘若硬要把高卢境内东方商人的买卖局限在单纯的奢侈品上，那必定是错误的。诚然，贩卖金银器皿、珐琅制品与丝绸织物无疑能为他们带来丰厚的利润，但单凭奢侈品买卖，根本不足以解释他们为何人数如此庞大、又为何如此广泛地遍布全境。况且，支撑马赛港贸易量的乃是一般大众消费品，如葡萄酒与橄榄油，更不必说香料与纸草——如前文所见，这些物资一路远销至高卢最北端。既然如此，我们就不能不把法兰克君主国里的东方商人视为从事**批发贸易**的大商贾。他们的商船在马赛码头卸空货舱之后，驶离普罗旺斯海岸返航时，船上装载的必定不只有旅客，还有压舱的回程货（fret de retour）。老实说，现存史料并未明确记载这类回程货的具体品类。在围绕它所能作出的种种推想中，最合乎情理的一种推测便是：回程货至少有相当大一部分是「活人商品」——也就是说，是**奴隶**。直到九世纪末，奴隶贸易在法兰克王国从未中断。针对萨克森、图林根以及斯拉夫地区蛮族连年不断的征战，为奴隶贸易提供了源源不断的充足货源。都尔的格雷戈里曾提到一名奥尔良商人名下蓄有的萨克森奴隶；而且我们极有把握推测，七世纪上半叶率领一伙同伴深入温德人（斯拉夫人）腹地、并最终被拥立为当地国王的那个[萨莫（Samo）]{#g-vm-s1-samo}，原本不过是一名从事奴隶贩运的冒险商客。最后不妨提醒一句，犹太商人在九世纪依然相当活跃地经营着奴隶贸易，这一行业显然可以追溯到更古老的年代。',
      glosses: [
        {
          id: 'g-vm-s1-samo',
          anchor: '萨莫（Samo）',
          content:
            '据七世纪墨洛温编年史《弗雷德加编年史》（Chronicon Fredegarii）卷四第 48 节记载，萨莫（Samo，约卒于 658 年）是出身高卢塞农地区（今桑斯或比利时苏瓦尼）的法兰克商人（negotiator）。约 623 年，他率领一支武装商队前往中欧波希米亚与摩拉维亚的斯拉夫人（温德人，Wendes）中间经商，协助斯拉夫人起兵击败草原阿瓦尔人（Avars）的统治，遂被推举为历史上第一个斯拉夫政治联盟「萨莫王国」的国王，并在 631 年沃加斯蒂斯堡战役中击败墨洛温国王达戈贝尔特一世的讨伐大军。'
        }
      ]
    },
    {
      id: 'vm-s1-p20',
      type: 'paragraph',
      num: '§ 20',
      original:
        'Si la plus grande partie du commerce s’est incontestablement trouvée, dans la Gaule mérovingienne, aux mains de marchands orientaux, à côté d’eux, et selon toute apparence en relations constantes avec eux, sont mentionnés des marchands indigènes. Grégoire de Tours ne laisse pas de nous fournir sur leur compte des renseignements qui seraient évidemment plus nombreux si ce n’était le hasard qui les amène dans ses récits. Il nous montre le roi consentant un prêt aux marchands de Verdun, dont les affaires prospèrent si heureusement qu’ils se trouvent bientôt à même de le rembourser. Il nous apprend l’existence à Paris d’une domus negociantum, c’est à dire selon toute apparence, d’une sorte de halle ou de bazar. Il nous parle d’un marchand profitant pour s’enrichir de la grande famine de 585. Et dans toutes ces anecdotes, il s’agit sans le moindre doute, de professionnels et non de simples vendeurs ou de simples acheteurs d’occasion.',
      zh: '在墨洛温高卢，绝大部分商业固然无可争辩地掌握在东方商人手中，但在他们身旁——而且从一切迹象看与他们保持着经常性的业务往来——史料中也屡屡提及**本土商人**。都尔的格雷戈里不时为我们提供有关这批本土商人的线索；倘若不是纯粹出于偶然才将他们带入其叙事，这类记载显然还会多得多。他向我们展示了[国王向凡尔登商团发放的一笔贷款]{#g-vm-s1-verdun}，而后者的生意经营得如此红火，不久便有能力连本带利悉数偿清；他让我们得知巴黎城内存在一座「商贾会馆（domus negociantum）」，从一切迹象看，那是一种室内商肆廊街或集市巴扎；他还讲到一名商人趁 585 年大饥荒之机囤积居奇、大发横财[^fn-vm-1-9]。而在所有这些轶事中，主人公毫无疑问全都是**职业商人**，绝非偶尔出售余粮或临时采买的普通买卖人。',
      authorNotes: [
        {
          id: 'fn-vm-1-9',
          original:
            'Historia Francorum, éd. Krusch, l. III, § 34 ; l. VIII, § 33 ; l. VI, § 45. En 627 un Johannes Mercator fait une donation à Saint-Denys. Mon. Germ. Hist. Dipl. Merov., t. I, p. 13. Les Gesta Dagoberti (Ibid., Script. Rer. Merov., t. II, p. 413) parlent d’un Salomon Negociator qui, à vrai dire, est sans doute un juif.',
          zh: '分见《法兰克人史》（克鲁施校勘本）卷三第 34 节、卷八第 33 节、卷六第 45 节。此外，627 年有一名「商人约翰（Johannes Mercator）」向圣但尼修道院捐赠地产，见《日耳曼历史文献集成：墨洛温特许状卷》第一卷第 13 页；《达戈贝尔特国王行传》（同丛书《墨洛温史家卷》第二卷第 413 页）则提到一名「批发商所罗门（Salomon Negociator）」，不过老实说，此人多半是一名犹太人。'
        }
      ],
      glosses: [
        {
          id: 'g-vm-s1-verdun',
          anchor: '国王向凡尔登商团发放的一笔贷款',
          content:
            '见都尔的格雷戈里《法兰克人史》卷三第 34 节：六世纪三十年代，凡尔登主教德西德拉图斯（Desideratus）见本城居民贫困，恳请奥斯特拉西亚国王提乌德贝尔特一世（Theudebert I）拨借王室金库资金。国王慷慨借出 7,000 枚金币（aurei），主教将其分发给城内商人经商周转；凡尔登商团借此迅速致富，名声远播，及至商团欲向国王归还本息时，提乌德贝尔特一世表示国库充裕，当场免除了这笔巨额贷款。这一史实不仅证明六世纪高卢北部的商业资本运作与信用借贷，也反衬出九世纪加洛林教会全面禁止商业生息之前的开放商业氛围。'
        }
      ]
    },
    {
      id: 'vm-s1-p21',
      type: 'paragraph',
      num: '§ 21',
      original:
        'Le tableau que nous présente le commerce de la Gaule mérovingienne, se retrouve naturellement dans les autres royaumes germaniques riverains de la Méditerranée, chez les Ostrogoths d’Italie, chez les Vandales d’Afrique, chez les Wisigoths d’Espagne. L’édit de Théodoric renferme quantité de stipulations relatives aux marchands. Carthage reste un port important en relations avec l’Espagne et dont les bateaux remontaient même, semble-t-il, jusqu’à Bordeaux. La loi des Wisigoths mentionne des négociants d’Outre-Mer.',
      zh: '墨洛温高卢商业向我们呈现的这幅图景，自然也同样见于地中海沿岸的其他日耳曼王国：意大利的东哥特王国、阿非利加的汪达尔王国，以及西班牙的西哥特王国。《狄奥多里克敕令》中包含着大量涉及商人的律条。迦太基依然是同西班牙保持密切往来的重要港口，从那里启航的商船似乎甚至一路北上直抵波尔多。[《西哥特法典》中则专门设有关于「海外商贾（transmarini negotiatores）」的条款]{#g-vm-s1-wisigoths}。',
      glosses: [
        {
          id: 'g-vm-s1-wisigoths',
          anchor: '《西哥特法典》中则专门设有关于「海外商贾（transmarini negotiatores）」的条款',
          content:
            '《西哥特法典》（Lex Visigothorum，又称《审判之书》Liber Iudiciorum）卷十一题三专门立有《论海外商人》（De transmarinis negotiatoribus）四条律令，规定：凡携黄金、白银、锦缎及各类饰物来西班牙经商的海外商人（主要指拜占庭、叙利亚与犹太海商），若彼此之间发生商事纠纷，西哥特地方官吏不得强行介入，而准许他们由自己的商埠领事官（telonarii）依照其本族商法自行裁决；同时准许他们雇佣当地自由民协助货运。'
        }
      ]
    },
    {
      id: 'vm-s1-p22',
      type: 'paragraph',
      num: '§ 22',
      original:
        'De tout cela ressort avec force la continuité du mouvement commercial de l’Empire Romain après les invasions germaniques. Elles n’ont pas mis fin à l’unité économique de l’Antiquité. Par la Méditerranée et par les rapports qu’elle entretient entre l’Occident et l’Orient, cette unité se conserve au contraire avec une netteté remarquable. La grande mer intérieure de l’Europe n’appartient plus comme jadis au même État. Mais rien ne permet encore de prévoir qu’elle cessera bientôt d’exercer autour d’elle son attraction séculaire. En dépit des transformations qu’il présente, le monde nouveau n’a pas perdu le caractère méditerranéen du monde antique. Aux bords de la Méditerranée se concentre et s’alimente encore le meilleur de son activité. Aucun indice n’annonce la fin de la communauté de civilisation établie par l’Empire Romain. Au début du VIIe siècle, celui qui aurait jeté un coup d’œil sur l’avenir n’y aurait découvert nulle raison de ne pas croire à la persistance de la tradition.',
      zh: '综上所述，罗马帝国的商业脉动在日耳曼人入侵之后的**连续性**，便以无可辩驳的力量凸显出来。蛮族大迁徙并未终结古典时代的经济统一。相反，借由地中海以及它所维系的西方与东方之间的往来，这一经济统一体保持着令人瞩目的清晰轮廓。欧洲的这片伟大内海，固然不再像昔日那样隶属于同一个国家；但尚无任何迹象让人预见到，它不久便将不再对四周沿岸发挥其绵延数百年的磁吸力。尽管这个新世界呈现出种种蜕变，它却并未丧失古典世界的地中海性格。它最精华的活力，依然汇聚并取给于地中海之滨。没有任何端倪预示着由罗马帝国所奠定的那个文明共同体行将终结。在七世纪初叶，倘若有人举目瞻望未来，他在前方绝对找不到任何理由去怀疑这一古老传统的持久存续。'
    },
    {
      id: 'vm-s1-p23',
      type: 'paragraph',
      num: '§ 23',
      original:
        'Or, ce qui était alors naturel et rationnel de prévoir ne s’est pas réalisé. L’ordre du monde qui avait survécu aux invasions germaniques n’a pu survivre à celle de l’Islam. Elle s’est jetée au travers du cours de l’histoire avec la force élémentaire d’un cataclysme cosmique. Du vivant même de Mahomet (571-632) personne n’avait pu ni y songer ni s’y préparer. Pourtant il n’a pas fallu beaucoup plus de cinquante ans pour qu’elle s’étendît de la mer de Chine à l’Océan Atlantique. Rien ne résiste devant elle. Du premier choc elle renverse l’Empire perse (633-644), elle enlève successivement à l’Empire byzantin la Syrie (634-636), l’Égypte (640-642), l’Afrique (643-708), fait irruption en Espagne (711). Sa marche envahissante ne cessera qu’au commencement du VIIIe siècle, lorsque les murs de Constantinople d’une part (717), les soldats de Charles Martel de l’autre (732) auront brisé sa grande offensive enveloppante contre les deux flancs de la chrétienté. Mais si sa force d’expansion est épuisée, elle a changé la face de la terre. Sa poussée soudaine a détruit le monde antique. C’en est fait de la communauté méditerranéenne en laquelle il se groupait. La mer familière et quasi familiale qui en réunissait toutes les parties va devenir entre elles une barrière. Sur tous ses rivages, depuis des siècles, l’existence sociale, dans ses caractères fondamentaux était la même, la religion la même, les mœurs et les idées les mêmes ou très proches de l’être. L’invasion des barbares du Nord n’avait rien modifié d’essentiel à cette situation. Et voilà que tout à coup les pays mêmes où était née la civilisation lui sont arrachés, que le culte du prophète se substitue à la foi chrétienne, le droit musulman au droit romain, la langue arabe à la langue grecque et à la langue latine. La Méditerranée avait été un lac romain ; elle devient, dans sa plus grande partie, un lac musulman. Elle sépare désormais, au lieu de les unir, l’Orient et l’Occident de l’Europe. Le lien est rompu qui rattachait encore l’Empire byzantin aux royaumes germaniques de l’Ouest.',
      zh: '然而，当年顺理成章、合乎理性的一切预判，最终却并未成为现实。**那个曾在日耳曼人入侵之后幸存下来的世界秩序，却未能逃过伊斯兰扩张的冲击。**[这场突如其来的征服，挟着宇宙浩劫般的原始伟力，横腰斩断了历史的进程]{#g-vm-s1-cataclysme}。哪怕在穆罕默德（571—632）生前，世上也无人能够预想、更无人能够防范这一巨变。然而，前后不过五十余年光景，伊斯兰的版图便从中国海一直铺展到了大西洋。在它面前，一切抵抗皆土崩瓦解。仅凭第一波冲击，它便推翻了波斯萨珊帝国（633—644），继而从拜占庭帝国手中接连夺取了叙利亚（634—636）、埃及（640—642）与阿非利加（643—708），并于 711 年长驱直入西班牙。它那势如破竹的进军，直到八世纪初叶方才止步——彼时，[东端君士坦丁堡的坚城（717 年）与西端查理·马特麾下的将士（732 年），先后挫败了它从东西两翼对基督教世界发起的大规模合围攻势]{#g-vm-s1-tenaille}。然而，即便它的扩张势头就此耗尽，它却已经彻底改变了大地的面貌。它那雷霆万钧的突进，一举摧毁了古典世界。那个曾环绕地中海凝聚成一体的文明共同体，自此灰飞烟灭。昔日那片把各个部分联结为一家的、熟稔而近乎骨肉至亲的海洋，如今却要在彼此之间化作一道天堑。数百年来，在地中海的所有海岸上，社会生活的基本特征原本是一致的，宗教信仰是一致的，风俗与观念也是相同或极为相近的；北方蛮族的入侵丝毫未曾触动这一格局的根基。可如今，顷刻之间，恰恰是孕育了这一文明的摇篮故土被硬生生从它身上撕走：先知的崇拜取代了基督教信仰，伊斯兰教法取代了罗马法，阿拉伯语取代了希腊语与拉丁语。**地中海昔日曾是一座罗马内湖；如今，它在绝大部分水域里变成了一座穆斯林内湖。**从此以后，它不再将欧洲的东方与西方联结在一起，而是将二者彻底隔绝开来。那条曾把拜占庭帝国与西方日耳曼诸王国维系在一处的纽带，就此崩断。',
      glosses: [
        {
          id: 'g-vm-s1-cataclysme',
          anchor: '这场突如其来的征服，挟着宇宙浩劫般的原始伟力，横腰斩断了历史的进程',
          content:
            '这是皮朗历史哲学中最著名的核心论断。为何日耳曼人未能打碎罗马世界，而阿拉伯人却一举终结了古典时代？皮朗指出，日耳曼人在越过莱茵河与多瑙河前后已改宗基督教（哪怕起初是阿里乌斯派），对罗马帝国怀有倾慕与向往，渴望融入罗马法、拉丁语与地中海生活方式；而伊斯兰征服者则携带着一套全新的一神教信仰、神圣法典（沙里亚法）与神圣语言（阿拉伯语），绝不接受罗马—基督教文明的同化。于是，环地中海世界两千年来首次被撕裂为两个在宗教、法权与语言上彼此敌对的文明体系。'
        },
        {
          id: 'g-vm-s1-tenaille',
          anchor: '东端君士坦丁堡的坚城（717 年）与西端查理·马特麾下的将士（732 年），先后挫败了它从东西两翼对基督教世界发起的大规模合围攻势',
          content:
            '皮朗以军事地理眼光将八世纪初倭马亚哈里发帝国的扩张概括为对欧洲基督教世界的「双翼钳形合围」：在东翼，717—718 年倭马亚名将玛斯拉玛（Maslama ibn Abd al-Malik）率陆海大军围攻君士坦丁堡，被拜占庭皇帝伊苏里亚的利奥三世凭狄奥多西城墙与「希腊火」击溃；在西翼，跨越直布罗陀海峡征服西哥特西班牙的穆斯林军队翻越比利牛斯山深入高卢，于 732 年 10 月在图尔与普瓦捷之间被法兰克宫相查理·马特（Charles Martel）率领的奥斯特拉西亚重步兵方阵击退。这两场战役虽保住了拜占庭小亚细亚—巴尔干与法兰克高卢，却无法改变南地中海与西地中海制海权已落入穆斯林之手的既成事实。'
        }
      ]
    }
  ]
};
