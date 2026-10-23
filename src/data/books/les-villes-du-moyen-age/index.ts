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
    '完整收录比利时历史学家亨利·皮朗代表作《中世纪城市》1927 年布鲁塞尔法文原版序言与全书八章。皮朗以著名的「皮朗命题」破除日耳曼蛮族毁灭罗马世界的传统迷思，揭示伊斯兰扩张如何封闭地中海并将查理曼帝国推入内陆庄园农奴制；进而追踪十至十二世纪那些脱离土地的「无地新人」如何凭远途贸易、商人行会与市政特许状在旧城堡外围建立自治商业城市，确立「城市的空气使人自由」的市民法权，瓦解封建农奴制并孕育出近代欧洲的市民阶级与世俗理性文明。',
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
