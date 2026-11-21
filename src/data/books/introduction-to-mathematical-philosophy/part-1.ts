import type { BookSection } from '../../../types/book';

export const russellPart1Sections: BookSection[] = [
  {
    id: 'preface',
    roman: 'Preface',
    titleOriginal: 'Preface',
    titleZh: '序言',
    aiModel: 'Gemini-4-Carbon',
    blocks: [
      {
        id: 'imp-pref-p01',
        num: '§ 01',
        original:
          'This book is intended essentially as an “Introduction,” and does not aim at giving an exhaustive discussion of the problems with which it deals. It seemed desirable to set forth certain results, hitherto only available to those who have mastered logical symbolism, in a form offering the minimum of difficulty to the beginner. The utmost endeavour has been made to avoid dogmatism on such questions as are still open to serious doubt, and this endeavour has to some extent dominated the choice of topics considered. The beginnings of mathematical logic are less definitely known than its later portions, but are of at least equal philosophical interest. Much of what is set forth in the following chapters is not properly to be called “philosophy,” though the matters concerned were included in philosophy so long as no satisfactory science of them existed. The nature of infinity and continuity, for example, belonged in former days to philosophy, but belongs now to mathematics. Mathematical philosophy, in the strict sense, cannot, perhaps, be held to include such definite scientific results as have been obtained in this region; the philosophy of mathematics will naturally be expected to deal with questions on the frontier of knowledge, as to which comparative certainty is not yet attained. But speculation on such questions is hardly likely to be fruitful unless the more scientific parts of the principles of mathematics are known. A book dealing with those parts may, therefore, claim to be an introduction to mathematical philosophy, though it can hardly claim, except where it steps outside its province, to be actually dealing with a part of philosophy. It does deal, however, with a body of knowledge which, to those who accept it, appears to invalidate much traditional philosophy, and even a good deal of what is current in the present day. In this way, as well as by its bearing on still unsolved problems, mathematical logic is relevant to philosophy. For this reason, as well as on account of the intrinsic importance of the subject, some purpose may be served by a succinct account of the main results of mathematical logic in a form requiring neither a knowledge of mathematics nor an aptitude for mathematical symbolism. Here, however, as elsewhere, the method is more important than the results, from the point of view of further research; and the method cannot well be explained within the framework of such a book as the following. It is to be hoped that some readers may be sufficiently interested to advance to a study of the method by which mathematical logic can be made helpful in investigating the traditional problems of philosophy. But that is a topic with which the following pages have not attempted to deal.\n\nBERTRAND RUSSELL.',
        zh: '本书就其宗旨而言是一部「[导论]{#g-imp-pref-01}」，并不企图对所探讨的诸问题作穷尽无遗的论述。若干迄今唯有精通逻辑符号系统者方能问津的研究成果，似有必要以对初学者造成最少困难的形式阐述出来。凡仍存重大疑问的问题，本书已竭尽全力避免独断，而这一努力也在相当程度上主导了所论题目的取舍。数理逻辑的发端部分不如其后续部分那样确切已知，但至少具有同等的哲学兴味。以下各章所阐述的许多内容，严格说来不宜称为「哲学」，尽管在关于这些事务的圆满科学建立之前，它们一直被归入哲学之中。例如，[无穷与连续性的本性]{#g-imp-pref-02}昔日属于哲学，如今却属于数学。严格意义上的数理哲学，或许不能被认为包含这一领域已经取得的那些确定的科学成果；人们自然会期待数学哲学去处理知识边疆上的问题，即那些仍未达成相对确定性的问题。然而，倘若对数学原理中更具科学性的部分茫然无知，针对此类问题的思辨便几乎不可能结出果实。因此，一部探讨这些部分的著作可以自称为数理哲学导论，尽管除非越出自身界域，它很难宣称自己实际处理的乃是哲学的一个部分。不过，它所处理的这门知识体系，在承认它的人看来，却足以使大量[传统哲学乃至当今流行的不少哲学学说]{#g-imp-pref-03}归于失效。正是在这一方面，加之它与悬而未决的难题息息相关，数理逻辑同哲学具有切近的关联。出于这一缘由，也鉴于这一课题本身的重要性，以一种既不要求数学知识、亦不要求数学符号禀赋的形式，简明扼要地叙述数理逻辑的主要成果，或许不无裨益。然而，从进一步研究的角度来看，此处正如别处一样，方法比成果更为重要；而方法却很难在下面这样一部著作的框架内得到妥善解说。但愿部分读者能由此生发足够的兴趣，进而钻研那种使数理逻辑有助于探究传统哲学问题的方法。不过，那已是本书各章并未尝试涉足的课题了。\n\n**伯特兰·罗素**',
        glosses: [
          {
            id: 'g-imp-pref-01',
            anchor: '导论',
            content:
              '《数理哲学导论》（Introduction to Mathematical Philosophy）撰于 1918 年 5 月至 9 月伦敦布里克斯顿监狱（Brixton Prison）之中。第一次世界大战末期，罗素因在反征兵周刊《论坛报》（The Tribunal）发表反战文章，被英国当局依《国土防卫法》（Defence of the Realm Act）判处六个月监禁，获准在第一等囚室（First Division）阅读并著述；服刑期间他完成了本书全稿、评杜威长文以及《心的分析》预备提纲。全书于 1919 年 5 月由伦敦乔治·艾伦与昂温出版社收入约翰·亨利·缪尔黑德主编的「哲学丛书」（Library of Philosophy）初版印行，1920 年 4 月出订正第二版。在初版卷首《编者按》所引罗素自拟的内容提要中，罗素称本书专为此前未接触过相关课题的读者而作，「无需具备超过小学——甚至超过**伊顿公学**（Eton College）——所能学到的数学知识」（这所英国贵族公学传统课程偏重古典拉丁希腊诗文而轻忽近代数学训练），旨在引导读者进而研读皮亚诺、弗雷格、康托尔与怀特海等人的原著。',
          },
          {
            id: 'g-imp-pref-02',
            anchor: '无穷与连续性的本性',
            content:
              '自古希腊埃利亚学派芝诺（Zeno of Elea）提出飞矢不动与阿基里斯追龟诸悖论、亚里士多德在《物理学》第三卷只承认「潜无穷」而拒斥「实无穷」，下迄康德《纯粹理性批判》（1781）中纯粹理性的第一与第二组二律背反，无穷与连续统问题在两千余年间始终被归入哲学思辨。十九世纪下半叶，德国数学家**格奥尔格·康托尔**（Georg Cantor，1845—1918）于 1874 至 1897 年间创立集合论（Mengenlehre），严格定义了超穷基数与超穷序数的算术，并给出实数线性连续统的纯集合论刻画；配合**理查德·戴德金**（Richard Dedekind，1831—1916）于 1872 年《连续性与无理数》中提出的有理数「分割」（Schnitt）理论，无穷与连续性遂由形而上学移入精确数学版图（详见本书第七至十一章）。',
          },
          {
            id: 'g-imp-pref-03',
            anchor: '传统哲学乃至当今流行的不少哲学学说',
            content:
              '罗素此处所指的三重哲学靶子（详见其 1914 年《我们关于外在世界的知识》）：其一是康德先验感性论，康德把算术与几何命题归结为依赖时间与空间纯直观的「先天综合判断」，数理逻辑则证明纯数学无需诉诸时空直观；其二是十九世纪末盛行于英国学界的新黑格尔派绝对唯心论（以弗朗西斯·赫伯特·布拉德雷《现象与实在》，1893 年为代表），该派依传统主谓词逻辑断言「关系」「多」「数」「空间」与「时间」皆含内在矛盾而沦为假象，现代关系逻辑与超穷集合论则瓦解了其论证前提；其三是法国哲学家昂利·柏格森（Henri Bergson）的生命直觉主义，柏格森将绵延（durée）与理智对立起来，指责数学分析僵化并歪曲了连续运动。',
          },
        ],
      },
    ],
  },
  {
    id: 'ch01-natural-numbers',
    roman: 'I',
    titleOriginal: 'Chapter I. The Series of Natural Numbers',
    titleZh: '第一章 自然数序列',
    aiModel: 'Gemini-4-Carbon',
    blocks: [
      {
        id: 'imp-ch01-p01',
        num: '§ 01',
        original:
          'Mathematics is a study which, when we start from its most familiar portions, may be pursued in either of two opposite directions. The more familiar direction is constructive, towards gradually increasing complexity: from integers to fractions, real numbers, complex numbers; from addition and multiplication to differentiation and integration, and on to higher mathematics. The other direction, which is less familiar, proceeds, by analysing, to greater and greater abstractness and logical simplicity; instead of asking what can be defined and deduced from what is assumed to begin with, we ask instead what more general ideas and principles can be found, in terms of which what was our starting-point can be defined or deduced. It is the fact of pursuing this opposite direction that characterises mathematical philosophy as opposed to ordinary mathematics. But it should be understood that the distinction is one, not in the subject matter, but in the state of mind of the investigator. Early Greek geometers, passing from the empirical rules of Egyptian land-surveying to the general propositions by which those rules were found to be justifiable, and thence to Euclid’s axioms and postulates, were engaged in mathematical philosophy, according to the above definition; but when once the axioms and postulates had been reached, their deductive employment, as we find it in Euclid, belonged to mathematics in the ordinary sense. The distinction between mathematics and mathematical philosophy is one which depends upon the interest inspiring the research, and upon the stage which the research has reached; not upon the propositions with which the research is concerned.',
        zh: '数学这门学问，当我们从其中最熟悉的部分出发时，可以沿着两个相反的方向之一推进。较为熟悉的方向是构造性的，朝着逐渐增长的复杂性迈进：从整数走向分数、实数、复数；从加法与乘法走向微分与积分，并一路通往高等数学。另一个较少为人熟悉的方向，则[借由分析走向越来越高的抽象性与逻辑简单性]{#g-imp-c1-01}；我们不再追问从最初假定的前提中能够定义和推演出什么，反而追问能够找到怎样一些更普遍的观念与原则，使我们原先的出发点能够用它们来加以定义或推演。正是沿着这一相反方向推进的事实，构成了数理哲学区别于普通数学的特征。但应当理解，这一区分并不在于题材，而在于研究者的心智取向。早期希腊几何学家从[埃及土地丈量的经验规则]{#g-imp-c1-02}出发，上升到使那些规则获得正当性依据的普遍命题，再由此上溯至欧几里得的公理与公设——按照上述定义，他们所从事的正是数理哲学；可一旦抵达了这些公理与公设，像我们在欧几里得著作中所看到的那样对它们作演绎运用，便属于通常意义上的数学了。数学与数理哲学的区分，取决于激发研究的志趣，也取决于研究所抵达的阶段，而不取决于研究所关涉的命题。',
        glosses: [
          {
            id: 'g-imp-c1-01',
            anchor: '借由分析走向越来越高的抽象性与逻辑简单性',
            content:
              '罗素于 1907 年 3 月在剑桥数学学会宣读的论文《论发现数学前提的回溯法》（The Regressive Method of Discovering the Premises of Mathematics）中曾专门阐明这一「分析方向」的方法论：传统唯理论误以为逻辑上的第一原理必定也是认识论上最自明、最无可怀疑的真理；实则人类认识最确定无疑的出发点乃是处在逻辑链条中段的日常算术命题（如「2 + 2 = 4」），数理哲学的回溯分析（regressive analysis）正是把这类熟知命题当作给定材料，逆向寻找足以推导出它们的最少且逻辑上最简单的基本前提，正如同物理学从可观察现象回溯引力定律一般。',
          },
          {
            id: 'g-imp-c1-02',
            anchor: '埃及土地丈量的经验规则',
            content:
              '古希腊历史学家希罗多德《历史》第二卷第 109 节及普罗克洛斯《〈几何原本〉第一卷评注》（引罗德岛的欧德摩斯《几何学史》残篇）均记载：尼罗河每年泛滥冲毁田界，古埃及法老遂派「拉绳丈量官」（harpedonaptai）重测各户耕地增损以核定赋税，积累下丰富的实用求积与直角构图法则。希腊文「几何学」（geōmetria）字面即「土地丈量」，经泰勒斯、毕达哥拉斯学派与欧多克索斯将其改造为纯粹演绎证明体系，最终汇集为欧几里得《几何原本》（约公元前 300 年）卷首的五条公设（aitēmata）与五条公理（koinai ennoiai，通念）。',
          },
        ],
      },
      {
        id: 'imp-ch01-p02',
        num: '§ 02',
        original:
          'We may state the same distinction in another way. The most obvious and easy things in mathematics are not those that come logically at the beginning; they are things that, from the point of view of logical deduction, come somewhere in the middle. Just as the easiest bodies to see are those that are neither very near nor very far, neither very small nor very great, so the easiest conceptions to grasp are those that are neither very complex nor very simple (using “simple” in a logical sense). And as we need two sorts of instruments, the telescope and the microscope, for the enlargement of our visual powers, so we need two sorts of instruments for the enlargement of our logical powers, one to take us forward to the higher mathematics, the other to take us backward to the logical foundations of the things that we are inclined to take for granted in mathematics. We shall find that by analysing our ordinary mathematical notions we acquire fresh insight, new powers, and the means of reaching whole new mathematical subjects by adopting fresh lines of advance after our backward journey. It is the purpose of this book to explain mathematical philosophy simply and untechnically, without enlarging upon those portions which are so doubtful or difficult that an elementary treatment is scarcely possible. A full treatment will be found in Principia Mathematica;[1] the treatment in the present volume is intended merely as an introduction.',
        zh: '我们可以换一种方式来陈述同一区分。数学中最显豁、最容易的事物，并不是在逻辑上居于开端的事物；从逻辑演绎的观点来看，它们乃是居于中段某处的事物。正如最容易看见的物体是那些既不太近也不太远、既不太小也不太大的物体一样，最容易把握的概念也是那些既不太复杂也不太简单的概念（此处是在逻辑意义上使用「简单」一词）。又正如为了扩展视觉能力，我们需要望远镜与显微镜这两种仪器一样，为了扩展逻辑能力，我们同样需要两种仪器：一种带我们向前迈入高等数学，另一种带我们向后退回那些在数学中我们惯于视为理所当然之事物的逻辑基础。我们将会看到，借由分析日常数学概念，我们会获得崭新的洞见、新的力量，并在完成这趟向后回溯的旅程之后，通过采取新的推进路线而获得通达一整批全新数学分支的手段。本书的目的，就是以浅显而非技术性的方式解说数理哲学，对于那些疑窦重重或过于艰深以致几乎无法作初等处理的部分则不予铺陈。完备的论述可见于[《数学原理》]{#g-imp-c1-03}[^imp-fn-01-1]；本卷的论述仅意在充当一部导论。',
        authorNotes: [
          {
            id: 'imp-fn-01-1',
            original:
              'Cambridge University Press, vol. i., 1910; vol. ii., 1912; vol. iii., 1913. By Whitehead and Russell.',
            zh: '剑桥大学出版社，第一卷，1910 年；第二卷，1912 年；第三卷，1913 年。怀特海与罗素合著。',
          },
        ],
        glosses: [
          {
            id: 'g-imp-c1-03',
            anchor: '《数学原理》',
            content:
              '拉丁文书名 **Principia Mathematica**（1910—1913），由英国数学家、哲学家**阿尔弗雷德·诺思·怀特海**（Alfred North Whitehead，1861—1947，罗素就读剑桥三一学院时的数学导师，晚年赴哈佛创立过程哲学）与罗素历时十年合著而成（原计划由怀特海独力撰写的几何学第四卷未完成）。两人原拟分别为各自前著《泛代数论》（1898）与《数学的原则》（The Principles of Mathematics，1903）撰写续卷，因课题重合遂决定合作撰述。全书融合皮亚诺符号记法与弗雷格量词逻辑，建立摹状词理论与分支类型论，从少数纯逻辑初始观念与公理出发，以形式符号推演出命题与谓词演算、类与关系演算、有穷及超穷基数与序数算术以及关系算术。',
          },
        ],
      },
      {
        id: 'imp-ch01-p03',
        num: '§ 03',
        original:
          'To the average educated person of the present day, the obvious starting-point of mathematics would be the series of whole numbers,\n    1, 2, 3, 4,... etc.\nProbably only a person with some mathematical knowledge would think of beginning with 0 instead of with 1, but we will presume this degree of knowledge; we will take as our starting-point the series:\n    0, 1, 2, 3,... n, n+1,...\nand it is this series that we shall mean when we speak of the “series of natural numbers.”',
        zh: '对于当今受过一般教育的人来说，数学显而易见的出发点大概是整数序列：\n\n1, 2, 3, 4, … 等等。\n\n大概只有具备一定数学知识的人才会想到从 0 而不是从 1 开始，但我们不妨假定读者具备这种程度的知识；我们将取如下序列作为出发点：\n\n0, 1, 2, 3, …, n, n + 1, …\n\n每当我们谈及「**自然数序列**」时，所指的就是这个序列。',
      },
      {
        id: 'imp-ch01-p04',
        num: '§ 04',
        original:
          'It is only at a high stage of civilisation that we could take this series as our starting-point. It must have required many ages to discover that a brace of pheasants and a couple of days were both instances of the number 2: the degree of abstraction involved is far from easy. And the discovery that 1 is a number must have been difficult. As for 0, it is a very recent addition; the Greeks and Romans had no such digit. If we had been embarking upon mathematical philosophy in earlier days, we should have had to start with something less abstract than the series of natural numbers, which we should reach as a stage on our backward journey. When the logical foundations of mathematics have grown more familiar, we shall be able to start further back, at what is now a late stage in our analysis. But for the moment the natural numbers seem to represent what is easiest and most familiar in mathematics.',
        zh: '唯有在文明发展到相当高的阶段时，我们才能够取这一序列作为出发点。要发现一对野鸡与两天都是数 2 的实例，想必耗费了漫长的世代：其中涉及的抽象程度绝非易事。发现 1 是一个数，必定同样艰难。至于 0，则是晚近得多的新增成员；[希腊人与罗马人并没有这样一个数字]{#g-imp-c1-04}。倘若我们在更早的时代着手研究数理哲学，就不得不从比自然数序列不那么抽象的东西起步，而自然数序列则将成为我们向后回溯途中的一个驿站。等到数学的逻辑基础变得更为人熟知时，我们便能从更靠后的根基处出发，即从目前在我们分析中尚属后期的阶段出发。但就眼下而言，自然数似乎代表了数学中最容易也最熟悉的东西。',
        glosses: [
          {
            id: 'g-imp-c1-04',
            anchor: '希腊人与罗马人并没有这样一个数字',
            content:
              '在古希腊算术传统中（见亚里士多德《形而上学》1088a6 及欧几里得《几何原本》第七卷定义 1—2），「单位」（monas，即 1）被视为度量的本原而非「数」（arithmos），「数」被定义为「由若干单位组成的多」，故最小的数是 2；希腊字母记数法与罗马数字均非严格位值制，亦无独立表示「空位」或「无」的数字（托勒密天文学数表仅借零散符号标记空缺度分）。将 0 同时确立为十进位值制占位符与可参与四则运算的独立之数（梵文 śūnya，意为「空」），完成于公元七世纪印度数学家婆罗摩笈多《婆罗摩修正体系》（628 年），后经阿拉伯数学（ṣifr）与斐波那契《算盘书》（1202 年）传入欧洲。',
          },
        ],
      },
      {
        id: 'imp-ch01-p05',
        num: '§ 05',
        original:
          'But though familiar, they are not understood. Very few people are prepared with a definition of what is meant by “number,” or “0,” or “1.” It is not very difficult to see that, starting from 0, any other of the natural numbers can be reached by repeated additions of 1, but we shall have to define what we mean by “adding 1,” and what we mean by “repeated.” These questions are by no means easy. It was believed until recently that some, at least, of these first notions of arithmetic must be accepted as too simple and primitive to be defined. Since all terms that are defined are defined by means of other terms, it is clear that human knowledge must always be content to accept some terms as intelligible without definition, in order to have a starting-point for its definitions. It is not clear that there must be terms which are incapable of definition: it is possible that, however far back we go in defining, we always might go further still. On the other hand, it is also possible that, when analysis has been pushed far enough, we can reach terms that really are simple, and therefore logically incapable of the sort of definition that consists in analysing. This is a question which it is not necessary for us to decide; for our purposes it is sufficient to observe that, since human powers are finite, the definitions known to us must always begin somewhere, with terms undefined for the moment, though perhaps not permanently.',
        zh: '然而，自然数虽为人熟知，却并未被人理解。很少有人能拿得出关于「数」、「0」或「1」究竟意指什么的定义。我们不难看出，从 0 出发，借由反复加 1 便可抵达其余任何一个自然数；但我们必须定义「加 1」是什么意思，「反复」又是什么意思。这些问题绝非轻而易举。直到不久以前，人们还一直认为，在这些算术最初的概念当中，至少有一部分因过于简单和原始而无法加以定义，只能照单全收。既然一切被定义的词项都是借由其他词项来定义的，那么显而易见，人类知识为了给自己的定义确立一个出发点，总得满足于将某些词项当作无需定义便可理解的东西接受下来。至于是否必定存在根本不可能被定义的词项，这一点并不清楚：也许无论我们在定义中向后追溯多远，总还可以再向后推进一步。另一方面，同样可能的是，当分析推进得足够深远时，我们会抵达真正简单的词项，因而它们在逻辑上不可能接受那种由分析构成的定义。这个问题我们无需在此裁断；就我们的目的而言，只需指出一点便足够了：既然人类的能力是有限的，我们所知的定义就总得从某处起步，以某些暂时未加定义——尽管未必永远无法定义——的词项作为开端。',
      },
      {
        id: 'imp-ch01-p06',
        num: '§ 06',
        original:
          'All traditional pure mathematics, including analytical geometry, may be regarded as consisting wholly of propositions about the natural numbers. That is to say, the terms which occur can be defined by means of the natural numbers, and the propositions can be deduced from the properties of the natural numbers—with the addition, in each case, of the ideas and propositions of pure logic.',
        zh: '全部传统纯粹数学，包括解析几何在内，都可以看作完全由关于自然数的命题所组成。也就是说，其中出现的词项都可以借由自然数来定义，其中的命题都可以从自然数的性质中推演出来——当然，在每一种情形下都还要加上纯粹逻辑的观念与命题。',
      },
      {
        id: 'imp-ch01-p07',
        num: '§ 07',
        original:
          'That all traditional pure mathematics can be derived from the natural numbers is a fairly recent discovery, though it had long been suspected. Pythagoras, who believed that not only mathematics, but everything else could be deduced from numbers, was the discoverer of the most serious obstacle in the way of what is called the “arithmetising” of mathematics. It was Pythagoras who discovered the existence of incommensurables, and, in particular, the incommensurability of the side of a square and the diagonal. If the length of the side is 1 inch, the number of inches in the diagonal is the square root of 2, which appeared not to be a number at all. The problem thus raised was solved only in our own day, and was only solved completely by the help of the reduction of arithmetic to logic, which will be explained in following chapters. For the present, we shall take for granted the arithmetisation of mathematics, though this was a feat of the very greatest importance.',
        zh: '全部传统纯粹数学皆可从自然数导出，这是一项相当晚近的发现，尽管人们早已有此猜想。毕达哥拉斯相信不仅数学、甚至世间万物都可以从数中推演出来，可偏偏正是他发现了横亘在所谓「数学的算术化」道路上最严峻的障碍。正是毕达哥拉斯发现了[不可公度量]{#g-imp-c1-05}的存在，尤其是正方形的边与对角线的不可公度性。假如边长为 1 英寸，那么对角线的英寸数便是 2 的平方根，而它在当时看来根本算不上一个数。由此引发的难题直到我们自己的时代才得到解决，而且唯有借助后文各章将要解说的「把算术还原为逻辑」，才得到了彻底的解决。眼下我们将把[数学的算术化]{#g-imp-c1-06}视为既定成果，尽管这本身是一项具有头等重大意义的伟业。',
        glosses: [
          {
            id: 'g-imp-c1-05',
            anchor: '不可公度量',
            content:
              '古希腊**毕达哥拉斯**（Pythagoras，约前 570—约前 495）学派奉「万物皆数」（其所谓「数」仅限正整数及其整数比）为宇宙秩序与音乐谐音的本原，却在公元前五世纪（古传由门人梅塔庞图姆的希帕索斯）发现正方形边长与对角线不存在共同的度量单位，即二者之比 √2 无法表为两个整数之比（亚里士多德《前分析篇》41a23—30 记载了若假定二者可公度则将导致同一个整数既奇又偶的归谬证法）。这一发现促使欧多克索斯在《几何原本》第五卷中脱离算术另立几何量（megethos）的一般比例论，使连续几何量与离散算术数在西方数学中长期分立。',
          },
          {
            id: 'g-imp-c1-06',
            anchor: '数学的算术化',
            content:
              '德文习称 **Arithmetisierung der Analysis**（分析学的算术化，菲利克斯·克莱因于 1895 年哥廷根演说中定名），指十九世纪下半叶以德国数学家**卡尔·魏尔斯特拉斯**（Karl Weierstrass，1815—1897）为首、协同戴德金与康托尔完成的分析学严密化工作。魏尔斯特拉斯自十九世纪六十年代柏林大学讲席起，摒弃微积分对几何连续运动直观和含混「无穷小量」的依赖，改以纯粹算术不等式的 ε-δ 极限语言重构连续函数与微积分，并将负整数、有理分数、无理数与复数逐层构造为自然数之上的有序偶或无穷序列（1872 年魏尔斯特拉斯、戴德金与康托尔各自发表严格的实数构造理论；结合笛卡尔解析几何将空间点化归实数坐标组），从而把全部传统纯数学还原为自然数算术与集合论（详见本书第七章）。',
          },
        ],
      },
      {
        id: 'imp-ch01-p08',
        num: '§ 08',
        original:
          'Having reduced all traditional pure mathematics to the theory of the natural numbers, the next step in logical analysis was to reduce this theory itself to the smallest set of premisses and undefined terms from which it could be derived. This work was accomplished by Peano. He showed that the entire theory of the natural numbers could be derived from three primitive ideas and five primitive propositions in addition to those of pure logic. These three ideas and five propositions thus became, as it were, hostages for the whole of traditional pure mathematics. If they could be defined and proved in terms of others, so could all pure mathematics. Their logical “weight,” if one may use such an expression, is equal to that of the whole series of sciences that have been deduced from the theory of the natural numbers; the truth of this whole series is assured if the truth of the five primitive propositions is guaranteed, provided, of course, that there is nothing erroneous in the purely logical apparatus which is also involved. The work of analysing mathematics is extraordinarily facilitated by this work of Peano’s.',
        zh: '既已将全部传统纯粹数学还原为自然数理论，逻辑分析的下一步便是将这一理论本身还原为足以导出它的最小一组前提与未定义词项。这项工作由[皮亚诺]{#g-imp-c1-07}完成。他证明，除了纯粹逻辑的观念与命题之外，整个自然数理论仅凭三个**初始观念**与五条**初始命题**便可推导出来。于是，这三个观念与五条命题宛如充当了全部传统纯粹数学的「人质」：倘若它们能够用其他观念和命题来定义并加以证明，那么全部纯粹数学也就同样能够得到定义和证明。倘若允许借用「逻辑重量」这一说法，它们的逻辑重量便等同于从自然数理论推演出来的整套科学体系的重量；当然，只要其中一并涉及的纯粹逻辑工具毫无舛误，那么一旦这五条初始命题的真理性得到担保，整套科学体系的真理性也就得到了确保。皮亚诺的这项工作，极大地便利了分析数学的事业。',
        glosses: [
          {
            id: 'g-imp-c1-07',
            anchor: '皮亚诺',
            content:
              '**朱塞佩·皮亚诺**（Giuseppe Peano，1858—1932），意大利都灵大学无穷小分析学教授、现代符号逻辑先驱。他在拉丁文论著《算术原理：以新方法阐述》（Arithmetices principia, nova methodo exposita，1889；初版以 1 为首项，自 1898 年《数学公式汇编》Formulaire de Mathématiques 第二卷起改以 0 为首项）中，吸收并改造了戴德金《数是什么且应当是什么？》（Was sind und was sollen die Zahlen?，1888）关于「单无穷系统」的结构刻画，将自然数算术浓缩为三个不加定义的算术初始观念与五条算术公理（初版含四条同一性公理共九条，后将同一性划归纯逻辑而精简为五条），并创制了 ∈（表示元素属于类，取自希腊文 esti「是」首字母）、⊃、∃ 等沿用至今的数理逻辑符号。1900 年 8 月巴黎首届国际哲学大会上，罗素结识皮亚诺并受其符号分析方法启发，返英后即运用并扩充这套记法撰成关系逻辑论文与《数学的原则》。',
          },
        ],
      },
      {
        id: 'imp-ch01-p09',
        num: '§ 09',
        original:
          'The three primitive ideas in Peano’s arithmetic are:\n    0, number, successor.\nBy “successor” he means the next number in the natural order. That is to say, the successor of 0 is 1, the successor of 1 is 2, and so on. By “number” he means, in this connection, the class of the natural numbers.[2] He is not assuming that we know all the members of this class, but only that we know what we mean when we say that this or that is a number, just as we know what we mean when we say “Jones is a man,” though we do not know all men individually.',
        zh: '皮亚诺算术中的三个初始观念是：\n\n**0，数，后继。**\n\n他所说的「后继」，是指在自然顺序中紧接着的下一个数。也就是说，0 的后继是 1，1 的后继是 2，依此类推。在此处的语境中，他所说的「数」是指自然数所构成的类[^imp-fn-01-2]。他并非假定我们逐一认识这个类的全体成员，而只是假定当我们说这个或那个东西是一个数时，我们明白自己是什么意思；正如同当我们说「琼斯是一个人」时，尽管我们并不逐一认识所有的人，却依然明白自己是什么意思一样。',
        authorNotes: [
          {
            id: 'imp-fn-01-2',
            original:
              'We shall use “number” in this sense in the present chapter. Afterwards the word will be used in a more general sense.',
            zh: '在本章中，我们将在这个意义上使用「数」一词。往后该词将在更一般的意义上使用。',
          },
        ],
      },
      {
        id: 'imp-ch01-p10',
        num: '§ 10',
        original:
          'The five primitive propositions which Peano assumes are:\n    (1) 0 is a number.\n    (2) The successor of any number is a number.\n    (3) No two numbers have the same successor.\n    (4) 0 is not the successor of any number.\n    (5) Any property which belongs to 0, and also to the successor of every number which has the property, belongs to all numbers.\nThe last of these is the principle of mathematical induction. We shall have much to say concerning mathematical induction in the sequel; for the present, we are concerned with it only as it occurs in Peano’s analysis of arithmetic.',
        zh: '皮亚诺所假定的五条初始命题是：\n\n（1）0 是一个数。\n\n（2）任何数的后继都是一个数。\n\n（3）没有两个数具有相同的后继。\n\n（4）0 不是任何数的后继。\n\n（5）任何性质，凡属于 0，并且也属于具有该性质的每一个数的后继，便属于一切数。\n\n其中最后一条便是**数学归纳法**原理。后文我们还将对数学归纳法作大量探讨；眼下我们只关注它在皮亚诺算术分析中出现的形态。',
      },
      {
        id: 'imp-ch01-p11',
        num: '§ 11',
        original:
          'Let us consider briefly the kind of way in which the theory of the natural numbers results from these three ideas and five propositions. To begin with, we define 1 as “the successor of 0,” 2 as “the successor of 1,” and so on. We can obviously go on as long as we like with these definitions, since, in virtue of (2), every number that we reach will have a successor, and, in virtue of (3), this cannot be any of the numbers already defined, because, if it were, two different numbers would have the same successor; and in virtue of (4) none of the numbers we reach in the series of successors can be 0. Thus the series of successors gives us an endless series of continually new numbers. In virtue of (5) all numbers come in this series, which begins with 0 and travels on through successive successors: for (a) 0 belongs to this series, and (b) if a number n belongs to it, so does its successor, whence, by mathematical induction, every number belongs to the series.',
        zh: '让我们简略考察一下自然数理论是如何由这三个观念与五条命题推导出来的。首先，我们将 1 定义为「0 的后继」，将 2 定义为「1 的后继」，依此类推。我们显然可以随心所欲地将这些定义一直延续下去，因为根据（2），我们所抵达的每一个数都有一个后继；根据（3），这个后继不可能是任何已经定义过的数，否则就会有两个不同的数具有相同的后继；再根据（4），我们在后继序列中所抵达的任何数都不可能是 0。因此，后继序列给了我们一个不断产生新数的无穷无尽的序列。又根据（5），一切数都出现在这个从 0 开始、经由逐次后继一路延伸的序列之中：因为（a）0 属于这个序列，且（b）若某数 n 属于这个序列，则它的后继也属于这个序列，由此根据数学归纳法，每一个数都属于这个序列。',
      },
      {
        id: 'imp-ch01-p12',
        num: '§ 12',
        original:
          'Suppose we wish to define the sum of two numbers. Taking any number m, we define m+0 as m, and m+(n+1) as the successor of m+n. In virtue of (5) this gives a definition of the sum of m and n, whatever number n may be. Similarly we can define the product of any two numbers. The reader can easily convince himself that any ordinary elementary proposition of arithmetic can be proved by means of our five premisses, and if he has any difficulty he can find the proof in Peano.',
        zh: '假定我们想要定义两个数的和。任取一个数 m，我们将 m + 0 定义为 m，并将 m + (n + 1) 定义为 m + n 的后继。根据（5），无论 n 是什么数，这就给出了 m 与 n 之和的定义。用同样的方式，我们可以定义任意两个数的积。读者很容易使自己确信，算术中任何普通的初等命题都可以凭借这五条前提加以证明；倘若遇到任何困难，都可以在皮亚诺的著作中找到证明。',
      },
      {
        id: 'imp-ch01-p13',
        num: '§ 13',
        original:
          'It is time now to turn to the considerations which make it necessary to advance beyond the standpoint of Peano, who represents the last perfection of the “arithmetisation” of mathematics, to that of Frege, who first succeeded in “logicising” mathematics, i.e. in reducing to logic the arithmetical notions which his predecessors had shown to be sufficient for mathematics. We shall not, in this chapter, actually give Frege’s definition of number and of particular numbers, but we shall give some of the reasons why Peano’s treatment is less final than it appears to be.',
        zh: '现在是时候转向另一些考量了：正是这些考量迫使我们必须超越皮亚诺的立场——他代表了「数学的算术化」臻于极致的状态——进而迈向[弗雷格]{#g-imp-c1-08}的立场，后者率先成功实现了数学的「逻辑化」，即把前人业已证明足以支撑整个数学的那些算术概念还原为逻辑。在本章中，我们暂不实际给出弗雷格关于数以及各个具体之数的定义，但我们将说明若干理由，以见皮亚诺的处理为何并不像表面看起来那样具有终局性。',
        glosses: [
          {
            id: 'g-imp-c1-08',
            anchor: '弗雷格',
            content:
              '**戈特洛布·弗雷格**（Gottlob Frege，1848—1925），德国耶拿大学数学教授，现代数理逻辑、逻辑主义数学哲学与语言分析哲学的奠基人。他在早年著作《概念文字：一种模仿算术语言构造的纯思维公式语言》（Begriffsschrift，1879）中创立了完备的命题演算与含多重量词的高阶谓词演算，突破了自亚里士多德以来将判断一概归结为「主词—谓词」结构的传统逻辑框架；继而在《算术基础》（1884）与两卷本《算术基本规律》（1893、1903）中创立「逻辑主义」（Logicism），致力于证明算术无需经验归纳或先验时空直观，其全部概念皆可由纯逻辑概念定义，其全部定理皆可由纯逻辑基本规律推导。',
          },
        ],
      },
      {
        id: 'imp-ch01-p14',
        num: '§ 14',
        original:
          'In the first place, Peano’s three primitive ideas—namely, “0,” “number,” and “successor”—are capable of an infinite number of different interpretations, all of which will satisfy the five primitive propositions. We will give some examples.',
        zh: '首先，皮亚诺的三个初始观念——即「0」、「数」与「后继」——容许无穷多种不同的解释，而所有这些解释都同样满足那五条初始命题。我们不妨举几个例子。',
      },
      {
        id: 'imp-ch01-p15',
        num: '§ 15',
        original:
          '(1) Let “0” be taken to mean 100, and let “number” be taken to mean the numbers from 100 onward in the series of natural numbers. Then all our primitive propositions are satisfied, even the fourth, for, though 100 is the successor of 99, 99 is not a “number” in the sense which we are now giving to the word “number.” It is obvious that any number may be substituted for 100 in this example.',
        zh: '（1）令「0」指代 100，并令「数」指代自然数序列中从 100 往后的那些数。此时我们全部五条初始命题都得到满足，就连第四条也不例外，因为尽管 100 是 99 的后继，但按照我们现在赋予「数」一词的意义，99 并不是一个「数」。显然，在这个例子中可以用任何数替换 100。',
      },
      {
        id: 'imp-ch01-p16',
        num: '§ 16',
        original:
          '(2) Let “0” have its usual meaning, but let “number” mean what we usually call “even numbers,” and let the “successor” of a number be what results from adding two to it. Then “1” will stand for the number two, “2” will stand for the number four, and so on; the series of “numbers” now will be\n    0, two, four, six, eight...\nAll Peano’s five premisses are satisfied still.',
        zh: '（2）令「0」保持其通常的意义，但令「数」意指我们通常所说的「偶数」，并令一个数的「后继」指给它加上二所得的结果。于是，「1」将代表数二，「2」将代表数四，依此类推；此时的「数」序列将是：\n\n0，二，四，六，八……\n\n皮亚诺的全部五条前提依然得到满足。',
      },
      {
        id: 'imp-ch01-p17',
        num: '§ 17',
        original:
          '(3) Let “0” mean the number one, let “number” mean the set\n    1, 1/2, 1/4, 1/8, 1/16,...\nand let “successor” mean “half.” Then all Peano’s five axioms will be true of this set.',
        zh: '（3）令「0」意指数字一，令「数」意指如下集合：\n\n1, 1/2, 1/4, 1/8, 1/16, …\n\n并令「后继」意指「一半」。此时皮亚诺的全部五条公理对于这个集合也将全部成真。',
      },
      {
        id: 'imp-ch01-p18',
        num: '§ 18',
        original:
          'It is clear that such examples might be multiplied indefinitely. In fact, given any series\n    x_0, x_1, x_2, x_3,... x_n,...\nwhich is endless, contains no repetitions, has a beginning, and has no terms that cannot be reached from the beginning in a finite number of steps, we have a set of terms verifying Peano’s axioms. This is easily seen, though the formal proof is somewhat long. Let “0” mean x_0, let “number” mean the whole set of terms, and let the “successor” of x_n mean x_{n+1}. Then\n(1) “0 is a number,” i.e. x_0 is a member of the set.\n(2) “The successor of any number is a number,” i.e. taking any term x_n in the set, x_{n+1} is also in the set.\n(3) “No two numbers have the same successor,” i.e. if x_m and x_n are two different members of the set, x_{m+1} and x_{n+1} are different; this results from the fact that (by hypothesis) there are no repetitions in the set.\n(4) “0 is not the successor of any number,” i.e. no term in the set comes before x_0.\n(5) This becomes: Any property which belongs to x_0, and belongs to x_{n+1} provided it belongs to x_n, belongs to all the x’s.\nThis follows from the corresponding property for numbers.',
        zh: '显而易见，诸如此类的例子可以无限制地增添下去。事实上，只要给定任意一个序列：\n\nx₀, x₁, x₂, x₃, …, xₙ, …\n\n只要它无穷无尽、不含重复项、具有开端，并且其中没有任何一项不能从开端经过有穷步抵达，我们就拥有了一个满足皮亚诺公理的项集。尽管形式证明略显冗长，这一点却很容易看清。令「0」意指 x₀，令「数」意指这整个项集，并令 xₙ 的「后继」意指 xₙ₊₁。于是：\n\n（1）「0 是一个数」，即 x₀ 是该集合的一个成员。\n\n（2）「任何数的后继都是一个数」，即任取该集合中的一项 xₙ，xₙ₊₁ 也在该集合之中。\n\n（3）「没有两个数具有相同的后继」，即若 xₘ 与 xₙ 是该集合中两个不同的成员，则 xₘ₊₁ 与 xₙ₊₁ 也不同；这源于（按假设）该集合中不存在重复项这一事实。\n\n（4）「0 不是任何数的后继」，即该集合中没有任何一项排在 x₀ 之前。\n\n（5）这一条变为：任何性质，凡属于 x₀，并且只要属于 xₙ 便也属于 xₙ₊₁，便属于所有的 x。\n\n这一点可直接由数所具有的相应性质推出。',
      },
      {
        id: 'imp-ch01-p19',
        num: '§ 19',
        original:
          'A series of the form\n    x_0, x_1, x_2,... x_n,...\nin which there is a first term, a successor to each term (so that there is no last term), no repetitions, and every term can be reached from the start in a finite number of steps, is called a progression. Progressions are of great importance in the principles of mathematics. As we have just seen, every progression verifies Peano’s five axioms. It can be proved, conversely, that every series which verifies Peano’s five axioms is a progression. Hence these five axioms may be used to define the class of progressions: “progressions” are “those series which verify these five axioms.” Any progression may be taken as the basis of pure mathematics: we may give the name “0” to its first term, the name “number” to the whole set of its terms, and the name “successor” to the next in the progression. The progression need not be composed of numbers: it may be composed of points in space, or moments of time, or any other terms of which there is an infinite supply. Each different progression will give rise to a different interpretation of all the propositions of traditional pure mathematics; all these possible interpretations will be equally true.',
        zh: '形如\n\nx₀, x₁, x₂, …, xₙ, …\n\n这样具有首项、每一项都有后继（因而没有末项）、不含重复项、且每一项都能从起点经过有穷步抵达的序列，称为一个**递进序列**。递进序列在数学原理中具有重大意义。正如我们刚才所见，每一个递进序列都满足皮亚诺的五条公理。反过来也可以证明，凡满足皮亚诺五条公理的序列都是一个递进序列。因此，这五条公理可以用来定义递进序列之类：「递进序列」就是「满足这五条公理的那些序列」。任何一个递进序列都可以拿来充当纯粹数学的基础：我们可以把「0」这个名称赋予它的首项，把「数」这个名称赋予它的全体项构成的集合，并把「后继」这个名称赋予递进序列中的下一项。递进序列未必由数构成：它可以由空间中的点、时间中的瞬间，或者任何其他有无穷供应的项构成。每一个不同的递进序列，都会为传统纯粹数学的全部命题带来一种不同的解释；所有这些可能的解释都将同样为真。',
      },
      {
        id: 'imp-ch01-p20',
        num: '§ 20',
        original:
          'In Peano’s system there is nothing to enable us to distinguish between these different interpretations of his primitive ideas. It is assumed that we know what is meant by “0,” and that we shall not suppose that this symbol means 100 or Cleopatra’s Needle or any of the other things that it might mean.',
        zh: '在皮亚诺的系统中，没有任何东西能使我们在他的初始观念的这些不同解释之间作出区分。它只是假定我们知道「0」是什么意思，并且假定我们不会以为这个符号意指 100、[克娄巴特拉方尖碑]{#g-imp-c1-09}或者它本可能意指的任何别的东西。',
        glosses: [
          {
            id: 'g-imp-c1-09',
            anchor: '克娄巴特拉方尖碑',
            content:
              '英文 **Cleopatra’s Needle**，指竖立在伦敦泰晤士河北岸维多利亚堤岸的古埃及红色花岗岩方尖碑。该碑实由新王国第十八王朝法老图特摩斯三世于公元前 1450 年前后立于赫利奥波利斯太阳神庙（与托勒密王朝末代女王克娄巴特拉七世并无建造渊源），1819 年赠予英国，1878 年运抵伦敦安放。罗素在著作与讲演中常举此碑作为时空世界中单一具体殊相（particular）的例证。',
          },
        ],
      },
      {
        id: 'imp-ch01-p21',
        num: '§ 21',
        original:
          'This point, that “0” and “number” and “successor” cannot be defined by means of Peano’s five axioms, but must be independently understood, is important. We want our numbers not merely to verify mathematical formulæ, but to apply in the right way to common objects. We want to have ten fingers and two eyes and one nose. A system in which “1” meant 100, and “2” meant 101, and so on, might be all right for pure mathematics, but would not suit daily life. We want “0” and “number” and “successor” to have meanings which will give us the right allowance of fingers and eyes and noses. We have already some knowledge (though not sufficiently articulate or analytic) of what we mean by “1” and “2” and so on, and our use of numbers in arithmetic must conform to this knowledge. We cannot secure that this shall be the case by Peano’s method; all that we can do, if we adopt his method, is to say “we know what we mean by ‘0’ and ‘number’ and ‘successor,’ though we cannot explain what we mean in terms of other simpler concepts.” It is quite legitimate to say this when we must, and at some point we all must; but it is the object of mathematical philosophy to put off saying it as long as possible. By the logical theory of arithmetic we are able to put it off for a very long time.',
        zh: '「0」、「数」与「后继」无法借由皮亚诺的五条公理来定义，而必须独立加以理解——这一点至关重要。我们希望我们的数不仅满足数学公式，而且能够以恰当的方式应用于日常事物。我们希望自己有十根手指、两只眼睛和一个鼻子。一个让「1」意指 100、「2」意指 101 乃至依此类推的系统，对于纯粹数学或许毫无妨碍，却绝不适合日常生活。我们希望「0」、「数」与「后继」所具有的意义，能分给我们恰如其分的手指、眼睛和鼻子的配额。对于自己所说的「1」和「2」等等意指什么，我们原本就拥有某种认识（尽管还不够明晰，也不够富有分析性），而我们在算术中对数的运用必须契合这种认识。采用皮亚诺的方法，我们无法确保做到这一点；倘若采用他的方法，我们所能做的全部事情就是说：「我们知道自己所说的『0』、『数』与『后继』是什么意思，尽管我们无法用其他更简单的概念来解释自己的意思。」到了迫不得已的时候这样说完全正当，而且在某个关口我们所有人都不得不这样说；然而数理哲学的目标，恰恰在于把说出这句话的时刻尽可能往后推迟。凭借算术的逻辑理论，我们能够把它推迟相当漫长的一段路程。',
      },
      {
        id: 'imp-ch01-p22',
        num: '§ 22',
        original:
          'It might be suggested that, instead of setting up “0” and “number” and “successor” as terms of which we know the meaning although we cannot define them, we might let them stand for any three terms that verify Peano’s five axioms. They will then no longer be terms which have a meaning that is definite though undefined: they will be “variables,” terms concerning which we make certain hypotheses, namely, those stated in the five axioms, but which are otherwise undetermined. If we adopt this plan, our theorems will not be proved concerning an ascertained set of terms called “the natural numbers,” but concerning all sets of terms having certain properties. Such a procedure is not fallacious; indeed for certain purposes it represents a valuable generalisation. But from two points of view it fails to give an adequate basis for arithmetic. In the first place, it does not enable us to know whether there are any sets of terms verifying Peano’s axioms; it does not even give the faintest suggestion of any way of discovering whether there are such sets. In the second place, as already observed, we want our numbers to be such as can be used for counting common objects, and this requires that our numbers should have a definite meaning, not merely that they should have certain formal properties. This definite meaning is defined by the logical theory of arithmetic.',
        zh: '或许有人会提议：与其把「0」、「数」与「后继」确立为我们虽无法定义却已知其意义的词项，不如让它们代表满足皮亚诺五条公理的任意三个词项。那样一来，它们便不再是虽未加定义却具有确定意义的词项，而将成为「**变元**」——即我们仅对其作出五条公理所陈述的那些假设、除此之外则不予确定的词项。倘若采纳这一方案，我们的定理所证明的对象便不再是被称为「自然数」的某个特定项集，而是具有某些性质的一切项集。这种做法并非谬误；事实上，对于某些目的而言，它代表了一种极有价值的推广。然而从两个方面来看，它都未能给算术提供充分的基础。第一，它不能让我们知道究竟是否存在任何满足皮亚诺公理的项集，甚至连如何查明是否存在此类集合的最微弱提示也无法给出。第二，正如前文业已指出的那样，我们希望我们的数能够用来清点日常事物，而这就要求我们的数必须具有确定的意义，不能仅仅具有某些形式性质。这一确定的意义，正是由算术的逻辑理论加以定义的。',
      },
    ],
  },
  {
    id: 'ch02-definition-of-number',
    roman: 'II',
    titleOriginal: 'Chapter II. Definition of Number',
    titleZh: '第二章 数的定义',
    aiModel: 'Gemini-4-Carbon',
    blocks: [
      {
        id: 'imp-ch02-p01',
        num: '§ 01',
        original:
          'The question “What is a number?” is one which has been often asked, but has only been correctly answered in our own time. The answer was given by Frege in 1884, in his Grundlagen der Arithmetik.[1] Although this book is quite short, not difficult, and of the very highest importance, it attracted almost no attention, and the definition of number which it contains remained practically unknown until it was rediscovered by the present author in 1901.',
        zh: '「数是什么？」这个问题曾被人们屡屡提起，却直到我们自己的时代才得到正确的回答。这一回答由弗雷格于 1884 年在他的[《算术基础》]{#g-imp-c2-01}[^imp-fn-02-1]中给出。尽管这部著作篇幅甚短、并不艰深，且具有至高无上的重要性，当时却几乎未引起任何注意，其中所包含的数的定义也几乎无人知晓，直到 1901 年才由本书作者重新发现。',
        authorNotes: [
          {
            id: 'imp-fn-02-1',
            original:
              'The same answer is given more fully and with more development in his Grundgesetze der Arithmetik, vol. i., 1893.',
            zh: '同一回答在他 1893 年出版的《算术基本规律》第一卷中得到了更充分、更深入的阐述。',
          },
        ],
        glosses: [
          {
            id: 'g-imp-c2-01',
            anchor: '《算术基础》',
            content:
              '德文全题 **Die Grundlagen der Arithmetik: Eine logisch-mathematische Untersuchung über den Begriff der Zahl**（《算术基础：对于数这个概念的一种逻辑数学的研究》，1884 年出版于布雷斯劳）。弗雷格在书中系统批驳了约翰·斯图亚特·密尔把算术视为经验归纳的学说、康德诉诸先验直观的学说以及把数混同于主观表象的心理主义，提出「必须在完整句子的联系中追问语词的意谓」之语境原则，论证数的陈述乃是对**概念**作出的断定（例如「金星有 0 颗卫星」断定了「金星的卫星」这一概念之下没有对象），并首次将基数定义为与给定概念「等数」（gleichzahlig）的一切概念的外延。因学界对弗雷格二维逻辑符号的隔膜，该书问世后冷落达十七年之久；罗素早年虽自导师詹姆斯·沃德处获赠《概念文字》，却迟至 1900 年底至 1901 年初独立发现基数的「相似类之类」定义后才细读弗雷格原著，并于《数学的原则》附录 A 中首次向学界系统介绍弗雷格的逻辑与算术学说。',
          },
        ],
      },
      {
        id: 'imp-ch02-p02',
        num: '§ 02',
        original:
          'In seeking a definition of number, the first thing to be clear about is what we may call the grammar of our inquiry. Many philosophers, when attempting to define number, are really setting to work to define plurality, which is quite a different thing. Number is what is characteristic of numbers, as man is what is characteristic of men. A plurality is not an instance of number, but of some particular number. A trio of men, for example, is an instance of the number 3, and the number 3 is an instance of number; but the trio is not an instance of number. This point may seem elementary and scarcely worth mentioning; yet it has proved too subtle for the philosophers, with few exceptions.',
        zh: '在寻求数的定义时，首先必须弄清楚的，是我们不妨称之为我们这一探究的「语法」的东西。许多哲学家在试图定义「数」的时候，实际着手去定义的却是「多」，而这是截然不同的另一回事。「数」是诸数所特有的本性，正如「人」是诸人所特有的本性一样。一个「多」并不是「数」的实例，而是某一个具体之数的实例。例如，一个三人组是数 3 的实例，而数 3 则是「数」的实例；但这个三人组本身却不是「数」的实例。这一点或许显得过于初等、几乎不值一提；然而除了极少数例外，它对于哲学家们来说却已被证明过于微妙了。',
      },
      {
        id: 'imp-ch02-p03',
        num: '§ 03',
        original:
          'A particular number is not identical with any collection of terms having that number: the number 3 is not identical with the trio consisting of Brown, Jones, and Robinson. The number 3 is something which all trios have in common, and which distinguishes them from other collections. A number is something that characterises certain collections, namely, those that have that number.',
        zh: '某一个具体的数，并不等同于具有该数的任何一个项的汇集：数 3 并不等同于由布朗、琼斯和罗宾逊组成的三人组。数 3 是一切三人组所共有、并使它们区别于其他汇集的某种东西。一个数乃是刻画某些汇集——即具有该数的那些汇集——的特征的某种东西。',
      },
      {
        id: 'imp-ch02-p04',
        num: '§ 04',
        original:
          'Instead of speaking of a “collection,” we shall as a rule speak of a “class,” or sometimes a “set.” Other words used in mathematics for the same thing are “aggregate” and “manifold.” We shall have much to say later on about classes. For the present, we will say as little as possible. But there are some remarks that must be made immediately.',
        zh: '我们通常不说「汇集」，而说「**类**」，有时也说「**集合**」。数学中用来指称同一事物的其他语词还有[「聚组」与「流形」]{#g-imp-c2-02}。后文我们还将对「类」作大量讨论。眼下我们将尽可能少谈；但有几点说明必须即刻作出。',
        glosses: [
          {
            id: 'g-imp-c2-02',
            anchor: '「聚组」与「流形」',
            content:
              '英文原文为 **aggregate** 与 **manifold**，系十九世纪末至二十世纪初英语数学界迻译康托尔德文集合论术语 **Menge** 与 **Mannigfaltigkeit** 时的常见译名。康托尔早期论文（1878—1883）沿袭黎曼几何学传统，将集合称为 Mannigfaltigkeit（流形、多杂体）或 Inbegriff（总括），后期统一改称 Menge（1915 年菲利普·茹尔当英译康托尔超穷数论著时译作 aggregate，现代中英文通用 set / 集合）；皮亚诺与罗素则沿用逻辑学传统称之为 class（类）。',
          },
        ],
      },
      {
        id: 'imp-ch02-p05',
        num: '§ 05',
        original:
          'A class or collection may be defined in two ways that at first sight seem quite distinct. We may enumerate its members, as when we say, “The collection I mean is Brown, Jones, and Robinson.” Or we may mention a defining property, as when we speak of “mankind” or “the inhabitants of London.” The definition which enumerates is called a definition by “extension,” and the one which mentions a defining property is called a definition by “intension.” Of these two kinds of definition, the one by intension is logically more fundamental. This is shown by two considerations: (1) that the extensional definition can always be reduced to an intensional one; (2) that the intensional one often cannot even theoretically be reduced to the extensional one. Each of these points needs a word of explanation.',
        zh: '一个类或汇集可以用两种初看起来截然不同的方式加以定义。我们可以逐一列举它的成员，例如说：「我所指的汇集是布朗、琼斯和罗宾逊。」或者我们也可以指明某项定义性质，例如谈及「人类」或「伦敦居民」。逐一列举的定义称为「外延」定义，指明定义性质的定义称为「内涵」定义。在[「外延」定义与「内涵」定义]{#g-imp-c2-03}这两类定义中，内涵定义在逻辑上更为根本。这一点可由两项考量得到证明：（1）外延定义总可以还原为内涵定义；（2）内涵定义往往即便在理论上也无法还原为外延定义。这两点各自需要略作解说。',
        glosses: [
          {
            id: 'g-imp-c2-03',
            anchor: '「外延」定义与「内涵」定义',
            content:
              '英文原文为 **definition by extension** 与 **definition by intension**。这一对逻辑范畴渊源于法国阿尔诺与尼科尔《波尔—罗亚尔逻辑》（La Logique ou l’art de penser，1662）第一部第六章对普遍观念之「外延」（étendue，观念所适用的下属个体总和）与「内涵」（compréhension，构成该观念的诸规定属性总和；十九世纪英国逻辑学家汉密尔顿改以 intension 与 extension 配对）所作的区分。',
          },
        ],
      },
      {
        id: 'imp-ch02-p06',
        num: '§ 06',
        original:
          '(1) Brown, Jones, and Robinson all of them possess a certain property which is possessed by nothing else in the whole universe, namely, the property of being either Brown or Jones or Robinson. This property can be used to give a definition by intension of the class consisting of Brown and Jones and Robinson. Consider such a formula as “x is Brown or x is Jones or x is Robinson.” This formula will be true for just three x’s, namely, Brown and Jones and Robinson. In this respect it resembles a cubic equation with its three roots. It may be taken as assigning a property common to the members of the class consisting of these three men, and peculiar to them. A similar treatment can obviously be applied to any other class given in extension.',
        zh: '（1）布朗、琼斯和罗宾逊全都具有某一种整个宇宙中再无任何别的事物所具有的性质，即「或者是布朗、或者是琼斯、或者是罗宾逊」这一性质。这一性质可以用来给由布朗、琼斯和罗宾逊组成的类提供一个内涵定义。试考察「x 是布朗，或 x 是琼斯，或 x 是罗宾逊」这样一个公式。这个公式恰好对三个 x 成真，即布朗、琼斯和罗宾逊。在这一方面，它酷似一个[三次方程及其三个根]{#g-imp-c2-04}。它可以被看作指派了一项为这三个人所组成的类的成员所共有、且唯独为他们所特有的性质。同样的处理方式显然可以应用于以列举外延方式给出的任何其他类。',
        glosses: [
          {
            id: 'g-imp-c2-04',
            anchor: '三次方程及其三个根',
            content:
              '此处借代数方程及其根类比含未定变元 x 的开语句公式，即罗素在《数学原理》及本书后半部章节中系统阐述的**命题函数**（propositional function，常记作 φx）。这一思想源自弗雷格《函数与概念》（Funktion und Begriff，1891）对数学函数概念的逻辑改造：正如三次方程 x³ − 6x² + 11x − 6 = 0 含有未定元 x，唯有将根 1、2、3 代入方才成立一样，形如「x 是人」或「x 是布朗或琼斯或罗宾逊」的表达式本身并不是有真假可言的命题，而是含有空位的不饱和函数；唯有将确定个体代入变元 x 后才得到或真或假的命题，而使该命题函数取真值的全部个体即它所决定的类。',
          },
        ],
      },
      {
        id: 'imp-ch02-p07',
        num: '§ 07',
        original:
          '(2) It is obvious that in practice we can often know a great deal about a class without being able to enumerate its members. No one man could actually enumerate all men, or even all the inhabitants of London, yet a great deal is known about each of these classes. This is enough to show that definition by extension is not necessary to knowledge about a class. But when we come to consider infinite classes, we find that enumeration is not even theoretically possible for beings who only live for a finite time. We cannot enumerate all the natural numbers: they are 0, 1, 2, 3, and so on. At some point we must content ourselves with “and so on.” We cannot enumerate all fractions or all irrational numbers, or all of any other infinite collection. Thus our knowledge in regard to all such collections can only be derived from a definition by intension.',
        zh: '（2）显而易见，在实践中我们往往无需能够逐一列举一个类的成员，便能对这个类获知甚多。没有任何一个人能够实际列举出所有的人，甚至无法列举出全部伦敦居民，然而对于这两个类中的每一个，人们都已知晓大量事实。这足以表明，外延定义对于获得关于一个类的知识并非必要条件。而当我们进而考察无穷类时便会发现，对于生命有限的存在者而言，逐一列举甚至在理论上也是不可能的。我们无法列举出全部自然数：它们是 0, 1, 2, 3，依此类推。在某个地方，我们不得不满足于「依此类推」。我们无法列举出全部分数或全部无理数，也无法列举出任何其他无穷汇集的全部成员。因此，我们关于一切此类汇集的知识，唯独只能源自内涵定义。',
      },
      {
        id: 'imp-ch02-p08',
        num: '§ 08',
        original:
          'These remarks are relevant, when we are seeking the definition of number, in three different ways. In the first place, numbers themselves form an infinite collection, and cannot therefore be defined by enumeration. In the second place, the collections having a given number of terms themselves presumably form an infinite collection: it is to be presumed, for example, that there are an infinite collection of trios in the world, for if this were not the case the total number of things in the world would be finite, which, though possible, seems unlikely. In the third place, we wish to define “number” in such a way that infinite numbers may be possible; thus we must be able to speak of the number of terms in an infinite collection, and such a collection must be defined by intension, i.e. by a property common to all its members and peculiar to them.',
        zh: '在我们寻求数的定义时，上述说明从三个不同方面与主题相关。第一，诸数本身构成一个无穷汇集，因而无法通过逐一列举来定义。第二，具有给定项数的那些汇集本身想来也构成一个无穷汇集：例如可以推定，世界上存在着无穷多个三人组，因为倘若不然，世界上事物的总数就会是有穷的——这虽非绝无可能，却似乎不大可能。第三，我们希望以使无穷数成为可能的方式来定义「数」；因此我们必须能够谈论一个无穷汇集中项的数目，而这样的汇集必须借由内涵来定义，亦即借由其全体成员所共有且唯独为它们所特有的某项性质来定义。',
      },
      {
        id: 'imp-ch02-p09',
        num: '§ 09',
        original:
          'For many purposes, a class and a defining characteristic of it are practically interchangeable. The vital difference between the two consists in the fact that there is only one class having a given set of members, whereas there are always many different characteristics by which a given class may be defined. Men may be defined as featherless bipeds, or as rational animals, or (more correctly) by the traits by which Swift delineates the Yahoos. It is this fact that a defining characteristic is never unique which makes classes useful; otherwise we could be content with the properties common and peculiar to their members.[2] Any one of these properties can be used in place of the class whenever uniqueness is not important.',
        zh: '就许多目的而言，一个类与它的某项定义特征在实际上是可以互换的。二者的关键区别在于：具有给定一组成员的类只有一个，而可以用来定义某个给定类的不同特征却总有许多。人可以被定义为[无羽两足动物]{#g-imp-c2-05}，或被定义为理性动物，或者（更准确地说）用[斯威夫特刻画耶胡的那些特征]{#g-imp-c2-06}来定义。正是由于定义特征从来不是唯一的，才使得「类」大有用处；否则我们大可以满足于其成员所共有且特有的那些性质[^imp-fn-02-2]。凡是在唯一性无关紧要的地方，这些性质中的任何一项都可以用来代替这个类。',
        authorNotes: [
          {
            id: 'imp-fn-02-2',
            original:
              'As will be explained later, classes may be regarded as logical fictions, manufactured out of defining characteristics. But for the present it will simplify our exposition to treat classes as if they were real.',
            zh: '正如后文将要解释的那样，类可以被视作由定义特征构造出来的逻辑虚构。但就目前而言，把类当作仿佛实在之物来处理，将使我们的阐述更为简明。',
          },
        ],
        glosses: [
          {
            id: 'g-imp-c2-05',
            anchor: '无羽两足动物',
            content:
              '典出柏拉图《政治家篇》（266e）及第欧根尼·拉尔修《名哲言行录》第六卷第 40 节所载学园轶闻：柏拉图将「人」定义为「无羽两足动物」（zōon dipoun apteron）而获称许，犬儒派锡诺普的第欧根尼遂拔光一只公鸡的羽毛携入讲堂宣称「这就是柏拉图的人」，学园遂在定义中增补「有宽平指甲」一条。西方逻辑学史常将「无羽两足动物」与亚里士多德派的「理性动物」并举，作为内涵不同而外延重合的常用例证。',
          },
          {
            id: 'g-imp-c2-06',
            anchor: '斯威夫特刻画耶胡的那些特征',
            content:
              '典出乔纳森·斯威夫特（Jonathan Swift，1667—1745）讽刺小说《格列佛游记》（Gulliver’s Travels，1726）第四卷「慧骃国游记」。在该国度中，马形种族「慧骃」（Houyhnhnms）禀具理性与平和美德，而人形生物「耶胡」（Yahoos）则是贪婪、凶残、党同伐异且热衷无端争斗的兽群。',
          },
        ],
      },
      {
        id: 'imp-ch02-p10',
        num: '§ 10',
        original:
          'Returning now to the definition of number, it is clear that number is a way of bringing together certain collections, namely, those that have a given number of terms. We can suppose all couples in one bundle, all trios in another, and so on. In this way we obtain various bundles of collections, each bundle consisting of all the collections that have a certain number of terms. Each bundle is a class whose members are collections, i.e. classes; thus each is a class of classes. The bundle consisting of all couples, for example, is a class of classes: each couple is a class with two members, and the whole bundle of couples is a class with an infinite number of members, each of which is a class of two members.',
        zh: '现在回到数的定义上来。显而易见，数是把某些汇集——即具有给定项数的那些汇集——归拢到一起的一种方式。我们可以设想把一切对偶归入一束，把一切三人组归入另一束，依此类推。通过这种方式，我们便得到了一束束不同的汇集，每一束都由具有某特定项数的全部汇集组成。每一束都是一个以汇集——亦即类——为成员的类；因此，每一束都是一个**类的类**。例如，由一切对偶组成的那一束就是一个类的类：每一个对偶都是一个具有两个成员的类，而由对偶组成的整束则是一个具有无穷多个成员的类，其中每一个成员又各自是一个由两个成员组成的类。',
      },
      {
        id: 'imp-ch02-p11',
        num: '§ 11',
        original:
          'How shall we decide whether two collections are to belong to the same bundle? The answer that suggests itself is: “Find out how many members each has, and put them in the same bundle if they have the same number of members.” But this presupposes that we have defined numbers, and that we know how to discover how many terms a collection has. We are so used to the operation of counting that such a presupposition might easily pass unnoticed. In fact, however, counting, though familiar, is logically a very complex operation; moreover it is only available, as a means of discovering how many terms a collection has, when the collection is finite. Our definition of number must not assume in advance that all numbers are finite; and we cannot in any case, without a vicious circle, use counting to define numbers, because numbers are used in counting. We need, therefore, some other method of deciding when two collections have the same number of terms.',
        zh: '我们该如何判定两个汇集是否应当归入同一束呢？自然浮现的回答是：「查明它们各自有多少个成员，倘若成员数目相同，就把它们归入同一束。」然而这预先假定了我们已经定义过数，并且知道如何查明一个汇集有多少项。我们对「计数」这一操作实在太习以为常了，以致这样的预设很容易在不知不觉间滑过去。然而事实上，计数虽为人熟知，在逻辑上却是一项极为复杂的操作；况且，作为查明一个汇集有多少项的手段，它唯有在该汇集有穷时方才可用。我们的数的定义绝不能预先假定一切数都是有穷的；无论如何，我们也绝不能在不陷入恶性循环的情况下用计数来定义数，因为在计数中已经用到了数。因此，我们需要某种别的方法来判定两个汇集何时具有相同数目的项。',
      },
      {
        id: 'imp-ch02-p12',
        num: '§ 12',
        original:
          'In actual fact, it is simpler logically to find out whether two collections have the same number of terms than it is to define what that number is. An illustration will make this clear. If there were no polygamy or polyandry anywhere in the world, it is clear that the number of husbands living at any moment would be exactly the same as the number of wives. We do not need a census to assure us of this, nor do we need to know what is the actual number of husbands and of wives. We know the number must be the same in both collections, because each husband has one wife and each wife has one husband. The relation of husband and wife is what is called “one-one.”',
        zh: '事实上，查明两个汇集是否具有相同数目的项，在逻辑上要比定义那个数究竟是什么更为简单。一个例证便可说明这一点。假如世界上任何地方都不存在一夫多妻制或一妻多夫制，那么显而易见，在任何时刻在世的丈夫人数都必定与在世的妻子人数完全相等。我们既不需要靠人口普查来确信这一点，也不需要知道丈夫与妻子的实际人数究竟是多少。我们之所以知道这两个汇集中的数目必定相同，是因为每一位丈夫都有一位妻子，且每一位妻子都有一位丈夫。丈夫与妻子的关系，就是所谓「**一一**」关系。',
      },
      {
        id: 'imp-ch02-p13',
        num: '§ 13',
        original:
          'A relation is said to be “one-one” when, if x has the relation in question to y, no other term x′ has the same relation to y, and x does not have the same relation to any term y′ other than y. When only the first of these two conditions is fulfilled, the relation is called “one-many”; when only the second is fulfilled, it is called “many-one.” It should be observed that the number 1 is not used in these definitions.',
        zh: '当一种关系满足如下条件时，便被称为「**一一关系**」：若 x 对 y 具有所论关系，则没有任何异于 x 的项 x′ 对 y 具有同一关系，且 x 也不对任何异于 y 的项 y′ 具有同一关系。当上述两个条件中唯有第一个得到满足时，该关系称为「**一对多**」关系；当唯有第二个得到满足时，则称为「**多对一**」关系。应当注意，[在这几个定义中完全没有用到数 1]{#g-imp-c2-07}。',
        glosses: [
          {
            id: 'g-imp-c2-07',
            anchor: '在这几个定义中完全没有用到数 1',
            content:
              '英文日常命名「one-one」（一一）字面上带有数词「1」，但在《数学原理》符号系统中，这一定义仅凭纯逻辑的**全称量词**、蕴涵与**同一关系**表出：关系 R 是一一关系，当且仅当对于任意 x、x′、y、y′，若 xRy 且 x′Ry 则 x = x′，且若 xRy 且 xRy′ 则 y = y′。',
          },
        ],
      },
      {
        id: 'imp-ch02-p14',
        num: '§ 14',
        original:
          'In Christian countries, the relation of husband to wife is one-one; in Mahometan countries it is one-many; in Tibet it is many-one. The relation of father to son is one-many; that of son to father is many-one, but that of eldest son to father is one-one. If n is any number, the relation of n to n+1 is one-one; so is the relation of n to 2n or to 3n. When we are considering only positive numbers, the relation of n to n^2 is one-one; but when negative numbers are admitted, it becomes two-one, since n and -n have the same square. These instances should suffice to make clear the notions of one-one, one-many, and many-one relations, which play a great part in the principles of mathematics, not only in relation to the definition of numbers, but in many other connections.',
        zh: '在基督教国家，丈夫对妻子的关系是一一的；在伊斯兰教国家是一对多的；在西藏则是多对一的。父亲对儿子的关系是一对多的；儿子对父亲的关系是多对一的，但长子对父亲的关系则是一一的。若 n 为任意数，n 对 n + 1 的关系是一一的；n 对 2n 或对 3n 的关系同样是一一的。当我们只考察正数时，n 对 n² 的关系是一一的；但一旦纳入负数，它就变成了二对一的，因为 n 与 −n 具有相同的平方。这些实例足以阐明一一关系、一对多关系与多对一关系的概念；它们在数学原理中扮演着举足轻重的角色，不仅关乎数的定义，也关乎许多其他理论脉络。',
      },
      {
        id: 'imp-ch02-p15',
        num: '§ 15',
        original:
          'Two classes are said to be “similar” when there is a one-one relation which correlates the terms of the one class each with one term of the other class, in the same manner in which the relation of marriage correlates husbands with wives. A few preliminary definitions will help us to state this definition more precisely. The class of those terms that have a given relation to something or other is called the domain of that relation: thus fathers are the domain of the relation of father to child, husbands are the domain of the relation of husband to wife, wives are the domain of the relation of wife to husband, and husbands and wives together are the domain of the relation of marriage. The relation of wife to husband is called the converse of the relation of husband to wife. Similarly less is the converse of greater, later is the converse of earlier, and so on. Generally, the converse of a given relation is that relation which holds between y and x whenever the given relation holds between x and y. The converse domain of a relation is the domain of its converse: thus the class of wives is the converse domain of the relation of husband to wife. We may now state our definition of similarity as follows:—\nOne class is said to be “similar” to another when there is a one-one relation of which the one class is the domain, while the other is the converse domain.',
        zh: '当存在一种一一关系，像婚姻关系使丈夫与妻子逐一配对那样，使一个类的诸项各自与另一个类的一项逐一关联起来时，这两个类便被称为「**相似**」。几项预备性的定义将有助于我们更精确地陈述这一定义。对某个或某些事物具有给定关系的那些项所构成的类，称为该关系的**定义域**：因此，父亲构成父对子这一关系的定义域，丈夫构成夫对妻这一关系的定义域，妻子构成妻对夫这一关系的定义域，而丈夫与妻子合在一起则构成婚姻关系的定义域。妻对夫的关系称为夫对妻这一关系的**逆关系**。同样，「小于」是「大于」的逆关系，「晚于」是「早于」的逆关系，依此类推。一般而言，给定关系的逆关系，就是每当给定关系在 x 与 y 之间成立时便在 y 与 x 之间成立的那种关系。一种关系的**逆域**就是其逆关系的定义域：因此，妻子所构成的类便是夫对妻这一关系的逆域。现在我们可以将**相似性**的定义陈述如下：\n\n[一个类被称为与另一个类「相似」]{#g-imp-c2-08}，是指存在一种一一关系，以其中一个类为定义域，而以另一个类为逆域。',
        glosses: [
          {
            id: 'g-imp-c2-08',
            anchor: '一个类被称为与另一个类「相似」',
            content:
              '以存在一一关联（one-one correlation，现代数学通称一一对应）作为两个集合基数相等的充要判准，在现代数理哲学中通称**休谟原则**（Hume’s Principle）。弗雷格在《算术基础》第 63 节引述大卫·休谟《人性论》（1739）第一卷第三部第一节之语作为先声：「当两个数这样结合起来，使其中一个数里的每一单位总有另一个数里的一单位与之相对应时，我们就宣称它们相等。」康托尔在 1878 年论文中独立据此定义两个流形具有相等的**势**（Mächtigkeit）或彼此「等价」（äquivalent）；弗雷格称两个概念「等数」（gleichzahlig），《数学原理》则定名为类之间的**相似性**（similarity）。',
          },
        ],
      },
      {
        id: 'imp-ch02-p16',
        num: '§ 16',
        original:
          'It is easy to prove (1) that every class is similar to itself, (2) that if a class α is similar to a class β, then β is similar to α, (3) that if α is similar to β and β to γ, then α is similar to γ. A relation is said to be reflexive when it possesses the first of these properties, symmetrical when it possesses the second, and transitive when it possesses the third. It is obvious that a relation which is symmetrical and transitive must be reflexive throughout its domain. Relations which possess these properties are an important kind, and it is worth while to note that similarity is one of this kind of relations.',
        zh: '很容易证明：（1）每一个类都与自身相似；（2）若类 α 与类 β 相似，则 β 与 α 相似；（3）若 α 与 β 相似且 β 与 γ 相似，则 α 与 γ 相似。一种关系具备其中第一项性质时称为**自反的**，具备第二项性质时称为**对称的**，具备第三项性质时称为**传递的**。显而易见，凡是对称且传递的关系，在其整个定义域内必定是自反的。同时具备这几项性质的关系是极为重要的一类关系，值得留意的是，相似性正是这类关系之一。',
      },
      {
        id: 'imp-ch02-p17',
        num: '§ 17',
        original:
          'It is obvious to common sense that two finite classes have the same number of terms if they are similar, but not otherwise. The act of counting consists in establishing a one-one correlation between the set of objects counted and the natural numbers (excluding 0) that are used up in the process. Accordingly common sense concludes that there are as many objects in the set to be counted as there are numbers up to the last number used in the counting. And we also know that, so long as we confine ourselves to finite numbers, there are just n numbers from 1 up to n. Hence it follows that the last number used in counting a collection is the number of terms in the collection, provided the collection is finite. But this result, besides being only applicable to finite collections, depends upon and assumes the fact that two classes which are similar have the same number of terms; for what we do when we count (say) 10 objects is to show that the set of these objects is similar to the set of numbers 1 to 10. The notion of similarity is logically presupposed in the operation of counting, and is logically simpler though less familiar. In counting, it is necessary to take the objects counted in a certain order, as first, second, third, etc., but order is not of the essence of number: it is an irrelevant addition, an unnecessary complication from the logical point of view. The notion of similarity does not demand an order: for example, we saw that the number of husbands is the same as the number of wives, without having to establish an order of precedence among them. The notion of similarity also does not require that the classes which are similar should be finite. Take, for example, the natural numbers (excluding 0) on the one hand, and the fractions which have 1 for their numerator on the other hand: it is obvious that we can correlate 2 with 1/2, 3 with 1/3, and so on, thus proving that the two classes are similar.',
        zh: '在常识看来显而易见的是，两个有穷类当且仅当彼此相似时才具有相同数目的项。计数这一行为，就在于在被清点的对象集合与清点过程中所依次用尽的自然数（不含 0）之间建立起一种一一关联。常识据此断定，在待清点的集合中有多少个对象，直到计数所用的最后一个数为止就有多少个数。同时我们也知道，只要限于有穷数，从 1 到 n 就恰好有 n 个数。由此便可推出，只要一个汇集是有穷的，清点该汇集时所用的最后一个数便是该汇集中项的数目。然而这一结果除了仅适用于有穷汇集之外，还依赖并预设了「两个相似的类具有相同数目的项」这一事实；因为当我们清点（比方说）10 个对象时，我们所做的事情正是表明这组对象的集合与 1 至 10 这组数的集合相似。相似性的概念在逻辑上为计数操作所预设，尽管不如计数熟悉，在逻辑上却更为简单。在计数时，必须按照某种顺序把被清点的对象依次取作第一、第二、第三等等；但「序」并不属于数的本质：从逻辑观点来看，它是一项不相干的附加物，一种不必要的繁琐化。相似性的概念并不要求顺序：例如我们刚才看到，无需在丈夫或妻子中间排定先后次序，便可知丈夫的人数与妻子的人数相同。相似性的概念同样不要求彼此相似的类是有穷的。不妨一方面取自然数（不含 0），另一方面取以 1 为分子的分数：显然我们可以使 2 与 1/2 关联、3 与 1/3 关联，依此类推，从而证明这两个类是相似的。',
      },
      {
        id: 'imp-ch02-p18',
        num: '§ 18',
        original:
          'We may thus use the notion of “similarity” to decide when two collections are to belong to the same bundle, in the sense in which we were asking this question earlier in this chapter. We want to make one bundle containing the class that has no members: this will be for the number 0. Then we want a bundle of all the classes that have one member: this will be for the number 1. Then, for the number 2, we want a bundle consisting of all couples; then one of all trios; and so on. Given any collection, we can define the bundle it is to belong to as being the class of all those collections that are “similar” to it. It is very easy to see that if (for example) a collection has three members, the class of all those collections that are similar to it will be the class of trios. And whatever number of terms a collection may have, those collections that are “similar” to it will have the same number of terms. We may take this as a definition of “having the same number of terms.” It is obvious that it gives results conformable to usage so long as we confine ourselves to finite collections.',
        zh: '于是，按照本章前文提出那个问题时的意义，我们便可以用「相似性」的概念来判定两个汇集何时应当归入同一束。我们想要扎起一束，里面盛放那个没有任何成员的类：这一束对应于数 0。接着我们想要由一切具有一个成员的类组成的一束：这一束对应于数 1。再接着，为了对应数 2，我们想要由一切对偶组成的一束；随后是由一切三人组组成的一束；依此类推。给定任意一个汇集，我们都可以将它所属的那一束定义为与它「相似」的一切汇集所构成的类。不难看出，倘若（比方说）一个汇集有三个成员，那么与它相似的一切汇集所构成的类就正是三人组之类。而且无论一个汇集有多少项，凡与它「相似」的那些汇集都将具有相同数目的项。我们不妨把这一点取作「具有相同数目的项」的定义。显而易见，只要我们限于有穷汇集，这一定义给出的结果便与日常用法完全吻合。',
      },
      {
        id: 'imp-ch02-p19',
        num: '§ 19',
        original:
          'So far we have not suggested anything in the slightest degree paradoxical. But when we come to the actual definition of numbers we cannot avoid what must at first sight seem a paradox, though this impression will soon wear off. We naturally think that the class of couples (for example) is something different from the number 2. But there is no doubt about the class of couples: it is indubitable and not difficult to define, whereas the number 2, in any other sense, is a metaphysical entity about which we can never feel sure that it exists or that we have tracked it down. It is therefore more prudent to content ourselves with the class of couples, which we are sure of, than to hunt for a problematical number 2 which must always remain elusive. Accordingly we set up the following definition:—\nThe number of a class is the class of all those classes that are similar to it.',
        zh: '到目前为止，我们还没有提出任何略带悖论色彩的主张。可是当我们真正走到数的实际定义面前时，却无法避免某种初看必定显得近乎悖论的东西——尽管这种印象很快就会消退。我们自然而然会觉得，（比方说）对偶之类与数 2 是两码事。然而对于对偶之类，并不存在任何疑窦：它是确凿无疑且不难定义的；反观任何其他意义上的数 2，却是一个形而上学实体，我们永远无法确信它究竟是否存在，也无法确信自己是否已经追寻到了它的踪迹。因此，[以这个我们确信无疑的对偶之类为满足，比去追猎一个成问题的、必定永远捉摸不定的数 2 更为审慎]{#g-imp-c2-09}。据此我们确立如下定义：\n\n**一个类的数，就是与该类相似的一切类所构成的类。**',
        glosses: [
          {
            id: 'g-imp-c2-09',
            anchor:
              '以这个我们确信无疑的对偶之类为满足，比去追猎一个成问题的、必定永远捉摸不定的数 2 更为审慎',
            content:
              '此处运用了罗素自 1914 年起奉为核心方法论的**奥卡姆剃刀**（Occam’s razor，「如无必要，勿增实体」）及其「科学哲学的最高准则」：**凡有可能之处，一律用由已知实体构造出来的逻辑构造物取代推论出的未知实体**（见《神秘主义与逻辑》第八章）。戴德金、康托尔与皮亚诺传统常诉诸「通过抽象的定义」，假定在一束彼此等势的集合背后另有一个抽离掉具体元素差异的单一基数实体；**弗雷格—罗素定义**（《算术基础》第 68 节；《数学的原则》第 111 节）则直接取由相似关系归拢而成的整个等价类（如一切对偶所构成的类）本身充当该基数。',
          },
        ],
      },
      {
        id: 'imp-ch02-p20',
        num: '§ 20',
        original:
          'Thus the number of a couple will be the class of all couples. In fact, the class of all couples will be the number 2, according to our definition. At the expense of a little oddity, this definition secures definiteness and indubitableness; and it is not difficult to prove that numbers so defined have all the properties that we expect numbers to have.',
        zh: '于是，一个对偶的数就将是一切对偶所构成的类。事实上，按照我们的定义，一切对偶所构成的类**就是**数 2。这一定义以略显奇特为代价，换取了确定性与无可置疑性；而且不难证明，如此定义的数具备我们期望数所具备的一切性质。',
      },
      {
        id: 'imp-ch02-p21',
        num: '§ 21',
        original:
          'We may now go on to define numbers in general as any one of the bundles into which similarity collects classes. A number will be a set of classes such as that any two are similar to each other, and none outside the set are similar to any inside the set. In other words, a number (in general) is any collection which is the number of one of its members; or, more simply still:\nA number is anything which is the number of some class.',
        zh: '现在我们可以进而将一般意义上的「数」定义为相似性把诸类归拢而成的任何一束。一个数将是由若干类组成的这样一个集合：其中任意两个类彼此相似，而该集合之外没有任何类与该集合之内的任何类相似。换言之，（一般意义上的）一个数，就是作为其自身某一个成员之数的任何汇集；或者说得更简洁些：\n\n**一个数，就是作为某一个类之数的任何东西。**',
      },
      {
        id: 'imp-ch02-p22',
        num: '§ 22',
        original:
          'Such a definition has a verbal appearance of being circular, but in fact it is not. We define “the number of a given class” without using the notion of number in general; therefore we may define number in general in terms of “the number of a given class” without committing any logical error.',
        zh: '这样的定义在字面上看似循环定义，实则不然。我们在定义「一个给定类的数」时，并未用到一般意义上的数的概念；因此，我们可以反过来借由「一个给定类的数」来定义一般意义上的数，而绝不会犯任何逻辑错误。',
      },
      {
        id: 'imp-ch02-p23',
        num: '§ 23',
        original:
          'Definitions of this sort are in fact very common. The class of fathers, for example, would have to be defined by first defining what it is to be the father of somebody; then the class of fathers will be all those who are somebody’s father. Similarly if we want to define square numbers (say), we must first define what we mean by saying that one number is the square of another, and then define square numbers as those that are the squares of other numbers. This kind of procedure is very common, and it is important to realise that it is legitimate and even often necessary.',
        zh: '事实上，这一类定义极为常见。例如要定义「父亲之类」，就必须先定义「是某人的父亲」是什么意思，随后父亲之类便是所有作为某人之父的人。同样，假如我们想要定义（比方说）平方数，就必须先定义说一个数是另一个数的平方是什么意思，随后再将平方数定义为作为其他数之平方的那些数。这种定义程序十分普遍，认清它的正当性乃至往往不可或缺的必要性至关重要。',
      },
      {
        id: 'imp-ch02-p24',
        num: '§ 24',
        original:
          'We have now given a definition of numbers which will serve for finite collections. It remains to be seen how it will serve for infinite collections. But first we must decide what we mean by “finite” and “infinite,” which cannot be done within the limits of the present chapter.',
        zh: '至此，我们已经给出了一个适用于有穷汇集的数的定义。至于它如何适用于无穷汇集，仍有待下文考察。不过首先我们必须确定「有穷」与「无穷」究竟意指什么，而这在本章的篇幅之内是无法完成的。',
      },
    ],
  },
];
