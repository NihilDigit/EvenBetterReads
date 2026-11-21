import type { BookSection } from '../../../types/book';

export const poincareCh3Sections: BookSection[] = [
  {
    id: 'ch03-geometries-non-euclidiennes',
    roman: 'III',
    titleOriginal: 'Deuxième partie : L’espace — Chapitre III. Les géométries non euclidiennes',
    titleZh: '第二编 空间：第三章 非欧几何',
    aiModel: 'Gemini-4-Carbon',
    blocks: [
      {
        id: 'sh-ch03-p01',
        type: 'paragraph',
        num: '§ 01',
        fr: 'Toute conclusion suppose des prémisses ; ces prémisses elles-mêmes ou bien sont évidentes par elles-mêmes et n’ont pas besoin de démonstration, ou bien ne peuvent être établies qu’en s’appuyant sur d’autres propositions, et comme on ne saurait remonter ainsi à l’infini, toute science déductive, et en particulier la géométrie, doit reposer sur un certain nombre d’axiomes indémontrables. Tous les traités de géométrie débutent donc par l’énoncé de ces axiomes. Mais il y a entre eux une distinction à faire : quelques-uns, comme celui-ci par exemple : « deux quantités égales à une même troisième sont égales entre elles », ne sont pas des propositions de géométrie, mais des propositions d’analyse. Je les regarde comme des jugements analytiques a priori, je ne m’en occuperai pas.',
        zh: '任何结论都以若干前提为预设；这些前提本身要么不证自明而无需证明，要么只能仰赖其他命题才得以确立；既然我们不可能如此无穷倒溯下去，那么一切演绎科学——[尤其是几何学，都必须建立在若干不可证明的公理之上]{#g-sh-c3-01}。因此，所有几何学教科书都以陈述这些公理开篇。然而在这些公理之间必须作出一项区分：其中有一些——例如「等于同量的两个量彼此相等」——并不是几何学命题，而是分析学命题。我将它们视作先天分析判断，在此不予讨论。',
        glosses: [
          {
            id: 'g-sh-c3-01',
            anchor: '尤其是几何学，都必须建立在若干不可证明的公理之上',
            content:
              '本章主体脱胎于庞加莱 1891 年 12 月 15 日发表在《纯科学与应用科学总评论》（第 2 卷第 769—774 页）上的论文《非欧几何》（« Les géométries non euclidiennes »，伦敦《自然》周刊于 1892 年 2 月 25 日刊出英译本）；1902 年编入本书第三章时，庞加莱增补了关于索福斯·李变换群定理（1893）以及维罗内塞与希尔伯特非阿基米德几何（1891—1899）的段落。'
          }
        ]
      },
      {
        id: 'sh-ch03-p02',
        type: 'paragraph',
        num: '§ 02',
        fr: 'Mais je dois insister sur d’autres axiomes qui sont spéciaux à la géométrie. La plupart des traités en énoncent trois explicitement :',
        zh: '但我必须重点探讨另一些专属于几何学的公理。大多数教科书都会明确陈述其中三条：'
      },
      {
        id: 'sh-ch03-p03',
        type: 'paragraph',
        num: '§ 03',
        fr: '1° Par deux points ne peut passer qu’une droite ;',
        zh: '第一，过两点只能作一条直线；'
      },
      {
        id: 'sh-ch03-p04',
        type: 'paragraph',
        num: '§ 04',
        fr: '2° La ligne droite est le plus court chemin d’un point à un autre.',
        zh: '第二，直线是从一点到另一点的最短路径；'
      },
      {
        id: 'sh-ch03-p05',
        type: 'paragraph',
        num: '§ 05',
        fr: '3° Par un point on ne peut faire passer qu’une parallèle à une droite donnée.',
        zh: '第三，过一点只能作一条直线与已知直线平行。'
      },
      {
        id: 'sh-ch03-p06',
        type: 'paragraph',
        num: '§ 06',
        fr: 'Bien que l’on se dispense généralement de démontrer le second de ces axiomes, il serait possible de le déduire des deux autres et de ceux, beaucoup plus nombreux, que l’on admet implicitement sans les énoncer, ainsi que je l’expliquerai plus loin.',
        zh: '尽管人们通常省去对第二条公理的证明，但正如我将在后文解释的那样，其实完全可以从另外两条公理、连同那些数量多得多却不加明言便暗自承认的公理中将它推导出来。'
      },
      {
        id: 'sh-ch03-p07',
        type: 'paragraph',
        num: '§ 07',
        fr: 'On a longtemps cherché en vain à démontrer également le troisième axiome, connu sous le nom de postulatum d’Euclide. Ce qu’on a dépensé d’efforts dans cet espoir chimérique est vraiment inimaginable. Enfin au commencement du siècle et à peu près en même temps, deux savants, un Russe et un Hongrois, Lobatchevsky et Bolyai établirent d’une façon irréfutable que cette démonstration est impossible ; ils nous ont à peu près débarrassés des inventeurs de géométries sans postulatum ; depuis lors l’Académie des Sciences ne reçoit plus guère qu’une ou deux démonstrations nouvelles par an.',
        zh: '人们也曾长期徒劳地试图证明第三条公理，即通称的[欧几里得公设]{#g-sh-c3-02}。为了这一虚幻的希望所耗费的心血实在难以想象。终于，在本世纪初叶几乎同一时期，两位学者——俄国人罗巴切夫斯基与匈牙利人[鲍耶]{#g-sh-c3-03}——以无可辩驳的方式确立了这种证明的不可能性；他们总算大体替我们摆脱了那些试图发明不依赖该公设之几何学的人；自那以后，法兰西科学院每年收到的新证明差不多只剩一两份了。',
        glosses: [
          {
            id: 'g-sh-c3-02',
            anchor: '欧几里得公设',
            content:
              '即欧几里得《几何原本》第一卷第五公设：若一条直线与两条直线相交，使得同旁内角之和小于两直角，则这两条直线无限延长后必在小于两直角的一侧相交。上文第三条「过一点只能作一条直线与已知直线平行」，系苏格兰数学家约翰·普莱费尔（John Playfair）在 1795 年《几何原本》注本中推广的等价平行公理（古希腊普罗克洛斯已述及）。两千余年间学者屡试由前四条公设证出第五公设：意大利耶稣会士乔瓦尼·吉罗拉莫·萨凯里（Giovanni Girolamo Saccheri）在《洗清一切瑕疵的欧几里得》（Euclides ab omni naevo vindicatus，1733）中、瑞士数学家约翰·海因里希·兰伯特（Johann Heinrich Lambert）在《平行线理论》（1766 撰，1786 刊）中先后尝试归谬法，由锐角假设推出大批双曲几何定理，却始终未能导出真正的逻辑矛盾。'
          },
          {
            id: 'g-sh-c3-03',
            anchor: '鲍耶',
            content:
              '亚诺什·鲍耶（János Bolyai，1802—1860），匈牙利数学家（正文作「本世纪初叶」系沿用 1891 年初刊时的十九世纪纪年视角）。其父法尔卡什·鲍耶（Farkas Bolyai）曾苦证平行公设数十年无果并力劝儿子切勿涉足；亚诺什仍于 1823 年打通双曲空间体系，致信父亲称「我已从虚无中创造了一个崭新的别样世界」，其成果于 1832 年以拉丁文《呈现绝对真空间科学的附录》（Appendix scientiam spatii absolute veram exhibens）为题，附于其父数学教材《试论》（Tentamen）卷末刊行。'
          }
        ]
      },
      {
        id: 'sh-ch03-p08',
        type: 'paragraph',
        num: '§ 08',
        fr: 'La question n’était pas épuisée ; elle ne tarda pas à faire un grand pas par la publication du célèbre mémoire de Riemann intitulé : Ueber die Hypothesen welche der Geometrie zum Grunde liegen. Cet opuscule a inspiré la plupart des travaux récents dont je parlerai plus loin et parmi lesquels il convient de citer ceux de Beltrami et de Helmholtz.',
        zh: '问题并未就此穷尽；不久之后，随着黎曼那篇题为[《论作为几何学基础的假设》]{#g-sh-c3-04}的著名论文问世，这一问题又迈出了一大步。这篇短论启发了我将在下文谈到的大多数晚近研究，其中尤应提及贝尔特拉米与亥姆霍兹的工作。',
        glosses: [
          {
            id: 'g-sh-c3-04',
            anchor: '《论作为几何学基础的假设》',
            content:
              '德文原题 Über die Hypothesen, welche der Geometrie zu Grunde liegen（庞加莱引文作 zum Grunde），系黎曼 1854 年 6 月 10 日在哥廷根大学哲学系申请特许任教资格（Habilitation）时由卡尔·弗里德里希·高斯（Carl Friedrich Gauss，1777—1855）亲自选定题目的就职演说，生前未刊，逝世后由戴德金整理刊布于《哥廷根皇家科学学会论丛》第 13 卷（1867 年印行，卷首纪年 1868 年）。'
          }
        ]
      },
      {
        id: 'sh-ch03-p09',
        type: 'paragraph',
        num: '§ 09',
        fr: 'La Géométrie de Lobatchevsky. — S’il était possible de déduire le postulatum d’Euclide des autres axiomes, il arriverait évidemment qu’en niant le postulatum, et en admettant les autres axiomes, on serait conduit à des conséquences contradictoires ; il serait donc impossible d’appuyer sur de telles prémisses une géométrie cohérente.',
        zh: '**罗巴切夫斯基几何**——倘若有可能从其他公理推导出欧几里得公设，那么在否定该公设而承认其他公理时，显然就会导出相互矛盾的推论；因此也就不可能在这样的前提之上建立起一门自洽的几何学。'
      },
      {
        id: 'sh-ch03-p10',
        type: 'paragraph',
        num: '§ 10',
        fr: 'Or c’est précisément ce qu’a fait Lobatchevsky. Il suppose au début que :',
        zh: '然而罗巴切夫斯基所做的恰恰就是这件事。他在开篇假定：'
      },
      {
        id: 'sh-ch03-p11',
        type: 'paragraph',
        num: '§ 11',
        fr: 'L’on peut par un point mener plusieurs parallèles à une droite donnée ;',
        zh: '**过一点可以作多条直线与已知直线平行；**'
      },
      {
        id: 'sh-ch03-p12',
        type: 'paragraph',
        num: '§ 12',
        fr: 'Et il conserve d’ailleurs tous les autres axiomes d’Euclide. De ces hypothèses, il déduit une suite de théorèmes entre lesquels il est impossible de relever aucune contradiction et il construit une géométrie dont l’impeccable logique ne le cède en rien à celle de la géométrie euclidienne.',
        zh: '同时他又保留了欧几里得的其余一切公理。从这些假设出发，他推演出一连串定理，在它们之间根本找不出任何矛盾；他由此构筑起一门几何学，其无懈可击的逻辑严密性较之欧几里得几何毫不逊色。'
      },
      {
        id: 'sh-ch03-p13',
        type: 'paragraph',
        num: '§ 13',
        fr: 'Les théorèmes sont, bien entendu, très différents de ceux auxquels nous sommes accoutumés et ils ne laissent pas de déconcerter un peu d’abord.',
        zh: '当然，这些定理同我们习以为常的定理大相径庭，初看之下不免令人有些惊愕。'
      },
      {
        id: 'sh-ch03-p14',
        type: 'paragraph',
        num: '§ 14',
        fr: 'Ainsi la somme des angles d’un triangle est toujours plus petite que deux droits et la différence entre cette somme et deux droits est proportionnelle à la surface du triangle.',
        zh: '例如，三角形的内角和恒小于两直角，且这一内角和与两直角之差同该三角形的面积成正比。'
      },
      {
        id: 'sh-ch03-p15',
        type: 'paragraph',
        num: '§ 15',
        fr: 'Il est impossible de construire une figure semblable à une figure donnée mais de dimensions différentes.',
        zh: '不可能作出一个与已知图形相似而尺度不同的图形。'
      },
      {
        id: 'sh-ch03-p16',
        type: 'paragraph',
        num: '§ 16',
        fr: 'Si l’on divise une circonférence en n parties égales, et qu’on mène des tangentes aux points de division, ces n tangentes formeront un polygone si le rayon de la circonférence est assez petit ; mais si ce rayon est assez grand, elles ne se rencontreront pas.',
        zh: '若将一个圆周等分为 n 份，并在各分点处作切线，那么当圆周的半径足够小时，这 n 条切线会围成一个多边形；但当半径足够大时，它们便永不相交。'
      },
      {
        id: 'sh-ch03-p17',
        type: 'paragraph',
        num: '§ 17',
        fr: 'Il est inutile de multiplier ces exemples ; les propositions de Lobatchevsky n’ont plus aucun rapport avec celles d’Euclide, mais elles ne sont pas moins logiquement reliées les unes aux autres.',
        zh: '无需再罗列更多例子了；罗巴切夫斯基的命题同欧几里得的命题已毫无相似之处，但它们彼此之间的逻辑联系却同样严丝合缝。'
      },
      {
        id: 'sh-ch03-p18',
        type: 'paragraph',
        num: '§ 18',
        fr: 'La Géométrie de Riemann. — Imaginons un monde uniquement peuplé d’êtres dénués d’épaisseur ; et supposons que ces animaux « infiniment plats » soient tous dans un même plan et n’en puissent sortir. Admettons de plus que ce monde soit assez éloigné des autres pour être soustrait à leur influence. Pendant que nous sommes en train de faire des hypothèses, il ne nous en coûte pas plus de douer ces êtres de raisonnement et de les croire capables de faire de la géométrie. Dans ce cas, ils n’attribueront certainement à l’espace que deux dimensions.',
        zh: '**黎曼几何**——设想一个仅仅居住着毫无厚度之生灵的世界；并假定这些[「无限扁平」的动物]{#g-sh-c3-05}全都处在同一个平面之内，且永远无法离开这个平面。再假定这个世界与其他世界相距足够遥远，因而免受它们的影响。既然我们正在作种种假设，不妨顺便赋予这些生灵以推理能力，相信它们能够研究几何学。在这种情况下，它们必定只会赋予空间两个维度。',
        glosses: [
          {
            id: 'g-sh-c3-05',
            anchor: '「无限扁平」的动物',
            content:
              '二维曲面生灵的思想实验由德国物理学家与生理学家赫尔曼·冯·亥姆霍兹（Hermann von Helmholtz，1821—1894）在 1870 年海德堡演说《论几何公理的起源与意义》（Über den Ursprung und die Bedeutung der geometrischen Axiome）中率先引入（英国学者埃德温·阿博特 1884 年出版的维度寓言《平面国》亦受此启发）。'
          }
        ]
      },
      {
        id: 'sh-ch03-p19',
        type: 'paragraph',
        num: '§ 19',
        fr: 'Mais supposons maintenant que ces animaux imaginaires, tout en restant dénués d’épaisseur, aient la forme d’une figure sphérique, et non d’une figure plane et soient tous sur une même sphère sans pouvoir s’en écarter. Quelle géométrie pourront-ils construire ? Il est clair d’abord qu’ils n’attribueront à l’espace que deux dimensions ; ce qui jouera pour eux le rôle de la ligne droite, ce sera le plus court chemin d’un point à un autre sur la sphère, c’est-à-dire un arc de grand cercle, en un mot leur géométrie sera la géométrie sphérique.',
        zh: '但现在让我们假定，这些假想的动物虽然依旧毫无厚度，却呈球面图形而非平面图形的形态，并且全都居于同一个球面上而无法偏离半步。它们将建立起怎样的几何学呢？首先很清楚，它们依然只会赋予空间两个维度；在它们看来扮演直线角色的，将是球面上从一点到另一点的最短路径，亦即大圆弧；总而言之，它们的几何学将是球面几何。'
      },
      {
        id: 'sh-ch03-p20',
        type: 'paragraph',
        num: '§ 20',
        fr: 'Ce qu’ils appelleront l’espace, ce sera cette sphère d’où ils ne peuvent sortir et sur laquelle se passent tous les phénomènes dont ils peuvent avoir connaissance. Leur espace sera donc sans limites puisqu’on peut sur une sphère aller toujours devant soi sans jamais être arrêté, et cependant il sera fini ; on n’en trouvera jamais le bout, mais on pourra en faire le tour.',
        zh: '它们称之为空间的，就是这颗它们无法脱离、且它们所能知悉的一切现象皆发生于其上的球面。因此，它们的空间将是**无界的**，因为在球面上永远可以笔直朝前走而绝不会受阻；然而这个空间又是**有限的**——人们永远找不到它的尽头，却可以绕行它一周。'
      },
      {
        id: 'sh-ch03-p21',
        type: 'paragraph',
        num: '§ 21',
        fr: 'Eh bien, la géométrie de Riemann, c’est la géométrie sphérique étendue à trois dimensions. Pour la construire, le mathématicien allemand a dû jeter par-dessus bord, non seulement le postulatum d’Euclide, mais encore le premier axiome : Par deux points on ne peut faire passer qu’une droite.',
        zh: '那么，黎曼几何正是推广到三维的球面几何。为了构筑这一几何学，这位德国数学家不得不抛弃的不仅是欧几里得公设，还有第一条公理：过两点只能作一条直线。'
      },
      {
        id: 'sh-ch03-p22',
        type: 'paragraph',
        num: '§ 22',
        fr: 'Sur une sphère, par deux points donnés on ne peut faire en général passer qu’un grand cercle (qui, comme nous venons de le voir, jouerait le rôle de la droite pour nos êtres imaginaires), mais il y a une exception : si les deux points donnés sont diamétralement opposés, on pourra faire passer par ces deux points une infinité de grands cercles.',
        zh: '在球面上，过两个已知点通常只能作一个大圆（正如我们方才所见，大圆对于我们假想的生灵而言扮演着直线的角色），但存在一个例外：倘若两个已知点恰为对径点，那么过这两点便可以作出无穷多个大圆。'
      },
      {
        id: 'sh-ch03-p23',
        type: 'paragraph',
        num: '§ 23',
        fr: 'De même dans la géométrie de Riemann (au moins sous une de ses formes), par deux points ne passera en général qu’une seule droite ; mais il y a des cas exceptionnels où par deux points pourront passer une infinité de droites.',
        zh: '同样，在黎曼几何中（[至少在它的某一种形态下]{#g-sh-c3-06}），过两点通常只能作唯一一条直线；但也存在若干例外情形，在其中过两点可以作出无穷多条直线。',
        glosses: [
          {
            id: 'g-sh-c3-06',
            anchor: '至少在它的某一种形态下',
            content:
              '此处区分常正曲率空间的两种整体拓扑形态：在球面几何（双椭圆几何）中，任意一对对径点之间有无穷多条大圆相连，且任意两条大圆恒交于两个对径点；若按德国数学家费利克斯·克莱因（Felix Klein，1849—1925）于 1871 年提出的射影方案将每一对对径点等同为同一个「点」，则得到单椭圆几何（实射影空间），其中任意两个相异点重新恢复为唯一确定一条直线。'
          }
        ]
      },
      {
        id: 'sh-ch03-p24',
        type: 'paragraph',
        num: '§ 24',
        fr: 'Il y a une sorte d’opposition entre la géométrie de Riemann et celle de Lobatchevsky.',
        zh: '在黎曼几何与罗巴切夫斯基几何之间，存在着某种对立关系。'
      },
      {
        id: 'sh-ch03-p25',
        type: 'paragraph',
        num: '§ 25',
        fr: 'Ainsi la somme des angles d’un triangle est :',
        zh: '例如，三角形的内角和：'
      },
      {
        id: 'sh-ch03-p26',
        type: 'paragraph',
        num: '§ 26',
        fr: 'Égale à deux droits dans la géométrie d’Euclide.',
        zh: '在欧几里得几何中等于两直角。'
      },
      {
        id: 'sh-ch03-p27',
        type: 'paragraph',
        num: '§ 27',
        fr: 'Plus petite que deux droits dans celle de Lobatchevsky.',
        zh: '在罗巴切夫斯基几何中小于两直角。'
      },
      {
        id: 'sh-ch03-p28',
        type: 'paragraph',
        num: '§ 28',
        fr: 'Plus grande que deux droits dans celle de Riemann.',
        zh: '在黎曼几何中大于两直角。'
      },
      {
        id: 'sh-ch03-p29',
        type: 'paragraph',
        num: '§ 29',
        fr: 'Le nombre des parallèles qu’on peut mener à une droite donnée par un point donné est égal :',
        zh: '过一已知点所能作出的与已知直线平行的直线条数：'
      },
      {
        id: 'sh-ch03-p30',
        type: 'paragraph',
        num: '§ 30',
        fr: 'À un dans la géométrie d’Euclide,',
        zh: '在欧几里得几何中等于一，'
      },
      {
        id: 'sh-ch03-p31',
        type: 'paragraph',
        num: '§ 31',
        fr: 'À zéro dans celle de Riemann,',
        zh: '在黎曼几何中等于零，'
      },
      {
        id: 'sh-ch03-p32',
        type: 'paragraph',
        num: '§ 32',
        fr: 'À l’infini dans celle de Lobatchevsky.',
        zh: '在罗巴切夫斯基几何中等于无穷多。'
      },
      {
        id: 'sh-ch03-p33',
        type: 'paragraph',
        num: '§ 33',
        fr: 'Ajoutons que l’espace de Riemann est fini, quoique sans limite, au sens donné plus haut à ces deux mots.',
        zh: '我们还可以补充一点：按照上文赋予这两个词的含义，黎曼空间虽然无界，却是有限的。'
      },
      {
        id: 'sh-ch03-p34',
        type: 'paragraph',
        num: '§ 34',
        fr: 'Les surfaces à courbure constante. — Une objection restait possible cependant. Les théorèmes de Lobatchevsky et de Riemann ne présentent aucune contradiction ; mais quelque nombreuses que soient les conséquences que ces deux géomètres ont tirées de leurs hypothèses, ils ont dû s’arrêter avant de les avoir toutes épuisées, car le nombre en serait infini ; qui nous dit alors que s’ils avaient poussé plus loin leurs déductions, ils n’auraient pas fini par arriver à quelque contradiction ?',
        zh: '**常曲率曲面**——不过，仍然可能存在一种诘难。罗巴切夫斯基与黎曼的定理固然没有呈现出任何矛盾；但无论这两位几何学家从各自的假设中引申出了多少推论，他们终归必须在穷尽全部推论之前停下脚步，因为推论的数目将是无穷的；那么谁敢向我们保证，倘若他们把演绎推得更远，最终不会碰上某个矛盾呢？'
      },
      {
        id: 'sh-ch03-p35',
        type: 'paragraph',
        num: '§ 35',
        fr: 'Cette difficulté n’existe pas pour la géométrie de Riemann, pourvu qu’on se borne à deux dimensions ; la géométrie de Riemann à deux dimensions ne diffère pas en effet, nous l’avons vu, de la géométrie sphérique, qui n’est qu’une branche de la géométrie ordinaire et qui est par conséquent en dehors de toute discussion.',
        zh: '只要局限于二维情形，这一困难对于黎曼几何并不存在；正如我们已经看到的，二维黎曼几何实际上同球面几何毫无二致，而球面几何不过是普通几何学的一个分支，因而完全不在争议之列。'
      },
      {
        id: 'sh-ch03-p36',
        type: 'paragraph',
        num: '§ 36',
        fr: 'M. Beltrami, en ramenant de même la géométrie de Lobatchevsky à deux dimensions à ne plus être qu’une branche de la géométrie ordinaire, a réfuté également l’objection en ce qui la concerne.',
        zh: '[贝尔特拉米先生]{#g-sh-c3-07}用同样的方式，将二维罗巴切夫斯基几何也归约为普通几何学的一个分支，从而就罗巴切夫斯基几何而言同样驳倒了上述诘难。',
        glosses: [
          {
            id: 'g-sh-c3-07',
            anchor: '贝尔特拉米先生',
            content:
              '欧金尼奥·贝尔特拉米（Eugenio Beltrami，1835—1900），意大利数学家。他在 1868 年发表的《非欧几何解释试论》（Saggio di interpretazione della geometria non-euclidea）中证明，罗巴切夫斯基平面上的局部内蕴几何，等价于三维欧几里得空间中常负高斯曲率曲面——尤其是曳物线绕其渐近线旋转所生成的伪球面（pseudosphère）——上的测地线几何。不过伪球面受限于赤道奇异棱，仅能局部实现双曲平面的一块区域；希尔伯特随后于 1901 年证明，完备的罗巴切夫斯基双曲平面不可能无奇点地光滑等距浸入三维欧几里得空间。'
          }
        ]
      },
      {
        id: 'sh-ch03-p37',
        type: 'paragraph',
        num: '§ 37',
        fr: 'Voici comment il y est parvenu. Considérons sur une surface une figure quelconque. Imaginons que cette figure soit tracée sur une toile flexible et inextensible appliquée sur cette surface, de telle façon que quand la toile se déplace et se déforme, les diverses lignes de cette figure puissent changer de forme, sans changer de longueur. En général, cette figure flexible et inextensible ne pourra se déplacer sans quitter la surface ; mais il y a certaines surfaces particulières pour lesquelles un pareil mouvement serait possible : ce sont les surfaces à courbure constante.',
        zh: '他是这样做到这一点的。考察曲面上任意一个图形。设想这个图形画在一块贴合于该曲面的柔韧而不可伸长的布帛上，使得当布帛移动并发生弯曲变形时，图形中的各条线可以改变形状，而长度保持不变。通常情况下，这样一个柔韧而不可伸长的图形若不脱离曲面便无法移动；但存在某些特殊的曲面，在其上这样的运动是可能的：它们就是**常曲率曲面**。'
      },
      {
        id: 'sh-ch03-p38',
        type: 'paragraph',
        num: '§ 38',
        fr: 'Si nous reprenons la comparaison que nous faisions plus haut et que nous imaginions des êtres sans épaisseur vivant sur une de ces surfaces, ils regarderont comme possible le mouvement d’une figure dont toutes les lignes conservent une longueur constante. Un pareil mouvement paraîtrait absurde, au contraire, à des animaux sans épaisseur vivant sur une surface à courbure variable.',
        zh: '倘若重拾我们上文的比喻，设想一些毫无厚度的生灵生活在这样一张曲面上，那么在它们看来，一个所有线条均保持恒定长度的图形发生运动乃是可能的事。相反，对于生活在变曲率曲面上的无厚度动物而言，这样的运动就会显得荒谬绝伦。'
      },
      {
        id: 'sh-ch03-p39',
        type: 'paragraph',
        num: '§ 39',
        fr: 'Ces surfaces à courbure constante sont de deux sortes :',
        zh: '这类常曲率曲面分为两种：'
      },
      {
        id: 'sh-ch03-p40',
        type: 'paragraph',
        num: '§ 40',
        fr: 'Les unes sont à courbure positive, et peuvent être déformées de façon à être appliquées sur une sphère. La géométrie de ces surfaces se réduit donc à la géométrie sphérique, qui est celle de Riemann.',
        zh: '一种具有正曲率，可以通过弯曲变形贴合到球面上。因此，这类曲面的几何学归约为球面几何，亦即黎曼的几何学。'
      },
      {
        id: 'sh-ch03-p41',
        type: 'paragraph',
        num: '§ 41',
        fr: 'Les autres sont à courbure négative. M. Beltrami a fait voir que la géométrie de ces surfaces n’est autre que celle de Lobatchevsky. Les géométries à deux dimensions de Riemann et de Lobatchevsky se trouvent donc rattachées à la géométrie euclidienne.',
        zh: '另一种具有负曲率。贝尔特拉米先生证明了，这类曲面的几何学不是别的，正是罗巴切夫斯基的几何学。于是，黎曼与罗巴切夫斯基的二维几何学便双双同欧几里得几何联结了起来。'
      },
      {
        id: 'sh-ch03-p42',
        type: 'paragraph',
        num: '§ 42',
        fr: 'Interprétation des géométries non euclidiennes. — Ainsi s’évanouit l’objection en ce qui concerne les géométries à deux dimensions.',
        zh: '**非欧几何的解释**——就这样，针对二维几何学的那项诘难烟消云散了。'
      },
      {
        id: 'sh-ch03-p43',
        type: 'paragraph',
        num: '§ 43',
        fr: 'Il serait aisé d’étendre le raisonnement de M. Beltrami aux géométries à trois dimensions. Les esprits que ne rebute pas l’espace à quatre dimensions n’y verront aucune difficulté, mais ils sont peu nombreux. Je préfère donc procéder autrement.',
        zh: '将贝尔特拉米先生的推理推广到三维几何学本非难事。那些对四维空间毫不怵头的头脑不会觉得这有什么困难，但这样的人为数寥寥。因此，我宁愿采取另一种途径。'
      },
      {
        id: 'sh-ch03-p44',
        type: 'paragraph',
        num: '§ 44',
        fr: 'Considérons un certain plan que j’appellerai fondamental et construisons une sorte de dictionnaire, en faisant correspondre chacun à chacun une double suite de termes écrits dans deux colonnes, de la même façon que se correspondent dans les dictionnaires ordinaires les mots de deux langues dont la signification est la même :',
        zh: '让我们考察某一个我将称之为「基准平面」的平面，并编纂[一部特殊的词典]{#g-sh-c3-08}，使分列两栏的两组术语一一对应起来，正如同普通词典里意义相同的两种语言的语词彼此对应那样：',
        glosses: [
          {
            id: 'g-sh-c3-08',
            anchor: '一部特殊的词典',
            content:
              '即庞加莱「欧几里得—罗巴切夫斯基几何词典」及其上半空间模型（连同经球面反演等价的圆盘模型）。庞加莱在 1881—1882 年发表于《数学学报》（Acta Mathematica）的富克斯函数（fonctions fuchsiennes）系列论文中证明，欧几里得上半空间在保持基准平面不变的球面反演与共形变换群作用下，其变换群与罗巴切夫斯基三维空间的刚体位移群是同构的；双曲几何由此嵌入三维初等欧几里得几何内部，确立了非欧几何相对于欧几里得几何的相对相容性。'
          }
        ]
      },
      {
        id: 'sh-ch03-p45',
        type: 'paragraph',
        num: '§ 45',
        fr: 'Espace — Portion de l’espace située au-dessus du plan fondamental.',
        zh: '**空间**——位于基准平面上方的那部分空间。'
      },
      {
        id: 'sh-ch03-p46',
        type: 'paragraph',
        num: '§ 46',
        fr: 'Plan — Sphère coupant orthogonalement le plan fondamental.',
        zh: '**平面**——正交截割基准平面的球面。'
      },
      {
        id: 'sh-ch03-p47',
        type: 'paragraph',
        num: '§ 47',
        fr: 'Droite — Cercle coupant orthogonalement le plan fondamental.',
        zh: '**直线**——正交截割基准平面的圆。'
      },
      {
        id: 'sh-ch03-p48',
        type: 'paragraph',
        num: '§ 48',
        fr: 'Sphère — Sphère.',
        zh: '**球面**——球面。'
      },
      {
        id: 'sh-ch03-p49',
        type: 'paragraph',
        num: '§ 49',
        fr: 'Cercle — Cercle.',
        zh: '**圆**——圆。'
      },
      {
        id: 'sh-ch03-p50',
        type: 'paragraph',
        num: '§ 50',
        fr: 'Angle — Angle.',
        zh: '**角**——角。'
      },
      {
        id: 'sh-ch03-p51',
        type: 'paragraph',
        num: '§ 51',
        fr: 'Distance de deux points — Logarithme du rapport anharmonique de ces deux points et des intersections du plan fondamental avec un cercle passant par ces deux points et le coupant orthogonalement.',
        zh: '**两点间的距离**——这两点，连同过此二点且正交截割基准平面的圆在该平面上的两个交点，所成[非调和比]{#g-sh-c3-09}的对数。',
        glosses: [
          {
            id: 'g-sh-c3-09',
            anchor: '非调和比',
            content:
              '法语 rapport anharmonique，现代射影几何通称交比（cross-ratio），该术语由法国几何学家米歇尔·沙尔（Michel Chasles，1793—1880）在《几何学方法起源与发展历史概观》（1837）中创制。设过上半空间内 A、B 两点且正交截割基准平面的圆与基准平面交于 P、Q 两点，则四点交比 (AP ÷ BP) ÷ (AQ ÷ BQ) 在一切保持基准平面不变的共形变换下恒定不变；对其取对数后，同一条非欧测地线上的分段距离即满足可加性。'
          }
        ]
      },
      {
        id: 'sh-ch03-p52',
        type: 'paragraph',
        num: '§ 52',
        fr: 'etc… — etc…',
        zh: '**以此类推**——以此类推。'
      },
      {
        id: 'sh-ch03-p53',
        type: 'paragraph',
        num: '§ 53',
        fr: 'Prenons ensuite les théorèmes de Lobatchevsky et traduisons-les à l’aide de ce dictionnaire comme nous traduirions un texte allemand à l’aide d’un dictionnaire allemand-français. Nous obtiendrons ainsi des théorèmes de la géométrie ordinaire.',
        zh: '接下来，让我们取出罗巴切夫斯基的各条定理，借助这部词典将它们翻译过来，就像我们借助一部德法词典翻译一篇德文文本那样。这样一来，我们便会得到普通几何学的各条定理。'
      },
      {
        id: 'sh-ch03-p54',
        type: 'paragraph',
        num: '§ 54',
        fr: 'Par exemple, ce théorème de Lobatchevsky : « la somme des angles d’un triangle est plus petite que deux droits » se traduit ainsi : « Si un triangle curviligne a pour côtés des arcs de cercle qui prolongés iraient couper orthogonalement le plan fondamental, la somme des angles de ce triangle curviligne sera plus petite que deux droits ». Ainsi, quelque loin que l’on pousse les conséquences des hypothèses de Lobatchevsky, on ne sera jamais conduit à une contradiction. En effet, si deux théorèmes de Lobatchevsky étaient contradictoires, il en serait de même des traductions de ces deux théorèmes, faites à l’aide de notre dictionnaire, mais ces traductions sont des théorèmes de géométrie ordinaire et personne ne doute que la géométrie ordinaire ne soit exempte de contradiction. D’où nous vient cette certitude et est-elle justifiée ? C’est là une question que je ne saurais traiter ici, car elle exigerait quelques développements. Il ne reste donc plus rien de l’objection que j’ai formulée plus haut.',
        zh: '举例来说，罗巴切夫斯基的这条定理：「三角形的内角和小于两直角」，可翻译如下：「若一个曲边三角形以若干圆弧为边，而这些圆弧延长后均正交截割基准平面，则该曲边三角形的内角和小于两直角。」由此可见，无论把罗巴切夫斯基各项假设的推论推演到多远，都绝不会导出矛盾。事实上，倘若罗巴切夫斯基的两条定理相互矛盾，那么借助我们的词典对这两条定理所作的译文也必定相互矛盾；然而这些译文乃是普通几何学的定理，而没有任何人怀疑普通几何学是不含矛盾的。这种确信从何而来，它又是否正当？这个问题我无法在此探讨，因为它需要一番铺陈。于是，我上文提出的那项诘难便彻底不复存在了。'
      },
      {
        id: 'sh-ch03-p55',
        type: 'paragraph',
        num: '§ 55',
        fr: 'Ce n’est pas tout. La géométrie de Lobatchevsky, susceptible d’une interprétation concrète, cesse d’être un vain exercice de logique et peut recevoir des applications ; je n’ai pas le temps de parler ici de ces applications ni du parti que M. Klein et moi en avons tiré pour l’intégration des équations linéaires.',
        zh: '不仅如此。罗巴切夫斯基几何既然容许一种具体的解释，便不再是一场空洞的逻辑操练，而是可以付诸应用；我在此无暇详谈这些应用，也无暇细述[克莱因先生与我本人如何利用它来求解线性方程的积分]{#g-sh-c3-10}。',
        glosses: [
          {
            id: 'g-sh-c3-10',
            anchor: '克莱因先生与我本人如何利用它来求解线性方程的积分',
            content:
              '1881—1882 年间，庞加莱与费利克斯·克莱因围绕自守函数（庞加莱称富克斯函数与克莱因函数）展开通信与竞争：二人利用双曲平面的非欧多边形镶嵌与离散变换群构造出自守函数，借此实现了具有代数系数的复域高阶线性常微分方程及代数曲线的全局单值化积分。'
          }
        ]
      },
      {
        id: 'sh-ch03-p56',
        type: 'paragraph',
        num: '§ 56',
        fr: 'Cette interprétation n’est d’ailleurs pas unique, et l’on pourrait établir plusieurs dictionnaires analogues à celui qui précède et qui tous permettraient par une simple « traduction » de transformer les théorèmes de Lobatchevsky en théorèmes de géométrie ordinaire.',
        zh: '况且，这种解释并非唯一；人们还可以编纂出好几部与上文类似的词典，每一部都能通过简单的「翻译」，把罗巴切夫斯基的定理转化为普通几何学的定理。'
      },
      {
        id: 'sh-ch03-p57',
        type: 'paragraph',
        num: '§ 57',
        fr: 'Les axiomes implicites. — Les axiomes explicitement énoncés dans les traités sont-ils les seuls fondements de la géométrie ? On peut être assuré du contraire en voyant qu’après les avoir successivement abandonnés on laisse encore debout quelques propositions communes aux théories d’Euclide, de Lobatchevsky et de Riemann. Ces propositions doivent reposer sur quelques prémisses que les géomètres admettent sans les énoncer. Il est intéressant de chercher à les dégager des démonstrations classiques.',
        zh: '**隐含公理**——教科书中明确陈述的那些公理，就是几何学的全部根基吗？看到把它们逐一舍弃之后，依然有一些为欧几里得、罗巴切夫斯基与黎曼三种理论所共有的命题屹立不倒，我们便可以断定事实绝非如此。这些命题必定建立在几何学家不加明言便已默认了的若干前提之上。试着将它们从经典证明中剥离出来，是一件饶有趣味的工作。'
      },
      {
        id: 'sh-ch03-p58',
        type: 'paragraph',
        num: '§ 58',
        fr: 'Stuart Mill a prétendu que toute définition contient un axiome, puisqu’en définissant on affirme implicitement l’existence de l’objet défini. C’est aller beaucoup trop loin ; il est rare qu’en mathématiques on donne une définition sans la faire suivre par la démonstration de l’existence de l’objet défini, et quand on s’en dispense, c’est généralement que le lecteur y peut aisément suppléer. Il ne faut pas oublier que le mot existence n’a pas le même sens quand il s’agit d’un être mathématique et quand il est question d’un objet matériel. Un être mathématique existe, pourvu que sa définition n’implique pas contradiction, soit en elle-même, soit avec les propositions antérieurement admises.',
        zh: '[斯图尔特·密尔]{#g-sh-c3-11}曾宣称，一切定义都包含一条公理，因为人们在下定义时便暗自断定了所定义对象的存在。这话未免走得太远了；在数学中，很少有人只给出定义而不紧接着证明所定义对象的存在，偶有省去不证之处，通常也是因为读者极易自行补足。切莫忘记，「存在」一词在谈论数学实体时与谈论物质对象时并不具有相同的含义。一个数学实体只要其定义无论在自身内部、还是与先前已承认的命题之间均不蕴涵矛盾，它便存在。',
        glosses: [
          {
            id: 'g-sh-c3-11',
            anchor: '斯图尔特·密尔',
            content:
              '约翰·斯图尔特·密尔在《逻辑体系》第一卷第八章第 5—6 节（《论定义》）中区分单纯阐明词义的「名义定义」与暗含存在断定的定义，主张欧几里得对点、直线、圆与平行线的定义实质上同时预设了相应经验对象在自然界中的近似存在。'
          }
        ]
      },
      {
        id: 'sh-ch03-p59',
        type: 'paragraph',
        num: '§ 59',
        fr: 'Mais si l’observation de Stuart Mill ne saurait s’appliquer à toutes les définitions, elle n’en est pas moins juste pour quelques-unes d’entre elles. On définit quelquefois le plan de la manière suivante :',
        zh: '不过，斯图尔特·密尔的看法虽然不能适用于所有定义，对其中少数定义却不失中肯。人们有时按如下方式定义平面：'
      },
      {
        id: 'sh-ch03-p60',
        type: 'paragraph',
        num: '§ 60',
        fr: 'Le plan est une surface telle que la droite qui joint deux quelconques de ses points est tout entière sur cette surface.',
        zh: '**平面是这样一种曲面：连接其上任意两点的直线整条都落在该曲面上。**'
      },
      {
        id: 'sh-ch03-p61',
        type: 'paragraph',
        num: '§ 61',
        fr: 'Cette définition cache manifestement un nouvel axiome ; on pourrait, il est vrai, la changer, et cela vaudrait mieux, mais alors il faudrait énoncer l’axiome explicitement.',
        zh: '这一定义显然暗藏着一条新公理；诚然，人们可以改动这个定义，而且改掉更好，但那样一来就必须把这条公理明确陈述出来。'
      },
      {
        id: 'sh-ch03-p62',
        type: 'paragraph',
        num: '§ 62',
        fr: 'D’autres définitions peuvent donner lieu à des réflexions non moins importantes.',
        zh: '另一些定义同样会引发毫不逊色的重要省思。'
      },
      {
        id: 'sh-ch03-p63',
        type: 'paragraph',
        num: '§ 63',
        fr: 'Telle est par exemple celle de l’égalité de deux figures : deux figures sont égales quand on peut les superposer ; pour les superposer il faut déplacer l’une d’elles jusqu’à ce qu’elle coïncide avec l’autre ; mais comment faut-il la déplacer ? Si nous le demandions, on nous répondrait sans doute qu’on doit le faire sans la déformer et à la façon d’un solide invariable. Le cercle vicieux serait alors évident.',
        zh: '例如关于两个图形相等的定义便是如此：当两个图形能够[彼此叠合]{#g-sh-c3-12}时，它们就是相等的；要使它们叠合，就必须移动其中一个图形直至它与另一个重合；可是应当怎样移动它呢？倘若我们追问下去，人们无疑会回答说：应当像移动一块不变固体那样，在不使它发生形变的前提下移动它。这样一来，恶性循环便昭然若揭了。',
        glosses: [
          {
            id: 'g-sh-c3-12',
            anchor: '彼此叠合',
            content:
              '典出欧几里得《几何原本》第一卷公理四（「彼此重合之物相互相等」，καὶ τὰ ἐφαρμόζοντα ἐπ’ ἄλληλα ἴσα ἀλλήλοις ἐστίν）及第一卷命题四（边角边三角形全等判定）。十六世纪法国数学家雅各布·佩勒蒂埃（Jacques Peletier，1557）已批评叠合法（superpositio）将机械搬移混入纯粹几何；希尔伯特在《几何基础》（1899）中遂放弃叠合证明，将边角边关系直接列为合同公理（公理 III.6）。'
          }
        ]
      },
      {
        id: 'sh-ch03-p64',
        type: 'paragraph',
        num: '§ 64',
        fr: 'En fait, cette définition ne définit rien ; elle n’aurait aucun sens pour un être qui habiterait un monde où il n’y aurait que des fluides. Si elle nous semble claire, c’est que nous sommes habitués aux propriétés des solides naturels qui ne diffèrent pas beaucoup de celles des solides idéaux dont toutes les dimensions sont invariables.',
        zh: '事实上，这个定义什么也没有定义；对于一个居住在唯有流体之世界里的生灵来说，它根本毫无意义。它之所以在我们看来清晰明白，只是因为我们习见了自然固体的种种性质，而自然固体的性质同各个尺度均恒定不变的理想固体相差无几。'
      },
      {
        id: 'sh-ch03-p65',
        type: 'paragraph',
        num: '§ 65',
        fr: 'Cependant, tout imparfaite qu’elle soit, cette définition implique un axiome.',
        zh: '然而，尽管这个定义如此不完备，它却蕴涵着一条公理。'
      },
      {
        id: 'sh-ch03-p66',
        type: 'paragraph',
        num: '§ 66',
        fr: 'La possibilité du mouvement d’une figure invariable n’est pas une vérité évidente par elle-même, ou du moins elle ne l’est qu’à la façon du postulatum d’Euclide et non comme le serait un jugement analytique a priori.',
        zh: '不变图形发生运动的可能性，并非一条不证自明的真理；或者说，它至多只在欧几里得公设的意义上显得不证自明，而绝不像一条先天分析判断那样不证自明。'
      },
      {
        id: 'sh-ch03-p67',
        type: 'paragraph',
        num: '§ 67',
        fr: 'D’ailleurs, en étudiant les définitions et les démonstrations de la géométrie, on voit qu’on est obligé d’admettre, sans les démontrer, non seulement la possibilité de ce mouvement, mais encore quelques-unes de ses propriétés.',
        zh: '不仅如此，只要考察一下几何学的各项定义与证明便会看到，人们不得不未经证明便予以承认的，不仅有这种运动的可能性，还有它的若干性质。'
      },
      {
        id: 'sh-ch03-p68',
        type: 'paragraph',
        num: '§ 68',
        fr: 'C’est ce qui ressort d’abord de la définition de la ligne droite. On en a donné beaucoup de défectueuses, mais la véritable est celle qui est sous-entendue dans toutes les démonstrations où la ligne droite intervient :',
        zh: '这一点首先从直线的定义中显现出来。人们曾给出过许多有缺陷的直线定义，但真正起作用的定义，是所有涉及直线的证明中暗自预设的那一个：'
      },
      {
        id: 'sh-ch03-p69',
        type: 'paragraph',
        num: '§ 69',
        fr: '« Il peut arriver que le mouvement d’une figure invariable soit tel que tous les points d’une ligne appartenant à cette figure restent immobiles pendant que tous les points situés en dehors de cette ligne se meuvent. Une pareille ligne s’appellera une ligne droite ». Nous avons à dessein, dans cet énoncé, séparé la définition de l’axiome qu’elle implique.',
        zh: '「不变图形的运动有可能呈现如下情形：属于该图形的某一条线上的所有点均保持静止，而位于这条线之外的所有点都在运动。这样一条线就叫做直线。」在这一表述中，我们特意将定义与它所蕴涵的公理拆分开来了。'
      },
      {
        id: 'sh-ch03-p70',
        type: 'paragraph',
        num: '§ 70',
        fr: 'Beaucoup de démonstrations, telles que celles des cas d’égalité des triangles, de la possibilité d’abaisser une perpendiculaire d’un point sur une droite, supposent des propositions qu’on se dispense d’énoncer, puisqu’elles obligent à admettre qu’il est possible de transporter une figure dans l’espace d’une certaine manière.',
        zh: '许多证明——诸如三角形全等各判定定理的证明、从一点向一直线作垂线之可能性的证明——都预设了若干人们省去不表的命题，因为它们都迫使我们承认：可以按某种特定方式将图形在空间中搬移。'
      },
      {
        id: 'sh-ch03-p71',
        type: 'paragraph',
        num: '§ 71',
        fr: 'La quatrième géométrie. — Parmi ces axiomes implicites, il en est un qui me semble mériter quelque attention, parce qu’en l’abandonnant, on peut construire une quatrième géométrie aussi cohérente que celles d’Euclide, de Lobatchevsky et de Riemann.',
        zh: '**第四种几何**——在这些隐含公理当中，有一条在我看来颇值得留意，因为一旦舍弃它，人们便能构筑起第四种几何学，其自洽程度丝毫不亚于欧几里得、罗巴切夫斯基与黎曼的几何学。'
      },
      {
        id: 'sh-ch03-p72',
        type: 'paragraph',
        num: '§ 72',
        fr: 'Pour démontrer que l’on peut toujours élever en un point A une perpendiculaire à une droite AB, on considère une droite AC mobile autour du point A et primitivement confondue avec la droite fixe AB ; et on la fait tourner autour du point A jusqu’à ce qu’elle vienne dans le prolongement de AB.',
        zh: '为了证明总能过直线 AB 上一点 A 作 AB 的垂线，人们考察一条可绕点 A 转动、且最初与定直线 AB 重合的动直线 AC；然后令它绕点 A 旋转，直至落到 AB 的延长线上。'
      },
      {
        id: 'sh-ch03-p73',
        type: 'paragraph',
        num: '§ 73',
        fr: 'On suppose ainsi deux propositions : d’abord qu’une pareille rotation est possible, et ensuite qu’elle peut se continuer jusqu’à ce que les deux droites viennent dans le prolongement l’une de l’autre.',
        zh: '这里其实假定了两条命题：首先，这样的旋转是可能的；其次，这一旋转可以一直持续下去，直至两条直线互成延长线为止。'
      },
      {
        id: 'sh-ch03-p74',
        type: 'paragraph',
        num: '§ 74',
        fr: 'Si l’on admet le premier point et que l’on rejette le second, on est conduit à une suite de théorèmes encore plus étranges que ceux de Lobatchevsky et de Riemann, mais également exempts de contradiction.',
        zh: '倘若承认第一点而拒斥第二点，人们就会导出一连串比罗巴切夫斯基和黎曼的定理更加奇特、却同样不含任何矛盾的定理。'
      },
      {
        id: 'sh-ch03-p75',
        type: 'paragraph',
        num: '§ 75',
        fr: 'Je ne citerai qu’un de ces théorèmes et je ne choisirai pas le plus singulier : une droite réelle peut être perpendiculaire à elle-même.',
        zh: '我只举其中一条定理，而且还不是最离奇的一条：[一条实直线可以垂直于它自身]{#g-sh-c3-13}。',
        glosses: [
          {
            id: 'g-sh-c3-13',
            anchor: '一条实直线可以垂直于它自身',
            content:
              '庞加莱在 1891 年论文中构想的这门「第四种几何」，即带有不定度规（如二次型 x² − y²）的二维或三维洛伦兹几何（单叶双曲面或伪欧几里得几何）。当绕一点的变换群不再是闭合的欧几里得圆周旋转群，而是受两条渐近零锥线阻隔的双曲旋转群（洛伦兹变换群）时，动直线无法越过零锥边界转至自身的反向延长线上；而位于零锥方向上的实直线（即后世相对论中的类光测地线）因自内积为零，按正交定义恰好与自身垂直。这一群论几何构想比赫尔曼·闵可夫斯基（Hermann Minkowski）1908 年提出四维时空几何早了十七年。'
          }
        ]
      },
      {
        id: 'sh-ch03-p76',
        type: 'paragraph',
        num: '§ 76',
        fr: 'Le Théorème de Lie. — Le nombre des axiomes implicitement introduits dans les démonstrations classiques est plus grand qu’il ne serait nécessaire, et on cherche à le réduire au minimum. M. Hilbert semble avoir donné la solution définitive de ce problème. On pouvait a priori se demander d’abord si cette réduction est possible, si le nombre des axiomes nécessaires et celui des géométries imaginables n’est pas infini.',
        zh: '**李氏定理**——经典证明中暗自引入的公理数目超出了必要的限度，人们一直在设法将它缩减至最少。希尔伯特先生似乎已经给出了这一问题的最终解答。起初人们本可以先天地发问：这种缩减究竟是否可能？所需公理的数目以及可设想之几何学的数目，会不会是无穷的？'
      },
      {
        id: 'sh-ch03-p77',
        type: 'paragraph',
        num: '§ 77',
        fr: 'Un théorème de M. Sophus Lie domine toute cette discussion. On peut l’énoncer ainsi :',
        zh: '[索福斯·李先生的一条定理]{#g-sh-c3-14}统摄着整场讨论。我们可以将它表述如下：',
        glosses: [
          {
            id: 'g-sh-c3-14',
            anchor: '索福斯·李先生的一条定理',
            content:
              '索福斯·李（Sophus Lie，1842—1899），挪威数学家、连续变换群（李群与李代数）理论创立者。1868 年亥姆霍兹在《论作为几何学基础的事实》中提出用刚体自由移动公理刻画空间度量的纲领，但原证存有可微性预设与分析漏洞；索福斯·李于 1886—1890 年间以连续位移群理论严格重证了该分类定理（收入其与弗里德里希·恩格尔合著的《变换群理论》Theorie der Transformationsgruppen 第三卷，1893）。亥姆霍兹—李定理表明，在 n 维空间中刚体位移群的自由度上界为 p ≤ n(n + 1) ÷ 2，凡容许不变图形自由移动的三维空间，其相容的度量几何仅有常曲率群族等有限几种。'
          }
        ]
      },
      {
        id: 'sh-ch03-p78',
        type: 'paragraph',
        num: '§ 78',
        fr: 'Supposons qu’on admette les prémisses suivantes :',
        zh: '假定我们承认以下前提：'
      },
      {
        id: 'sh-ch03-p79',
        type: 'paragraph',
        num: '§ 79',
        fr: '1° L’espace a n dimensions ;',
        zh: '第一，空间具有 n 个维度；'
      },
      {
        id: 'sh-ch03-p80',
        type: 'paragraph',
        num: '§ 80',
        fr: '2° Le mouvement d’une figure invariable est possible.',
        zh: '第二，不变图形的运动是可能的；'
      },
      {
        id: 'sh-ch03-p81',
        type: 'paragraph',
        num: '§ 81',
        fr: '3° Il faut p conditions pour déterminer la position de cette figure dans l’espace.',
        zh: '第三，确定该图形在空间中的位置需要 p 个条件。'
      },
      {
        id: 'sh-ch03-p82',
        type: 'paragraph',
        num: '§ 82',
        fr: 'Le nombre des géométries compatibles avec ces prémisses sera limité.',
        zh: '**与这些前提相容的几何学数目将是有限的。**'
      },
      {
        id: 'sh-ch03-p83',
        type: 'paragraph',
        num: '§ 83',
        fr: 'Je puis même ajouter que si n est donné, on peut assigner à p une limite supérieure.',
        zh: '我甚至可以补充说，一旦给定 n，便可为 p 指定一个上界。'
      },
      {
        id: 'sh-ch03-p84',
        type: 'paragraph',
        num: '§ 84',
        fr: 'Si donc on admet la possibilité du mouvement, on ne pourra inventer qu’un nombre fini (et même assez restreint) de géométries à trois dimensions.',
        zh: '因此，只要承认运动的可能性，人们便只能发明出有限多种（甚或相当有限的几种）三维几何学。'
      },
      {
        id: 'sh-ch03-p85',
        type: 'paragraph',
        num: '§ 85',
        fr: 'Les géométries de Riemann. — Cependant ce résultat semble contredit par Riemann, car ce savant construit une infinité de géométries différentes, et celle à laquelle on donne ordinairement son nom n’en est qu’un cas particulier.',
        zh: '**黎曼的诸种几何**——然而，这一结果似乎与黎曼相抵牾，因为这位学者构筑出了无穷多种不同的几何学，通常冠以他名字的那一种不过是其中的一个特例而已。'
      },
      {
        id: 'sh-ch03-p86',
        type: 'paragraph',
        num: '§ 86',
        fr: 'Tout dépend, dit-il, de la façon dont on définit la longueur d’une courbe. Or il y a une infinité de manières de définir cette longueur, et chacune d’elles peut devenir le point de départ d’une nouvelle géométrie.',
        zh: '他说，一切都取决于人们如何定义曲线的长度。而定义这一长度的方式有无穷多种，每一种方式都可以成为一门新几何学的起点。'
      },
      {
        id: 'sh-ch03-p87',
        type: 'paragraph',
        num: '§ 87',
        fr: 'Cela est parfaitement exact, mais la plupart de ces définitions sont incompatibles avec le mouvement d’une figure invariable, que l’on suppose possible dans le théorème de Lie. Ces géométries de Riemann, si intéressantes à divers titres, ne pourraient donc jamais être que purement analytiques et ne se prêteraient pas à des démonstrations analogues à celles d’Euclide.',
        zh: '这话完全确切；但其中绝大多数定义都同李氏定理中假定为可能的「不变图形的运动」不相容。因此，黎曼的这些几何学尽管在诸多方面饶有趣味，却永远只能是纯粹分析性的，而无法采用类似于欧几里得那样的几何证明。'
      },
      {
        id: 'sh-ch03-p88',
        type: 'paragraph',
        num: '§ 88',
        fr: 'Les Géométries de Hilbert. — Enfin M. Veronese et M. Hilbert ont imaginé de nouvelles géométries plus étranges encore, qu’ils appellent non-archimédiennes. Ils les construisent en rejetant l’axiome d’Archimède en vertu duquel toute longueur donnée, multipliée par un entier suffisamment grand, finira par surpasser toute autre longueur donnée si grande qu’elle soit. Sur une droite non archimédienne, les points de notre géométrie ordinaire existent tous, mais il y en a une infinité d’autres qui viennent s’intercaler entre eux, de telle sorte qu’entre deux segments, que les géomètres de la vieille école auraient regardés comme contigus, on puisse caser une infinité de points nouveaux. En un mot, l’espace non archimédien n’est plus un continu du second ordre, pour employer le langage du chapitre précédent, mais un continu du troisième ordre.',
        zh: '**希尔伯特几何**——最后，维罗内塞先生与希尔伯特先生还构想出了更加奇异的新几何学，称之为[非阿基米德几何]{#g-sh-c3-15}。他们通过拒斥阿基米德公理来构筑这类几何学——依据阿基米德公理，任意给定的长度乘以足够大的整数，终将超过任何其他给定的长度，无论后者有多大。在一条非阿基米德直线上，我们普通几何学中的所有点依然悉数存在，但更有无穷多个其他的点插进它们之间，以至于在旧派几何学家原本视作彼此毗邻的两段线段之间，仍可塞入无穷多个新点。总而言之，借用上一章的术语来说，非阿基米德空间已不再是第二级连续统，而是第三级连续统。',
        glosses: [
          {
            id: 'g-sh-c3-15',
            anchor: '非阿基米德几何',
            content:
              '意大利几何学家朱塞佩·维罗内塞（Giuseppe Veronese，1854—1917）于《几何学基础》（Fondamenti di geometria，1891）中率先系统引入含实无穷小与无穷大线段的非阿基米德几何；希尔伯特则在《几何基础》（Grundlagen der Geometrie，1899）中将几何公理划分为结合、顺序、合同、平行与连续五组，并借助含不定元 t 的代数函数有序域显式构造出不满足阿基米德公理的模型，用以检验帕斯卡定理与德萨格定理对连续公理的逻辑依赖性。庞加莱于 1902 年 5 月在《学者杂志》（Journal des Savants）撰文评介希尔伯特此书，并在本书定稿中增入了本节。'
          }
        ]
      },
      {
        id: 'sh-ch03-p89',
        type: 'paragraph',
        num: '§ 89',
        fr: 'De la nature des axiomes. — La plupart des mathématiciens ne regardent la géométrie de Lobatchevsky que comme une simple curiosité logique ; quelques-uns d’entre eux sont allés plus loin cependant. Puisque plusieurs géométries sont possibles, est-il certain que ce soit la nôtre qui soit vraie ? L’expérience nous apprend sans doute que la somme des angles d’un triangle est égale à deux droits ; mais c’est parce que nous n’opérons que sur des triangles trop petits ; la différence, d’après Lobatchevsky, est proportionnelle à la surface du triangle : ne pourra-t-elle devenir sensible quand nous opérerons sur des triangles plus grands ou quand nos mesures deviendront plus précises ? La géométrie euclidienne ne serait ainsi qu’une géométrie provisoire.',
        zh: '**论公理的本性**——大多数数学家只把罗巴切夫斯基几何当作一桩单纯的逻辑奇观；但他们当中也有少数人走得更远。既然多种几何学都是可能的，难道就能肯定唯独我们这一种几何学为真吗？经验固然告诉我们三角形的内角和等于两直角，但那只是因为我们所测量的三角形太小了；按照罗巴切夫斯基的理论，内角和与两直角之差同三角形的面积成正比：[当我们对更大的三角形进行测量，或者当我们的测量变得更加精密时]{#g-sh-c3-16}，这一差值难道不会变得显著可感吗？若是那样，欧几里得几何就不过是一门权宜的几何学罢了。',
        glosses: [
          {
            id: 'g-sh-c3-16',
            anchor: '当我们对更大的三角形进行测量，或者当我们的测量变得更加精密时',
            content:
              '十九世纪初叶，德国法学家费迪南德·卡尔·施韦卡特（Ferdinand Karl Schweikart，1818）与其外甥弗朗茨·陶里努斯（Franz Taurinus，1825—1826）在同高斯的通信中曾探讨尺度参数极大时小三角形接近欧几里得性质的「星界几何」（Astralgeometrie）。1821 至 1825 年间，高斯主持汉诺威王国大地三角测量，使用自制的回照器（Heliotrop）实测连接布罗肯峰、霍埃哈根峰与因塞尔斯贝格峰的巨型地面三角形（三边长约 69、85、107 千米），在扣除地球椭球面球面角超后，内角和与两直角的残差始终落入经纬仪观测误差范围之内。'
          }
        ]
      },
      {
        id: 'sh-ch03-p90',
        type: 'paragraph',
        num: '§ 90',
        fr: 'Pour discuter cette opinion, nous devons d’abord nous demander quelle est la nature des axiomes géométriques.',
        zh: '要讨论这种看法，我们首先必须追问：几何公理的本性究竟是什么？'
      },
      {
        id: 'sh-ch03-p91',
        type: 'paragraph',
        num: '§ 91',
        fr: 'Sont-ce des jugements synthétiques à priori, comme disait Kant ?',
        zh: '它们像康德所说的那样，是先天综合判断吗？'
      },
      {
        id: 'sh-ch03-p92',
        type: 'paragraph',
        num: '§ 92',
        fr: 'Ils s’imposeraient alors à nous avec une telle force, que nous ne pourrions concevoir la proposition contraire, ni bâtir sur elle un édifice théorique. Il n’y aurait pas de géométrie non euclidienne.',
        zh: '倘若如此，它们就会以不可抗拒的力量强加于我们，使我们既无法设想相反的命题，也无法在其上构筑起一座理论大厦。那样也就不会有非欧几何了。'
      },
      {
        id: 'sh-ch03-p93',
        type: 'paragraph',
        num: '§ 93',
        fr: 'Pour s’en convaincre, qu’on prenne un véritable jugement synthétique à priori, par exemple celui-ci, dont nous avons vu au chapitre premier le rôle prépondérant :',
        zh: '为了确信这一点，不妨取一条真正的先天综合判断为例——我们在第一章中已经见识过它的主导地位：'
      },
      {
        id: 'sh-ch03-p94',
        type: 'paragraph',
        num: '§ 94',
        fr: 'Si un théorème est vrai pour le nombre 1, si on a démontré qu’il est vrai de n + 1, pourvu qu’il le soit de n, il sera vrai de tous les nombres entiers positifs.',
        zh: '**倘若一条定理对数 1 成立，且已证明只要它对 n 成立便对 n + 1 成立，那么它就对一切正整数成立。**'
      },
      {
        id: 'sh-ch03-p95',
        type: 'paragraph',
        num: '§ 95',
        fr: 'Qu’on essaie ensuite de s’y soustraire et de fonder, en niant cette proposition, une fausse arithmétique analogue à la géométrie non euclidienne, — on n’y pourra pas parvenir ; on serait même tenté au premier abord de regarder ces jugements comme analytiques.',
        zh: '接着不妨试着挣脱这条判断，通过否定这一命题去创立一门类似于非欧几何的「伪算术」——人们绝不可能办到；初看之下，人们甚至会禁不住把这类判断视作分析判断。'
      },
      {
        id: 'sh-ch03-p96',
        type: 'paragraph',
        num: '§ 96',
        fr: 'D’ailleurs, reprenons notre fiction des animaux sans épaisseur ; nous ne pouvons guère admettre que ces êtres, s’ils ont l’esprit fait comme nous, adopteraient la géométrie euclidienne qui serait contredite par toute leur expérience ?',
        zh: '再者，让我们重拾先前关于无厚度动物的虚构设想：倘若这些生灵的心智构造与我们相同，我们总不至于认为它们仍会采纳同它们全部经验相抵触的欧几里得几何吧？'
      },
      {
        id: 'sh-ch03-p97',
        type: 'paragraph',
        num: '§ 97',
        fr: 'Devons-nous donc conclure que les axiomes de la géométrie sont des vérités expérimentales ? Mais on n’expérimente pas sur des droites ou des circonférences idéales ; on ne peut le faire que sur des objets matériels. Sur quoi porteraient donc les expériences qui serviraient de fondement à la géométrie ? La réponse est facile.',
        zh: '那么，我们是否应当由此断定几何学的公理是经验真理呢？然而人们并不能在理想的直线或圆周上做实验；实验只能在物质对象上进行。既然如此，充当几何学根基的实验究竟是以什么为对象的呢？答案显而易见。'
      },
      {
        id: 'sh-ch03-p98',
        type: 'paragraph',
        num: '§ 98',
        fr: 'Nous avons vu plus haut que l’on raisonne constamment comme si les figures géométriques se comportaient à la manière des solides. Ce que la géométrie emprunterait à l’expérience, ce seraient donc les propriétés de ces corps.',
        zh: '我们上文已经看到，人们在推理时始终仿佛几何图形的举止同固体一般无二。因此，几何学倘若向经验有所借取，所借取的就应当是这类物体的性质。'
      },
      {
        id: 'sh-ch03-p99',
        type: 'paragraph',
        num: '§ 99',
        fr: 'Les propriétés de la lumière et sa propagation rectiligne ont été aussi l’occasion d’où sont sorties quelques-unes des propositions de la géométrie, et en particulier celles de la géométrie projective, de sorte qu’à ce point de vue on serait tenté de dire que la géométrie métrique est l’étude des solides et que la géométrie projective est celle de la lumière.',
        zh: '光的种种性质及其直线传播，也曾是几何学若干命题——尤其是射影几何命题——得以诞生的契机；因而从这一视角来看，人们会禁不住说：度量几何是对固体的研究，而射影几何则是对光的研究。'
      },
      {
        id: 'sh-ch03-p100',
        type: 'paragraph',
        num: '§ 100',
        fr: 'Mais une difficulté subsiste, et elle est insurmontable. Si la géométrie était une science expérimentale, elle ne serait pas une science exacte, elle serait soumise à une continuelle révision. Que dis-je ? elle serait dès aujourd’hui convaincue d’erreur puisque nous savons qu’il n’existe pas de solide rigoureusement invariable.',
        zh: '但仍有一重困难挥之不去，而且不可逾越。倘若几何学是一门经验科学，它就不会是一门精确科学，而势必听凭永无休止的修正。岂止如此！它今天当场就会被判定有误，因为我们深知世上并不存在严格不变的固体。'
      },
      {
        id: 'sh-ch03-p101',
        type: 'paragraph',
        num: '§ 101',
        fr: 'Les axiomes géométriques ne sont donc ni des jugements synthétiques à priori ni des faits expérimentaux.',
        zh: '**因此，几何公理既不是先天综合判断，也不是经验事实。**'
      },
      {
        id: 'sh-ch03-p102',
        type: 'paragraph',
        num: '§ 102',
        fr: 'Ce sont des conventions ; notre choix, parmi toutes les conventions possibles, est guidé par des faits expérimentaux ; mais il reste libre et n’est limité que par la nécessité d’éviter toute contradiction. C’est ainsi que les postulats peuvent rester rigoureusement vrais quand même les lois expérimentales qui ont déterminé leur adoption ne sont qu’approximatives.',
        zh: '它们是一些**约定**；在一切可能的约定当中，我们的选择受经验事实的引导，但选择本身依然是自由的，仅受避免一切矛盾这一必要性的限制。正因如此，即便当初促使我们采纳这些公设的经验定律只是近似的，公设本身依然能够保持严格为真。'
      },
      {
        id: 'sh-ch03-p103',
        type: 'paragraph',
        num: '§ 103',
        fr: 'En d’autres termes, les axiomes de la géométrie (je ne parle pas de ceux de l’arithmétique) ne sont que des définitions déguisées.',
        zh: '换言之，几何学的公理（我不谈算术公理）[不过是一些乔装的定义]{#g-sh-c3-17}。',
        glosses: [
          {
            id: 'g-sh-c3-17',
            anchor: '不过是一些乔装的定义',
            content:
              '法语 définitions déguisées。将公理体系视为基本原始术语之「隐定义」（définitions implicites）的思想，最早可追溯至法国数学家约瑟夫·迪亚兹·热尔岗（Joseph Diaz Gergonne，1771—1859）1818 年发表于《纯粹与应用数学年刊》的《定义理论试论》（Essai sur la théorie des définitions）：热尔岗指出，一句含有单一未知词项的命题即可充当该词项的隐式定义，而一组相互关联的公设则共同界定了其中诸原始几何概念（如「直线」「距离」「叠合」）的用法；1899—1900 年间希尔伯特与弗雷格就《几何基础》展开通信论战时亦围绕这一公理定义观反复交锋。法国哲学界自 1899 年起遂将庞加莱在 1891 年论文中提出的这一立场称为几何「约定论」（conventionnalisme）。'
          }
        ]
      },
      {
        id: 'sh-ch03-p104',
        type: 'paragraph',
        num: '§ 104',
        fr: 'Dès lors, que doit-on penser de cette question : La géométrie euclidienne est-elle vraie ?',
        zh: '既然如此，对于「欧几里得几何是否为真？」这个问题，我们应当作何感想呢？'
      },
      {
        id: 'sh-ch03-p105',
        type: 'paragraph',
        num: '§ 105',
        fr: 'Elle n’a aucun sens.',
        zh: '**这个问题毫无意义。**'
      },
      {
        id: 'sh-ch03-p106',
        type: 'paragraph',
        num: '§ 106',
        fr: 'Autant demander si le système métrique est vrai et les anciennes mesures fausses ; si les coordonnées cartésiennes sont vraies et les coordonnées polaires fausses. Une géométrie ne peut pas être plus vraie qu’une autre ; elle peut seulement être plus commode.',
        zh: '这无异于追问[米制是否为真而旧制度量为伪]{#g-sh-c3-18}；追问笛卡尔坐标是否为真而极坐标为伪。**一种几何学不可能比另一种几何学更真；它只能是更为便利。**',
        glosses: [
          {
            id: 'g-sh-c3-18',
            anchor: '米制是否为真而旧制度量为伪',
            content:
              '法兰西第一共和国于 1795—1799 年间根据德朗布尔（Jean-Baptiste Delambre）与梅尚（Pierre Méchain）对敦刻尔克至巴塞罗那子午弧的实测结果，确立以地球极子午线四千万分之一为「米」的十进「米制」（système métrique），取代波旁王朝旧制度量（anciennes mesures）——在 1799 年以前的巴黎旧制中，大地测量与天文学的标准长度单位是图瓦兹（toise，一图瓦兹分为六王室法尺 pieds du roi，约合 1.949 米）。'
          }
        ]
      },
      {
        id: 'sh-ch03-p107',
        type: 'paragraph',
        num: '§ 107',
        fr: 'Or la géométrie euclidienne est et restera la plus commode :',
        zh: '而欧几里得几何现在是、将来也仍将是最为便利的：'
      },
      {
        id: 'sh-ch03-p108',
        type: 'paragraph',
        num: '§ 108',
        fr: '1° Parce qu’elle est la plus simple ; et elle n’est pas telle seulement par suite de nos habitudes d’esprit ou de je ne sais quelle intuition directe que nous aurions de l’espace euclidien ; elle est la plus simple en soi de même qu’un polynôme du premier degré est plus simple qu’un polynôme du second degré ; les formules de la trigonométrie sphérique sont plus compliquées que celles de la trigonométrie rectiligne, et elles paraîtraient encore telles à un analyste qui en ignorerait la signification géométrique.',
        zh: '第一，因为它最为简单；而且它之所以最为简单，并不仅仅源于我们的思维习惯，或源于我们对欧几里得空间所抱有的某种莫名其妙的直接直观；它是就其自身而言最为简单的，正如一次多项式比二次多项式更为简单一样：球面三角学的公式要比平面三角学的公式复杂得多，哪怕在一位全然不知其几何意义的分析学家眼里，它们也照样显得更为复杂。'
      },
      {
        id: 'sh-ch03-p109',
        type: 'paragraph',
        num: '§ 109',
        fr: '2° Parce qu’elle s’accorde assez bien avec les propriétés des solides naturels, ces corps dont se rapprochent nos membres et notre œil et avec lesquels nous faisons nos instruments de mesure.',
        zh: '第二，因为它与自然固体的性质吻合得相当好——我们的四肢与眼睛都接近于这类物体，而且我们正是用这类物体来制造测量仪器的。'
      }
    ]
  }
];
