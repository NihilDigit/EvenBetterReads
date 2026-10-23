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
    '五世纪的日耳曼民族迁徙并未终结古典世界，墨洛温时代的西欧仍维系着以地中海贸易与金币流通为核心的罗马经济格局；直到八世纪伊斯兰扩张切断地中海东西航路，西欧才退入加洛林时代纯农业的闭锁庄园体制。这便是著名的**皮朗命题**：「倘若没有伊斯兰教，法兰克帝国无疑不会存在；而离开了穆罕默德，查理曼是不可想象的。」\n\n十至十一世纪，随着威尼斯与佛兰德斯远途贸易的复苏，一批脱离土地的流动商人在旧主教城与军事城堡外围建立起商业聚落（faubourg）。为摆脱封建庄园法与神判诉讼的束缚，商人与手工业者通过结社与特许状争取到人身自由、商事法庭与市政自治。尽管早期市民阶级将「自由」视为本城独占的等级特权，但城市市场与货币经济的扩张仍在客观上瓦解了周遭乡村的农奴制度，在教士与贵族之外催生出近代欧洲的市民社会。',
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
