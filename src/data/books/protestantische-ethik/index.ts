import type { BookMeta } from '../../../types/book';
import { section1 } from './section-1';
import { section2 } from './section-2';
import { section3 } from './section-3';
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
    '收录第一卷《问题》全三节（教派归属与社会分层、资本主义「精神」、路德的「天职」概念与研究任务）及全书终章《禁欲主义与资本主义精神》。韦伯从本杰明·富兰克林的伦理箴言与马丁·路德翻译《圣经》铸造的「天职（Beruf）」词源出发，揭示加尔文宗与清教徒的「入世禁欲主义」如何催生了现代理性资本主义的劳动伦理，并最终硬化为囚禁全体现代人的「坚硬如钢的壳（铁笼）」。',
  chapters: [
    {
      id: 'protestantische-ethik-ch1',
      number: 'Hauptteile I & II',
      titleOriginal: 'Das Problem & Die Berufsethik des asketischen Protestantismus',
      titleZh: '问题与禁欲主义新教的职业伦理',
      sections: [section1, section2, section3, section4]
    }
  ]
};
