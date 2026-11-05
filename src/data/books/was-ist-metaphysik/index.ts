import type { BookMeta } from '../../../types/book';
import { vorlesung1Sections } from './vorlesung-1';
import { vorlesung2Sections } from './vorlesung-2';
import { nachwortSection } from './nachwort';

export const wasIstMetaphysik: BookMeta = {
  slug: 'was-ist-metaphysik',
  vol: 'VOL. 13',
  langOriginal: 'DE',
  titleOriginal: 'Was ist Metaphysik?',
  subtitleOriginal: 'Freiburger Antrittsvorlesung (1929) mit dem Nachwort (1943)',
  titleZh: '形而上学是什么？',
  subtitleZh: '弗赖堡就职演说（一九二九）附一九四三年后记',
  authorOriginal: 'Martin Heidegger',
  authorZh: '马丁·海德格尔',
  authorNoteLabel: '海德格尔原注',
  year: '1929',
  publisher: 'Friedrich Cohen, Bonn / Vittorio Klostermann, Frankfurt am Main',
  collection: 'Wegmarken (GA 9)',
  descriptionZh:
    '一九二九年七月二十四日，刚接替恩师胡塞尔执掌弗赖堡大学哲学第一教席的海德格尔，在全体学院教授与学生面前发表了著名的就职演说**《形而上学是什么？》**。他没有照例综述形而上学的学科体系，而是从在场各门实证科学的共同规定切入：科学「唯独研究存在者，除此之外——再无其他」。当科学自诩以冷嘲挥手告别这个「无（das Nichts）」时，海德格尔却反戈一击——倘若没有这个先行显露出来的「无」，人根本无法跳出局部存在者的围困去面对「存在者整体」，科学本身对存在者的客观化追问也将无从发端。\n\n为了揭示这个绝非逻辑否定所能派生出的原初之「无」，演说将听众引向此在最深邃的基本情调——**畏（Angst）**。不同于针对某个特定威胁之物的恐惧，在「畏」的寂静悬空里，周遭一切存在者整体滑落远去；正是在这万物滑落的深渊中，「无本身无化（Das Nichts selbst nichtet）」。这种无化既非毁灭亦非逻辑勾销，而是以令人屏息的排斥姿态，首次将存在者整体推到刺目的敞开之境中，逼迫此在直面一切形而上学最本源的终极追问：**「为什么偏偏有存在者，而竟不是无？」**\n\n本卷完整合璧了一九二九年就职演说与十四年后增补的**《〈形而上学是什么？〉后记》（1943）**，并悉数收录海德格尔自第四版（1943）、第五版（1949）至《路标》第一版（1967）跨越三十八年的亲笔手稿旁注。在《后记》中，历经一九三〇年代「存在史转向（Kehre）」的海德格尔正面回应了学界围绕「虚无主义」「畏的怯懦哲学」与「反逻辑非理性主义」的三重围攻，将「无」揭示为「存在的面纱」，并在**算计性思维（rechnendes Denken）**与**本质性思维（wesentliches Denken）**的决裂中，将人的天命重新锚定为「存在的看护者」。',
  chapters: [
    {
      id: 'was-ist-metaphysik-ch1',
      number: 'Wegmarken (1929 / 1943)',
      titleOriginal: 'Was ist Metaphysik? (1929) mit dem Nachwort (1943)',
      titleZh: '形而上学是什么？（一九二九年就职演说与一九四三年后记）',
      sections: [...vorlesung1Sections, ...vorlesung2Sections, nachwortSection]
    }
  ]
};
