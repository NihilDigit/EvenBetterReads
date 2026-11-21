import type { BookSection } from '../../../types/book';

export const conference1Sections: BookSection[] = [
  {
    id: 'les-reproches',
    roman: 'I',
    titleOriginal: "Les reproches adressés à l'existentialisme",
    titleZh: '针对存在主义的种种责难',
    blocks: [
      {
        id: 'eeh-s1-p01',
        type: 'paragraph',
        num: '§ 01',
        fr: "Je voudrais ici défendre l'existentialisme contre un certain nombre de reproches qu'on lui a adressés.",
        zh: '我想在这里为存在主义辩护，回应人们针对它提出的若干责难。'
      },
      {
        id: 'eeh-s1-p02',
        type: 'paragraph',
        num: '§ 02',
        fr: "On lui a d'abord reproché d'inviter les gens à demeurer dans un quiétisme du désespoir, parce que, toutes les solutions étant fermées, il faudrait considérer que l'action dans ce monde est totalement impossible et d'aboutir finalement à une philosophie contemplative, ce qui d'ailleurs, car la contemplation est un luxe, nous ramène à une philosophie bourgeoise. Ce sont surtout là les reproches des communistes.",
        zh: '人们首先责难它劝诱世人滞留于一种绝望的[寂静主义]{#g-eeh-s1-01}之中：因为既然一切出路皆已断绝，就不得不认为在这个世界上行动是完全不可能的，从而最终归结为一种静观哲学；况且由于静观是一种奢侈，这便又把我们拉回到了一种资产阶级哲学。这主要是共产党人的责难。',
        glosses: [
          {
            id: 'g-eeh-s1-01',
            anchor: '寂静主义',
            content:
              '法语 **quiétisme**，源自拉丁语 **quies**（平静、静止），原指十七世纪下半叶兴起于天主教内部的神秘主义神学思潮，主要代表包括西班牙神学家米格尔·德·莫利诺斯（Miguel de Molinos，1628—1696）、法国神秘主义者盖恩夫人（Madame Guyon，1648—1717）与康布雷总主教弗朗索瓦·费奈隆（François Fénelon，1651—1715）。该派主张灵魂唯有彻底放弃个人意志与外在行动努力、进入纯粹被动的静默顺服状态，方能与上帝合一；1699 年教宗英诺森十二世颁布敕令将其判为异端。1944 至 1945 年间，亨利·列斐伏尔（Henri Lefebvre）、罗杰·加洛蒂（Roger Garaudy）等法国共产党理论家在左翼报刊上借用这一神学旧称，批评萨特哲学消解历史客观规律与集体政治行动的现实动力。'
          }
        ]
      },
      {
        id: 'eeh-s1-p03',
        type: 'paragraph',
        num: '§ 03',
        fr: "On nous a reproché, d'autre part, de souligner l'ignominie humaine, de montrer partout le sordide, le louche, le visqueux, et de négliger un certain nombre de beautés riantes, le côté lumineux de la nature humaine ; par exemple, selon Mlle Mercier, critique catholique, d'avoir oublié le sourire de l'enfant. Les uns et les autres nous reprochent d'avoir manqué à la solidarité humaine, de considérer que l'homme est isolé, en grande partie d'ailleurs parce que nous partons, disent les communistes, de la subjectivité pure, c'est-à-dire du je pense cartésien, c'est-à-dire encore du moment où l'homme s'atteint dans sa solitude, ce qui nous rendrait incapables par la suite de retourner à la solidarité avec les hommes qui sont hors de moi et que je ne peux pas atteindre dans le cogito.",
        zh: '另一方面，人们又责难我们强调人性的卑劣，处处展示龌龊、暧昧与[黏滞之物]{#g-eeh-s1-02}，却忽略了若干明朗悦目的美好事物，忽略了人性光明的一面；例如，按照天主教批评家[梅西耶小姐]{#g-eeh-s1-03}的说法，我们忘记了孩童的微笑。这两方面的人都责难我们背离了人类的休戚与共，认为人是孤立的——况且按照共产党人的说法，这在很大程度上是因为我们从纯粹的主体性出发，也就是说从[笛卡尔式的「我思」]{#g-eeh-s1-04}出发，亦即从人在孤寂中触及自身的那一刻出发，而这便会使我们随后无力重返与那些处于自我之外、在「我思」之中无法触及的人们之间的休戚与共。',
        glosses: [
          {
            id: 'g-eeh-s1-02',
            anchor: '黏滞之物',
            content:
              '法语 **le visqueux**，萨特在《存在与虚无》（L’Être et le Néant，1943）第四卷第二章第三节专门加以现象学分析的物质范畴。不同于清澈流逝的液体或边界分明的固体，介于固液之间的黏滞物（如沥青、蜂蜜、淤泥）看似柔顺退让，一旦触碰却会反过来黏附并迟滞手指，在萨特的物质象征分析中代表着实在之物对意识的吸附威胁。在此前的长篇小说《恶心》（La Nausée，1938）与短篇小说集《墙》（Le Mur，1939）中，潮湿泥泞与黏稠物象亦反复出现，常被当时保守派书评指斥为刻意搜罗阴暗污秽的感官细节。'
          },
          {
            id: 'g-eeh-s1-03',
            anchor: '梅西耶小姐',
            content:
              '让娜·梅西耶（Jeanne Mercier），法国天主教哲学学者与评论家。1945 年 2 月，她在耶稣会主办的思想月刊《研究》（Études）第 244 卷发表《果实中的蠹虫：论让-保罗·萨特先生的作品》（« Le Ver dans le fruit : à propos de l’œuvre de M. J.-P. Sartre »），批评《恶心》《苍蝇》《禁闭》与《存在与虚无》将人的处境封闭于孤绝与荒诞之中，忽略了恩宠与温情，并在文中写道萨特笔下的世界「忘记了孩童的微笑」（oublie le sourire de l’enfant）。'
          },
          {
            id: 'g-eeh-s1-04',
            anchor: '笛卡尔式的「我思」',
            content:
              '原文先后并列使用法语 **je pense cartésien** 与拉丁语专门术语 **cogito**，指勒内·笛卡尔（René Descartes，1596—1650）在《谈谈方法》（Discours de la méthode，1637）第四部分提出的法语命题「我思故我在」（je pense, donc je suis）及其在《第一哲学沉思集》（Meditationes de prima philosophia，1641）中的拉丁文表述。笛卡尔通过普遍怀疑悬置外在物质世界与他人的实在性，确立正在思维的自我意识为第一确定性；巴黎解放初期的法国马克思主义理论家据此指责萨特以个体意识的自我把握为哲学起点，无法通达社会历史共同体，必然困于资产阶级唯我论（solipsisme）。'
          }
        ]
      },
      {
        id: 'eeh-s1-p04',
        type: 'paragraph',
        num: '§ 04',
        fr: "Et du côté chrétien, on nous reproche de nier la réalité et le sérieux des entreprises humaines, puisque si nous supprimons les commandements de Dieu et les valeurs inscrites dans l'éternité, il ne reste plus que la stricte gratuité, chacun pouvant faire ce qu'il veut, et étant incapable de son point de vue de condamner les points de vue et les actes des autres.",
        zh: '而在基督教方面，人们则责难我们否认人类事业的实在性与严肃性，因为一旦我们取消了上帝的诫命以及铭刻在永恒之中的价值，剩下的便只有纯粹的无端任意：每个人都可以为所欲为，并且从其自身立场出发，无力谴责他人的立场与行径。'
      },
      {
        id: 'eeh-s1-p05',
        type: 'paragraph',
        num: '§ 05',
        fr: "C'est à ces différents reproches que je cherche à répondre aujourd'hui ; c'est pourquoi j'ai intitulé ce petit exposé : L'existentialisme est un humanisme. Beaucoup pourront s'étonner de ce qu'on parle ici d'humanisme. Nous essaierons de voir dans quel sens nous l'entendons. En tout cas, ce que nous pouvons dire dès le début, c'est que nous entendons par existentialisme une doctrine qui rend la vie humaine possible et qui, par ailleurs, déclare que toute vérité et toute action impliquent un milieu et une subjectivité humaine. Le reproche essentiel qu'on nous fait, on le sait, c'est de mettre l'accent sur le mauvais côté de la vie humaine. Une dame dont on m'a parlé récemment, lorsque par nervosité, elle lâche un mot vulgaire, déclare en s'excusant : « Je crois que je deviens existentialiste. » Par conséquent, on assimile laideur à existentialisme ; c'est pourquoi on déclare que nous sommes naturalistes ; et si nous le sommes, on peut s'étonner que nous effrayions, que nous scandalisions beaucoup plus que le naturalisme proprement dit n'effraye et n'indigne aujourd'hui. Tel qui encaisse parfaitement un roman de Zola, comme La Terre, est écœuré dès qu'il lit un roman existentialiste ; tel qui utilise la sagesse des nations — qui est fort triste — nous trouve plus triste encore. Pourtant, quoi de plus désabusé que de dire « charité bien ordonnée commence par soi-même », ou encore « oignez vilain il vous plaindra, poignez vilain il vous oindra » ? On connaît les lieux communs qu'on peut utiliser à ce sujet et qui montrent toujours la même chose : il ne faut pas lutter contre les pouvoirs établis, il ne faut pas lutter contre la force, il ne faut pas entreprendre au-dessus de sa condition, toute action qui ne s'insère pas dans une tradition est un romantisme, toute tentative qui ne s'appuie pas sur une expérience éprouvée est vouée à l'échec ; et l'expérience montre que les hommes vont toujours vers le bas, qu'il faut des corps solides pour les tenir, sinon c'est l'anarchie, Ce sont cependant les gens qui rabâchent ces tristes proverbes, les gens qui disent : comme c'est humain, chaque fois qu'on leur montre un acte plus ou moins répugnant, les gens qui se repaissent des chansons réalistes, ce sont ces gens-là qui reprochent à l'existentialisme d'être trop sombre, et au point que je me demande s'ils ne lui font pas grief, non de son pessimisme, mais bien plutôt de son optimisme. Est-ce qu'au fond, ce qui fait peur, dans la doctrine que je vais essayer de vous exposer, ce n'est pas le fait qu'elle laisse une possibilité de choix à l'homme ? Pour le savoir, il faut que nous revoyions la question sur un plan strictement philosophique. Qu'est-ce qu'on appelle existentialisme ?",
        zh: '今天我力图回应的，正是这种种不同的责难；正因如此，我将这篇简短的讲演题为：**《存在主义是一种人道主义》**。许多人或许会诧异，我们竟会在这里谈论人道主义。我们将试着看看自己是在何种意义上理解它的。无论如何，我们从一开始就可以指出，我们所谓的存在主义，是一种使人的生活成为可能的学说；此外它还宣布，一切真理与一切行动都蕴含着一个环境与一种人的主体性。众所周知，人们向我们提出的首要责难，就是说我们着重渲染人类生活恶劣阴暗的一面。最近有人同我说起一位女士，每当她因情绪紧张脱口说出粗俗字眼时，便会一边致歉一边说：「我看我快变成存在主义者了。」由此可见，人们把丑恶等同于存在主义；正因如此，人们宣称我们是自然主义者；倘若我们果真是自然主义者，那么令人诧异的是，比起严格意义上的自然主义在今天所能引起的惊恐与愤慨，我们竟更令世人惊恐、更教人哗然得多。有人读起左拉的小说——比如[《土地》]{#g-eeh-s1-05}——完全处之泰然，可一读存在主义小说便作呕反胃；有人惯于援引[世俗箴言]{#g-eeh-s1-06}——那些箴言可是相当灰暗阴郁的——却觉得我们比它还要阴郁。然而，还有什么话比「周全的仁爱当从自身始」，或者「[善待鄙夫反遭怨，刺痛鄙夫反献媚]{#g-eeh-s1-07}」更加幻灭世故的呢？人们熟知在这一话题上随时可以搬出来的种种陈词滥调，它们翻来覆去表明的无非是同一件事：不可抗拒既定权威，不可与强力抗争，行事不可超越自身的本分，任何不纳入传统的行动都是空想的浪漫主义，任何不依托可靠经验的尝试都注定失败；而且经验表明，人总是往低处流，必须有强固的建制来约束他们，否则便是无政府状态。然而，恰恰是那些成天念叨这些阴郁谚语的人，那些每逢见到某种多半令人作呕的行径便感叹「这真是人之常情」的人，那些津津有味地沉溺于市井写实歌曲的人——恰恰是这群人，指责存在主义过于阴暗，以至于我不禁怀疑，他们真正怪罪于它的究竟是不是它的悲观主义，反倒更是它的乐观主义。归根结底，在我即将向诸位尝试阐述的这门学说中，令人恐惧的，难道不正是在于它为人留出了选择的可能性吗？要想弄清这一点，我们就必须回到严格哲学的层面上重新审视这个问题：究竟什么叫做存在主义？',
        glosses: [
          {
            id: 'g-eeh-s1-05',
            anchor: '《土地》',
            content:
              '《土地》（La Terre，1887）系法国自然主义文学领袖埃米尔·左拉（Émile Zola，1840—1902）二十卷家族史小说《卢贡-马卡尔家族》（Les Rougon-Macquart）的第十五卷。自然主义（naturalisme）主张以近乎生理学与实验医学的笔法记录遗传与社会环境对人的支配；《土地》因直白描写博斯平原农民围绕土地继承展开的贪婪倾轧、家庭暴力与粗鄙肉体细节，在《吉尔·布拉斯报》连载期间引发激烈争议，五名青年作家于 1887 年 8 月 18 日在《费加罗报》联署发表《五人宣言》（Manifeste des Cinq），公开斥责左拉堕入「淫秽与排泄物的文学」。'
          },
          {
            id: 'g-eeh-s1-06',
            anchor: '世俗箴言',
            content:
              '原文 **la sagesse des nations**（字面义为「万邦的智慧」），法语惯用语，指世代流传、被奉为常识准绳的民间俗谚与处世格言。紧接其后引用的第一则谚语「周全的仁爱当从自身始」（charité bien ordonnée commence par soi-même），脱胎于中世纪经院神学关于「仁爱秩序」（ordo caritatis，见托马斯·阿奎那《神学大全》第二部第二集第 26 题论爱上帝、爱己与爱邻人的先后次序）的教义讨论，进入近代世俗口语后演变为替利己算计辩护的格言。'
          },
          {
            id: 'g-eeh-s1-07',
            anchor: '善待鄙夫反遭怨，刺痛鄙夫反献媚',
            content:
              '法国中世纪古谚，通行定本写作 **« Oignez vilain, il vous poindra ; poignez vilain, il vous oindra »**，自十三世纪起见载于《玫瑰传奇》续篇等古法语文献，亦见于拉伯雷《巨人传》第一卷第三十二章。其中 **vilain** 原指封建庄园中的卑贱农夫，后泛指粗鄙小人；**oindre** 意为涂抹香膏、善待；**poindre** 意为刺扎、加害，整句以对仗谐音表达「恩将仇报、畏威而不怀德」的等级偏见。1946 年纳热尔出版社根据现场速记整理的初版底本将古法语 **poindra**（刺伤）印作音近的现代法语 **plaindra**（抱怨、诉苦），此处依 1946 年底本直译；1996 年伽利玛出版社 Folio Essais 校订本已据古谚原文改回 **poindra**。'
          }
        ]
      }
    ]
  },
  {
    id: 'existence-precede-essence',
    roman: 'II',
    titleOriginal: "L'existence précède l'essence : projet et angoisse",
    titleZh: '存在先于本质：筹划与焦虑',
    blocks: [
      {
        id: 'eeh-s2-p01',
        type: 'paragraph',
        num: '§ 01',
        fr: "La plupart des gens qui utilisent ce mot seraient bien embarrassés pour le justifier, puisque aujourd'hui, que c'est devenu une mode, on déclare volontiers qu'un musicien ou qu'un peintre est existentialiste. Un échotier de Clartés signe l'Existentialiste ; et au fond le mot a pris aujourd'hui une telle largeur et une telle extension qu'il ne signifie plus rien du tout. Il semble que, faute de doctrine d'avant-garde analogue au surréalisme, les gens avides de scandale et de mouvement s'adressent à cette philosophie, qui ne peut d'ailleurs rien leur apporter dans ce domaine ; en réalité c'est la doctrine la moins scandaleuse, la plus austère ; elle est strictement destinée aux techniciens et aux philosophes. Pourtant, elle peut se définir facilement. Ce qui rend les choses compliquées, c'est qu'il y a deux espèces d'existentialistes : les premiers, qui sont chrétiens, et parmi lesquels je rangerai Jaspers et Gabriel Marcel, de confession catholique ; et, d'autre part, les existentialistes athées parmi lesquels il faut ranger Heidegger, et aussi les existentialistes français et moi-même. Ce qu'ils ont en commun, c'est simplement le fait qu'ils estiment que l'existence précède l'essence, ou, si vous voulez, qu'il faut partir de la subjectivité. Que faut-il au juste entendre par là ? Lorsqu'on considère un objet fabriqué, comme par exemple un livre ou un coupe-papier, cet objet a été fabriqué par un artisan qui s'est inspiré d'un concept ; il s'est référé au concept de coupe-papier, et également à une technique de production préalable qui fait partie du concept, et qui est au fond une recette. Ainsi, le coupe-papier est à la fois un objet qui se produit d'une certaine manière et qui, d'autre part, a une utilité définie, et on ne peut pas supposer un homme qui produirait un coupe-papier sans savoir à quoi l'objet va servir. Nous dirons donc que, pour le coupe-papier, l'essence — c'est-à-dire l'ensemble des recettes et des qualités qui permettent de le produire et de le définir — précède l'existence ; et ainsi la présence, en face de moi, de tel coupe-papier ou de tel livre est déterminée. Nous avons donc là une vision technique du monde, dans laquelle on peut dire que la production précède l'existence.",
        zh: '大多数使用这个词的人，真要叫他们说出个所以然来，恐怕都会颇感为难；因为如今这个词已成了一种时髦，人们动辄宣称某位音乐家或某位画家是存在主义者。[《明晰》周报]{#g-eeh-s2-01}的一位轶闻专栏作者甚至署名为「存在主义者」；归根结底，这个词在今天已经被撑得如此宽泛、如此漫无边际，以至于它根本不再意味着任何东西了。看起来，由于缺乏类似超现实主义那样的先锋派学说，那些渴求轰动丑闻与热闹风潮的人便纷纷投向这门哲学，殊不知它在这方面根本无法给他们带来任何东西；事实上，它是最不哗众取宠、最为严峻朴素的学说，严格说来只面向专业学者与哲学家。不过，它其实很容易界定。使事情变得复杂的，是存在着两类存在主义者：第一类是基督教徒，我将把[雅斯贝尔斯]{#g-eeh-s2-02}以及信奉天主教的[加布里埃尔·马塞尔]{#g-eeh-s2-03}归入其中；另一类则是无神论的存在主义者，应当将[海德格尔]{#g-eeh-s2-04}，以及法国的存在主义者和我本人归入此列。两者的共同之处，仅仅在于他们都认为[存在先于本质]{#g-eeh-s2-05}，或者换句话说，必须从主体性出发。这究竟应当如何理解呢？当我们考察一件人工制品，譬如一本书或一把[裁纸刀]{#g-eeh-s2-06}时，这件物品是由一位工匠依据某个概念制造出来的；他参照了裁纸刀的概念，同时也参照了一套预先存在的制作技艺——这套技艺本身便是概念的一部分，归根结底就是一份制作配方。因此，裁纸刀既是一件按特定方式制造出来的物品，同时又具有明确的用途；我们无法设想会有人在不知道这件物品作何用途的情况下去制造一把裁纸刀。所以我们说，就裁纸刀而言，本质——亦即使得人们能够制造它并界定它的那整套配方与属性之总和——先于存在；如此一来，摆在我面前的这把裁纸刀或这本书的在场，便是预先规定好了的。在这里，我们看到的是一种技术性的世界观，在其中可以说制作先于存在。',
        glosses: [
          {
            id: 'g-eeh-s2-01',
            anchor: '《明晰》周报',
            content:
              '指巴黎解放后于 1945 年 6 月创刊的政治与文化周报《明晰》（Clartés，由抵抗运动报人让·泰克西耶等人主持，不同于第一次世界大战后亨利·巴比塞创办的国际左翼知识分子刊物 Clarté）。法语 **échotier** 指报刊中专门撰写简短文坛轶闻与社交动态栏目（Échos）的专栏执笔者；1945 年秋巴黎报界掀起「存在主义」话题热潮，左岸圣日耳曼德佩区的地下酒窖、爵士乐手与波希米亚青年纷纷被大众媒体冠以此名，《明晰》周报亦有人以此作为轶闻栏笔名。'
          },
          {
            id: 'g-eeh-s2-02',
            anchor: '雅斯贝尔斯',
            content:
              '卡尔·雅斯贝尔斯（Karl Jaspers，1883—1969），德国精神病理学家与生存哲学（Existenzphilosophie）代表人物，主要著作包括《世界观的心理学》（1919）与三卷本《哲学》（1932）。雅斯贝尔斯出身北德奥尔登堡路德宗新教家庭（并非天主教徒，原文句末「信奉天主教的」在语法上仅修饰马塞尔，但萨特将二人一并归入基督教存在主义阵营），主张人唯有在死亡、苦难、斗争与罪责等「界限处境」（Grenzsituationen）中经历实存的挫败，方能向「超越者」（Transzendenz）敞开。'
          },
          {
            id: 'g-eeh-s2-03',
            anchor: '加布里埃尔·马塞尔',
            content:
              '加布里埃尔·马塞尔（Gabriel Marcel，1889—1973），法国哲学家、剧作家，1929 年由不可知论皈依天主教，著有《形而上学日记》（1927）与《存在与拥有》（1935）。二十世纪四十年代中期，马塞尔率先在法语学界推广 **existentialisme** 一词并一度用以概括萨特与自身等人的哲学取向；1950 年 8 月教宗庇护十二世颁布《人类通谕》（Humani generis）公开谴责存在主义抹杀不变本质后，马塞尔宣布放弃「基督教存在主义者」称号，改称自己的思想为「新苏格拉底主义」或「基督教苏格拉底主义」。'
          },
          {
            id: 'g-eeh-s2-04',
            anchor: '海德格尔',
            content:
              '马丁·海德格尔（Martin Heidegger，1889—1976），德国哲学家，曾任埃德蒙德·胡塞尔（Edmund Husserl，1859—1938）助手，代表作《存在与时间》（Sein und Zeit，1927）通过对人的生存结构（Existenzialien）的现象学阐释重提「存在之意义」问题。海德格尔早年受天主教神学与经院哲学训练，后转向现象学与基础存在论；他本人始终拒绝「存在主义」与「无神论」两重标签，强调《存在与时间》中关于「在世界之中存在」的分析属于追问存在本身的准备阶段，既非哲学人类学，亦不在有神论与无神论之间作神学站队。'
          },
          {
            id: 'g-eeh-s2-05',
            anchor: '存在先于本质',
            content:
              '法语 **l’existence précède l’essence**，对古典形而上学与中世纪经院哲学本体论次序的倒置。自亚里士多德、阿维森纳至托马斯·阿奎那与苏亚雷斯，传统形而上学严格区分事物的「本质」（拉丁语 **essentia** / **quidditas**，回答一物「是什么」的普遍定义与理型）与「存在」（**existentia**，回答一物「是否存在」的现实实存）：在受造物那里，永恒普遍的本质预先存于神圣理智或自然秩序之中，现实存在只是本质的现实化。'
          },
          {
            id: 'g-eeh-s2-06',
            anchor: '裁纸刀',
            content:
              '法语 **coupe-papier**。二十世纪法国平装书（livre broché）出厂时保留未裁开的对折印张毛边，读者阅读前须用裁纸刀逐页裁开书口，故裁纸刀是当时法语知识分子书案上常见的随手器物。以工匠按理念蓝图制造器物来类比宇宙秩序与本体论结构，可追溯至柏拉图《理想国》第十卷论工匠依循「床的理念」制床及《蒂迈欧篇》巨匠造物主（Dēmiourgos）神话；海德格尔在 1927 年马堡讲稿《现象学之基本问题》中亦曾剖析古代存在论如何以手工制作（Herstellen）为范式来理解「本质」概念。'
          }
        ]
      },
      {
        id: 'eeh-s2-p02',
        type: 'paragraph',
        num: '§ 02',
        fr: "Lorsque nous concevons un Dieu créateur, ce Dieu est assimilé la plupart du temps à un artisan supérieur ; et quelle que soit la doctrine que nous considérions, qu'il s'agisse d'une doctrine comme celle de Descartes ou de la doctrine de Leibniz, nous admettons toujours que la volonté suit plus ou moins l'entendement, ou tout au moins l'accompagne, et que Dieu, lorsqu'il crée, sait précisément ce qu'il crée. Ainsi, le concept d'homme, dans l'esprit de Dieu, est assimilable au concept de coupe-papier dans l'esprit de l'industriel ; et Dieu produit l'homme suivant des techniques et une conception, exactement comme l'artisan fabrique un coupe-papier suivant une définition et une technique. Ainsi l'homme individuel réalise un certain concept qui est dans l'entendement divin. Au XVIIIe siècle, dans l'athéisme des philosophes, la notion de Dieu est supprimée, mais non pas pour autant l'idée que l'essence précède l'existence. Cette idée, nous la retrouvons un peu partout : nous la retrouvons chez Diderot, chez Voltaire, et même chez Kant. L'homme est possesseur d'une nature humaine ; cette nature humaine, qui est le concept humain, se retrouve chez tous les hommes, ce qui signifie que chaque homme est un exemple particulier d'un concept universel, l'homme ; chez Kant, il résulte de cette universalité que l'homme des bois, l'homme de la nature, comme le bourgeois sont astreints à la même définition et possèdent les mêmes qualités de base. Ainsi, là encore, l'essence d'homme précède cette existence historique que nous rencontrons dans la nature.",
        zh: '当我们构想一位造物主上帝时，这位上帝在大多数时候都被比作一位高超的工匠；不论我们考察的是哪一种学说，无论是[笛卡尔那样的学说还是莱布尼茨的学说]{#g-eeh-s2-07}，我们总是承认意志或多或少追随着理智，或者至少与理智相伴随，而且上帝在创造之时，确切地知道自己所创造的是什么。如此一来，上帝心灵中「人」的概念，便好比实业家头脑中「裁纸刀」的概念；上帝依照一套技艺与一种构想制造出人，正如同工匠依照一项定义与一门技艺打造出一把裁纸刀。于是，单个人便是在实现神圣理智之中的某一个特定概念。到了十八世纪，在哲学家们的无神论当中，上帝的观念被取消了，但「本质先于存在」这一观念却并未随之取消。这一观念几乎随处可见：我们在[狄德罗、伏尔泰乃至康德]{#g-eeh-s2-08}那里都能看到它。人拥有一种人性；这种人性，亦即「人」的概念，存在于所有人的身上，这意味着每一个人都是「人」这一普遍概念的特殊例证；在康德那里，由这种普遍性便推导出：森林里的野人、自然状态的人，同资产者一样受制于同一个定义，具备同样的基本属性。因此，在这里，人的本质依然先于我们在自然中所遭遇的这种历史性的存在。',
        glosses: [
          {
            id: 'g-eeh-s2-07',
            anchor: '笛卡尔那样的学说还是莱布尼茨的学说',
            content:
              '指十七世纪唯理主义内部关于上帝理智（entendement）与意志（volonté）关系的两种神学模型。戈特弗里德·威廉·莱布尼茨（Gottfried Wilhelm Leibniz，1646—1716）在《形而上学谈》（1686）与《神义论》（1710）中主张，上帝的理智在创世之前便已包揽一切可能世界与每个个体的完整概念（notion complète），上帝的意志则依循充足理由律与最佳原则，按照理智的审度择取最佳可能世界予以创造（即「意志追随理智」）；而笛卡尔在 1630 年致梅森神父（Marin Mersenne）的三封书信中提出「永恒真理受造说」，认为上帝之中不存在先于意志并约束意志的独立理念，其理智与意志在绝对单纯的同一行动中合一（即「至少与理智相伴随」）。'
          },
          {
            id: 'g-eeh-s2-08',
            anchor: '狄德罗、伏尔泰乃至康德',
            content:
              '原文「哲学家们」（**les philosophes**）专指十八世纪启蒙思想家：德尼·狄德罗（Denis Diderot，1713—1784）为《百科全书》主编与唯物主义无神论代表；伏尔泰（Voltaire，1694—1778）虽持自然神论而非无神论，但在《风俗论》（1756）等著作中同样诉诸跨越时代与地域的普遍人性；伊曼努尔·康德（Immanuel Kant，1724—1804）则在《道德形而上学奠基》（1785）与《实用人类学》（1798）中将普遍理性本质赋予一切有限理性存在者。下文「森林里的野人」（**l’homme des bois**）系十八世纪博物学与卢梭《论人类不平等的起源和基础》（1755）用以指称自然状态原始人的习语。'
          }
        ]
      },
      {
        id: 'eeh-s2-p03',
        type: 'paragraph',
        num: '§ 03',
        fr: "L'existentialisme athée, que je représente, est plus cohérent. Il déclare que si Dieu n'existe pas, il y a au moins un être chez qui l'existence précède l'essence, un être qui existe avant de pouvoir être défini par aucun concept et que cet être c'est l'homme ou, comme dit Heidegger, la réalité humaine. Qu'est-ce que signifie ici que l'existence précède l'essence ? Cela signifie que l'homme existe d'abord, se rencontre, surgit dans le monde, et qu'il se définit après. L'homme, tel que le conçoit l'existentialiste, s'il n'est pas définissable, c'est qu'il n'est d'abord rien. Il ne sera qu'ensuite, et il sera tel qu'il se sera fait. Ainsi, il n'y a pas de nature humaine, puisqu'il n'y a pas de Dieu pour la concevoir. L'homme est seulement, non seulement tel qu'il se conçoit, mais tel qu'il se veut, et comme il se conçoit après l'existence, comme il se veut après cet élan vers l'existence ; l'homme n'est rien d'autre que ce qu'il se fait. Tel est le premier principe de l'existentialisme. C'est aussi ce qu'on appelle la subjectivité, et que l'on nous reproche sous ce nom même. Mais que voulons-nous dire par là, sinon que l'homme a une plus grande dignité que la pierre ou que la table ? Car nous voulons dire que l'homme existe d'abord, c'est-à-dire que l'homme est d'abord ce qui se jette vers un avenir, et ce qui est conscient de se projeter dans l'avenir. L'homme est d'abord un projet qui se vit subjectivement, au lieu d'être une mousse, une pourriture ou un chou-fleur ; rien n'existe préalablement à ce projet ; rien n'est au ciel intelligible, et l'homme sera d'abord ce qu'il aura projeté d'être. Non pas ce qu'il voudra être. Car ce que nous entendons ordinairement par vouloir, c'est une décision consciente, et qui est pour la plupart d'entre nous postérieure à ce qu'il s'est fait lui-même. Je peux vouloir adhérer à un parti, écrire un livre, me marier, tout cela n'est qu'une manifestation d'un choix plus originel, plus spontané que ce qu'on appelle volonté. Mais si vraiment l'existence précède l'essence, l'homme est responsable de ce qu'il est. Ainsi, la première démarche de l'existentialisme est de mettre tout homme en possession de ce qu'il est et de faire reposer sur lui la responsabilité totale de son existence. Et, quand nous disons que l'homme est responsable de lui-même, nous ne voulons pas dire que l'homme est responsable de sa stricte individualité, mais qu'il est responsable de tous les hommes. Il y a deux sens du mot subjectivisme, et nos adversaires jouent sur ces deux sens. Subjectivisme veut dire d'une part choix du sujet individuel par lui-même, et, d'autre part, impossibilité pour l'homme de dépasser la subjectivité humaine. C'est le second sens qui est le sens profond de l'existentialisme. Quand nous disons que l'homme se choisit, nous entendons que chacun d'entre nous se choisit, mais par là nous voulons dire aussi qu'en se choisissant il choisit tous les hommes. En effet, il n'est pas un de nos actes qui, en créant l'homme que nous voulons être, ne crée en même temps une image de l'homme tel que nous estimons qu'il doit être. Choisir d'être ceci ou cela, c'est affirmer en même temps la valeur de ce que nous choisissons, car nous ne pouvons jamais choisir le mal ; ce que nous choisissons, c'est toujours le bien, et rien ne peut être bon pour nous sans l'être pour tous. Si l'existence, d'autre part, précède l'essence et que nous voulions exister en même temps que nous façonnons notre image, cette image est valable pour tous et pour notre époque tout entière. Ainsi, notre responsabilité est beaucoup plus grande que nous ne pourrions le supposer, car elle engage l'humanité entière. Si je suis ouvrier, et si je choisis d'adhérer à un syndicat chrétien plutôt que d'être communiste, si, par cette adhésion, je veux indiquer que la résignation est au fond la solution qui convient à l'homme, que le royaume de l'homme n'est pas sur la terre, je n'engage pas seulement mon cas : je veux être résigné pour tous, par conséquent ma démarche a engagé l'humanité tout entière. Et si je veux, fait plus individuel, me marier, avoir des enfants, même si ce mariage dépend uniquement de ma situation, ou de ma passion, ou de mon désir, par là j'engage non seulement moi-même, mais l'humanité tout entière sur la voie de la monogamie. Ainsi je suis responsable pour moi-même et pour tous, et je crée une certaine image de l'homme que je choisis ; en me choisissant, je choisis l'homme.",
        zh: '我所代表的无神论存在主义则更为一贯。它宣称，倘若上帝不存在，至少有一个存在者，在其身上存在先于本质，他在能够被任何概念界定之前便已存在，而这个存在者就是人，或者如海德格尔所说，是[人的现实]{#g-eeh-s2-09}。在这里，存在先于本质意味着什么呢？它意味着人首先存在，遭遇自身，在世界中涌现出来，然后才界定自身。按存在主义者的构想，人之所以是不可界定的，是因为他起初什么也不是。他只是到后来才成为某种存在，而且他把自己造就成什么样，他就会成为什么样。因此，并没有什么人性，因为并没有一位上帝去构想它。[人只是——不仅如他所构想的自己那样]{#g-eeh-s2-10}，而且如他所意欲的自己那样，并且由于他是在存在之后才构想自己，是在这一奔向存在的跃动之后才意欲自己，**人便无非是他所造就的自己**。这便是存在主义的第一原理。这也正是人们所谓的主体性，而且人们正是借这个名称来责难我们的。可是我们这样说，除了表明人比石头或桌子具有更高的尊严之外，还能是什么意思呢？因为我们的意思是说，人首先存在，也就是说，人首先是一个朝向未来投出自身的存在者，并且清醒地意识到自己正把自身投向未来。人首先是一项主观地活出来的[筹划]{#g-eeh-s2-11}，而不是一团苔藓、一堆腐殖物或一棵花椰菜；在这项筹划之前没有任何东西存在；可知的天国之中空无一物，人首先将成为他所筹划要成为的样子。而不是他想要成为的样子。因为我们通常所说的「想要」，是指一种有意识的决定，而对于我们大多数人来说，这种决定都后于自己已经把自己造就成的样子。我可以想要加入某个政党、写一本书、结婚成家，但这一切都不过是某种比通常所谓「意志」更为源始、更为自发的选择的表现罢了。但是，倘若存在当真先于本质，人就要为自己之所是承担责任。因此，存在主义的第一步，便是让每一个人掌握他自身之所是，并使他对自己存在的全部责任完全落在他自己肩上。而且，当我们说人对自身负责时，并不是说人只对自己狭隘的个体性负责，而是说**他对所有人负责**。主观主义一词具有两重含义，而我们的论敌正是利用这两重含义大做文章。主观主义一方面意指个体主体由其自身作出的选择，另一方面则意指人不可能超越人的主体性。这第二重含义才是存在主义的深层含义。当我们说人选择自身时，我们的确是指我们当中的每一个人各自选择自身，但与此同时我们也是指，他在选择自身之际，也就选择了所有人。事实上，我们的任何一个行动，在创造我们想要成为的那种人的同时，无不同时创造出一个我们认为人应当成为的那种形象。选择成为这样或那样的人，同时就是在肯定我们所选择之物的价值，因为我们绝不可能选择恶；我们所选择的总是善，而没有任何东西能够在对全体人类并非善的情况下唯独对我们是善。另一方面，倘若存在先于本质，而且我们在塑造自身形象的同时意欲存在，那么这一形象便对所有人、对我们整个时代都有效。因此，我们的责任比我们原本可能设想的要重大得多，因为它牵系着整个人类。假如我是一名工人，选择加入基督教工会而不做共产党人，并且假如通过这一加入，我意在表明逆来顺受归根到底是适合于人的出路、人的国度并不在尘世之上，那么我所牵系的便不只是我个人的事：我是要为所有人选择逆来顺受，因而我的这一行动便把整个人类都卷入其中了。又假如我想要做一件更具个人色彩的事——结婚、生儿育女，哪怕这桩婚姻完全取决于我的处境、我的激情或我的欲望，借此我也不仅使我自己，而且使整个人类都踏上了单偶婚的道路。因此，我既为我自己负责，也为所有人负责，我创造着某种我所选择的人的形象；**在选择我自己的同时，我也就选择了人**。',
        glosses: [
          {
            id: 'g-eeh-s2-09',
            anchor: '人的现实',
            content:
              '法语 **la réalité humaine**，法国哲学家与东方学家亨利·科尔班（Henry Corbin，1903—1978）在 1938 年伽利玛出版社出版的海德格尔文集《形而上学是什么？》（Qu’est-ce que la métaphysique ?，收录同名演说、《论根据的本质》及《存在与时间》若干选章的首部法译本）中用以迻译德语核心术语 **Dasein**（此在）的法语译名。二十世纪三四十年代的法国现象学界（包括萨特 1943 年的《存在与虚无》）普遍沿用了科尔班的这一译法，直到战后才逐渐改用直译 **être-là** 或直接保留德语原词。'
          },
          {
            id: 'g-eeh-s2-10',
            anchor: '人只是——不仅如他所构想的自己那样',
            content:
              '原文作 **« L’homme est seulement, non seulement tel qu’il se conçoit, mais tel qu’il se veut… »**。1945 年 10 月 29 日萨特在「今日俱乐部」发表本篇演说时并未宣读定稿讲义，而是即席脱稿讲演；1946 年纳热尔出版社印行的文本整理自速记员的记录稿，此处原样保留了萨特口头讲演时的即席自我修正——他先脱口说出「人只是……」（L’homme est seulement），随即改口递进为「不仅如他所构想的自己那样，而且如他所意欲的自己那样」（non seulement… mais…）。'
          },
          {
            id: 'g-eeh-s2-11',
            anchor: '筹划',
            content:
              '法语 **projet**，词源上来自拉丁语动词 **projicere**（向前投掷，由前缀 **pro-**「向前」与 **jacere**「投掷」合成），在原文中与前一句的动词 **se jeter vers un avenir**（朝向未来投出自身）、**se projeter dans l’avenir**（把自身投向未来）构成直接的词源呼应，同时对应海德格尔《存在与时间》第 31 节中的生存论范畴 **Entwurf**（投企、筹划）。下文「可知的天国」（**ciel intelligible**）则译自柏拉图《理想国》第六、七卷的希腊语术语 **topos noētos**（理念所在的超感官可知领域）。'
          }
        ]
      },
      {
        id: 'eeh-s2-p04',
        type: 'paragraph',
        num: '§ 04',
        fr: "Ceci nous permet de comprendre ce que recouvrent des mots un peu grandiloquents comme angoisse, délaissement, désespoir. Comme vous allez voir, c'est extrêmement simple. D'abord, qu'entend-on par angoisse ? L'existentialiste déclare volontiers que l'homme est angoisse. Cela signifie ceci : l'homme qui s'engage et qui se rend compte qu'il est non seulement celui qu'il choisit d'être, mais encore un législateur choisissant en même temps que soi l'humanité entière, ne saurait échapper au sentiment de sa totale et profonde responsabilité. Certes, beaucoup de gens ne sont pas anxieux ; mais nous prétendons qu'ils se masquent leur angoisse, qu'ils la fuient ; certainement, beaucoup de gens croient en agissant n'engager qu'eux-mêmes, et lorsqu'on leur dit : mais si tout le monde faisait comme ça ? ils haussent les épaules et répondent : tout le monde ne fait pas comme ça. Mais en vérité, on doit toujours se demander : qu'arriverait-il si tout le monde en faisait autant ? et on n'échappe à cette pensée inquiétante que par une sorte de mauvaise foi. Celui qui ment et qui s'excuse en déclarant : tout le monde ne fait pas comme ça, est quelqu'un qui est mal à l'aise avec sa conscience, car le fait de mentir implique une valeur universelle attribuée au mensonge. Même lorsqu'elle se masque l'angoisse apparaît. C'est cette angoisse que Kierkegaard appelait l'angoisse d'Abraham. Vous connaissez l'histoire : Un ange a ordonné à Abraham de sacrifier son fils : tout va bien si c'est vraiment un ange qui est venu et qui a dit : tu es Abraham, tu sacrifieras ton fils. Mais chacun peut se demander, d'abord, est-ce que c'est bien un ange, et est-ce que je suis bien Abraham ? Qu'est-ce qui me le prouve ? Il y avait une folle qui avait des hallucinations : on lui parlait par téléphone et on lui donnait des ordres. Le médecin lui demanda : « Mais qui est-ce qui vous parle ? » Elle répondit : « Il dit que c'est Dieu. » Et qu'est-ce qui lui prouvait, en effet, que c'était Dieu ? Si un ange vient à moi, qu'est-ce qui prouve que c'est un ange ? Et si j'entends des voix, qu'est-ce qui prouve qu'elles viennent du ciel et non de l'enfer, ou d'un subconscient, ou d'un état pathologique ? Qui prouve qu'elles s'adressent à moi ? Qui prouve que je suis bien désigné pour imposer ma conception de l'homme et mon choix à l'humanité ? Je ne trouverai jamais aucune preuve, aucun signe pour m'en convaincre. Si une voix s'adresse à moi, c'est toujours moi qui déciderai que cette voix est la voix de l'ange ; si je considère que tel acte est bon, c'est moi qui choisirai de dire que cet acte est bon plutôt que mauvais. Rien ne me désigne pour être Abraham, et pourtant je suis obligé à chaque instant de faire des actes exemplaires. Tout se passe comme si, pour tout homme, toute l'humanité avait les yeux fixés sur ce qu'il fait et se réglait sur ce qu'il fait. Et chaque homme doit se dire : suis-je bien celui qui a le droit d'agir de telle sorte que l'humanité se règle sur mes actes ? Et s'il ne se dit pas cela, c'est qu'il se masque l'angoisse. Il ne s'agit pas là d'une angoisse qui conduirait au quiétisme, à l'inaction. Il s'agit d'une angoisse simple, que tous ceux qui ont eu des responsabilités connaissent. Lorsque, par exemple, un chef militaire prend la responsabilité d'une attaque et envoie un certain nombre d'hommes à la mort, il choisit de le faire, et au fond il choisit seul. Sans doute il y a des ordres qui viennent d'en haut, mais ils sont trop larges et une interprétation s'impose, qui vient de lui, et de cette interprétation dépend la vie de dix ou quatorze ou vingt hommes. Il ne peut pas ne pas avoir, dans la décision qu'il prend, une certaine angoisse. Tous les chefs connaissent cette angoisse. Cela ne les empêche pas d'agir, au contraire, c'est la condition même de leur action ; car cela suppose qu'ils envisagent une pluralité de possibilités, et lorsqu'ils en choisissent une, ils se rendent compte qu'elle n'a de valeur que parce qu'elle est choisie. Et cette sorte d'angoisse, qui est celle que décrit l'existentialisme, nous verrons qu'elle s'explique en outre par une responsabilité directe vis-à-vis des autres hommes qu'elle engage. Elle n'est pas un rideau qui nous séparerait de l'action, mais elle fait partie de l'action même.",
        zh: '这便使我们能够理解诸如[焦虑]{#g-eeh-s2-12}、被抛境况、绝望这类听起来多少有些夸张的字眼背后究竟意指什么。正如诸位即将看到的，它们的意思极其简单。首先，什么叫做焦虑？存在主义者常说：**人就是焦虑**。这意味着：一个投身行动的人，一旦意识到自己不仅是自己所选择要成为的那个人，而且还是一位在选择自身的同时也为整个人类作出选择的立法者，便无法逃避自身那种彻底而深沉的责任感。诚然，许多人并不感到焦虑不安；但我们认为，他们只是在掩饰自己的焦虑，在逃避它；固然有许多人以为自己行事只关乎自身，当别人对他们说「要是人人都这么做呢？」的时候，他们便耸耸肩回答道：「并不是人人都这么做。」然而事实上，人应当始终自问：「倘若人人都这么做，将会怎样？」人们唯有靠某种[自欺]{#g-eeh-s2-13}，才能逃避这一令人不安的念头。一个撒谎的人，借口「并不是人人都这么做」来为自己开脱，此人面对自己的良知其实是心神不宁的，因为撒谎这一事实本身便意味着赋予了谎言一种普遍价值。即便在焦虑自我掩饰的时候，它也依然显露出来。这种焦虑，正是克尔凯郭尔所说的[亚伯拉罕的焦虑]{#g-eeh-s2-14}。诸位都熟悉那个故事：一位天使命令亚伯拉罕献祭他的儿子；倘若前来的确乎是一位天使，并且确乎说道「你是亚伯拉罕，你要献祭你的儿子」，那自然一切都好办。但每个人首先都可以自问：那当真是一位天使吗？而我又当真是亚伯拉罕吗？有什么能向我证明这一点呢？曾有一名患有幻觉症的精神病妇人：有人通过电话同她讲话，向她下达命令。医生问她：「可是究竟是谁在同你讲话呢？」她回答说：「他说是上帝。」说到底，又有什么能向她证明那就是上帝呢？倘若有一位天使来到我面前，有什么能证明那就是天使？倘若我听见某些声音，有什么能证明它们来自天国而非来自地狱，不是来自潜意识，也不是来自某种病理状态？谁能证明那些声音是对我发出的？谁又能证明我确乎是受命将自己对人的构想与自己的选择强加于全人类的那个人？我永远找不到任何证据、任何征兆来使自己确信这一点。倘若有一个声音向我说话，总归是由我来决定这声音便是天使的声音；倘若我认为某个行为是善的，也总归是由我来选择判定这一行为是善而非恶。没有任何东西指定我成为亚伯拉罕，然而我却每时每刻都被迫作出具有典范意义的行为。一切都仿佛是：对于每一个人而言，全人类的目光都紧盯着他的所作所为，并以他的所作所为为准绳。因此每个人都应当自问：我当真有权如此行事，以至于让全人类都以我的行为为准绳吗？倘若他不这样自问，那是因为他在掩饰自己的焦虑。这里所说的，绝非一种会导向寂静主义、导向无所作为的焦虑。这是一种朴素的焦虑，凡是担负过责任的人都对它并不陌生。譬如，当一名军事指挥官承担起发动一次进攻的责任、把若干士兵送上死地时，是他选择了这样做，而且归根结底是他独自作出了选择。固然有来自上级的命令，但那些命令过于宽泛，必须加以解释，而这种解释只能出自他本人，十个、十四个乃至二十个人的性命就悬系于这一解释之上。在他作出决断之际，他不可能不怀有某种焦虑。所有指挥官都深知这种焦虑。这非但不会妨碍他们行动，恰恰相反，这正是他们行动本身的条件；因为这意味着他们面对着多种多样的可能性，而当他们从中选定一种时，他们清楚地意识到，这一可能性之所以具有价值，仅仅是因为它被选中了。而存在主义所描绘的这种焦虑，我们稍后将会看到，它还可以由针对它所牵系的其他人所负有的直接责任得到说明。它绝不是一道把我们与行动隔离开来的帷幕，而是行动本身的组成部分。',
        glosses: [
          {
            id: 'g-eeh-s2-12',
            anchor: '焦虑',
            content:
              '法语 **angoisse**（源自拉丁语 **angustia**，「狭窄、窒迫感」），承接丹麦哲学家索伦·克尔凯郭尔（Søren Kierkegaard，1813—1855）《焦虑的概念》（Begrebet Angest，1844）与海德格尔《存在与时间》第 40 节、《形而上学是什么？》中的德语概念 **Angst**（亦译「畏」）。在存在哲学传统中，**angoisse / Angst** 严格区别于指向特定外在威胁对象的「恐惧」（法语 **peur** / 德语 **Furcht**）：人在外在危险面前感到恐惧，而在自身毫无先天依据的自由与选择可能性面前体会到焦虑。萨特在《存在与虚无》第一卷第一章将其规定为自由在自身面前的反思性自我意识。'
          },
          {
            id: 'g-eeh-s2-13',
            anchor: '自欺',
            content:
              '法语 **mauvaise foi**，字面义为「恶意、不诚」（与民法及日常道德中的 **bonne foi**「善意、诚实信用」相对），在《存在与虚无》第一卷第二章中被确立为现象学本体论概念。不同于普通「说谎」（**mensonge**，说谎者自己明知真相而刻意欺骗外在的他人，预设了欺骗者与受骗者的二元分离），「自欺」发生在同一个单一意识内部——人既意识到自己是自由的，又借决定论托词、社会角色或既定习俗在同一意识中将自己伪装成身不由己的被动之物。'
          },
          {
            id: 'g-eeh-s2-14',
            anchor: '亚伯拉罕的焦虑',
            content:
              '典出《创世记》第二十二章「亚伯拉罕献以撒」故事及克尔凯郭尔 1843 年以笔名「沉默的约翰内斯」（Johannes de Silentio）发表的著作《恐惧与战栗》（Frygt og Bæven）。克尔凯郭尔在该书中分析亚伯拉罕如何在普遍伦理法则（父亲不得杀子）被「目的论地悬置」之际，独自面对神命完成信仰之跃；「亚伯拉罕的焦虑」系萨特将《恐惧与战栗》与《焦虑的概念》两书母题加以合并后的概括提法。'
          }
        ]
      }
    ]
  }
];
