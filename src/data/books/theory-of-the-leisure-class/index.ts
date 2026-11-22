import type { BookMeta } from '../../../types/book';
import { tlcPrefaceCh1Sections } from './preface-ch1';
import { tlcCh2Sections } from './ch2';
import { tlcCh3Sections } from './ch3';
import { tlcCh4Sections } from './ch4';
import { tlcCh5Sections } from './ch5';

export const theoryOfTheLeisureClass: BookMeta = {
  slug: 'theory-of-the-leisure-class',
  vol: 'VOL. 23',
  langOriginal: 'EN',
  categories: ['economics', 'history'],
  aiModel: 'Gemini-4-Carbon',
  titleOriginal: 'The Theory of the Leisure Class',
  subtitleOriginal: 'An Economic Study in the Evolution of Institutions (Preface & Chapters I–V)',
  titleZh: '有闲阶级论',
  subtitleZh: '关于制度演化的经济学研究（上卷：原序与第一至五章）',
  authorOriginal: 'Thorstein Veblen',
  authorZh: '索尔斯坦·凡勃伦',
  authorNoteLabel: '凡勃伦原注',
  year: '1899',
  publisher: 'The Macmillan Company, New York',
  collection: 'First Edition (February 1899)',
  descriptionZh:
    '一八九九年二月，任教于芝加哥大学政治经济学系的挪威裔美国经济学家索尔斯坦·凡勃伦由纽约麦克米伦公司出版处女作**《有闲阶级论：关于制度演化的经济学研究》**。十九世纪末正值美国「镀金时代」托拉斯巨头崛起与豪门奢靡风气鼎盛之际，芝加哥大学本身即由约翰·洛克菲勒斥巨资捐建；身为挪威移民农家子弟的凡勃伦以局外人的冷峻目光审视镀金时代上流社会，同时打破古典政治经济学与边际效用学派将人简化为被动计算苦乐之「快乐与痛苦的闪电计算器」的静态假定。他将达尔文演化论引入社会经济分析，开创美国**制度经济学**传统：经济生活并非自然法则下恒定不变的均衡，而是人类思维习惯与社会制度随物质技术条件演进而不断重塑的累积选择过程。凡勃伦在全书特意省去学究式的脚注引证，借不动声色的民族志观察笔法，将波利尼西亚酋长禁忌、冰岛萨迦武士与现代都会富豪的管家号衣、社交礼仪并置在同一演化谱系下加以解剖。\n\n在导论与前两章中，凡勃伦融合摩尔根与斯宾塞的人类学阶段论，回溯有闲阶级与私有财产制度的历史起源。他指出，在早期的**和平蒙昧状态**下，社群规模狭小、生产剩余匮乏，人与人之间尚无阶级分化，主导人类活动的是追求有效创造与厌恶徒劳耗费的**工作本能**。随着生产工具进步与物质剩余出现，人类社会跨入崇尚劫掠与战争的**野蛮文化**阶段，原始万物有灵论的思维习惯将人类活动一分为二：搏击猛兽与杀伐掳掠被奉为彰显超群**勇武**的尊荣**功勋**，由健壮男子垄断；日常耕作与器物制造则沦为屈辱卑贱的繁琐**苦役**，被推卸给妇女与战俘奴隶。私有财产并非如洛克传统所言源于个体生产劳动的自然权利，而是始于武士强夺敌方妇女作为炫耀战功的活体战利品。当劫掠部落演进为定居商业社会后，赤裸的武力猎取转化为围绕财富积累展开的**金钱竞赛**：财产取代战利品成为衡量个人尊卑高下的惯常标志，生产性劳动则在习俗观念中长期背负污名，免于产业劳作遂成为高等身份的首要凭证。\n\n本卷完整收录一八九九年初版原序与第一至五章，系统呈现凡勃伦全部核心概念大厦的奠基部分。第三、四章揭示金钱实力若要赢得社会敬重，就必须转化为众人可感的公开展示，由此衍生出两条相辅相成的体面机制：其一是**炫耀性闲暇**，即借繁复的社交礼仪、严苛的教养规矩以及古典死语言等非实用学养，证明自身绝未染指谋生劳作，并驱使妻子与穿号衣的仆役替主人履行**代理闲暇**；其二是**炫耀性消费**，即对珍馐佳肴、烈酒华服与盛大宴饮作超出生理所需的铺张耗费，并借妻眷与侍从的穿戴排场施行**代理消费**。随着现代城市人口流动加剧、熟人社会瓦解，一目了然的炫耀性消费逐渐取代炫耀性闲暇而跃居展示财力的主轴；这两大机制的共同底色，正是凡勃伦在严格技术意义上界定的**炫耀性浪费**。第五章进而剖析**金钱生活水准**的棘轮惯性：上层有闲阶级所确立的体面开支准则顺着社会阶梯层层下渗，塑造各阶层牢不可破的消费习惯，不仅吞噬现代产业效率提升所带来的剩余产品，甚至迫使中下阶层在隐秘的家庭日常起居乃至生育繁衍上节衣缩食，只为在公共视线所及之处维系不坠的体面排场。',
  chapters: [
    {
      id: 'tlc-vol1',
      number: 'Preface & Chapters I–V (1899)',
      titleOriginal: 'The Theory of the Leisure Class (Preface & Chapters I–V)',
      titleZh: '有闲阶级论（上卷：原序与第一至五章）',
      sections: [
        ...tlcPrefaceCh1Sections,
        ...tlcCh2Sections,
        ...tlcCh3Sections,
        ...tlcCh4Sections,
        ...tlcCh5Sections,
      ],
    },
  ],
};
