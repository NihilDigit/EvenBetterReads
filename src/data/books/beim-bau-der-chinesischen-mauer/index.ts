import type { BookMeta } from '../../../types/book';
import { kafkaMauerPart1Sections } from './part-1';
import { kafkaMauerPart2Sections } from './part-2';

export const beimBauDerChinesischenMauer: BookMeta = {
  slug: 'beim-bau-der-chinesischen-mauer',
  vol: 'VOL. 12',
  langOriginal: 'DE',
  titleOriginal: 'Beim Bau der Chinesischen Mauer',
  subtitleOriginal: 'Und andere Parabeln aus dem Nachlaß',
  titleZh: '中国长城建造时',
  subtitleZh: '及晚期形而上学寓言集',
  authorOriginal: 'Franz Kafka',
  authorZh: '弗朗茨·卡夫卡',
  authorNoteLabel: '卡夫卡原注',
  year: '1917',
  publisher: 'Gustav Kiepenheuer Verlag, Berlin',
  collection: 'Nachgelassene Schriften · 1914–1920',
  descriptionZh:
    '博尔赫斯在《卡夫卡及其先驱》（1951）中指出，卡夫卡作品的一个基本形式结构，是与公元前五世纪爱利亚的芝诺同构的**无穷递归与连续统分割悖论**——正如运动着的物体要抵达终点，必须先穿过中点、再穿过中点的中点，从而在无穷分割的空间里寸步难行。\n\n本卷汇集了卡夫卡于 1914 至 1920 年间写成的六篇代表性短篇与寓言。在同名篇目**《中国长城建造时》**（1917）中，一位古代中国南方的年迈石匠以制度史考据口吻，剖析为何万里长城采取处处留下缺口的「分段筑城法（System des Teilbaues）」，继而引出把长城视为新巴别塔地基的学者，以及内嵌于篇中的**《帝国的一则圣旨》**：皇帝在临终病榻前向渺小的臣民发出一道口谕，然而由于内宫殿堂、庭院与京城在空间上的无穷嵌套，胸前佩着太阳徽记的信使纵使耗尽千秋万代，也无法跨出外城门一步。\n\n与之并列的五篇短章，分别从不同角度推演古典神话与律法命题：**《市徽》**讲述巴别通天塔如何因「后代技术必定比当代更进步」的理性算计而沦为永不动工的内战废墟；**《在法的门前》**将律法凝缩为一扇唯独为乡下人一人敞开、却又在他咽气瞬间关闭的空门；**《普罗米修斯》**以四重传说将神话还原为「不可解释的岩山」；**《塞壬的沉默》**将荷马史诗改写为塞壬以沉默对抗奥德修斯、而奥德修斯又以天真假象应对众神的博弈；终篇**《猎人格拉古》**则记述一艘因舵手分心而错失冥府航向的死亡驳船，长年漂泊在尘世水域之中。',
  chapters: [
    {
      id: 'beim-bau-der-chinesischen-mauer-ch1',
      number: 'Sechs Parabeln (1914–1920)',
      titleOriginal: 'Beim Bau der Chinesischen Mauer',
      titleZh: '中国长城建造时及晚期寓言',
      sections: [...kafkaMauerPart1Sections, ...kafkaMauerPart2Sections]
    }
  ]
};
