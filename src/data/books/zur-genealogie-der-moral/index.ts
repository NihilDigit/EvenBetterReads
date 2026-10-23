import type { BookMeta } from '../../../types/book';
import { gmSubtitle, sectionVorrede } from './vorrede';
import { sectionErsteAbhandlung } from './erste-abhandlung';

export const zurGenealogieDerMoral: BookMeta = {
  slug: 'zur-genealogie-der-moral',
  vol: 'VOL. 02',
  langOriginal: 'DE',
  titleOriginal: 'Zur Genealogie der Moral',
  subtitleOriginal: 'Eine Streitschrift',
  titleZh: '论道德的谱系',
  subtitleZh: '一篇论战檄文',
  authorOriginal: 'Friedrich Nietzsche',
  authorZh: '弗里德里希·尼采',
  authorNoteLabel: '尼采原注',
  year: '1887',
  publisher: 'Verlag von C. G. Naumann, Leipzig',
  collection: 'Streitschrift',
  descriptionZh:
    '收录全书《序言》（Vorrede §§ 1–8）与《第一篇论文：「善与恶」，「好与坏」》（Erste Abhandlung §§ 1–17 及篇末原注）。尼采从古典语文学词源考据与生理学视角出发，清算英国功利主义与叔本华同情道德，揭示「好与坏」的贵族起源如何被祭司阶层的「怨恨（Ressentiment）」颠倒为「善与恶」的奴隶道德。',
  chapters: [
    {
      id: 'zur-genealogie-der-moral-ch1',
      number: 'Erste Abteilung',
      titleOriginal: 'Vorrede & Erste Abhandlung',
      titleZh: '序言与第一篇论文',
      dedication: gmSubtitle,
      sections: [sectionVorrede, sectionErsteAbhandlung]
    }
  ]
};
