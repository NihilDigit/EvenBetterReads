import type { BookSection } from '../../../types/book';

export const poincareCh4Ch5Sections: BookSection[] = [
  {
    id: 'ch04-espace-et-geometrie',
    roman: 'IV',
    titleOriginal: 'Chapitre IV. L’espace et la géométrie',
    titleZh: '第四章 空间与几何学',
    aiModel: 'Gemini-4-Carbon',
    blocks: [
      {
        id: 'sh-ch04-p01',
        type: 'paragraph',
        num: '§ 01',
        fr: 'Commençons par un petit paradoxe.',
        zh: '[我们先从一个小小的悖论谈起]{#g-sh-c4-01}。',
        glosses: [
          {
            id: 'g-sh-c4-01',
            anchor: '我们先从一个小小的悖论谈起',
            content: '本章改写自庞加莱于 1895 年 11 月发表在《形而上学与道德评论》第 3 卷第 6 期的论文《空间与几何学》（« L’espace et la géométrie »，第 631—646 页），系针对 1893—1895 年间法国工程师兼哲学家乔治·勒沙拉（Georges Lechalas，1851—1919）与路易·库图拉等学者围绕非欧空间及四维空间能否为直观所把握而在该刊展开的讨论所作。'
          }
        ]
      },
      {
        id: 'sh-ch04-p02',
        type: 'paragraph',
        num: '§ 02',
        fr: 'Des êtres dont l’esprit serait fait comme le nôtre et qui auraient les mêmes sens que nous, mais qui n’auraient reçu aucune éducation préalable, pourraient recevoir d’un monde extérieur convenablement choisi des impressions telles qu’ils seraient amenés à construire une géométrie autre que celle d’Euclide et à localiser les phénomènes de ce monde extérieur dans un espace non euclidien ou même dans un espace à quatre dimensions.',
        zh: '假使有一类生灵，其心智构造与我们无异，感官也与我们相同，却未曾受过任何预先的教育；那么，从一个恰当选取的外部世界中，他们完全有可能接收到这样一些印象，以致被引导去建立一种异于欧几里得的几何学，并将那个外部世界的种种现象定位在一个非欧空间、甚或一个四维空间之中。'
      },
      {
        id: 'sh-ch04-p03',
        type: 'paragraph',
        num: '§ 03',
        fr: 'Pour nous, dont l’éducation a été faite par notre monde actuel, si nous étions brusquement transportés dans ce monde nouveau, nous n’aurions pas de difficulté à en rapporter les phénomènes à notre espace euclidien. Inversement, si ces êtres étaient transportés chez nous, ils seraient amenés à rapporter nos phénomènes à l’espace non euclidien.',
        zh: '至于我们这些由现今世界塑造了感官教育的人，倘若被骤然移置到那个新世界里，也毫无困难就能将那里的现象归入我们的欧几里得空间。反过来，倘若那些生灵被移置到我们这里，他们便会被引导着将我们这里的现象归入非欧空间。'
      },
      {
        id: 'sh-ch04-p04',
        type: 'paragraph',
        num: '§ 04',
        fr: 'Que dis-je ; avec un peu d’efforts nous pourrions le faire également. Quelqu’un qui y consacrerait son existence pourrait peut-être arriver à se représenter la quatrième dimension.',
        zh: '岂止如此；只要稍加努力，我们也同样做得到。倘若有人愿为此倾注毕生精力，或许终能成功在心中表象出第四维。'
      },
      {
        id: 'sh-ch04-p05',
        type: 'paragraph',
        num: '§ 05',
        fr: 'L’espace géométrique et l’espace représentatif. — On dit souvent que les images des objets extérieurs sont localisées dans l’espace, que même elles ne peuvent se former qu’à cette condition. On dit aussi que cet espace, qui sert ainsi de cadre tout préparé à nos sensations et à nos représentations, est identique à celui des géomètres dont il possède toutes les propriétés.',
        zh: '**几何空间与表象空间**——人们常说，外部物体的图像被定位在空间之中，甚至唯有在这一条件下图像才得以形成。人们还说，这个为我们的感觉与表象充当现成框架的空间，与几何学家所研究的空间完全同一，具备后者的全部性质。'
      },
      {
        id: 'sh-ch04-p06',
        type: 'paragraph',
        num: '§ 06',
        fr: 'À tous les bons esprits qui pensent ainsi, la phrase précédente a dû paraître bien extraordinaire. Mais il convient de voir s’ils ne subissent pas quelque illusion qu’une analyse approfondie pourrait dissiper.',
        zh: '在所有持此看法的明达之士眼中，前面那番话想必显得荒诞不经。然而我们不妨审视一番，看看他们是否受了某种幻觉的蒙蔽，而这种幻觉一经深入分析便可廓清。'
      },
      {
        id: 'sh-ch04-p07',
        type: 'paragraph',
        num: '§ 07',
        fr: 'Quelles sont d’abord les propriétés de l’espace proprement dit ? je veux dire de celui qui fait l’objet de la géométrie et que j’appellerai l’espace géométrique. Voici quelques-unes des plus essentielles :',
        zh: '首先，严格意义上的空间具有哪些性质呢？我指的是作为几何学研究对象的那种空间，我将称之为**几何空间**。以下是其中最根本的几条性质：'
      },
      {
        id: 'sh-ch04-p08',
        type: 'paragraph',
        num: '§ 08',
        fr: '1° Il est continu ;',
        zh: '第一，它是连续的；'
      },
      {
        id: 'sh-ch04-p09',
        type: 'paragraph',
        num: '§ 09',
        fr: '2° Il est infini ;',
        zh: '第二，它是无限的；'
      },
      {
        id: 'sh-ch04-p10',
        type: 'paragraph',
        num: '§ 10',
        fr: '3° Il a trois dimensions ;',
        zh: '第三，它有三个维度；'
      },
      {
        id: 'sh-ch04-p11',
        type: 'paragraph',
        num: '§ 11',
        fr: '4° Il est homogène, c’est-à-dire que tous ses points sont identiques entre eux ;',
        zh: '第四，它是均匀的，也就是说它的所有点彼此完全同一；'
      },
      {
        id: 'sh-ch04-p12',
        type: 'paragraph',
        num: '§ 12',
        fr: '5° Il est isotrope, c’est-à-dire que toutes les droites qui passent par un même point sont identiques entre elles.',
        zh: '第五，它是各向同性的，也就是说通过同一点的所有直线彼此完全同一。'
      },
      {
        id: 'sh-ch04-p13',
        type: 'paragraph',
        num: '§ 13',
        fr: 'Comparons-le maintenant au cadre de nos représentations et de nos sensations, que je pourrais appeler l’espace représentatif.',
        zh: '现在，我们将它与我们的表象和感觉的框架作一番比较；这个框架，我不妨称之为**表象空间**。'
      },
      {
        id: 'sh-ch04-p14',
        type: 'paragraph',
        num: '§ 14',
        fr: 'L’espace visuel. — Considérons d’abord une impression purement visuelle, due à une image qui se forme sur le fond de la rétine.',
        zh: '**视觉空间**——我们先来考察一种纯粹的视觉印象，它源于在视网膜底部形成的一幅图像。'
      },
      {
        id: 'sh-ch04-p15',
        type: 'paragraph',
        num: '§ 15',
        fr: 'Une analyse sommaire nous montre cette image comme continue, mais comme possédant seulement deux dimensions, cela distingue déjà de l’espace géométrique ce que l’on peut appeler l’espace visuel pur.',
        zh: '粗略的分析便向我们表明，这幅图像虽然是连续的，却只具备两个维度；单凭这一点，所谓**纯粹视觉空间**就已经与几何空间区别开来了。'
      },
      {
        id: 'sh-ch04-p16',
        type: 'paragraph',
        num: '§ 16',
        fr: 'D’autre part cette image est enfermée dans un cadre limité.',
        zh: '另一方面，这幅图像被封闭在一个有限的边框之内。'
      },
      {
        id: 'sh-ch04-p17',
        type: 'paragraph',
        num: '§ 17',
        fr: 'Enfin il y a une autre différence non moins importante : cet espace visuel pur n’est pas homogène. Tous les points de la rétine, abstraction faite des images qui s’y peuvent former, ne jouent pas le même rôle. La tache jaune ne peut à aucun titre être regardée comme identique à un point du bord de la rétine. Non seulement en effet le même objet y produit des impressions beaucoup plus vives, mais dans tout cadre limité le point qui occupe le centre du cadre n’apparaîtra pas comme identique à un point voisin de l’un des bords.',
        zh: '最后，还有另一项同样重要的差异：这个纯粹视觉空间并非均匀的。撇开可能在视网膜上形成的图像不论，视网膜上的各个点所起的作用并不相同。无论如何都不能把黄斑看作与视网膜边缘的某一点完全同一。事实上，不仅同一物体在黄斑处产生的印象要鲜明得多，而且在任何有限的边框之中，占据边框中心的点也绝不会显得与靠近某条边缘的点完全同一。'
      },
      {
        id: 'sh-ch04-p18',
        type: 'paragraph',
        num: '§ 18',
        fr: 'Une analyse plus approfondie nous montrerait sans doute que cette continuité de l’espace visuel et ses deux dimensions ne sont non plus qu’une illusion ; elle l’éloignerait donc encore davantage de l’espace géométrique, mais passons sur cette remarque dont les conséquences ont été suffisamment examinées au chapitre II.',
        zh: '更为深入的分析无疑还会向我们表明，视觉空间的这种连续性及其两个维度也同样不过是一种幻觉；这便会使它离几何空间更加遥远。不过我们且略过这一评注，因为它的种种推论已在第二章中作了充分考察。'
      },
      {
        id: 'sh-ch04-p19',
        type: 'paragraph',
        num: '§ 19',
        fr: 'Cependant la vue nous permet d’apprécier les distances et par conséquent de percevoir une troisième dimension. Mais chacun sait que cette perception de la troisième dimension se réduit au sentiment de l’effort d’accommodation qu’il faut faire, et à celui de la convergence qu’il faut donner aux deux yeux, pour percevoir un objet distinctement.',
        zh: '然而，视觉能够使我们估量距离，从而感知到第三个维度。但人人都知道，对这第三维的知觉，归根结底不过是为了看清物体而必须付出的[调节努力的感觉，以及必须赋予双眼的辐辏感觉]{#g-sh-c4-02}。',
        glosses: [
          {
            id: 'g-sh-c4-02',
            anchor: '调节努力的感觉，以及必须赋予双眼的辐辏感觉',
            content: '生理光学中的两项双眼深度知觉机制：调节（法语 accommodation）指眼内睫状肌收缩或舒张以改变晶状体曲率，使远近不等的物像清晰聚焦于视网膜上；辐辏（法语 convergence）指双眼内直肌等眼外肌牵引两条视轴向内会聚，使同一注视点同时投射在左右眼视网膜黄斑中心凹的对应点上。亥姆霍兹在三卷本《生理光学手册》（Handbuch der physiologischen Optik，1856—1867）第三卷中以此为论据阐述知觉经验论（Empirismus），反驳埃瓦尔德·赫林（Ewald Hering）等人的先天论（Nativismus），主张视觉深度并非视网膜固有的先天空间直观，而是由视网膜局部征象与眼肌运动感觉经后天反复经验联想而成的复合判断。'
          }
        ]
      },
      {
        id: 'sh-ch04-p20',
        type: 'paragraph',
        num: '§ 20',
        fr: 'Ce sont là des sensations musculaires tout à fait différentes des sensations visuelles qui nous ont donné la notion des deux premières dimensions. La troisième dimension ne nous apparaîtra donc pas comme jouant le même rôle que les deux autres. Ce que l’on peut appeler l’espace visuel complet n’est donc pas un espace isotrope.',
        zh: '这些都是肌肉感觉，与向我们提供前两个维度概念的视觉感觉截然不同。因此，第三个维度在我们看来，并不会扮演与另外两个维度相同的角色。所谓**完整视觉空间**，因而并不是一个各向同性的空间。'
      },
      {
        id: 'sh-ch04-p21',
        type: 'paragraph',
        num: '§ 21',
        fr: 'Il a, il est vrai, précisément trois dimensions ; cela veut dire que les éléments de nos sensations visuelles (ceux du moins qui concourent à former la notion de l’étendue, seront complètement définis quand on connaîtra trois d’entre eux ; pour employer le langage mathématique, ce seront des fonctions de trois variables indépendantes.',
        zh: '诚然，它恰好具有三个维度；意思是说，我们的视觉感觉要素（至少是参与构成广延概念的那些要素），只要知道其中三个便能完全确定；用数学语言来说，它们是三个独立变量的函数。'
      },
      {
        id: 'sh-ch04-p22',
        type: 'paragraph',
        num: '§ 22',
        fr: 'Mais examinons la chose d’un peu plus près. La troisième dimension nous est révélée de deux manières différentes : par l’effort d’accommodation et par la convergence des yeux.',
        zh: '但让我们把事情再凑近一点审视。第三个维度是通过两种不同的方式向我们揭示出来的：一靠调节的努力，二靠双眼的辐辏。'
      },
      {
        id: 'sh-ch04-p23',
        type: 'paragraph',
        num: '§ 23',
        fr: 'Sans doute ces deux indications sont toujours concordantes, il y a entre elles une relation constante, ou en termes mathématiques, les deux variables qui mesurent ces deux sensations musculaires ne nous apparaissent pas comme indépendantes, ou bien encore nous pouvons pour éviter un appel à des notions mathématiques déjà assez raffinées, revenir au langage du chapitre II et énoncer le même fait comme il suit : Si deux sensations de convergence A et B sont indiscernables, les deux sensations d’accommodation A′ et B′ qui les accompagneront respectivement seront également indiscernables.',
        zh: '诚然，这两项指示总是一致的，二者之间存在着恒定的关系；用数学术语来说，度量这两种肌肉感觉的两个变量在我们看来并非彼此独立；或者，为了避免诉诸已经相当精深的数学概念，我们也可以回到第二章的语言，将同一事实表述如下：如果两个辐辏感觉 A 与 B 不可分辨，那么分别伴随它们的两个调节感觉 A′ 与 B′ 也将同样不可分辨。'
      },
      {
        id: 'sh-ch04-p24',
        type: 'paragraph',
        num: '§ 24',
        fr: 'Mais c’est là pour ainsi dire un fait expérimental ; rien n’empêche à priori de supposer le contraire, et si le contraire a lieu, si ces deux sensations musculaires varient indépendamment l’une de l’autre, nous aurons à tenir compte d’une variable indépendante de plus et « l’espace visuel complet » nous apparaîtra comme un continu physique à quatre dimensions.',
        zh: '但这可以说是一项实验事实；先天地看，没有任何理由妨碍我们作相反的假定。一旦相反的情形发生，一旦这两种肌肉感觉彼此独立地变化，我们就必须多计入一个独立变量，那时「完整视觉空间」在我们看来就将是一个四维的物理连续统。'
      },
      {
        id: 'sh-ch04-p25',
        type: 'paragraph',
        num: '§ 25',
        fr: 'C’est là même, ajouterai-je, un fait d’expérience externe. Rien n’empêche de supposer qu’un être ayant l’esprit fait comme nous, ayant les mêmes organes des sens que nous, soit placé dans un monde où la lumière ne lui parviendrait qu’après avoir traversé des milieux réfringents de forme compliquée. Les deux indications qui nous servent à apprécier les distances, cesseraient d’être liées par une relation constante. Un être qui ferait dans un pareil monde l’éducation de ses sens, attribuerait sans doute quatre dimensions à l’espace visuel complet.',
        zh: '我还要补充说，这甚至是一项外部经验事实。没有任何理由妨碍我们设想：有一个心智构造与我们相同、感官也与我们相同的生灵，被安置在这样一个世界里——光线必须先穿过形状复杂的折射媒质，方能抵达他的眼睛。那时，被我们用来估量距离的这两项指示，便不再由恒定的关系联系在一起。在那样一个世界里训练自身感官的生灵，无疑会赋予完整视觉空间四个维度。'
      },
      {
        id: 'sh-ch04-p26',
        type: 'paragraph',
        num: '§ 26',
        fr: 'L’espace tactile et l’espace moteur. — « L’espace tactile » est plus compliqué encore que l’espace visuel et s’éloigne davantage de l’espace géométrique. Il est inutile de répéter, pour le toucher, la discussion que j’ai faite pour la vue.',
        zh: '**触觉空间与运动空间**——「触觉空间」比视觉空间还要复杂，离几何空间也更远。我无须针对触觉把刚才针对视觉所作的讨论再重复一遍。'
      },
      {
        id: 'sh-ch04-p27',
        type: 'paragraph',
        num: '§ 27',
        fr: 'Mais en dehors des données de la vue et du toucher, il y a d’autres sensations qui contribuent autant et plus qu’elles à la genèse de la notion d’espace. Ce sont celles que tout le monde connaît, qui accompagnent tous nos mouvements et que l’on appelle ordinairement musculaires.',
        zh: '然而，在视觉与触觉所提供的数据之外，还有另一些感觉，它们对空间概念之起源的贡献，丝毫不亚于、甚至超过了前两者。那便是人人都熟知的、伴随我们一切运动的那些感觉，人们通常称之为肌肉感觉。'
      },
      {
        id: 'sh-ch04-p28',
        type: 'paragraph',
        num: '§ 28',
        fr: 'Le cadre correspondant constitue ce que l’on peut appeler l’espace moteur.',
        zh: '与之对应的框架，便构成了所谓**运动空间**。'
      },
      {
        id: 'sh-ch04-p29',
        type: 'paragraph',
        num: '§ 29',
        fr: 'Chaque muscle donne naissance à une sensation spéciale susceptible d’augmenter ou de diminuer, de sorte que l’ensemble de nos sensations musculaires dépendra d’autant de variables que nous avons de muscles. À ce point de vue, l’espace moteur aurait autant de dimensions que nous avons de muscles.',
        zh: '每一块肌肉都会产生一种可强可弱的特定感觉，因此，我们全部肌肉感觉的总和所依赖的变量数目，就等于我们拥有的肌肉数目。从这个角度看，我们有多少块肌肉，**运动空间**就会有多少个维度。'
      },
      {
        id: 'sh-ch04-p30',
        type: 'paragraph',
        num: '§ 30',
        fr: 'Je sais qu’on va dire que si les sensations musculaires contribuent à former la notion d’espace, c’est que nous avons le sentiment de la direction de chaque mouvement et qu’il fait partie intégrante de la sensation. S’il en était ainsi, si une sensation musculaire ne pouvait naître qu’accompagnée de ce sentiment géométrique de la direction, l’espace géométrique serait bien une forme imposée à notre sensibilité.',
        zh: '我知道有人会说，肌肉感觉之所以有助于形成空间概念，是因为我们拥有对每一次运动之方向的感觉，而这种方向感原本就是该感觉不可分割的组成部分。倘若果真如此，倘若肌肉感觉唯有伴随着这种几何式的方向感才能产生，那么几何空间就确实是强加于我们感性的一种形式了。'
      },
      {
        id: 'sh-ch04-p31',
        type: 'paragraph',
        num: '§ 31',
        fr: 'Mais c’est ce que je n’aperçois pas du tout quand j’analyse mes sensations.',
        zh: '然而，当我分析自己的感觉时，却丝毫看不出这一点。'
      },
      {
        id: 'sh-ch04-p32',
        type: 'paragraph',
        num: '§ 32',
        fr: 'Ce que je vois, c’est que les sensations qui correspondent à des mouvements de même direction sont liées dans mon esprit par une simple association d’idées. C’est à cette association que se ramène ce que nous appelons « le sentiment de la direction ». On ne saurait donc retrouver ce sentiment dans une sensation unique.',
        zh: '我所看到的是，对应于同一方向运动的种种感觉，在我的心智中仅仅是通过观念的联想联系在一起的。我们所谓的「方向感」，归结起来不过就是这种联想。因此，绝不可能在某一个单独的感觉之中找到这种方向感。'
      },
      {
        id: 'sh-ch04-p33',
        type: 'paragraph',
        num: '§ 33',
        fr: 'Cette association est extrêmement complexe, puisque la contraction d’un même muscle peut correspondre, selon la position des membres, à des mouvements de direction très différente.',
        zh: '这种联想极为复杂，因为同一块肌肉的收缩，随着肢体位置的不同，可以对应于方向截然不同的运动。'
      },
      {
        id: 'sh-ch04-p34',
        type: 'paragraph',
        num: '§ 34',
        fr: 'Elle est d’ailleurs évidemment acquise ; elle est, comme toutes les associations d’idées, le résultat d’une habitude ; cette habitude résulte elle-même d’expériences très nombreuses ; sans aucun doute, si l’éducation de nos sens s’était faite dans un milieu différent, où nous aurions subi des impressions différentes, des habitudes contraires auraient pris naissance et nos sensations musculaires se seraient associées selon d’autres lois.',
        zh: '况且，这种联想显然是后天习得的；它同一切观念联想一样，是习惯的产物，而这种习惯本身又源于极其繁多的经验。毫无疑问，倘若我们的感官教育是在另一种环境中完成的，在那里我们承受着不同的印象，就会养成相反的习惯，我们的肌肉感觉也会按照另外的法则联结起来。'
      },
      {
        id: 'sh-ch04-p35',
        type: 'paragraph',
        num: '§ 35',
        fr: 'Caractères de l’espace représentatif. — Ainsi l’espace représentatif, sous sa triple forme, visuelle, tactile et motrice, est essentiellement différent de l’espace géométrique.',
        zh: '**表象空间的特征**——由此可见，表象空间在其视觉、触觉与运动这三重形态下，与几何空间有着本质的区别。'
      },
      {
        id: 'sh-ch04-p36',
        type: 'paragraph',
        num: '§ 36',
        fr: 'Il n’est ni homogène, ni isotrope ; on ne peut même pas dire qu’il ait trois dimensions.',
        zh: '它既非均匀的，亦非各向同性的；甚至都不能说它有三个维度。'
      },
      {
        id: 'sh-ch04-p37',
        type: 'paragraph',
        num: '§ 37',
        fr: 'On dit souvent que nous « projetons » dans l’espace géométrique les objets de notre perception externe ; que nous les « localisons ».',
        zh: '人们常说，我们把外部知觉的对象「投射」到几何空间之中；说我们对它们加以「定位」。'
      },
      {
        id: 'sh-ch04-p38',
        type: 'paragraph',
        num: '§ 38',
        fr: 'Cela a-t-il un sens et quel sens cela a-t-il ?',
        zh: '这话有意义吗？又有着怎样的意义呢？'
      },
      {
        id: 'sh-ch04-p39',
        type: 'paragraph',
        num: '§ 39',
        fr: 'Cela veut-il dire que nous nous représentons les objets extérieurs dans l’espace géométrique ?',
        zh: '它的意思是说，我们在几何空间中表象外部物体吗？'
      },
      {
        id: 'sh-ch04-p40',
        type: 'paragraph',
        num: '§ 40',
        fr: 'Nos représentations ne sont que la reproduction de nos sensations, elles ne peuvent donc se ranger que dans le même cadre qu’elles, c’est-à-dire dans l’espace représentatif.',
        zh: '我们的表象不过是感觉的再现，因而只能被安放在与感觉相同的框架之中，也就是安放在表象空间之中。'
      },
      {
        id: 'sh-ch04-p41',
        type: 'paragraph',
        num: '§ 41',
        fr: 'Il nous est aussi impossible de nous représenter les corps extérieurs dans l’espace géométrique, qu’il est impossible à un peintre de peindre, sur un tableau plan, des objets avec leurs trois dimensions.',
        zh: '要我们在几何空间中表象外部物体，正如要一位画家在平坦的画布上把物体的三个维度原封不动地画出来一样，都是根本不可能的。'
      },
      {
        id: 'sh-ch04-p42',
        type: 'paragraph',
        num: '§ 42',
        fr: 'L’espace représentatif n’est qu’une image de l’espace géométrique, image déformée par une sorte de perspective, et nous ne pouvons nous représenter les objets qu’en les pliant aux lois de cette perspective.',
        zh: '表象空间不过是几何空间的一幅图像，一幅因某种透视而发生变形的图像；我们唯有使物体屈从于这种透视法则，方能表象它们。'
      },
      {
        id: 'sh-ch04-p43',
        type: 'paragraph',
        num: '§ 43',
        fr: 'Nous ne nous représentons donc pas les corps extérieurs dans l’espace géométrique, mais nous raisonnons sur ces corps, comme s’ils étaient situés dans l’espace géométrique.',
        zh: '因此，我们并不是在几何空间中**表象**外部物体，但我们却像这些物体位于几何空间中那样对它们进行**推理**。'
      },
      {
        id: 'sh-ch04-p44',
        type: 'paragraph',
        num: '§ 44',
        fr: 'Quand on dit d’autre part que nous « localisons » tel objet en tel point de l’espace, qu’est-ce que cela veut dire ?',
        zh: '另一方面，当人们说我们把某某物体「定位」在空间的某某点上时，这又是什么意思呢？'
      },
      {
        id: 'sh-ch04-p45',
        type: 'paragraph',
        num: '§ 45',
        fr: 'Cela signifie simplement que nous nous représentons les mouvements qu’il faut faire pour atteindre cet objet ; et qu’on ne dise pas que pour se représenter ces mouvements, il faut les projeter eux-mêmes dans l’espace et que la notion d’espace doit, par conséquent, préexister.',
        zh: '它仅仅意味着，我们在心中表象出为触及该物体所必须作出的运动；千万不要说，为了表象这些运动，就必须先把运动本身投射到空间之中，因而空间概念必然预先存在。'
      },
      {
        id: 'sh-ch04-p46',
        type: 'paragraph',
        num: '§ 46',
        fr: 'Quand je dis que nous nous représentons ces mouvements, je veux dire seulement que nous nous représentons les sensations musculaires qui les accompagnent et qui n’ont aucun caractère géométrique, qui par conséquent n’impliquent nullement la préexistence de la notion d’espace.',
        zh: '当我说我们表象这些运动时，我的意思仅仅是：我们表象伴随这些运动的肌肉感觉；而这些肌肉感觉毫无几何特征，因而绝不蕴含空间概念的预先存在。'
      },
      {
        id: 'sh-ch04-p47',
        type: 'paragraph',
        num: '§ 47',
        fr: 'Changements d’état et changements de position. — Mais, dira-t-on, si l’idée de l’espace géométrique ne s’impose pas à notre esprit, si d’autre part aucune de nos sensations ne peut nous la fournir, comment a-t-elle pu prendre naissance ?',
        zh: '**状态变化与位置变化**——但有人会问：既然几何空间的观念并非强加于我们的心智，既然另一方面我们的任何一种感觉都无法单独向我们提供它，那么它究竟是如何产生出来的呢？'
      },
      {
        id: 'sh-ch04-p48',
        type: 'paragraph',
        num: '§ 48',
        fr: 'C’est ce que nous avons maintenant à examiner et cela nous demandera quelque temps, mais je puis résumer en quelques mots la tentative d’explication que je vais développer.',
        zh: '这正是我们现在要考察的问题，这需要花费一点时间；不过我可以先用几句话概括我即将展开的解释尝试。'
      },
      {
        id: 'sh-ch04-p49',
        type: 'paragraph',
        num: '§ 49',
        fr: 'Aucune de nos sensations, isolée, n’aurait pu nous conduire à l’idée de l’espace, nous y sommes amenés seulement en étudiant les lois suivant lesquelles ces sensations se succèdent.',
        zh: '**我们的任何一种感觉，倘若孤立来看，都无法把我们引向空间的观念；我们唯有研究这些感觉彼此相继所遵循的定律，才被引导到这一观念上来。**'
      },
      {
        id: 'sh-ch04-p50',
        type: 'paragraph',
        num: '§ 50',
        fr: 'Nous voyons d’abord que nos impressions sont sujettes au changement ; mais parmi les changements que nous constatons, nous sommes bientôt conduits à faire une distinction.',
        zh: '我们首先看到，我们的印象是会变化的；但在我们所观察到的种种变化之中，我们很快便被引导着作出一项区分。'
      },
      {
        id: 'sh-ch04-p51',
        type: 'paragraph',
        num: '§ 51',
        fr: 'Nous disons tantôt que les objets, causes de ces impressions, ont changé d’état, tantôt qu’ils ont changé de position, qu’ils se sont seulement déplacés.',
        zh: '我们有时说，引起这些印象的物体发生了**状态变化**；有时又说，它们发生了**位置变化**，也就是说它们仅仅发生了位移。'
      },
      {
        id: 'sh-ch04-p52',
        type: 'paragraph',
        num: '§ 52',
        fr: 'Qu’un objet change d’état ou seulement de position, cela se traduit toujours pour nous de la même manière : par une modification dans un ensemble d’impressions.',
        zh: '无论一个物体是发生状态变化，还是仅仅发生位置变化，这对我们而言总是以同样的方式表现出来：表现为一组印象的改变。'
      },
      {
        id: 'sh-ch04-p53',
        type: 'paragraph',
        num: '§ 53',
        fr: 'Comment donc avons-nous pu être amenés à les distinguer ? Il est facile de s’en rendre compte. S’il y a eu seulement changement de position, nous pouvons restaurer l’ensemble primitif d’impressions en faisant des mouvements qui nous replacent vis-à-vis de l’objet mobile dans la même situation relative. Nous corrigeons ainsi la modification qui s’est produite et nous rétablissons l’état initial par une modification inverse.',
        zh: '那么，我们究竟是如何被引导着把这两者区分开来的呢？道理不难明白。假如发生的仅仅是位置变化，我们便可以通过作出适当的运动，使自己相对于运动物体重新回到原先的相对位置，从而恢复最初的那组印象。如此一来，我们便纠正了刚才发生的改变，通过一项反向改变重建了初始状态。'
      },
      {
        id: 'sh-ch04-p54',
        type: 'paragraph',
        num: '§ 54',
        fr: 'S’il s’agit par exemple de la vue et si un objet se déplace devant notre œil, nous pouvons le « suivre de l’œil » et maintenir son image en un même point de la rétine par des mouvements appropriés du globe oculaire.',
        zh: '譬如就视觉而言，倘若一个物体在我们眼前移动，我们可以「用目光追随」它，通过眼球的适当转动，将它的像保持在视网膜的同一点上。'
      },
      {
        id: 'sh-ch04-p55',
        type: 'paragraph',
        num: '§ 55',
        fr: 'Ces mouvements, nous en avons conscience parce qu’ils sont volontaires et parce qu’ils sont accompagnés de sensations musculaires, mais cela ne veut pas dire que nous nous les représentons dans l’espace géométrique.',
        zh: '我们之所以意识到这些运动，是因为它们是有意的，并且伴随着肌肉感觉；但这绝不意味着我们在几何空间中表象了这些运动。'
      },
      {
        id: 'sh-ch04-p56',
        type: 'paragraph',
        num: '§ 56',
        fr: 'Ainsi ce qui caractérise le changement de position, ce qui le distingue du changement d’état, c’est qu’il peut être corrigé par ce moyen.',
        zh: '因此，位置变化的特征，亦即它与状态变化的区别所在，就在于它能够通过这种方式得到纠正。'
      },
      {
        id: 'sh-ch04-p57',
        type: 'paragraph',
        num: '§ 57',
        fr: 'Il peut donc arriver que l’on passe de l’ensemble d’impressions A à l’ensemble B de deux manières différentes : 1° involontairement et sans éprouver de sensations musculaires, c’est ce qui arrive quand c’est l’objet qui se déplace ; 2° volontairement et avec des sensations musculaires, c’est ce qui arrive quand l’objet est immobile, mais que nous nous déplaçons, de telle façon que l’objet a par rapport à nous un mouvement relatif.',
        zh: '于是，从印象集合 A 过渡到印象集合 B，便可能通过两种截然不同的方式发生：第一，不由自主地发生，且不感受到肌肉感觉——当物体自身发生位移时，情形便是如此；第二，有意地发生，且伴随着肌肉感觉——当物体静止不动，而我们自身发生位移，使得物体相对于我们作相对运动时，情形便是如此。'
      },
      {
        id: 'sh-ch04-p58',
        type: 'paragraph',
        num: '§ 58',
        fr: 'S’il en est ainsi, le passage de l’ensemble A à l’ensemble B n’est qu’un changement de position.',
        zh: '倘若情形如此，那么从集合 A 到集合 B 的过渡，就只是一次位置变化。'
      },
      {
        id: 'sh-ch04-p59',
        type: 'paragraph',
        num: '§ 59',
        fr: 'Il résulte de là que la vue et le toucher ne nous auraient pu donner la notion d’espace sans le secours du « sens musculaire ».',
        zh: '由此可见，倘若没有「肌肉感」的协助，单凭视觉和触觉根本不可能向我们提供空间概念。'
      },
      {
        id: 'sh-ch04-p60',
        type: 'paragraph',
        num: '§ 60',
        fr: 'Non seulement cette notion ne pouvait dériver d’une sensation unique, mais d’une suite de sensations, mais encore un être immobile n’aurait pu jamais l’acquérir puisque, ne pouvant corriger par ses mouvements les effets des changements de position des objets extérieurs, il n’aurait eu aucune raison de les distinguer des changements d’état. Il n’aurait pu l’acquérir non plus si ses mouvements n’étaient pas volontaires ou s’ils n’étaient pas accompagnés de sensations quelconques.',
        zh: '这一概念不仅不可能源于某一个单一感觉，而只能源于一连串感觉，而且一个完全静止不动的生灵永远也不可能获得它；因为既然他无法靠自身的运动去纠正外部物体位置变化所产生的效果，他就没有任何理由把位置变化与状态变化区分开来。同样，倘若他的运动不是有意的，或者他的运动不伴随任何感觉，他也无法获得这一概念。'
      },
      {
        id: 'sh-ch04-p61',
        type: 'paragraph',
        num: '§ 61',
        fr: 'Condition de la compensation. — Comment une pareille compensation est-elle possible de telle façon que deux changements, d’ailleurs indépendants l’un de l’autre, se corrigent réciproquement ?',
        zh: '**补偿的条件**——这样一种补偿何以可能，竟能使两个本来彼此独立的变化互相抵消、彼此纠正呢？'
      },
      {
        id: 'sh-ch04-p62',
        type: 'paragraph',
        num: '§ 62',
        fr: 'Un esprit qui saurait déjà la géométrie raisonnerait comme il suit :',
        zh: '一个已经懂得几何学的心智，会作如下推理：'
      },
      {
        id: 'sh-ch04-p63',
        type: 'paragraph',
        num: '§ 63',
        fr: 'Pour que la compensation se produise, il faut évidemment que les diverses parties de l’objet extérieur d’une part, les divers organes de nos sens d’autre part, se retrouvent après le double changement, dans la même position relative. Et pour cela il faut que les diverses parties de l’objet extérieur aient également conservé, les unes par rapport aux autres, la même position relative et qu’il en soit de même des diverses parties de notre corps les unes par rapport aux autres.',
        zh: '要使补偿得以发生，显然必须满足：在经历这双重变化之后，一方面外部物体的各个部分，另一方面我们感官的各个器官，彼此重新回到相同的相对位置。而要做到这一点，外部物体的各个部分彼此之间也必须保持相同的相对位置，我们身体的各个部分彼此之间也同样如此。'
      },
      {
        id: 'sh-ch04-p64',
        type: 'paragraph',
        num: '§ 64',
        fr: 'En d’autres termes, l’objet extérieur, dans le premier changement, doit se déplacer à la façon d’un solide invariable et il en doit être de même de l’ensemble de notre corps dans le second changement qui corrige le premier.',
        zh: '换言之，在第一次变化中，外部物体必须像一个不变固体那样发生位移；而在纠正第一次变化的第二次变化中，我们整个身体也必须同样像一个不变固体那样发生位移。'
      },
      {
        id: 'sh-ch04-p65',
        type: 'paragraph',
        num: '§ 65',
        fr: 'À ces conditions, la compensation peut se produire.',
        zh: '在这些条件下，补偿便能够发生。'
      },
      {
        id: 'sh-ch04-p66',
        type: 'paragraph',
        num: '§ 66',
        fr: 'Mais nous qui ne savons pas encore la géométrie, puisque pour nous la notion d’espace n’est pas encore formée, nous ne pouvons pas raisonner de la sorte, nous ne pouvons pas prévoir à priori si la compensation est possible. Mais l’expérience nous apprend qu’elle se fait quelquefois et c’est de ce fait expérimental que nous partons pour distinguer les changements d’état des changements de position.',
        zh: '然而，对于尚不懂得几何学——因为对我们而言空间概念尚未形成——的我们来说，我们无法这样推理，也无法先天地预见补偿是否可能。但经验告诉我们，这种补偿有时确实会发生；我们正是从这一实验事实出发，将状态变化与位置变化区分开来的。'
      },
      {
        id: 'sh-ch04-p67',
        type: 'paragraph',
        num: '§ 67',
        fr: 'Les corps solides et la géométrie. — Parmi les objets qui nous entourent, il y en a qui éprouvent fréquemment des déplacements susceptibles d’être ainsi corrigés par un mouvement corrélatif de notre propre corps, ce sont les corps solides.',
        zh: '**固体与几何学**——在围绕着我们的万物之中，有一些物体经常发生能够通过我们自身身体的关联运动加以纠正的位移，那便是**固体**。'
      },
      {
        id: 'sh-ch04-p68',
        type: 'paragraph',
        num: '§ 68',
        fr: 'Les autres objets, dont la forme est variable, ne subissent qu’exceptionnellement de semblables déplacements (changement de position sans changement de forme). Quand un corps s’est déplacé en se déformant, nous ne pouvons plus, par des mouvements appropriés, ramener les organes de nos sens dans la même situation relative par rapport à ce corps ; nous ne pouvons plus par conséquent rétablir l’ensemble primitif d’impressions.',
        zh: '至于其他形状可变的物体，则唯有在例外情况下才会发生类似的位移（即只有位置变化而无形状变化）。当一个物体在位移的同时发生了形变，我们就再也无法通过适当的运动，使我们的感官相对于该物体回到相同的相对位置；因而我们也就无法恢复最初的那组印象。'
      },
      {
        id: 'sh-ch04-p69',
        type: 'paragraph',
        num: '§ 69',
        fr: 'Ce n’est que plus tard, et à la suite d’expériences nouvelles, que nous apprenons à décomposer les corps de forme variable en éléments plus petits tels que chacun d’eux se déplace à peu près suivant les mêmes lois que les corps solides. Nous distinguons ainsi les « déformations » des autres changements d’état ; dans ces déformations chaque élément subit un simple changement de position, qui peut être corrigé, mais la modification subie par l’ensemble est plus profonde et n’est plus susceptible d’être corrigée par un mouvement corrélatif.',
        zh: '直到后来，在一系列新的经验之后，我们才学会把形状可变的物体分解成更小的微元，使得其中每一个微元都大致遵循与固体相同的定律而位移。我们由此把「形变」与其他状态变化区分开来：在这些形变中，每一个微元只经历单纯的位置变化，因而可以得到纠正；但整体所经历的改变更为深刻，已无法靠单一的关联运动加以纠正。'
      },
      {
        id: 'sh-ch04-p70',
        type: 'paragraph',
        num: '§ 70',
        fr: 'Une pareille notion est déjà très complexe et n’a pu apparaître que d’une façon relativement tardive ; elle n’aurait pu naître d’ailleurs si l’observation des corps solides ne nous avait appris déjà à distinguer les changements de position.',
        zh: '这样的概念已经十分复杂，只可能在相对晚近的阶段出现；况且，倘若对固体的观察不曾先教会我们辨别位置变化，这一概念根本无从产生。'
      },
      {
        id: 'sh-ch04-p71',
        type: 'paragraph',
        num: '§ 71',
        fr: 'Si donc il n’y avait pas de corps solides dans la nature, il n’y aurait pas de géométrie.',
        zh: '**因此，倘若自然界中没有固体，便不会有几何学。**'
      },
      {
        id: 'sh-ch04-p72',
        type: 'paragraph',
        num: '§ 72',
        fr: 'Une autre remarque mérite aussi un instant d’attention. Supposons un corps solide occupant d’abord la position α et passant ensuite à la position β ; dans sa première position, il causera sur nous l’ensemble d’impressions A, et dans sa seconde position l’ensemble d’impressions B. Soit maintenant un second corps solide, ayant des qualités entièrement différentes du premier, par exemple de couleur différente. Supposons encore qu’il passe de la position α, où il cause sur nous l’ensemble d’impressions A′, à la position β, où il cause sur nous l’ensemble d’impressions B′.',
        zh: '还有一点也值得稍加留意。设有一个固体先占据位置 α，随后移至位置 β；在第一个位置上，它在我们身上引起印象集合 A，在第二个位置上引起印象集合 B。现在再设第二个固体，其性质与第一个固体截然不同，譬如颜色不同。再假定它同样从位置 α（在此处它在我们身上引起印象集合 A′）移至位置 β（在此处它在我们身上引起印象集合 B′）。'
      },
      {
        id: 'sh-ch04-p73',
        type: 'paragraph',
        num: '§ 73',
        fr: 'En général, l’ensemble A n’aura rien de commun avec l’ensemble A′, ni l’ensemble B avec l’ensemble B′. Le passage de l’ensemble A à l’ensemble B et celui de l’ensemble A′ à l’ensemble B′ sont donc deux changements qui en soi n’ont en général rien de commun.',
        zh: '一般说来，集合 A 与集合 A′ 毫无共同之处，集合 B 与集合 B′ 也毫无共同之处。因此，从集合 A 到集合 B 的过渡，与从集合 A′ 到集合 B′ 的过渡，就其本身而言通常毫无共同之处。'
      },
      {
        id: 'sh-ch04-p74',
        type: 'paragraph',
        num: '§ 74',
        fr: 'Et cependant, ces deux changements, nous les regardons l’un et l’autre comme des déplacements et mieux encore, nous les considérons comme le même déplacement. Comment cela se fait-il ?',
        zh: '然而，我们却把这两个变化都看作位移，更有甚者，把它们看作**同一次**位移。这是怎么回事呢？'
      },
      {
        id: 'sh-ch04-p75',
        type: 'paragraph',
        num: '§ 75',
        fr: 'C’est simplement parce qu’ils peuvent être l’un et l’autre corrigés par le même mouvement corrélatif de notre corps.',
        zh: '原因很简单：因为它们两者都可以通过我们身体的**同一个**关联运动得到纠正。'
      },
      {
        id: 'sh-ch04-p76',
        type: 'paragraph',
        num: '§ 76',
        fr: 'C’est donc le « mouvement corrélatif » qui constitue le seul lien entre deux phénomènes qu’autrement nous n’aurions jamais songé à rapprocher.',
        zh: '由此可见，正是「关联运动」构成了联系这两种现象的唯一纽带；若非如此，我们根本不会想到要把它们相提并论。'
      },
      {
        id: 'sh-ch04-p77',
        type: 'paragraph',
        num: '§ 77',
        fr: 'D’autre part, notre corps, grâce au nombre de ses articulations et de ses muscles, peut prendre une foule de mouvements différents ; mais tous ne sont pas susceptibles de « corriger » une modification des objets extérieurs ; ceux-là seulement en seront capables où tout notre corps, ou tout au moins tous ceux des organes de nos sens qui entrent en jeu se déplacent d’un bloc, c’est-à-dire sans que leurs positions relatives varient, à la façon d’un corps solide.',
        zh: '另一方面，得益于众多的关节与肌肉，我们的身体能够作出不计其数的不同运动；但并非所有运动都能够「纠正」外部物体的改变。唯有当我们的整个身体——或者至少所有参与其事的感官——像一个固体那样整体平移或转动，也就是说彼此之间的相对位置保持不变时，那样的运动才具备这种纠正能力。'
      },
      {
        id: 'sh-ch04-p78',
        type: 'paragraph',
        num: '§ 78',
        fr: 'En résumé :',
        zh: '综上所述：'
      },
      {
        id: 'sh-ch04-p79',
        type: 'paragraph',
        num: '§ 79',
        fr: '1° Nous sommes amenés d’abord à distinguer deux catégories de phénomènes :',
        zh: '第一，我们首先被引导着区分两类现象：'
      },
      {
        id: 'sh-ch04-p80',
        type: 'paragraph',
        num: '§ 80',
        fr: 'Les uns, involontaires, non accompagnés de sensations musculaires, sont attribués par nous aux objets extérieurs ; ce sont les changements externes ;',
        zh: '一类是不由自主的、不伴随肌肉感觉的，被我们归因于外部物体，这就是**外部变化**；'
      },
      {
        id: 'sh-ch04-p81',
        type: 'paragraph',
        num: '§ 81',
        fr: 'Les autres, dont les caractères sont opposés et que nous attribuons aux mouvements de notre propre corps, sont les changements internes ;',
        zh: '另一类具有相反的特征，被我们归因于自身身体的运动，这就是**内部变化**；'
      },
      {
        id: 'sh-ch04-p82',
        type: 'paragraph',
        num: '§ 82',
        fr: '2° Nous remarquons que certains changements de chacune de ces catégories peuvent être corrigés par un changement corrélatif de l’autre catégorie ;',
        zh: '第二，我们注意到，这两类变化中的某些变化，可以由另一类中的某个关联变化加以纠正；'
      },
      {
        id: 'sh-ch04-p83',
        type: 'paragraph',
        num: '§ 83',
        fr: '3° Nous distinguons, parmi les changements externes, ceux qui ont ainsi un corrélatif dans l’autre catégorie, c’est ce que nous appelons les déplacements ; et de même parmi les changements internes, nous distinguons ceux qui ont un corrélatif dans la première catégorie.',
        zh: '第三，我们在外部变化中划分出在另一类里拥有对应关联变化的那一部分，称之为**位移**；同样，在内部变化中，我们也划分出在第一类里拥有对应关联变化的那一部分。'
      },
      {
        id: 'sh-ch04-p84',
        type: 'paragraph',
        num: '§ 84',
        fr: 'Ainsi se trouve définie, grâce à cette réciprocité, une classe particulière de phénomènes que nous appelons déplacements. Ce sont les lois de ces phénomènes qui font l’objet de la géométrie.',
        zh: '凭借这种相互对应关系，一类被称为位移的特殊现象便得到了界定。**构成几何学研究对象的，正是这类现象所遵循的定律。**'
      },
      {
        id: 'sh-ch04-p85',
        type: 'paragraph',
        num: '§ 85',
        fr: 'Loi d’homogénéité. — La première de ces lois est celle de l’homogénéité.',
        zh: '**均匀性定律**——这些定律中的第一条，便是均匀性定律。'
      },
      {
        id: 'sh-ch04-p86',
        type: 'paragraph',
        num: '§ 86',
        fr: 'Supposons que, par un changement externe α, nous passions de l’ensemble d’impressions A à l’ensemble B, puis que ce changement α soit corrigé par un mouvement corrélatif volontaire β, et de façon que nous soyons ramenés à l’ensemble A.',
        zh: '假定通过一次外部变化 α，我们从印象集合 A 过渡到了印象集合 B，随后这一变化 α 又被一次有意的关联运动 β 所纠正，使我们重新回到集合 A。'
      },
      {
        id: 'sh-ch04-p87',
        type: 'paragraph',
        num: '§ 87',
        fr: 'Supposons maintenant qu’un autre changement externe α′ nous fasse de nouveau passer de l’ensemble A à l’ensemble B.',
        zh: '现在假定另一次外部变化 α′ 再次使我们从印象集合 A 过渡到印象集合 B。'
      },
      {
        id: 'sh-ch04-p88',
        type: 'paragraph',
        num: '§ 88',
        fr: 'L’expérience nous apprend alors que ce changement α′ est, comme α, susceptible d’être corrigé par un mouvement corrélatif volontaire β′ et que ce mouvement β′ correspond aux mêmes sensations musculaires que le mouvement β qui corrigeait α.',
        zh: '经验随即告诉我们，这次变化 α′ 像 α 一样，也可以由一次有意的关联运动 β′ 加以纠正，而且这次运动 β′ 所对应的肌肉感觉，与先前纠正 α 的运动 β 完全相同。'
      },
      {
        id: 'sh-ch04-p89',
        type: 'paragraph',
        num: '§ 89',
        fr: 'C’est ce fait que l’on énonce d’ordinaire en disant que l’espace est homogène et isotrope.',
        zh: '人们通常将这一事实表述为：**空间是均匀且各向同性的**。'
      },
      {
        id: 'sh-ch04-p90',
        type: 'paragraph',
        num: '§ 90',
        fr: 'On peut dire aussi qu’un mouvement qui s’est produit une fois peut se répéter une seconde fois, une troisième fois, et ainsi de suite, sans que ses propriétés varient.',
        zh: '也可以说，一次曾经发生过的运动，可以重复第二次、第三次，乃至无穷多次，而其性质保持不变。'
      },
      {
        id: 'sh-ch04-p91',
        type: 'paragraph',
        num: '§ 91',
        fr: 'Dans le chapitre premier, où nous avons étudié la nature du raisonnement mathématique, nous avons vu l’importance qu’on doit attribuer à la possibilité de répéter indéfiniment une même opération.',
        zh: '在第一章探讨数学推理的本性时，我们已经看到，无限重复同一项运算的可能性具有何等重要的意义。'
      },
      {
        id: 'sh-ch04-p92',
        type: 'paragraph',
        num: '§ 92',
        fr: 'C’est de cette répétition que le raisonnement mathématique tire sa vertu ; c’est donc grâce à la loi d’homogénéité qu’il a prise sur les faits géométriques.',
        zh: '数学推理正是从这种重复中汲取其威力的；因此，正是凭借均匀性定律，数学推理才得以把握几何事实。'
      },
      {
        id: 'sh-ch04-p93',
        type: 'paragraph',
        num: '§ 93',
        fr: 'Pour être complet, il conviendrait d’adjoindre à la loi d’homogénéité une foule d’autres lois analogues dans le détail desquelles je ne veux pas entrer, mais que les mathématiciens résument d’un mot en disant que les déplacements forment « un groupe ».',
        zh: '为求完备，还应当在均匀性定律之外补入许多其他类似的定律；我不打算在此进入那些细节，数学家们只用一个词便将其概括殆尽：位移构成「一个群」。'
      },
      {
        id: 'sh-ch04-p94',
        type: 'paragraph',
        num: '§ 94',
        fr: 'Le monde non euclidien. — Si l’espace géométrique était un cadre imposé à chacune de nos représentations, considérée individuellement, il serait impossible de se représenter une image dépouillée de ce cadre, et nous ne pourrions rien changer à notre géométrie.',
        zh: '**非欧世界**——倘若几何空间是强加于我们每一个单独表象之上的固定框架，那么我们便根本不可能设想出一幅脱去这一框架的图像，也永远无法对我们的几何学作出丝毫改动。'
      },
      {
        id: 'sh-ch04-p95',
        type: 'paragraph',
        num: '§ 95',
        fr: 'Mais il n’en est pas ainsi, la géométrie n’est que le résumé des lois suivant lesquelles se succèdent ces images. Rien n’empêche alors d’imaginer une série de représentations, de tout point semblables à nos représentations ordinaires, mais se succédant d’après des lois différentes de celles auxquelles nous sommes accoutumés.',
        zh: '然而事实并非如此；几何学不过是这些图像彼此相继所遵循之定律的撮要。既然如此，便没有任何理由妨碍我们设想出一连串在各方面都与日常表象相似、却按照异于我们日常习惯之定律彼此相继的表象。'
      },
      {
        id: 'sh-ch04-p96',
        type: 'paragraph',
        num: '§ 96',
        fr: 'On conçoit alors que des êtres dont l’éducation se ferait dans un milieu où ces lois seraient ainsi bouleversées pourraient avoir une géométrie très différente de la nôtre.',
        zh: '由此不难理解，在一个这些定律被彻底改写的环境里完成感官教育的生灵，完全可能拥有一门与我们大相径庭的几何学。'
      },
      {
        id: 'sh-ch04-p97',
        type: 'paragraph',
        num: '§ 97',
        fr: 'Supposons, par exemple, un monde renfermé dans une grande sphère et soumis aux lois suivantes :',
        zh: '譬如，试设想一个包裹在一座大球体内的世界，它服从以下定律：'
      },
      {
        id: 'sh-ch04-p98',
        type: 'paragraph',
        num: '§ 98',
        fr: 'La température n’y est pas uniforme ; elle est maxima au centre, et elle diminue à mesure qu’on s’en éloigne, pour se réduire au zéro absolu quand on atteint la sphère où ce monde est renfermé.',
        zh: '那里的温度并不均匀：球心处温度最高，随着远离球心而递减，抵达包裹这个世界的边界面球壳时，温度降至绝对零度。'
      },
      {
        id: 'sh-ch04-p99',
        type: 'paragraph',
        num: '§ 99',
        fr: 'Je précise davantage la loi suivant laquelle varie cette température. Soit R le rayon de la sphère limite ; soit r la distance du point considéré au centre de cette sphère. La température absolue sera proportionnelle à R² − r².',
        zh: '我再进一步明确这一温度变化的定律。设 R 为界球半径，r 为所考察之点到该球球心的距离。绝对温度将与 R² − r² 成正比。'
      },
      {
        id: 'sh-ch04-p100',
        type: 'paragraph',
        num: '§ 100',
        fr: 'Je supposerai de plus que, dans ce monde, tous les corps aient même coefficient de dilatation, de telle façon que la longueur d’une règle quelconque soit proportionnelle à sa température absolue.',
        zh: '我进一步假定，在这个世界里，一切物体都具有相同的膨胀系数，使得任何一把尺子的长度都与其绝对温度成正比。'
      },
      {
        id: 'sh-ch04-p101',
        type: 'paragraph',
        num: '§ 101',
        fr: 'Je supposerai enfin qu’un objet transporté d’un point à un autre, dont la température est différente, se met immédiatement en équilibre calorifique avec son nouveau milieu.',
        zh: '最后我假定，当一个物体从一点被移送到温度不同的另一点时，会立即与新环境达到热平衡。'
      },
      {
        id: 'sh-ch04-p102',
        type: 'paragraph',
        num: '§ 102',
        fr: 'Rien dans ces hypothèses n’est contradictoire ou inimaginable.',
        zh: '在这些假定之中，没有任何自相矛盾或不可想象之处。'
      },
      {
        id: 'sh-ch04-p103',
        type: 'paragraph',
        num: '§ 103',
        fr: 'Un objet mobile deviendra alors de plus en plus petit à mesure qu’on se rapprochera de la sphère limite.',
        zh: '于是，一个运动的物体越是靠近界球，就会变得越小。'
      },
      {
        id: 'sh-ch04-p104',
        type: 'paragraph',
        num: '§ 104',
        fr: 'Observons d’abord que, si ce monde est limité au point de vue de notre géométrie habituelle, il paraîtra infini à ses habitants.',
        zh: '首先要注意，尽管从我们习见的几何学观点来看，这个世界是有限的，但在其居民眼中，它却会显得无限。'
      },
      {
        id: 'sh-ch04-p105',
        type: 'paragraph',
        num: '§ 105',
        fr: 'Quand ceux-ci, en effet, veulent se rapprocher de la sphère limite, ils se refroidissent et deviennent de plus en plus petits. Les pas qu’ils font sont donc aussi de plus en plus petits, de sorte qu’ils ne peuvent jamais atteindre la sphère limite.',
        zh: '事实上，当那里的居民试图靠近界球时，他们会逐渐冷却，身体变得越来越小。他们迈出的步子因而也越来越小，以致永远也无法抵达界球。'
      },
      {
        id: 'sh-ch04-p106',
        type: 'paragraph',
        num: '§ 106',
        fr: 'Si, pour nous, la géométrie n’est que l’étude des lois suivant lesquelles se meuvent les solides invariables ; pour ces êtres imaginaires, ce sera l’étude des lois suivant lesquelles se meuvent les solides déformés par ces différences de température dont je viens de parler.',
        zh: '如果说对我们而言，几何学不过是研究不变固体运动所遵循的定律；那么对这些假想生灵而言，几何学就将是研究因我刚才所说的温度差而发生形变的固体运动所遵循的定律。'
      },
      {
        id: 'sh-ch04-p107',
        type: 'paragraph',
        num: '§ 107',
        fr: 'Sans doute, dans notre monde, les solides naturels éprouvent également des variations de forme et de volume dues à l’échauffement ou au refroidissement. Mais nous négligeons ces variations en jetant les fondements de la géométrie ; car, outre qu’elles sont très faibles, elles sont irrégulières et nous paraissent par conséquent accidentelles.',
        zh: '诚然，在我们的世界里，天然固体也会因受热或冷却而发生形状与体积的变化。但我们在奠定几何学基础时忽略了这些变化；因为它们除了极其微弱之外，还是不规则的，因而在我们看来纯属偶然。'
      },
      {
        id: 'sh-ch04-p108',
        type: 'paragraph',
        num: '§ 108',
        fr: 'Dans ce monde hypothétique, il n’en serait plus de même, et ces variations suivraient des lois régulières et très simples.',
        zh: '而在那个假想世界里，情形却大不相同：那些变化将遵循规则而极其简单的定律。'
      },
      {
        id: 'sh-ch04-p109',
        type: 'paragraph',
        num: '§ 109',
        fr: 'D’autre part, les diverses pièces solides dont se composerait le corps de ses habitants, subiraient les mêmes variations de forme et volume.',
        zh: '另一方面，构成那里居民身体的各个固体部件，也会经历同样的形状与体积变化。'
      },
      {
        id: 'sh-ch04-p110',
        type: 'paragraph',
        num: '§ 110',
        fr: 'Je ferai encore une autre hypothèse ; je supposerai que la lumière traverse des milieux diversement réfringents et de telle sorte que l’indice de réfraction soit inversement proportionnel à R² − r². Il est aisé de voir que, dans ces conditions, les rayons lumineux ne seraient pas rectilignes, mais circulaires.',
        zh: '我还要再作一项假定：假定光线穿过折射率各不相同的媒质，使得折射率与 R² − r² 成反比。不难看出，在这些条件下，光线将不再是直线，而是圆弧。'
      },
      {
        id: 'sh-ch04-p111',
        type: 'paragraph',
        num: '§ 111',
        fr: 'Pour justifier ce qui précède, il me reste à montrer que certains changements survenus dans la position des objets extérieurs peuvent être corrigés par des mouvements corrélatifs des êtres sentants qui habitent ce monde imaginaire ; et cela de façon à restaurer l’ensemble primitif des impressions subies par ces êtres sentants.',
        zh: '为了论证上述结论，我还需要表明：外部物体位置所发生的某些变化，可以由居住在这个假想世界里的有感生灵通过关联运动加以纠正，从而恢复这些有感生灵最初所承受的那组印象。'
      },
      {
        id: 'sh-ch04-p112',
        type: 'paragraph',
        num: '§ 112',
        fr: 'Supposons en effet qu’un objet se déplace, en se déformant, non comme un solide invariable, mais comme un solide éprouvant des dilatations inégales exactement conformes à la loi de température que j’ai supposée plus haut. Qu’on me permette pour abréger le langage, d’appeler un pareil mouvement déplacement non euclidien.',
        zh: '事实上，假定一个物体在移动的同时发生形变——它不像不变固体那样运动，而是像一个严格按照我前文假定的温度律发生不均匀膨胀的固体那样运动。为简省言辞，请允许我把这样的运动称为**非欧位移**。'
      },
      {
        id: 'sh-ch04-p113',
        type: 'paragraph',
        num: '§ 113',
        fr: 'Si un être sentant se trouve dans le voisinage, ses impressions seront modifiées par le déplacement de l’objet, mais il pourra les rétablir en se mouvant lui-même d’une manière convenable. Il suffit que finalement l’ensemble de l’objet et de l’être sentant, considéré comme formant un seul corps, ait éprouvé un de ces déplacements particuliers que je viens d’appeler non euclidiens. Cela est possible si l’on suppose que les membres de ces êtres se dilatent d’après la même loi que les autres corps du monde qu’ils habitent.',
        zh: '倘若附近有一位有感生灵，他的印象虽会因物体的移动而改变，但他可以通过自己作适当的运动来恢复原先的印象。只要最终把物体与有感生灵看作同一个整体时，该整体恰好经历了一次我刚才所说的那种特殊的非欧位移即可。只要假定这些生灵的肢体也遵循与他们所居世界中其他物体相同的膨胀定律，这一点便是完全可能的。'
      },
      {
        id: 'sh-ch04-p114',
        type: 'paragraph',
        num: '§ 114',
        fr: 'Bien qu’au point de vue de notre géométrie habituelle les corps se soient déformés dans ce déplacement et que leurs diverses parties ne se retrouvent plus dans la même situation relative, cependant nous allons voir que les impressions de l’être sentant sont redevenues les mêmes.',
        zh: '尽管从我们习见的几何学观点来看，物体在这次位移中发生了形变，其各个部分不再处于原先相同的相对位置，但我们马上就会看到，这位有感生灵的印象却已恢复如初。'
      },
      {
        id: 'sh-ch04-p115',
        type: 'paragraph',
        num: '§ 115',
        fr: 'En effet, si les distances mutuelles des diverses parties ont pu varier, néanmoins les parties primitivement en contact sont revenues en contact. Les impressions tactiles n’ont donc pas changé.',
        zh: '事实上，尽管各个部分之间的相互距离可能改变了，原先彼此接触的部分却重新回到了接触状态。因此，触觉印象并未改变。'
      },
      {
        id: 'sh-ch04-p116',
        type: 'paragraph',
        num: '§ 116',
        fr: 'D’autre part, en tenant compte de l’hypothèse faite plus haut au sujet de la réfraction et de la courbure des rayons lumineux, les impressions visuelles seront aussi restées les mêmes.',
        zh: '另一方面，考虑到前文就折射率与光线曲率所作的假定，视觉印象也将保持不变。'
      },
      {
        id: 'sh-ch04-p117',
        type: 'paragraph',
        num: '§ 117',
        fr: 'Ces êtres imaginaires seront donc comme nous conduits à classer les phénomènes dont ils seront témoins et à distinguer parmi eux, les « changements de position » susceptibles d’être corrigés par un mouvement volontaire corrélatif.',
        zh: '于是，这些假想生灵便会像我们一样，对他们所目睹的现象加以分类，并从中划分出能够通过有意的关联运动加以纠正的「位置变化」。'
      },
      {
        id: 'sh-ch04-p118',
        type: 'paragraph',
        num: '§ 118',
        fr: 'S’ils fondent une géométrie, ce ne sera pas comme la nôtre, l’étude des mouvements de nos solides invariables ; ce sera celle des changements de position qu’ils auront ainsi distingués, et qui ne sont autres que les « déplacements non euclidiens », ce sera la géométrie non euclidienne.',
        zh: '倘若他们创立一门几何学，它就不会像我们的几何学那样，去研究我们的不变固体的运动；它将研究他们以这种方式划分出来的位置变化，而这些位置变化不是别的，正是[「非欧位移」]{#g-sh-c4-03}——这门几何学就将是**非欧几何**。',
        glosses: [
          {
            id: 'g-sh-c4-03',
            anchor: '「非欧位移」',
            content: '庞加莱在此构造的「变温球内世界」，是三维双曲空间庞加莱保角球模型（Poincaré conformal ball model）的物理直观实现，发展自亥姆霍兹 1870 年海德堡演说中的凸面镜世界设想。在该三维球体模型中，球内各点绝对温度与热膨胀尺度正比于 R² − r²，光学折射率正比于 1 / (R² − r²)，相应的黎曼线元正比于欧几里得弧元除以 R² − r²。依据费马最短光程原理，光线轨迹恰为正交截割边界球面的圆弧（双曲测地线），球内保角莫比乌斯变换群则构成保持这一温度与折射律不变的「非欧位移群」，且两圆弧交角与欧几里得交角严格相等。'
          }
        ]
      },
      {
        id: 'sh-ch04-p119',
        type: 'paragraph',
        num: '§ 119',
        fr: 'Ainsi des êtres comme nous, dont l’éducation se ferait dans un pareil monde, n’auraient pas la même géométrie que nous.',
        zh: '由此可见，像我们一样的生灵，倘若在这样一个世界里受教育，就不会拥有与我们相同的几何学。'
      },
      {
        id: 'sh-ch04-p120',
        type: 'paragraph',
        num: '§ 120',
        fr: 'Le monde à quatre dimensions. — De même qu’un monde non euclidien, on peut se représenter un monde à quatre dimensions.',
        zh: '**四维世界**——正如可以表象一个非欧世界一样，我们也可以表象一个四维世界。'
      },
      {
        id: 'sh-ch04-p121',
        type: 'paragraph',
        num: '§ 121',
        fr: 'Le sens de la vue, même avec un seul œil, joint aux sensations musculaires relatives aux mouvements du globe oculaire, pourrait suffire pour nous faire connaître l’espace à trois dimensions.',
        zh: '哪怕只靠一只眼睛的视觉，只要加上与眼球运动相关的肌肉感觉，便足以让我们认识三维空间。'
      },
      {
        id: 'sh-ch04-p122',
        type: 'paragraph',
        num: '§ 122',
        fr: 'Les images des objets extérieurs viennent se peindre sur la rétine qui est un tableau à deux dimensions ; ce sont des perspectives.',
        zh: '外部物体的图像描绘在视网膜这幅二维画布上；它们只是一幅幅透视图。'
      },
      {
        id: 'sh-ch04-p123',
        type: 'paragraph',
        num: '§ 123',
        fr: 'Mais, comme ces objets sont mobiles, comme il en est de même de notre œil, nous voyons successivement diverses perspectives d’un même corps, prises de plusieurs points de vue différents.',
        zh: '但由于这些物体是可以移动的，我们的眼睛也是可以转动的，我们便能相继看到从若干不同视点取得的同一物体的不同透视图。'
      },
      {
        id: 'sh-ch04-p124',
        type: 'paragraph',
        num: '§ 124',
        fr: 'Nous constatons en même temps que le passage d’une perspective à une autre est souvent accompagné de sensations musculaires.',
        zh: '同时我们观察到，从一幅透视图过渡到另一幅透视图，往往伴随着肌肉感觉。'
      },
      {
        id: 'sh-ch04-p125',
        type: 'paragraph',
        num: '§ 125',
        fr: 'Si le passage de la perspective A à la perspective B, et celui de la perspective A′ à la perspective B′ sont accompagnés des mêmes sensations musculaires, nous les rapprochons l’un de l’autre comme des opérations de même nature.',
        zh: '如果从透视图 A 到透视图 B 的过渡，与从透视图 A′ 到透视图 B′ 的过渡伴随着相同的肌肉感觉，我们便把它们归并在一起，视作同类的运算。'
      },
      {
        id: 'sh-ch04-p126',
        type: 'paragraph',
        num: '§ 126',
        fr: 'Étudiant ensuite les lois d’après lesquelles se combinent ces opérations, nous reconnaissons qu’elles forment un groupe, qui a même structure que celui des mouvements des solides invariables.',
        zh: '随后，我们研究这些运算彼此复合所遵循的定律，便认出它们构成一个群，且与不变固体的运动群具有相同的结构。'
      },
      {
        id: 'sh-ch04-p127',
        type: 'paragraph',
        num: '§ 127',
        fr: 'Or nous avons vu que c’est des propriétés de ce groupe que nous avons tiré la notion de l’espace géométrique et celle des trois dimensions.',
        zh: '而我们已经看到，我们正是从这个群的性质中，引出了几何空间的概念以及三维的概念。'
      },
      {
        id: 'sh-ch04-p128',
        type: 'paragraph',
        num: '§ 128',
        fr: 'Nous comprenons ainsi comment l’idée d’un espace à trois dimensions a pu naître du spectacle de ces perspectives, bien que chacune d’elles n’ait que deux dimensions, parce qu’elles se succèdent suivant certaines lois.',
        zh: '我们由此理解了，尽管每一幅透视图都只有两个维度，三维空间的观念却何以能够从这些透视图的更迭景象中诞生——因为它们是按照特定的定律彼此相继的。'
      },
      {
        id: 'sh-ch04-p129',
        type: 'paragraph',
        num: '§ 129',
        fr: 'Eh bien, de même qu’on peut faire sur un plan la perspective d’une figure à trois dimensions, on peut faire celle d’une figure à quatre dimensions sur un tableau à trois (ou à deux) dimensions. Ce n’est qu’un jeu pour le géomètre.',
        zh: '那么，正如我们可以在平面上作出三维图形的透视图一样，我们也可以在三维（或二维）画布上作出四维图形的透视图。这对几何学家来说不过是举手之劳。'
      },
      {
        id: 'sh-ch04-p130',
        type: 'paragraph',
        num: '§ 130',
        fr: 'On peut même prendre d’une même figure plusieurs perspectives de plusieurs points de vue différents.',
        zh: '我们甚至可以从若干不同视点，对同一个四维图形作出多幅透视图。'
      },
      {
        id: 'sh-ch04-p131',
        type: 'paragraph',
        num: '§ 131',
        fr: 'Nous pouvons facilement nous représenter ces perspectives puisqu’elles n’ont que trois dimensions.',
        zh: '我们可以轻而易举地表象这些透视图，因为它们只有三个维度。'
      },
      {
        id: 'sh-ch04-p132',
        type: 'paragraph',
        num: '§ 132',
        fr: 'Imaginons que les diverses perspectives d’un même objet se succèdent les unes aux autres ; que le passage de l’une à l’autre soit accompagné de sensations musculaires.',
        zh: '试设想同一物体的不同透视图彼此相继更迭，且从一幅过渡到另一幅时伴随着肌肉感觉。'
      },
      {
        id: 'sh-ch04-p133',
        type: 'paragraph',
        num: '§ 133',
        fr: 'On considérera bien entendu deux de ces passages comme deux opérations de même nature quand ils seront associés aux mêmes sensations musculaires.',
        zh: '当然，只要两次过渡与相同的肌肉感觉相联结，人们就会把它们看作两次同类运算。'
      },
      {
        id: 'sh-ch04-p134',
        type: 'paragraph',
        num: '§ 134',
        fr: 'Rien n’empêche alors d’imaginer que ces opérations se combinent suivant telle loi que nous voudrons, par exemple de façon à former un groupe qui ait même structure que celui des mouvements d’un solide invariable à quatre dimensions.',
        zh: '那么，没有任何理由妨碍我们设想这些运算按照我们所任意选定的定律复合起来——譬如结合成一个与四维不变固体的运动群具有相同结构的群。'
      },
      {
        id: 'sh-ch04-p135',
        type: 'paragraph',
        num: '§ 135',
        fr: 'Il n’y a rien là qu’on ne puisse se représenter et pourtant ces sensations sont précisément celles qu’éprouverait un être muni d’une rétine à deux dimensions et qui pourrait se déplacer dans l’espace à quatre dimensions.',
        zh: '这里没有任何无法表象的东西；然而这些感觉，却恰恰是一个拥有二维视网膜、又能在四维空间中自由移动的生灵所会体验到的感觉。'
      },
      {
        id: 'sh-ch04-p136',
        type: 'paragraph',
        num: '§ 136',
        fr: 'C’est dans ce sens qu’il est permis de dire qu’on pourrait se représenter la quatrième dimension.',
        zh: '正是在这个意义上，我们可以说人们能够表象第四维。'
      },
      {
        id: 'sh-ch04-p137',
        type: 'paragraph',
        num: '§ 137',
        fr: 'Il ne serait pas possible de se représenter de cette façon l’espace de M. Hilbert dont nous parlions au chapitre précédent, parce que cet espace n’est plus un continu du second ordre. Il diffère donc beaucoup trop profondément de notre espace ordinaire.',
        zh: '至于我们在前一章谈到的希尔伯特先生的那种空间，却不可能用这种方式表象出来，因为那种空间不再是一个第二级连续统。它与我们的日常空间相差得实在太过悬殊了。'
      },
      {
        id: 'sh-ch04-p138',
        type: 'paragraph',
        num: '§ 138',
        fr: 'Conclusions. — On voit que l’expérience joue un rôle indispensable dans la genèse de la géométrie ; mais ce serait une erreur d’en conclure que la géométrie est une science expérimentale, même en partie.',
        zh: '**结论**——由此可见，经验在几何学的起源中扮演着不可或缺的角色；但倘若由此断定几何学是一门实验科学——哪怕只是部分地属于实验科学——那就大错特错了。'
      },
      {
        id: 'sh-ch04-p139',
        type: 'paragraph',
        num: '§ 139',
        fr: 'Si elle était expérimentale, elle ne serait qu’approximative et provisoire. Et quelle approximation grossière !',
        zh: '倘若它是实验科学，它就只能是近似的、权宜待修的。而且会是多么粗疏的近似啊！'
      },
      {
        id: 'sh-ch04-p140',
        type: 'paragraph',
        num: '§ 140',
        fr: 'La géométrie ne serait que l’étude des mouvements des solides ; mais elle ne s’occupe pas en réalité des solides naturels, elle a pour objet certains solides idéaux, absolument invariables, qui n’en sont qu’une image simplifiée et bien lointaine.',
        zh: '那样一来，几何学就不过是对固体运动的研究了；但事实上，几何学根本不研究天然固体，它的研究对象是某种绝对不变的理想固体，而这种理想固体不过是天然固体经过极度简化且相去甚远的一幅图像。'
      },
      {
        id: 'sh-ch04-p141',
        type: 'paragraph',
        num: '§ 141',
        fr: 'La notion de ces corps idéaux est tirée de toutes pièces de notre esprit et l’expérience n’est qu’une occasion qui nous engage à l’en faire sortir.',
        zh: '这种理想物体的概念，完全是从我们的心智中整套引申出来的，经验只不过是一个促使我们把它从中唤出的契机。'
      },
      {
        id: 'sh-ch04-p142',
        type: 'paragraph',
        num: '§ 142',
        fr: 'Ce qui est l’objet de la géométrie, c’est l’étude d’un « groupe » particulier ; mais le concept général de groupe préexiste dans notre esprit au moins en puissance. Il s’impose à nous, non comme forme de notre sensibilité, mais comme forme de notre entendement.',
        zh: '几何学的研究对象，是对某一个特定「群」的研究；然而群的一般概念，至少作为潜能预先存在于我们的心智之中。它之所以强加于我们，并非作为我们感性的形式，而是作为我们知性的形式。'
      },
      {
        id: 'sh-ch04-p143',
        type: 'paragraph',
        num: '§ 143',
        fr: 'Seulement, parmi tous les groupes possibles, il faut choisir celui qui sera pour ainsi dire l’étalon auquel nous rapporterons les phénomènes naturels.',
        zh: '只不过，在所有可能的群当中，必须挑选出其中一个，让它充当我们将自然现象归入其中的「标准尺」。'
      },
      {
        id: 'sh-ch04-p144',
        type: 'paragraph',
        num: '§ 144',
        fr: 'L’expérience nous guide dans ce choix qu’elle ne nous impose pas ; elle nous fait reconnaître non quelle est la géométrie la plus vraie, mais quelle est la plus commode.',
        zh: '经验在这一选择中引导我们，却并不把选择强加给我们；它让我们认出的，不是哪一种几何学**最真**，而是哪一种几何学**最便利**。'
      },
      {
        id: 'sh-ch04-p145',
        type: 'paragraph',
        num: '§ 145',
        fr: 'On remarquera que j’ai pu décrire les mondes fantaisistes que j’ai imaginés plus haut, sans cesser d’employer le langage de la géométrie ordinaire.',
        zh: '读者想来已经注意到，我在前文描绘那些奇想世界时，始终不曾停止使用日常几何学的语言。'
      },
      {
        id: 'sh-ch04-p146',
        type: 'paragraph',
        num: '§ 146',
        fr: 'Et, en effet, nous n’aurions pas à en changer si nous y étions transportés.',
        zh: '事实上，即便我们真的被移置到那些世界里，也完全无须改换这套语言。'
      },
      {
        id: 'sh-ch04-p147',
        type: 'paragraph',
        num: '§ 147',
        fr: 'Des êtres qui y feraient leur éducation trouveraient sans doute plus commode de créer une géométrie différente de la nôtre, qui s’adapterait mieux à leurs impressions. Quant à nous, en face des mêmes impressions, il est certain que nous trouverions plus commode de ne pas changer nos habitudes.',
        zh: '在那里接受教育的生灵，无疑会觉得创立一门不同于我们的几何学更为便利，因为那会更契合他们的印象。至于我们，面对同样的印象，则肯定会觉得不改变我们既有的习惯更为便利。'
      }
    ]
  },
  {
    id: 'ch05-experience-et-geometrie',
    roman: 'V',
    titleOriginal: 'Chapitre V. L’expérience et la géométrie',
    titleZh: '第五章 经验与几何学',
    aiModel: 'Gemini-4-Carbon',
    blocks: [
      {
        id: 'sh-ch05-p01',
        type: 'paragraph',
        num: '§ 01',
        fr: '1. Dans les lignes qui précèdent, j’ai déjà à diverses reprises cherché à montrer que les principes de la géométrie ne sont pas des faits expérimentaux et qu’en particulier le postulatum d’Euclide ne saurait être démontré par l’expérience.',
        zh: '**1.** 在前面的篇幅里，我已经屡次试图表明，几何学的各项原理并非实验事实，尤其是欧几里得公设，绝无可能通过经验加以证明。'
      },
      {
        id: 'sh-ch05-p02',
        type: 'paragraph',
        num: '§ 02',
        fr: 'Quelque péremptoires que me paraissent les raisons déjà données, je crois devoir insister parce qu’il y a là une idée fausse profondément enracinée dans bien des esprits.',
        zh: '尽管前文给出的理由在我看来已经无可辩驳，我仍觉得有必要再次申明，因为在一个问题上，许多人的头脑里依然深深扎根着一种谬见。'
      },
      {
        id: 'sh-ch05-p03',
        type: 'paragraph',
        num: '§ 03',
        fr: '2. Qu’on réalise un cercle matériel, qu’on en mesure le rayon et la circonférence, et qu’on cherche à voir si le rapport de ces deux longueurs est égal à π, qu’aura-t-on fait ? On aura fait une expérience, non sur les propriétés de l’espace, mais sur celles de la matière avec laquelle on a réalisé ce rond, et de celle dont est fait le mètre qui a servi aux mesures.',
        zh: '**2.** 试制作一个物质圆环，测量它的半径与圆周，再去检验这两段长度之比是否等于 π——这样做究竟是在做什么呢？我们所做的只是一次实验，但实验的对象并非空间的性质，而是我们用来制作这个圆环的那种物质的性质，以及用来进行测量的那把米尺所由之构成的那种物质的性质。'
      },
      {
        id: 'sh-ch05-p04',
        type: 'paragraph',
        num: '§ 04',
        fr: '3. La géométrie et l’astronomie. — On a également posé la question d’une autre manière. Si la géométrie de Lobatchevsky est vraie, la parallaxe d’une étoile très éloignée sera finie ; si celle de Riemann est vraie, elle sera négative. Ce sont là des résultats qui semblent accessibles à l’expérience et on a espéré que les observations astronomiques pourraient permettre de décider entre les trois géométries.',
        zh: '**3. 几何学与天文学**——人们也曾换一种方式提出问题。如果罗巴切夫斯基几何是真的，那么一颗[十分遥远的恒星的视差]{#g-sh-c5-01}将是有限值；如果黎曼几何是真的，它的视差就将是负值。这些结果看似可以通过经验加以检验，因此人们曾寄望于借助天文观测在三种几何学之间作出裁决。',
        glosses: [
          {
            id: 'g-sh-c5-01',
            anchor: '十分遥远的恒星的视差',
            content: '恒星视差（法语 parallaxe，通常指周年视差）即地球绕太阳公转至轨道直径两端时，观测同一颗恒星所得两条视线之间的夹角之半，亦直接决定以地球轨道直径为底边、恒星为顶点的天文三角形内角和与两直角之差。在欧几里得空间中，当恒星距离趋向无穷大时视差趋于零；在罗巴切夫斯基双曲空间中，三角形内角和恒小于两直角，即便恒星退至无穷远处，视差仍保持大于某一正的下限；在黎曼椭圆空间中，内角和大于两直角，极远天体的视差则呈现负值。1829 年，罗巴切夫斯基在《论几何学原理》中提出以恒星视差三角形检验空间曲率，并利用当时的星表数据推算出地球轨道尺度上的角度亏损不大于 0.000372 角秒；1838 年，德国天文学家弗里德里希·威廉·贝塞尔（Friedrich Wilhelm Bessel，1784—1846）用量日仪首次测出天鹅座 61 的周年视差（0.314 角秒）；1900 年，卡尔·史瓦西（Karl Schwarzschild，1873—1916）亦据此估算过宇宙空间曲率半径的下界。'
          }
        ]
      },
      {
        id: 'sh-ch05-p05',
        type: 'paragraph',
        num: '§ 05',
        fr: 'Mais ce qu’on appelle ligne droite en astronomie, c’est simplement la trajectoire du rayon lumineux. Si donc, par impossible, on venait à découvrir des parallaxes négatives, ou à démontrer que toutes les parallaxes sont supérieures à une certaine limite, on aurait le choix entre deux conclusions : nous pourrions renoncer à la géométrie euclidienne ou bien modifier les lois de l’optique et admettre que la lumière ne se propage pas rigoureusement en ligne droite.',
        zh: '然而，天文学上所谓的直线，只不过是光线的轨迹。因此，退一万步讲，倘若果真发生了不可能之事，人们竟然发现了负视差，或者证明了所有视差都大于某一极限值，我们也依然可以在两种结论之间作出抉择：我们既可以[放弃欧几里得几何，也可以修改光学定律]{#g-sh-c5-02}，承认光并非严格沿直线传播。',
        glosses: [
          {
            id: 'g-sh-c5-02',
            anchor: '放弃欧几里得几何，也可以修改光学定律',
            content: '法国物理学家与科学哲学家皮埃尔·迪昂（Pierre Duhem，1861—1916）在《物理学理论的目的与结构》（La Théorie physique : son objet, sa structure，1906）第二编第六章中将庞加莱此处关于几何与光学的论证推广至整个物理学，指出任何单一物理假说都无法孤立接受实验证伪，面对实验反常总可通过调整辅助假说加以吸收，因而物理学中不存在培根式的「判决性实验」（experimentum crucis）；1951 年，美国哲学家威拉德·范·奥曼·蒯因（Willard Van Orman Quine，1908—2000）在《经验论的两个教条》中进一步将其扩展至全部科学知识之网，后世科学哲学通称「迪昂—蒯因论题」。'
          }
        ]
      },
      {
        id: 'sh-ch05-p06',
        type: 'paragraph',
        num: '§ 06',
        fr: 'Inutile d’ajouter que tout le monde regarderait cette solution comme plus avantageuse.',
        zh: '无须补充，人人都会认为后一种解决方案更加有利。'
      },
      {
        id: 'sh-ch05-p07',
        type: 'paragraph',
        num: '§ 07',
        fr: 'La géométrie euclidienne n’a donc rien à craindre d’expériences nouvelles.',
        zh: '因此，欧几里得几何根本无须惧怕任何新实验的挑战。'
      },
      {
        id: 'sh-ch05-p08',
        type: 'paragraph',
        num: '§ 08',
        fr: '4. Peut-on soutenir que certains phénomènes, possibles dans l’espace euclidien, seraient impossibles dans l’espace non euclidien, de sorte que l’expérience, en constatant ces phénomènes, contredirait directement l’hypothèse non euclidienne ? Pour moi, une pareille question ne peut se poser. À mon sens elle équivaut tout à fait à la suivante, dont l’absurdité saute aux yeux de tous : y a-t-il des longueurs que l’on peut exprimer en mètres et centimètres, mais que l’on ne saurait mesurer en toises, pieds et pouces, de sorte que l’expérience, en constatant l’existence de ces longueurs, contredirait directement cette hypothèse qu’il y a des toises partagées en six pieds ?',
        zh: '**4.** 能否主张说，某些在欧几里得空间中可能的现象，在非欧空间中将是不可能的，从而经验一旦证实这些现象，便会直接驳倒非欧假说呢？依我之见，这样的问题根本无从谈起。在我看来，它完全等同于下面这个任谁一眼都能看出其荒谬性的问题：难道存在着某些可以用米和厘米表示、却无法用[图瓦兹、法尺与法寸]{#g-sh-c5-03}测量的长度，以致经验一旦证实这些长度的存在，便会直接驳倒「存在分为六法尺的图瓦兹」这一假说吗？',
        glosses: [
          {
            id: 'g-sh-c5-03',
            anchor: '图瓦兹、法尺与法寸',
            content: '原文 toises, pieds et pouces，系法国旧制度时期的非十进长度单位细分级次：图瓦兹（toise，词源出自通俗拉丁语 tensa brachia，意为双臂平伸之长，实物基准先后采用巴黎大沙特莱堡铁尺 Toise du Châtelet 与 1735 年秘鲁大地测量铁尺 Toise du Pérou）下分王室法尺（pieds du roi，每法尺约合 32.48 厘米），每法尺再按十二进制分为十二法寸（pouces，每法寸约合 2.71 厘米，下复分十二法分 lignes）。'
          }
        ]
      },
      {
        id: 'sh-ch05-p09',
        type: 'paragraph',
        num: '§ 09',
        fr: 'Examinons la question de plus près. Je suppose que la ligne droite possède dans l’espace euclidien deux propriétés quelconques que j’appellerai A et B ; que dans l’espace non euclidien elle possède encore la propriété A, mais ne possède plus la propriété B ; je suppose enfin que, tant dans l’espace euclidien que dans l’espace non euclidien, la ligne droite soit la seule ligne qui possède la propriété A.',
        zh: '让我们把问题审视得更仔细些。假定直线在欧几里得空间中拥有任意两条性质，我称之为 A 与 B；在非欧空间中，它依然拥有性质 A，却不再拥有性质 B；最后假定，无论是在欧几里得空间还是在非欧空间中，直线都是唯一拥有性质 A 的线。'
      },
      {
        id: 'sh-ch05-p10',
        type: 'paragraph',
        num: '§ 10',
        fr: 'S’il en était ainsi, l’expérience pourrait être apte à décider entre l’hypothèse d’Euclide et celle de Lobatchevsky. On constaterait que tel objet concret, accessible à l’expérience, par exemple un pinceau de rayons lumineux, possède la propriété A ; on en conclurait qu’il est rectiligne et on chercherait ensuite s’il possède ou non la propriété B.',
        zh: '倘若果真如此，经验便有资格在欧几里得假说与罗巴切夫斯基假说之间作出裁决了。人们只需查明某个可通过经验接触的具体对象——譬如一束光线——拥有性质 A，便可断定它是直线，然后再去检验它是否拥有性质 B。'
      },
      {
        id: 'sh-ch05-p11',
        type: 'paragraph',
        num: '§ 11',
        fr: 'Mais il n’en est pas ainsi, il n’existe pas de propriété qui puisse, comme cette propriété A, être un critère absolu permettant de reconnaître la ligne droite et de la distinguer de toute autre ligne.',
        zh: '然而事实并非如此：**根本不存在**任何一种性质，能够像上述性质 A 那样充当绝对判据，使我们得以认出直线并将它与一切别的线区分开来。'
      },
      {
        id: 'sh-ch05-p12',
        type: 'paragraph',
        num: '§ 12',
        fr: 'Dira-t-on par exemple : « cette propriété sera la suivante : la ligne droite est une ligne telle qu’une figure dont fait partie cette ligne ne peut se mouvoir sans que les distances mutuelles de ses points varient et de telle sorte que tous les points de cette ligne restent fixes ? »',
        zh: '譬如，会不会有人说：「这条性质就是：直线是这样一种线——包含这条线的图形在运动时，可以做到既不改变其各点间的相互距离，同时又使这条线上的所有点都保持固定不动」？'
      },
      {
        id: 'sh-ch05-p13',
        type: 'paragraph',
        num: '§ 13',
        fr: 'Voilà en effet une propriété qui, dans l’espace euclidien ou non euclidien, appartient à la droite et n’appartient qu’à elle. Mais comment reconnaîtra-t-on par expérience si elle appartient à tel ou tel objet concret ? Il faudra mesurer des distances, et comment saura-t-on que telle grandeur concrète que j’ai mesurée avec mon instrument matériel représente bien la distance abstraite ?',
        zh: '这诚然是一条无论在欧几里得空间还是非欧空间中都属于直线、且唯独属于直线的性质。可是，人们怎样通过实验去辨认它是否属于某某具体对象呢？这就必须测量距离；然而人们又怎么知道，我用物质仪器测量出来的某个具体量，果真就代表着抽象的距离呢？'
      },
      {
        id: 'sh-ch05-p14',
        type: 'paragraph',
        num: '§ 14',
        fr: 'On n’a fait que reculer la difficulté.',
        zh: '困难只不过是被往后推了一步而已。'
      },
      {
        id: 'sh-ch05-p15',
        type: 'paragraph',
        num: '§ 15',
        fr: 'En réalité la propriété que je viens d’énoncer n’est pas une propriété de la ligne droite seule, c’est une propriété de la ligne droite et de la distance. Pour qu’elle pût servir de critère absolu, il faudrait que l’on pût établir non seulement qu’elle n’appartient pas aussi à une autre ligne que la ligne droite et à la distance, mais encore qu’elle n’appartient pas à une autre ligne que la ligne droite et à une autre grandeur que la distance. Or cela n’est pas vrai.',
        zh: '事实上，我刚才陈述的那条性质并非单属于直线本身的性质，而是属于直线与距离二者的联合性质。要想让它充当绝对判据，我们就不仅必须证明它不属于直线以外的任何别的线与距离的组合，还必须证明它不属于直线以外的任何别的线与距离以外的任何别的量的组合。然而这并不成立。'
      },
      {
        id: 'sh-ch05-p16',
        type: 'paragraph',
        num: '§ 16',
        fr: 'Il est donc impossible d’imaginer une expérience concrète qui puisse être interprétée dans le système euclidien et qui ne puisse pas l’être dans le système lobatchevskien, de sorte que je puis conclure :',
        zh: '因此，根本不可能设想出任何一项具体实验，使它只能在欧几里得体系中得到解释，而不能在罗巴切夫斯基体系中得到解释。所以我可以得出结论：'
      },
      {
        id: 'sh-ch05-p17',
        type: 'paragraph',
        num: '§ 17',
        fr: 'Aucune expérience ne sera jamais en contradiction avec le postulatum d’Euclide ; en revanche aucune expérience ne sera jamais en contradiction avec le postulatum de Lobatchevsky.',
        zh: '**任何实验都永远不会与欧几里得公设相矛盾；反过来，任何实验也永远不会与罗巴切夫斯基公设相矛盾。**'
      },
      {
        id: 'sh-ch05-p18',
        type: 'paragraph',
        num: '§ 18',
        fr: '5. Mais il ne suffit pas que la géométrie euclidienne (ou non euclidienne) ne puisse jamais être directement contredite par l’expérience. Ne pourrait-il pas se faire qu’elle ne puisse s’accorder avec l’expérience qu’en violant le principe de raison suffisante et celui de la relativité de l’espace ?',
        zh: '**5.** 然而，欧几里得几何（或非欧几何）永远不会被经验直接驳倒，单凭这一点还不够。会不会出现这样的情形：它唯有违背充足理由律与空间相对性原理，才能与经验相吻合呢？'
      },
      {
        id: 'sh-ch05-p19',
        type: 'paragraph',
        num: '§ 19',
        fr: 'Je m’explique : considérons un système matériel quelconque ; nous aurons à envisager d’une part « l’état » des divers corps de ce système (par exemple leur température, leur potentiel électrique, etc.), et d’autre part leur position dans l’espace ; et parmi les données qui permettent de définir cette position, nous distinguerons encore les distances mutuelles de ces corps qui définissent leurs positions relatives, et les conditions qui définissent la position absolue du système et son orientation absolue dans l’espace.',
        zh: '容我加以说明：考察任意一个物质系统；我们一方面要考察该系统中各个物体的「状态」（例如它们的温度、电势等等），另一方面要考察它们在空间中的位置；而在用以确定这一位置的各项数据当中，我们还要进一步区分确定各物体相对位置的相互距离，以及确定该系统在空间中之绝对位置与绝对朝向的条件。'
      },
      {
        id: 'sh-ch05-p20',
        type: 'paragraph',
        num: '§ 20',
        fr: 'Les lois des phénomènes qui se produiront dans ce système pourront dépendre de l’état de ces corps et de leurs distances mutuelles ; mais, à cause de la relativité et de la passivité de l’espace, elles ne dépendront pas de la position et de l’orientation absolues du système.',
        zh: '在该系统内部发生的种种现象所遵循的定律，可以依赖于这些物体的状态及其相互距离；但由于空间的相对性与惰性，这些定律绝不会依赖于该系统的绝对位置与绝对朝向。'
      },
      {
        id: 'sh-ch05-p21',
        type: 'paragraph',
        num: '§ 21',
        fr: 'En d’autres termes, l’état des corps et leurs distances mutuelles à un instant quelconque dépendront seulement de l’état de ces mêmes corps et de leurs distances mutuelles à l’instant initial, mais ne dépendront nullement de la position absolue initiale du système et de son orientation absolue initiale. C’est ce que je pourrai appeler, pour abréger le langage, la loi de relativité.',
        zh: '换言之，各个物体在任意时刻的状态及其相互距离，仅仅取决于这些物体在初始时刻的状态及其相互距离，而丝毫不取决于该系统初始的绝对位置与初始的绝对朝向。为简省言辞，我不妨把这一原理称为**相对性定律**。'
      },
      {
        id: 'sh-ch05-p22',
        type: 'paragraph',
        num: '§ 22',
        fr: 'J’ai parlé jusqu’ici comme un géomètre euclidien. Mais je l’ai dit, une expérience, quelle qu’elle soit, comporte une interprétation dans l’hypothèse euclidienne ; mais elle en comporte une également dans l’hypothèse non euclidienne. Eh bien, nous avons fait une série d’expériences, nous les avons interprétées dans l’hypothèse euclidienne, et nous avons reconnu que ces expériences ainsi interprétées ne violent pas cette « loi de relativité ».',
        zh: '到目前为止，我一直是像一位欧几里得几何学家那样说话的。但我已经说过，无论什么样的实验，既容许在欧几里得假说下作出解释，也同样容许在非欧假说下作出解释。好了，假定我们已经做了一系列实验，并在欧几里得假说下对它们作了解释，而且确认按这种方式解释的实验并不违背这条「相对性定律」。'
      },
      {
        id: 'sh-ch05-p23',
        type: 'paragraph',
        num: '§ 23',
        fr: 'Nous les interprétons maintenant dans l’hypothèse non euclidienne : cela est toujours possible ; seulement les distances non euclidiennes de nos différents corps dans cette interprétation nouvelle ne seront généralement pas les mêmes que les distances euclidiennes dans l’interprétation primitive.',
        zh: '现在，我们改在非欧假说下解释这些实验：这总是办得到的；只不过在这种新解释下，各个物体之间的非欧距离，一般说来将不再等于原先解释下的欧几里得距离。'
      },
      {
        id: 'sh-ch05-p24',
        type: 'paragraph',
        num: '§ 24',
        fr: 'Nos expériences, interprétées de cette manière nouvelle, seront-elles encore d’accord avec notre « loi de relativité » ? Et si cet accord n’avait pas lieu, n’aurait-on pas encore le droit de dire que l’expérience a prouvé la fausseté de la géométrie non euclidienne.',
        zh: '按这种新方式解释的实验，是否依然符合我们的「相对性定律」呢？倘若不再符合，人们岂非仍有权说经验已经证明了非欧几何的谬误吗？'
      },
      {
        id: 'sh-ch05-p25',
        type: 'paragraph',
        num: '§ 25',
        fr: 'Il est aisé de voir que cette crainte est vaine ; en effet, pour qu’on puisse appliquer la loi de relativité en toute rigueur, il faut l’appliquer à l’univers entier. Car si on considérait seulement une partie de cet univers, et si la position absolue de cette partie venait à varier, les distances aux autres corps de l’univers varieraient également, leur influence sur la partie de l’univers envisagée pourrait par conséquent augmenter ou diminuer, ce qui pourrait modifier les lois des phénomènes qui s’y passent.',
        zh: '不难看出，这种担忧纯属多余；事实上，要想严格地运用相对性定律，就必须将它运用于整个宇宙。因为倘若只考察宇宙的一部分，而这一部分的绝对位置发生了变化，那么它到宇宙中其他物体的距离也会随之变化，那些物体对所考察的这部分宇宙的影响便可能增大或减小，从而改变其中所发生现象的定律。'
      },
      {
        id: 'sh-ch05-p26',
        type: 'paragraph',
        num: '§ 26',
        fr: 'Mais si notre système est l’univers entier, l’expérience est impuissante à nous renseigner sur sa position et son orientation absolues dans l’espace. Tout ce que nos instruments, si perfectionnés qu’ils soient, pourront nous faire connaître, ce sera l’état des diverses parties de l’univers et leurs distances mutuelles.',
        zh: '然而，一旦我们的系统是整个宇宙，经验就根本无力告知我们它在空间中的绝对位置与绝对朝向。无论我们的仪器多么精密完善，它们所能让我们获知的全部内容，都只是宇宙各个部分的状态及其相互距离。'
      },
      {
        id: 'sh-ch05-p27',
        type: 'paragraph',
        num: '§ 27',
        fr: 'De sorte que notre loi de relativité pourra s’énoncer ainsi :',
        zh: '因此，我们的相对性定律便可以表述如下：'
      },
      {
        id: 'sh-ch05-p28',
        type: 'paragraph',
        num: '§ 28',
        fr: 'Les lectures que nous pourrons faire sur nos instruments, à un instant quelconque, dépendront seulement des lectures que nous aurions pu faire sur ces mêmes instruments à l’instant initial.',
        zh: '**我们在任意时刻能够从仪器上读出的读数，仅仅取决于我们在初始时刻原本可以从同一批仪器上读出的读数。**'
      },
      {
        id: 'sh-ch05-p29',
        type: 'paragraph',
        num: '§ 29',
        fr: 'Or un pareil énoncé est indépendant de toute interprétation des expériences. Si la loi est vraie dans l’interprétation euclidienne, elle sera vraie aussi dans l’interprétation non euclidienne.',
        zh: '而这样的表述独立于对实验的一切几何解释。倘若该定律在欧几里得解释下成立，那么它在非欧解释下也必然同样成立。'
      },
      {
        id: 'sh-ch05-p30',
        type: 'paragraph',
        num: '§ 30',
        fr: 'Qu’on me permette à ce sujet une petite digression. J’ai parlé plus haut des données qui définissent la position des divers corps de système ; j’aurais dû parler également de celles qui définissent leurs vitesses ; j’aurais eu alors à distinguer la vitesse avec laquelle varient les distances mutuelles des divers corps ; et d’autre part les vitesses de translation et de rotation du système, c’est-à-dire les vitesses avec lesquelles varient sa position et son orientation absolues.',
        zh: '请允许我就此稍作一点题外发挥。我刚才谈到了确定系统内各物体位置的各项数据，其实我还本应谈谈确定它们速度的各项数据；那样一来，我就必须把各物体间相互距离变化的速度，同系统的平动速度与转动速度——亦即其绝对位置与绝对朝向变化的速度——区分开来。'
      },
      {
        id: 'sh-ch05-p31',
        type: 'paragraph',
        num: '§ 31',
        fr: 'Pour que l’esprit fût pleinement satisfait, il aurait fallu que la loi de relativité pût s’énoncer ainsi :',
        zh: '要使心智得到彻底满足，相对性定律原本应当能够表述如下：'
      },
      {
        id: 'sh-ch05-p32',
        type: 'paragraph',
        num: '§ 32',
        fr: 'L’état des corps et leurs distances mutuelles à un instant quelconque, ainsi que les vitesses avec lesquelles varient ces distances à ce même instant, dépendront seulement de l’état de ces corps et de leurs distances mutuelles à l’instant initial, ainsi que des vitesses avec lesquelles variaient ces distances à cet instant initial, mais elles ne dépendront ni de la position absolue initiale du système, ni de son orientation absolue, ni des vitesses avec lesquelles variaient cette position et cette orientation absolues à l’instant initial.',
        zh: '在任意时刻，各物体的状态及其相互距离，连同这些距离在该时刻变化的速度，仅仅取决于各物体在初始时刻的状态及其相互距离，连同这些距离在初始时刻变化的速度；而既不取决于系统初始的绝对位置，也不取决于其绝对朝向，亦不取决于该绝对位置与绝对朝向在初始时刻变化的速度。'
      },
      {
        id: 'sh-ch05-p33',
        type: 'paragraph',
        num: '§ 33',
        fr: 'Malheureusement la loi ainsi énoncée n’est pas d’accord avec les expériences, au moins telles qu’on les interprète d’ordinaire.',
        zh: '遗憾的是，按这种方式表述的定律与实验并不相符——至少与人们通常解释的实验不相符。'
      },
      {
        id: 'sh-ch05-p34',
        type: 'paragraph',
        num: '§ 34',
        fr: 'Qu’un homme soit transporté sur une planète dont le ciel serait constamment couvert d’un épais rideau de nuages, de telle façon qu’on ne puisse jamais apercevoir les autres astres ; sur cette planète on vivra comme si elle était isolée dans l’espace. Cet homme pourra cependant s’apercevoir qu’elle tourne, soit en mesurant l’aplatissement (ce qu’on fait ordinairement en s’aidant d’observations astronomiques, mais ce qui pourrait se faire par des moyens purement géodésiques), soit en répétant l’expérience du pendule de Foucault. La rotation absolue de cette planète pourrait donc être mise en évidence.',
        zh: '试想把一个人移送到一颗天空终年被浓密云幕遮蔽的行星上，使他永远无法望见其他天体；在这颗行星上生活，就如同它孤悬于太空中一般。然而，这个人依然能够察觉这颗行星正在自转——他既可以通过测量行星的扁率（人们通常借助天文观测来测量它，但纯粹依靠大地测量手段同样可以办到），也可以通过重做[傅科摆]{#g-sh-c5-04}实验。于是，这颗行星的绝对自转便可以被揭示出来。',
        glosses: [
          {
            id: 'g-sh-c5-04',
            anchor: '傅科摆',
            content: '法国物理学家莱昂·傅科（Léon Foucault，1819—1868）于 1851 年初设计的地球自转力学演示装置。傅科先在巴黎阿萨斯街自家地窖与巴黎天文台子午厅试验，同年 2 月至 3 月在巴黎先贤祠穹顶下悬挂长 67 米的钢丝与重 28 千克的包铜铅球：在无外力矩干扰下，摆振动面因惯性保持空间定向，而地面随地球自转，使观测者看到摆面按顺时针方向以每恒星时 15° sin φ（φ 为当地地理纬度）的角速度匀速偏转，在不依赖天文星象观测的条件下直接证实了地球自转。同段提及的「行星扁率」（aplatissement），指自转离心力使赤道隆起、两极略扁的椭球形变；牛顿曾在《自然哲学的数学原理》（1687）第三卷据此及旋转水桶实验论证绝对空间，法兰西科学院于 1735 至 1744 年间派遣拉孔达明（Charles Marie de La Condamine）赴秘鲁、莫佩尔蒂（Pierre Louis Maupertuis）赴拉普兰实地测量子午弧，证实了地球的极扁率。'
          }
        ]
      },
      {
        id: 'sh-ch05-p35',
        type: 'paragraph',
        num: '§ 35',
        fr: 'Il y a là un fait qui choque le philosophe, mais que le physicien est bien forcé d’accepter.',
        zh: '这一事实令哲学家深感刺目，物理学家却不得不予以接受。'
      },
      {
        id: 'sh-ch05-p36',
        type: 'paragraph',
        num: '§ 36',
        fr: 'On sait que, de ce fait, Newton a conclu à l’existence de l’espace absolu ; je ne puis en aucune façon adopter cette manière de voir, j’expliquerai pourquoi dans la troisième partie. Pour le moment je n’ai pas voulu aborder cette difficulté.',
        zh: '众所周知，牛顿曾由这一事实推论出绝对空间的存在；我无论如何不能采纳这种看法，原因我将在第三编加以解释。眼下我不打算触及这一难题。'
      },
      {
        id: 'sh-ch05-p37',
        type: 'paragraph',
        num: '§ 37',
        fr: 'J’ai donc dû me résigner, dans l’énoncé de la loi de relativité, à confondre les vitesses de toutes sortes parmi les données qui définissent l’état des corps.',
        zh: '因此，在表述相对性定律时，我只得勉强将各种速度一并归入确定物体状态的各项数据之中。'
      },
      {
        id: 'sh-ch05-p38',
        type: 'paragraph',
        num: '§ 38',
        fr: 'Quoi qu’il en soit, cette difficulté est la même pour la géométrie d’Euclide et pour celle de Lobatchevsky ; je n’ai donc pas à m’en inquiéter et je n’en ai parlé qu’incidemment.',
        zh: '无论如何，这一困难对于欧几里得几何与罗巴切夫斯基几何是完全一样的；因此我无须为此挂怀，刚才也只是顺带提及而已。'
      },
      {
        id: 'sh-ch05-p39',
        type: 'paragraph',
        num: '§ 39',
        fr: 'Ce qui importe, c’est la conclusion : l’expérience ne peut décider entre Euclide et Lobatchevsky.',
        zh: '真正紧要的是结论：**经验无法在欧几里得与罗巴切夫斯基之间作出裁决。**'
      },
      {
        id: 'sh-ch05-p40',
        type: 'paragraph',
        num: '§ 40',
        fr: 'En résumé, de quelque façon qu’on se retourne, il est impossible de découvrir à l’empirisme géométrique un sens raisonnable.',
        zh: '总而言之，无论人们怎样辗转腾挪，都不可能为几何经验论找出任何合理的意义。'
      },
      {
        id: 'sh-ch05-p41',
        type: 'paragraph',
        num: '§ 41',
        fr: '6. Les expériences ne nous font connaître que les rapports des corps entre eux ; aucune d’elles ne porte, ni ne peut porter, sur les rapports des corps avec l’espace, ou sur les rapports mutuels des diverses parties de l’espace.',
        zh: '**6.** 实验只能让我们认识物体彼此之间的关系；没有任何一项实验涉及、也不可能涉及物体与空间的关系，或者空间各个部分彼此之间的相互关系。'
      },
      {
        id: 'sh-ch05-p42',
        type: 'paragraph',
        num: '§ 42',
        fr: '« Oui, répondez-vous à cela, une expérience unique est insuffisante, parce qu’elle ne me donne qu’une seule équation avec plusieurs inconnues ; mais quand j’aurai fait assez d’expériences, j’aurai assez d’équations pour calculer toutes mes inconnues. »',
        zh: '「不错，」您对此回应道，「单独一项实验诚然不够，因为它只给了我一个含有多个未知数的方程；但只要我做够了实验，我就会拥有足够多的方程，从而算出我所有的未知数。」'
      },
      {
        id: 'sh-ch05-p43',
        type: 'paragraph',
        num: '§ 43',
        fr: 'Connaître la hauteur du grand mât, cela ne suffit pas pour calculer l’âge du capitaine. Quand vous aurez mesuré tous les morceaux de bois du navire, vous aurez beaucoup d’équations, mais vous ne connaîtrez pas mieux cet âge. Toutes vos mesures ayant porté sur vos morceaux de bois ne peuvent rien vous révéler que ce qui concerne ces morceaux de bois. De même vos expériences, quelque nombreuses qu’elles soient, n’ayant porté que sur les rapports des corps entre eux, ne nous révéleront rien sur les rapports mutuels des diverses parties de l’espace.',
        zh: '[知道了主桅的高度，并不足以算出船长的年龄]{#g-sh-c5-05}。就算您把船上每一块木头都量遍了，您固然会得到许许多多方程，却依然不会因此更清楚船长的年龄。既然您所有的测量都只针对船上的木头，它们除了关于这些木头的事情之外，便不可能向您透露任何别的东西。同理，无论您的实验多么繁多，既然它们只涉及物体彼此之间的关系，便绝不会向我们揭示任何关于空间各个部分之间相互关系的事情。',
        glosses: [
          {
            id: 'g-sh-c5-05',
            anchor: '知道了主桅的高度，并不足以算出船长的年龄',
            content: '法语科学界与数学教育中常见的讽刺典故「船长的年龄」（l’âge du capitaine），出自法国作家居斯塔夫·福楼拜（Gustave Flaubert，1821—1880）1843 年 5 月 16 日致胞妹卡罗琳的书信：「既然你在学几何学与三角学，我且给你出一道题：一艘船航行在海上，它满载棉花自波士顿启航，排水量二百吨，正驶往勒阿弗尔，主桅折断了，前甲板上有一名见习水手，船上共有十二名乘客，风向东北偏东，挂钟指向午后三点一刻，时值五月……试求船长的年龄？」此后「由桅杆高度求船长年龄」遂成为法语中讥刺堆砌无关已知条件以求解毫不相干未知量的习惯用语。'
          }
        ]
      },
      {
        id: 'sh-ch05-p44',
        type: 'paragraph',
        num: '§ 44',
        fr: '7. Direz-vous que, si les expériences portent sur les corps, elles portent du moins sur les propriétés géométriques des corps ?',
        zh: '**7.** 您是否会说，实验固然针对物体，但至少针对物体的几何性质呢？'
      },
      {
        id: 'sh-ch05-p45',
        type: 'paragraph',
        num: '§ 45',
        fr: 'Et d’abord, qu’entendez-vous par propriétés géométriques des corps ? Je suppose qu’il s’agit des rapports des corps avec l’espace ; ces propriétés sont donc inaccessibles à des expériences qui ne portent que sur les rapports des corps entre eux. Cela seul suffirait pour montrer que ce n’est pas d’elles qu’il peut être question.',
        zh: '首先，您所谓的「物体的几何性质」究竟指什么？我想，指的无非是物体与空间的关系；既然如此，对于只涉及物体彼此之间关系的实验而言，这些性质便是根本无从触及的。单凭这一点，便足以表明这里所讨论的绝不可能是那种意义上的几何性质。'
      },
      {
        id: 'sh-ch05-p46',
        type: 'paragraph',
        num: '§ 46',
        fr: 'Commençons toutefois par nous entendre sur le sens de ce mot : propriétés géométriques des corps. Quand je dis qu’un corps se compose de plusieurs parties, je suppose que je n’énonce pas là une propriété géométrique, et cela resterait vrai, même si je convenais de donner le nom impropre de points aux parties les plus petites que j’envisage.',
        zh: '不过，我们还是先就「物体的几何性质」一词的含义达成共识吧。当我说一个物体由若干部分组成时，我想我并没有在陈述一条几何性质；哪怕我约定把我所考察的最小部分不甚恰当地称作「点」，情形也依然如此。'
      },
      {
        id: 'sh-ch05-p47',
        type: 'paragraph',
        num: '§ 47',
        fr: 'Quand je dis que telle partie de tel corps est en contact avec telle partie de tel autre corps, j’énonce une proposition qui concerne les rapports mutuels de ces deux corps et non pas leurs rapports avec l’espace.',
        zh: '当我说某物体的某一部分与另一物体的某一部分相接触时，我所陈述的命题涉及的只是这两个物体的相互关系，而不是它们与空间的关系。'
      },
      {
        id: 'sh-ch05-p48',
        type: 'paragraph',
        num: '§ 48',
        fr: 'Je suppose que vous m’accorderez que ce ne sont pas là des propriétés géométriques ; je suis sûr au moins que vous m’accorderez que ces propriétés sont indépendantes de toute connaissance de la géométrie métrique.',
        zh: '我想您会同意，这些都不是几何性质；至少我确信您会承认，这些性质完全独立于一切度量几何学知识。'
      },
      {
        id: 'sh-ch05-p49',
        type: 'paragraph',
        num: '§ 49',
        fr: 'Cela posé, j’imagine que l’on ait un corps solide formé de huit tiges minces de fer OA, OB, OC, OD, OE, OF, OG, OH, réunies par une de leurs extrémités O. Nous aurons d’autre part un second corps solide, par exemple un morceau de bois sur lequel on remarquera trois petites taches d’encre que j’appellerai α, β, γ. Je suppose ensuite que l’on constate que l’on peut amener en contact : α β γ avec AGO (je veux dire par là α avec A, en même temps que β avec G et γ avec O), puisqu’on peut amener successivement en contact α β γ avec BGO, CGO, DGO, EGO, FGO, puis avec AHO, BHO, CHO, DHO, EHO, FHO, puis α γ successivement avec AB, BC, CD, DE, EF, FA.',
        zh: '明确了这一点之后，试设想我们有一个由八根细铁杆 OA、OB、OC、OD、OE、OF、OG、OH 在共同端点 O 处连接而成的固体。另一方面，我们还有第二个固体，譬如一块木片，上面标有三个小墨点，我称之为 α、β、γ。假定我们随后观察到：可以使 α β γ 与 AGO 接触（我的意思是 α 与 A 接触，同时 β 与 G 接触、γ 与 O 接触），继而又可以依次使 α β γ 与 BGO、CGO、DGO、EGO、FGO 接触，再与 AHO、BHO、CHO、DHO、EHO、FHO 接触，随后又使 α γ 依次与 AB、BC、CD、DE、EF、FA 接触。'
      },
      {
        id: 'sh-ch05-p50',
        type: 'paragraph',
        num: '§ 50',
        fr: 'Voilà des constatations que l’on peut faire sans avoir d’avance aucune notion sur la forme ou sur les propriétés métriques de l’espace. Elles ne portent nullement sur les « propriétés géométriques des corps ». Et ces constatations ne seront pas possibles si les corps sur lesquels on a expérimenté se meuvent suivant un groupe ayant même structure que le groupe lobatchevskien (je veux dire d’après les mêmes lois que les corps solides dans la géométrie de Lobatchevsky). Elles suffisent donc pour prouver que ces corps se meuvent suivant le groupe euclidien, ou tout au moins qu’ils ne se meuvent pas suivant le groupe lobatchevskien.',
        zh: '以上这些观察结果，无须预先对空间的形状或度量性质抱有任何概念便能得出。它们丝毫不涉及「物体的几何性质」。然而，倘若受实验的物体按照一个与罗巴切夫斯基群具有相同结构的群运动（我的意思是遵循与罗巴切夫斯基几何中的固体相同的运动定律），这些观察结果便不可能出现。因此，它们足以证明这些物体是按照欧几里得群运动的，或者至少证明它们不是按照罗巴切夫斯基群运动的。'
      },
      {
        id: 'sh-ch05-p51',
        type: 'paragraph',
        num: '§ 51',
        fr: 'Qu’elles soient compatibles avec le groupe euclidien, c’est ce qu’il est aisé de voir.',
        zh: '不难看出，这些观察结果与欧几里得群是相容的。'
      },
      {
        id: 'sh-ch05-p52',
        type: 'paragraph',
        num: '§ 52',
        fr: 'Car on pourrait les faire si le corps α β γ était un solide invariable de notre géométrie ordinaire présentant la forme d’un triangle rectangle et si les points A B C D E F G H étaient les sommets d’un polyèdre formé de deux pyramides hexagonales régulières de notre géométrie ordinaire, ayant pour base commune A B C D E F et pour sommets l’une G et l’autre H.',
        zh: '因为只要物体 α β γ 是我们日常几何学中呈直角三角形形状的不变固体，而点 A、B、C、D、E、F、G、H 是我们日常几何学中由两个共底面 A B C D E F、顶点分别为 G 与 H 的正六棱锥拼成的多面体的各个顶点，人们就能做出上述观察。'
      },
      {
        id: 'sh-ch05-p53',
        type: 'paragraph',
        num: '§ 53',
        fr: 'Supposons maintenant qu’au lieu des constatations précédentes, on observe qu’on peut comme tout à l’heure appliquer α β γ successivement sur AGO, BGO, CGO, DGO, EGO, FGO, AHO, BHO, CHO, DHO, EHO, FHO, puis qu’on peut appliquer α β (et non plus α γ) successivement sur AB, BC, CD, DE, EF et FA.',
        zh: '现在假定，取代上述观察结果，人们观察到：仍像刚才一样，可以将 α β γ 依次贴合到 AGO、BGO、CGO、DGO、EGO、FGO、AHO、BHO、CHO、DHO、EHO、FHO 上，接着却可以将 α β（而不再是 α γ）依次贴合到 AB、BC、CD、DE、EF 与 FA 上。'
      },
      {
        id: 'sh-ch05-p54',
        type: 'paragraph',
        num: '§ 54',
        fr: 'Ce sont les constatations que l’on pourrait faire si la géométrie non euclidienne était vraie, si les corps α β γ, O A B C D E F G H étaient des solides invariables, si le premier était un triangle rectangle et le second une double pyramide hexagonale régulière de dimensions convenables.',
        zh: '倘若非欧几何是真的，倘若物体 α β γ 与 O A B C D E F G H 都是不变固体，且前者是一个直角三角形、后者是一个[尺寸适当的双正六棱锥]{#g-sh-c5-05a}，那么人们所能得出的就正是这样的观察结果。',
        glosses: [
          {
            id: 'g-sh-c5-05a',
            anchor: '尺寸适当的双正六棱锥',
            content: '在欧几里得几何中，正六边形 ABCDEF 由六个以 O 为公共顶点、顶角各为 60° 的等腰三角形拼成；因三角形内角和等于 180°，两底角亦各为 60°，故六边形边长 AB 等于半径 OA，从而等于直角三角形 αβγ（直角在 γ 处，γ 与 O 贴合、α 与 A 贴合、β 与 G 贴合）的直角边 αγ。而在罗巴切夫斯基双曲几何中，顶角为 60° 的等腰三角形 OAB 内角和小于 180°，两底角均小于 60°，大角对大边遂使底边 AB 严格大于半径 OA（即大于直角边 αγ）；此时适当选取棱锥高 OG（即另一条直角边 βγ），即可使斜边 αβ（依双曲勾股定理满足 cosh c = cosh a cosh b，故 αβ > αγ）恰好等于正六边形边长 AB。'
          }
        ]
      },
      {
        id: 'sh-ch05-p55',
        type: 'paragraph',
        num: '§ 55',
        fr: 'Ces constatations nouvelles ne sont donc pas possibles si les corps se meuvent suivant le groupe euclidien ; mais elles le deviennent si l’on suppose que les corps se meuvent suivant le groupe lobatchevskien. Elles suffiraient donc (si on les faisait) pour prouver que les corps en question ne se meuvent pas suivant le groupe euclidien.',
        zh: '因此，倘若物体按照欧几里得群运动，这些新的观察结果便不可能出现；但只要假定物体按照罗巴切夫斯基群运动，它们就成为可能的了。所以（倘若人们果真观察到了它们），它们便足以证明所讨论的物体不是按照欧几里得群运动的。'
      },
      {
        id: 'sh-ch05-p56',
        type: 'paragraph',
        num: '§ 56',
        fr: 'Ainsi, sans faire aucune hypothèse sur la forme, sur la nature de l’espace, sur les rapports des corps avec l’espace, sans attribuer aux corps aucune propriété géométrique, j’ai fait des constatations qui m’ont permis de montrer dans un cas que les corps expérimentés se meuvent suivant un groupe dont la structure est euclidienne, dans l’autre cas qu’ils se meuvent suivant un groupe dont la structure est lobatchevskienne.',
        zh: '由此可见，无须对空间的形状与本性作任何假定，无须对物体与空间的关系作任何假定，也无须赋予物体任何几何性质，我便得出了这样一些观察结果：它们使我得以在第一种情形下表明受实验物体按照结构为欧几里得式的群运动，在第二种情形下表明它们按照结构为罗巴切夫斯基式的群运动。'
      },
      {
        id: 'sh-ch05-p57',
        type: 'paragraph',
        num: '§ 57',
        fr: 'Et qu’on ne dise pas que le premier ensemble de constatations constituerait une expérience prouvant que l’espace est euclidien, et le second une expérience prouvant que l’espace est non euclidien.',
        zh: '千万不要说，第一组观察结果构成了一项证明空间是欧几里得空间的实验，第二组观察结果构成了一项证明空间是非欧空间的实验。'
      },
      {
        id: 'sh-ch05-p58',
        type: 'paragraph',
        num: '§ 58',
        fr: 'Et en effet on pourrait imaginer (je dis imaginer) des corps se mouvant de manière à rendre possible la seconde série de constatations. Et la preuve c’est que le premier mécanicien venu pourrait en construire, s’il voulait s’en donner la peine et y mettre le prix. Vous n’en conclurez pas pourtant que l’espace est non euclidien.',
        zh: '事实上，人们完全可以设想（我说的是设想）出按某种方式运动的物体，从而使第二组观察结果成为可能。证据就是：随便哪一位机械师，只要肯下功夫、肯花本钱，都能把这样的物体制造出来。然而您总不会因此就断定空间是非欧空间吧。'
      },
      {
        id: 'sh-ch05-p59',
        type: 'paragraph',
        num: '§ 59',
        fr: 'Et même, comme les corps solides ordinaires continueraient à exister quand le mécanicien aurait construit les corps étranges dont je viens de parler, il faudrait conclure que l’espace est à la fois euclidien et non euclidien.',
        zh: '更有甚者，既然当这位机械师造出我刚才所说的奇特物体之后，寻常的固体依然继续存在，那人们岂不是只好断定空间既是欧几里得空间又是非欧空间了吗？'
      },
      {
        id: 'sh-ch05-p60',
        type: 'paragraph',
        num: '§ 60',
        fr: 'Supposons par exemple que nous ayons une grande sphère de rayon R et que la température décroisse du centre à la surface de cette sphère suivant la loi dont j’ai parlé en décrivant le monde non euclidien.',
        zh: '譬如，假定我们有一座半径为 R 的大球体，温度从球心向球面按照我在描绘非欧世界时所说的那条定律递减。'
      },
      {
        id: 'sh-ch05-p61',
        type: 'paragraph',
        num: '§ 61',
        fr: 'Nous pourrions avoir des corps dont la dilatation sera négligeable et qui se comporteront comme des solides invariables ordinaires ; et d’autre part des corps très dilatables et qui se comporteraient comme des solides non euclidiens. Nous pourrions avoir deux doubles pyramides O A B C D E F G H et O′ A′ B′ C′ D′ E′ F′ G′ H′ et deux triangles α β γ et α′ β′ γ′. La première double pyramide serait rectiligne et la seconde curviligne ; le triangle α β γ serait fait d’une matière indilatable et l’autre d’une matière très dilatable.',
        zh: '在那里，我们既可以拥有热膨胀微乎其微、表现得如同寻常不变固体一般的物体；同时也可以拥有热膨胀极大、表现得如同非欧固体一般的物体。我们可以同时拥有两个双棱锥 O A B C D E F G H 与 O′ A′ B′ C′ D′ E′ F′ G′ H′，以及两个三角形 α β γ 与 α′ β′ γ′。第一个双棱锥是直线的，第二个则是曲线的；三角形 α β γ 由不膨胀的物质制成，另一个三角形则由极易膨胀的物质制成。'
      },
      {
        id: 'sh-ch05-p62',
        type: 'paragraph',
        num: '§ 62',
        fr: 'On pourrait alors faire les premières constatations avec la double pyramide OAH et le triangle α β γ, et les secondes avec la double pyramide O′H′A′ et le triangle α′ β′ γ′. Et alors l’expérience semblerait prouver d’abord que la géométrie euclidienne est vraie et ensuite qu’elle est fausse.',
        zh: '那样一来，人们用双棱锥 OAH 与三角形 α β γ 便能得出第一组观察结果，用双棱锥 O′H′A′ 与三角形 α′ β′ γ′ 又能得出第二组观察结果。届时，实验岂不是看似先证明了欧几里得几何是真的，紧接着又证明了它是假的吗？'
      },
      {
        id: 'sh-ch05-p63',
        type: 'paragraph',
        num: '§ 63',
        fr: 'Les expériences ont donc porté, non sur l’espace, mais sur les corps.',
        zh: '**由此可见，实验所针对的绝不是空间，而是物体。**'
      },
      {
        id: 'sh-ch05-p64',
        type: 'paragraph',
        num: '§ 64',
        fr: 'SUPPLÉMENT',
        zh: '**补篇**'
      },
      {
        id: 'sh-ch05-p65',
        type: 'paragraph',
        num: '§ 65',
        fr: '8. Pour être complet, je devrais parler d’une question très délicate et qui demanderait de longs développements, je me bornerai à résumer ici ce que j’ai exposé dans la Revue de Métaphysique et de Morale et dans The Monist. Quand nous disons que l’espace a trois dimensions, que voulons-nous dire ?',
        zh: '**8.** 为求完备，我本应谈谈一个十分微妙、需要长篇铺陈才能讲透的问题；在此我仅限于概述我曾[在《形而上学与道德评论》与《一元论者》中所作的阐述]{#g-sh-c5-06}。当我们说空间有三个维度时，我们究竟是什么意思？',
        glosses: [
          {
            id: 'g-sh-c5-06',
            anchor: '在《形而上学与道德评论》与《一元论者》中所作的阐述',
            content: '指庞加莱在芝加哥哲学季刊《一元论者》（The Monist，保罗·卡鲁斯主编）1898 年 10 月号（第 9 卷第 1 期，第 1—43 页）发表的英文长篇论文《论几何学的基础》（« On the Foundations of Geometry »），以及他在《形而上学与道德评论》发表的《空间与几何学》（1895）与《论几何学的基础：评罗素先生的一部著作》（1899；相关讨论后又扩充为 1903 年同刊论文《空间及其三个维度》，收入 1905 年《科学的价值》）。在这些论著中，庞加莱一方面运用索福斯·李的连续变换群理论——三维空间中的刚体位移群为六参数连续群，而保持空间中某一点不动的旋转稳定子群为三参数子群，其齐性商空间维数恰为 6 − 3 = 3——另一方面结合第二章所述以「分割」（coupures）递推界定物理连续统维数的方法，分析了空间三维性的认识论起源。'
          }
        ]
      },
      {
        id: 'sh-ch05-p66',
        type: 'paragraph',
        num: '§ 66',
        fr: 'Nous avons vu l’importance de ces « changements internes » qui nous sont révélés par nos sensations musculaires. Ils peuvent servir à caractériser les diverses attitudes de notre corps. Prenons arbitrairement pour origine une de ces attitudes A. Quand nous passons de cette attitude initiale à une autre attitude quelconque B, nous éprouvons une série S de sensations musculaires et cette série S définira B. Observons toutefois que nous regarderons souvent deux séries S et S′ comme définissant une même attitude B (puisque les attitudes initiale et finale A et B restant les mêmes, les attitudes intermédiaires et les sensations correspondantes peuvent différer). Comment donc reconnaîtrons-nous l’équivalence de ces deux séries ? Parce qu’elles peuvent servir à compenser un même changement externe, ou plus généralement parce que, quand il s’agit de compenser un changement externe, une des séries peut être remplacée par l’autre.',
        zh: '我们已经看到由肌肉感觉向我们揭示的那些「内部变化」具有何等重要的意义。它们可以用来表征我们身体的不同姿态。试任意选取其中一种姿态 A 作为原点。当我们从这一初始姿态过渡到任意另一种姿态 B 时，我们会体验到一连串肌肉感觉 S，而这一序列 S 便将定义姿态 B。不过要注意，我们常常会把两个不同的序列 S 与 S′ 看作定义了同一种姿态 B（因为即便初始姿态 A 与最终姿态 B 保持相同，中间姿态及相应的感觉却可以不同）。那么，我们如何辨认这两个序列的等价性呢？原因就在于它们都可以用来补偿同一次外部变化；或者更一般地说，在补偿外部变化时，其中一个序列可以由另一个序列替代。'
      },
      {
        id: 'sh-ch05-p67',
        type: 'paragraph',
        num: '§ 67',
        fr: 'Parmi ces séries, nous avons distingué celles qui peuvent à elles seules compenser un changement externe et que nous avons appelées « déplacements ». Comme nous ne pouvons discerner deux déplacements qui sont trop voisins, l’ensemble de ces déplacements présente les caractères d’un continu physique ; l’expérience nous enseigne que ce sont ceux d’un continu physique à six dimensions ; mais nous ne savons pas encore combien l’espace lui-même a de dimensions, il nous faut résoudre une autre question.',
        zh: '在这些序列当中，我们划分出了能够单凭自身补偿一次外部变化的那一部分，称之为「位移」。由于我们无法分辨两个过于邻近的位移，全部位移的集合便呈现出物理连续统的特征；经验教导我们，它们具备的是**六维**物理连续统的特征；但到这一步，我们仍不知道空间本身究竟有几个维度，我们还必须解决另一个问题。'
      },
      {
        id: 'sh-ch05-p68',
        type: 'paragraph',
        num: '§ 68',
        fr: 'Qu’est-ce qu’un point de l’espace ? Tout le monde croit le savoir, mais c’est une illusion. Ce que nous voyons, quand nous cherchons à nous représenter un point de l’espace, c’est une tache noire sur du papier blanc, une tache de craie sur un tableau noir, c’est toujours un objet. La question doit donc être entendue comme il suit :',
        zh: '什么是空间中的一个点？人人都自以为知道，但那只是一种幻觉。当我们试图在心中表象空间中的一个点时，我们所看到的只是白纸上的一粒黑点、黑板上的一粒粉笔印，看到的始终是一个物体。因此，这个问题应当按如下方式来理解：'
      },
      {
        id: 'sh-ch05-p69',
        type: 'paragraph',
        num: '§ 69',
        fr: 'Que veux-je dire quand je dis que l’objet B est au même point qu’occupait tout à l’heure l’objet A ? Ou encore quel critère me permettra de le reconnaître ?',
        zh: '当我说物体 B 位于刚才物体 A 所占据的同一点时，我究竟是什么意思？或者说，凭什么判据能让我认出这一点？'
      },
      {
        id: 'sh-ch05-p70',
        type: 'paragraph',
        num: '§ 70',
        fr: 'Je veux dire que, bien que je n’aie pas bougé (ce que m’enseigne mon sens musculaire), mon premier doigt, qui tout à l’heure touchait l’objet A, touche maintenant l’objet B. J’aurais pu me servir d’autres critères, par exemple d’un autre doigt ou du sens de la vue. Mais le premier critère est suffisant ; je sais que s’il répond oui, tous les autres critères donneront la même réponse. Je le sais par expérience, je ne puis le savoir à priori. C’est aussi pour cela que je dis que le toucher ne peut s’exercer à distance, c’est une autre manière d’énoncer le même fait expérimental. Et, si je dis au contraire que la vue s’exerce à distance, cela veut dire que le critère fourni par la vue peut répondre oui, tandis que les autres répondent non.',
        zh: '我的意思是：尽管我没有动弹（这一点由我的肌肉感告知我），刚才触碰着物体 A 的我的食指，现在正触碰着物体 B。我原本也可以采用别的判据，譬如另一根手指或者视觉。但第一个判据便已足够；我知道只要它回答「是」，所有其他判据都会给出同样的回答。我是通过经验知道这一点的，绝不可能先天地知道它。也正因如此，我们才说触觉不能超距作用——这不过是陈述同一项实验事实的另一种方式。反之，如果我们说视觉可以超距作用，意思就是视觉提供的判据可能回答「是」，而其他判据却回答「否」。'
      },
      {
        id: 'sh-ch05-p71',
        type: 'paragraph',
        num: '§ 71',
        fr: 'Et en effet l’objet, bien que s’étant éloigné, peut former son image au même point de la rétine. La vue répond oui, l’objet est resté au même point, et le toucher répond non, car mon doigt qui tout à l’heure touchait l’objet, ne le touche plus maintenant. Si l’expérience nous avait montré qu’un doigt peut répondre non quand l’autre dit oui, nous dirions de même que le toucher s’exerce à distance.',
        zh: '事实上，物体尽管已经远去，却依然可以在视网膜的同一点上成像。此时视觉回答「是」，说物体仍留在同一点上；触觉却回答「否」，因为刚才还触碰着物体的手指，现在已不再触碰它了。假使经验曾向我们表明，当一根手指说「是」时另一根手指却可能回答「否」，我们也会同样说触觉是可以超距作用的。'
      },
      {
        id: 'sh-ch05-p72',
        type: 'paragraph',
        num: '§ 72',
        fr: 'En résumé, pour chaque attitude de mon corps, mon premier doigt détermine un point et c’est cela, et cela seulement qui définit un point de l’espace.',
        zh: '简言之，对于我身体的每一种姿态，我的食指都确定了一个点；正是这一点、而且唯独这一点，定义了空间中的一个点。'
      },
      {
        id: 'sh-ch05-p73',
        type: 'paragraph',
        num: '§ 73',
        fr: 'À chaque attitude correspond de la sorte un point ; mais il arrive souvent que le même point correspond à plusieurs attitudes différentes (c’est dans ce cas que nous disons que notre doigt n’a pas bougé, mais que le reste du corps a bougé). Nous distinguons donc parmi les changements d’attitude ceux où le doigt ne bouge pas. Comment y sommes-nous conduits ? C’est parce que souvent nous remarquons que dans ces changements l’objet qui est au contact du doigt ne quitte pas ce contact.',
        zh: '如此一来，每一种姿态都对应着一个点；但常常会出现同一个点对应于好几种不同姿态的情形（在这种情况下，我们便说手指没有动，而身体其余部分动了）。于是，我们在姿态的变化当中划分出手指不发生移动的那些变化。我们是如何被引导到这一步的呢？那是因为我们常常注意到，在这类变化中，与手指接触的物体始终不曾脱离接触。'
      },
      {
        id: 'sh-ch05-p74',
        type: 'paragraph',
        num: '§ 74',
        fr: 'Rangeons donc dans une même classe toutes les attitudes qui se déduisent les unes des autres par un des changements que nous avons ainsi distingués. À toutes les attitudes d’une même classe correspondra le même point de l’espace. Donc à chaque classe correspondra un point et à chaque point une classe. Mais on peut dire que, ce que l’expérience atteint, ce n’est pas le point, c’est cette classe de changements, ou mieux la classe de sensations musculaires correspondante.',
        zh: '那么，就让我们把凡能通过我们所划分出来的这类变化彼此推导出来的所有姿态，统统归入同一个类。属于同一类的所有姿态，将对应于空间中的同一个点。因此，每一个类对应一个点，每一个点也对应一个类。但可以说，经验所触及的并不是点，而是这一类变化，或者更确切地说，是与之对应的那一类肌肉感觉。'
      },
      {
        id: 'sh-ch05-p75',
        type: 'paragraph',
        num: '§ 75',
        fr: 'Et alors quand nous disons que l’espace a trois dimensions, nous voulons dire simplement que l’ensemble de ces classes nous apparaît avec les caractères d’un continu physique à trois dimensions.',
        zh: '于是，当我们说空间有三个维度时，我们的意思仅仅是：这些类的集合在我们看来呈现出三维物理连续统的特征。'
      },
      {
        id: 'sh-ch05-p76',
        type: 'paragraph',
        num: '§ 76',
        fr: 'On pourrait être tenté de conclure que c’est l’expérience qui nous a appris combien l’espace a de dimensions. Mais en réalité ici encore nos expériences ont porté, non sur l’espace, mais sur notre corps et ses rapports avec les objets voisins. De plus elles sont excessivement grossières.',
        zh: '人们或许会忍不住得出结论说，正是经验教会了我们空间有几个维度。但实际上，在这里我们的经验所针对的依然不是空间，而是我们的身体及其与邻近物体的关系。况且，这些经验还极其粗略。'
      },
      {
        id: 'sh-ch05-p77',
        type: 'paragraph',
        num: '§ 77',
        fr: 'Dans notre esprit préexistait l’idée latente d’un certain nombre de groupes ; ce sont ceux dont Lie a fait la théorie. Lequel choisirons-nous pour en faire une sorte d’étalon auquel nous comparerons les phénomènes naturels ? Et, ce groupe choisi, quel est celui de ses sous-groupes que nous prendrons pour caractériser un point de l’espace ? L’expérience nous a guidés en nous montrant quel choix s’adapte le mieux aux propriétés de notre corps. Mais son rôle s’est borné là.',
        zh: '在我们的心智中，早已潜藏着若干群的观念——那便是李曾为其建立理论的那些群。我们将挑选哪一个群，让它充当借以比照自然现象的某种标准尺呢？而在选定这个群之后，我们又将选取它的哪一个子群来表征空间中的一个点呢？经验引导了我们，向我们指明了哪一种选择最契合我们身体的性质。但经验的作用也就到此为止了。'
      },
      {
        id: 'sh-ch05-p78',
        type: 'paragraph',
        num: '§ 78',
        fr: 'L’expérience ancestrale',
        zh: '**先祖经验**'
      },
      {
        id: 'sh-ch05-p79',
        type: 'paragraph',
        num: '§ 79',
        fr: 'On a dit souvent que si l’expérience individuelle n’a pu créer la géométrie, il n’en est pas de même de l’expérience ancestrale. Mais qu’entend-on par là ? Veut-on dire que nous ne pouvons démontrer expérimentalement le postulatum d’Euclide, mais que nos ancêtres ont pu le faire ? Pas le moins du monde. On veut dire que par sélection naturelle notre esprit s’est adapté aux conditions du monde extérieur, qu’il a adopté la géométrie la plus avantageuse à l’espèce ; ou en d’autres termes la plus commode. Cela est tout à fait conforme à nos conclusions, la géométrie n’est pas vraie, elle est avantageuse.',
        zh: '人们常说，即便个体经验不足以创造几何学，[先祖经验]{#g-sh-c5-07}却并非如此。但这话究竟是什么意思呢？难道是说我们无法用实验证明欧几里得公设，而我们的祖先却曾经做到过吗？绝非如此。人们的意思是说，通过自然选择，我们的心智适应了外部世界的条件，采纳了对物种最为有利——换言之，最为便利——的几何学。这与我们的结论完全吻合：[几何学并非真的，而是有利的]{#g-sh-c5-08}。',
        glosses: [
          {
            id: 'g-sh-c5-07',
            anchor: '先祖经验',
            content: '英国哲学家赫伯特·斯宾塞（Herbert Spencer，1820—1903）在《心理学原理》（The Principles of Psychology，1855）中提出进化经验论，试图调和洛克经验论与康德先验论：他主张空间观念对现代个体而言看似先天自明，实则是远古祖先在漫长世代中反复积累外部经验、并通过神经结构遗传固定下来的后天习惯。乔治·勒沙拉（著有《空间与时间研究》，1896）等人亦在十九世纪末《形而上学与道德评论》关于几何学基础的讨论中涉及此说；庞加莱遂在 1899 年 5 月发表于该刊的论文《论几何学的基础：评罗素先生的一部著作》第八节（原节题为《先祖几何学》，« La géométrie ancestrale »）及本书补篇末段予以回应。'
          },
          {
            id: 'g-sh-c5-08',
            anchor: '几何学并非真的，而是有利的',
            content: '1915 年 11 月，阿尔伯特·爱因斯坦（Albert Einstein，1879—1955）建立广义相对论，将引力归结为由物质与能量分布决定的四维黎曼时空曲率，并于 1919 年 5 月经亚瑟·爱丁顿（Arthur Eddington）日全食观测证实星光掠过太阳引力场时的偏折。1921 年 1 月 27 日，爱因斯坦在普鲁士科学院发表讲演《几何学与经验》（« Geometrie und Erfahrung »），专门回应庞加莱本章的论证：爱因斯坦承认，从原则观点（sub specie aeterni）来看，孤立的几何学 G 无法单独接受实验判决，经验检验的始终是几何学 G 与光学、力学等物理定律 P 的总和 G + P；但他同时指出，在强引力场与宇宙学尺度上若坚持保留欧几里得几何 G₀，物理部分 P 就不得不引入作用于一切不同材质刚体与光线、却无法消除的复杂普遍形变力，反之采用动态黎曼几何 G 则能使理论整体 G + P 更为简洁统一。与此同时，逻辑经验主义者莫里茨·石里克（Moritz Schlick，《普通认识论》，1918）与汉斯·赖欣巴哈（Hans Reichenbach，《相对论与先验认识》，1920；《时空哲学》，1928）改造庞加莱的约定论而提出「协调定义」（Zuordnungsdefinitionen）学说：规定何种物理过程充当刚性全等标准与测地线（如扣除热膨胀等「微分力」后的量杆与真空光线）属于先行约定，一旦协调定义确立，真实时空的度规结构究竟是欧几里得式还是非欧式，便成为可由经验裁决的物理事实。'
          }
        ]
      }
    ]
  }
];
