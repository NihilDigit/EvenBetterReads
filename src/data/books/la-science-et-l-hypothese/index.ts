import type { BookMeta } from '../../../types/book';
import { poincareIntroCh1Sections } from './intro-ch1';
import { poincareCh2Sections } from './ch2';
import { poincareCh3Sections } from './ch3';
import { poincareCh4Ch5Sections } from './ch4-ch5';

export const laScienceEtLHypothese: BookMeta = {
  slug: 'la-science-et-l-hypothese',
  vol: 'VOL. 18',
  langOriginal: 'FR',
  categories: ['philosophy'],
  aiModel: 'Gemini-4-Carbon',
  titleOriginal: 'La Science et l’Hypothèse',
  subtitleOriginal:
    'Introduction, Première partie (Le nombre et la grandeur) et Deuxième partie (L’espace)',
  titleZh: '科学与假设',
  subtitleZh: '上卷：作者引言、第一编「数与量」与第二编「空间」',
  authorOriginal: 'Henri Poincaré',
  authorZh: '昂利·庞加莱',
  authorNoteLabel: '庞加莱原注',
  year: '1902',
  publisher: 'Ernest Flammarion, Paris',
  collection: 'Bibliothèque de philosophie scientifique',
  descriptionZh:
    '1902 年由巴黎弗拉马里翁出版社刊行的《科学与假设》，是法国数学家、天体力学家与理论物理学家昂利·庞加莱汇集其 1891 至 1901 年间发表于《形而上学与道德评论》及《纯科学与应用科学总评论》的多篇科学认识论论文修订编成的代表作。全书依科学对象的层级，在「怀疑一切」与「盲信一切」两种同样便利的极端态度之间辟出审慎的批判路径，逐层辨析可经验检验的物理假设、辅助定思的图像假设以及化约为定义与「乔装的约定」的形式原理。本上卷收录全书《作者引言》及讨论纯粹数学与空间基础的第一、二两编。\n\n第一编《数与量》探讨纯粹数学认识论的核心问题：倘若数学只是遵循矛盾律的形式演绎，它为何没有沦为庞大的同义反复；倘若它不断从特殊迈向普遍，它又凭何保持绝对严密性？庞加莱通过对初等算术加法与乘法递推证明的层层剖析，指出代数变形与概念「构造」本身皆停留在同一逻辑层级，真正使数学跨越有限与无限鸿沟的是把无穷多个假言三段论浓缩于单一公式的**递推推理（数学归纳法）**——它既非经验概括亦非任意约定，而是心智确知同一可能行动可无限重复的真正**先天综合判断**；在此基础上，第二章进一步追溯心智如何为消解韦伯—费希纳感官经验中「物理连续统」的内在矛盾，通过无限内插与戴德金分割主动创造出「数学连续统」。\n\n第二编《空间》转向几何学公理的认识论起源。借助罗巴切夫斯基与黎曼非欧几何的逻辑相容性及跨几何词典模型，庞加莱证明几何公设既非逻辑必然律，亦非康德式的先天综合判断；同时，由于经验测量永远作用于具体的固体与光线而非理想空间本身，任何实验都无法裁决空间本身的欧几里得或非欧本性。在区分感官「表象空间」（视觉、触觉与运动空间）与均匀无限的「几何空间」并引入理想固体「位移群」理论后，庞加莱确立了**几何约定论**：几何学原理乃是心智在经验引导下自由拣选的约定；**欧几里得几何之所以现在与将来都最为通行，并非因为它比非欧几何「更真」，而是因为它对人类的感官尺度与自然固体经验而言最为简单、最为便利。**',
  chapters: [
    {
      id: 'sh-vol1',
      number: 'Première & Deuxième parties (1902)',
      titleOriginal: 'La Science et l’Hypothèse (Introduction & Chapitres I–V)',
      titleZh: '科学与假设（上卷：引言与第一至五章）',
      sections: [
        ...poincareIntroCh1Sections,
        ...poincareCh2Sections,
        ...poincareCh3Sections,
        ...poincareCh4Ch5Sections
      ]
    }
  ]
};
