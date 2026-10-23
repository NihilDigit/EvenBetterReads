import type { BookMeta } from '../../../types/book';
import { commonSenseDedication, commonSenseEpigraph, section1 } from './section-1';
import { section2 } from './section-2';
import { section3 } from './section-3';
import { section4 } from './section-4';
import { section5 } from './section-5';

export const commonSense: BookMeta = {
  slug: 'common-sense',
  vol: 'VOL. 04',
  langOriginal: 'EN',
  titleOriginal: 'Common Sense',
  subtitleOriginal: 'Addressed to the Inhabitants of America',
  titleZh: '常识',
  subtitleZh: '致美利坚居民书',
  authorOriginal: 'Thomas Paine',
  authorZh: '托马斯·潘恩',
  authorNoteLabel: '潘恩原注',
  year: '1776',
  publisher: 'W. & T. Bradford, Philadelphia',
  collection: 'Political Pamphlet',
  descriptionZh:
    '「社会源于我们的欲求，政府源于我们的邪恶；社会在一切状态下都是福祉，而政府哪怕在最好的状态下，也不过是一件必要的恶。」一七七六年冬的费城，当整个英属北美仍在向乔治三世乞求调停与效忠的迷梦中徘徊时，初抵新大陆不足十四个月的托马斯·潘恩，以这本薄薄的小册子劈开了现代共和主义的黎明。\n\n潘恩首先在自然法底座上将自发结成的「市民社会」与国家强制机器一刀切开，戳穿了孟德斯鸠与布莱克斯通奉若神明的「英国混合宪制」不过是用王室恩俸收买下院的分赃骗局；继而调转《旧约》经文与诺曼征服史的矛头，将世袭王权剥皮至「一个法兰西私生子率领武装强盗登陆」的暴力老底。\n\n从列克星敦枪声后的母国迷思破除、重商主义贸易枷锁清算，到北美大陆造船建军的细密国力账册，全书层层推进，最终在现代政治史上第一次将王冠戴在宪章之上：**「在专制政府中，国王便是法律；而在自由国家里，法律就应当是国王。」**',
  chapters: [
    {
      id: 'common-sense-ch1',
      number: 'Complete 1776 Edition',
      titleOriginal: 'Common Sense: Addressed to the Inhabitants of America',
      titleZh: '常识：致美利坚居民书',
      dedication: commonSenseDedication,
      epigraph: commonSenseEpigraph,
      sections: [section1, section2, section3, section4, section5]
    }
  ]
};
