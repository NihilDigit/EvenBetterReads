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
    '十九世纪中叶的纽约华尔街，一位奉首富约翰·雅各布·阿斯特为圭臬、毕生在富人债券与地产抵押契据中稳妥度日的衡平法院老律师，雇佣了面色苍白、举止寂静的抄写员巴托比。在被四周高耸黑砖墙封死采光的绿屏风隔间里，巴托比先是昼夜不息地如饥似渴抄写，却在第三天面对校对文书的指令时，平静地吐出了那句著名的回答：**「我宁可不（I would prefer not to）。」**\n\n他既不愤怒反抗，也不引用任何道德教条，甚至不肯离开这座空无一人的星期日事务所。在这句介于肯定与否定之间的幽微语法面前，华尔街的雇佣契约、洛克式的私有产权以及用小恩小惠买取心安的新教功利慈善逐一失灵瘫痪——直到巴托比在仿古埃及神庙筑成的曼哈顿「坟墓」监狱高墙下绝食合眼，留下一则关于华盛顿「死信局」的传闻，以及穿透整个现代世界的叹息：「啊，巴托比！啊，人性！」',
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
