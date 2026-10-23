import type { BookMeta } from '../../../types/book';
import { bastiatDedication, bastiatPart1Sections } from './part-1';
import { bastiatPart2Sections } from './part-2';
import { bastiatPart3Sections } from './part-3';

export const ceQuOnVoit: BookMeta = {
  slug: 'ce-qu-on-voit',
  vol: 'VOL. 07',
  langOriginal: 'FR',
  titleOriginal: "Ce qu'on voit et ce qu'on ne voit pas",
  subtitleOriginal: "Ou l'Économie politique en une leçon",
  titleZh: '看得见的与看不见的',
  subtitleZh: '一课政治经济学',
  authorOriginal: 'Frédéric Bastiat',
  authorZh: '弗雷德里克·巴斯夏',
  authorNoteLabel: '巴斯夏原注',
  year: '1850',
  publisher: 'Guillaumin et Cie, Paris',
  collection: 'Économie politique',
  descriptionZh:
    '1850 年 7 月，身患绝症的弗雷德里克·巴斯夏在赴意大利养病前夕出版了这册遗作。面对 1848 年二月革命后席卷法国议会的国家干预浪潮、关税保护主义、阿尔及利亚殖民扩军与蒲鲁东派免费信贷方案，巴斯夏在开篇即将经济科学的全部认识论枢纽归结为一道分水岭：**坏的经济学家只局限于肉眼可见的直接效应，而好的经济学家则同时追踪那些必须凭借理性去预见的二阶与远期连锁效应**。\n\n从著名的「破窗谬误」出发，全书依次拆解了裁军、赋税、公共工程、贸易限制、机器替代、政府担保信贷、海外殖民与国家工场等十二个政治经济学核心议题。巴斯夏以老实人雅克与工匠皮埃尔的日常账本为尺度，证明国家强制调拨与人为破坏绝不可能凭空创造社会财富或就业，而只是将纳税人手中「看不见的私人支出与生产性资本」强行转移至「看得见的特定集团」手中——这不仅奠定了现代经济学关于**机会成本（Opportunity Cost）**与挤出效应的分析范式，也将古典自由主义的产权正义与市场演进秩序铸成了一堂极简而锋利的思维课。',
  chapters: [
    {
      id: 'ce-qu-on-voit-ch1',
      number: 'Complete 1850 Edition',
      titleOriginal: "Ce qu'on voit et ce qu'on ne voit pas: Ou l'Économie politique en une leçon",
      titleZh: '看得见的与看不见的：一课政治经济学',
      dedication: bastiatDedication,
      sections: [
        ...bastiatPart1Sections,
        ...bastiatPart2Sections,
        ...bastiatPart3Sections
      ]
    }
  ]
};
