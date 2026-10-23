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
    '一八五三年十一月至十二月匿名连载于纽约《帕特南月刊》，一八五六年收入短篇集《露台故事集》。作品以一位奉约翰·雅各布·阿斯特为精神楷模、信奉「最稳妥的办法就是最省事的办法」的华尔街衡平法院老律师为叙述者，记录下苍白孤寂的法律文书抄写员巴托比如何走入那间被高耸砖墙封死采光井的事务所，并在狂热抄写数周后，以一句轻柔、平静而不可撼动的「我宁愿不（I would prefer not to）」，逐步拒绝校对副本、拒绝跑腿、彻底放弃抄写、拒绝离开事务所，直至在仿古埃及陵墓形制的曼哈顿「坟墓」监狱高墙下绝食安睡。作为现代文学与欧陆政治哲学的枢纽经典，梅尔维尔借华尔街契据机器与华盛顿「死信局」的双重隐喻，在资本、产权与实用主义慈善的铜墙铁壁中央，凿出了一座关于纯粹潜能与被动抵抗的现代性丰碑。',
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
