import type { BookMeta } from '../../../types/book';
import { conference1Sections } from './conference-1';
import { conference2Sections } from './conference-2';
import { conference3Sections } from './conference-3';
import { discussionSections } from './discussion';

export const existentialismeEstUnHumanisme: BookMeta = {
  slug: 'existentialisme-est-un-humanisme',
  vol: 'VOL. 15',
  langOriginal: 'FR',
  categories: ['philosophy'],
  aiModel: 'Gemini-4-Carbon',
  titleOriginal: "L'Existentialisme est un humanisme",
  subtitleOriginal: 'Conférence du 29 octobre 1945 suivie de la discussion',
  titleZh: '存在主义是一种人道主义',
  subtitleZh: '一九四五年十月二十九日公开演说附讨论实录',
  authorOriginal: 'Jean-Paul Sartre',
  authorZh: '让-保罗·萨特',
  authorNoteLabel: '萨特原注',
  year: '1946',
  publisher: 'Les Éditions Nagel, Paris',
  collection: 'Collection Pensées',
  descriptionZh:
    '一九四五年十月二十九日晚，让-保罗·萨特应雅克·卡尔米与马克·贝格贝德创办的「今日俱乐部」（Club Maintenant）之邀，在巴黎中央工艺制造学院校友会礼堂发表题为**《存在主义是一种人道主义》**的公开演说，次年初由巴黎纳热尔出版社据速记稿收入「思想丛书」印行。彼时正值巴黎解放周年，「存在主义」一词由学院现象学演变为左岸报刊热议的文化标签，同时面临来自共产党与天主教两方面的责难：法国共产党理论家指责它从孤立的笛卡尔式主体性出发，使人滞留于无从行动的资产阶级「绝望的寂静主义」；天主教批评家则指责它着意渲染人性的阴暗卑劣，并因取消上帝诫命与永恒价值而将人类行为引向无从评判的无端任意。\n\n演说围绕无神论存在主义的第一原理——**「存在先于本质（l’existence précède l’essence）」**——逐层回应上述责难。萨特以工匠按既定概念与配方制造「裁纸刀（coupe-papier）」的技术世界观，对照传统神学造物论及十八世纪启蒙哲学保留的普遍「人性」概念，指出人首先在世界中涌现，随后才通过主观活出的**筹划（projet）**自行界定自身，并在为自己立法的同时为全人类承担不可推卸的选择责任。由此出发，演说重新界定了三个常遭误解的核心概念：**焦虑（angoisse）**并非逃避行动的麻痹状态，而是人在缺乏外在确证下独自承担典范责任时的清醒意识；**被抛境况（délaissement）**意味着上帝既不存在，任何现成的基督教诫命、康德形式伦理或内在情感都无法替处于具体困境中的个体（如在投身自由法国武装力量与留守照料母亲之间抉择的青年学生）预先裁定道路，人「注定是自由的」；**绝望（désespoir）**则是指行动者仅依靠自身意志所能把握的现实可能性行事，而不寄望于抽象的人性善或历史宿命论。在后半部分，演说进一步阐明「我思」并非封闭的唯我论，人在直接把握自身之际便在**主体间性（intersubjectivité）**的世界中同时发现作为自身存在条件的他人，并以普遍可理解的「人类境况」取代先验固定的「人性」；同时以揭露逃避自由的**自欺（mauvaise foi）**确立评判尺度，严格区分《恶心》曾嘲讽过的那种将人类奉为崇拜对象的封闭人道主义（如奥古斯特·孔德的「人道教」），与将人理解为不断向自身之外超越并自我立法的存在主义人道主义。\n\n本卷完整译出演说正文及一九四六年初版附印的讨论实录（Discussion）。在讨论环节中，萨特首先就哲学通俗化与现实政治介入的关系回答提问，随后与前超现实主义成员、马克思主义理论家皮埃尔·纳维尔展开长篇论辩。纳维尔从历史唯物主义与自然科学因果论立场出发，批评存在主义以抽象的「人类境况」充当十八世纪「人性论」的焦虑变体，指责其关于「器具性（ustensilité）」与或然性客体的划分割裂了自然与社会历史的客观因果条件，实质上是在战后危机中复活激进社会主义式的自由主义传统；萨特则从认识论根基予以回应，论证纯粹客体的世界只能提供或然性假说，唯有立足于主体性的直接确定性，历史辩证法与革命行动才能获得真理与价值的支点。',
  chapters: [
    {
      id: 'existentialisme-est-un-humanisme-ch1',
      number: 'Collection Pensées (1946)',
      titleOriginal: "L'Existentialisme est un humanisme (1945 / 1946)",
      titleZh: '存在主义是一种人道主义（公开演说与讨论实录）',
      sections: [
        ...conference1Sections,
        ...conference2Sections,
        ...conference3Sections,
        ...discussionSections
      ]
    }
  ]
};
