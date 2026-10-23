import type { BookMeta } from '../../../types/book';
import { humePart1Sections } from './part-1';
import { humePart2Sections } from './part-2';
import { humePart3Sections } from './part-3';
import { humePart4Sections } from './part-4';

export const politicalDiscourses: BookMeta = {
  slug: 'political-discourses',
  vol: 'VOL. 08',
  langOriginal: 'EN',
  titleOriginal: 'Political Discourses',
  subtitleOriginal: 'Essays on Commerce, Money, Interest, and Trade',
  titleZh: '政治与经济论集',
  subtitleZh: '论商业、货币、利息与贸易',
  authorOriginal: 'David Hume',
  authorZh: '大卫·休谟',
  authorNoteLabel: '休谟原注',
  year: '1752',
  publisher: 'R. Fleming, Edinburgh',
  collection: 'Essays, Moral, Political, and Literary',
  descriptionZh:
    '1752 年初版于爱丁堡的《政治与经济论集》，是大卫·休谟将人性科学的因果分析方法引入政治经济领域的奠基之作。针对当时欧洲普遍将国家强盛归结为金银窖藏的重商主义迷思，休谟在开篇即指出，**一国真正的实力与财富不在于贵金属存量，而在于国民的勤勉、技艺与作为「劳动储备库」的工商业体系**；货币并非驱动贸易运转的车轮，而只是使车轮转动得更为顺畅的润滑油。\n\n围绕这一核心判断，休谟依次确立了古典货币理论与国际金融分析的三大支柱：在《论货币》中，他区分了货币存量的长期中性与货币流入在价格传导间隔期内的短期产出激励；在《论利息》中，他论证利率的高低并不取决于货币多寡，而取决于借贷供求、商业利润率与节俭习俗等真实经济因素；在《论贸易平衡》与《论贸易嫉妒》中，他通过著名的「价格—铸币流动机制」证明国际收支如同连通器内的水体，会随各国相对物价自动恢复比例均衡，邻国的商业繁荣非但不是本国的威胁，反而是本国出口与技艺改良的必要条件。\n\n在卷末的《论赋税》与《论公共信用》中，休谟将目光转向近代财政国家的内在危机：他一方面批驳了约翰·洛克「一切赋税最终皆转嫁于土地地租」的单一税教条，另一方面对英国光荣革命后迅速膨胀的永久公债体系发出严厉预警，剖析了食利债权人阶层对地方社会结构与国家应急能力的侵蚀，并留下了**「要么国家消灭公共信用，要么公共信用消灭国家」**的著名论断。',
  chapters: [
    {
      id: 'political-discourses-ch1',
      number: '1752 Edinburgh Edition',
      titleOriginal: 'Political Discourses',
      titleZh: '政治与经济论集',
      sections: [
        ...humePart1Sections,
        ...humePart2Sections,
        ...humePart3Sections,
        ...humePart4Sections
      ]
    }
  ]
};
