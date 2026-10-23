import type { BookMeta, BookSection } from '../../../types/book';
import { gmSubtitle, sectionVorrede } from './vorrede';
import { sectionErsteAbhandlung } from './erste-abhandlung';
import { zweiteAbhandlungBlocks1 } from './zweite-abhandlung-1';
import { zweiteAbhandlungBlocks2 } from './zweite-abhandlung-2';
import { dritteAbhandlungBlocks1 } from './dritte-abhandlung-1';
import { dritteAbhandlungBlocks2 } from './dritte-abhandlung-2';

const sectionZweiteAbhandlung: BookSection = {
  id: 'zweite-abhandlung',
  roman: 'II',
  titleOriginal: '„Schuld“, „schlechtes Gewissen“ und Verwandtes',
  titleZh: '第二篇论文：「罪责」、「坏良心」及其类似之物',
  blocks: [...zweiteAbhandlungBlocks1, ...zweiteAbhandlungBlocks2]
};

const sectionDritteAbhandlung: BookSection = {
  id: 'dritte-abhandlung',
  roman: 'III',
  titleOriginal: 'Was bedeuten asketische Ideale?',
  titleZh: '第三篇论文：禁欲主义理想意味着什么？',
  blocks: [...dritteAbhandlungBlocks1, ...dritteAbhandlungBlocks2]
};

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
    '完整收录全书《序言》（§§ 1–8）与三篇论文全本：《第一篇论文：「善与恶」，「好与坏」》（§§ 1–17）、《第二篇论文：「罪责」，「坏良心」及其类似之物》（§§ 1–25）、《第三篇论文：禁欲主义理想意味着什么？》（§§ 1–28）。尼采从古典语文学词源考据与生理心理学视角出发，揭示贵族「好与坏」如何被祭司的怨恨颠倒为奴隶道德的「善与恶」，破译「罪责（Schuld）」源于物质「债务（Schulden）」与本能内向化，并最终解剖禁欲主义理想如何以「人宁可意欲虚无，也胜过无所意欲」统治人类精神两千年。',
  chapters: [
    {
      id: 'zur-genealogie-der-moral-ch1',
      number: 'Vollständige Ausgabe',
      titleOriginal: 'Zur Genealogie der Moral: Eine Streitschrift',
      titleZh: '论道德的谱系：一篇论战檄文',
      dedication: gmSubtitle,
      sections: [
        sectionVorrede,
        sectionErsteAbhandlung,
        sectionZweiteAbhandlung,
        sectionDritteAbhandlung
      ]
    }
  ]
};
