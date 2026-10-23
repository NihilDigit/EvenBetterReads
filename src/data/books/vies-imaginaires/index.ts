import type { BookMeta } from '../../../types/book';
import { schwobDedication, schwobPart1Sections } from './part-1';
import { schwobPart2Sections } from './part-2';

export const viesImaginaires: BookMeta = {
  slug: 'vies-imaginaires',
  vol: 'VOL. 11',
  langOriginal: 'FR',
  titleOriginal: 'Vies imaginaires',
  subtitleOriginal: 'L’Art de la Biographie',
  titleZh: '假想的传记',
  subtitleZh: '传记的艺术与八篇奇人列传',
  authorOriginal: 'Marcel Schwob',
  authorZh: '马塞尔·施沃布',
  authorNoteLabel: '施沃布原注',
  year: '1896',
  publisher: 'Charpentier et Fasquelle, Paris',
  collection: 'Édition originale de 1896',
  descriptionZh:
    '1896 年初版于巴黎的《假想的传记》，是法国十九世纪末博学鬼才与古典语文学家马塞尔·施沃布的代表作，也是豪尔赫·路易斯·博尔赫斯亲口承认的直接师承——博尔赫斯在处女作小说集《恶棍列传》（1935）序言中明言，其写法直接取法自施沃布的《假想的传记》。\n\n在开篇著名的理论宣言《传记的艺术》中，施沃布提出了一条彻底颠覆近代历史主义的准则：**「历史科学使我们陷入普遍性的不确定之中，而艺术则与普遍观念针锋相对，只描绘个别与独一无二之物。」**在他看来，传记家不必敬畏大人物的历史功业或道德教益，而应像日本浮世绘巨匠北斋一样，以同等的热情去捕捉最崇高圣哲与最卑劣恶棍身上那道独一无二的生命折痕——哪怕只是苏格拉底脖子上的赘疣、亚历山大大帝歪斜的脖颈，或是亚里士多德腹上系着的暖油皮袋。\n\n本卷自法文初版完整译出《传记的艺术》及八篇最具代表性的列传：从纵身跃入埃特纳火山口、仅留下一只青铜凉鞋的古希腊哲人**恩培多克勒**，到只为令自己名字永垂不朽而焚毁以弗所阿耳忒弥斯神庙的纵火犯**赫罗斯特拉图斯**；从与名门少女当众践行赤贫婚姻的犬儒学者**克拉特斯**、服下春药在癫狂中写就《物性论》的诗人**卢克莱修**、沦为真实流氓并死于荒野的《萨蒂利孔》作者**佩特罗尼乌斯**，直至被但丁写入《地狱篇》的异端修士**多尔奇诺**、痴迷几何透视多面体而饿死于蜘蛛网画卷旁的佛罗伦萨画师**乌切洛**，以及在爱丁堡浓雾中把窒息谋杀变成流水线手艺的**伯克与海尔先生**。',
  chapters: [
    {
      id: 'vies-imaginaires-ch1',
      number: 'Préface & Vies choisies (1896)',
      titleOriginal: 'Vies imaginaires',
      titleZh: '假想的传记',
      dedication: schwobDedication,
      sections: [...schwobPart1Sections, ...schwobPart2Sections]
    }
  ]
};
