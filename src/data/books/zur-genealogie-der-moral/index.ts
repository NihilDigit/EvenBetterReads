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
    '近代哲学与功利主义向来将「善、同情、利他」视为不言自明的最高价值，仅忙于为道德寻找基础；尼采则将「道德本身的价值」首次列为审查对象，追问这套价值究竟是生命丰盈的流露，还是生理衰退与自我保存的防御机制。\n\n借助古典语文学与比较法学，尼采梳理出三条相互咬合的历史线索：贵族阶层原本基于自身尺度确立的「好与坏」，如何在祭司阶层的**怨恨（Ressentiment）**中被颠倒为奴隶道德的「善与恶」；道德上的「罪责（Schuld）」如何脱胎于远古契约法中债权人与债务人之间纯粹物质的「债务（Schulden）」；而当定居国家与和平秩序阻断了人类向外发泄的本能，这股力量又如何向内折返，造就出名为**坏良心**的内部空间。\n\n在全书终篇对禁欲主义理想的剖析中，尼采指出，无论是艺术家、哲学家、苦行祭司，还是自诩摆脱了神学的现代实证科学，之所以始终受制于禁欲理想与绝对的「求真意志」，归根结底源于人类意志的一项基本事实：它无法忍受目标的缺席——**「人宁可意欲虚无，也胜过无所意欲。」**',
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
