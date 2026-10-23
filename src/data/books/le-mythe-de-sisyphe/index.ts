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
    '「真正严肃的哲学问题只有一个，那便是自杀。」自尼采以降，欧洲现代思想耗费无数篇幅去论证世界之无意义，并将「荒谬」当作绝望的终点；加缪却在此将牌局彻底倒转——倘若世界确乎没有彼岸的终极意义，这恰恰应当作为全部思辨与行动的出发点。\n\n在人的呼唤与世界不讲道理的沉默迎面相撞之处，加缪逐一清算了克尔凯郭尔、舍斯托夫与雅斯贝尔斯把压碎人之物奉若神明的「哲学自杀」，借唐璜、演员、征服者、基里洛夫与推石上山的西西弗，勘定了不靠希望亦不自我毁灭的第三条道路：**向着山巅攀登的搏斗本身，已足以填满一颗人心。**',
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
