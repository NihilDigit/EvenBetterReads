import type { BookMeta } from '../../../types/book';
import { part1Sections } from './part-1';
import { part2Sections } from './part-2';
import { part3Sections } from './part-3';
import { part4Sections } from './part-4';
import { part5Sections } from './part-5';

export const elColoquioDeLosPerros: BookMeta = {
  slug: 'el-coloquio-de-los-perros',
  vol: 'VOL. 21',
  langOriginal: 'ES',
  categories: ['literature'],
  aiModel: 'Gemini-4-Carbon',
  titleOriginal: 'El coloquio de los perros',
  subtitleOriginal:
    'Novela y coloquio que pasó entre Cipión y Berganza, perros del Hospital de la Resurrección',
  titleZh: '狗的对话',
  subtitleZh: '巴利亚多利德复活医院两犬西皮翁与贝尔甘萨的奇异夜谈',
  authorOriginal: 'Miguel de Cervantes Saavedra',
  authorZh: '米格尔·德·塞万提斯',
  authorNoteLabel: '作者原注',
  year: '1613',
  publisher: 'Juan de la Cuesta, Madrid',
  collection: 'Novelas ejemplares (XII)',
  descriptionZh:
    '一六一三年，米格尔·德·塞万提斯在马德里胡安·德·拉·库埃斯塔印书馆梓行《模范小说集》，以第十一篇《骗婚记》与压卷第十二篇**《狗的对话》**构成一组精巧的双重嵌套叙事：刚刚在巴利亚多利德复活医院熬完发汗水疗的康波萨诺少尉，向好友佩拉尔塔硕士讲述自己与骗子妇人互相欺瞒而染病破财的荒唐婚事后，又声称在病房深夜亲耳听见替善士马乌德斯提灯募捐的两条护院犬——西皮翁与贝尔甘萨——忽然口吐人言，并掏出一叠亲手记录的手稿交予硕士审读，自己则倒在榻上酣睡。读者由此踏入少尉高烧发汗时的幽暗听觉空间，在真幻莫辨的叙事框格内倾听两犬直至破晓的彻夜长谈。\n\n全篇将西班牙黄金时代**流浪汉小说（novela picaresca）**的自传式社会巡礼，熔铸于古希腊琉善式**犬儒派哲学对话录**与文艺复兴人文主义诗学批评之中。一夜之间，贝尔甘萨按时间顺序追述自己频繁易主的底层生涯，依次穿过塞维利亚鲜肉门外凶悍护短的屠宰场、与田园牧歌小说判若云泥且监守自盗的牧羊场、攀附贵族门第的海外贸易富商宅邸与耶稣会拉丁文法学堂、勾结公证人与妓女设局讹诈的治安捕快及莫尼波迪奥黑帮、走江湖耍把戏的步兵连军鼓手，再流转至吉普赛部落、格拉纳达郊外吝啬的摩里斯科果园主与穷愁潦倒的喜剧诗人；西皮翁则始终以冷静审慎的对话者身份勒住它的题外漫谈，在「借哲学之名行臧否是非之实」的语言诱惑面前反复省察讽刺与恶意毁谤的伦理边界。\n\n叙事的思想张力在蒙蒂利亚医院老妇卡尼萨雷斯的暗室独白中推向顶点：这位自称大女巫卡马查门徒的老妪将贝尔甘萨认作同门女巫蒙铁拉所生双子遭妖术幻化而成的灵犬，吟出带有《圣母颂》回响的变形预言，继而以近乎奥古斯丁式的冷峻神学剖析自己明知恶习与伪善之罪却深陷习惯泥淖的无力处境，并在涂抹寒凉致幻草药膏后陷入僵死般的昏迷。两犬围绕巫术变形、感官幻觉与命运之轮的寓言释读，连同篇末复活医院病榻上炼金术士、数学家、骑士史诗补订诗人与哈布斯堡帝国「献策家」四名狂人的荒诞交响，最终收束于佩拉尔塔硕士合上手稿时的美学裁断——悬置「狗究竟曾否开口说话」的事实争辩，唯独承认文学虚构本身的布局匠心与认识力量。',
  chapters: [
    {
      id: 'el-coloquio-de-los-perros-ch1',
      number: 'Novelas ejemplares (1613)',
      titleOriginal:
        'Novela y coloquio que pasó entre Cipión y Berganza, perros del Hospital de la Resurrección',
      titleZh: '巴利亚多利德复活医院两犬西皮翁与贝尔甘萨的对话录',
      sections: [
        ...part1Sections,
        ...part2Sections,
        ...part3Sections,
        ...part4Sections,
        ...part5Sections
      ]
    }
  ]
};
