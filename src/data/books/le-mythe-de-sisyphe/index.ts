import type { BookMeta } from '../../../types/book';
import { chapter1Dedication, chapter1Epigraph, section1 } from './section-1';
import { section2 } from './section-2';
import { section3 } from './section-3';
import { section4 } from './section-4';

export const leMytheDeSisyphe: BookMeta = {
  slug: 'le-mythe-de-sisyphe',
  vol: 'VOL. 01',
  langOriginal: 'FR',
  titleOriginal: 'Le Mythe de Sisyphe',
  subtitleOriginal: "Essai sur l'absurde",
  titleZh: '西西弗神话',
  subtitleZh: '论荒谬',
  authorOriginal: 'Albert Camus',
  authorZh: '阿尔贝 加缪',
  authorNoteLabel: '加缪原注',
  year: '1942',
  publisher: 'Éditions Gallimard, Paris',
  collection: 'Les Essais XII',
  descriptionZh:
    '收录第一章《荒谬的推理》全篇（荒谬与自杀、荒谬的高墙、哲学自杀、荒谬的自由）。加缪将「荒谬」从近代虚无主义的结论倒转为全部思辨的出发点：当世界彻底失去彼岸的终极意义，人能否在不借助信仰跳跃、亦不走向自我毁灭的前提下，仅凭清醒的反抗活出此生的壮丽？',
  chapters: [
    {
      id: 'un-raisonnement-absurde',
      number: 'Chapitre I',
      titleOriginal: 'Un raisonnement absurde',
      titleZh: '荒谬的推理',
      dedication: chapter1Dedication,
      epigraph: chapter1Epigraph,
      sections: [section1, section2, section3, section4]
    }
  ]
};
