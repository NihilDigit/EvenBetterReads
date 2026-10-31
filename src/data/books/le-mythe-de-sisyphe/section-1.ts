import type { BookSection, GlossItem } from '../../../types/book';

export const chapter1Dedication = {
  toOriginal: 'à Pascal Pia',
  toZh: '献给帕斯卡尔·皮亚',
  noteFr:
    "Les pages qui suivent traitent d'une sensibilité absurde qu'on peut trouver éparse dans le siècle — et non d'une philosophie absurde que notre temps, à proprement parler, n'a pas connue. Il est donc d'une honnêteté élémentaire de marquer, pour commencer, ce qu'elles doivent à certains esprits contemporains. Mon intention est si peu de le cacher qu'on les verra cités et commentés tout au long de l'ouvrage.\n\nMais il est utile de noter, en même temps, que l'absurde, pris jusqu'ici comme conclusion, est considéré dans cet essai comme un point de départ. En ce sens, on peut dire qu'il y a du provisoire dans mon commentaire : on ne saurait préjuger de la position qu'il engage. On trouvera seulement ici la description, à l'état pur, d'un mal de l'esprit. Aucune métaphysique, aucune croyance n'y sont mêlées pour le moment. Ce sont les limites et le seul parti pris de ce livre.",
  noteZh:
    '以下篇幅探讨的，是一种散见于我们这个时代的[荒谬感]{#g-sensibilite}，而非一套严格意义上我们时代未曾有过的「荒谬哲学」。因此，出于最起码的诚实，开篇即应指明本书受惠于当代若干思想者之处。我丝毫无意隐瞒这份渊源，全书随处可见对他们的引述与评析。\n\n但同样有必要指出，[以往常被当作结论的荒谬，在这篇随笔里却被视为出发点]{#g-point-depart}。从这个意义上说，我的评述带有某种暂时性：它最终会将人引向何种立场，眼下尚不可预断。读者在这里看到的，仅仅是一种处于纯粹状态的**精神疾患**的描摹。暂时不掺杂任何形而上学，也不掺杂任何信仰。这便是本书的界限，也是它唯一的成见。',
  signatureFr: 'Albert Camus',
  signatureZh: '阿尔贝·加缪',
  glosses: [
    {
      id: 'g-sensibilite',
      anchor: '荒谬感',
      content:
        '受献者帕斯卡尔·皮亚（Pascal Pia，1903—1979）是加缪在阿尔及尔创办《共和晚报》与巴黎《战斗报》时的挚友与引路人。加缪将「荒谬感」与「荒谬哲学」区分开：他始终拒绝被归入萨特式的学院存在主义体系，强调这里处理的不是一套先验教条，而是二十世纪人在日常经验与历史断裂中普遍遭遇的精神症候。'
    },
    {
      id: 'g-point-depart',
      anchor: '以往常被当作结论的荒谬，在这篇随笔里却被视为出发点',
      content:
        '自尼采与第一次世界大战以来，欧洲虚无主义文学与存在哲学往往耗费整部著作去论证「世界是荒谬、无意义的」，并以此作为终点；加缪则把这个结论直接当作已知前提：既然世界已经毫无意义，接下来人该怎么活？'
    }
  ] satisfies GlossItem[]
};

export const chapter1Epigraph = {
  quoteFr: 'Ô mon âme, n’aspire pas à la vie immortelle, mais épuise le champ du possible.',
  quoteZh: '我的灵魂啊，切莫渴求不朽的生命，但须穷尽一切可能的疆域。',
  authorFr: 'Pindare',
  authorZh: '品达',
  sourceFr: 'IIIe Pythique',
  sourceZh: '《皮提亚竞技颂》第三首'
};

