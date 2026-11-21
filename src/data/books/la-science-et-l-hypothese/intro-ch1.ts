import type { BookSection } from '../../../types/book';

export const poincareIntroCh1Sections: BookSection[] = [
  {
    id: 'introduction',
    roman: 'Introduction',
    titleOriginal: 'Introduction',
    titleZh: '作者引言',
    aiModel: 'Gemini-4-Carbon',
    blocks: [
      {
        id: 'sh-intro-p01',
        type: 'paragraph',
        num: '§ 01',
        fr: 'Pour un observateur superficiel, la vérité scientifique est hors des atteintes du doute ; la logique de la science est infaillible et, si les savants se trompent quelquefois, c’est pour en avoir méconnu les règles.',
        zh: '在浮光掠影的观察者看来，[科学真理]{#g-sh-intro-01}是怀疑所无法触及的；科学的逻辑万无一失，倘若科学家偶尔犯错，那也只是因为他们未能认清其中的法则。',
        glosses: [
          {
            id: 'g-sh-intro-01',
            anchor: '科学真理',
            content:
              '《科学与假设》（La Science et l’Hypothèse）于 1902 年秋由巴黎弗拉马里翁出版社（Ernest Flammarion）出版，是居斯塔夫·勒庞（Gustave Le Bon）主持创设的「科学哲学丛书」（Bibliothèque de philosophie scientifique）首卷。庞加莱将自己 1891 至 1901 年间先后发表于《纯科学与应用科学总评论》（Revue générale des sciences pures et appliquées）、《形而上学与道德评论》（Revue de métaphysique et de morale，1893 年由泽维尔·莱昂 Xavier Léon 与埃利·阿莱维 Élie Halévy 创办）及国际哲学与数学大会上的多篇认识论论文与索邦大学讲义加以统合修订，按「算术与量—几何空间—经典力学—实验物理」的层级编为四编十四章（1907 年增订版补入第十四章《物质的终结》）。本上卷完整收录全书《作者引言》及第一编《数与量》（第一至二章）、第二编《空间》（第三至五章）。'
          }
        ]
      },
      {
        id: 'sh-intro-p02',
        type: 'paragraph',
        num: '§ 02',
        fr: 'Les vérités mathématiques dérivent d’un petit nombre de propositions évidentes par une chaîne de raisonnements impeccables ; elles s’imposent non seulement à nous, mais à la nature elle-même. Elles enchaînent pour ainsi dire le Créateur et lui permettent seulement de choisir entre quelques solutions relativement peu nombreuses. Il suffira alors de quelques expériences pour nous faire savoir quel choix il a fait. De chaque expérience, une foule de conséquences pourront sortir par une série de déductions mathématiques, et c’est ainsi que chacune d’elles nous fera connaître un coin de l’Univers.',
        zh: '数学真理凭借一条无懈可击的推理锁链，从少数几条自明的命题中推演而出；它们不仅强加于我们，也强加于自然本身。不妨说，它们束缚了造物主的手脚，只容许他在相对不多的几种方案之间作出抉择。于是，只需寥寥数次实验，便足以让我们知晓他作出了何种选择。从每一次实验中，都能借一连串数学演绎引出成批的推论，而每一次实验也就这样向我们揭示出宇宙的一角。'
      },
      {
        id: 'sh-intro-p03',
        type: 'paragraph',
        num: '§ 03',
        fr: 'Voilà quelle est pour bien des gens du monde, pour les lycéens qui reçoivent les premières notions de physique, l’origine de la certitude scientifique. Voilà comment ils comprennent le rôle de l’expérimentation et des mathématiques. C’est ainsi également que le comprenaient, il y a cent ans, beaucoup de savants qui rêvaient de construire le monde en empruntant à l’expérience aussi peu de matériaux que possible.',
        zh: '对于许多社交界人士，对于刚刚接触物理学初步概念的中学高年级学生而言，这便是科学确定性的由来；他们正是这样理解实验与数学各自的作用的。[一百年前，许多梦想尽可能少向经验借取材料便构建起整个世界的科学家]{#g-sh-intro-02}，也同样抱有这种理解。',
        glosses: [
          {
            id: 'g-sh-intro-02',
            anchor: '一百年前，许多梦想尽可能少向经验借取材料便构建起整个世界的科学家',
            content:
              '指十八世纪末至十九世纪初以约瑟夫-路易·拉格朗日（Joseph-Louis Lagrange，1736—1813）与皮埃尔-西蒙·拉普拉斯（Pierre-Simon Laplace，1749—1827）为代表的法国分析力学与数理物理学派。拉格朗日在《分析力学》（Mécanique analytique，1788）序言中宣称全书不绘一幅几何图形，仅凭代数分析与虚速度原理即可推演全部静力学与动力学命题；拉普拉斯则在《宇宙体系论》（1796）与五卷本《天体力学》（1799—1825）中倡导「拉普拉斯纲领」，试图仅借质点间的有心力定律与极少数经验常数，将天体运行乃至毛细现象、光的折射、热与分子内聚力悉数纳入统一的数学演绎体系。'
          }
        ]
      },
      {
        id: 'sh-intro-p04',
        type: 'paragraph',
        num: '§ 04',
        fr: 'Quand on a un peu plus réfléchi, on a aperçu la place tenue par l’hypothèse ; on a vu que le mathématicien ne saurait s’en passer et que l’expérimentateur ne s’en passe pas davantage. Et alors, on s’est demandé si toutes ces constructions étaient bien solides et on a cru qu’un souffle allait les abattre. Être sceptique de cette façon, c’est encore être superficiel. Douter de tout ou tout croire, ce sont deux solutions également commodes, qui l’une et l’autre nous dispensent de réfléchir.',
        zh: '当人们再多作一番思索，便看出了假设所占据的位置；人们看到，数学家离不开假设，实验家也同样离不开它。于是，人们不禁怀疑所有这些理论大厦是否真那么牢固，甚至以为一阵微风就会将它们吹倒。抱持这样的怀疑态度，依然不免肤浅。**怀疑一切或盲信一切，是两种同样便利的解决办法，二者都让我们免去了思考的劳苦。**'
      },
      {
        id: 'sh-intro-p05',
        type: 'paragraph',
        num: '§ 05',
        fr: 'Au lieu de prononcer une condamnation sommaire, nous devons donc examiner avec soin le rôle de l’hypothèse ; nous reconnaîtrons alors, non seulement qu’il est nécessaire, mais que le plus souvent il est légitime. Nous verrons aussi qu’il y a plusieurs sortes d’hypothèses, que les unes sont vérifiables et qu’une fois confirmées par l’expérience, elles deviennent des vérités fécondes ; que les autres, sans pouvoir nous induire en erreur, peuvent nous être utiles en fixant notre pensée, que d’autres enfin ne sont des hypothèses qu’en apparence et se réduisent à des définitions ou à des conventions déguisées.',
        zh: '因此，与其草率地一笔抹杀，我们不如审慎地考察假设的作用；届时我们便会认识到，假设不仅是必要的，而且在大多数时候也是正当的。我们还将看到，假设分好几种：有些假设是可以检验的，一旦得到经验的证实，便成为富有成效的真理；另一些假设虽不至于把我们引入歧途，却能通过固定我们的思路而为我们所用；最后还有一些假设，只是表面上看来像假设，实则归结为定义或**乔装的约定**。'
      },
      {
        id: 'sh-intro-p06',
        type: 'paragraph',
        num: '§ 06',
        fr: 'Ces dernières se rencontrent surtout dans les mathématiques et dans les sciences qui y touchent. C’est justement de là que ces sciences tirent leur rigueur ; ces conventions sont l’œuvre de la libre activité de notre esprit, qui, dans ce domaine, ne reconnaît pas d’obstacle. Là, notre esprit peut affirmer parce qu’il décrète ; mais entendons-nous : ces décrets s’imposent à notre science, qui, sans eux, serait impossible ; ils ne s’imposent pas à la nature. Ces décrets, pourtant, sont-ils arbitraires ? Non, sans cela ils seraient stériles. L’expérience nous laisse notre libre choix, mais elle le guide en nous aidant à discerner le chemin le plus commode. Nos décrets sont donc comme ceux d’un prince absolu, mais sage, qui consulterait son Conseil d’État.',
        zh: '最后这一类假设主要见于数学以及与之毗邻的各门科学之中。这些科学正是从中汲取了自身的严密性；此类约定是我们心智自由活动的产物，在这一领域内，心智不承认任何阻碍。在那里，我们的心智之所以能够作出断言，是因为它在颁布法令；但我们必须把话说清楚：这些法令只强加于我们的科学——没有它们，科学便无从建立——却并不强加于自然。然而，这些法令难道是武断任意的吗？并非如此，否则它们就会贫瘠无果。经验为我们保留了自由选择的余地，但又通过帮助我们辨识哪一条道路最为便利来引导这一选择。因此，我们的法令就好比一位握有绝对权力却又明智的君主，在颁诏之前会先征询[参政院]{#g-sh-intro-03}的意见。',
        glosses: [
          {
            id: 'g-sh-intro-03',
            anchor: '参政院',
            content:
              '法语 Conseil d’État（法国参政院，亦译国务委员会），渊源于旧制度时期的国王御前会议（Conseil du Roi），由拿破仑于 1799 年按《共和八年宪法》正式重建。在法国公法体制下，参政院汇集技术与法制专家，负责起草法案并就行政与立法事务向国家元首提供咨询意见（avis），但咨询意见本身不具主权强制力，法令唯有经元首裁夺签署方才生效。'
          }
        ]
      },
      {
        id: 'sh-intro-p07',
        type: 'paragraph',
        num: '§ 07',
        fr: 'Quelques personnes ont été frappées de ce caractère de libre convention qu’on reconnaît dans certains principes fondamentaux des sciences. Elles ont voulu généraliser outre mesure et en même temps elles ont oublié que la liberté n’est pas l’arbitraire. Elles ont abouti ainsi à ce que l’on appelle le nominalisme et elles se sont demandé si le savant n’est pas dupe de ses définitions et si le monde qu’il croit découvrir n’est pas tout simplement créé par son caprice [1]. Dans ces conditions, la science serait certaine, mais dépourvue de portée.',
        zh: '有些人注意到了科学的若干基本原理中所具有的这种自由约定性质。他们想要将其作漫无节制的推广，同时却忘记了**自由并非武断任意**。他们由此走向了所谓的[唯名论]{#g-sh-intro-04}，甚至怀疑科学家是不是受了自己所下定义的愚弄，怀疑科学家自以为发现的那个世界是不是纯粹由他的一时任性凭空造出来的[^sh-fn-intro-1]。果真如此，科学固然确凿无疑，却也将毫无实质效力。',
        authorNotes: [
          {
            id: 'sh-fn-intro-1',
            fr: 'Voir M. Le Roy, Science et Philosophie. (Revue de Métaphysique et de Morale, 1901.)',
            zh: '参见勒鲁瓦先生，《科学与哲学》（载《形而上学与道德评论》，1901 年）。'
          }
        ],
        glosses: [
          {
            id: 'g-sh-intro-04',
            anchor: '唯名论',
            content:
              '此处「唯名论」（nominalisme）特指十九世纪末至二十世纪初法国科学哲学界围绕爱德华·勒鲁瓦（Édouard Le Roy，1870—1954）展开的「科学唯名论」论争。勒鲁瓦出身巴黎高等师范学院数学系，后师从柏格森并接任其法兰西公学哲学教席；他在 1899 至 1900 年连载于《形而上学与道德评论》的《科学与哲学》（Science et philosophie）及 1901 年续篇《一种新实证主义》（Un positivisme nouveau）中，将庞加莱关于几何公设的约定论推向极端，宣称不仅科学定律只是方便实用的语言符号定义，连「科学事实本身也是由科学家制造出来的」（le savant crée le fait）。庞加莱曾于 1902 年 5 月在同刊发表长文《论科学的客观价值》（后收入 1905 年《科学的价值》）回应勒鲁瓦的上述主张。'
          }
        ]
      },
      {
        id: 'sh-intro-p08',
        type: 'paragraph',
        num: '§ 08',
        fr: 'S’il en était ainsi, la science serait impuissante. Or, nous la voyons chaque jour agir sous nos yeux. Cela ne pourrait être si elle ne nous faisait connaître quelque chose de la réalité ; mais ce qu’elle peut atteindre, ce ne sont pas les choses elles-mêmes, comme le pensent les dogmatistes naïfs, ce sont seulement les rapports entre les choses ; en dehors de ces rapports, il n’y a pas de réalité connaissable.',
        zh: '倘若果真如此，科学就会软弱无力。然而，我们每天都亲眼看到科学在发挥作用。假如科学不能让我们认识实在的某些方面，这是绝不可能发生的；**只不过科学所能企及的，并不是朴素独断论者所以为的事物本身，而仅仅是事物之间的关系；在这些关系之外，不存在任何可知的实在。**'
      },
      {
        id: 'sh-intro-p09',
        type: 'paragraph',
        num: '§ 09',
        fr: 'Telle est la conclusion à laquelle nous parviendrons, mais pour cela il nous faudra parcourir la série des sciences depuis l’arithmétique et la géométrie jusqu’à la mécanique et à la physique expérimentale.',
        zh: '这便是我们将要得出的结论；但为了抵达这一结论，我们必须从算术与几何学出发，一直到力学与实验物理学，逐一考察这一整列科学。'
      },
      {
        id: 'sh-intro-p10',
        type: 'paragraph',
        num: '§ 10',
        fr: 'Quelle est la nature du raisonnement mathématique ? Est-il réellement déductif comme on le croit d’ordinaire ? Une analyse approfondie nous montre qu’il n’en est rien, qu’il participe dans une certaine mesure de la nature du raisonnement inductif et que c’est par là qu’il est fécond. Il n’en conserve pas moins son caractère de rigueur absolue ; c’est ce que nous avions d’abord à montrer.',
        zh: '数学推理的本性究竟是什么？它果真像人们通常以为的那样纯粹是演绎性的吗？深入的分析向我们表明，事实绝非如此：它在一定程度上分有归纳推理的本性，并且正因如此才富有创造力；然而它丝毫没有因此丧失绝对严密的特征——这就是我们首先要阐明的道理。'
      },
      {
        id: 'sh-intro-p11',
        type: 'paragraph',
        num: '§ 11',
        fr: 'Connaissant mieux maintenant l’un des instruments que les mathématiques mettent entre les mains du chercheur, nous avions à analyser une autre notion fondamentale, celle de la grandeur mathématique. La trouvons-nous dans la nature, ou est-ce nous qui l’y introduisons ? Et, dans ce dernier cas, ne risquons-nous pas de tout fausser ? Comparant les données brutes de nos sens et ce concept extrêmement complexe et subtil que les mathématiciens appellent grandeur, nous sommes bien forcés de reconnaître une divergence ; ce cadre où nous voulons tout faire rentrer, c’est donc nous qui l’avons fait ; mais nous ne l’avons pas fait au hasard, nous l’avons fait pour ainsi dire sur mesure et c’est pour cela que nous pouvons y faire rentrer les faits sans dénaturer ce qu’ils ont d’essentiel.',
        zh: '在对数学交到研究者手中的这一工具有了更深入的认识之后，我们接下来便要分析另一个基本概念，即数学量。我们是在自然界中直接找到它的，还是由我们自己将它引入自然界的？若是后者，我们岂不是冒着把一切都歪曲的风险？只要把感官提供的原始材料同数学家所谓「量」这一极其复杂精妙的概念加以比较，我们就不得不承认二者之间存在分歧；因此，这个我们想要把万物都纳入其中的框架，确乎是我们自己打造的；但我们并非胡乱打造它，不妨说是量身定做的，正因如此，我们才能把各种事实纳入其中，而不致扭曲它们的本质。'
      },
      {
        id: 'sh-intro-p12',
        type: 'paragraph',
        num: '§ 12',
        fr: 'Un autre cadre que nous imposons au monde, c’est l’espace. D’où viennent les premiers principes de la géométrie ? Nous sont-ils imposés par la logique ? Lobatchevsky a montré que non en créant les géométries non euclidiennes. L’espace nous est-il révélé par nos sens ? Non encore, car celui que nos sens pourraient nous montrer diffère absolument de celui du géomètre. La géométrie dérive-t-elle de l’expérience ? Une discussion approfondie nous montrera que non. Nous conclurons donc que ses principes ne sont que des conventions ; mais ces conventions ne sont pas arbitraires, et transportés dans un autre monde (que j’appelle le monde non euclidien et que je cherche à imaginer), nous aurions été amenés à en adopter d’autres.',
        zh: '我们强加给世界的另一个框架是空间。几何学的第一批原理从何而来？它们是逻辑强加给我们的吗？[罗巴切夫斯基]{#g-sh-intro-05}创立了非欧几何，从而证明了并非如此。空间是由我们的感官揭示给我们的吗？同样不是，因为感官所能向我们展示的空间，与几何学家的空间截然不同。那么几何学源于经验吗？深入的讨论将向我们表明，答案依然是否定的。因此我们将得出结论：几何学的原理不过是一些约定；但这些约定并非武断任意，倘若我们被移置到另一个世界（我称之为非欧世界，并试着去设想它的图景），我们便会被引导去采纳另一些约定。',
        glosses: [
          {
            id: 'g-sh-intro-05',
            anchor: '罗巴切夫斯基',
            content:
              '尼古拉·罗巴切夫斯基（Николай Иванович Лобачевский，1792—1856），俄国数学家，曾长期任喀山大学校长。他于 1829 至 1830 年在《喀山通报》发表《论几何学原理》（О началах геометрии），随后又以法文（1837）与德文（1840）刊行专论，独立于匈牙利数学家亚诺什·鲍耶（1832）发表了历史上首个不依赖欧几里得第五公设而内部无矛盾的几何体系。原文此处使用复数「非欧几何」（les géométries non euclidiennes），除罗巴切夫斯基的双曲几何体系外，亦涵盖德国数学家伯恩哈德·黎曼（Bernhard Riemann，1826—1866）于 1854 年提出的椭圆（球面）几何体系。'
          }
        ]
      },
      {
        id: 'sh-intro-p13',
        type: 'paragraph',
        num: '§ 13',
        fr: 'En mécanique, nous serions conduits à des conclusions analogues et nous verrions que les principes de cette science, quoique plus directement appuyés sur l’expérience, participent encore du caractère conventionnel des postulats géométriques. Jusqu’ici le nominalisme triomphe, mais nous arrivons aux sciences physiques proprement dites. Ici la scène change ; nous rencontrons une autre sorte d’hypothèses et nous en voyons toute la fécondité. Sans doute, au premier abord, les théories nous semblent fragiles, et l’histoire de la science nous prouve qu’elles sont éphémères : elles ne meurent pas tout entières pourtant, et de chacune d’elles il reste quelque chose. C’est ce quelque chose qu’il faut chercher à démêler, parce que c’est là, et là seulement, qu’est la véritable réalité.',
        zh: '在力学中，我们也会得出类似的结论，并且会看到这门科学的各项原理虽然更直接地倚重经验，却依然分有几何公设的那种约定性质。到此为止，唯名论似乎大获全胜；但随后我们便进入了严格意义上的各门物理科学。在这里，舞台布景陡然一变；我们遇到了另一类假设，并看到了它们全部的丰硕成果。诚然，初看起来，种种物理理论显得脆弱易碎，科学史也向我们证明它们往往转瞬即逝；然而它们并不会死得一干二净，每一种理论都会留下某些东西。我们必须设法析出的正是这留存下来的东西，因为唯有在那里，才存在着真正的实在。'
      },
      {
        id: 'sh-intro-p14',
        type: 'paragraph',
        num: '§ 14',
        fr: 'La méthode des sciences physiques repose sur l’induction qui nous fait attendre la répétition d’un phénomène quand se reproduisent les circonstances où il avait une première fois pris naissance. Si toutes ces circonstances pouvaient se reproduire à la fois, ce principe pourrait être appliqué sans crainte : mais cela n’arrivera jamais ; quelques-unes de ces circonstances feront toujours défaut. Sommes-nous absolument sûrs qu’elles sont sans importance ? Évidemment non. Cela pourra être vraisemblable, cela ne pourra pas être rigoureusement certain. De là le rôle considérable que joue dans les sciences physiques la notion de probabilité. Le calcul des probabilités n’est donc pas seulement une récréation ou un guide pour les joueurs de baccara, et nous devons chercher à en approfondir les principes. Sous ce rapport, je n’ai pu donner que des résultats bien incomplets, tant ce vague instinct, qui nous fait discerner la vraisemblance, est rebelle à l’analyse.',
        zh: '物理科学的方法建立在归纳之上：每当某一现象最初产生时的种种条件再度出现，归纳便使我们预期该现象也会重演。假如所有那些条件能够同时悉数重现，这一原则便可毫无顾虑地加以应用；但这种事永远不会发生，其中总会有若干条件缺席。我们能绝对肯定那些缺席的条件无关紧要吗？显然不能。这或许具有或然的似真性，却绝不可能达到严格意义上的确定无疑。概率概念在物理科学中所扮演的举足轻重的角色，正是由此而来。因此，概率演算绝不只是消遣的游戏，或是[百家乐赌客]{#g-sh-intro-06}的指南，我们必须设法深入探究它的原理。在这一方面，我只能给出很不完备的结果，只因那种使我们得以辨别似真性的朦胧本能，实在太难加以分析了。',
        glosses: [
          {
            id: 'g-sh-intro-06',
            anchor: '百家乐赌客',
            content:
              '法语 baccara（百家乐），十九世纪法国社交俱乐部与赌场盛行的纸牌博弈游戏。法国数学家约瑟夫·贝特朗（Joseph Bertrand，1822—1900）在其专著《概率演算》（Calcul des probabilités，1889）中曾专门以「百家乐手握五点时应否补第三张牌」作为博弈数学分析范例；庞加莱本人于 1896 年亦在索邦大学出版《概率演算》讲义（原书第十一章即探讨该主题），将发轫于十七世纪帕斯卡与费马赌博通信的概率论延伸至气体分子运动论与观测误差理论。'
          }
        ]
      },
      {
        id: 'sh-intro-p15',
        type: 'paragraph',
        num: '§ 15',
        fr: 'Après avoir étudié les conditions dans lesquelles travaille le physicien, j’ai cru qu’il fallait le montrer à l’œuvre. Pour cela j’ai pris quelques exemples dans l’histoire de l’optique et dans celle de l’électricité. Nous verrons d’où sont sorties les idées de Fresnel, celles de Maxwell, et quelles hypothèses inconscientes faisaient Ampère et les autres fondateurs de l’électrodynamique.',
        zh: '在考察了物理学家开展工作所处的种种条件之后，我认为还应当展示物理学家实际工作时的情形。为此，我从光学史与电学史中选取了几个实例。我们将看到[菲涅耳]{#g-sh-intro-07}与[麦克斯韦]{#g-sh-intro-08}的思想源自何处，以及[安培]{#g-sh-intro-09}与电动力学的其他奠基人曾作过哪些不自觉的假设。',
        glosses: [
          {
            id: 'g-sh-intro-07',
            anchor: '菲涅耳',
            content:
              '奥古斯丁-让·菲涅耳（Augustin-Jean Fresnel，1788—1827），法国桥梁公路工程师、物理学家。他在 1819 年获巴黎科学院大奖的《论光的衍射》（Mémoire sur la diffraction de la lumière）与 1821 年的偏振光研究中取代了牛顿微粒说，确立了基于弹性发光以太横波振动的波动光学数学理论（详原书第四编第十、十二章）。'
          },
          {
            id: 'g-sh-intro-08',
            anchor: '麦克斯韦',
            content:
              '詹姆斯·克拉克·麦克斯韦（James Clerk Maxwell，1831—1879），苏格兰物理学家，剑桥大学卡文迪许实验室首任物理学教授，在《电磁场的动力学理论》（1865）与两卷本《电磁学通论》（A Treatise on Electricity and Magnetism，1873）中统一了电、磁与光学。庞加莱在索邦大学先后开讲并出版《光的数学理论》（1889）与《电学与光学》（1890，1901 年再版），向法国学界系统引介麦克斯韦电磁场理论（详原书第十二章）。'
          },
          {
            id: 'g-sh-intro-09',
            anchor: '安培',
            content:
              '安德烈-玛丽·安培（André-Marie Ampère，1775—1836），法国数学家与物理学家，在 1820 年奥斯特发现电流磁效应后奠定电动力学基础，于 1826 年出版《纯粹从经验推演出来的电动力学现象理论》（Théorie des phénomènes électro-dynamiques, uniquement déduite de l’expérience）——该书标题明确标榜「纯粹从经验推演」，后为原书第十三章所专门辨析。'
          }
        ]
      }
    ]
  },
  {
    id: 'ch01-raisonnement-mathematique',
    roman: 'I',
    titleOriginal:
      'Première partie : Le nombre et la grandeur — Chapitre I. Sur la nature du raisonnement mathématique',
    titleZh: '第一编 数与量：第一章 论数学推理的本性',
    aiModel: 'Gemini-4-Carbon',
    blocks: [
      {
        id: 'sh-ch01-p01',
        type: 'paragraph',
        num: '§ 01',
        fr: 'I',
        zh: '**一**'
      },
      {
        id: 'sh-ch01-p02',
        type: 'paragraph',
        num: '§ 02',
        fr: 'La possibilité même de la science mathématique semble une contradiction insoluble. Si cette science n’est déductive qu’en apparence, d’où lui vient cette parfaite rigueur que personne ne songe à mettre en doute ? Si, au contraire, toutes les propositions qu’elle énonce peuvent se tirer les unes des autres par les règles de la logique formelle, comment la mathématique ne se réduit-elle pas à une immense tautologie ? Le syllogisme ne peut rien nous apprendre d’essentiellement nouveau et, si tout devait sortir du principe d’identité, tout devrait aussi pouvoir s’y ramener. Admettra-t-on donc que les énoncés de tous ces théorèmes qui remplissent tant de volumes ne soient que des manières détournées de dire que A est A ?',
        zh: '[数学科学本身的可能性]{#g-sh-c1-01}，似乎就是一个无从化解的矛盾。倘若这门科学只是表面上具有演绎性，那么它那无人想要置疑的完美严密性又从何而来？反过来，倘若它所陈述的一切命题都能按照形式逻辑的规则彼此推演而出，数学又为何没有沦为一场庞大无比的同义反复？三段论不可能教会我们任何本质上全新的东西；假如一切都必须出自同一律，那么一切也就应当都能还原为同一律。难道我们要承认，填满了那么多卷册的所有那些定理陈述，只不过是拐弯抹角地说「A 是 A」吗？',
        glosses: [
          {
            id: 'g-sh-c1-01',
            anchor: '数学科学本身的可能性',
            content:
              '本章原系庞加莱发表于 1894 年 1 月《形而上学与道德评论》第 2 卷第 1 期的开卷论文《论数学推理的本性》（Sur la nature du raisonnement mathématique，第 371—384 页）。该刊创刊宗旨即在于打破十九世纪后期实证主义对形而上学的排斥，重建康德批判哲学与精密科学之间的对话；1902 年编入《科学与假设》时，庞加莱完整保留了原文的七节论证结构。'
          }
        ]
      },
      {
        id: 'sh-ch01-p03',
        type: 'paragraph',
        num: '§ 03',
        fr: 'Sans doute, on peut remonter aux axiomes qui sont à la source de tous les raisonnements. Si on juge qu’on ne peut les réduire au principe de contradiction, si on ne veut pas non plus y voir des faits expérimentaux qui ne pourraient participer à la nécessité mathématique, on a encore la ressource de les classer parmi les jugements synthétiques a priori. Ce n’est pas résoudre la difficulté, c’est seulement la baptiser ; et lors même que la nature des jugements synthétiques n’aurait plus pour nous de mystère, la contradiction ne se serait pas évanouie, elle n’aurait fait que reculer ; le raisonnement syllogistique reste incapable de rien ajouter aux données qu’on lui fournit ; ces données se réduisent à quelques axiomes et on ne devrait pas retrouver autre chose dans les conclusions.',
        zh: '诚然，人们可以回溯到处于一切推理源头的公理。倘若人们断定无法把这些公理还原为矛盾律，又不愿把它们看作[无从分有数学必然性的经验事实]{#g-sh-c1-02}，那就还剩下一条退路，即把它们归入[先天综合判断]{#g-sh-c1-03}之列。然而这并不是解决困难，而只是给困难起个名字罢了；纵使综合判断的本性对我们而言已不再有任何奥秘，矛盾也并未就此烟消云散，而只是往后退了一步：三段论推理依然无力在人们提供给它的前提之外增添分毫；既然这些前提不过归结为寥寥数条公理，人们在结论中也就不应当找到任何别的东西。',
        glosses: [
          {
            id: 'g-sh-c1-02',
            anchor: '无从分有数学必然性的经验事实',
            content:
              '暗指英国哲学家约翰·斯图尔特·密尔（John Stuart Mill，1806—1873）在《逻辑体系》（A System of Logic，1843；路易·佩斯法译本刊于 1866 年）第二卷第五至六章提出的经验主义数学观：密尔反对莱布尼茨派与康德派，主张算术等式（如 2 + 1 = 3）与几何公理皆是对无数次感官物体拼合与空间测量的经验归纳概括，因而并无绝对的先天必然性。'
          },
          {
            id: 'g-sh-c1-03',
            anchor: '先天综合判断',
            content:
              '伊曼努尔·康德（Immanuel Kant，1724—1804）在《纯粹理性批判》（1781 年第一版 / 1787 年第二版，导言第四至五节，B10—B18）中确立的认识论范畴。康德区分「分析判断」（谓词已隐含于主词概念之中，仅凭矛盾律即可断定真伪，不扩展知识）与「综合判断」（谓词超出主词概念之外，为知识提供新内容）：经验判断皆为后天综合判断，而康德主张纯粹数学——包括算术命题（如 7 + 5 = 12）与欧几里得几何公理——皆属于植根于时间与空间纯直观形式的「先天综合判断」（jugements synthétiques a priori），既具普遍必然性又能扩展知识。'
          }
        ]
      },
      {
        id: 'sh-ch01-p04',
        type: 'paragraph',
        num: '§ 04',
        fr: 'Aucun théorème ne devrait être nouveau si dans sa démonstration n’intervenait un axiome nouveau ; le raisonnement ne pourrait nous rendre que les vérités immédiatement évidentes empruntées à l’intuition directe ; il ne serait plus qu’un intermédiaire parasite et dès lors n’aurait-on pas lieu de se demander si tout l’appareil syllogistique ne sert pas uniquement à dissimuler notre emprunt ?',
        zh: '倘若在证明过程中没有引入新的公理，任何定理便都不应当是新的；推理所能交还给我们的，不过是从直接直观中借来的那些当下自明的真理；它就不再是别的什么，而只是一个寄生的中介——既然如此，人们岂不是有理由追问：整套三段论机器是不是仅仅用来掩饰我们的这种借用？'
      },
      {
        id: 'sh-ch01-p05',
        type: 'paragraph',
        num: '§ 05',
        fr: 'La contradiction nous frappera davantage si nous ouvrons un livre quelconque de mathématiques ; à chaque page l’auteur annoncera l’intention de généraliser une proposition déjà connue. Est-ce donc que la méthode mathématique procède du particulier au général et comment alors peut-on l’appeler déductive ?',
        zh: '只要我们随便翻开一本数学著作，这一矛盾就会更加触目惊心：作者在每一页上都会宣告，他打算推广某个已知的命题。难道说数学方法是从特殊走向普遍的吗？果真如此，人们又怎么能称之为演绎方法呢？'
      },
      {
        id: 'sh-ch01-p06',
        type: 'paragraph',
        num: '§ 06',
        fr: 'Si enfin la science du nombre était purement analytique, ou pouvait sortir analytiquement d’un petit nombre de jugements synthétiques, il semble qu’un esprit assez puissant pourrait d’un seul coup d’œil en apercevoir toutes les vérités ; que dis-je ! on pourrait même espérer qu’un jour on inventera pour les exprimer un langage assez simple pour qu’elles apparaissent ainsi immédiatement à une intelligence ordinaire.',
        zh: '最后，假如关于数的科学纯粹是分析性的，或者能够从少数几个综合判断中通过分析推演出来，那么似乎只要有一个足够强大的心智，便能一眼洞见其中的全部真理；岂止如此！人们甚至可以指望，有朝一日会发明出[一种足够简明的语言]{#g-sh-c1-04}来表述这些真理，使它们能够就这样直接呈现在寻常智力面前。',
        glosses: [
          {
            id: 'g-sh-c1-04',
            anchor: '一种足够简明的语言',
            content:
              '暗指莱布尼茨构想的「普遍表意文字」（characteristica universalis）与「推理演算」（calculus ratiocinator）纲领，以及十九世纪末戈特洛布·弗雷格（Gottlob Frege）《概念文字》（1879）与朱塞佩·皮亚诺（Giuseppe Peano）自 1892 年起筹编、1895 年陆续刊行的《数学公式汇编》（Formulaire de mathématiques）所推动的符号逻辑化运动——即试图将数学概念拆解为基本表意符号，使定理推导化约为符号恒等变形。庞加莱后在《科学与方法》（1908）中撰文批评皮亚诺的「表意符号术」（pasigraphie）与路易·库图拉（Louis Couturat）的逻辑主义。'
          }
        ]
      },
      {
        id: 'sh-ch01-p07',
        type: 'paragraph',
        num: '§ 07',
        fr: 'Si l’on se refuse à admettre ces conséquences, il faut bien concéder que le raisonnement mathématique a par lui-même une sorte de vertu créatrice et par conséquent qu’il se distingue du syllogisme.',
        zh: '倘若人们拒绝接受这些推论，就必须承认：**数学推理本身具有某种创造性的力量，并因此有别于三段论。**'
      },
      {
        id: 'sh-ch01-p08',
        type: 'paragraph',
        num: '§ 08',
        fr: 'La différence doit même être profonde. Nous ne trouverons pas par exemple la clef du mystère dans l’usage fréquent de cette règle d’après laquelle une même opération uniforme appliquée à deux nombres égaux donnera des résultats identiques.',
        zh: '这种差别甚至必定极为深刻。比方说，有一条经常使用的法则指出，对两个相等的数施以同一种单值运算，必将得到相同的结果；我们绝不可能在这条法则的频繁运用中找到解开谜团的钥匙。'
      },
      {
        id: 'sh-ch01-p09',
        type: 'paragraph',
        num: '§ 09',
        fr: 'Tous ces modes de raisonnement, qu’ils soient ou non réductibles au syllogisme proprement dit, conservent le caractère analytique et sont par cela même impuissants.',
        zh: '所有这类推理方式，无论能否还原为严格意义上的三段论，都保留着分析的性质，并正因如此而无能为力。'
      },
      {
        id: 'sh-ch01-p10',
        type: 'paragraph',
        num: '§ 10',
        fr: 'II',
        zh: '**二**'
      },
      {
        id: 'sh-ch01-p11',
        type: 'paragraph',
        num: '§ 11',
        fr: 'Le débat est ancien ; déjà Leibnitz cherchait à démontrer que 2 et 2 font 4 ; examinons un peu sa démonstration.',
        zh: '这场争论由来已久；早在当年，[莱布尼茨]{#g-sh-c1-05}便曾试图证明 2 加 2 等于 4；不妨让我们仔细考察一下他的证明。',
        glosses: [
          {
            id: 'g-sh-c1-05',
            anchor: '莱布尼茨',
            content:
              '戈特弗里德·威廉·莱布尼茨（Gottfried Wilhelm Leibniz，1646—1716；十九世纪法文惯写作 Leibnitz）在《人类理智新论》（Nouveaux Essais sur l’entendement humain，1704 年完稿，1765 年遗作刊行）第四卷第七章第十节《论所谓公理或准则的命题》中给出了这一证明，旨在反驳洛克将「2 + 2 = 4」视为无需证明的直接直观命题。莱布尼茨 1704 年原证仅定义了 2 = 1 + 1、3 = 2 + 1、4 = 3 + 1，在推导 2 + 2 = 2 + 1 + 1 = 3 + 1 = 4 时未显式声明加法结合律特例 2 + (1 + 1) = (2 + 1) + 1（这一疏漏后由格拉斯曼 1861 年《算术教程》与弗雷格 1884 年《算术基础》第 6 节分别指出）。'
          }
        ]
      },
      {
        id: 'sh-ch01-p12',
        type: 'paragraph',
        num: '§ 12',
        fr: 'Je suppose que l’on ait défini le nombre 1 et l’opération x + 1 qui consiste à ajouter l’unité à un nombre donné x.',
        zh: '我假定人们已经定义了数 1 以及运算 x + 1，该运算在于把单位 1 加到一个给定的数 x 上。'
      },
      {
        id: 'sh-ch01-p13',
        type: 'paragraph',
        num: '§ 13',
        fr: 'Ces définitions, quelles qu’elles soient, n’interviendront pas dans la suite du raisonnement.',
        zh: '这些定义无论具体内容如何，在接下来的推理中都不会介入。'
      },
      {
        id: 'sh-ch01-p14',
        type: 'paragraph',
        num: '§ 14',
        fr: 'Je définis ensuite les nombres 2, 3 et 4 par les égalités :\n\n    (1) 1 + 1 = 2 ; (2) 2 + 1 = 3 ; (3) 3 + 1 = 4.',
        zh: '接着，我通过下列等式定义数 2、3 与 4：\n\n（1）1 + 1 = 2；（2）2 + 1 = 3；（3）3 + 1 = 4。'
      },
      {
        id: 'sh-ch01-p15',
        type: 'paragraph',
        num: '§ 15',
        fr: 'Je définis de même l’opération x + 2 par la relation :\n\n    (4) x + 2 = (x + 1) + 1.',
        zh: '我同样通过下列关系式定义运算 x + 2：\n\n（4）x + 2 = (x + 1) + 1。'
      },
      {
        id: 'sh-ch01-p16',
        type: 'paragraph',
        num: '§ 16',
        fr: 'Cela posé nous avons :\n\n    2 + 2 = (2 + 1) + 1    (Définition 4)\n    (2 + 1) + 1 = 3 + 1    (Définition 2)\n    3 + 1 = 4    (Définition 3)\n\nd’où\n\n    2 + 2 = 4    C. Q. F. D.',
        zh: '由此可得：\n\n2 + 2 = (2 + 1) + 1（定义 4），\n\n(2 + 1) + 1 = 3 + 1（定义 2），\n\n3 + 1 = 4（定义 3），\n\n从而\n\n2 + 2 = 4。证毕。'
      },
      {
        id: 'sh-ch01-p17',
        type: 'paragraph',
        num: '§ 17',
        fr: 'On ne saurait nier que ce raisonnement ne soit purement analytique. Mais interrogez un mathématicien quelconque : « Ce n’est pas une démonstration proprement dite, vous répondra-t-il, c’est une vérification ». On s’est borné à rapprocher l’une de l’autre deux définitions purement conventionnelles et on a constaté leur identité ; on n’a rien appris de nouveau. La vérification diffère précisément de la véritable démonstration, parce qu’elle est purement analytique et parce qu’elle est stérile. Elle est stérile parce que la conclusion n’est que la traduction des prémisses dans un autre langage. La démonstration véritable est féconde au contraire parce que la conclusion y est en un sens plus générale que les prémisses.',
        zh: '谁也无法否认，这一推理纯粹是分析性的。但请随便去问一位数学家，他都会回答你说：「这算不上严格意义上的证明，这只是一次验证。」人们所做的，不过是把两个纯粹约定的定义摆到一起加以比照，并确认二者相等罢了；人们并没有学到任何新东西。**验证之所以有别于真正的证明，恰恰在于它是纯粹分析性的，在于它是贫瘠无果的。**它之所以贫瘠无果，是因为结论不过是把前提翻译成了另一种语言。相反，真正的证明之所以富有成效，是因为其中的结论在某种意义上比前提更为普遍。'
      },
      {
        id: 'sh-ch01-p18',
        type: 'paragraph',
        num: '§ 18',
        fr: 'L’égalité 2 + 2 = 4 n’a été ainsi susceptible d’une vérification que parce qu’elle est particulière. Tout énoncé particulier en mathématiques pourra toujours être vérifié de la sorte. Mais si la mathématique devait se réduire à une suite de pareilles vérifications, elle ne serait pas une science. Ainsi un joueur d’échecs, par exemple, ne crée pas une science en gagnant une partie. Il n’y a de science que du général.',
        zh: '等式 2 + 2 = 4 之所以能够用这种方式加以验证，仅仅因为它是特殊的。数学中的任何特殊陈述，永远都可以用这种方式来验证。然而，倘若数学只归结为一连串诸如此类的验证，它就不成其为一门科学了。比方说，一位国际象棋棋手并不会因为赢下一盘棋就创立了一门科学。[唯有关于普遍者的知识才成其为科学]{#g-sh-c1-06}。',
        glosses: [
          {
            id: 'g-sh-c1-06',
            anchor: '唯有关于普遍者的知识才成其为科学',
            content:
              '法语格言 Il n’y a de science que du général，源出亚里士多德《后分析篇》（卷一第三十一章，87b37—39）与《形而上学》（卷三第四章，999a26—29；卷十三第十章，1086b33），经中世纪经院哲学凝练为拉丁公理 Nulla scientia est de individuis（「不存在关于个别事物的科学」）：感官知觉仅触及此时此地的个别对象，而真正的科学知识（epistēmē）必须把握对一类对象普遍成立的必然关联。'
          }
        ]
      },
      {
        id: 'sh-ch01-p19',
        type: 'paragraph',
        num: '§ 19',
        fr: 'On peut même dire que les sciences exactes ont précisément pour objet de nous dispenser de ces vérifications directes.',
        zh: '甚至可以说，精密科学的目标恰恰在于免除我们进行这类直接验证的必要。'
      },
      {
        id: 'sh-ch01-p20',
        type: 'paragraph',
        num: '§ 20',
        fr: 'III',
        zh: '**三**'
      },
      {
        id: 'sh-ch01-p21',
        type: 'paragraph',
        num: '§ 21',
        fr: 'Voyons donc le géomètre à l’œuvre et cherchons à surprendre ses procédés.',
        zh: '那么，就让我们来看看[工作中的数学家]{#g-sh-c1-07}，试着捕捉他的推理手法。',
        glosses: [
          {
            id: 'g-sh-c1-07',
            anchor: '工作中的数学家',
            content:
              '原文 le géomètre 字面作「几何学家」，但在十七至十九世纪法国学术传统中（沿袭笛卡尔、达朗贝尔用法，且巴黎科学院数学学部直至 1976 年仍正式定名为 Section de Géométrie，庞加莱本人即于 1887 年当选该学部院士），géomètre 常泛指一般意义上的纯粹数学家，涵盖代数、数论与分析学者；紧接两段之后出现的 la géométrie 则专指空间几何学，故本段译作「数学家」，后文与「分析学家」（analyste）对举时则依本义译作「几何学家」。'
          }
        ]
      },
      {
        id: 'sh-ch01-p22',
        type: 'paragraph',
        num: '§ 22',
        fr: 'La tâche n’est pas sans difficulté ; il ne suffit pas d’ouvrir un ouvrage au hasard et d’y analyser une démonstration quelconque.',
        zh: '这项任务并非毫无困难；随便翻开一部著作，挑出其中任意一段证明来加以分析，是远远不够的。'
      },
      {
        id: 'sh-ch01-p23',
        type: 'paragraph',
        num: '§ 23',
        fr: 'Nous devons exclure d’abord la géométrie où la question se complique des problèmes ardus relatifs au rôle des postulats, à la nature et à l’origine de la notion d’espace. Pour des raisons analogues nous ne pouvons nous adresser à l’analyse infinitésimale. Il nous faut chercher la pensée mathématique là où elle est restée pure, c’est-à-dire en arithmétique.',
        zh: '我们首先必须排除几何学，因为在那里，问题会因涉及公设的作用以及空间概念的本性与起源等棘手难题而变得错综复杂。出于同样的理由，我们也不能求助于无穷小分析。我们必须到数学思想依然保持纯粹的地方——亦即算术之中——去寻找它。'
      },
      {
        id: 'sh-ch01-p24',
        type: 'paragraph',
        num: '§ 24',
        fr: 'Encore faut-il choisir ; dans les parties les plus élevées de la théorie des nombres, les notions mathématiques primitives ont déjà subi une élaboration si profonde, qu’il devient difficile de les analyser.',
        zh: '即便在算术之内，也还必须有所取舍；在数论最高深的那些分支里，原始的数学概念已经历了极为深入的加工，因而很难再对它们加以剖析。'
      },
      {
        id: 'sh-ch01-p25',
        type: 'paragraph',
        num: '§ 25',
        fr: 'C’est donc au début de l’arithmétique que nous devons nous attendre à trouver l’explication que nous cherchons, mais il arrive justement que c’est dans la démonstration des théorèmes les plus élémentaires que les auteurs des traités classiques ont déployé le moins de précision et de rigueur. Il ne faut pas leur en faire un crime ; ils ont obéi à une nécessité ; les débutants ne sont pas préparés à la véritable rigueur mathématique ; ils n’y verraient que de vaines et fastidieuses subtilités ; on perdrait son temps à vouloir trop tôt les rendre plus exigeants ; il faut qu’ils refassent rapidement, mais sans brûler d’étapes, le chemin qu’ont parcouru lentement les fondateurs de la science.',
        zh: '因此，我们应当指望在算术的开端处找到我们所追寻的解释；然而偏偏正是在证明最初等的定理时，经典教科书的作者们展现出的精确性与严密性最少。我们不应当为此归罪于他们；他们只是顺应了一种客观需要：初学者尚未对真正的数学严密性做好准备，在他们眼里，那不过是些徒劳而又枯燥繁琐的吹毛求疵；倘若过早地想要让他们变得苛刻严谨，只会白费光阴；他们必须快速地——但又不能跳过必经的阶段——重走一遍这门科学的奠基者们曾经缓慢走过的道路。'
      },
      {
        id: 'sh-ch01-p26',
        type: 'paragraph',
        num: '§ 26',
        fr: 'Pourquoi une si longue préparation est-elle nécessaire pour s’habituer à cette rigueur parfaite, qui, semble-t-il, devrait s’imposer naturellement à tous les bons esprits ? C’est là un problème logique et psychologique bien digne d’être médité.',
        zh: '这种完美的严密性按理似乎应当自然而然地为一切健全的头脑所接受，为什么偏偏需要如此漫长的预备训练才能习惯它呢？这是一个很值得深思的逻辑学与心理学问题。'
      },
      {
        id: 'sh-ch01-p27',
        type: 'paragraph',
        num: '§ 27',
        fr: 'Mais nous ne nous y arrêterons pas ; il est étranger à notre objet ; tout ce que je veux retenir, c’est que, sous peine de manquer notre but, il nous faut refaire les démonstrations des théorèmes les plus élémentaires et leur donner non la forme grossière qu’on leur laisse pour ne pas lasser les débutants, mais celle qui peut satisfaire un géomètre exercé.',
        zh: '但我们不在此处驻足，这个问题与我们的宗旨无关；我只想记住一点：为了不致错失我们的目标，我们必须重新做出那些最初等定理的证明，不要保留人们为了免使初学者生厌而留给它们的粗糙形态，而要赋予它们足以令一位训练有素的数学家满意的严密形态。'
      },
      {
        id: 'sh-ch01-p28',
        type: 'paragraph',
        num: '§ 28',
        fr: 'Définition de l’addition. — Je suppose qu’on ait défini préalablement l’opération x + 1, qui consiste à ajouter le nombre 1 à un nombre donné x.',
        zh: '[加法的定义]{#g-sh-c1-08}——我假定人们已经预先定义了运算 x + 1，该运算在于把数 1 加到一个给定的数 x 上。',
        glosses: [
          {
            id: 'g-sh-c1-08',
            anchor: '加法的定义',
            content:
              '以下仅凭「加 1」后继运算（x + 1）递推定义加法与乘法，并依次证明结合律、交换律与分配律的做法，首创于德国数学家赫尔曼·格拉斯曼（Hermann Grassmann，1809—1877）1861 年出版的《高级中学算术教程》（Lehrbuch der Arithmetik für höhere Lehranstalten），后经赫尔曼·汉克尔（1867）、理查德·戴德金《数是什么且应当是什么？》（Was sind und was sollen die Zahlen?，1888）及皮亚诺《算术原理：以新方法阐述》（Arithmetices principia, nova methodo exposita，1889）确立为现代自然数公理体系的标准奠基步骤。'
          }
        ]
      },
      {
        id: 'sh-ch01-p29',
        type: 'paragraph',
        num: '§ 29',
        fr: 'Cette définition, quelle qu’elle soit d’ailleurs, ne jouera plus aucun rôle dans la suite des raisonnements.',
        zh: '况且无论这一定义的具体内容如何，它在随后的推理中都将不再扮演任何角色。'
      },
      {
        id: 'sh-ch01-p30',
        type: 'paragraph',
        num: '§ 30',
        fr: 'Il s’agit maintenant de définir l’opération x + a, qui consiste à ajouter le nombre a à un nombre donné x.',
        zh: '现在的问题是要定义运算 x + a，即把数 a 加到一个给定的数 x 上。'
      },
      {
        id: 'sh-ch01-p31',
        type: 'paragraph',
        num: '§ 31',
        fr: 'Supposons que l’on ait défini l’opération\n\n    x + (a − 1),\n\nl’opération x + a sera définie par l’égalité :\n\n    (1) x + a = [x + (a − 1)] + 1.',
        zh: '假定人们已经定义了运算 x + (a − 1)，那么运算 x + a 便由下列等式予以定义：\n\n（1）x + a = [x + (a − 1)] + 1。'
      },
      {
        id: 'sh-ch01-p32',
        type: 'paragraph',
        num: '§ 32',
        fr: 'Nous saurons donc ce que c’est que x + a quand nous saurons ce que c’est que x + (a − 1), et comme j’ai supposé au début que l’on savait ce que c’est que x + 1, on pourra définir successivement et « par récurrence » les opérations x + 2, x + 3, etc.',
        zh: '因此，一旦我们知道 x + (a − 1) 是什么，我们就会知道 x + a 是什么；而由于我在开头已经假定人们知道 x + 1 是什么，我们便可以依次且「[依递推]{#g-sh-c1-09}」定义运算 x + 2、x + 3 等等。',
        glosses: [
          {
            id: 'g-sh-c1-09',
            anchor: '依递推',
            content:
              '法语 par récurrence（拉丁词根 recurrere，「折返、回溯前项」；下文作 démonstration par récurrence「递推证明」、raisonnement par récurrence「递推推理」），即现代通称的数学归纳法。在数学史上，意大利数学家弗朗切斯科·毛罗利科（Francesco Maurolico）在《算术两卷》（Arithmeticorum libri duo，1575）证明奇数列求和公式时已运用此法；布莱兹·帕斯卡在《论算术三角形》（Traité du triangle arithmétique，1654 年撰成，1665 年刊行）第十二推论中首次明确分列出「奠基步（n = 1）」与「传递步（由 k 到 k + 1）」的两步法则；英国数学家奥古斯塔斯·德·摩根（Augustus De Morgan）于 1838 年为《便士百科全书》撰写的《归纳（数学）》词条中首创「数学归纳」（mathematical induction）一名；戴德金（1888）与皮亚诺（1889）则将其列为自然数公理体系的基本公理（皮亚诺第五公理）。法语数学传统沿用 récurrence 一词，着眼于后一项向紧邻前一项的链式回溯构造。'
          }
        ]
      },
      {
        id: 'sh-ch01-p33',
        type: 'paragraph',
        num: '§ 33',
        fr: 'Cette définition mérite un moment d’attention, elle est d’une nature particulière qui la distingue déjà de la définition purement logique ; l’égalité (1) contient en effet une infinité de définitions distinctes, chacune d’elles n’ayant un sens que quand on connaît celle qui la précède.',
        zh: '这一定义值得我们驻足留意片刻：它具有一种特殊的本性，这使它从一开始就有别于纯粹逻辑的定义；事实上，等式（1）包含着无穷多个彼此不同的定义，其中每一个定义唯有在人们已知其前一个定义时才具有意义。'
      },
      {
        id: 'sh-ch01-p34',
        type: 'paragraph',
        num: '§ 34',
        fr: 'Propriétés de l’addition. — Associativité. — Je dis que\n\n    a + (b + c) = (a + b) + c.',
        zh: '**加法的性质：结合律**——我断言：\n\na + (b + c) = (a + b) + c。'
      },
      {
        id: 'sh-ch01-p35',
        type: 'paragraph',
        num: '§ 35',
        fr: 'En effet le théorème est vrai pour c = 1 ; il s’écrit alors\n\n    a + (b + 1) = (a + b) + 1,\n\nce qui n’est autre chose, à la différence des notations près, que l’égalité (1) par laquelle je viens de définir l’addition.',
        zh: '事实上，该定理对 c = 1 成立；此时它写作：\n\na + (b + 1) = (a + b) + 1，\n\n除了记号上的差别之外，这无非就是我刚才用来定义加法的等式（1）。'
      },
      {
        id: 'sh-ch01-p36',
        type: 'paragraph',
        num: '§ 36',
        fr: 'Supposons que le théorème soit vrai pour c = γ, je dis qu’il sera vrai pour c = γ + 1, soit en effet\n\n    (a + b) + γ = a + (b + γ),\n\non en déduira successivement :\n\n    [(a + b) + γ] + 1 = [a + (b + γ)] + 1,\n\nou en vertu de la définition (1)\n\n    (a + b) + (γ + 1) = a + (b + γ + 1) = a + [b + (γ + 1)],\n\nce qui montre, par une série de déductions purement analytiques, que le théorème est vrai pour γ + 1.',
        zh: '假定该定理对 c = γ 成立，我断言它对 c = γ + 1 也成立。事实上，设\n\n(a + b) + γ = a + (b + γ)，\n\n由此可依次推得：\n\n[(a + b) + γ] + 1 = [a + (b + γ)] + 1，\n\n或者依据定义（1）化为：\n\n(a + b) + (γ + 1) = a + (b + γ + 1) = a + [b + (γ + 1)]，\n\n这就通过一连串纯粹分析的演绎表明，该定理对 γ + 1 成立。'
      },
      {
        id: 'sh-ch01-p37',
        type: 'paragraph',
        num: '§ 37',
        fr: 'Étant vrai pour c = 1, on verrait ainsi successivement qu’il l’est pour c = 2, pour c = 3, etc.',
        zh: '既然它对 c = 1 成立，人们便可以这样依次看出，它对 c = 2、对 c = 3 等等也都成立。'
      },
      {
        id: 'sh-ch01-p38',
        type: 'paragraph',
        num: '§ 38',
        fr: 'Commutativité. — 1° Je dis que\n\n    a + 1 = 1 + a.',
        zh: '**交换律**——第一，我断言：\n\na + 1 = 1 + a。'
      },
      {
        id: 'sh-ch01-p39',
        type: 'paragraph',
        num: '§ 39',
        fr: 'Le théorème est évidemment vrai pour a = 1, on pourrait vérifier par des raisonnements purement analytiques que s’il est vrai pour a = γ, il le sera pour a = γ + 1 ; or il l’est pour a = 1, il le sera donc pour a = 2, pour a = 3, etc. ; c’est ce qu’on exprime en disant que la proposition énoncée est démontrée par récurrence.',
        zh: '该定理对 a = 1 显然成立；人们可以通过纯粹分析的推理验证，倘若它对 a = γ 成立，它对 a = γ + 1 也成立；既然它对 a = 1 成立，那么它对 a = 2、对 a = 3 等等便也都成立；人们把这表述为：所陈述的命题依递推得到了证明。'
      },
      {
        id: 'sh-ch01-p40',
        type: 'paragraph',
        num: '§ 40',
        fr: '2° Je dis que\n\n    a + b = b + a.',
        zh: '第二，我断言：\n\na + b = b + a。'
      },
      {
        id: 'sh-ch01-p41',
        type: 'paragraph',
        num: '§ 41',
        fr: 'Le théorème vient d’être démontré pour b = 1, on peut vérifier analytiquement que s’il est vrai pour b = β, il le sera pour b = β + 1.',
        zh: '该定理对 b = 1 的情形刚才已经证得，人们又可以从分析上验证：倘若它对 b = β 成立，它对 b = β + 1 也必成立。'
      },
      {
        id: 'sh-ch01-p42',
        type: 'paragraph',
        num: '§ 42',
        fr: 'La proposition est donc établie par récurrence.',
        zh: '因此，这一命题便依递推得以确立。'
      },
      {
        id: 'sh-ch01-p43',
        type: 'paragraph',
        num: '§ 43',
        fr: 'Définition de la multiplication. — Nous définirons la multiplication par les égalités\n\n    a × 1 = a.\n\n    (2) a × b = [a × (b − 1)] + a.',
        zh: '**乘法的定义**——我们通过下列等式定义乘法：\n\na × 1 = a。\n\n（2）a × b = [a × (b − 1)] + a。'
      },
      {
        id: 'sh-ch01-p44',
        type: 'paragraph',
        num: '§ 44',
        fr: 'L’égalité (2) renferme comme l’égalité (1) une infinité de définitions ; ayant défini a × 1 elle permet de définir successivement : a × 2, a × 3, etc.',
        zh: '等式（2）与等式（1）一样，包含着无穷多个定义；在定义了 a × 1 之后，它使我们能够依次定义 a × 2、a × 3 等等。'
      },
      {
        id: 'sh-ch01-p45',
        type: 'paragraph',
        num: '§ 45',
        fr: 'Propriétés de la multiplication. — Distributivité. — Je dis que\n\n    (a + b) × c = (a × c) + (b × c).',
        zh: '**乘法的性质：分配律**——我断言：\n\n(a + b) × c = (a × c) + (b × c)。'
      },
      {
        id: 'sh-ch01-p46',
        type: 'paragraph',
        num: '§ 46',
        fr: 'On vérifie analytiquement que l’égalité est vraie pour c = 1 ; puis que si le théorème est vrai pour c = γ il sera vrai pour c = γ + 1.',
        zh: '人们可以从分析上验证，该等式对 c = 1 成立；进而验证，倘若该定理对 c = γ 成立，它对 c = γ + 1 也成立。'
      },
      {
        id: 'sh-ch01-p47',
        type: 'paragraph',
        num: '§ 47',
        fr: 'La proposition est encore démontrée par récurrence.',
        zh: '这一命题同样依递推得到了证明。'
      },
      {
        id: 'sh-ch01-p48',
        type: 'paragraph',
        num: '§ 48',
        fr: 'Commutativité. — 1° Je dis que\n\n    a × 1 = 1 × a.',
        zh: '**交换律**——第一，我断言：\n\na × 1 = 1 × a。'
      },
      {
        id: 'sh-ch01-p49',
        type: 'paragraph',
        num: '§ 49',
        fr: 'Le théorème est évident pour a = 1.',
        zh: '该定理对 a = 1 是显而易见的。'
      },
      {
        id: 'sh-ch01-p50',
        type: 'paragraph',
        num: '§ 50',
        fr: 'On vérifie analytiquement que s’il est vrai pour a = α il sera vrai pour a = α + 1.',
        zh: '人们可以从分析上验证，倘若它对 a = α 成立，它对 a = α + 1 也成立。'
      },
      {
        id: 'sh-ch01-p51',
        type: 'paragraph',
        num: '§ 51',
        fr: '2° Je dis que\n\n    a × b = b × a.',
        zh: '第二，我断言：\n\na × b = b × a。'
      },
      {
        id: 'sh-ch01-p52',
        type: 'paragraph',
        num: '§ 52',
        fr: 'Le théorème vient d’être démontré pour b = 1. On vérifierait analytiquement que s’il est vrai pour b = β il le sera pour b = β + 1.',
        zh: '该定理对 b = 1 的情形刚才已经证得。人们同样可以从分析上验证，倘若它对 b = β 成立，它对 b = β + 1 也必成立。'
      },
      {
        id: 'sh-ch01-p53',
        type: 'paragraph',
        num: '§ 53',
        fr: 'IV',
        zh: '**四**'
      },
      {
        id: 'sh-ch01-p54',
        type: 'paragraph',
        num: '§ 54',
        fr: 'J’arrête là cette série monotone de raisonnements. Mais cette monotonie même a mieux fait ressortir le procédé qui est uniforme et qu’on retrouve à chaque pas.',
        zh: '我就此打住这一连串单调的推理。然而恰恰是这种单调性，反而更鲜明地烘托出那个一成不变、在每一步上都会重现的程序。'
      },
      {
        id: 'sh-ch01-p55',
        type: 'paragraph',
        num: '§ 55',
        fr: 'Ce procédé est la démonstration par récurrence. On établit d’abord un théorème pour n = 1 ; on montre ensuite que s’il est vrai de n − 1, il est vrai de n et on en conclut qu’il est vrai pour tous les nombres entiers.',
        zh: '这一程序便是递推证明：人们首先确立某一定理对 n = 1 成立；随后证明倘若它对 n − 1 成立，它便对 n 成立，并由此得出结论说，它对一切整数都成立。'
      },
      {
        id: 'sh-ch01-p56',
        type: 'paragraph',
        num: '§ 56',
        fr: 'On vient de voir comment on peut s’en servir pour démontrer les règles de l’addition et de la multiplication, c’est-à-dire les règles du calcul algébrique ; ce calcul est un instrument de transformation qui se prête à beaucoup plus de combinaisons diverses que le simple syllogisme ; mais c’est encore un instrument purement analytique et incapable de rien nous apprendre de nouveau. Si les mathématiques n’en avaient pas d’autre elles seraient donc tout de suite arrêtées dans leur développement ; mais elles ont de nouveau recours au même procédé, c’est-à-dire au raisonnement par récurrence et elles peuvent continuer leur marche en avant.',
        zh: '我们刚才已经看到，人们如何运用它来证明加法与乘法的法则，亦即代数演算的法则；这种演算是一种变换工具，比单纯的三段论容许丰富得多的多样组合；但它依然只是一种纯粹分析的工具，无力教会我们任何新东西。假如数学除此之外别无其他工具，它的发展便会立刻停滞不前；但数学一次又一次诉诸同一程序，亦即诉诸**递推推理**，从而得以继续向前迈进。'
      },
      {
        id: 'sh-ch01-p57',
        type: 'paragraph',
        num: '§ 57',
        fr: 'À chaque pas, si on y regarde bien, on retrouve ce mode de raisonnement, soit sous la forme simple que nous venons de lui donner, soit sous une forme plus ou moins modifiée.',
        zh: '只要仔细审视，我们在每一步上都会重新发现这种推理方式——有时采取我们刚才赋予它的那种简单形式，有时则采取或多或少有所变形的形式。'
      },
      {
        id: 'sh-ch01-p58',
        type: 'paragraph',
        num: '§ 58',
        fr: 'C’est donc bien là le raisonnement mathématique par excellence et il nous faut l’examiner de plus près.',
        zh: '因此，这确乎是最典型意义上的数学推理，我们必须对它作更贴近的审视。'
      },
      {
        id: 'sh-ch01-p59',
        type: 'paragraph',
        num: '§ 59',
        fr: 'V',
        zh: '**五**'
      },
      {
        id: 'sh-ch01-p60',
        type: 'paragraph',
        num: '§ 60',
        fr: 'Le caractère essentiel du raisonnement par récurrence c’est qu’il contient, condensés pour ainsi dire en une formule unique, une infinité de syllogismes.',
        zh: '**递推推理的本质特征在于：它把无穷多个三段论浓缩在可以说是唯一的一个公式之中。**'
      },
      {
        id: 'sh-ch01-p61',
        type: 'paragraph',
        num: '§ 61',
        fr: 'Pour qu’on s’en puisse mieux rendre compte, je vais énoncer les uns après les autres ces syllogismes qui sont, si l’on veut me passer l’expression, disposés en cascade.',
        zh: '为了使人们更清楚地体会这一点，不妨容我借用一个比喻，把这些呈「梯级瀑布式」排列的三段论逐一陈述出来。'
      },
      {
        id: 'sh-ch01-p62',
        type: 'paragraph',
        num: '§ 62',
        fr: 'Ce sont bien entendu des syllogismes hypothétiques.',
        zh: '不用说，它们都是[假言三段论]{#g-sh-c1-10}。',
        glosses: [
          {
            id: 'g-sh-c1-10',
            anchor: '假言三段论',
            content:
              '古典逻辑学术语（法语 syllogismes hypothétiques），源于斯多葛学派克律西波斯与波爱修斯的命题逻辑传统，与亚里士多德由主谓性质命题构成的「直言三段论」相对。其肯定前件式（modus ponens）以条件命题「若 P 则 Q」为大前提（la majeure），以肯定前件「今有 P」为小前提（la mineure），推出后件「故有 Q」为结论。'
          }
        ]
      },
      {
        id: 'sh-ch01-p63',
        type: 'paragraph',
        num: '§ 63',
        fr: '    Le théorème est vrai du nombre 1.\n    Or s’il est vrai de 1, il est vrai de 2.\n    Donc il est vrai de 2.\n    Or s’il est vrai de 2, il est vrai de 3.\n    Donc il est vrai de 3, et ainsi de suite.',
        zh: '该定理对数 1 成立。\n\n而倘若它对 1 成立，它就对 2 成立。\n\n所以它对 2 成立。\n\n而倘若它对 2 成立，它就对 3 成立。\n\n所以它对 3 成立，依此类推。'
      },
      {
        id: 'sh-ch01-p64',
        type: 'paragraph',
        num: '§ 64',
        fr: 'On voit que la conclusion de chaque syllogisme sert de mineure au suivant.',
        zh: '可以看出，每一个三段论的结论都充当下一个三段论的小前提。'
      },
      {
        id: 'sh-ch01-p65',
        type: 'paragraph',
        num: '§ 65',
        fr: 'De plus les majeures de tous nos syllogismes peuvent être ramenées à une formule unique.\n\nSi le théorème est vrai de n − 1, il l’est de n.',
        zh: '此外，我们所有这些三段论的大前提都可以归结为同一个公式：\n\n倘若该定理对 n − 1 成立，它就对 n 成立。'
      },
      {
        id: 'sh-ch01-p66',
        type: 'paragraph',
        num: '§ 66',
        fr: 'On voit donc que, dans les raisonnements par récurrence, on se borne à énoncer la mineure du premier syllogisme, et la formule générale qui contient comme cas particuliers toutes les majeures.',
        zh: '由此可见，在递推推理中，人们只需陈述第一个三段论的小前提，以及把全部大前提作为特例包罗在内的那个普遍公式。'
      },
      {
        id: 'sh-ch01-p67',
        type: 'paragraph',
        num: '§ 67',
        fr: 'Cette suite de syllogismes qui ne finirait jamais se trouve ainsi réduite à une phrase de quelques lignes.',
        zh: '这一串永远不会终结的三段论序列，就这样被缩减成了短短几行的一句话。'
      },
      {
        id: 'sh-ch01-p68',
        type: 'paragraph',
        num: '§ 68',
        fr: 'Il est facile maintenant de comprendre pourquoi toute conséquence particulière d’un théorème peut, comme je l’ai expliqué plus haut, être vérifiée par des procédés purement analytiques.',
        zh: '现在便很容易理解，为什么正如我在前文所解释的那样，一个定理的任何特殊推论都可以通过纯粹分析的程序加以验证。'
      },
      {
        id: 'sh-ch01-p69',
        type: 'paragraph',
        num: '§ 69',
        fr: 'Si au lieu de montrer que notre théorème est vrai de tous les nombres, nous voulons seulement faire voir qu’il est vrai du nombre 6 par exemple, il nous suffira d’établir les 5 premiers syllogismes de notre cascade ; il nous en faudrait 9 si nous voulions démontrer le théorème pour le nombre 10 ; il nous en faudrait davantage encore pour un nombre plus grand ; mais quelque grand que soit ce nombre nous finirions toujours par l’atteindre, et la vérification analytique serait possible.',
        zh: '假如我们不想证明我们的定理对一切数成立，而只想表明比方说它对数 6 成立，那么只需建立我们这串梯级瀑布中的前 5 个三段论就够了；倘若我们想对数 10 证明该定理，就需要 9 个三段论；对于更大的数，还需要更多；但无论这个数有多大，我们终归能够抵达它，分析性的验证也总是可能的。'
      },
      {
        id: 'sh-ch01-p70',
        type: 'paragraph',
        num: '§ 70',
        fr: 'Et cependant, quelque loin que nous allions ainsi, nous ne nous élèverions jamais jusqu’au théorème général, applicable à tous les nombres, qui seul peut être objet de science. Pour y arriver, il faudrait une infinité de syllogismes, il faudrait franchir un abîme que la patience de l’analyste, réduit aux seules ressources de la logique formelle, ne parviendra jamais à combler.',
        zh: '然而，无论我们沿着这条路走多远，都永远无法上升到适用于一切数的普遍定理，而唯有普遍定理才能成为科学的对象。为了抵达那里，就需要无穷多个三段论，就必须跨越一道鸿沟——倘若分析家只能依赖形式逻辑这一种资源，无论他多有耐心，也永远填不平这道鸿沟。'
      },
      {
        id: 'sh-ch01-p71',
        type: 'paragraph',
        num: '§ 71',
        fr: 'Je demandais au début pourquoi on ne saurait concevoir un esprit assez puissant pour apercevoir d’un seul coup d’œil l’ensemble des vérités mathématiques.',
        zh: '我在开篇时曾发问：为什么我们无法设想一个足够强大的心智，能够一眼洞见数学真理的全体？'
      },
      {
        id: 'sh-ch01-p72',
        type: 'paragraph',
        num: '§ 72',
        fr: 'La réponse est aisée maintenant ; un joueur d’échecs peut combiner quatre coups, cinq coups d’avance, mais, si extraordinaire qu’on le suppose, il n’en préparera jamais qu’un nombre fini ; s’il applique ses facultés à l’arithmétique, il ne pourra en apercevoir les vérités générales d’une seule intuition directe ; pour parvenir au plus petit théorème, il ne pourra s’affranchir de l’aide du raisonnement par récurrence parce que c’est un instrument qui permet de passer du fini à l’infini.',
        zh: '如今答案已经显而易见了：一位国际象棋棋手可以预先算好四步棋、五步棋的组合，但无论我们假定他多么超群绝伦，他所能筹划的步数永远只是一个有限的数；倘若他把自己的才智运用于算术，也绝不可能凭一次直接直观便洞见其中的普遍真理；哪怕为了抵达最微小的普遍定理，他也摆脱不了递推推理的帮助，因为这正是使我们得以**从有限过渡到无限**的工具。'
      },
      {
        id: 'sh-ch01-p73',
        type: 'paragraph',
        num: '§ 73',
        fr: 'Cet instrument est toujours utile, puisque, nous faisant franchir d’un bond autant d’étapes que nous le voulons, il nous dispense de vérifications longues, fastidieuses et monotones qui deviendraient rapidement impraticables. Mais il devient indispensable dès qu’on vise au théorème général, dont la vérification analytique nous rapprocherait sans cesse, sans nous permettre de l’atteindre.',
        zh: '这一工具在任何时候都是有用的，因为它让我们一跃跨过任意多的阶段，免除了冗长、繁琐而又单调的验证——那种验证很快就会变得在实际上无法执行。而一旦我们瞄准普遍定理，这一工具更是不可或缺：分析性的验证虽能让我们不断向普遍定理逼近，却永远无法让我们真正抵达它。'
      },
      {
        id: 'sh-ch01-p74',
        type: 'paragraph',
        num: '§ 74',
        fr: 'Dans ce domaine de l’arithmétique, on peut se croire bien loin de l’analyse infinitésimale, et, cependant, nous venons de le voir, l’idée de l’infini mathématique joue déjà un rôle prépondérant, et sans elle il n’y aurait pas de science parce qu’il n’y aurait rien de général.',
        zh: '在算术这一领域里，人们或许以为自己离无穷小分析还十分遥远；然而我们刚刚看到，数学无穷的观念在这里已经扮演着举足轻重的角色，没有它就不会有科学，因为没有它就不会有任何普遍的东西。'
      },
      {
        id: 'sh-ch01-p75',
        type: 'paragraph',
        num: '§ 75',
        fr: 'VI',
        zh: '**六**'
      },
      {
        id: 'sh-ch01-p76',
        type: 'paragraph',
        num: '§ 76',
        fr: 'Le jugement sur lequel repose le raisonnement par récurrence peut être mis sous d’autres formes ; on peut dire par exemple que dans une collection infinie de nombres entiers différents, il y en a toujours un qui est plus petit que tous les autres.',
        zh: '递推推理所赖以为基的那个判断，也可以改写成其他形式；比方说人们可以表述为：[在由不同整数组成的无穷集合中，总有一个整数比其余所有整数都小]{#g-sh-c1-11}。',
        glosses: [
          {
            id: 'g-sh-c1-11',
            anchor: '在由不同整数组成的无穷集合中，总有一个整数比其余所有整数都小',
            content:
              '即正整数集的良序原理（正整数的任一非空子集必有最小元）。它在逻辑上与数学归纳原理互相等价，也是欧几里得《几何原本》第七卷第三十一命题（素因数存在性证明）及费马「无穷递降法」（méthode de la descente infinie）的隐含前提。弗雷格在《算术基础》（1884）与戴德金在《数是什么且应当是什么？》（1888）中曾尝试借助祖先关系或「链」（Kette）的集合交集从逻辑定义导出归纳原理；庞加莱后来在《数学与逻辑》（1905—1906，载《形而上学与道德评论》）系列论文中对这类逻辑主义还原作了专门批评。'
          }
        ]
      },
      {
        id: 'sh-ch01-p77',
        type: 'paragraph',
        num: '§ 77',
        fr: 'On pourra passer facilement d’un énoncé à l’autre et se donner ainsi l’illusion qu’on a démontré la légitimité du raisonnement par récurrence. Mais on sera toujours arrêté, on arrivera toujours à un axiome indémontrable qui ne sera au fond que la proposition à démontrer traduite dans un autre langage.',
        zh: '人们可以轻而易举地从一种表述过渡到另一种表述，并因此产生一种错觉，以为自己已经证明了递推推理的正当性。然而人们终归会受阻停步，终归会走到一条不可证明的公理面前，而这条公理归根结底不过是把待证命题换了一种语言重新表述出来罢了。'
      },
      {
        id: 'sh-ch01-p78',
        type: 'paragraph',
        num: '§ 78',
        fr: 'On ne peut donc se soustraire à cette conclusion que la règle du raisonnement par récurrence est irréductible au principe de contradiction.',
        zh: '因此，人们无法回避这样一个结论：**递推推理的法则不可还原为矛盾律。**'
      },
      {
        id: 'sh-ch01-p79',
        type: 'paragraph',
        num: '§ 79',
        fr: 'Cette règle ne peut non plus nous venir de l’expérience ; ce que l’expérience pourrait nous apprendre, c’est que la règle est vraie pour les dix, pour les cent premiers nombres par exemple, elle ne peut atteindre la suite indéfinie des nombres, mais seulement une portion plus ou moins longue mais toujours limitée de cette suite.',
        zh: '这条法则同样不可能来自经验；经验所能告诉我们的，充其量只是这条法则对比如前十个数、前一百个数成立，它无从触及无穷无尽的数之序列，而只能触及这一序列中或长或短、却终归有限的一段。'
      },
      {
        id: 'sh-ch01-p80',
        type: 'paragraph',
        num: '§ 80',
        fr: 'Or, s’il ne s’agissait que de cela, le principe de contradiction suffirait, il nous permettrait toujours de développer autant de syllogismes que nous voudrions, c’est seulement quand il s’agit d’en enfermer une infinité dans une seule formule, c’est seulement devant l’infini que ce principe échoue, c’est également là que l’expérience devient impuissante. Cette règle, inaccessible à la démonstration analytique et à l’expérience, est le véritable type du jugement synthétique a priori. On ne saurait d’autre part songer à y voir une convention, comme pour quelques-uns des postulats de la géométrie.',
        zh: '然而，倘若问题仅仅在于有限的一段，单凭矛盾律便已足够，它总是容许我们展开任意多个三段论；唯独当问题在于把无穷多个三段论囊括进唯一一个公式之中时，唯独在面对无穷时，矛盾律才告失效，而经验也正是在这里变得无能为力。**这条既非分析证明所能企及、亦非经验所能企及的法则，正是先天综合判断的真正典范。**另一方面，人们也绝不能设想把它看作一种约定，就像对待几何学的若干公设那样。'
      },
      {
        id: 'sh-ch01-p81',
        type: 'paragraph',
        num: '§ 81',
        fr: 'Pourquoi donc ce jugement s’impose-t-il à nous avec une irrésistible évidence ? C’est qu’il n’est que l’affirmation de la puissance de l’esprit qui se sait capable de concevoir la répétition indéfinie d’un même acte dès que cet acte est une fois possible. L’esprit a de cette puissance une intuition directe et l’expérience ne peut être pour lui qu’une occasion de s’en servir et par là d’en prendre conscience.',
        zh: '那么，为什么这一判断会以不可抗拒的自明性强加于我们呢？**因为它无非是心智对自身力量的一种肯定：心智深知，只要某一个行动有一回是可能的，自己就能够设想这一同一行动的无限重复。**心智对这种力量怀有直接的直观，而经验对于心智而言，不过是运用这种力量并借此意识到它的一个契机罢了。'
      },
      {
        id: 'sh-ch01-p82',
        type: 'paragraph',
        num: '§ 82',
        fr: 'Mais, dira-t-on, si l’expérience brute ne peut légitimer le raisonnement par récurrence, en est-il de même de l’expérience aidée de l’induction ? Nous voyons successivement qu’un théorème est vrai du nombre 1, du nombre 2, du nombre 3 et ainsi de suite, la loi est manifeste, disons-nous, et elle l’est au même titre que toute loi physique appuyée sur des observations dont le nombre est très grand, mais limité.',
        zh: '或许有人会反问道：就算原始经验无法赋予递推推理以正当性，得到归纳辅助的经验难道也是如此吗？我们依次看到某一定理对数 1、对数 2、对数 3 等等成立，于是我们说「规律已经昭然若揭了」，并且它之昭然若揭，与任何建立在数量虽极庞大却依然有限的观测之上的物理定律并无二致。'
      },
      {
        id: 'sh-ch01-p83',
        type: 'paragraph',
        num: '§ 83',
        fr: 'On ne saurait méconnaître qu’il y a là une analogie frappante avec les procédés habituels de l’induction. Mais une différence essentielle subsiste. L’induction, appliquée aux sciences physiques, est toujours incertaine, parce qu’elle repose sur la croyance à un ordre général de l’Univers, ordre qui est en dehors de nous. L’induction mathématique, c’est-à-dire la démonstration par récurrence, s’impose au contraire nécessairement, parce qu’elle n’est que l’affirmation d’une propriété de l’esprit lui-même.',
        zh: '不能否认，这里与通常归纳法的程序确实存在着惊人的相似之处。然而一项本质区别依然存在：**应用于物理科学的归纳永远是不确定的，因为它建立在对宇宙普遍秩序的信念之上，而这一秩序存在于我们之外；相反，数学归纳——亦即递推证明——之所以必然地强加于我们，是因为它不过是对心智自身某项属性的肯定。**'
      },
      {
        id: 'sh-ch01-p84',
        type: 'paragraph',
        num: '§ 84',
        fr: 'VII',
        zh: '**七**'
      },
      {
        id: 'sh-ch01-p85',
        type: 'paragraph',
        num: '§ 85',
        fr: 'Les mathématiciens, je l’ai dit plus haut, s’efforcent toujours de généraliser les propositions qu’ils ont obtenues, et pour ne pas chercher d’autre exemple, nous avons tout à l’heure démontré l’égalité :\n\n    a + 1 = 1 + a,\n\net nous nous en sommes servi ensuite pour établir l’égalité\n\n    a + b = b + a,\n\nqui est manifestement plus générale.',
        zh: '我在前文说过，数学家总是竭力推广他们已经得到的命题；不必另找别的例子，我们刚才先证明了等式：\n\na + 1 = 1 + a，\n\n随后又利用它确立了等式：\n\na + b = b + a，\n\n后者显然更为普遍。'
      },
      {
        id: 'sh-ch01-p86',
        type: 'paragraph',
        num: '§ 86',
        fr: 'Les mathématiques peuvent donc comme les autres sciences procéder du particulier au général.',
        zh: '因此，数学可以像其他科学一样，从特殊走向普遍。'
      },
      {
        id: 'sh-ch01-p87',
        type: 'paragraph',
        num: '§ 87',
        fr: 'Il y a là un fait qui nous aurait paru incompréhensible au début de cette étude, mais qui n’a plus pour nous rien de mystérieux, depuis que nous avons constaté les analogies de la démonstration par récurrence avec l’induction ordinaire.',
        zh: '这一事实在本研究开篇之处原本会让我们觉得不可思议，但自从我们查明了递推证明与通常归纳法之间的类比关系之后，它对我们而言便不再有任何神秘之处了。'
      },
      {
        id: 'sh-ch01-p88',
        type: 'paragraph',
        num: '§ 88',
        fr: 'Sans doute le raisonnement mathématique récurrent et le raisonnement physique inductif reposent sur des fondements différents, mais leur marche est parallèle, ils vont dans le même sens, c’est-à-dire du particulier au général.',
        zh: '诚然，递推的数学推理与归纳的物理推理建立在不同的根基之上，但二者的行进路线是平行的，它们朝着同一个方向——亦即从特殊走向普遍——推进。'
      },
      {
        id: 'sh-ch01-p89',
        type: 'paragraph',
        num: '§ 89',
        fr: 'Examinons la chose d’un peu plus près.',
        zh: '让我们更细致地考察一下其中的肌理。'
      },
      {
        id: 'sh-ch01-p90',
        type: 'paragraph',
        num: '§ 90',
        fr: 'Pour démontrer l’égalité :\n\n    (1) a + 2 = 2 + a,\n\nil nous suffit d’appliquer deux fois la règle\n\n    a + 1 = 1 + a,\n\net d’écrire :\n\n    (2) a + 2 = a + 1 + 1 = 1 + a + 1 = 1 + 1 + a = 2 + a.',
        zh: '为了证明等式：\n\n（1）a + 2 = 2 + a，\n\n我们只需两次应用法则\n\na + 1 = 1 + a，\n\n并写出：\n\n（2）a + 2 = a + 1 + 1 = 1 + a + 1 = 1 + 1 + a = 2 + a。'
      },
      {
        id: 'sh-ch01-p91',
        type: 'paragraph',
        num: '§ 91',
        fr: 'L’égalité (2) ainsi déduite par voie purement analytique de l’égalité (1) n’en est pas cependant un simple cas particulier : elle est autre chose.',
        zh: '然而，这样[由等式（1）通过纯粹分析途径推演出来的等式（2）]{#g-sh-c1-12}，并不是它的一个单纯特例：它是别的东西。',
        glosses: [
          {
            id: 'g-sh-c1-12',
            anchor: '由等式（1）通过纯粹分析途径推演出来的等式（2）',
            content:
              '版本校勘说明：1894 年《形而上学与道德评论》初刊本与 1902 年弗拉马里翁底本在上一段排版时，均误将编号「（1）」印在待证式「a + 2 = 2 + a」之前，而未印在前提法则「a + 1 = 1 + a」之前。结合本句及下两段「等式（2）的两端只是比等式（1）的两端更复杂的组合」可知，庞加莱行文中所谓「等式（1）」实指基本法则「a + 1 = 1 + a」，「等式（2）」则指由其经两次代换构造出的「a + 2 = 2 + a」。译文依底本原貌保留编号。'
          }
        ]
      },
      {
        id: 'sh-ch01-p92',
        type: 'paragraph',
        num: '§ 92',
        fr: 'On ne peut donc même pas dire que dans la partie réellement analytique et déductive des raisonnements mathématiques, on procède du général au particulier, au sens ordinaire du mot.',
        zh: '因此，即便是在数学推理中真正属于分析与演绎的那一部分里，我们甚至也不能在通常词义上说它是从普遍走向特殊的。'
      },
      {
        id: 'sh-ch01-p93',
        type: 'paragraph',
        num: '§ 93',
        fr: 'Les deux membres de l’égalité (2) sont simplement des combinaisons plus compliquées que les deux membres de l’égalité (1) et l’analyse ne sert qu’à séparer les éléments qui entrent dans ces combinaisons et à en étudier les rapports.',
        zh: '等式（2）的两端只不过是比等式（1）的两端更为复杂的组合，而分析的作用仅仅在于把进入这些组合的各个元素拆解开来，并考察它们之间的关系。'
      },
      {
        id: 'sh-ch01-p94',
        type: 'paragraph',
        num: '§ 94',
        fr: 'Les mathématiciens procèdent donc « par construction », ils « construisent » des combinaisons de plus en plus compliquées. Revenant ensuite par l’analyse de ces combinaisons, de ces ensembles, pour ainsi dire, à leurs éléments primitifs, ils aperçoivent les rapports de ces éléments et en déduisent les rapports des ensembles eux-mêmes.',
        zh: '因此，数学家是「[通过构造]{#g-sh-c1-13}」来推进的，他们「构造」出越来越复杂的组合；随后再通过分析，从这些组合——不妨说是从这些整体——回溯到它们的原始元素，洞察这些元素之间的关系，并由此推演出各个整体本身之间的关系。',
        glosses: [
          {
            id: 'g-sh-c1-13',
            anchor: '通过构造',
            content:
              '法语 par construction，针对康德《纯粹理性批判》「先验方法论」（A713 / B741 以下）关于数学乃「通过概念的构造而获得的理性知识」之命题，以及十九世纪法国数学教育与科学方法论学者——如让-玛丽·迪阿梅尔（Jean-Marie Duhamel，1797—1872，《各门推理科学的方法》，1865—1873）与埃德蒙·戈布洛（Edmond Goblot，《科学分类论》，1898）——将「构造」（把基本元素组合为复合图形或代数式，再如把多边形剖分为三角形般加以分解）视为精密科学演进充要机制的观点。'
          }
        ]
      },
      {
        id: 'sh-ch01-p95',
        type: 'paragraph',
        num: '§ 95',
        fr: 'C’est là une marche purement analytique, mais ce n’est pas pourtant une marche du général au particulier, car les ensembles ne sauraient évidemment être regardés comme plus particuliers que leurs éléments.',
        zh: '这固然是一条纯粹分析的行进路线，却并非一条从普遍走向特殊的路线，因为整体显然不能被看作比组成它的元素更为特殊。'
      },
      {
        id: 'sh-ch01-p96',
        type: 'paragraph',
        num: '§ 96',
        fr: 'On a attaché, et à juste titre, une grande importance à ce procédé de la « construction » et on a voulu y voir la condition nécessaire et suffisante des progrès des sciences exactes.',
        zh: '人们十分重视这一「构造」程序，这诚然不无道理；但人们甚至想要在其中看到精密科学得以进步的充分必要条件。'
      },
      {
        id: 'sh-ch01-p97',
        type: 'paragraph',
        num: '§ 97',
        fr: 'Nécessaire, sans doute, mais suffisante, non.',
        zh: '必要，诚然如此；但充分，却绝非如此。'
      },
      {
        id: 'sh-ch01-p98',
        type: 'paragraph',
        num: '§ 98',
        fr: 'Pour qu’une construction puisse être utile, pour qu’elle ne soit pas une vaine fatigue pour l’esprit, pour qu’elle puisse servir de marchepied à qui veut s’élever plus haut, il faut d’abord qu’elle possède une sorte d’unité, qui permette d’y voir autre chose que la juxtaposition de ses éléments.',
        zh: '一项构造要想有用，要想不致沦为令心智徒劳疲惫的累赘，要想能够充当有志登高者的踏脚石，首先就必须具备某种统一性，使人们能够在其中看到某种不同于各个元素单纯拼凑的东西。'
      },
      {
        id: 'sh-ch01-p99',
        type: 'paragraph',
        num: '§ 99',
        fr: 'Ou plus exactement, il faut qu’on trouve quelque avantage à considérer la construction plutôt que ses éléments eux-mêmes.',
        zh: '或者更确切地说，人们必须从考察这项构造本身——而非直接考察组成它的元素——之中获得某种益处。'
      },
      {
        id: 'sh-ch01-p100',
        type: 'paragraph',
        num: '§ 100',
        fr: 'Quel peut être cet avantage ?',
        zh: '这种益处可能是什么呢？'
      },
      {
        id: 'sh-ch01-p101',
        type: 'paragraph',
        num: '§ 101',
        fr: 'Pourquoi raisonner sur un polygone par exemple, qui est toujours décomposable en triangles, et non sur les triangles élémentaires ?',
        zh: '比方说，多边形总是可以分解为若干三角形的，为什么我们要对多边形进行推理，而不直接对那些基本三角形进行推理呢？'
      },
      {
        id: 'sh-ch01-p102',
        type: 'paragraph',
        num: '§ 102',
        fr: 'C’est qu’il y a des propriétés que l’on peut démontrer pour les polygones d’un nombre quelconques de côtés et qu’on peut ensuite appliquer immédiatement à un polygone particulier quelconque.',
        zh: '原因在于，有些性质是可以针对具有任意边数的多边形加以证明的，随后便能直接应用于任何一个特殊的多边形。'
      },
      {
        id: 'sh-ch01-p103',
        type: 'paragraph',
        num: '§ 103',
        fr: 'Le plus souvent, au contraire, ce n’est qu’au prix des plus longs efforts qu’on pourrait les retrouver en étudiant directement les rapports des triangles élémentaires. La connaissance du théorème général nous épargne ces efforts.',
        zh: '相反，在大多数情况下，倘若直接去研究各个基本三角形之间的关系，往往要付出极其漫长的努力才能重新找到这些性质。掌握了普遍定理，就为我们省去了这些辛劳。'
      },
      {
        id: 'sh-ch01-p104',
        type: 'paragraph',
        num: '§ 104',
        fr: 'Une construction ne devient donc intéressante, que quand on peut la ranger à côté d’autres constructions analogues, formant les espèces d’un même genre.',
        zh: '因此，一项构造唯有能够与其他相类似的构造并列归类、共同构成同一个「属」之下的各个「种」时，才变得富有意义。'
      },
      {
        id: 'sh-ch01-p105',
        type: 'paragraph',
        num: '§ 105',
        fr: 'Si le quadrilatère est autre chose que la juxtaposition de deux triangles, c’est qu’il appartient au genre polygone.',
        zh: '四边形之所以不只是两个三角形的拼凑，正是因为它归属于多边形这一个「属」。'
      },
      {
        id: 'sh-ch01-p106',
        type: 'paragraph',
        num: '§ 106',
        fr: 'Encore faut-il qu’on puisse démontrer les propriétés du genre sans être forcé de les établir successivement pour chacune des espèces.',
        zh: '不仅如此，我们还必须能够直接证明这整个「属」的性质，而不必被迫针对其中的每一个「种」逐一加以确立。'
      },
      {
        id: 'sh-ch01-p107',
        type: 'paragraph',
        num: '§ 107',
        fr: 'Pour y arriver, il faut nécessairement remonter du particulier au général, en gravissant un ou plusieurs échelons.',
        zh: '为了做到这一点，就必须攀登上一级或数级阶梯，从特殊回升到普遍。'
      },
      {
        id: 'sh-ch01-p108',
        type: 'paragraph',
        num: '§ 108',
        fr: 'Le procédé analytique « par construction » ne nous oblige pas à en descendre, mais il nous laisse au même niveau.',
        zh: '「通过构造」的分析程序固然不会迫使我们走下阶梯，却只能让我们停留在原有的同一层级上。'
      },
      {
        id: 'sh-ch01-p109',
        type: 'paragraph',
        num: '§ 109',
        fr: 'Nous ne pouvons nous élever que par l’induction mathématique, qui seule peut nous apprendre quelque chose de nouveau. Sans l’aide de cette induction différente à certains égards de l’induction physique, mais féconde comme elle, la construction serait impuissante à créer la science.',
        zh: '**我们唯有凭借数学归纳才能向上攀升，也唯有它才能教会我们某种全新的东西。**倘若没有这种在某些方面有别于物理归纳、却与物理归纳同样富有创造力的归纳相助，单靠构造是无力创立科学的。'
      },
      {
        id: 'sh-ch01-p110',
        type: 'paragraph',
        num: '§ 110',
        fr: 'Observons en terminant que cette induction n’est possible que si une même opération peut se répéter indéfiniment. C’est pour cela que la théorie du jeu d’échec ne pourra jamais devenir une science, puisque les différents coups d’une même partie ne se ressemblent pas.',
        zh: '最后我们不妨指出，这种归纳唯有在同一运算能够无限重复的前提下才是可能的。正因如此，[国际象棋理论永远不可能成为一门科学]{#g-sh-c1-14}，因为同一局棋中的各步着法彼此并不相同。',
        glosses: [
          {
            id: 'g-sh-c1-14',
            anchor: '国际象棋理论永远不可能成为一门科学',
            content:
              '在二十世纪数学与数理逻辑史上，与本章论点直接相关的后续发展主要有二：其一，德国数学家恩斯特·策梅洛（Ernst Zermelo，1871—1953）于 1913 年发表《集合论在国际象棋理论中的一项应用》，证明由于合法棋局状态与步数存在有限上界，可在有限博弈树上通过逆向有限检验判定必胜或和棋策略的存在（即有限组合验证与跨越无穷的普遍算术定理仍分属不同层级）；其二，庞加莱将算术归纳归结为不可还原于形式逻辑的「同一行动可无限重复之心智直观」，此后不仅贯穿于他 1905 至 1912 年间同罗素、库图拉、策梅洛及大卫·希尔伯特（David Hilbert，1862—1943）围绕逻辑主义与非谓词定义的论争，亦影响了荷兰数学家鲁伊兹·布劳威尔（L. E. J. Brouwer，1881—1966）1907 年博士论文《论数学的基础》所创立的数学直觉主义，并在库尔特·哥德尔（Kurt Gödel）1931 年不完备性定理与格哈德·根岑（Gerhard Gentzen）1936 年利用直至 ε₀ 的超限归纳所作的皮亚诺算术相容性证明中得到形式刻画。'
          }
        ]
      }
    ]
  }
];
