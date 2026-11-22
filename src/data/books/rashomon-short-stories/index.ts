import type { BookMeta } from '../../../types/book';
import { rashomonSection } from './rashomon';
import { hanaSection } from './hana';
import { imogayuSection } from './imogayu';
import { jigokuhenPart1Sections } from './jigokuhen-1';
import { jigokuhenPart2Sections } from './jigokuhen-2';

export const rashomonShortStories: BookMeta = {
  slug: 'rashomon-short-stories',
  vol: 'VOL. 19',
  langOriginal: 'JA',
  categories: ['literature'],
  aiModel: 'Gemini-4-Carbon',
  titleOriginal: '羅生門・鼻・芋粥・地獄変',
  subtitleOriginal: '王朝物四篇 (1915–1918)',
  titleZh: '罗生门与王朝物语四篇',
  subtitleZh: '罗生门、鼻子、芋粥与地狱变',
  authorOriginal: '芥川龍之介',
  authorZh: '芥川龙之介',
  authorNoteLabel: '作者原注',
  year: '1915–1918',
  publisher: '阿蘭陀書房 / 新潮社 / 春陽堂, 東京',
  collection: '羅生門 (1917) & 傀儡師 (1919)',
  descriptionZh:
    '大正四年（1915 年）十一月至大正七年（1918 年）五月间，年仅二十三至二十六岁的芥川龙之介接连在《帝国文学》、第四次《新思潮》、《新小说》以及《大阪每日新闻》和《东京日日新闻》发表了以平安时代为舞台的系列短篇，后分别结集于处女作短篇集《罗生门》（阿兰陀书房，1917 年）、《鼻子》（春阳堂，1918 年）与《傀儡师》（新潮社，1919 年）。其中大正五年二月刊出的《鼻子》深获夏目漱石激赏，漱石亲笔致信盛赞其「落笔沉着，毫不故作诙谐而自然生出幽默，题材新颖，结构周密妥帖」，令这位东京帝国大学英文科青年学子一举跻身大正文坛核心。本卷据筑摩书房与岩波书店《芥川龙之介全集》权威底本，完整收录这组「王朝物（平安朝题材小说）」中最具代表性的四篇名作。\n\n这四篇作品的叙事骨架，皆取自平安末期至镰仓初期的说话集《今昔物语集》与《宇治拾遗物语》。与当时统治日本文坛的自然主义「私小说」传统针锋相对，芥川在随笔《昔》中曾坦陈自己借用王朝古谭的真正用意：并非出于怀古趣味，而是为了把某一个近代心理主题表现得鲜明有力，必须借「遥远的昔日」剥离现代日常琐事的芜杂干扰。在他的翻写之下，原本粗粝简朴的民间奇闻被注入了精密如解剖刀般的现代心理透视——从法国作家布泰与俄国作家尼古拉·果戈理式的冷峻反讽，到与平安朝制度名物严丝合缝的视觉布景，古典说话遂蜕变为勘探现代人精神困局的寓言剧场。\n\n按创作年代顺序通读四篇，可以清晰看见芥川早期思想与美学的演进脉络：**《罗生门》**（1915 年）借灾荒废都城楼上的拔发老妪与失业下人，剥开道德义愤背后赤裸的求生利己法则；**《鼻子》**（1916 年）围绕池尾高僧禅智内供五六寸长的奇鼻失而复得，冷眼剖析受伤的自尊心与「旁观者的利己主义」；**《芋粥》**（1916 年）追随摄政藤原基经府中一名受尽嘲弄的赤鼻五位侍卫远赴越前敦贺，揭示人唯有在守护尚未实现的渺小渴望时方才幸福、一旦欲望被巨量满足反倒陷入幻灭的悖论；压卷长篇**《地狱变》**（1918 年）则借堀川大殿府中一名世故老家臣恭谨而暗藏寒意的追述，铺陈怪僻画师良秀与专制权臣之间的较量，直至烈焰腾空的槟榔毛牛车前，伦理人情彻底焚毁于**艺术至上主义的法悦与毁灭**之中。',
  chapters: [
    {
      id: 'ch1-rashomon',
      number: '第一篇 (1915)',
      titleOriginal: '羅生門',
      titleZh: '罗生门',
      sections: [rashomonSection]
    },
    {
      id: 'ch2-hana',
      number: '第二篇 (1916)',
      titleOriginal: '鼻',
      titleZh: '鼻子',
      sections: [hanaSection]
    },
    {
      id: 'ch3-imogayu',
      number: '第三篇 (1916)',
      titleOriginal: '芋粥',
      titleZh: '芋粥',
      sections: [imogayuSection]
    },
    {
      id: 'ch4-jigokuhen',
      number: '第四篇 (1918)',
      titleOriginal: '地獄変',
      titleZh: '地狱变',
      sections: [...jigokuhenPart1Sections, ...jigokuhenPart2Sections]
    }
  ]
};
