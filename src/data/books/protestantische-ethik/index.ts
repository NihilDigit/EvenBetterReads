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
    '对财富的贪欲与冒险投机在人类历史上无处不在，却并非现代资本主义的源头。在韦伯看来，现代理性资本主义的显著特征恰恰是对非理性获利冲动的节制，以及将日常营利与核算视为一项自在的伦理义务。这种把赚钱本身当作人生目的、同时严格拒斥现世享乐的生活态度，究竟从何而来？韦伯从马丁·路德翻译《圣经》时铸造的「天职（Beruf）」一词出发，考察加尔文宗双重预定论、虔敬派、循道宗与浸礼会诸派的牧灵实践：当信徒无法再通过教会圣事获知自己是否蒙受拣选，唯有借终身有条不紊的世俗职业劳动来平息救赎焦虑。由此形成的**入世禁欲主义**塑造了近代资产阶级的职业伦理；而在宗教信仰消退之后，这套秩序则留存为现代工业与官僚体系的制度外壳。',
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
