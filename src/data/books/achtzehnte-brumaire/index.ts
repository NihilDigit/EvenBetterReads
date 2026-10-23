import type { BookMeta } from '../../../types/book';
import { brumaireDedication, brumairePart1Sections } from './part-1';
import { brumairePart2Sections } from './part-2';
import { brumairePart3Sections } from './part-3';
import { brumairePart4Sections } from './part-4';
import { brumairePart5Sections } from './part-5';

export const achtzehnteBrumaire: BookMeta = {
  slug: 'achtzehnte-brumaire',
  vol: 'VOL. 09',
  langOriginal: 'DE',
  titleOriginal: 'Der achtzehnte Brumaire des Louis Bonaparte',
  subtitleOriginal: 'Die Revolution von 1848 bis zum Staatsstreich von 1851',
  titleZh: '路易·波拿巴的雾月十八日',
  subtitleZh: '从一八四八年革命到一八五一年政变',
  authorOriginal: 'Karl Marx',
  authorZh: '卡尔·马克思',
  authorNoteLabel: '马克思原注',
  year: '1852',
  publisher: 'Die Revolution, New York / Otto Meissner, Hamburg',
  collection: 'Historisch-politische Schriften',
  descriptionZh:
    '1851 年 12 月 2 日，法兰西第二共和国总统路易·波拿巴效仿其伯父拿破仑一世在 1799 年雾月十八日（11 月 9 日）推翻督政府的先例，调动军队解散立法国民议会，随后恢复帝制。紧随事变写成的这部著作，拒绝了维克多·雨果将政变归咎于个人暴行的道德斥责，也拒斥了蒲鲁东将政变视为历史必然进展的客观主义辩护，转而追问：**法兰西的阶级斗争怎样造成了种种条件和局势，使得一个平庸而滑稽的角色有可能扮演英雄的戏份。**\n\n马克思将 1848 年 2 月至 1851 年 12 月的政治史划分为一条不断后退的下降路线：巴黎无产阶级在 1848 年六月起义中被资产阶级共和国血腥镇压后，小资产阶级民主派（山岳党）又在 1849 年 6 月 13 日的和平示威中溃败；由正统派（大地产）与奥尔良派（金融与工业资本）联合组成的「秩序党」虽然借议会制共和国实现了整个资产阶级的共同统治，却在镇压民众运动的过程中一步步废除出版自由、结社权与普选权，直至议会外的工商业资产阶级为了保住私人钱袋的安宁，主动背弃自身的议会代表与报界文人，听任波拿巴的刺刀终结议会制度。\n\n在终章对波拿巴政权社会基础的剖析中，马克思揭示了支撑起这具拥有五十万军队与五十万官吏之中央集权寄生国家机器的真正阶级底座——法兰西人数最多的小块土地农民（Parzellenbauern）。由于分散孤立的小农经济容不得社会分工与横向联结，千百万农户如同装在一个袋子里的**「一袋马铃薯」**，虽处于相同的经济条件却无法形成全国性的政治组织：**「他们不能代表自己，一定要别人来代表他们。」**当十九世纪的高利贷抵押债务与沉重赋税吞噬了《拿破仑法典》曾赋予小农的土地红利，「拿破仑观念」便沦为小块土地所有制临终挣扎的幻觉，而现代社会的解放唯有在打碎这架旧军事官僚国家机器之后方能实现。',
  chapters: [
    {
      id: 'achtzehnte-brumaire-ch1',
      number: 'Kapitel I–VII (1852 / 1869)',
      titleOriginal: 'Der achtzehnte Brumaire des Louis Bonaparte',
      titleZh: '路易·波拿巴的雾月十八日',
      dedication: brumaireDedication,
      sections: [
        ...brumairePart1Sections,
        ...brumairePart2Sections,
        ...brumairePart3Sections,
        ...brumairePart4Sections,
        ...brumairePart5Sections
      ]
    }
  ]
};
