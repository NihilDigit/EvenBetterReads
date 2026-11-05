import type { BookMeta } from '../../../types/book';
import { vorlesung1Sections } from './vorlesung-1';
import { vorlesung2Sections } from './vorlesung-2';
import { nachwortSection } from './nachwort';

export const wasIstMetaphysik: BookMeta = {
  slug: 'was-ist-metaphysik',
  vol: 'VOL. 13',
  langOriginal: 'DE',
  titleOriginal: 'Was ist Metaphysik?',
  subtitleOriginal: 'Freiburger Antrittsvorlesung (1929) mit dem Nachwort (1943)',
  titleZh: '形而上学是什么？',
  subtitleZh: '弗赖堡就职演说（一九二九）附一九四三年后记',
  authorOriginal: 'Martin Heidegger',
  authorZh: '马丁·海德格尔',
  authorNoteLabel: '海德格尔原注',
  year: '1929',
  publisher: 'Friedrich Cohen, Bonn / Vittorio Klostermann, Frankfurt am Main',
  collection: 'Wegmarken (GA 9)',
  descriptionZh:
    '一九二九年七月二十四日，马丁·海德格尔在接替胡塞尔就任弗赖堡大学哲学教席的公开演说**《形而上学是什么？》**中，未采取学科概览的通例，而是直接探讨一个具体的形而上学问题。演说从在场各门实证科学的自身规定切入：科学「唯独研究存在者，此外更无他物」。海德格尔指出，科学在界定自身本分并摒弃「无（das Nichts）」之际，却不得不援引这个「无」来标明存在者的边界。\n\n围绕「无」的展开，演说对传统形而上学与形式逻辑提出了根本质疑：形式逻辑以矛盾律裁定追问「无」属于自相悖谬，并将「无」视为知性「否定（Verneinung）」判断派生出的空概念；海德格尔则论证「无」比「非」与否定更为源始。为了在生存论上通达这一非对象性的「无」，演说区分了在情绪中向人显露的「存在者整体」与针对特定威胁之物的日常之「怕（Furcht）」，将分析引向此在罕见的基本现身情态——**畏（Angst）**。在畏的阴森不适中，存在者整体滑脱远去，「无本身无化（Das Nichts selbst nichtet）」。这种无化并非毁灭或逻辑勾销，而是对滑脱中的存在者整体的拒斥性指引，使存在者首次作为「它是存在者而非无」向此在敞开。此在预先悬持于「无」之中而超出存在者整体的结构，即此在的**超越（Transzendenz）**，它构成了人类自由与科学追问的生存论前提，并最终引出形而上学的基本问题：**「为什么竟有存在者存在，而偏偏不是无？」**\n\n本卷合璧收录一九二九年就职演说与一九四三年增补的**《〈形而上学是什么？〉后记》**，并完整译出第一版（1929）、第三版（1931）、第四版（1943）、第五版（1949）至《路标》第一版（1967）的历版页边手稿批注。在《后记》中，海德格尔从「存在之真理」与「克服形而上学」的视角出发，逐一回应了演说发表后学界提出的「虚无主义」「畏的怯懦哲学」与「反逻辑非理性主义」三项主要质疑，阐明「无」作为「存在的面纱」如何指示出存在与存在者的区分，并借**算计性思维（rechnendes Denken）**与**本质性思维（wesentliches Denken）**的对举，将人的本质规定为回应存在之声、守护存在之真理的「存在的看护者」。',
  chapters: [
    {
      id: 'was-ist-metaphysik-ch1',
      number: 'Wegmarken (1929 / 1943)',
      titleOriginal: 'Was ist Metaphysik? (1929) mit dem Nachwort (1943)',
      titleZh: '形而上学是什么？（一九二九年就职演说与一九四三年后记）',
      sections: [...vorlesung1Sections, ...vorlesung2Sections, nachwortSection]
    }
  ]
};
