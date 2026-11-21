import type { BookSection } from '../../../types/book';

export const poincareCh2Sections: BookSection[] = [
  {
    id: 'ch02-grandeur-et-experience',
    roman: 'II',
    titleOriginal: 'Chapitre II. La grandeur mathématique et l’expérience',
    titleZh: '第二章 数学的量与经验',
    aiModel: 'Gemini-4-Carbon',
    blocks: [
      {
        id: 'sh-ch02-p01',
        type: 'paragraph',
        num: '§ 01',
        fr: 'Si l’on veut savoir ce que les mathématiciens entendent par un continu, ce n’est pas à la géométrie qu’il faut le demander. Le géomètre cherche toujours plus ou moins à se représenter les figures qu’il étudie, mais ses représentations ne sont pour lui que des instruments ; il fait de la géométrie avec de l’étendue comme il en fait avec de la craie ; aussi doit-on prendre garde d’attacher trop d’importance à des accidents qui n’en ont souvent pas plus que la blancheur de la craie.',
        zh: '倘若想知道[数学家所说的连续统]{#g-sh-c2-01}究竟是什么意思，那是不该向几何学去请教的。几何学家总是或多或少地设法在心中表象出他所研究的图形，但这些表象对他而言不过是工具；他借助广延来做几何，正如他借助粉笔来做几何一样；因此我们必须当心，切莫对那些偶然附带的属性赋予过高的重要性，它们往往并不比粉笔的白色更重要。',
        glosses: [
          {
            id: 'g-sh-c2-01',
            anchor: '数学家所说的连续统',
            content:
              '本章主体改写自庞加莱发表于《形而上学与道德评论》创刊号（1893 年 1 月，第 1 卷第 1 期，第 26—34 页）的论文《数学连续统》（« Le continu mathématique »）；1902 年编入本书时，庞加莱在文末增补了「多维物理连续统」与「多维数学连续统」两节。法语 continu 源自拉丁语 continuum（动词 continere，意为「连结一体、绵延不断」）。'
          }
        ]
      },
      {
        id: 'sh-ch02-p02',
        type: 'paragraph',
        num: '§ 02',
        fr: 'L’analyste pur n’a pas à craindre cet écueil. Il a dégagé la science mathématique de tous les éléments étrangers, et il peut répondre à notre question : Qu’est-ce au juste que ce continu sur lequel les mathématiciens raisonnent ? Beaucoup d’entre eux, qui savent réfléchir sur leur art, l’ont fait déjà ; M. Tannery, par exemple, dans son Introduction à la théorie des Fonctions d’une variable.',
        zh: '纯粹的分析学家则不必担心这一暗礁。他已经把数学科学从一切外来成分中剥离出来，因而能够回答我们的问题：数学家据以推理的这个连续统，严格说来究竟是什么？他们当中许多善于反思自身技艺的人早已作出了回答；例如[坦纳里先生]{#g-sh-c2-02}在其《单变量函数论导引》中所做的那样。',
        glosses: [
          {
            id: 'g-sh-c2-02',
            anchor: '坦纳里先生',
            content:
              '朱尔·坦纳里（Jules Tannery，1848—1910），法国数学家，科学史家保罗·坦纳里（Paul Tannery）之弟，长期主持巴黎高等师范学院理科教学。其代表作《单变量函数论导引》（Introduction à la théorie des fonctions d’une variable，巴黎埃尔曼出版社 1886 年初版）系统将德国学界的实数算术化理论引入法国高等数学教育，并在序言中明确提出：数学分析应当完全建立在整数概念之上，无需向几何直观借用任何前提。'
          }
        ]
      },
      {
        id: 'sh-ch02-p03',
        type: 'paragraph',
        num: '§ 03',
        fr: 'Partons de l’échelle des nombres entiers ; entre deux échelons consécutifs, intercalons un ou plusieurs échelons intermédiaires, puis entre ces échelons nouveaux d’autres encore, et ainsi de suite indéfiniment. Nous aurons ainsi un nombre illimité de termes, ce seront les nombres que l’on appelle fractionnaires, rationnels ou commensurables. Mais ce n’est pas assez encore ; entre ces termes qui sont pourtant déjà en nombre infini, il faut encore en intercaler d’autres, que l’on appelle irrationnels ou incommensurables.',
        zh: '让我们从整数的阶梯出发；在相邻两级之间，插入一级或多级中间阶梯，随后在这些新阶梯之间再插入另一些阶梯，如此无止境地继续下去。这样我们便会得到无穷多项，它们就是人们所说的分数、有理数或可公度的数。但这还不够；在这些数目固然已经无穷的项之间，还必须再插入另一些项，即人们所说的[无理数或不可公度的数]{#g-sh-c2-03}。',
        glosses: [
          {
            id: 'g-sh-c2-03',
            anchor: '无理数或不可公度的数',
            content:
              '法语 commensurable（可公度的）与 incommensurable（不可公度的）源自晚期拉丁语 commensurabilis，对应古希腊数学术语 σύμμετρος（有共同尺度的）与 ἀσύμμετρος（无共同尺度的）：若两个几何量皆为同一单位量的整数倍，则二者之比可表为整数之比 a/b，称为可公度；反之称为不可公度。公元前五世纪，古希腊毕达哥拉斯学派（古典传统归于梅塔庞图姆的希帕索斯，亚里士多德《前分析篇》卷一第 23 章 41a26—27 载有基于奇偶性的反证法，欧几里得《几何原本》第十卷则作了系统分类）发现正方形的对角线 d 与边长 s 不存在共同度量单位（d² = 2s²，即 √2 无法表为整数之比 a/b），打破了早期毕达哥拉斯学派「万物皆整数及其比」的信条。直至二十世纪初，法语数学文献仍普遍以「可公度的数」「不可公度的数」作为有理数与无理数的同义术语。'
          }
        ]
      },
      {
        id: 'sh-ch02-p04',
        type: 'paragraph',
        num: '§ 04',
        fr: 'Avant d’aller plus loin, faisons une première remarque. Le continu ainsi conçu n’est plus qu’une collection d’individus rangés dans un certain ordre, en nombre infini, il est vrai, mais extérieurs les uns aux autres. Ce n’est pas là la conception ordinaire, où l’on suppose entre les éléments du continu une sorte de lien intime qui en fait un tout, où le point ne préexiste pas à la ligne, mais la ligne au point. De la célèbre formule, le continu est l’unité dans la multiplicité, la multiplicité seule subsiste, l’unité a disparu. Les analystes n’en ont pas moins raison de définir leur continu comme ils le font, puisque c’est toujours sur celui-là qu’ils raisonnent depuis qu’ils se piquent de rigueur. Mais c’est assez pour nous avertir que le véritable continu mathématique est tout autre chose que celui des physiciens et celui des métaphysiciens.',
        zh: '在往下推进之前，我们先作第一点说明。如此设想出来的连续统，不过是一群按某种次序排列起来的个体之集合——诚然数目无穷，彼此却相互外在。这并非通常的观念：通常人们假定在连续统的各个元素之间存在着某种内在纽带，使之结合为一个整体；在那里，[点并不先于线存在，而是线先于点存在]{#g-sh-c2-04}。在「连续统是多中之整一」那句著名的公式里，唯有多样性留存下来，整一性却消失了。尽管如此，分析学家像他们那样定义自己的连续统依然是有道理的，因为自从他们讲求严密性以来，他们据以推理的就始终是这样一个连续统。但这已足以提醒我们：真正的数学连续统，与物理学家的连续统及形而上学家的连续统截然不同。',
        glosses: [
          {
            id: 'g-sh-c2-04',
            anchor: '点并不先于线存在，而是线先于点存在',
            content:
              '语出亚里士多德《物理学》第五卷第 3 章与第六卷第 1 章（231a21—231b18）奠定的古典连续统学说：亚里士多德论证，任何连续之物（συνεχές）都不可能由点这类不可分者（ἀδιαίρετα）拼合而成，因为点没有部分，其界限无法彼此合一；相反，连续的线、面与时间作为可不断分割为更小连续部分的整体在存在论上居先，而点只是在线上作潜在切分或标示端点时才派生的界限。'
          }
        ]
      },
      {
        id: 'sh-ch02-p05',
        type: 'paragraph',
        num: '§ 05',
        fr: 'On dira peut-être aussi que les mathématiciens qui se contentent de cette définition sont dupes de mots, qu’il faudrait dire d’une façon précise ce que sont chacun de ces échelons intermédiaires, expliquer comment il faut les intercaler et démontrer qu’il est possible de le faire. Mais ce serait à tort ; la seule propriété de ces échelons qui intervienne dans leurs raisonnements [1], c’est celle de se trouver avant ou après tels autres échelons ; elle doit donc seule aussi intervenir dans la définition.',
        zh: '或许还会有人说，满足于这一定义的数学家是被语词蒙蔽了，理应精确指明这每一级中间阶梯各自是什么，解释应当如何将它们插入，并证明这样做是可能的。但这种指责并不成立；这些阶梯在他们的推理[^sh-fn-c2-1]中所起作用的唯一性质，便是位于其他某某阶梯之前或之后；因此，也唯有这一性质才应当进入定义之中。',
        authorNotes: [
          {
            id: 'sh-fn-c2-1',
            fr: 'Avec celles qui sont contenues dans les conventions spéciales qui servent à définir l’addition et dont nous parlerons plus loin.',
            zh: '连同包含在那些用以定义加法的专门约定之中的性质，我们将在下文谈到这些约定。'
          }
        ]
      },
      {
        id: 'sh-ch02-p06',
        type: 'paragraph',
        num: '§ 06',
        fr: 'Ainsi, il n’y a pas à s’inquiéter de la manière dont on doit intercaler les termes intermédiaires ; d’autre part, personne ne doutera que cette opération ne soit possible, à moins d’oublier que ce dernier mot, dans le langage des géomètres, signifie simplement exempt de contradiction.',
        zh: '由此可见，大可不必为我们应当以何种方式插入中间项而操心；另一方面，也不会有人怀疑这一操作是可能的——除非他忘记了，「可能」一词在几何学家的语言里，仅仅意味着**免于矛盾**。'
      },
      {
        id: 'sh-ch02-p07',
        type: 'paragraph',
        num: '§ 07',
        fr: 'Notre définition, toutefois, n’est pas complète encore, et j’y reviens après cette trop longue digression.',
        zh: '不过，我们的定义尚未完备；在扯了这么长一段题外话之后，我现在回到正题上来。'
      },
      {
        id: 'sh-ch02-p08',
        type: 'paragraph',
        num: '§ 08',
        fr: 'Définition des incommensurables. — Les mathématiciens de l’École de Berlin, M. Kronecker en particulier, se sont préoccupés de construire cette échelle continue des nombres fractionnaires et irrationnels sans se servir d’autres matériaux que du nombre entier. Le continu mathématique serait, dans cette manière de voir, une pure création de l’esprit, où l’expérience n’aurait aucune part.',
        zh: '**不可公度的数之定义**——[柏林学派的数学家，尤其是克罗内克先生]{#g-sh-c2-05}，致力于除整数之外不借用任何其他材料，来构筑这条由分数与无理数构成的连续阶梯。按照这种看法，数学连续统纯粹是心智的创造，经验在其中不占任何份量。',
        glosses: [
          {
            id: 'g-sh-c2-05',
            anchor: '柏林学派的数学家，尤其是克罗内克先生',
            content:
              '十九世纪下半叶，柏林大学在卡尔·魏尔斯特拉斯（Karl Weierstrass，1815—1897）、恩斯特·库默尔（Ernst Eduard Kummer，1810—1893）与利奥波德·克罗内克（Leopold Kronecker，1823—1891）主持下成为「分析算术化」（Arithmetisierung der Analysis）运动的中心，主张剥离微积分对几何直观的依赖，仅从正整数出发构造有理数与实数体系。克罗内克进一步将这一纲领推向严格有穷主义：他在 1886 年柏林德国自然科学家与医师大会演讲中提出「上帝创造了整数，其余一切皆是人的工作」（德语 Die ganzen Zahlen hat der liebe Gott gemacht, alles andere ist Menschenwerk），并在 1887 年论文《论数概念》（Über den Zahlbegriff）中尝试将分数与代数数完全归约为整系数多项式的算术同余关系。'
          }
        ]
      },
      {
        id: 'sh-ch02-p09',
        type: 'paragraph',
        num: '§ 09',
        fr: 'La notion du nombre rationnel ne leur semblant pas présenter de difficulté, ils se sont surtout efforcés de définir le nombre incommensurable. Mais avant de reproduire ici leur définition, je dois faire une observation, afin de prévenir l’étonnement qu’elle ne manquerait pas de provoquer chez les lecteurs peu familiers avec les habitudes des géomètres.',
        zh: '由于有理数的概念在他们看来并不存在什么困难，他们便主要致力于定义不可公度的数。但在把他们的定义转录于此之前，我必须先作一点说明，以免不太熟悉几何学家思维习惯的读者读后大感诧异。'
      },
      {
        id: 'sh-ch02-p10',
        type: 'paragraph',
        num: '§ 10',
        fr: 'Les mathématiciens n’étudient pas des objets, mais des relations entre les objets ; il leur est donc indifférent de remplacer ces objets par d’autres, pourvu que les relations ne changent pas. La matière ne leur importe pas, la forme seule les intéresse.',
        zh: '**数学家研究的不是对象，而是对象之间的关系**；因此，只要关系保持不变，用另一些对象去替换这些对象对他们而言是无所谓的。质料并不重要，唯有形式才令他们感兴趣。'
      },
      {
        id: 'sh-ch02-p11',
        type: 'paragraph',
        num: '§ 11',
        fr: 'Si l’on ne s’en souvenait, on ne comprendrait pas que M. Dedekind désigne par le nom de nombre incommensurable un simple symbole, c’est-à-dire quelque chose de très différent de l’idée que l’on croit se faire d’une quantité, qui doit être mesurable et presque tangible.',
        zh: '倘若不牢记这一点，人们便无法理解，何以[戴德金先生]{#g-sh-c2-06}会用「不可公度的数」这一名称去指称一个单纯的符号——也就是说，指称某种与人们自以为对「量」所怀有的观念——即认为量应当是可测量的、几乎触手可及的——大相径庭的东西。',
        glosses: [
          {
            id: 'g-sh-c2-06',
            anchor: '戴德金先生',
            content:
              '尤利乌斯·威廉·理查德·戴德金（Julius Wilhelm Richard Dedekind，1831—1916），德国数学家，早年在哥廷根大学受教于高斯与狄利克雷，后长期执教于不伦瑞克工业大学。1858 年秋他在苏黎世联邦理工学院讲授微积分时，发觉「单调有界量必有极限」缺乏不依赖几何量直观的严格算术证明，遂构想出以有理数集的划分来定义实数的方法，并于 1872 年发表专论《连续性与无理数》（Stetigkeit und irrationale Zahlen），提出「戴德金分割」（德语 Schnitt，法语译作 coupure，即「分割」），将实数连续统的完备性建立在有理数域的序关系之上。'
          }
        ]
      },
      {
        id: 'sh-ch02-p12',
        type: 'paragraph',
        num: '§ 12',
        fr: 'Voici maintenant quelle est la définition de M. Dedekind :',
        zh: '下面便是戴德金先生的定义：'
      },
      {
        id: 'sh-ch02-p13',
        type: 'paragraph',
        num: '§ 13',
        fr: 'On peut répartir d’une infinité de manières les nombres commensurables en deux classes, en s’assujettissant à cette condition qu’un nombre quelconque de la première classe soit plus grand qu’un nombre quelconque de la seconde classe.',
        zh: '我们可以用无穷多种方式把可公度的数划分为两类，只要遵循如下条件：第一类中的任意一个数，都大于第二类中的任意一个数。'
      },
      {
        id: 'sh-ch02-p14',
        type: 'paragraph',
        num: '§ 14',
        fr: 'Il peut arriver que parmi les nombres de la première classe, il y en ait un qui soit plus petit que tous les autres ; si, par exemple, on range dans la première classe tous les nombres plus grands que 2 et 2 lui-même, et dans la seconde classe tous les nombres plus petits que 2, il est clair que 2 sera le plus petit de tous les nombres de la première classe. Le nombre 2 pourra être choisi comme symbole de cette répartition.',
        zh: '可能会出现这样的情形：在第一类的所有数当中，有一个数比其余一切数都小；例如，倘若把一切大于 2 的数以及 2 本身归入第一类，而把一切小于 2 的数归入第二类，那么显而易见，2 将是第一类所有数中最小的一个。数 2 便可以被选作这一划分的符号。'
      },
      {
        id: 'sh-ch02-p15',
        type: 'paragraph',
        num: '§ 15',
        fr: 'Il peut se faire, au contraire, que parmi les nombres de la seconde classe, il y en ait un qui soit plus grand que tous les autres ; c’est ce qui a lieu, par exemple, si la première classe comprend tous les nombres plus grands que 2, et la seconde tous les nombres plus petits que 2 et 2 lui-même. Ici encore, le nombre 2 pourra être choisi comme symbole de cette répartition.',
        zh: '相反，也可能会出现这样的情形：在第二类的所有数当中，有一个数比其余一切数都大；例如，倘若第一类包含一切大于 2 的数，而第二类包含一切小于 2 的数以及 2 本身，情形便是如此。在这里，数 2 同样可以被选作这一划分的符号。'
      },
      {
        id: 'sh-ch02-p16',
        type: 'paragraph',
        num: '§ 16',
        fr: 'Mais il peut arriver également que l’on ne puisse trouver ni dans la première classe un nombre plus petit que tous les autres, ni dans la seconde un nombre plus grand que tous les autres. Supposons, par exemple, que l’on mette dans la première classe tous les nombres commensurables dont le carré est plus grand que 2 et dans la seconde tous ceux dont le carré est plus petit que 2. On sait qu’il n’y en a aucun dont le carré soit précisément égal à 2. Il n’y aura évidemment pas dans la première classe de nombre plus petit que tous les autres, car quelque voisin que le carré d’un nombre soit de 2, on pourra toujours trouver un nombre commensurable dont le carré soit encore plus rapproché que 2.',
        zh: '但同样可能出现这样的情形：我们既无法在第一类中找到一个比其余一切数都小的数，也无法在第二类中找到一个比其余一切数都大的数。举例来说，假定我们把平方大于 2 的一切可公度的数放入第一类，把平方小于 2 的一切可公度的数放入第二类。众所周知，没有任何一个可公度的数的平方恰好等于 2。在第一类中显然不会存在一个比其余一切数都小的数，因为无论某个数的平方多么接近 2，我们总能找到另一个可公度的数，使它的平方更加接近 2。'
      },
      {
        id: 'sh-ch02-p17',
        type: 'paragraph',
        num: '§ 17',
        fr: 'Dans la manière de voir de M. Dedekind, le nombre incommensurable √2, n’est autre chose que le symbole de ce mode particulier de répartition des nombres commensurables ; et à chaque mode de répartition correspond ainsi un nombre commensurable ou non, qui lui sert de symbole.',
        zh: '按照戴德金先生的看法，不可公度的数 √2 不过是可公度的数这一特定划分方式的符号；如此一来，每一种划分方式都对应着一个或可公度、或不可公度的数，充当它的符号。'
      },
      {
        id: 'sh-ch02-p18',
        type: 'paragraph',
        num: '§ 18',
        fr: 'Mais se contenter de cela, ce serait trop oublier l’origine de ces symboles ; il reste à expliquer comment on a été conduit à leur attribuer une sorte d’existence concrète, et, d’autre part, la difficulté ne commence-t-elle pas pour les nombres fractionnaires eux-mêmes ? Aurions-nous la notion de ces nombres, si nous ne connaissions d’avance une matière que nous concevons comme divisible à l’infini, c’est-à-dire comme un continu ?',
        zh: '然而，倘若仅仅满足于此，那就未免过于遗忘这些符号的起源了；我们仍有待解释，人们究竟是如何被引导着去赋予它们某种具体存在的；况且另一方面，困难难道不是从分数本身就已经开始了吗？假使我们事先并不认识某种被我们设想为可无限分割的质料——换言之，认识某种连续统——我们还会拥有这些数的概念吗？'
      },
      {
        id: 'sh-ch02-p19',
        type: 'paragraph',
        num: '§ 19',
        fr: 'Le continu physique. — On en vient alors à se demander si la notion du continu mathématique n’est pas tout simplement tirée de l’expérience. Si cela était, les données brutes de l’expérience, qui sont nos sensations, seraient susceptibles de mesure. On pourrait être tenté de croire qu’il en est bien ainsi, puisque l’on s’est, dans ces derniers temps, efforcé de les mesurer et que l’on a même formulé une loi, connue sous le nom de loi de Fechner, et d’après laquelle la sensation serait proportionnelle au logarithme de l’excitation.',
        zh: '**物理连续统**——人们随之便会追问，数学连续统的概念是否干脆就是从经验中汲取出来的。果真如此的话，经验的原始材料——亦即我们的感觉——便应当是可以测量的。人们或许很容易相信事实确乎如此，因为近来人们正竭力测量感觉，甚至还制定了一条以[费希纳定律]{#g-sh-c2-07}著称的法则，依据这条定律，感觉与刺激的对数成正比。',
        glosses: [
          {
            id: 'g-sh-c2-07',
            anchor: '费希纳定律',
            content:
              '古斯塔夫·特奥多尔·费希纳（Gustav Theodor Fechner，1801—1887），德国物理学家、哲学家与实验心理物理学奠基人，长期任教于莱比锡大学。生理学家恩斯特·海因里希·韦伯（Ernst Heinrich Weber，1795—1878）于 1834 年通过举重与触觉辨别实验发现「差别阈限」（亦称最小可觉差，德语 ebenmerklicher Unterschied）规律，即受试者恰好能觉察出差异所需的刺激增量 ΔR 与原刺激量 R 之比为常数（ΔR/R = k）。费希纳在其两卷本《心理物理学纲要》（Elemente der Psychophysik，1860）中假定一切最小可觉差对应的主观感觉增量 ΔS 彼此相等，遂将上述关系积分化为对数公式 S = c log R，后世通称「韦伯—费希纳定律」。'
          }
        ]
      },
      {
        id: 'sh-ch02-p20',
        type: 'paragraph',
        num: '§ 20',
        fr: 'Mais si l’on examine de près les expériences par lesquelles on a cherché à établir cette loi, on sera conduit à une conclusion toute contraire. On a observé, par exemple, qu’un poids A de 10 grammes et un poids B de 11 grammes produisaient des sensations identiques, que le poids B ne pouvait non plus être discerné d’un poids C de 12 grammes, mais que l’on distinguait facilement le poids A du poids C. Les résultats bruts de l’expérience peuvent donc s’exprimer par les relations suivantes :',
        zh: '但倘若仔细审视人们用以确立这条定律的那些实验，我们便会得出一个截然相反的结论。举例来说，人们观察到：重 10 克的砝码 A 与重 11 克的砝码 B 产生完全相同的感觉，砝码 B 同样无法与重 12 克的砝码 C 区分开来，但人们却能轻易区分砝码 A 与砝码 C。因此，经验的原始结果可以用下列关系式来表示：'
      },
      {
        id: 'sh-ch02-p21',
        type: 'verse',
        num: '§ 21',
        fr: 'A = B, B = C, A < C,',
        zh: 'A = B, B = C, A < C'
      },
      {
        id: 'sh-ch02-p22',
        type: 'paragraph',
        num: '§ 22',
        fr: 'qui peuvent être regardées comme la formule du continu physique.',
        zh: '这组关系式可以被看作**物理连续统**的公式。'
      },
      {
        id: 'sh-ch02-p23',
        type: 'paragraph',
        num: '§ 23',
        fr: 'Il y a là, avec le principe de contradiction, un désaccord intolérable, et c’est la nécessité de le faire cesser qui nous a contraints à inventer le continu mathématique.',
        zh: '这里存在着一种与矛盾律水火不容的冲突，正是消除这一冲突的必要性，迫使我们发明了数学连续统。'
      },
      {
        id: 'sh-ch02-p24',
        type: 'paragraph',
        num: '§ 24',
        fr: 'On est donc forcé de conclure que cette notion a été créée de toutes pièces par l’esprit, mais que c’est l’expérience qui lui en a fourni l’occasion.',
        zh: '因此我们不得不作出结论：这一概念完全是由心智一手创造出来的，但正是经验为心智提供了创造它的契机。'
      },
      {
        id: 'sh-ch02-p25',
        type: 'paragraph',
        num: '§ 25',
        fr: 'Nous ne pouvons croire que deux quantités égales à une même troisième ne soient pas égales entre elles, et c’est ainsi que nous sommes amenés à supposer que A est différent de B et B de C, mais que l’imperfection de nos sens ne nous avait pas permis de les discerner.',
        zh: '我们无法相信分别等于同一个第三量的两个量彼此之间竟不相等，于是我们便被引向这样的假定：A 不同于 B，B 也不同于 C，只不过我们感官的不完善使我们未能将它们区分开来。'
      },
      {
        id: 'sh-ch02-p26',
        type: 'paragraph',
        num: '§ 26',
        fr: 'Création du continu mathématique. — Premier stade. — Jusqu’ici il pourrait nous suffire, pour rendre compte des faits, d’intercaler entre A et B un petit nombre de termes qui resteraient discrets. Qu’arrive-t-il maintenant si nous avons recours à quelque instrument pour suppléer à l’infirmité de nos sens, si par exemple nous faisons usage d’un microscope ? Des termes que nous ne pouvions discerner l’un de l’autre comme étaient tout à l’heure A et B, nous apparaissent maintenant comme distincts ; mais entre A et B devenus distincts s’intercalera un terme nouveau D, que nous ne pourrons distinguer ni de A ni de B. Malgré l’emploi des méthodes les plus perfectionnées, les résultats bruts de notre expérience présenteront toujours les caractères du continu physique avec la contradiction qui y est inhérente.',
        zh: '**数学连续统的创生：第一阶段**——到目前为止，为了解释上述事实，在 A 与 B 之间插入少数几个依然保持离散的项，或许就足够了。但倘若我们借助某种仪器来弥补感官的缺陷——比方说使用一台显微镜——现在会发生什么呢？像刚才的 A 与 B 那样原先无法彼此区分的项，如今在我们眼中显现为截然不同的项；然而在已经变得彼此分明的 A 与 B 之间，又会插入一个新项 D，使我们既无法将它与 A 区分开来，也无法将它与 B 区分开来。尽管采用了最精密完善的方法，我们经验的原始结果仍将始终呈现出物理连续统的特征，连同其固有的矛盾。'
      },
      {
        id: 'sh-ch02-p27',
        type: 'paragraph',
        num: '§ 27',
        fr: 'Nous n’y échapperons qu’en intercalant sans cesse des termes nouveaux entre les termes déjà discernés, et cette opération devra être poursuivie indéfiniment. Nous ne pourrions concevoir qu’on dût l’arrêter que si nous nous représentions quelque instrument assez puissant pour décomposer le continu physique en éléments discrets, comme le télescope résout la voie lactée en étoiles. Mais nous ne pouvons nous imaginer cela ; en effet, c’est toujours avec nos sens que nous nous servons de nos instruments ; c’est avec l’œil que nous observons l’image agrandie par le microscope, et cette image doit, par conséquent, toujours conserver les caractères de la sensation visuelle et par conséquent ceux du continu physique.',
        zh: '唯有在已经区分开的各项之间不断插入新项，我们才能摆脱这一矛盾，而且这一操作必须无止境地继续下去。除非我们设想出某种足够强大的仪器，能够像望远镜把银河分解为一颗颗恒星那样把物理连续统分解为离散的元素，否则我们便无法设想这一操作应当停下来。但我们无从想象这样的事；事实上，我们始终是凭着自己的感官去使用仪器的；我们是用肉眼去观察经显微镜放大的图像，因而这幅图像必然始终保留视觉感觉的特征，从而也始终保留物理连续统的特征。'
      },
      {
        id: 'sh-ch02-p28',
        type: 'paragraph',
        num: '§ 28',
        fr: 'Rien ne distingue une longueur observée directement de la moitié de cette longueur doublée par le microscope. Le tout est homogène à la partie, c’est là une nouvelle contradiction, ou plutôt c’en serait une si le nombre des termes était supposé fini ; il est clair en effet que la partie contenant moins de termes que le tout ne saurait être semblable au tout.',
        zh: '直接观察到的一段长度，与这段长度的一半经显微镜放大为两倍后的结果，二者之间毫无区别。整体与部分同质，这又是一个新的矛盾——或者更确切地说，假使项数被假定为有限的，这就将是一个矛盾；因为显而易见，所含项数少于整体的部分，是不可能与整体相似的。'
      },
      {
        id: 'sh-ch02-p29',
        type: 'paragraph',
        num: '§ 29',
        fr: 'La contradiction cesse dès que le nombre des termes est regardé comme infini ; rien n’empêche, par exemple, de considérer l’ensemble des nombres entiers comme semblable à l’ensemble des nombres pairs qui n’en est pourtant qu’une partie ; et, en effet, à chaque nombre entier correspond un nombre pair qui en est le double.',
        zh: '一旦把项数看作无穷的，这一矛盾便随之消失；例如，没有什么妨碍我们把整数集合看作与[偶数集合相似]{#g-sh-c2-08}，尽管后者只是前者的一个部分；事实上，每一个整数都对应着一个作为其两倍的偶数。',
        glosses: [
          {
            id: 'g-sh-c2-08',
            anchor: '偶数集合相似',
            content:
              '无穷集合可与其真子集建立一一对应的现象，最早由伽利略·伽利莱在《关于两门新科学的对话》（1638 年，第一日，以正整数与其平方数一一配对）中作为无穷悖论提出；经伯纳德·波尔查诺《无穷悖论》（1851）与格奥尔格·康托尔（1878）推进后，戴德金在《数是什么且应当是什么？》（1888，第 64 节）中将这一性质确立为无穷系统的定义：一个系统是无穷的，当且仅当它与自身的一个真部分「相似」（德语 ähnlich，即存在一一映射；庞加莱原文 semblable 即对译该专门术语）。'
          }
        ]
      },
      {
        id: 'sh-ch02-p30',
        type: 'paragraph',
        num: '§ 30',
        fr: 'Mais ce n’est pas seulement pour échapper à cette contradiction contenue dans les données empiriques que l’esprit est amené à créer le concept d’un continu, formé d’un nombre indéfini de termes.',
        zh: '然而，心智之所以被引向创造一个由无穷多项构成的连续统概念，并不仅仅是为了摆脱经验材料中所包含的这一矛盾。'
      },
      {
        id: 'sh-ch02-p31',
        type: 'paragraph',
        num: '§ 31',
        fr: 'Tout se passe comme pour la suite des nombres entiers. Nous avons la faculté de concevoir qu’une unité peut être ajoutée à une collection d’unités ; c’est grâce à l’expérience que nous avons l’occasion d’exercer cette faculté et que nous en prenons conscience ; mais, dès ce moment, nous sentons que notre pouvoir n’a pas de limite et que nous pourrions compter indéfiniment, quoique nous n’ayons jamais eu à compter qu’un nombre fini d’objets.',
        zh: '这里发生的一切，与整数序列的情形如出一辙。我们拥有这样一种能力，能够设想在一个单位集合上再添上一个单位；正是借助经验，我们才获得了运用这一能力的契机并意识到它的存在；但从这一刻起，我们便感到自己的这项能力没有界限，尽管我们实际数过的对象数目向来是有限的，我们却能够无止境地数下去。'
      },
      {
        id: 'sh-ch02-p32',
        type: 'paragraph',
        num: '§ 32',
        fr: 'De même, dès que nous avons été amenés à intercaler des moyens entre deux termes consécutifs d’une série, nous sentons que cette opération peut être poursuivie au delà de toute limite et qu’il n’y a pour ainsi dire aucune raison intrinsèque de s’arrêter.',
        zh: '同样，一旦我们被引向在一个序列的相邻两项之间插入中间项，我们便感到这一操作可以超越一切界限继续下去，可以说没有任何内在理由迫使它停下来。'
      },
      {
        id: 'sh-ch02-p33',
        type: 'paragraph',
        num: '§ 33',
        fr: 'Qu’on me permette, afin d’abréger le langage, d’appeler continu mathématique du premier ordre tout ensemble de termes formés d’après la même loi que l’échelle des nombres commensurables. Si nous y intercalons ensuite des échelons nouveaux d’après la loi de formation des nombres incommensurables, nous obtiendrons ce que nous appellerons un continu du deuxième ordre.',
        zh: '为简省起见，请允许我把凡是按照可公度的数那条阶梯的同一法则所构成的项之集合，统称为**第一级数学连续统**。随后，倘若我们再按照不可公度的数的生成法则往里面插入新的阶梯，我们便会得到我们所称的**第二级连续统**。'
      },
      {
        id: 'sh-ch02-p34',
        type: 'paragraph',
        num: '§ 34',
        fr: 'Deuxième stade. — Nous n’avons fait encore que le premier pas ; nous avons expliqué l’origine des continus de premier ordre ; mais il faut voir maintenant pourquoi ils n’ont pu suffire encore et pourquoi il a fallu inventer les nombres incommensurables.',
        zh: '**第二阶段**——我们目前还只是迈出了第一步；我们已经解释了第一级连续统的起源；但现在必须看看，为什么它们依然不够用，为什么还必须发明不可公度的数。'
      },
      {
        id: 'sh-ch02-p35',
        type: 'paragraph',
        num: '§ 35',
        fr: 'Si l’on veut s’imaginer une ligne, ce ne pourra être qu’avec les caractères du continu physique, c’est-à-dire qu’on ne pourra se la représenter qu’avec une certaine largeur. Deux lignes nous apparaîtront alors sous la forme de deux bandes étroites, et si l’on se contente de cette image grossière, il est évident que si les deux lignes se traversent, elles auront une partie commune.',
        zh: '倘若人们想要在想象中描绘一条线，那就只能赋予它物理连续统的特征，也就是说，只能把它表象为具有某种宽度的东西。于是，两条线在我们眼中便会呈现为两条狭窄的带子；倘若满足于这幅粗略的图像，那么显而易见，只要这两条线彼此穿过，它们就会有一个公共部分。'
      },
      {
        id: 'sh-ch02-p36',
        type: 'paragraph',
        num: '§ 36',
        fr: 'Mais le géomètre pur fait un effort de plus : sans renoncer tout à fait au secours de ses sens, il veut arriver au concept de la ligne sans largeur, du point sans étendue. Il n’y peut parvenir qu’en regardant la ligne comme la limite vers laquelle tend une bande de plus en plus mince, et le point comme la limite vers laquelle tend une aire de plus en plus petite. Et alors, nos deux bandes, quelque étroites qu’elles soient, auront toujours une aire commune d’autant plus petite qu’elles seront moins larges et dont la limite sera ce que le géomètre pur appelle un point.',
        zh: '但纯粹的几何学家还要再作一番努力：他虽不完全放弃感官的辅助，却想要抵达无宽度的线、无广延的点这一概念。要做到这一点，他只能把线看作一条愈来愈细的狭带所趋向的极限，把点看作一块愈来愈小的面积所趋向的极限。如此一来，我们的两条狭带无论多么窄，总会有某一块公共面积；狭带愈窄，这块公共面积便愈小，而它的极限就是纯粹几何学家所说的点。'
      },
      {
        id: 'sh-ch02-p37',
        type: 'paragraph',
        num: '§ 37',
        fr: 'C’est pourquoi l’on dit que deux lignes qui se traversent ont un point commun et cette vérité paraît intuitive.',
        zh: '正因如此，人们才说彼此穿过的两条线有一个公共点，而这条真理看起来是直观的。'
      },
      {
        id: 'sh-ch02-p38',
        type: 'paragraph',
        num: '§ 38',
        fr: 'Mais elle impliquerait contradiction si l’on concevait les lignes comme des continus du premier ordre, c’est-à-dire si sur les lignes tracées par le géomètre ne devaient se trouver que des points ayant pour coordonnées des nombres rationnels. La contradiction serait manifeste dès qu’on affirmerait par exemple l’existence des droites et des cercles.',
        zh: '然而，倘若把线设想为第一级连续统——也就是说，倘若在几何学家所画的线上只允许存在以有理数为坐标的点——这条命题便会蕴含矛盾。举例来说，只要人们一肯定直线与圆的存在，这一矛盾便会昭然若揭。'
      },
      {
        id: 'sh-ch02-p39',
        type: 'paragraph',
        num: '§ 39',
        fr: 'Il est clair, en effet, que si les points dont les coordonnées sont commensurables étaient seuls regardés comme réels, le cercle inscrit dans un carré et la diagonale de ce carré ne se couperaient pas, puisque les coordonnées du point d’intersection sont incommensurables.',
        zh: '事实上显而易见，倘若只有坐标为可公度的数的那些点才被看作实在的，那么正方形的内切圆与该正方形的对角线便不会相交，因为交点的坐标是不可公度的。'
      },
      {
        id: 'sh-ch02-p40',
        type: 'paragraph',
        num: '§ 40',
        fr: 'Cela ne serait pas encore assez, car on n’aurait ainsi que certains nombres incommensurables et non pas tous ces nombres.',
        zh: '即便如此也还不够，因为这样一来我们得到的还只是某些不可公度的数，而非全部不可公度的数。'
      },
      {
        id: 'sh-ch02-p41',
        type: 'paragraph',
        num: '§ 41',
        fr: 'Mais représentons-nous une droite divisée en deux demi-droites. Chacune de ces demi-droites apparaîtra à notre imagination comme une bande d’une certaine largeur ; ces bandes empièteront d’ailleurs l’une sur l’autre, puisqu’entre elles il ne doit pas y avoir d’intervalle. La partie commune nous apparaîtra comme un point qui subsistera toujours quand nous voudrons imaginer nos bandes de plus en plus minces, de sorte que nous admettrons comme une vérité intuitive que si une droite est partagée en deux demi-droites, la frontière commune de ces deux droites est un point ; nous reconnaissons là la conception de Kronecker, où un nombre incommensurable était regardé comme la frontière commune de deux classes de nombres rationnels.',
        zh: '但让我们在心中表象一条被分成两条半直线的直线。这两条半直线中的每一条，在我们的想象中都会显现为一条具有某种宽度的狭带；况且这两条狭带还会彼此重叠，因为它们之间不应当留有任何间隙。那块公共部分在我们眼中便会显现为一个点，当我们设想这两条狭带变得愈来愈细时，这个点仍将始终留存；于是我们便会把下面这句话当作一条直观真理来接受：倘若一条直线被划分为两条半直线，这两条直线的公共边界就是一个点；我们在这里认出了[克罗内克的构想]{#g-sh-c2-09}——在那里，一个不可公度的数被看作两类有理数的公共边界。',
        glosses: [
          {
            id: 'g-sh-c2-09',
            anchor: '克罗内克的构想',
            content:
              '1893 年《形而上学与道德评论》初刊本（第 30 页）与 1902 年弗拉马里翁出版社单行本此处原文皆作 la conception de Kronecker（克罗内克的构想），系庞加莱行文笔误，实指上文刚刚详述过的戴德金分割构想（戴德金本人在 1872 年《连续性与无理数》第 3 节中恰是以直线被任一点划分为两条半直线的几何连续性，引出有理数集被划分为两类的算术分割定义；而历史上的克罗内克恰恰反对戴德金的无理数分割学说）。译文依底本据实保留原名。'
          }
        ]
      },
      {
        id: 'sh-ch02-p42',
        type: 'paragraph',
        num: '§ 42',
        fr: 'Telle est l’origine du continu du deuxième ordre, qui est le continu mathématique proprement dit.',
        zh: '这便是第二级连续统——亦即严格意义上的数学连续统——的起源。'
      },
      {
        id: 'sh-ch02-p43',
        type: 'paragraph',
        num: '§ 43',
        fr: 'Résumé. — En résumé, l’esprit a la faculté de créer des symboles, et c’est ainsi qu’il a construit le continu mathématique, qui n’est qu’un système particulier de symboles. Sa puissance n’est limitée que par la nécessité d’éviter toute contradiction ; mais l’esprit n’en use que si l’expérience lui en fournit une raison.',
        zh: '**小结**——总而言之，心智拥有创造符号的能力，它正是这样构筑起了数学连续统——后者不过是一套特定的符号系统。心智的这项能力只受制于避免一切矛盾的必要性；但唯有当经验向心智提供某种理由时，心智才会动用这项能力。'
      },
      {
        id: 'sh-ch02-p44',
        type: 'paragraph',
        num: '§ 44',
        fr: 'Dans le cas qui nous occupe, cette raison était la notion du continu physique, tirée des données brutes des sens. Mais cette notion conduit à une série de contradictions dont il faut s’affranchir successivement. C’est ainsi que nous sommes contraints à imaginer un système de symboles de plus en plus compliqué. Celui auquel nous nous arrêterons est non seulement exempt de contradiction interne, il en était déjà ainsi à toutes les étapes que nous avons franchies, mais il n’est pas non plus en contradiction avec diverses propositions dites intuitives et qui sont tirées de notions empiriques plus ou moins élaborées.',
        zh: '在我们所探讨的情形中，这一理由便是从感官的原始材料中汲取出来的物理连续统概念。但这一概念引出了一连串矛盾，我们必须逐一从中挣脱出来。于是我们被迫构想出一套愈来愈复杂的符号系统。我们最终停驻其上的那套系统，不仅免于内在矛盾——在我们此前跨越的每一个阶段上其实都已做到了这一点——而且也同若干被称为直观命题、实则源自多少经过加工的经验概念的命题不相矛盾。'
      },
      {
        id: 'sh-ch02-p45',
        type: 'paragraph',
        num: '§ 45',
        fr: 'La grandeur mesurable. — Les grandeurs que nous avons étudiées jusqu’ici ne sont pas mesurables ; nous savons bien dire si telle de ces grandeurs est plus grande que telle autre, mais non si elle est deux fois ou trois fois plus grande.',
        zh: '**可测量的量**——我们到目前为止所研究的量还不是可测量的；我们固然知道如何判断其中某个量是否大于另一个量，却不知道如何判断它是否是后者的两倍或三倍。'
      },
      {
        id: 'sh-ch02-p46',
        type: 'paragraph',
        num: '§ 46',
        fr: 'Je ne me suis en effet préoccupé jusqu’ici que de l’ordre dans lequel nos termes sont rangés. Mais cela ne suffit pas pour la plupart des applications. Il faut apprendre à comparer l’intervalle qui sépare deux termes quelconques. C’est à cette condition seulement que le continu devient une grandeur mesurable et qu’on peut lui appliquer les opérations de l’arithmétique.',
        zh: '事实上，我到目前为止所关心的仅仅是各项排列的次序。但对于大多数应用而言，光是这样还不够。我们还必须学会比较分隔任意两项的区间。唯有满足这一条件，连续统才成为一种可测量的量，算术运算也才能够应用于其上。'
      },
      {
        id: 'sh-ch02-p47',
        type: 'paragraph',
        num: '§ 47',
        fr: 'Cela ne peut se faire qu’à l’aide d’une convention nouvelle et spéciale. On conviendra que dans tel cas l’intervalle compris entre les termes A et B est égal à l’intervalle qui sépare C et D. Par exemple au début de notre travail, nous sommes partis de l’échelle des nombres entiers et nous avons supposé que l’on intercalait entre deux échelons consécutifs n échelons intermédiaires ; eh bien, ces échelons nouveaux seront par convention regardés comme équidistants.',
        zh: '这只有借助一项新的专门约定才能办到。我们将约定，在某某情形下，介于 A 与 B 两项之间的区间等于分隔 C 与 D 两项的区间。例如在本章开端，我们曾从整数的阶梯出发，并假定在相邻两级之间插入 n 级中间阶梯；那么，这些新阶梯便将依照约定被看作是等距的。'
      },
      {
        id: 'sh-ch02-p48',
        type: 'paragraph',
        num: '§ 48',
        fr: 'C’est là une façon de définir l’addition de deux grandeurs ; car si l’intervalle AB est par définition égale à l’intervalle CD, l’intervalle AD sera par définition la somme des intervalles AB et AC.',
        zh: '这便是定义两个量相加的一种方式；因为倘若区间 AB 按定义等于区间 CD，那么区间 AD 按定义就将是区间 AB 与区间 AC 之和。'
      },
      {
        id: 'sh-ch02-p49',
        type: 'paragraph',
        num: '§ 49',
        fr: 'Cette définition est arbitraire dans une très large mesure. Pourtant elle ne l’est pas complètement. Elle est assujettie à certaines conditions et par exemple aux règles de commutativité et d’associativité de l’addition. Mais pourvu que la définition choisie satisfasse à ces règles, le choix est indifférent et il est inutile de le préciser.',
        zh: '这一定义在很大程度上是任意的，却也并非完全任意。它受制于若干条件，例如加法的交换律与结合律。但只要所选定的定义满足这些法则，具体如何选择便是无所谓的，也无需再作进一步限定。'
      },
      {
        id: 'sh-ch02-p50',
        type: 'paragraph',
        num: '§ 50',
        fr: 'Remarques diverses. — Nous pouvons nous poser plusieurs questions importantes :',
        zh: '**若干补充说明**——我们可以向自己提出几个重要问题：'
      },
      {
        id: 'sh-ch02-p51',
        type: 'paragraph',
        num: '§ 51',
        fr: '1° La puissance créatrice de l’esprit est-elle épuisée par la création du continu mathématique ?',
        zh: '第一，心智的创造力是否随着数学连续统的创生而告枯竭？'
      },
      {
        id: 'sh-ch02-p52',
        type: 'paragraph',
        num: '§ 52',
        fr: 'Non : les travaux de Du Bois-Reymond le démontrent d’une manière frappante.',
        zh: '并非如此：[杜布瓦-雷蒙的研究]{#g-sh-c2-10}以令人瞩目的方式证明了这一点。',
        glosses: [
          {
            id: 'g-sh-c2-10',
            anchor: '杜布瓦-雷蒙的研究',
            content:
              '保罗·杜布瓦-雷蒙（Paul du Bois-Reymond，1831—1889），德国数学家，生理学家埃米尔·杜布瓦-雷蒙（Emil du Bois-Reymond）之弟，曾执教于弗赖堡、图宾根与柏林。自 1870 年代起，直至代表作《一般函数论》（Die allgemeine Functionentheorie，1882），他创立了研究函数渐近增长与衰减阶次的「无穷级演算」（德语 Infinitärcalcül），系统构造出介于幂级无穷小之间的对数级与迭代对数级无穷小谱系，展示了不满足阿基米德公理的广义有序连续统。'
          }
        ]
      },
      {
        id: 'sh-ch02-p53',
        type: 'paragraph',
        num: '§ 53',
        fr: 'On sait que les mathématiciens distinguent des infiniment petits de différents ordres et que ceux du deuxième ordre sont infiniment petits non seulement d’une manière absolue, mais encore par rapport à ceux du premier ordre. Il n’est pas difficile d’imaginer des infiniment petits d’ordre fractionnaire ou même irrationnel, et nous retrouvons ainsi cette échelle du continu mathématique qui a fait l’objet des pages qui précèdent.',
        zh: '众所周知，数学家区分不同阶的无穷小，第二阶无穷小不仅在绝对意义上是无穷小，而且相对于第一阶无穷小而言也是无穷小。我们不难设想出分数阶乃至无理数阶的无穷小，从而在这里重新找回了前文所探讨的那条数学连续统的阶梯。'
      },
      {
        id: 'sh-ch02-p54',
        type: 'paragraph',
        num: '§ 54',
        fr: 'Mais il y a plus ; il existe des infiniment petits qui sont infiniment petits par rapport à ceux du premier ordre et infiniment grands, au contraire, par rapport à ceux de l’ordre 1 + ε, et cela quelque petit que soit ε. Voilà donc des termes nouveaux intercalés dans notre série, et si l’on veut me permettre de revenir au langage que j’employais tout à l’heure et qui est assez commode, bien qu’il ne soit pas consacré par l’usage, je dirai que l’on a créé ainsi une sorte de continu du troisième ordre.',
        zh: '但不仅如此；还存在着这样一些无穷小：它们相对于第一阶无穷小而言是无穷小，相反，无论 ε 多么小，它们相对于 1 + ε 阶无穷小而言却是无穷大。于是，我们的序列中便插入了新的项；倘若读者允许我重新采用刚才用过的那种虽未约定俗成、却颇为便利的说法，我便要说，人们由此创造出了一种**第三级连续统**。'
      },
      {
        id: 'sh-ch02-p55',
        type: 'paragraph',
        num: '§ 55',
        fr: 'Il serait aisé d’aller plus loin, mais ce serait un vain jeu de l’esprit ; on n’imaginerait que des symboles sans application possible, et personne ne s’en avisera. Le continu du troisième ordre auquel conduit la considération des divers ordres d’infiniment petits est lui-même trop peu utile pour avoir conquis droit de cité, et les géomètres ne le regardent que comme une simple curiosité. L’esprit n’use de sa faculté créatrice que quand l’expérience lui en impose la nécessité.',
        zh: '沿着这条路再往下走固然轻而易举，但那将只是一场徒劳的智力游戏；人们构想出来的将只是毫无应用可能的符号，不会有人去作此打算。由考察不同阶无穷小所引出的第三级连续统本身便因用处太小而未能取得正式席位，几何学家只把它看作一件单纯的珍奇玩意儿。唯有当经验将必要性加诸心智之时，心智才会动用它的创造能力。'
      },
      {
        id: 'sh-ch02-p56',
        type: 'paragraph',
        num: '§ 56',
        fr: '2° Une fois en possession du concept du continu mathématique, est-on à l’abri de contradictions analogues à celles qui lui ont donné naissance ?',
        zh: '第二，一旦掌握了数学连续统的概念，我们是否便能免遭类似于催生这一概念的那些矛盾？'
      },
      {
        id: 'sh-ch02-p57',
        type: 'paragraph',
        num: '§ 57',
        fr: 'Non, et j’en vais donner un exemple.',
        zh: '并非如此，我这就举出一个例子。'
      },
      {
        id: 'sh-ch02-p58',
        type: 'paragraph',
        num: '§ 58',
        fr: 'Il faut être bien savant pour ne pas regarder comme évident que toute courbe a une tangente : et en effet si l’on se représente cette courbe et une droite comme deux bandes étroites, on pourra toujours les disposer de façon qu’elles aient une partie commune sans se traverser. Que l’on imagine ensuite la largeur de ces deux bandes diminuant indéfiniment, cette partie commune pourra toujours subsister et, à la limite pour ainsi dire, les deux lignes auront un point commun sans se traverser, c’est-à-dire qu’elles se toucheront.',
        zh: '一个人必须相当博学，才不会把「任何曲线都有一条切线」看作不言自明之事：事实上，倘若把这条曲线与一条直线表象为两条狭窄的带子，我们总能把它们摆成既有公共部分、又不彼此穿过的样子。随后设想这两条狭带的宽度无止境地缩小，那块公共部分总能保留下来，可以说在极限状态下，这两条线将拥有一个公共点而不彼此穿过——也就是说，它们将彼此相切。'
      },
      {
        id: 'sh-ch02-p59',
        type: 'paragraph',
        num: '§ 59',
        fr: 'Le géomètre qui raisonnerait de la sorte, consciemment ou non, ne ferait pas autre chose que ce que nous avons fait plus haut pour démontrer que deux lignes qui se traversent ont un point commun, et son intuition pourrait paraître tout aussi légitime.',
        zh: '无论自觉与否，如此推理的几何学家所做的事，与我们前文为证明彼此穿过的两条线拥有一个公共点所做的事毫无二致，他的直观看起来似乎也同样正当。'
      },
      {
        id: 'sh-ch02-p60',
        type: 'paragraph',
        num: '§ 60',
        fr: 'Elle le tromperait cependant. On peut démontrer qu’il y a des courbes qui n’ont pas de tangente, si cette courbe est définie comme un continu analytique de deuxième ordre.',
        zh: '然而这直观却会欺骗他。人们可以证明，倘若把曲线定义为一个第二级分析连续统，那么确实存在着[没有切线的曲线]{#g-sh-c2-11}。',
        glosses: [
          {
            id: 'g-sh-c2-11',
            anchor: '没有切线的曲线',
            content:
              '十九世纪上半叶的法国主流分析教材——自安培 1806 年发表于《综合工科学校学报》的证明尝试，直至迪阿梅尔通用的《分析教程》——普遍凭几何直观认定任何连续曲线除孤立奇点外必处处存在切线（即连续函数必几乎处处可微）。1872 年 7 月 18 日，魏尔斯特拉斯向柏林科学院提交报告（1875 年经保罗·杜布瓦-雷蒙公开发表），用绝对收敛的三角级数显式构造出一个在实轴上处处连续却处处不可微的函数，即在任何点都不存在切线的连续曲线（波尔查诺约于 1830 年亦曾在未刊手稿中构造过几何反例）。'
          }
        ]
      },
      {
        id: 'sh-ch02-p61',
        type: 'paragraph',
        num: '§ 61',
        fr: 'Sans doute quelque artifice analogue à ceux que nous avons étudiés plus haut aurait permis de lever la contradiction ; mais, comme celle-ci ne se rencontre que dans des cas très exceptionnels, on ne s’en est pas préoccupé. Au lieu de chercher à concilier l’intuition avec l’analyse, on s’est contenté de sacrifier l’une des deux, et comme l’analyse doit rester impeccable, c’est à l’intuition que l’on a donné tort.',
        zh: '诚然，采用某种类似于我们前文探讨过的巧妙设计，本可以消除这一矛盾；但由于这种矛盾只在极其罕见的例外情形下才会遇到，人们便没有为此费心。人们没有设法调和直观与分析，而是满足于牺牲其中一方；既然分析必须保持无懈可击，被判为错误的便只能是直观了。'
      },
      {
        id: 'sh-ch02-p62',
        type: 'paragraph',
        num: '§ 62',
        fr: 'Le continu physique à plusieurs dimensions. — J’ai étudié plus haut le continu physique tel qu’il ressort des données immédiates de nos sens, ou, si l’on veut, des résultats bruts des expériences de Fechner ; j’ai montré que ces résultats sont résumés dans les formules contradictoires',
        zh: '**多维物理连续统**——我在上文已经考察了直接源自感官直接材料——或者如果愿意这么说的话，源自费希纳实验的原始结果——的物理连续统；我已经表明，这些结果可归结为如下相互矛盾的公式：'
      },
      {
        id: 'sh-ch02-p63',
        type: 'verse',
        num: '§ 63',
        fr: 'A = B, B = C, A < C.',
        zh: 'A = B, B = C, A < C'
      },
      {
        id: 'sh-ch02-p64',
        type: 'paragraph',
        num: '§ 64',
        fr: 'Voyons maintenant comment cette notion s’est généralisée et comment a pu en sortir le concept des continus à plusieurs dimensions.',
        zh: '现在让我们看看，这一概念是如何得到推广的，多维连续统的概念又是如何从中产生出来的。'
      },
      {
        id: 'sh-ch02-p65',
        type: 'paragraph',
        num: '§ 65',
        fr: 'Considérons deux ensembles quelconques de sensations. Ou bien nous pourrons les discerner l’un de l’autre, ou bien nous ne le pourrons pas, de même que dans les expériences de Fechner un poids de 10 grammes pouvait se distinguer d’un poids de 12 grammes, mais pas d’un poids de 11 grammes. Je n’ai pas besoin d’autre chose pour construire le continu à plusieurs dimensions.',
        zh: '试考察任意两个感觉集合。我们要么能够把它们彼此区分开来，要么不能区分，正如在费希纳的实验中，10 克的砝码可以与 12 克的砝码区分开来，却无法与 11 克的砝码区分开来一样。要构筑多维连续统，我不需要任何别的东西。'
      },
      {
        id: 'sh-ch02-p66',
        type: 'paragraph',
        num: '§ 66',
        fr: 'Appelons élément un de ces ensembles de sensations. Ce sera quelque chose d’analogue au point des mathématiciens ; ce ne sera pas tout à fait la même chose cependant. Nous ne pouvons pas dire que notre élément soit sans étendue, puisque nous ne savons pas le distinguer des éléments voisins et qu’il est ainsi entouré d’une sorte de brouillard. Si l’on veut me permettre cette comparaison astronomique, nos « éléments » seraient comme des nébuleuses, tandis que les points mathématiques seraient comme des étoiles.',
        zh: '让我们把这样一个感觉集合称为**元素**。它将是某种类似于数学家的「点」的东西，却又并非完全同一回事。我们不能说我们的元素没有广延，因为我们无法将它与邻近的元素区分开来，它因而被一层迷雾般的东西所环绕。倘若允许我借用这样一个天文学比喻，我们的「元素」就好比星云，而数学的点则好比恒星。'
      },
      {
        id: 'sh-ch02-p67',
        type: 'paragraph',
        num: '§ 67',
        fr: 'Cela posé, un système d’éléments formera un continu, si l’on peut passer d’un quelconque d’entre eux à un autre également quelconque, par une série d’éléments consécutifs enchaînés de telle sorte que chacun d’eux ne puisse se discerner du précédent. Cette chaîne est à la ligne du mathématicien ce qu’un élément isolé était au point.',
        zh: '确立这一点之后，倘若在一个元素系统中，我们能够从其中任意一个元素出发，经过一连串首尾相扣的相邻元素——使得其中每一个元素都无法与前一个元素区分开来——而过渡到同样任意的另一个元素，那么这个元素系统就将构成一个**连续统**。这条链之于数学家的线，正如孤立的元素之于点。'
      },
      {
        id: 'sh-ch02-p68',
        type: 'paragraph',
        num: '§ 68',
        fr: 'Avant d’aller plus loin, il faut que j’explique ce que c’est qu’une coupure. Envisageons un continu C et enlevons-lui certains de ses éléments que pour un instant nous regarderons comme n’appartenant plus à ce continu. L’ensemble des éléments ainsi enlevés s’appellera une coupure. Il pourra se faire que grâce à cette coupure, C soit subdivisé en plusieurs continus distincts, l’ensemble des éléments restants cessant de former un continu unique.',
        zh: '在往下推进之前，我必须先解释什么是**分割**。试设想一个连续统 C，并从中抽去它的若干元素，在片刻之间把这些元素看作不再属于该连续统。如此抽去的这些元素之集合，就称为一次分割。可能会出现这样的情形：由于这次分割，C 被细分为几个彼此分离的连续统，余下元素的集合不再构成单一的连续统。'
      },
      {
        id: 'sh-ch02-p69',
        type: 'paragraph',
        num: '§ 69',
        fr: 'Alors il y aura sur C deux éléments, A et B, que l’on devra regarder comme appartenant à deux continus distincts et on le reconnaîtra parce qu’il sera impossible de trouver une chaîne d’éléments consécutifs de C partant de A et allant en B, et chaque élément étant indiscernable du précédent, à moins que l’un des éléments de cette chaîne ne soit indiscernable de l’un des éléments de la coupure et ne doive par suite être exclu.',
        zh: '此时，在 C 上就会有两个元素 A 与 B，我们必须将它们看作分属两个不同的连续统；之所以能认出这一点，是因为我们不可能在 C 中找到一条从 A 出发通往 B、且其中每一个元素都与前一个元素不可区分的相邻元素链——除非这条链中的某一个元素与该分割中的某一个元素不可区分，因而必须被排除在外。'
      },
      {
        id: 'sh-ch02-p70',
        type: 'paragraph',
        num: '§ 70',
        fr: 'Il pourra se faire au contraire que la coupure établie soit insuffisante pour subdiviser le continu C. Pour classer les continus physiques, nous examinerons précisément quelles sont les coupures qu’il est nécessaire d’y faire pour les subdiviser.',
        zh: '相反，也可能会出现这样的情形：所作出的分割不足以将连续统 C 细分。为了对物理连续统加以分类，我们恰恰要考察必须对其施行怎样的分割，才能将它们细分。'
      },
      {
        id: 'sh-ch02-p71',
        type: 'paragraph',
        num: '§ 71',
        fr: 'Si on peut subdiviser un continu physique C par une coupure se réduisant à un nombre fini d’éléments tous discernables les uns des autres (et ne formant par conséquent ni un continu, ni plusieurs continus), nous dirons que C est un continu à une dimension.',
        zh: '倘若一个物理连续统 C 可以借由一次仅归结为有限个彼此皆可区分的元素（因而既不构成一个连续统，也不构成多个连续统）的分割而被细分，我们就说 C 是一个**一维连续统**。'
      },
      {
        id: 'sh-ch02-p72',
        type: 'paragraph',
        num: '§ 72',
        fr: 'Si au contraire C ne peut être subdivisé que par des coupures qui soient elles-mêmes des continus, nous dirons que C a plusieurs dimensions. S’il suffit de coupures qui soient des continus à une dimension, nous dirons que C a deux dimensions ; s’il suffit de coupures à deux dimensions, nous dirons que C a trois dimensions, et ainsi de suite.',
        zh: '相反，倘若 C 只能借由本身也是连续统的分割才能被细分，我们就说 C 具有多个维度。倘若只需采用本身为一维连续统的分割便已足够，我们就说 C 具有两个维度；倘若只需采用二维分割便已足够，我们就说 C 具有三个维度；以此类推。'
      },
      {
        id: 'sh-ch02-p73',
        type: 'paragraph',
        num: '§ 73',
        fr: 'Ainsi se trouve définie la notion du continu physique à plusieurs dimensions, grâce à ce fait très simple que deux ensembles de sensations peuvent être discernables ou indiscernables.',
        zh: '凭借两个感觉集合或可区分、或不可区分这一极为简单的事实，[多维物理连续统的概念便由此得到了定义]{#g-sh-c2-12}。',
        glosses: [
          {
            id: 'g-sh-c2-12',
            anchor: '多维物理连续统的概念便由此得到了定义',
            content:
              '庞加莱在此给出不依赖度量坐标的维数递推拓扑定义：以有限离散点集（零维）为起点，凡能由 n − 1 维分割加以隔断的连续统即定义为 n 维连续统（后在 1905 年《科学的价值》第三章与 1912 年论文《空间为什么有三个维度》中进一步展开）。此前康托尔（1878）证明一维线段与 n 维空间存在点集一一对应，皮亚诺（1890）又构造出填满正方形的连续曲线，使传统以独立坐标参数个数刻画维数的做法不再适用。布劳威尔于 1911 年证明欧氏空间的维数拓扑不变性后，在 1913 年论文《论自然的维数概念》（« Über den natürlichen Dimensionsbegriff »）中以庞加莱的递推分割构想为出发点加以严格化；1921 至 1922 年间，帕维尔·乌雷松（Pavel Urysohn，1898—1924）与卡尔·门格尔（Karl Menger，1902—1985）各自独立利用开集边界将其公理化为现代一般拓扑学中的归纳维数论（inductive dimension theory）。'
          }
        ]
      },
      {
        id: 'sh-ch02-p74',
        type: 'paragraph',
        num: '§ 74',
        fr: 'Le continu mathématique à plusieurs dimensions. — Celle du continu mathématique à n dimensions en est sortie tout naturellement par un processus tout pareil à celui que nous avons étudié au début de ce chapitre. Un point d’un pareil continu nous apparaît, on le sait, comme défini par un système de n grandeurs distinctes que l’on appelle ses coordonnées.',
        zh: '**多维数学连续统**——n 维数学连续统的概念，经由一个与我们在本章开端所考察的过程完全相似的过程，极其自然地从中脱胎而出。众所周知，这类连续统中的一个点，在我们眼中是由一组被称为其**坐标**的 n 个彼此独立的量来定义的。'
      },
      {
        id: 'sh-ch02-p75',
        type: 'paragraph',
        num: '§ 75',
        fr: 'Il n’est pas toujours nécessaire que ces grandeurs soient mesurables et il y a par exemple une branche de la géométrie où on fait abstraction de la mesure de ces grandeurs, où on se préoccupe seulement de savoir par exemple si sur une courbe ABC, le point B est entre les points A et C et non de savoir si l’arc AB est égal à l’arc BC ou s’il est deux fois plus grand. C’est ce qu’on appelle l’Analysis Situs.',
        zh: '这些量并不总是必须是可测量的；例如几何学中就有一个分支，人们在那里抽去对这些量的测量，只关心诸如在一条曲线 ABC 上，点 B 是否位于点 A 与点 C 之间，而不关心弧 AB 是等于弧 BC 还是后者的两倍。这便是人们所说的[位置分析]{#g-sh-c2-13}。',
        glosses: [
          {
            id: 'g-sh-c2-13',
            anchor: '位置分析',
            content:
              '拉丁语 Analysis Situs（字面意为「位置的分析」），即现代数学中拓扑学（德语 Topologie 一词由约翰·本尼迪克特·利斯廷于 1847 年创制）的早期通行名称。这一构想可追溯至莱布尼茨 1679 年致克里斯蒂安·惠更斯书信及《几何特征论》手稿中建立不依赖度量的纯位置几何学（geometria situs）之倡议，后经黎曼（1857）与恩里科·贝蒂（Enrico Betti，1871）在曲面连通性研究中推进；庞加莱本人于 1895 年发表长篇奠基论文《位置分析》（Analysis Situs）并于 1899 至 1904 年间续成五篇补篇，创立了基本群、同调论、欧拉—庞加莱示性数与庞加莱对偶定理，奠定了现代代数拓扑学。'
          }
        ]
      },
      {
        id: 'sh-ch02-p76',
        type: 'paragraph',
        num: '§ 76',
        fr: 'C’est tout un corps de doctrine qui a attiré l’attention des plus grands géomètres et où l’on voit sortir les uns des autres une série de théorèmes remarquables. Ce qui distingue ces théorèmes de ceux de la géométrie ordinaire, c’est qu’ils sont purement qualitatifs et qu’ils resteraient vrais si les figures étaient copiées par un dessinateur malhabile qui en altérerait grossièrement les proportions et remplacerait les droites par un trait plus ou moins courbe.',
        zh: '这是一整套吸引了最伟大的几何学家们注意的学说体系，人们看到一连串卓越的定理在其中环环相扣地涌现出来。使这些定理区别于普通几何学定理的地方在于，它们纯粹是定性的：即便图形由一位笨拙的绘图员临摹，以致比例遭到粗暴歪曲、直线也被替换成或多或少有些弯曲的线条，这些定理依然成立。'
      },
      {
        id: 'sh-ch02-p77',
        type: 'paragraph',
        num: '§ 77',
        fr: 'C’est quand on a voulu introduire la mesure dans le continu que nous venons de définir que ce continu est devenu l’espace et que la géométrie est née. Mais je réserve cette étude pour la deuxième partie.',
        zh: '正是当人们想要把测量引入我们方才定义的连续统之中时，这一连续统才变成了空间，几何学也才应运而生。不过，我把这项研究留待第二编再去展开。'
      }
    ]
  }
];