export const section1: BookSection = {
  id: 'l-absurde-et-le-suicide',
  roman: 'I.1',
  titleOriginal: "L'absurde et le suicide",
  titleZh: '荒谬与自杀',
  blocks: [
    {
      id: 's1-p01',
      type: 'paragraph',
      num: '§ 01',
      fr: "Il n'y a qu'un problème philosophique vraiment sérieux : c'est le suicide. Juger que la vie vaut ou ne vaut pas la peine d'être vécue, c'est répondre à la question fondamentale de la philosophie. Le reste, si le monde a trois dimensions, si l'esprit a neuf ou douze catégories, vient ensuite. Ce sont des jeux ; il faut d'abord répondre. Et s'il est vrai, comme le veut Nietzsche, qu'un philosophe, pour être estimable, doive prêcher d'exemple, on saisit l'importance de cette réponse puisqu'elle va précéder le geste définitif. Ce sont là des évidences sensibles au cœur, mais qu'il faut approfondir pour les rendre claires à l'esprit.",
      zh: '真正严肃的哲学问题只有一个，那便是自杀。判断这一生究竟值不值得活下去，本身就是在回答哲学的根本问题。至于其余种种——世界是否具有三个维度，[心智究竟拥有九个还是十二个范畴]{#g-categories}——全都退居其次。那些不过是智力游戏；我们必须先回答前面那个问题。倘若真如尼采所言，一个哲学家要想配得上敬重，就必须以身作则，那么这个回答的分量便不言自明了，因为它直接先于那个不可挽回的最终举动。这些原本是[心灵可直接感触的明证]{#g-evidences-coeur}，却必须加以深究，方能向理智显明。',
      glosses: [
        {
          id: 'g-categories',
          anchor: '心智究竟拥有九个还是十二个范畴',
          content:
            '十二个范畴指康德在《纯粹理性批判》中按量、质、关系、模态四组排列的十二先验知性范畴；九个范畴则指亚里士多德《范畴篇》十范畴中除去第一实体后的九种偶性范畴。'
        },
        {
          id: 'g-evidences-coeur',
          anchor: '心灵可直接感触的明证',
          content:
            '化用帕斯卡《思想录》中「心灵秩序（cœur）」与「理智秩序（esprit）」的对立：帕斯卡认为第一原理是由心灵直接感触的，理智则负责随后的推演证明。'
        }
      ]
    },
    {
      id: 's1-p02',
      type: 'paragraph',
      num: '§ 02',
      fr: "Si je me demande à quoi juger que telle question est plus pressante que telle autre, je réponds que c'est aux actions qu'elle engage. Je n'ai jamais vu personne mourir pour l'argument ontologique. Galilée, qui tenait une vérité scientifique d'importance, l'abjura le plus aisément du monde dès qu'elle mit sa vie en péril. Dans un certain sens, il fit bien. Cette vérité ne valait pas le bûcher. Qui de la terre ou du soleil tourne autour de l'autre, cela est profondément indifférent. Pour tout dire, c'est une question futile. En revanche, je vois que beaucoup de gens meurent parce qu'ils estiment que la vie ne vaut pas la peine d'être vécue. J'en vois d'autres qui se font paradoxalement tuer pour les idées ou les illusions qui leur donnent une raison de vivre (ce qu'on appelle une raison de vivre est en même temps une excellente raison de mourir). Je juge donc que le sens de la vie est la plus pressante des questions. Comment y répondre ? Sur tous les problèmes essentiels, j'entends par là ceux qui risquent de faire mourir ou ceux qui décuplent la passion de vivre, il n'y a probablement que deux méthodes de pensée, celle de La Palisse et celle de Don Quichotte. C'est l'équilibre de l'évidence et du lyrisme qui peut seul nous permettre d'accéder en même temps à l'émotion et à la clarté. Dans un sujet à la fois si humble et si chargé de pathétique, la dialectique savante et classique doit donc céder la place, on le conçoit, à une attitude d'esprit plus modeste qui procède à la fois du bon sens et de la sympathie.",
      zh: '倘若自问：凭什么断定某个问题比另一个问题更为迫切？我的回答是：凭它所牵动的行动。我从未见过有人为[本体论证明]{#g-ontologique}而赴死。手握重大科学真理的伽利略，一旦发现这真理危及性命，便无比从容地发誓将其弃绝。从某种意义上说，他做得很对。那条真理并不值得上火刑柱。地球与太阳究竟谁绕着谁转，这在根本上无足轻重。说穿了，那是个无关痛痒的问题。相反，我看见许多人死去，是因为他们断定生命不值得活；我又看见另一些人，诡谬地为了那些赋予他们生存理由的观念或幻觉而送命（人们所谓的生存理由，往往同时也是极佳的赴死理由）。由此我判定，生命的意义是一切问题中最紧迫的一个。该如何作答？在所有根本问题上——我指的是那些足以置人于死地，或令生存激情暴涨十倍的问题——思想的方法恐怕只有两种：[拉帕利斯的方法与堂吉诃德的方法]{#g-lapalisse}。唯有在**明证**与**抒情**之间求得平衡，我们才可能同时抵达动情与澄明。面对这样一个既如此卑微、又如此饱含悲剧张力的主题，博学而古典的辩证法理当退位，让位于一种更为谦抑、兼采常理与同情的心智姿态。',
      glosses: [
        {
          id: 'g-ontologique',
          anchor: '本体论证明',
          content:
            '中世纪神学家安瑟伦在《宣讲篇》中提出、后经笛卡尔与莱布尼茨发展的经院哲学论证：既然上帝按定义是「最完满的存在者」，而「存在」属于完满性的一部分，那么上帝必然存在。'
        },
        {
          id: 'g-lapalisse',
          anchor: '拉帕利斯的方法与堂吉诃德的方法',
          content:
            '拉帕利斯（La Palisse，1470—1525）是阵亡于帕维亚战役的法国元帅，因挽歌被后世讹传为「他在死前十五分钟还活着」，在法国文化中成为「不言自明的大白话、朴素常识」的代名词（法语遂有 lapalissade 一词）。'
        }
      ]
    },
    {
      id: 's1-p03',
      type: 'paragraph',
      num: '§ 03',
      fr: "On n'a jamais traité du suicide que comme d'un phénomène social. Au contraire, il est question ici, pour commencer, du rapport entre la pensée individuelle et le suicide. Un geste comme celui-ci se prépare dans le silence du cœur au même titre qu'une grande œuvre. L'homme lui-même l'ignore. Un soir, il tire ou il plonge. D'un gérant d'immeubles qui s'était tué, on me disait un jour qu'il avait perdu sa fille depuis cinq ans, qu'il avait beaucoup changé depuis et que cette histoire « l'avait miné ». On ne peut souhaiter de mot plus exact. Commencer à penser, c'est commencer d'être miné. La société n'a pas grand-chose à voir dans ces débuts. Le ver se trouve au cœur de l'homme. C'est là qu'il faut le chercher. Ce jeu mortel qui mène de la lucidité en face de l'existence à l'évasion hors de la lumière, il faut le suivre et le comprendre.",
      zh: '人们向来只把自杀当作一种[社会现象]{#g-social}来讨论。相反，这里首先要追问的，是个体思想与自杀之间的关联。这样一个举动，同一部伟大作品一样，是在心灵的静默中酝酿成熟的。连当事人自己都浑然不觉。某个夜晚，他扣动扳机，或纵身入水。曾有一位公寓管理员自尽，有人后来对我说起，他五年前痛失爱女，自那以后性情大变，那桩变故「从内里掏空了他」。再没有比这个词更精准的了。**开始思想，就是开始被从内里掏空。**在这些隐秘的开端处，社会根本无足轻重。蛀虫就潜伏在人心深处，必须在那里搜寻它。这场从直面生存的澄明清醒、一步步走向逃离光明的致命博弈，我们必须追踪到底，并将其洞穿。',
      glosses: [
        {
          id: 'g-social',
          anchor: '社会现象',
          content:
            '指向法国社会学奠基人涂尔干（Émile Durkheim）1897 年的专著《自杀论》（Le Suicide）：涂尔干主张自杀率取决于社会整合与道德规范的程度，与个体私密的哲学思辨无关。'
        }
      ]
    },
    {
      id: 's1-p04',
      type: 'paragraph',
      num: '§ 04',
      fr: "Il y a beaucoup de causes à un suicide et d'une façon générale les plus apparentes n'ont pas été les plus efficaces. On se suicide rarement (l'hypothèse cependant n'est pas exclue) par réflexion. Ce qui déclenche la crise est presque toujours incontrôlable. Les journaux parlent souvent de « chagrins intimes » ou de « maladie incurable ». Ces explications sont valables. Mais il faudrait savoir si le jour même un ami du désespéré ne lui a pas parlé sur un ton indifférent. Celui-là est le coupable. Car cela peut suffire à précipiter toutes les rancœurs et toutes les lassitudes encore en suspension[^fn-1].",
      zh: '促成一桩自杀的诱因有很多，而一般说来，最显眼的往往并非最致命的。很少有人（尽管不能完全排除这种假定）是经过深思熟虑而自杀的。引爆危机的导火索几乎总是无从捉摸。报纸上常归结为「隐秘的哀伤」或「不治之症」。这些解释固然说得通。但我们更应当追问：就在当天，这位绝望者的某个朋友，是否曾用冷淡的语气同他说过一句话？那个人才是真凶。因为仅仅这一丝冷淡，就足以让原本还悬浮未决的一切怨怼与倦怠瞬间析出、倾覆[^fn-1]。',
      authorNotes: [
        {
          id: 'fn-1',
          fr: "Ne manquons pas l’occasion de marquer le caractère relatif de cet essai. Le suicide peut en effet se rattacher à des considérations beaucoup plus honorables. Exemple : les suicides politiques dits de protestation, dans la révolution chinoise.",
          zh: '不妨借此机会标明本篇随笔的相对性质。事实上，自杀完全可能源于崇高得多的考量。例如：中国革命中被称为「抗议性自杀」的政治殉道。'
        }
      ]
    },
    {
      id: 's1-p05',
      type: 'paragraph',
      num: '§ 05',
      fr: "Mais, s'il est difficile de fixer l'instant précis, la démarche subtile où l'esprit a parié pour la mort, il est plus aisé de tirer du geste lui-même les conséquences qu'il suppose. Se tuer, dans un sens, et comme au mélodrame, c'est avouer. C'est avouer qu'on est dépassé par la vie ou qu'on ne la comprend pas. N'allons pas trop loin cependant dans ces analogies et revenons aux mots courants. C'est seulement avouer que cela « ne vaut pas la peine ». Vivre, naturellement, n'est jamais facile. On continue à faire les gestes que l'existence commande, pour beaucoup de raisons dont la première est l'habitude. Mourir volontairement suppose qu'on a reconnu, même instinctivement, le caractère dérisoire de cette habitude, l'absence de toute raison profonde de vivre, le caractère insensé de cette agitation quotidienne et l'inutilité de la souffrance.",
      zh: '然而，即便很难锁定心智押注于死亡的那个确切瞬间与幽微步履，要从自杀这一举动本身推导出它所预设的后果，却容易得多。自我了断，在某种意义上，就像通俗剧里演的那样，是一场招认：招认自己被生活压垮了，或者根本读不懂生活。不过，我们不必在这些比拟上走得太远，还是回到日常用语吧。那不过是承认这一切「不值得费神」。诚然，活着从来不易。人们之所以继续做出生存所要求的种种动作，背后有许多原因，而首要的一条便是习惯。自愿赴死，意味着一个人哪怕只是凭直觉，也已经认清了这种习惯的可笑性质、深刻生存理由的彻底缺席、日常奔忙的无稽，以及痛苦的徒劳无益。'
    },
    {
      id: 's1-p06',
      type: 'paragraph',
      num: '§ 06',
      fr: "Quel est donc cet incalculable sentiment qui prive l'esprit du sommeil nécessaire à sa vie ? Un monde qu'on peut expliquer même avec de mauvaises raisons est un monde familier. Mais au contraire, dans un univers soudain privé d'illusions et de lumières, l'homme se sent un étranger. Cet exil est sans recours puisqu'il est privé des souvenirs d'une patrie perdue ou de l'espoir d'une terre promise. Ce divorce entre l'homme et sa vie, l'acteur et son décor, c'est proprement le sentiment de l'absurdité. Tous les hommes sains ayant songé à leur propre suicide, on pourra reconnaître, sans plus d'explications, qu'il y a un lien direct entre ce sentiment et l'aspiration vers le néant.",
      zh: '那么，这股剥夺了心智赖以维生的安眠、无从估量的情感究竟是什么？一个哪怕用拙劣理由也能解释得通的世界，依然是个熟稔的世界。反之，在一个骤然被剥夺了幻觉与光亮的宇宙里，[人感到自己是个局外异乡人。这场流放毫无救赎可言，因为它既没有失落故土的回忆，也没有应许之地的希望]{#g-exil}。人与自身生活、演员与舞台布景之间的这场离异，正是严格意义上的**荒谬感**。既然所有健全的人都曾动过自杀的念头，那么无须赘言便可承认，这种荒谬感与趋向虚无的渴望之间，存在着一条直接的纽带。',
      glosses: [
        {
          id: 'g-exil',
          anchor: '人感到自己是个局外异乡人。这场流放毫无救赎可言，因为它既没有失落故土的回忆，也没有应许之地的希望',
          content:
            '《西西弗神话》与小说《局外人》（L’Étranger）于 1942 年同年出版，此处「局外异乡人（un étranger）」正是两部作品共同的枢纽。「失落故土」对应柏拉图主义的灵魂先在回忆与伊甸园，「应许之地」则对应《旧约》迦南地与犹太—基督教的末世救赎。'
        }
      ]
    },
    {
      id: 's1-p07',
      type: 'paragraph',
      num: '§ 07',
      fr: "Le sujet de cet essai est précisément ce rapport entre l'absurde et le suicide, la mesure exacte dans laquelle le suicide est une solution à l'absurde. On peut poser en principe que pour un homme qui ne triche pas, ce qu'il croit vrai doit régler son action. La croyance dans l'absurdité de l'existence doit donc commander sa conduite. C'est une curiosité légitime de se demander, clairement et sans faux pathétique, si une conclusion de cet ordre exige que l'on quitte au plus vite une condition incompréhensible. Je parle ici, bien entendu, des hommes disposés à se mettre d'accord avec eux-mêmes.",
      zh: '本篇随笔的主题，恰恰就是荒谬与自杀之间的这一关系，即自杀究竟在多大程度上构成荒谬的解决之道。原则上我们可以确立：对于一个不作弊的人而言，他信以为真的东西必定规范着他的行动。因此，认定生存荒谬这一信念，理当统摄他的行事。清醒而不带廉价煽情地追问一句「此类结论是否要求人尽早逃离这不可理喻的境况」，完全是合情合理的求知欲。当然，我在这里谈论的，是那些愿意让自身言行一致的人。'
    },
    {
      id: 's1-p08',
      type: 'paragraph',
      num: '§ 08',
      fr: "Posé en termes clairs, ce problème peut paraître à la fois simple et insoluble. Mais on suppose à tort que des questions simples entraînent des réponses qui ne le sont pas moins et que l'évidence implique l'évidence. A priori, et en inversant les termes du problème, de même qu'on se tue ou qu'on ne se tue pas, il semble qu'il n'y ait que deux solutions philosophiques, celle du oui et celle du non. Ce serait trop beau. Mais il faut faire la part de ceux qui, sans conclure, interrogent toujours. Ici, j'ironise à peine : il s'agit de la majorité. Je vois également que ceux qui répondent non agissent comme s'ils pensaient oui. De fait, si j'accepte le critérium nietzschéen, ils pensent oui d'une façon ou de l'autre. Au contraire, ceux qui se suicident, il arrive souvent qu'ils étaient assurés du sens de la vie. Ces contradictions sont constantes. On peut même dire qu'elles n'ont jamais été aussi vives que sur ce point où la logique au contraire paraît si désirable. C'est un lieu commun de comparer les théories philosophiques et la conduite de ceux qui les professent. Mais il faut bien dire que parmi les penseurs qui refusèrent un sens à la vie, aucun, sauf Kirilov qui appartient à la littérature, Peregrinos qui naît de la légende[^fn-2] et Jules Lequier qui relève de l'hypothèse, n'accorda sa logique jusqu'à refuser cette vie. On cite souvent, pour en rire, Schopenhauer qui faisait l'éloge du suicide devant une table bien garnie. Il n'y a point là matière à plaisanterie. Cette façon de ne pas prendre le tragique au sérieux n'est pas si grave, mais elle finit par juger son homme.",
      zh: '用清晰的语言摆出来，这个问题看似既简单又无解。但人们错误地假定，简单的问题必定引出同样简单的答案，明证必定推出明证。先验地看，倘若把问题的项倒转过来，正如同人要么自杀、要么不自杀，哲学上的解答似乎也只有两个：说「是」或说「不」。那未免太美妙了。因为我们还得算上那些既不下结论、却又永远在发问的人。我这话几乎不算反讽：大多数人正是如此。我同样看到，那些口头上回答「不」的人，行动起来却仿佛心里想的是「是」。事实上，假如采纳尼采的评判尺度，他们无论如何都是在想「是」。反过来，那些真正自杀的人，往往倒是些原本深信生命自有意义的人。这类矛盾比比皆是。甚至可以说，在最迫切需要逻辑的这个节骨眼上，矛盾偏偏最为尖锐。拿哲学理论去对照其宣讲者的实际行止，本是老生常谈；但不得不说，在那些否定生命意义的思想家当中，除了属于文学虚构的[基里洛夫]{#g-kirilov}、源于传说的[佩雷格里诺斯]{#g-peregrinos}[^fn-2]，以及仅属猜测的[朱尔·勒基耶]{#g-lequier}之外，竟无一人将自己的逻辑贯彻到底、亲手拒绝这一生命。人们常当笑话提起叔本华，说他在丰盛的餐桌前大肆礼赞自杀。这其实毫不好笑。这种不把悲剧当回事的做派本身虽不算多严重的罪过，却到底给其人下了判词。',
      authorNotes: [
        {
          id: 'fn-2',
          fr: "J’ai entendu parler d’un émule de Peregrinos, écrivain de l’après-guerre, qui après avoir terminé son premier livre se suicida pour attirer l’attention sur son œuvre. L’attention en effet fut attirée mais le livre jugé mauvais.",
          zh: '我曾听说过一位佩雷格里诺斯的效仿者，是战后的一名作家，写完处女作后便自杀了，只为吸引世人关注他的作品。关注固然是引来了，但那本书却被评为拙劣之作。'
        }
      ],
      glosses: [
        {
          id: 'g-kirilov',
          anchor: '基里洛夫',
          content:
            '陀思妥耶夫斯基小说《群魔》中的核心人物。基里洛夫推演出一套「逻辑自杀」：既然上帝不存在，那么人就是自己的上帝；而为了证明这种最高的主权与绝对自由，人必须毫无恐惧地亲手杀死自己。'
        },
        {
          id: 'g-peregrinos',
          anchor: '佩雷格里诺斯',
          content:
            '佩雷格里诺斯（Peregrinus Proteus，约 95—165），古希腊犬儒派哲人。据古罗马讽刺作家琉善记载，他在公元 165 年奥林匹亚赛会闭幕之际，当众跳入自己搭建的火葬柴堆自焚，以向世人演示犬儒派对死亡的彻底蔑视。'
        },
        {
          id: 'g-lequier',
          anchor: '朱尔·勒基耶',
          content:
            '朱尔·勒基耶（Jules Lequier，1814—1862），法国哲学家，一生困于自由意志与宿命论的悖论。1862 年 2 月，他在布列塔尼海岸脱衣游向冰冷的大西洋深处溺亡。后世始终无法断定他是意外力竭，还是向上帝发起了一场「游到力竭处看上帝是否出手相救」的赌注式自杀，故加缪称其「仅属猜测」。加缪的哲学导师让·格勒尼耶正是研究勒基耶的专家。'
        }
      ]
    },
    {
      id: 's1-p09',
      type: 'paragraph',
      num: '§ 09',
      fr: "Devant ces contradictions et ces obscurités, faut-il donc croire qu'il n'y a aucun rapport entre l'opinion qu'on peut avoir sur la vie et le geste qu'on fait pour la quitter ? N'exagérons rien dans ce sens. Dans l'attachement d'un homme à sa vie, il y a quelque chose de plus fort que toutes les misères du monde. Le jugement du corps vaut bien celui de l'esprit et le corps recule devant l'anéantissement. Nous prenons l'habitude de vivre avant d'acquérir celle de penser. Dans cette course qui nous précipite tous les jours un peu plus vers la mort, le corps garde cette avance irréparable. Enfin, l'essentiel de cette contradiction réside dans ce que j'appellerai l'esquive parce qu'elle est à la fois moins et plus que le divertissement au sens pascalien. L'esquive mortelle qui fait le troisième thème de cet essai, c'est l'espoir. Espoir d'une autre vie qu'il faut « mériter », ou tricherie de ceux qui vivent non pour la vie elle-même, mais pour quelque grande idée qui la dépasse, la sublime, lui donne un sens et la trahit.",
      zh: '面对这些矛盾与晦暗，难道应该认为，一个人对生命所持的见解，与他决心离世的举动之间毫无关联吗？这倒也不必夸大其词。在人对生命的依恋里，存在着某种比世间一切苦难都更顽强的东西。肉体的判断丝毫不逊于心智的判断，而肉体本能地抗拒灰飞烟灭。我们在养成思想的习惯之前，早已先养成了活着的习惯。在这场日复一日把我们推向死亡的竞跑中，肉体始终保持着这一段无可弥补的领先优势。最后，这一矛盾的核心，在于我称之为[「闪避」]{#g-esquive}的机制——它既不及帕斯卡意义上的「消遣」，却又比那走得更远。构成这篇随笔第三大母题的致命闪避，便是**希望**。无论是希望死后有另一重必须靠修持去「配得上」的来生，还是那些并非为了生命本身而活、却为了某种超越生命、升华生命、赋予生命意义并最终背叛生命的宏大观念而活的人所玩的作弊把戏。',
      glosses: [
        {
          id: 'g-esquive',
          anchor: '「闪避」',
          content:
            '帕斯卡在《思想录》中以「消遣（divertissement，原义为转移视线、分心）」剖析世人为何热衷打猎、赌博、社交与政务：人之所以终日寻觅喧嚣与忙碌，是为了转移注意力，逃避独处时对自身必死处境与虚无的直视。'
        }
      ]
    },
    {
      id: 's1-p10',
      type: 'paragraph',
      num: '§ 10',
      fr: "Tout contribue ainsi à brouiller les cartes. Ce n'est pas en vain qu'on a jusqu'ici joué sur les mots et feint de croire que refuser un sens à la vie conduit forcément à déclarer qu'elle ne vaut pas la peine d'être vécue. En vérité, il n'y a aucune mesure forcée entre ces deux jugements. Il faut seulement refuser de se laisser égarer par les confusions, les divorces et les inconséquences jusqu'ici signalés. Il faut tout écarter et aller droit au vrai problème. On se tue parce que la vie ne vaut pas la peine d'être vécue, voilà une vérité sans doute — inféconde cependant parce qu'elle est truisme. Mais est-ce que cette insulte à l'existence, ce démenti où on la plonge vient de ce qu'elle n'a point de sens ? Est-ce que son absurdité exige qu'on lui échappe, par l'espoir ou le suicide, voilà ce qu'il faut mettre à jour, poursuivre et illustrer en écartant tout le reste. L'absurde commande-t-il la mort, il faut donner à ce problème le pas sur les autres, en dehors de toutes les méthodes de pensée et des jeux de l'esprit désintéressé. Les nuances, les contradictions, la psychologie qu'un esprit « objectif » sait toujours introduire dans tous les problèmes, n'ont pas leur place dans cette recherche et cette passion. Il y faut seulement une pensée injuste, c'est-à-dire logique. Cela n'est pas facile. Il est toujours aisé d'être logique. Il est presque impossible d'être logique jusqu'au bout. Les hommes qui meurent de leurs propres mains suivent ainsi jusqu'à sa fin la pente de leur sentiment. La réflexion sur le suicide me donne alors l'occasion de poser le seul problème qui m'intéresse : y a-t-il une logique jusqu'à la mort ? Je ne puis le savoir qu'en poursuivant sans passion désordonnée, dans la seule lumière de l'évidence, le raisonnement dont j'indique ici l'origine. C'est ce que j'appelle un raisonnement absurde. Beaucoup l'ont commencé. Je ne sais pas encore s'ils s'y sont tenus.",
      zh: '就这样，一切都在把牌局搅浑。人们迄今在字眼上捉迷藏，佯装相信「否定生命具有意义」就必然导出「生命不值得活下去」，绝非偶然。其实，这两个判断之间并无任何必然的等号。我们只需拒绝被上文指出的种种混淆、脱节与言行不一所误导，拨开一切枝蔓，直取真正的问题。人自杀是因为生命不值得活，这固然是不争的事实——却是个不毛的事实，因为它不过是句同义反复的废话。但真正需要揪出来、追到底并彻底阐明的是：这种对生存的侮辱、这种将生存推入其中的全盘否定，果真源于生命毫无意义吗？生命的荒谬，果真要求我们通过**希望**或**自杀**去逃离它吗？**荒谬是否必然指令死亡**——这个问题必须优先于其他一切问题，超然于一切思维方法与无利害关系的智力游戏之外。一个所谓「客观」的头脑总懂得往任何问题里塞进微妙的折中、矛盾与心理学分析，但在这场探索与这股激情里，它们毫无容身之地。这里只需要一种不公允的思想，也就是说，彻底讲逻辑的思想。这绝非易事。讲逻辑总是容易的；但**把逻辑贯彻到底，却几乎是不可能的**。亲手结束自己生命的人，便是沿着情感的斜坡一直滑到了底。由是，对自杀的省思给了我一个契机，去提出唯一令我感兴趣的问题：**是否存在一种贯彻至死的逻辑？**要获知答案，我只能摒弃杂乱的激情，单凭明证之光，将我在此标明起点的那条推理一路推演下去。这就是我所说的**荒谬的推理**。许多人曾开启过它；但我尚不知晓，他们是否真正坚守到了最后。'
    },
    {
      id: 's1-p11',
      type: 'paragraph',
      num: '§ 11',
      fr: "Lorsque Karl Jaspers, révélant l'impossibilité de constituer le monde en unité, s'écrie : « Cette limitation me conduit à moi-même, là où je ne me retire plus derrière un point de vue objectif que je ne fais que représenter, là où ni moi-même ni l'existence d'autrui ne peut plus devenir objet pour moi », il évoque après bien d'autres ces lieux déserts et sans eau où la pensée arrive à ses confins. Après bien d'autres, oui sans doute, mais combien pressés d'en sortir ! À ce dernier tournant où la pensée vacille, beaucoup d'hommes sont arrivés et parmi les plus humbles. Ceux-là abdiquaient alors ce qu'ils avaient de plus cher qui était leur vie. D'autres, princes parmi l'esprit, ont abdiqué aussi, mais c'est au suicide de leur pensée, dans sa révolte la plus pure, qu'ils ont procédé. Le véritable effort est de s'y tenir au contraire, autant que cela est possible et d'examiner de près la végétation baroque de ces contrées éloignées. La ténacité et la clairvoyance sont des spectateurs privilégiés pour ce jeu inhumain où l'absurde, l'espoir et la mort échangent leurs répliques. Cette danse à la fois élémentaire et subtile, l'esprit peut alors en analyser les figures avant de les illustrer et de les revivre lui-même.",
      zh: '当[雅斯贝尔斯]{#g-jaspers-1}揭示出世界不可能被统合为一个整体，并疾呼：「这一界限将我引回自身——在那里，我不再退缩到某个仅由我代为陈述的客观视角背后；在那里，无论我自己还是他人的存在，都不再可能成为我的客体。」他同许多前人一样，唤出了那片思想抵达自身尽头时的无水荒漠。诚然是步许多前人的后尘，但那些人又是何等急不可耐地想要逃离这片荒漠啊！在思想摇摇欲坠的这最后一个拐角处，许多人都曾抵达过，其中不乏最卑微的凡人。那些凡人交出了自己最珍贵的东西，即他们的生命。另一些人，[那些精神王国的王侯，同样交出了王冠，只不过他们是在思想最纯粹的叛逆中，亲手实施了思想的自杀]{#g-princes}。然而，真正的努力恰恰在于尽一切可能**坚守在那里**，贴近审视这片遥远边地上的奇异植被。在这场非人的戏剧中，荒谬、希望与死亡彼此对答，而坚韧与明澈正是享有特权的观剧者。心智由此可以先剖析这支既原始又幽微的舞蹈的种种舞步，继而再去亲自演绎、亲身重历。',
      glosses: [
        {
          id: 'g-jaspers-1',
          anchor: '雅斯贝尔斯',
          content:
            '卡尔·雅斯贝尔斯（Karl Jaspers，1883—1969），德国存在哲学代表人物。他在《哲学》（1932）中提出著名的「界限处境（Grenzsituationen）」：当人在死亡、痛苦、罪责与斗争中撞上理性无法统合的绝境时，客观科学知识宣告失效，人被迫退回孤独的自我存在。'
        },
        {
          id: 'g-princes',
          anchor: '那些精神王国的王侯，同样交出了王冠，只不过他们是在思想最纯粹的叛逆中，亲手实施了思想的自杀',
          content:
            '与前句放弃肉体生命的凡人相对，「精神王国的王侯」指克尔凯郭尔、舍斯托夫、雅斯贝尔斯等现代存在哲学家。'
        }
      ]
    }
  ]
};
