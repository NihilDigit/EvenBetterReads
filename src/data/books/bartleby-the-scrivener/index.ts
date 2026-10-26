import type { BookMeta } from '../../../types/book';
import { section1 } from './section-1';
import { section2 } from './section-2';
import { section3 } from './section-3';
import { section4 } from './section-4';

export const bartlebyTheScrivener: BookMeta = {
  slug: 'bartleby-the-scrivener',
  vol: 'VOL. 06',
  langOriginal: 'EN',
  titleOriginal: 'Bartleby, the Scrivener',
  subtitleOriginal: 'A Story of Wall-Street',
  titleZh: '抄写员巴托比',
  subtitleZh: '华尔街的故事',
  authorOriginal: 'Herman Melville',
  authorZh: '赫尔曼·梅尔维尔',
  authorNoteLabel: '梅尔维尔原注',
  year: '1853',
  publisher: "Putnam's Monthly Magazine, New York",
  collection: 'The Piazza Tales',
  descriptionZh:
    '十九世纪中叶的纽约华尔街，一位专办产权契据与富人债券、奉「最稳妥的办法就是最省事的办法」为处世准则的老律师，雇用了寡言的抄写员巴托比。在窗外紧贴高墙的事务所隔间里，巴托比最初日夜不停地抄写文书，第三天却在被要求协助校对副本时，平静地回答：**「我宁可不（I would prefer not to）。」**\n\n此后，这句既非公开抗命、亦非讲理申辩的回答被一再重复：他逐步停止校对、停止跑腿、彻底停止抄写，同时拒绝领薪离开，甚至在周末独自栖居于空荡的华尔街办公室。面对这样一个不提出任何诉求、也不进入任何交换关系的人，老律师所熟悉的契约规则、产权观念与温情慈善尽数失效，直至巴托比在曼哈顿「坟墓」监狱的石墙下静默死去。',
  chapters: [
    {
      id: 'bartleby-the-scrivener-ch1',
      number: 'Complete Text',
      titleOriginal: 'Bartleby, the Scrivener: A Story of Wall-Street',
      titleZh: '抄写员巴托比：华尔街的故事',
      sections: [section1, section2, section3, section4]
    }
  ]
};
