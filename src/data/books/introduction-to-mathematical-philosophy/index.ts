import type { BookMeta } from '../../../types/book';
import { russellPart1Sections } from './part-1';
import { russellPart2Sections } from './part-2';
import { russellPart3Sections } from './part-3';

export const introductionToMathematicalPhilosophy: BookMeta = {
  slug: 'introduction-to-mathematical-philosophy',
  vol: 'VOL. 17',
  langOriginal: 'EN',
  categories: ['philosophy'],
  aiModel: 'Gemini-4-Carbon',
  titleOriginal: 'Introduction to Mathematical Philosophy',
  subtitleOriginal: 'Chapters I–VI: Natural Numbers, Induction, Order and Relations',
  titleZh: '数理哲学导论',
  subtitleZh: '第一卷（第一章至第六章）：自然数、数学归纳法、序与关系',
  authorOriginal: 'Bertrand Russell',
  authorZh: '伯特兰·罗素',
  authorNoteLabel: '罗素原注',
  year: '1919',
  publisher: 'George Allen & Unwin, London',
  collection: 'Library of Philosophy (2nd ed., 1920)',
  descriptionZh:
    '一九一八年五月至九月，伯特兰·罗素因发表反战言论被英国当局依《国土防卫法》判入伦敦布里克斯顿监狱服刑六个月，在狱中撰成这部**《数理哲学导论》**，次年五月由伦敦乔治·艾伦与昂温出版社收入「哲学丛书」初版印行（一九二〇年四月出订正第二版）。本书旨在剥除繁复的形式逻辑符号，向不具备专门数理背景的读者清晰呈示他与怀特海在三卷本**《数学原理》**（1910—1913）中所奠定的现代数理逻辑核心成果。开篇即标举数理哲学区别于普通数学的方法论取向：普通数学从整数与四则运算出发，沿构造方向迈向微积分与高等数学的复杂体系；数理哲学则采取回溯式的**分析方向**，从日常算术中为人熟知却未经省察的中段命题往后追问，探寻足以定义并推演出全部传统纯粹数学的最少且逻辑上最简单的基本观念与命题。\n\n循此回溯路径，罗素在第一、二章中衔接十九世纪魏尔斯特拉斯等人完成的「数学的算术化」与皮亚诺的自然数公理化工作。皮亚诺虽将整个自然数算术浓缩为「0」、「数」、「后继」三个**初始观念**与五条**初始命题**，罗素却指出这套公理仅刻画了一般**递进序列**的形式结构，容许无穷多种彼此同构的不同解释，既无法担保满足公理的项集在逻辑上存在，也无法赋予数以清点日常事物所需的确定意义。由此超越皮亚诺而迈向弗雷格开创的逻辑主义纲领，第二章阐明无穷汇集与一般类论必须建立在由**命题函数**决定的内涵定义之上，进而在不预设任何数词与次序的前提下，借纯粹逻辑量词与同一关系界定**一一关系**及类与类之间的**相似性**，最终确立**弗雷格—罗素定义**：一个类的基数就是与该类相似的一切类所构成的类。遵循奥卡姆剃刀原则，这一定义以逻辑上可严格界定的等价类取代了未经证明的形而上学实体假定。\n\n本卷收录全书序言与第一至六章，完整呈现从基数定义通往序列结构与关系算术的逻辑重构链条。第三章剖析有穷性与**数学归纳法**的本质，借助**遗传性质**与从 0 出发的**后裔类**定义**归纳数**，证明数学归纳法并非先天综合直觉或无穷三段论的压缩，而是界定有穷自然数之范围的纯逻辑定义，并引入弗雷格普遍化的祖先关系理论以严格划界有穷与无穷；第四至六章则进一步将「序」从项集的内在性质中剥离出来，证明同一个类可承载无穷多种不同的排列次序，而序的真正根源在于同时具备**非对称的**、**传递的**与**连通的**三项形式性质的**序列关系**，继而系统展开一般关系的分类、置换与**一一关联**，并将类的相似性推广为关系之间的**相像**与**关系数**，阐明纯粹关系结构如何构成几何学、连续统分析乃至自然科学认识外在物理世界的形式骨架。',
  chapters: [
    {
      id: 'imp-vol1',
      number: 'Chapters I–VI (1919)',
      titleOriginal: 'Introduction to Mathematical Philosophy (Chapters I–VI)',
      titleZh: '数理哲学导论（第一卷：序言与第一至六章）',
      sections: [...russellPart1Sections, ...russellPart2Sections, ...russellPart3Sections],
    },
  ],
};
