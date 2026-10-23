import type { BookMeta } from '../../../types/book';
import { chapter1Dedication, chapter1Epigraph, section1 } from './section-1';
import { section2 } from './section-2';
import { section3 } from './section-3';
import { section4 } from './section-4';
import { chapitre2Epigraph, chapitre2Sections } from './chapitre-2';
import { chapitre3Sections } from './chapitre-3';
import { appendiceKafkaSection, chapitre4Section } from './chapitre-4';

export const leMytheDeSisyphe: BookMeta = {
  slug: 'le-mythe-de-sisyphe',
  vol: 'VOL. 01',
  langOriginal: 'FR',
  titleOriginal: 'Le Mythe de Sisyphe',
  subtitleOriginal: "Essai sur l'absurde",
  titleZh: '西西弗神话',
  subtitleZh: '论荒谬',
  authorOriginal: 'Albert Camus',
  authorZh: '阿尔贝·加缪',
  authorNoteLabel: '加缪原注',
  year: '1942',
  publisher: 'Éditions Gallimard, Paris',
  collection: 'Les Essais XII',
  descriptionZh:
    '完整收录全书四章（《荒谬的推理》《荒谬的人》《荒谬的创造》《西西弗神话》）及《附录：弗朗茨·卡夫卡作品中的希望与荒谬》。加缪将「荒谬」从近代虚无主义的结论倒转为全部思辨的出发点：当世界彻底失去彼岸的终极意义，人能否在不借助信仰跳跃、亦不走向自我毁灭的前提下，仅凭清醒的反抗、燃烧的当下与无明天的创造，在推石上山的搏斗中活出此生的壮丽？',
  chapters: [
    {
      id: 'le-mythe-de-sisyphe-complet',
      number: 'Texte intégral',
      titleOriginal: 'Le Mythe de Sisyphe',
      titleZh: '西西弗神话',
      dedication: chapter1Dedication,
      epigraph: chapter1Epigraph,
      sections: [
        section1,
        section2,
        section3,
        section4,
        ...chapitre2Sections,
        ...chapitre3Sections,
        chapitre4Section,
        appendiceKafkaSection
      ]
    }
  ]
};
