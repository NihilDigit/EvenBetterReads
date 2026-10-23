import type { BookMeta } from '../../../types/book';
import { podpolyePart1Sections } from './part-1';
import { podpolyePart2Sections } from './part-2';
import { podpolyePart3Sections } from './part-3';

export const zapiskiIzPodpolya: BookMeta = {
  slug: 'zapiski-iz-podpolya',
  vol: 'VOL. 10',
  langOriginal: 'RU',
  titleOriginal: 'Записки из подполья',
  subtitleOriginal: 'Часть I · Подполье',
  titleZh: '地下室手记',
  subtitleZh: '第一部：地下室',
  authorOriginal: 'Fyodor Dostoevsky',
  authorZh: '费奥多尔·陀思妥耶夫斯基',
  authorNoteLabel: '陀思妥耶夫斯基原注',
  year: '1864',
  publisher: 'Журнал «Эпоха», Санкт-Петербург',
  collection: 'Полное собрание сочинений · Том V',
  descriptionZh:
    '1864 年春刊载于圣彼得堡《时代》杂志的《地下室手记》，是现代存在主义文学的真正源头。叙述者是一名年届四十、隐居于彼得堡阴暗半地下室的退休八品文官；在这部由十一章构成的哲学独白中，他将矛头直指十九世纪席卷欧洲与俄国知识界的启蒙乐观主义、边沁与密尔的功利主义算术，以及车尔尼雪夫斯基在《怎么办？》中奉为人类终极福祉的「理性利己主义」与「水晶宫」乌托邦。\n\n在地下室人看来，首先必须被粉碎的便是「人只要认清自身真正利益便决不会作恶」的决定论教条。他指出，十九世纪的科学、统计学与自然法则试图将人类的一切欲望编入对数表与日历，把活生生的人贬降为**「钢琴上的一个琴键」**或**「管风琴滚筒上的一个音栓」**。然而，在健康、安乐与算定无误的利益之上，人始终保有一项最隐秘、哪怕付出毁灭代价也绝不肯让渡的「最有利的利益」——**独立的自由意志与任性（своеволие）**。\n\n为了证明自己是一个有血有肉的人而非钢琴琴键，人甚至会蓄意违背自身利益、蓄意喜爱痛苦与混乱，乃至在一切都被算成「二二得四」的万年水晶宫落成之际，忍不住暗中朝它吐舌头。正如他在第九章掷出的那句判词：**「二二得四已经不再是生命了，诸位先生，而是死神的开端。」**二十三年后，尼采在尼斯旧书摊偶遇此作，当即惊叹在陀思妥耶夫斯基身上认出了血缘至亲。',
  chapters: [
    {
      id: 'zapiski-iz-podpolya-part-1',
      number: 'Часть I · Главы I–XI (1864)',
      titleOriginal: 'Часть I. Подполье',
      titleZh: '第一部：地下室',
      sections: [
        ...podpolyePart1Sections,
        ...podpolyePart2Sections,
        ...podpolyePart3Sections
      ]
    }
  ]
};
