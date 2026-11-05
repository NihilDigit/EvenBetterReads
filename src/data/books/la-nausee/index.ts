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
    '1938年春由巴黎伽利玛出版社推出的《恶心》（原拟题《忧郁》，后采纳出版人加斯东·伽利玛建议定名），是让-保罗·萨特将胡塞尔现象学与存在哲学熔铸为小说形式的奠基之作。全书脱胎于萨特1931至1936年在诺曼底港口城市勒阿弗尔（书中化名“布维尔”，意为“泥城”）执教中学哲学以及赴柏林法兰西学院研修现象学期间长达七年的“偶然性笔记”。三十岁的历史学者安托万·洛冈丹结束了六年的跨洲漂泊，隐居布维尔市立图书馆撰写十八世纪外交冒险家罗尔邦侯爵的传记，却在海滩鹅卵石、门把手、啤酒杯与紫红色背带的日常触感中，骤然遭遇了一场席卷知觉底层的存在论危机。\n\n在第一卷由无日期残页与星期一至星期六日记构成的精密观察录中，洛冈丹一步步剥落了覆盖在世界表面的工具性用途、社会契约与语言分类。当他在小酒馆与房间里直面“镜子的陷阱”，人类面孔褪去社会表情而还原为盲目蠕动的“水螅体”，呼应了萨特在《自我的超越性》（La Transcendance de l’Ego）中对实体化“自我”的拆解；当他在市立图书馆与按字母顺序通读馆藏的“自学者”交锋，并研读巴尔扎克《欧也妮·葛朗台》与关于罗尔邦侯爵的历史档案时，古典人文主义与十九世纪现实主义小说赖以维系的因果秩序随之瓦解。\n\n这一现象学还原在星期五傍晚与星期六中午抵达了全书第一部分的核心命题：**“人必须作出选择：活着还是讲述（vivre ou raconter）。”**真实的“活着”处于偶然、松垮且不可逆的赤裸时间流中，分秒只是单调地向前累加，既无开端亦无终结；而所谓的“奇遇”（aventure），则是“讲述”站在已知结局的终点倒果为因，将原本偶然的细节镀上目的论的宿命金光。当记忆与历史传记的伪饰尽数剥落，唯有咖啡馆留声机里反复旋转的爵士乐唱片《总有一天》（Some of These Days），以音符之间不可增减的严整必然性，在黏滞的偶然存在之外显露出审美创造的微光。',
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
