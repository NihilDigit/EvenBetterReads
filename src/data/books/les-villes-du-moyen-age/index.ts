import type { BookMeta } from '../../../types/book';
import { villesDedication, section1 } from './section-1';
import { section2 } from './section-2';
import { chapitre3 } from './chapitre-3';
import { chapitre4 } from './chapitre-4';
import { section3 } from './section-3';
import { chapitre6 } from './chapitre-6';
import { chapitre7 } from './chapitre-7';
import { section4 } from './section-4';

export const lesVillesDuMoyenAge: BookMeta = {
  slug: 'les-villes-du-moyen-age',
  vol: 'VOL. 05',
  langOriginal: 'FR',
  titleOriginal: 'Les villes du Moyen Âge',
  subtitleOriginal: "Essai d'histoire économique et sociale",
  titleZh: '中世纪城市',
  subtitleZh: '经济与社会史论',
  authorOriginal: 'Henri Pirenne',
  authorZh: '亨利·皮朗',
  authorNoteLabel: '皮朗原注',
  year: '1927',
  publisher: 'Maurice Lamertin, Bruxelles',
  collection: 'Histoire économique et sociale',
  descriptionZh:
    '真正终结古典世界的并非日耳曼蛮族入侵，而是八世纪伊斯兰扩张将地中海从罗马内湖变为封闭边界——**「倘若没有伊斯兰教，法兰克帝国无疑根本不会存在；而离开了穆罕默德，查理曼简直是不可想象的。」**当西欧被迫退入内陆庄园与农奴制的漫长冬眠，现代自由与资本主义的火种从何而来？皮朗追踪了十至十二世纪那些脱离土地的流动「新人（homines novi）」：他们结成武装商帮穿行欧陆，在旧主教城与军事城堡外围建立商业外城（faubourg），以契约商法、公社起义与市政特许状打破领主的人身依附，让「城市的空气使人自由」成为现代市民阶级与欧洲世俗文明真正的摇篮。',
  chapters: [
    {
      id: 'les-villes-du-moyen-age-main',
      number: 'Chapitres I–VIII',
      titleOriginal: 'Les villes du Moyen Âge',
      titleZh: '中世纪城市：经济与社会史论',
      dedication: villesDedication,
      sections: [
        section1,
        section2,
        chapitre3,
        chapitre4,
        section3,
        chapitre6,
        chapitre7,
        section4
      ]
    }
  ]
};
