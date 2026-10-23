import type { BookMeta } from '../../../types/book';
import { section1 } from './section-1';
import { section2 } from './section-2';
import { section3 } from './section-3';
import { section3b } from './section-3b';
import { section4 } from './section-4';

export const protestantischeEthik: BookMeta = {
  slug: 'protestantische-ethik',
  vol: 'VOL. 03',
  langOriginal: 'DE',
  titleOriginal: 'Die protestantische Ethik und der Geist des Kapitalismus',
  subtitleOriginal: 'Gesammelte Aufsätze zur Religionssoziologie I',
  titleZh: '新教伦理与资本主义精神',
  subtitleZh: '宗教社会学论文集',
  authorOriginal: 'Max Weber',
  authorZh: '马克斯·韦伯',
  authorNoteLabel: '韦伯原注',
  year: '1920',
  publisher: 'J. C. B. Mohr (Paul Siebeck), Tübingen',
  collection: 'Religionssoziologie I',
  descriptionZh:
    '为什么最视尘世享乐如仇敌、以「双重预定论」将信徒推入空前内心孤独的加尔文宗与清教徒，反倒成了现代理性资本主义最狂热的担纲者？韦伯从马丁·路德翻译《圣经》铸造的「天职（Beruf）」词源与本杰明·富兰克林的账本伦理切入，揭示了宗教改革如何把修道院围墙内的苦行搬进世俗账房与工厂：当救赎焦虑迫使信徒以不知疲倦的职业劳动来确证神恩，「入世禁欲主义」便在无意间锻造出「专业人」与现代经济秩序；而当宗教根系枯死，曾经轻如斗篷的圣徒天职，终究硬化为囚禁全体现代人的**「坚硬如钢的壳」**。',
  chapters: [
    {
      id: 'protestantische-ethik-ch1',
      number: 'Hauptteile I & II',
      titleOriginal: 'Das Problem & Die Berufsethik des asketischen Protestantismus',
      titleZh: '问题与禁欲主义新教的职业伦理',
      sections: [section1, section2, section3, section3b, section4]
    }
  ]
};
