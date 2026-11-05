import type { BookMeta } from '../../../types/book';
import {
  laNauseeDedication,
  laNauseeEpigraph,
  laNauseePart1ASections
} from './part-1a';
import { laNauseePart1BSections } from './part-1b';
import { laNauseePart1CSections } from './part-1c';
import { laNauseePart1DSections } from './part-1d';

export const laNausee: BookMeta = {
  slug: 'la-nausee',
  vol: 'VOL. 14',
  langOriginal: 'FR',
  titleOriginal: 'La Nausée',
  subtitleOriginal: 'Journal d’Antoine Roquentin (Première partie)',
  titleZh: '恶心',
  subtitleZh: '安托万·洛冈丹日记（第一卷）',
  authorOriginal: 'Jean-Paul Sartre',
  authorZh: '让-保罗·萨特',
  authorNoteLabel: '原书底注',
  year: '1938',
  publisher: 'Éditions Gallimard, Paris',
  collection: 'Collection Blanche (NRF)',
  descriptionZh:
    '一九三八年由巴黎伽利玛出版社出版的《恶心》，脱胎于让-保罗·萨特一九三一至一九三六年间在勒阿弗尔执教中学哲学及赴柏林法兰西学院研读胡塞尔现象学期间撰写的「论偶然」手稿。小说以私人日记体裁展开：三十岁的安托万·洛冈丹结束六年海外游历后定居虚构海港城市布维尔，在市立图书馆整理十八世纪政治人物罗尔邦侯爵的史料档案；在此期间，他在海滩鹅卵石、门把手、啤酒杯与紫红色背带等日常物件上感受到一种难以名状的「恶心」——当覆盖在事物表面的日常实用功能与语言分类剥落，事物的存在便显露出偶然、过剩且无法还原为概念的本来面目。\n\n在第一卷由无日期散页与一月二十五日星期一至星期六构成的日记中，洛冈丹一方面记录下日常知觉与人际场景的变化，另一方面在考订罗尔邦侯爵书信与档案的过程中，发觉散乱的史料事实本身并不内含现成的统一性，历史传记的连贯秩序实则是研究者从当下视角出发的主观重构。\n\n这一知觉经验与历史考据的双重困境，在第一卷末尾指向关于时间与叙事的核心区分：**「人必须作出选择：活着还是讲述（vivre ou raconter）。」**真实的「活着」处于不可逆且无预设目的的直接时间流中，分秒只是单调地向前累加，既无开端亦无终结；而所谓的「奇遇（aventure）」，则是「讲述」从已知结局出发对偶然事件进行的逆向重构。',
  chapters: [
    {
      id: 'la-nausee-premiere-partie',
      number: 'Première partie (I–VIII)',
      titleOriginal: 'Journal d’Antoine Roquentin (Première partie)',
      titleZh: '安托万·洛冈丹日记（第一卷）',
      dedication: laNauseeDedication,
      epigraph: laNauseeEpigraph,
      sections: [
        ...laNauseePart1ASections,
        ...laNauseePart1BSections,
        ...laNauseePart1CSections,
        ...laNauseePart1DSections
      ]
    }
  ]
};
