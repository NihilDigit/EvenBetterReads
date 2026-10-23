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
    '1776 年初，北美十三州与英国王室的武装冲突已经爆发，但大陆会议与公众舆论仍普遍寄望于同乔治三世达成和解。潘恩在这册政论中将争端从税制与贸易纠纷直接推向政体合法性的根源，开篇即区分了「社会」与「政府」：社会产生于人的共同需求，而政府产生于对恶的约束，**即便在最好的状态下也只是一件必要的恶**。\n\n据此，潘恩拆解了十八世纪备受推崇的「英国混合宪制」，指出王权早已通过官职与年金恩庇吞并了下院的独立性；进而援引《旧约》中以色列人立王的记载与 1066 年诺曼征服的历史，否定君权神授与世袭继承的正统性。\n\n在后半部对北美独立可行性的核算中，潘恩从大西洋贸易结构、造船资源、公债规模与国际法地位出发，论证北美脱离英国重商主义体系的现实基础，并提出以大陆会议与各州代议宪章取代君主主权：**「在专制政府中，国王便是法律；而在自由国家里，法律就应当是国王。」**',
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
