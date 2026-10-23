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
    '人们向来把「善」的价值当作超然于一切质询之外的公理；尼采却第一次发出追问：倘若「善人」恰恰是生命退化的症状、是人类为透支未来而吞服的麻醉品呢？\n\n循着希腊语、拉丁语与古日耳曼语的词源化石，第一篇论文揭开贵族「好与坏」如何被祭司阶层的**怨恨**颠倒为奴隶道德的「善与恶」；第二篇论文从远古债权人切割债务人血肉的酷刑记忆术出发，破译道德「罪责（Schuld）」源于物质「债务（Schulden）」、而「良心」诞生于野兽本能被迫转入地下的**内向化**撕咬；第三篇论文则直抵欧洲精神史的最后深渊：从瓦格纳晚年的《帕西法尔》、康德与叔本华的禁欲美学，一直追索到现代实证科学骨子里的「求真意志」，最终道破禁欲主义理想统治人类两千年的秘密——**人宁可意欲虚无，也胜过无所意欲。**',
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
