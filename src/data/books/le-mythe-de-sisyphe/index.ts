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
    '《西西弗神话》处理的是一个具体而严密的推理问题：倘若生命确乎没有终极意义，这一结论是否必然要求人通过自杀来尽早结束生命？加缪指出，荒谬既不在人身上，也不在世界本身，而产生于**人对明晰与统一的诉求同世界非理性沉默之间的并存对立**。\n\n克尔凯郭尔、舍斯托夫与雅斯贝尔斯在抵达理性边界时，借一次信仰跳跃将非理性本身神圣化，通过取消理性来消解矛盾；肉体自杀则通过消灭人本身来取消对立。加缪拒绝这两种消解方式：唯有保持清醒的意识，不向彼岸的希望妥协，人才能在有限的尘世时间里确立自身的**反抗、自由与激情**。唐璜、演员、征服者与不指望明天的小说家皆在践行这一尺度，正如转身走下山坡的西西弗：当诸神与彼岸退场，命运便成了一桩只需在人间自行了结的事务。',
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
