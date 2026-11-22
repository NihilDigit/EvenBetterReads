import type { BookMeta } from '../../../types/book';
import { dedicationTelescopeSections } from './dedication-telescope';
import { moonStarsSections } from './moon-stars';
import { mediceanPlanetsJanSections } from './medicean-planets-jan';
import { mediceanPlanetsFebMarSections } from './medicean-planets-feb-mar';

export const sidereusNuncius: BookMeta = {
  slug: 'sidereus-nuncius',
  vol: 'VOL. 20',
  langOriginal: 'LA',
  categories: ['philosophy', 'history'],
  aiModel: 'Gemini-4-Carbon',
  titleOriginal: 'Sidereus Nuncius',
  subtitleOriginal:
    'Magna, longeque admirabilia spectacula pandens, suspiciendaque proponens unicuique, praesertim vero philosophis, atque astronomis',
  titleZh: '星际信使',
  subtitleZh: '向世人尤其是哲学家与天文学家展布伟大而奇异的星空景象',
  authorOriginal: 'Galileo Galilei',
  authorZh: '伽利略·伽利莱',
  authorNoteLabel: '伽利略原注',
  year: '1610',
  publisher: 'Thomas Baglionus, Venetiis',
  collection: 'Editio Princeps (Venice, March 1610)',
  descriptionZh:
    '一六〇九年夏，正在帕多瓦大学执掌数学讲席的伽利略·伽利莱获悉尼德兰工匠创制双透镜窥镜的传闻，遂依据光学折射原理自行选材磨镜，在数月之内将平凸物镜与平凹目镜组合的窥镜从线性放大三倍一路提升至二十至三十倍以上，并于同年秋冬毅然将镜筒举向夜空。一六一〇年三月十三日，这册以简练明快的新拉丁语疾书而成的薄薄四开本《星际信使》由威尼斯书商托马索·巴廖尼印行五百五十册，数日之内抢购一空，拉丁语书名中「信使」与「讯息」的双重意涵旋即随外交邮袋震动整个欧洲学界。\n\n全书以严整的几何推演与连续观测记录，接连呈献了足以瓦解亚里士多德—托勒密宇宙论根基的三大经验发现：其一，月球绝非经院自然哲学所断言的不朽光滑以太正球体，而是如同地球一般遍布环形深谷与高耸山岭，伽利略不仅利用晨昏线外孤峰受光的切线直角三角形算得月球山峰垂直高度逾四意大利里，更借新月暗面的「地球反照」证明地球是一颗光辉胜过月球的明亮游星，而非沉淀宇宙渣滓的死寂底层；其二，窥镜剥去了肉眼视象中的虚幻光晕，揭示出猎户座、昴星团中肉眼难辨的浩瀚微星，并将争讼两千年的银河与星云星还原为无数密集恒星的集合；其三，自一六一〇年一月七日至三月二日，伽利略连续追踪记录了环绕木星高速运转的四颗新行星，以无可辩驳的视觉证据打破了「一切天体皆只能绕地球单一中心回转」的同心天球教条，一举消除了哥白尼日心体系中「地球携月球绕日公转」的孤例疑难。\n\n与此同时，《星际信使》亦是一部将宫廷赞助修辞与科学优先权策略熔为一炉的近代科学体制文献。伽利略随观随排、边审边印，在卷首献辞中巧妙化用古典诗学与生辰星占图像，将木星四卫星命名为「美第奇之星」呈献给昔日门生、托斯卡纳第四代大公科西莫二世·德·美第奇，借王朝荣耀为离经叛道的新宇宙论争取政治庇护，并由此获任大公首席数学家兼哲学家——数学天文学家从此不再满足于充当「拯救现象」的历算工匠，而是以光学仪器延伸的感官经验与几何证明正面重塑自然哲学本身。',
  chapters: [
    {
      id: 'sidereus-nuncius-1610',
      number: 'Editio Princeps (Venetiis, MDCX)',
      titleOriginal: 'Sidereus Nuncius (Astronomicus Nuncius)',
      titleZh: '星际信使（一六一〇年威尼斯初版全本）',
      sections: [
        ...dedicationTelescopeSections,
        ...moonStarsSections,
        ...mediceanPlanetsJanSections,
        ...mediceanPlanetsFebMarSections
      ]
    }
  ]
};
