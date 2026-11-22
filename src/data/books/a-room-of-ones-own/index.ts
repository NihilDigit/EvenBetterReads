import type { BookMeta } from '../../../types/book';
import { woolfCh1Section } from './ch1';
import { woolfCh2Section } from './ch2';
import { woolfCh3Section } from './ch3';
import { woolfCh4Section } from './ch4';
import { woolfCh5Section } from './ch5';
import { woolfCh6Section } from './ch6';

export const aRoomOfOnesOwn: BookMeta = {
  slug: 'a-room-of-ones-own',
  vol: 'VOL. 22',
  langOriginal: 'EN',
  categories: ['literature', 'philosophy', 'history'],
  aiModel: 'Gemini-4-Carbon',
  titleOriginal: 'A Room of One’s Own',
  subtitleOriginal:
    'Six Essays Based upon Two Papers Read to the Arts Society at Newnham and the Odtaa at Girton',
  titleZh: '一间只属于自己的房间',
  subtitleZh: '基于纽纳姆与格顿两所女子学院演讲扩充而成的女性与小说六论',
  authorOriginal: 'Virginia Woolf',
  authorZh: '弗吉尼亚·伍尔夫',
  authorNoteLabel: '伍尔夫原注',
  year: '1929',
  publisher: 'The Hogarth Press, London',
  collection: 'First Edition (October 1929)',
  descriptionZh:
    '1928 年 10 月，弗吉尼亚·伍尔夫应邀赴剑桥大学两所女子学院——纽纳姆学院艺术学会与格顿学院学生社团——就「女性与小说」发表两场演讲；次年 10 月 24 日，她将这两篇因篇幅过长而未能当场通读的讲稿大幅改写扩充，由她与丈夫伦纳德·伍尔夫在伦敦塔维斯托克广场主持的霍加斯出版社刊行初版单行本。面对这样一个极易滑向教条宣判或琐碎作家点名录的讲题，伍尔夫悬置了全知权威的讲坛口吻，借苏格兰古民谣中的侍女之名幻化出「玛丽·比顿」这一流动的虚构叙述人格：她不向听众颁布现成的结论之金块，而是完整敞开自己如何在秋日剑桥与雾霭伦敦的漫步、碰壁、进餐、翻检书架与街头凝望之间，一步步推演出那个朴素却颠覆性的核心命题——**「女人若要写小说，就必须有钱，还要有一间只属于自己的房间。」**\n\n围绕「每年五百英镑」与「门上的一把锁」，全书前四章对文学背后的物质基础、产权法律与性别权力心理展开了犀利的谱系学剖析。从「奥克斯布里奇」男校历代王公富商馈赠堆积的醇酒珍馐与三一学院手稿馆，到「费恩汉姆」女校白水牛肉干李子的寒酸晚宴，伍尔夫追问：为何男人们世世代代源源不断向男子学院倾注巨资，女性的母亲与祖母们却分文未留？答案深埋于十九世纪晚期《已婚妇女财产法》颁布前英国普通法的「夫妻一体制」——已婚妇女在法律上没有独立财产权，其继承所得与劳动报酬悉数归丈夫所有。而在大英博物馆浩如烟海的男性论女性专著背后，她更识破了「冯·X教授」式贬抑话语的隐秘机制：数百年来，女性一直充当着一面具有魔力的放大镜，将男性的身影映照得比原本高大一倍。正是在这道物质匮乏与精神挫抑的双重铁栅下，第三章推演出著名的「莎士比亚的妹妹」思想实验——即便十六世纪真有一位与威廉具有同等天才的朱迪思·莎士比亚，她也无法进入文法学校与剧团，终将在伦敦象堡酒馆外的冬夜腹怀骨肉自戕而死；直至十七世纪末阿芙拉·本率先靠笔墨自食其力，才为简·奥斯汀在公共起居室吸墨纸下的从容书写与勃朗特姐妹的突围劈开通路。\n\n全书后两章由此从社会史批判跃入现代主义文体学与心灵哲学。在第五章虚构当代女作家玛丽·卡迈克尔的处女作《人生的历险》中，伍尔夫敏锐捕捉到两桩改写文学版图的事件：其一是挣脱男性雄辩大句式、创建贴合女性身体经验与心理节律的新句法；其二是以「克洛伊喜欢奥利维娅」打破过往文学只从同男性的关系去审视女性的单一视角，开启对女性共同工作、友谊与幽微日常经验的勘探。然而，智识自由的终极形态并非以女性的怨怼去回敬男性的傲慢——正如夏洛蒂·勃朗特因受挫而渗入笔端的个人义愤曾令其天才之翼折损，当代「A先生」小说中因性别危机而竖起的「山毛榉阴影」般巨大的「我」字同样使生机枯竭。在第六章秋晨伦敦男女同乘出租车随落叶驶入街流的顿悟中，伍尔夫激活柯勒律治**「伟大的心智是雌雄同体的」**这一美学命题：唯有当每年五百英镑与带锁房间涤尽了恐惧、顺从与苦毒，心智中的两性力量才能如莎士比亚般达成无拘无碍的白炽融合，让那位埋骨十字路口的诗人之妹在未来女性脚踏实地的劳作中真正降生。',
  chapters: [
    {
      id: 'rw-complete',
      number: 'Chapters I–VI (1929)',
      titleOriginal: 'A Room of One’s Own',
      titleZh: '一间只属于自己的房间（全六章）',
      sections: [
        woolfCh1Section,
        woolfCh2Section,
        woolfCh3Section,
        woolfCh4Section,
        woolfCh5Section,
        woolfCh6Section
      ]
    }
  ]
};
