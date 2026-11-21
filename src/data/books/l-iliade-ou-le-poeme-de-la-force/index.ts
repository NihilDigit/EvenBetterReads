import type { BookMeta } from '../../../types/book';
import { iliadePart1Sections } from './part-1';
import { iliadePart2Sections } from './part-2';
import { iliadePart3Sections } from './part-3';

export const lIliadeOuLePoemeDeLaForce: BookMeta = {
  slug: 'l-iliade-ou-le-poeme-de-la-force',
  vol: 'VOL. 16',
  langOriginal: 'FR',
  categories: ['philosophy', 'literature', 'politics'],
  aiModel: 'Gemini-4-Carbon',
  titleOriginal: 'L’Iliade ou le poème de la force',
  subtitleOriginal: 'Cahiers du Sud (décembre 1940 – janvier 1941) / La Source grecque',
  titleZh: '伊利亚特，或力量之诗',
  subtitleZh: '一九四〇至一九四一年发表于马赛《南方手册》',
  authorOriginal: 'Simone Weil',
  authorZh: '西蒙娜·薇依',
  authorNoteLabel: '薇依原注',
  year: '1940',
  publisher: 'Les Cahiers du Sud, Marseille / Éditions Gallimard, Paris',
  collection: 'La Source grecque (Collection Espoir, 1953)',
  descriptionZh:
    '一九三九年夏至一九四〇年春，西蒙娜·薇依在第二次世界大战爆发之际撰成**《伊利亚特，或力量之诗》**，原定交由巴黎《新法兰西评论》刊发。一九四〇年六月德军占领巴黎，薇依撤回稿件随父母南迁马赛；同年十月维希政权颁布排犹法案《犹太人地位法》，剥夺犹太裔学者的教职与出版权。经友人引介，让·巴拉尔主编的马赛文学期刊《南方手册》于一九四〇年十二月号与一九四一年一月号分两期全文刊出此文，署名采用作者姓名的字母易位笔名「埃米尔·诺维斯」（Émile Novis）。一九五三年，阿尔贝·加缪将其编入伽利玛出版社「希望」丛书的薇依遗著集《希腊源泉》，列为开卷首篇。\n\n文章开篇即指出，「《伊利亚特》真正的英雄、真正的主题、它的中心，是**力量**」。薇依将「力量」界定为把一切受制于它的人变成「物」的机制：当力量行使到底时，它在最字面的意义上把活人化为尸骸；当力量悬而未决、作为生杀予夺的常驻威胁笼罩于人时，它把仍然拥有灵魂的活人变成「人与尸骸之间的折中物」，使乞命者在麻木中模仿虚无，使奴隶丧失一切内在生命。与此同时，无人能够真正据有力量：临时操持力量的战胜者同样受其盲目惯性裹挟，陷入自居天命的迷醉而逾越自身实力的边界，终在一如几何学般严整的对等报应——**涅墨西斯（Némésis）**——之下沦为下一轮毁灭的承受者，阿开亚人与特洛伊人在战局的往复倾覆中无一例外。\n\n文中引述的荷马诗行均由薇依据希腊文原典逐行重译，严格复现六音步英雄诗行的跨行顿挫与内部词序。在战争的双重石化机制之外，薇依辨析出史诗里短暂闪现的纯粹之爱——宾主、父母子女、夫妻、战友乃至死敌之间不搀杂支配欲的清明情谊，并指出整部《伊利亚特》绝无对战胜者的崇拜或对战败者的蔑视，而是以同等的苦涩与不偏不倚的温情遍照一切终有一死的凡人。文末由此延伸至古希腊悲剧与《福音书》受难叙事的精神脉络，对比罗马帝国崇尚武力与古希伯来传统将苦难等同于罪罚的历史观念，阐明唯有懂得万物皆不免于命运的摆布、永不崇拜力量、不憎恨敌人亦不蔑视受苦之人，人类方能重获源始的史诗精神。',
  chapters: [
    {
      id: 'l-iliade-ch1',
      number: 'Cahiers du Sud (1940–1941)',
      titleOriginal: 'L’Iliade ou le poème de la force',
      titleZh: '伊利亚特，或力量之诗',
      sections: [
        ...iliadePart1Sections,
        ...iliadePart2Sections,
        ...iliadePart3Sections,
      ],
    },
  ],
};
