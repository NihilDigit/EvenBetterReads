import type { BookMeta } from '../../../types/book';
import { commonSenseDedication, commonSenseEpigraph, section1 } from './section-1';
import { section2 } from './section-2';
import { section3 } from './section-3';
import { section4 } from './section-4';
import { section5 } from './section-5';

export const commonSense: BookMeta = {
  slug: 'common-sense',
  vol: 'VOL. 04',
  langOriginal: 'EN',
  titleOriginal: 'Common Sense',
  subtitleOriginal: 'Addressed to the Inhabitants of America',
  titleZh: '常识',
  subtitleZh: '致美利坚居民书',
  authorOriginal: 'Thomas Paine',
  authorZh: '托马斯·潘恩',
  authorNoteLabel: '潘恩原注',
  year: '1776',
  publisher: 'W. & T. Bradford, Philadelphia',
  collection: 'Political Pamphlet',
  descriptionZh:
    '完整收录 1776 年费城布拉德福德增订版《常识》全书（导言、正文全四章、增补附录及《致贵格会书》）。潘恩从「社会源于我们的需求，政府源于我们的邪恶」这一自然法区分出发，剖析英国混合宪政的虚妄，援引《旧约》基甸与撒母耳记彻底否定君主制与世袭制的神圣性，算清北美大陆脱离大英帝国重商主义垄断与造船建军的实力账目，并发出「在美利坚，法律就是国王」的立宪最强音，直接催生了五个月后的《独立宣言》。',
  chapters: [
    {
      id: 'common-sense-ch1',
      number: 'Complete 1776 Edition',
      titleOriginal: 'Common Sense: Addressed to the Inhabitants of America',
      titleZh: '常识：致美利坚居民书',
      dedication: commonSenseDedication,
      epigraph: commonSenseEpigraph,
      sections: [section1, section2, section3, section4, section5]
    }
  ]
};
