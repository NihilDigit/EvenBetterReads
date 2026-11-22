import type { BookSection } from '../../../types/book';

export const part1Sections: BookSection[] = [
  {
    id: 'ecp-sec-1',
    roman: 'I',
    titleOriginal: 'El portento del habla y el Matadero de Sevilla',
    titleZh: '人言奇兆与塞维利亚屠宰场',
    blocks: [
      {
        id: 'ecp-s1-p01',
        type: 'paragraph',
        num: '§ 01',
        original: 'Novela y coloquio que pasó entre Cipión y Berganza, perros del Hospital de la Resurrección, que está en la Ciudad de Valladolid, fuera de la puerta del campo, a quien comúnmente llaman «Los perros de Mahudes».',
        zh: '发生在西皮翁与贝尔甘萨之间的故事与对话；它们是巴利亚多利德城[坎波门外的复活医院]{#g-ecp-s1-01}里的两头狗，世人惯常称之为[「马乌德斯的双犬」]{#g-ecp-s1-02}。',
        glosses: [
          {
            id: 'g-ecp-s1-01',
            anchor: '坎波门外的复活医院',
            content: '巴利亚多利德南郊坎波门（Puerta del Campo，通往城外大校场之门）外的复活医院（Hospital de la Resurrección），始建于 1553 年前后，专门收治贫困病患与俗称「法国疮」的梅毒患者，1890 年拆除，原址今立有塞万提斯纪念像。1601 至 1606 年腓力三世迁都巴利亚多利德期间，塞万提斯一家曾寓居距该院仅数步之遥的拉斯特罗新街。'
          },
          {
            id: 'g-ecp-s1-02',
            anchor: '「马乌德斯的双犬」',
            content: '阿隆索·德·马乌德斯（Alonso de Mahudes，约卒于 1599 年）是复活医院的募捐善士。据巴利亚多利德地方掌故记载，他每逢入夜便带领两头训练有素的护院犬走街串巷，犬颈或口中悬提灯笼与募捐篮，为医院贫病者乞讨施舍；马乌德斯去世后，「马乌德斯的双犬」（Los perros de Mahudes）遂成为当地妇孺皆知的俗谚。'
          }
        ]
      },
      {
        id: 'ecp-s1-p02',
        type: 'paragraph',
        num: '§ 02',
        original: 'CIPIÓN.—Berganza amigo, dejemos esta noche el Hospital en guarda de la confianza y retirémonos a esta soledad y entre estas esteras, donde podremos gozar sin ser sentidos desta no vista merced que el cielo en un mismo punto a los dos nos ha hecho.',
        zh: '**西皮翁：**贝尔甘萨朋友，今夜咱们且把医院交给信赖去照看，退到这僻静角落的草席堆里来吧；在这里不致被人察觉，正好尽情享用上天在同一时刻赐予你我的这桩闻所未闻的恩典。'
      },
      {
        id: 'ecp-s1-p03',
        type: 'paragraph',
        num: '§ 03',
        original: 'BERGANZA.—Cipión hermano, óyote hablar y sé que te hablo, y no puedo creerlo, por parecerme que el hablar nosotros pasa de los términos de naturaleza.',
        zh: '**贝尔甘萨：**西皮翁兄弟，我听见你在说话，也晓得自己在同你说话，可我简直不敢相信，因为我觉得咱们开口说话，实在超出了自然造化的界限。'
      },
      {
        id: 'ecp-s1-p04',
        type: 'paragraph',
        num: '§ 04',
        original: 'CIPIÓN.—Así es la verdad, Berganza; y viene a ser mayor este milagro en que no solamente hablamos, sino en que hablamos con discurso, como si fuéramos capaces de razón, estando tan sin ella que la diferencia que hay del animal bruto al hombre es ser el hombre animal racional, y el bruto, irracional.',
        zh: '**西皮翁：**果真是这样，贝尔甘萨；而且这桩奇迹最奇之处，不仅在于咱们会说话，更在于咱们说话条理分明，俨然通晓理性一般——须知咱们本是毫无理性的畜类，走兽与人的分别，恰恰在于[人是理性的动物]{#g-ecp-s1-03}，而畜生是没有理性的。',
        glosses: [
          {
            id: 'g-ecp-s1-03',
            anchor: '人是理性的动物',
            content: '源自亚里士多德《政治学》（1253a）与波菲利《导论》确立并经中世纪经院哲学奉为定论的「属加种差」定义：人被界定为「理性动物」（拉丁语 animal rationale），飞禽走兽则统归为「无理性畜类」（bruta）。在亚里士多德传统中，兽类虽具感觉、记忆与表达苦乐的叫声，却唯独不具负载理性推论与是非判断的言辞（logos，西语作 discurso）。'
          }
        ]
      },
      {
        id: 'ecp-s1-p05',
        type: 'paragraph',
        num: '§ 05',
        original: 'BERGANZA.—Todo lo que dices, Cipión, entiendo, y el decirlo tú y entenderlo yo me causa nueva admiración y nueva maravilla. Bien es verdad que, en el discurso de mi vida, diversas y muchas veces he oído decir grandes prerrogativas nuestras: tanto, que parece que algunos han querido sentir que tenemos un natural distinto, tan vivo y tan agudo en muchas cosas, que da indicios y señales de faltar poco para mostrar que tenemos un no sé qué de entendimiento capaz de discurso.',
        zh: '**贝尔甘萨：**西皮翁，你说的每一句话我都听得懂；而你能说出来、我又能听明白，这越发叫我惊叹称奇了。诚然，在我这一生经历的岁月里，曾不止一次听人夸赞过咱们狗类的种种过人禀赋；甚至有人几乎认定咱们怀有一种天然的灵性，在许多事情上机警敏锐到了极点，种种迹象表明，只差一步就能显出咱们也具备某种能作推论的悟性了。'
      },
      {
        id: 'ecp-s1-p06',
        type: 'paragraph',
        num: '§ 06',
        original: 'CIPIÓN.—Lo que yo he oído alabar y encarecer es nuestra mucha memoria, el agradecimiento y gran fidelidad nuestra; tanto, que nos suelen pintar por símbolo de la amistad; y así, habrás visto (si has mirado en ello) que en las sepulturas de alabastro, donde suelen estar las figuras de los que allí están enterrados, cuando son marido y mujer, ponen entre los dos, a los pies, una figura de perro, en señal que se guardaron en la vida amistad y fidelidad inviolable.',
        zh: '**西皮翁：**我听人称颂褒扬最多的，是咱们惊人的记性、知恩图报的心肠和莫大的忠诚，以至于人们常把咱们画作友谊的象征；所以你倘若留心看过的话，定然见过在那些雕有墓主卧像的[雪花石膏墓冢]{#g-ecp-s1-04}上，凡是夫妻合葬的，工匠总会在两人脚下正中雕一尊狗像，以此表明他们生前彼此信守着不可背弃的情谊与忠贞。',
        glosses: [
          {
            id: 'g-ecp-s1-04',
            anchor: '雪花石膏墓冢',
            content: '中世纪晚期至文艺复兴时期的欧洲贵族卧像墓碑多以雪花石膏（alabastro）雕琢墓主夫妇仰卧合掌之像：丈夫足下常雕雄狮寓意勇武，妻子或夫妇双足之间则雕一卧犬，取拉丁语「忠贞」（fides）之义，象征婚姻中至死不渝的贞洁与友爱。切萨雷·里帕《图像学》（Iconologia，1593）亦将犬列为「友谊」与「忠诚」的标准徽志。'
          }
        ]
      },
      {
        id: 'ecp-s1-p07',
        type: 'paragraph',
        num: '§ 07',
        original: 'BERGANZA.—Bien sé que ha habido perros tan agradecidos que se han arrojado con los cuerpos difuntos de sus amos en la misma sepultura. Otros han estado sobre las sepulturas donde estaban enterrados sus señores sin apartarse dellas, sin comer, hasta que se les acababa la vida. Sé también que, después del elefante, el perro tiene el primer lugar de parecer que tiene entendimiento; luego, el caballo, y el último, la jimia.',
        zh: '**贝尔甘萨：**我很清楚，从前曾有些知恩重义的狗，随着亡故主人的遗体纵身跃入同一座墓穴；还有些狗一直守在埋葬主人的坟冢上寸步不离，不吃不喝，直到气绝身亡。我也晓得，在看似通晓灵性的走兽当中，[仅次于大象]{#g-ecp-s1-05}而居首位的便是狗，其次是马，排在最末的是猿猴。',
        glosses: [
          {
            id: 'g-ecp-s1-05',
            anchor: '仅次于大象',
            content: '化用老普林尼《自然史》（Naturalis historia）卷八的动物灵智序列。普林尼在卷八开篇将大象列为最接近人类悟性的陆生动物（第 1 章），随后在论犬专章（第 61 章）详载伊庇鲁斯王皮洛士之犬在主人火葬时纵身跃入柴堆殉主、罗马死囚蒂提乌斯·萨比努斯之犬守尸绝食，以及忠犬在人群中辨认弑主凶手等古典掌故；佩罗·梅希亚《博闻杂俎》（Silva de varia lección，1540）使这批忠犬轶事在黄金时代西班牙广为流传。'
          }
        ]
      },
      {
        id: 'ecp-s1-p08',
        type: 'paragraph',
        num: '§ 08',
        original: 'CIPIÓN.—Ansí es, pero bien confesarás que ni has visto ni oído decir jamás que haya hablado ningún elefante, perro, caballo o mona; por donde me doy a entender que este nuestro hablar tan de improviso cae debajo del número de aquellas cosas que llaman portentos, las cuales, cuando se muestran y parecen, tiene averiguado la experiencia que alguna calamidad grande amenaza a las gentes.',
        zh: '**西皮翁：**这话不错，可你也得承认，你生平从未见过、也从未听说过有哪头大象、哪条狗、哪匹马或哪只猴子开口讲过人话；由此我暗自揣度，咱们这样冷不防口吐人言，多半要归入人们所谓「奇兆」的那一类异事里去——每逢这类异象显现，经验早已印证，必有什么大灾大难正悬在世人头顶。'
      },
      {
        id: 'ecp-s1-p09',
        type: 'paragraph',
        num: '§ 09',
        original: 'BERGANZA.—Desa manera, no haré yo mucho en tener por señal portentosa lo que oí decir los días pasados a un estudiante, pasando por Alcalá de Henares.',
        zh: '**贝尔甘萨：**照这么说，前些日子我路过阿尔卡拉-德埃纳雷斯时，听一名大学生讲起的一桩事，我把它当成灾异奇兆也就不足为奇了。'
      },
      {
        id: 'ecp-s1-p10',
        type: 'paragraph',
        num: '§ 10',
        original: 'CIPIÓN.—¿Qué le oíste decir?',
        zh: '**西皮翁：**你听他说什么了？'
      },
      {
        id: 'ecp-s1-p11',
        type: 'paragraph',
        num: '§ 11',
        original: 'BERGANZA.—Que de cinco mil estudiantes que cursaban aquel año en la Universidad, los dos mil oían Medicina.',
        zh: '**贝尔甘萨：**他说那一年在大学里就读的五千名学生当中，竟有两千人在听医学课。'
      },
      {
        id: 'ecp-s1-p12',
        type: 'paragraph',
        num: '§ 12',
        original: 'CIPIÓN.—Pues, ¿qué vienes a inferir deso?',
        zh: '**西皮翁：**那你从中推论出什么来了？'
      },
      {
        id: 'ecp-s1-p13',
        type: 'paragraph',
        num: '§ 13',
        original: 'BERGANZA.—Infiero, o que estos dos mil médicos han de tener enfermos que curar (que sería harta plaga y mala ventura), o ellos se han de morir de hambre.',
        zh: '**贝尔甘萨：**我推论出：要么[这两千名大夫]{#g-ecp-s1-06}将来都有病人可治——那可真是一场天大的瘟疫和劫数了——要么他们自己就得活活饿死。',
        glosses: [
          {
            id: 'g-ecp-s1-06',
            anchor: '这两千名大夫',
            content: '阿尔卡拉-德埃纳雷斯是塞万提斯的故乡（其父罗德里戈即为外科医官），当地大学由西斯内罗斯枢机于 1499 年创立，16 世纪末在册学子约三四千人，尤以神学与医学两科最盛；将成群庸医与瘟疫灾劫等量齐观，则是西班牙黄金时代讽刺诗文（如克维多诸作）惯用的笑谈母题。'
          }
        ]
      },
      {
        id: 'ecp-s1-p14',
        type: 'paragraph',
        num: '§ 14',
        original: 'CIPIÓN.—Pero, sea lo que fuere, nosotros hablamos, sea portento o no; que lo que el cielo tiene ordenado que suceda, no hay diligencia ni sabiduría humana que lo pueda prevenir; y así, no hay para qué ponernos a disputar nosotros cómo o por qué hablamos; mejor será que este buen día, o buena noche, la metamos en nuestra casa; y, pues la tenemos tan buena en estas esteras y no sabemos cuánto durará esta nuestra ventura, sepamos aprovecharnos della y hablemos toda esta noche, sin dar lugar al sueño que nos impida este gusto, de mí por largos tiempos deseado.',
        zh: '**西皮翁：**不过，管它怎样，不论算不算奇兆，咱们总归是开口说话了；上天注定要发生的事，凭人力再怎么奔走、凭人智再怎么深谋远虑也防范不了；因此咱们犯不着在这儿争辩自己究竟是怎么开口、又为什么能说话的。倒不如照俗话说的，把这桩好日子——或者说好良宵——赶紧迎进自家门里来；既然咱们在这些草席间有这么一处好窝，又不知这番奇缘能维持多久，那就好好珍惜，痛痛快快聊上一整夜，别让睡意搅扰了我盼望已久的这份乐事。'
      },
      {
        id: 'ecp-s1-p15',
        type: 'paragraph',
        num: '§ 15',
        original: 'BERGANZA.—Y aun de mí, que desde que tuve fuerzas para roer un hueso tuve deseo de hablar, para decir cosas que depositaba en la memoria; y allí, de antiguas y muchas, o se enmohecían o se me olvidaban. Empero, ahora, que tan sin pensarlo me veo enriquecido deste divino don de la habla, pienso gozarle y aprovecharme dél lo más que pudiere, dándome priesa a decir todo aquello que se me acordare, aunque sea atropellada y confusamente, porque no sé cuándo me volverán a pedir este bien, que por prestado tengo.',
        zh: '**贝尔甘萨：**我又何尝不是盼望已久！打从我有力气啃骨头那会儿起，我就巴望着能开口说话，好把积攒在记忆里的桩桩件件全都倾吐出来；那些往事积得既久且多，压在肚子里不是发了霉，就是渐渐淡忘了。可是眼下，我竟喜出望外地蒙受了说话这件神圣的恩赐，我打算尽己所能地享用它、把握它，趁早把能想起来的事一股脑儿全倒出来，哪怕说得颠三倒四、杂乱无章也顾不得了——因为我把这份福气只看作暂借之物，不知什么时候人家就会收回去。'
      },
      {
        id: 'ecp-s1-p16',
        type: 'paragraph',
        num: '§ 16',
        original: 'CIPIÓN.—Sea ésta la manera, Berganza amigo: que esta noche me cuentes tu vida y los trances por donde has venido al punto en que ahora te hallas, y si mañana en la noche estuviéremos con habla, yo te contaré la mía; porque mejor será gastar el tiempo en contar las propias que en procurar saber las ajenas vidas.',
        zh: '**西皮翁：**贝尔甘萨朋友，咱们就这么办吧：今夜由你给我讲讲你的生平，说说你是历经哪些波折才落到如今这步田地的；倘若明晚咱们还能说话，我再给你讲我的身世。毕竟，与其费心打探别人的生活，不如把工夫花在讲述各自的经历上更为妥当。'
      },
      {
        id: 'ecp-s1-p17',
        type: 'paragraph',
        num: '§ 17',
        original: 'BERGANZA.—Siempre, Cipión, te he tenido por discreto y por amigo; y ahora más que nunca, pues como amigo quieres decirme tus sucesos y saber los míos, y como discreto has repartido el tiempo donde podamos manifestallos. Pero advierte primero si nos oye alguno.',
        zh: '**贝尔甘萨：**西皮翁，我向来把你当作明理的挚友，如今更是如此：你出于朋友之谊，愿意把你的遭遇告诉我、也乐意倾听我的经历；又凭着明智通达，把咱们倾诉往事的时间安排得这样得当。不过，你先留神听听附近有没有人在偷听。'
      },
      {
        id: 'ecp-s1-p18',
        type: 'paragraph',
        num: '§ 18',
        original: 'CIPIÓN.—Ninguno, a lo que creo, puesto que aquí cerca está un soldado tomando sudores; pero en esta sazón más estará para dormir que para ponerse a escuchar a nadie.',
        zh: '**西皮翁：**依我看没有旁人，虽然这附近倒是有个[正在发汗疗疾的士兵]{#g-ecp-s1-07}；但眼下这个时辰，他多半正昏昏欲睡，哪里有精神细听别人说话。',
        glosses: [
          {
            id: 'g-ecp-s1-07',
            anchor: '正在发汗疗疾的士兵',
            content: '指《模范小说集》前一篇《骗婚记》（El casamiento engañoso）的主角康波萨诺少尉。该篇写少尉因一场互相欺瞒的婚姻染上梅毒，入住巴利亚多利德复活医院接受严酷的「发汗疗法」（tomar sudores）：病患须在密闭闷热的病房内连续数周饮用美洲愈创木（guayaco）热煎剂，裹以厚毯强行逼汗排毒；双犬在院中草席间夜谈之时，少尉正卧于病房榻上养病，两篇小说由此在复活医院的场景中彼此嵌合。'
          }
        ]
      },
      {
        id: 'ecp-s1-p19',
        type: 'paragraph',
        num: '§ 19',
        original: 'BERGANZA.—Pues si puedo hablar con ese seguro, escucha; y si te cansare lo que te fuere diciendo, o me reprehende o manda que calle.',
        zh: '**贝尔甘萨：**既然有这份稳妥可以放心开口，那你就听着吧；要是我的话叫你听腻了，你只管训斥我，或者喝令我住嘴。'
      },
      {
        id: 'ecp-s1-p20',
        type: 'paragraph',
        num: '§ 20',
        original: 'CIPIÓN.—Habla hasta que amanezca, o hasta que seamos sentidos; que yo te escucharé de muy buena gana, sin impedirte sino cuando viere ser necesario.',
        zh: '**西皮翁：**你只管一直讲到天亮，或者讲到有人发觉咱们为止；我定会满心欢喜地听着，除非看到确有必要，绝不打断你。'
      },
      {
        id: 'ecp-s1-p21',
        type: 'paragraph',
        num: '§ 21',
        original: 'BERGANZA.—«Paréceme que la primera vez que vi el sol fue en Sevilla y en su Matadero, que está fuera de la Puerta de la Carne; por donde imaginara (si no fuera por lo que después te diré) que mis padres debieron de ser alanos de aquellos que crían los ministros de aquella confusión, a quien llaman jiferos. El primero que conocí por amo fue uno llamado Nicolás el Romo, mozo robusto, doblado y colérico, como lo son todos aquellos que ejercitan la jifería. Este tal Nicolás me enseñaba a mí y a otros cachorros a que, en compañía de alanos viejos, arremetiésemos a los toros y les hiciésemos presa de las orejas. Con mucha facilidad salí un águila en esto.»',
        zh: '**贝尔甘萨：**我记得自己头一回看见太阳，是在塞维利亚城[鲜肉门外的屠宰场]{#g-ecp-s1-08}里；若不是因为后来发生的一桩事——那事我回头再告诉你——我准会以为自己的父母定是那座混乱魔窟里的差役们喂养的阿兰诺猛犬，那伙人俗称[「屠夫帮」]{#g-ecp-s1-09}。我认得的第一个主人名叫塌鼻尼古拉斯，是个膀大腰圆、粗横阴沉而又脾气暴烈的后生，干屠宰这一行的人个个都是这副德行。这个尼古拉斯教我和另外几只幼犬跟着老猛犬一道扑向公牛，死死咬住牛耳朵不放。没费多少工夫，我就在这门手艺上练得像雄鹰一般利落，成了个中好手。',
        glosses: [
          {
            id: 'g-ecp-s1-08',
            anchor: '鲜肉门外的屠宰场',
            content: '塞维利亚东南城垣鲜肉门（Puerta de la Carne，原摩尔人城门，因紧邻肉市得名）外的市立屠宰场（Matadero），建于天主教双王时期的 1489 年。场内蓄养大批阿兰诺猛犬（alanos，伊比利亚重型捉牛犬），专司在宰牛前扑咬公牛双耳将其制服，亦常用于节庆斗牛戏。'
          },
          {
            id: 'g-ecp-s1-09',
            anchor: '「屠夫帮」',
            content: '原文作 **jiferos**，源自阿拉伯语「屠宰尖刀」（šifra，西语作 cuchillo jifero）。16 至 17 世纪塞维利亚屠宰场的屠工因职务所需享有合法佩带宽刃黄柄尖刀与研习剑术的特权，逐渐结成逞凶斗狠、操黑帮行话（germanía）、兼营护院打手与皮条客勾当的地下恶势力。'
          }
        ]
      },
      {
        id: 'ecp-s1-p22',
        type: 'paragraph',
        num: '§ 22',
        original: 'CIPIÓN.—No me maravillo, Berganza; que, como el hacer mal viene de natural cosecha, fácilmente se aprende el hacerle.',
        zh: '**西皮翁：**这我倒一点不奇怪，贝尔甘萨；因为作恶本是生来就有的天性，学起作恶来自然轻而易举。'
      },
      {
        id: 'ecp-s1-p23',
        type: 'paragraph',
        num: '§ 23',
        original: 'BERGANZA.—¿Qué te diría, Cipión hermano, de lo que vi en aquel Matadero y de las cosas exorbitantes que en él pasan? Primero, has de presuponer que todos cuantos en él trabajan, desde el menor hasta el mayor, es gente ancha de conciencia, desalmada, sin temer al Rey ni a su justicia; los más, amancebados; son aves de rapiña carniceras: mantiénense ellos y sus amigas de lo que hurtan. Todas las mañanas que son días de carne, antes que amanezca, están en el Matadero gran cantidad de mujercillas y muchachos, todos con talegas, que, viniendo vacías, vuelven llenas de pedazos de carne, y las criadas con criadillas y lomos medio enteros. No hay res alguna que se mate de quien no lleve esta gente diezmos y primicias de lo más sabroso y bien parado. Y, como en Sevilla no hay obligado de la carne, cada uno puede traer la que quisiere; y la que primero se mata, o es la mejor, o la de más baja postura, y con este concierto hay siempre mucha abundancia. Los dueños se encomiendan a esta buena gente que he dicho, no para que no les hurten (que esto es imposible), sino para que se moderen en las tajadas y socaliñas que hacen en las reses muertas, que las escamondan y podan como si fuesen sauces o parras. Pero ninguna cosa me admiraba más ni me parecía peor que el ver que estos jiferos con la misma facilidad matan a un hombre que a una vaca; por quítame allá esa paja, a dos por tres meten un cuchillo de cachas amarillas por la barriga de una persona, como si acocotasen un toro. Por maravilla se pasa día sin pendencias y sin heridas, y a veces sin muertes; todos se pican de valientes, y aun tienen sus puntas de rufianes; no hay ninguno que no tenga su ángel de guarda en la plaza de San Francisco, granjeado con lomos y lenguas de vaca. Finalmente, oí decir a un hombre discreto que tres cosas tenía el Rey por ganar en Sevilla: la calle de la Caza, la Costanilla y el Matadero.',
        zh: '**贝尔甘萨：**西皮翁兄弟，我在那座屠宰场里亲眼目睹的景象，还有里头发生的种种骇人听闻的勾当，叫我从何说起呢？首先你得明白，在那里头干活的所有人，从最小的学徒到最大的头目，全都良心宽大、丧尽天良，既不怕国王，也不惧王法；他们十有八九与人姘居，活脱是一群食肉的猛禽，靠着偷来的肉养活自己和相好的女人。每逢开荤日的清晨，天还没亮，屠宰场里就聚满了大群年轻妇人和半大小子，人手一只布口袋，来时空空荡荡，走时塞满了大块鲜肉，女仆们更是提着公牛外肾和成半条的牛里脊满载而归。但凡宰杀一头牲口，这伙人没有不先从最鲜美、最肥嫩的部位抽走「什一税」和「初熟祭礼」的。况且塞维利亚不设[肉食专营承包商]{#g-ecp-s1-10}，无论谁都可以赶牲口来卖；最先开宰的，不是肉质最好的，就是官定牌价最低的，靠着这项规矩，城里鲜肉向来十分充裕。牲口主人们都得低声下气去巴结我方才说的这班「善人」，倒不是指望他们不偷——那根本是痴心妄想——只求他们在死牛身上割肉揩油时手下留情、稍微收敛几分，因为他们削剔起牛胴体来，简直像修剪柳树或葡萄藤一样狠辣。不过，最叫我心惊、也最令我憎恶的，还是瞧见这帮屠夫杀起人来竟跟宰一头母牛一般随便：只消半根稻草那么点儿口角，三言两语不对付，他们冷不防就把一把黄柄屠刀捅进别人肚子里，仿佛在刺断公牛的后颈。那里若是哪一天没闹出斗殴流血，甚至没出人命，才真叫稀奇；他们个个自诩好汉，身上还都带着几分皮条客兼恶霸的习气；没有哪一个不在圣方济各广场上供着一位用牛里脊和牛舌买通的「守护天使」。总而言之，我曾听一位明白人说过，[国王在塞维利亚还有三处地方未曾收复]{#g-ecp-s1-11}：猎物街、小坡街，外加这座屠宰场。',
        glosses: [
          {
            id: 'g-ecp-s1-10',
            anchor: '肉食专营承包商',
            content: '卡斯蒂利亚城镇通常实行市政肉食专包制：由竞标中选的承包商（obligado de la carne）按市政厅核定的官价（postura）垄断全城鲜肉供应。塞维利亚作为美洲贸易大港人口浩繁，破例废除单一承包商垄断，允许各地畜主自由运牛入场，按肉质优劣与报价高低优先排宰。'
          },
          {
            id: 'g-ecp-s1-11',
            anchor: '国王在塞维利亚还有三处地方未曾收复',
            content: '当时流传的塞维利亚市井俗谚。前文圣方济各广场（Plaza de San Francisco）为塞维利亚市政厅与皇家高等法院所在地，屠夫常以精肉贿赂衙门书吏与捕快充当包庇命案的「守护天使」；猎物街（Calle de la Caza）与小坡街（la Costanilla）则是城内紧邻禽肉鱼市、巷道曲折且便于逃入教堂寻得宗教庇护权的销赃与黑帮聚居区，连同城外持刀拒捕的屠宰场，并称王室司法难以管辖的三大法外之地。'
          }
        ]
      },
      {
        id: 'ecp-s1-p24',
        type: 'paragraph',
        num: '§ 24',
        original: 'CIPIÓN.—Si en contar las condiciones de los amos que has tenido y las faltas de sus oficios te has de estar, amigo Berganza, tanto como esta vez, menester será pedir al cielo nos conceda la habla siquiera por un año, y aun temo que, al paso que llevas, no llegarás a la mitad de tu historia. Y quiérote advertir de una cosa, de la cual verás la experiencia cuando te cuente los sucesos de mi vida; y es que los cuentos unos encierran y tienen la gracia en ellos mismos, otros en el modo de contarlos (quiero decir que algunos hay que, aunque se cuenten sin preámbulos y ornamentos de palabras, dan contento); otros hay que es menester vestirlos de palabras, y con demostraciones del rostro y de las manos, y con mudar la voz, se hacen algo de nonada, y de flojos y desmayados se vuelven agudos y gustosos; y no se te olvide este advertimiento, para aprovecharte dél en lo que te queda por decir.',
        zh: '**西皮翁：**贝尔甘萨朋友，要是你每讲一任主人的脾性和他们行当里的弊病，都要像这一回这样长篇大论地耽搁下去，咱们就得求老天爷至少赐给咱们一年的说话工夫，而且照你眼下这步调，只怕一年也讲不到你生平的一半。我想提醒你一桩道理，等我将来给你讲我的身世时，你自会见识其中的门道：世上的故事，有一些妙处就在故事本身，另一些妙处却全靠讲故事的手法——我是说，有些故事哪怕不加铺垫、不施辞藻，平铺直叙也能叫人听得欢喜；另一些故事却非得用言辞装点披挂起来不可，再配上面部神情与手势比画、随着情节抑扬变调，才能化平淡无奇为有声有色，把原本松散乏味的事讲得机锋俏皮、津津有味。你切莫忘了这番忠告，在接下来的讲述里好好用上它。'
      },
      {
        id: 'ecp-s1-p25',
        type: 'paragraph',
        num: '§ 25',
        original: 'BERGANZA.—Yo lo haré así, si pudiere y si me da lugar la grande tentación que tengo de hablar; aunque me parece que con grandísima dificultad me podré ir a la mano.',
        zh: '**贝尔甘萨：**只要我做得到，只要我心里这股按捺不住想说话的强烈冲动容许，我一定照办；不过依我看，想叫我自己勒住手、有所节制，只怕难上加难。'
      },
      {
        id: 'ecp-s1-p26',
        type: 'paragraph',
        num: '§ 26',
        original: 'CIPIÓN.—Vete a la lengua, que en ella consisten los mayores daños de la humana vida.',
        zh: '**西皮翁：**你还是勒住舌头吧，人世间最大的祸患全都出在舌头上。'
      },
      {
        id: 'ecp-s1-p27',
        type: 'paragraph',
        num: '§ 27',
        original: 'BERGANZA.—«Digo, pues, que mi amo me enseñó a llevar una espuerta en la boca y a defenderla de quien quitármela quisiese. Enseñóme también la casa de su amiga, y con esto se escusó la venida de su criada al Matadero, porque yo le llevaba las madrugadas lo que él había hurtado las noches. Y un día que, entre dos luces, iba yo diligente a llevarle la porción, oí que me llamaban por mi nombre desde una ventana; alcé los ojos y vi una moza hermosa en estremo; detúveme un poco, y ella bajó a la puerta de la calle, y me tornó a llamar. Lleguéme a ella, como si fuera a ver lo que me quería, que no fue otra cosa que quitarme lo que llevaba en la cesta y ponerme en su lugar un chapín viejo. Entonces dije entre mí: La carne se ha ido a la carne. Díjome la moza, en habiéndome quitado la carne: Andad Gavilán, o como os llamáis, y decid a Nicolás el Romo, vuestro amo, que no se fíe de animales, y que del lobo un pelo, y ése de la espuerta. Bien pudiera yo volver a quitar lo que me quitó, pero no quise, por no poner mi boca jifera y sucia en aquellas manos limpias y blancas.»',
        zh: '**贝尔甘萨：**接着往下说吧：我的主人教会我用嘴叼着一只草编篮子，倘若有人想抢，就拼命护住它。他还带我认熟了他相好女人的住处，这么一来，那女人的女仆就省得再跑屠宰场了，因为每天天不亮，我都会把主人头天夜里偷藏下的鲜肉给她送去。有一回，在晨昏交接、天色微明之际，我正勤快地叼着那份肉赶路，忽听一扇窗户里有人唤我的名字；我抬头望去，只见一位美貌绝伦的年轻姑娘。我略微停下脚步，她便下楼来到临街门口，又唤了我一声。我凑上前去，本想瞧瞧她找我有什么事，谁知她不为别的，竟是把我篮子里装的鲜肉取走，换上一只[旧高底软木女鞋]{#g-ecp-s1-12}塞了进去。当时我暗自心想：「肉终归跟肉跑了。」那姑娘拿走鲜肉后对我说道：「去吧，[加维兰]{#g-ecp-s1-13}——不管你叫什么名字——回去告诉你的主人塌鼻尼古拉斯，叫他别信畜生的话；再说[从恶狼身上拔下一根毛也是赚]{#g-ecp-s1-14}，何况还是草篮里的货。」我原本大可以把她拿走的东西再夺回来，可我却不肯那么做，生怕用我这张沾满屠场血污的脏嘴，玷污了她那双洁净白皙的玉手。',
        glosses: [
          {
            id: 'g-ecp-s1-12',
            anchor: '旧高底软木女鞋',
            content: '原文作 **chapín**，西班牙黄金时代妇女外出套穿于软皮鞋外的厚底套鞋，鞋底叠合多层软木，高逾数寸，鞋面饰以丝绒或彩革；破旧废弃的软木套鞋在当时市井风俗中常被用作恶作剧与羞辱调侃的道具。'
          },
          {
            id: 'g-ecp-s1-13',
            anchor: '加维兰',
            content: '西语 **Gavilán** 原义为「雀鹰、鹞鹰」，取其迅猛矫健之意，是西班牙猎犬与护院猛犬的常用名。'
          },
          {
            id: 'g-ecp-s1-14',
            anchor: '从恶狼身上拔下一根毛也是赚',
            content: '化用西班牙传统俗谚 **Del lobo, un pelo, y ése de la frente**（「从恶狼身上拔下一根毛也是便宜，哪怕是额头上的毛」），意指对付凶徒或铁公鸡能占到分毫便宜亦算本事；少女将谚语后半句俏皮改口为「何况还是草篮里的货」（y ése de la espuerta）。'
          }
        ]
      },
      {
        id: 'ecp-s1-p28',
        type: 'paragraph',
        num: '§ 28',
        original: 'CIPIÓN.—Hiciste muy bien, por ser prerrogativa de la hermosura que siempre se le tenga respecto.',
        zh: '**西皮翁：**你做得极对，因为教人时刻心存敬重，本是美貌天然享有的特权。'
      },
      {
        id: 'ecp-s1-p29',
        type: 'paragraph',
        num: '§ 29',
        original: 'BERGANZA.—«Así lo hice yo; y así, me volví a mi amo sin la porción y con el chapín. Parecióle que volví presto, vio el chapín, imaginó la burla, sacó uno de cachas y tiróme una puñalada que, a no desviarme, nunca tú oyeras ahora este cuento, ni aun otros muchos que pienso contarte. Puse pies en polvorosa, y, tomando el camino en las manos y en los pies, por detrás de San Bernardo, me fui por aquellos campos de Dios adonde la fortuna quisiese llevarme.',
        zh: '**贝尔甘萨：**我确实是这么做的；于是我没送成那份肉，反倒叼着那只高底软木女鞋回到了主人跟前。他见我回来得太快，一眼瞥见那只女鞋，顿时猜到了这场恶作剧，拔出一把黄柄尖刀就朝我猛刺过来；要不是我闪避得快，你今夜就再也听不到这个故事，更听不到我打算讲给你听的其他许多奇遇了。我撒腿扬尘而逃，前爪后蹄一齐撒开夺路狂奔，绕过圣贝尔纳多区后身，一头扎进苍天之下茫茫的旷野，任凭命运把我带往何方。'
      }
    ]
  },
  {
    id: 'ecp-sec-2',
    roman: 'II',
    titleOriginal: 'La fingida Arcadia y los lobos pastores',
    titleZh: '虚构的田园牧歌与监守自盗的牧羊人',
    blocks: [
      {
        id: 'ecp-s2-p01',
        type: 'paragraph',
        num: '§ 01',
        original: '»Aquella noche dormí al cielo abierto, y otro día me deparó la suerte un hato o rebaño de ovejas y carneros. Así como le vi, creí que había hallado en él el centro de mi reposo, pareciéndome ser propio y natural oficio de los perros guardar ganado, que es obra donde se encierra una virtud grande, como es amparar y defender de los poderosos y soberbios los humildes y los que poco pueden. Apenas me hubo visto uno de tres pastores que el ganado guardaban, cuando diciendo ¡To, to! me llamó; y yo, que otra cosa no deseaba, me llegué a él bajando la cabeza y meneando la cola. Trújome la mano por el lomo, abrióme la boca, escupióme en ella, miróme las presas, conoció mi edad, y dijo a otros pastores que yo tenía todas las señales de ser perro de casta. Llegó a este instante el señor del ganado sobre una yegua rucia a la jineta, con lanza y adarga: que más parecía atajador de la costa que señor de ganado. Preguntó el pastor: ¿Qué perro es éste, que tiene señales de ser bueno? Bien lo puede vuesa merced creer —respondió el pastor—, que yo le he cotejado bien y no hay señal en él que no muestre y prometa que ha de ser un gran perro. Agora se llegó aquí y no sé cúyo sea, aunque sé que no es de los rebaños de la redonda. Pues así es —respondió el señor—, ponle luego el collar de Leoncillo, el perro que se murió, y denle la ración que a los demás, y acaríciale, porque tome cariño al hato y se quede en él. En diciendo esto, se fue; y el pastor me puso luego al cuello unas carlancas llenas de puntas de acero, habiéndome dado primero en un dornajo gran cantidad de sopas en leche. Y, asimismo, me puso nombre, y me llamó Barcino.',
        zh: '那一夜我露宿在苍穹之下，第二天运气让我撞见了一大群母羊和公羊。我一见羊群，便觉得找到了安身立命的归宿，心想看守羊群本是狗类天经地义的本职，这桩差事里蕴含着莫大的美德，那便是庇护并保卫卑微弱小者免遭强横傲慢之徒的欺凌。看管羊群的三个牧羊人当中，有一个刚瞧见我，嘴里便「咄，咄！」地唤我过去；我正巴不得如此，赶紧低垂着脑袋、摇着尾巴凑到他跟前。他伸手抚摸我的脊背，掰开我的嘴往里吐了口唾沫，端详我的獠牙，看出了我的岁数，便对另外几个牧人说，我浑身上下一派良种好狗的骨相。恰在此时，畜主骑着一匹银灰母马，按短镫骑法跨在鞍上，手执长矛与皮盾策马而来，瞧那副装束倒不像个羊群东家，反倒更像个[海岸巡哨轻骑]{#g-ecp-s2-01}。他问牧羊人道：「这是什么狗，瞧模样倒是条好犬？」「老爷尽管放心，」牧羊人答道，「我已经仔细相看过了，它浑身没有一处特征不显出将来准是条顶呱呱的大狗。它是刚才自己跑来的，我也不晓得是谁家的狗，不过肯定不是左近这几群羊里的。」畜主应道：「既然如此，赶紧把先前死掉的那条『小狮子』的项圈给它戴上，照其他狗一样的分量给它口粮，好好抚慰它，好叫它恋上咱们这群羊，安心留下来。」说完这话，他便策马走了；牧羊人先在木槽里泡了一大堆牛奶面包喂饱我，随即往我脖子上套了一副密布钢刺的防狼铁领圈，还给我起了个名字，唤作[巴尔西诺]{#g-ecp-s2-02}。',
        glosses: [
          {
            id: 'g-ecp-s2-01',
            anchor: '海岸巡哨轻骑',
            content: '原文作 **atajador de la costa**。16 至 17 世纪安达卢西亚沿海为防范北非巴巴里海盗登岸劫掠，每日派轻骑兵沿海岸巡查敌踪；其装备承袭摩尔人传入的柏柏尔「短镫骑法」（a la jineta，短镫曲膝、控纵轻捷），手执长矛与双层心形硬皮盾（adarga）。'
          },
          {
            id: 'g-ecp-s2-02',
            anchor: '巴尔西诺',
            content: '西语 **Barcino** 原义为白底夹杂红褐或灰褐斑纹的毛色，系西班牙牧犬常见名。前文牧人往新犬口中吐唾沫，是卡斯蒂利亚传统牧俗，意在令陌生牧犬认主归顺；颈部所套带钢刺的防狼铁领圈（carlancas）则用于防止恶狼咬断牧犬咽喉。'
          }
        ]
      },
      {
        id: 'ecp-s2-p02',
        type: 'paragraph',
        num: '§ 02',
        original: '»Vime harto y contento con el segundo amo y con el nuevo oficio; mostréme solícito y diligente en la guarda del rebaño, sin apartarme dél sino las siestas, que me iba a pasarlas o ya a la sombra de algún árbol, o de algún ribazo o peña, o a la de alguna mata, a la margen de algún arroyo de los muchos que por allí corrían. Y estas horas de mi sosiego no las pasaba ociosas, porque en ellas ocupaba la memoria en acordarme de muchas cosas, especialmente en la vida que había tenido en el Matadero, y en la que tenía mi amo y todos los como él, que están sujetos a cumplir los gustos impertinentes de sus amigas.»',
        zh: '吃得饱足之余，我对这第二任主人和这份新差事心满意足；看守羊群时更是尽心竭力、殷勤警觉，除了午后歇晌的工夫从不擅离半步——每到午歇时分，我便去附近纵横流淌的某条溪涧岸边，不是躲在树荫下，便是卧在土坡、山岩或灌木丛的阴凉里消磨晌午。这些清闲宁静的时辰我也并未白白荒废，总是在脑海里回想许多往事，尤其是从前在屠宰场里过的那种日子，以及我那旧主人和与他一路货色之人的行径——他们无不低三下四地受制于相好女人种种无理取闹的癖好。'
      },
      {
        id: 'ecp-s2-p03',
        type: 'paragraph',
        num: '§ 03',
        original: '¡Oh, qué de cosas te pudiera decir ahora de las que aprendí en la escuela de aquella jifera dama de mi amo! Pero habrélas de callar, porque no me tengas por largo y por murmurador.',
        zh: '啊，提起我在旧主人那位屠场贵妇的「学堂」里见识到的种种名堂，我眼下真有说不完的话可以讲给你听！不过我还是闭口不提为妙，免得你嫌我啰唆，又说我爱在背后搬弄是非。'
      },
      {
        id: 'ecp-s2-p04',
        type: 'paragraph',
        num: '§ 04',
        original: 'CIPIÓN.—Por haber oído decir que dijo un gran poeta de los antiguos que era difícil cosa el no escribir sátiras, consentiré que murmures un poco de luz y no de sangre; quiero decir que señales y no hieras ni des mate a ninguno en cosa señalada: que no es buena la murmuración, aunque haga reír a muchos, si mata a uno; y si puedes agradar sin ella, te tendré por muy discreto.',
        zh: '**西皮翁：**我曾听说古时候有位大诗人讲过，[不写讽刺诗实属难事]{#g-ecp-s2-03}；看在这句话的分上，我准许你稍微议论几句，但只许见光，不许见血——我是说你只可点到为止，切莫伤人，更不可在指明某人某事时将人逼上绝路；因为背后讥评纵能引得众人发笑，只要害苦了一个人，便算不得好事。倘若你不靠臧否人物也能把故事讲得动听，我就真佩服你是个明智高人了。',
        glosses: [
          {
            id: 'g-ecp-s2-03',
            anchor: '不写讽刺诗实属难事',
            content: '出自古罗马讽刺诗人尤维纳利斯（Juvenal，约 55—130）《讽刺诗集》第一首第 30 行名句 **Difficile est satiram non scribere**，感叹面对罗马帝国世风败坏、权贵横行之乱象，实难抑制执笔讽刺的冲动。'
          }
        ]
      },
      {
        id: 'ecp-s2-p05',
        type: 'paragraph',
        num: '§ 05',
        original: 'BERGANZA.—Yo tomaré tu consejo, y esperaré con gran deseo que llegue el tiempo en que me cuentes tus sucesos; que de quien tan bien sabe conocer y enmendar los defetos que tengo en contar los míos, bien se puede esperar que contará los suyos de manera que enseñen y deleiten a un mismo punto.',
        zh: '**贝尔甘萨：**我听从你的劝告，也满怀渴望地盼着轮到你给我讲身世的那一刻早些到来；既然你这样善于察觉并纠正我讲述自身经历时的毛病，想来等你开口讲起自己的遭遇时，定能做到寓教于乐、两全其美。'
      },
      {
        id: 'ecp-s2-p06',
        type: 'paragraph',
        num: '§ 06',
        original: '«Pero, anudando el roto hilo de mi cuento, digo que en aquel silencio y soledad de mis siestas, entre otras cosas, consideraba que no debía de ser verdad lo que había oído contar de la vida de los pastores; a lo menos, de aquellos que la dama de mi amo leía en unos libros cuando yo iba a su casa, que todos trataban de pastores y pastoras, diciendo que se les pasaba toda la vida cantando y tañendo con gaitas, zampoñas, rabeles y chirumbelas, y con otros instrumentos extraordinarios. Deteníame a oírla leer, y leía cómo el pastor de Anfriso cantaba estremada y divinamente, alabando a la sin par Belisarda, sin haber en todos los montes de Arcadia árbol en cuyo tronco no se hubiese sentado a cantar, desde que salía el sol en los brazos de la Aurora hasta que se ponía en los de Tetis; y aun después de haber tendido la negra noche por la faz de la tierra sus negras y escuras alas, él no cesaba de sus bien cantadas y mejor lloradas quejas. No se le quedaba entre renglones el pastor Elicio, más enamorado que atrevido, de quien decía que, sin atender a sus amores ni a su ganado, se entraba en los cuidados ajenos. Decía también que el gran pastor de Fílida, único pintor de un retrato, había sido más confiado que dichoso. De los desmayos de Sireno y arrepentimiento de Diana decía que daba gracias a Dios y a la sabia Felicia, que con su agua encantada deshizo aquella máquina de enredos y aclaró aquel laberinto de dificultades. Acordábame de otros muchos libros que deste jaez la había oído leer, pero no eran dignos de traerlos a la memoria.»',
        zh: '且把方才断了的话头重新接上：在那些寂静独处的午歇时分，除了别的念头，我常常琢磨从前听人讲起的牧羊人生活多半不是真的——至少我上旧主人相好女人家里送肉时，听她在几部书里念到的那些牧人绝非真有其事。那些书通篇写的都是牧童牧女，说他们一辈子都在吹奏风笛、排箫、三弦胡琴、双簧牧笛以及其他种种稀奇乐器，终日吟唱不休。我那时常停下脚步听她朗读，听她念那位[安弗里索牧人]{#g-ecp-s2-04}如何用绝妙入神的歌喉赞美举世无双的贝莉萨达：整座阿卡迪亚群山之中，没有哪棵树下他不曾坐着放歌，从太阳升起在黎明女神奥罗拉怀中，一直唱到日落西沉于海洋女神忒提斯臂弯；甚至在黑夜张开幽暗乌黑的双翼笼罩大地之后，他也依然不曾停下那唱得婉转动听、哭得更是哀切欲绝的幽怨情歌。她也没漏掉书行间的那位牧人埃利西奥，此人痴情有余而胆气不足，书上说他既不顾自家的恋情，也不管自家的羊群，偏爱一头扎进别人的烦心事里去。她还念到那位独一无二用言辞描绘美人肖像的「菲莉达的大牧人」，说他自信满满，却偏偏情路坎坷、福分浅薄。至于西雷诺的频频昏厥与狄安娜的悔恨，她念到那里便感谢上帝和[女智者费莉西亚]{#g-ecp-s2-05}，全靠她用那瓶魔水一举破除了那一整套错综复杂的纠葛，澄清了那座盘根错节的迷宫。我还记得曾听她念过许多同类的书，不过都不值得再搬出来回想了。',
        glosses: [
          {
            id: 'g-ecp-s2-04',
            anchor: '安弗里索牧人',
            content: '出自洛佩·德·维加的田园牧歌小说《阿卡迪亚》（La Arcadia，1598）。自意大利人文主义者桑纳扎罗《阿卡迪亚》（1504）复兴古典田园诗传统以来，16 世纪下半叶西班牙掀起牧歌小说热潮；洛佩此书以希腊阿卡迪亚山区为舞台，写牧人安弗里索（影射第五代阿尔瓦公爵安东尼奥·阿尔瓦雷斯·德·托莱多）苦恋牧女贝莉萨达，书中铺陈大量以黎明女神奥罗拉与海洋女神忒提斯指代日出日落的古典神话套语。'
          },
          {
            id: 'g-ecp-s2-05',
            anchor: '女智者费莉西亚',
            content: '本段接连化用三部西班牙黄金时代代表性牧歌小说：前文羞怯多情的「牧人埃利西奥」（Elicio）系塞万提斯本人处女作《加拉特亚》（La Galatea，1585）的男主角；「菲莉达的大牧人」指路易斯·加尔韦斯·德·蒙塔尔沃的名作《菲莉达的牧人》（El pastor de Fílida，1582）；此处西雷诺、狄安娜与女智者费莉西亚则出自葡萄牙裔作家豪尔赫·德·蒙特马约尔所著西班牙开山牧歌小说《狄安娜》（Los siete libros de la Diana，约 1559），该书第五卷借费莉西亚赐饮「魔水」（agua encantada）令众男女瞬间忘却旧情或移情他人，一举解开多角恋迷局。'
          }
        ]
      },
      {
        id: 'ecp-s2-p07',
        type: 'paragraph',
        num: '§ 07',
        original: 'CIPIÓN.—Aprovechándote vas, Berganza, de mi aviso: murmura, pica y pasa, y sea tu intención limpia, aunque la lengua no lo parezca.',
        zh: '**西皮翁：**贝尔甘萨，你已经在把我的忠告派上用场了：轻轻讥评一句，刺一下便走，哪怕嘴上听着刻薄，存心也要保持干净。'
      },
      {
        id: 'ecp-s2-p08',
        type: 'paragraph',
        num: '§ 08',
        original: 'BERGANZA.—En estas materias nunca tropieza la lengua si no cae primero la intención; pero si acaso por descuido o por malicia murmurare, responderé a quien me reprehendiere lo que respondió Mauleón, poeta tonto y académico de burla de la Academia de los Imitadores, a uno que le preguntó que qué quería decir Deum de Deo; y respondió que "dé donde diere".',
        zh: '**贝尔甘萨：**在这类事情上，若不是存心先歪了，舌头是决不会失足打绊的；不过万一我一时失察或是存心使坏、说出了伤人的闲话，谁要是来责备我，我就拿蠢货诗人、[模仿者文社]{#g-ecp-s2-06}那位滑稽院士毛莱昂的话去回敬他——当年有人考问他拉丁文「出自天主的天主」是什么意思，他竟回答说是「管他砸着谁就砸着谁」。',
        glosses: [
          {
            id: 'g-ecp-s2-06',
            anchor: '模仿者文社',
            content: '1585 年前后成立于马德里的「模仿者文社」（Academia Imitatoria），是西班牙黄金时代最早的文学沙龙之一。社中曾蓄有一名不通文墨却自命诗人的毛莱昂（Mauleón）充当供社员取乐的「滑稽院士」；当有人问他《尼西亚信经》拉丁文名句 **Deum de Deo**（「出自天主的天主」）何意时，他按语音近似将其歪解为西语俗语 **dé donde diere**（「砸着哪儿算哪儿、管他打中谁」）。'
          }
        ]
      },
      {
        id: 'ecp-s2-p09',
        type: 'paragraph',
        num: '§ 09',
        original: 'CIPIÓN.—Esa fue respuesta de un simple; pero tú, si eres discreto o lo quieres ser, nunca has de decir cosa de que debas dar disculpa. Di adelante.',
        zh: '**西皮翁：**那是傻瓜才说的蠢话；而你倘若真是个明白人，或者想做个明白人，就绝不该说出任何事后需要赔礼辩解的话来。往下讲吧。'
      },
      {
        id: 'ecp-s2-p10',
        type: 'paragraph',
        num: '§ 10',
        original: 'BERGANZA.—«Digo que todos los pensamientos que he dicho, y muchos más, me causaron ver los diferentes tratos y ejercicios que mis pastores, y todos los demás de aquella marina, tenían de aquellos que había oído leer que tenían los pastores de los libros; porque si los míos cantaban, no eran canciones acordadas y bien compuestas, sino un "Cata el lobo dó va, Juanica" y otras cosas semejantes; y esto no al son de chirumbelas, rabeles o gaitas, sino al que hacía el dar un cayado con otro o al de algunas tejuelas puestas entre los dedos; y no con voces delicadas, sonoras y admirables, sino con voces roncas, que, solas o juntas, parecía, no que cantaban, sino que gritaban o gruñían. Lo más del día se les pasaba espulgándose o remendando sus abarcas; ni entre ellos se nombraban Amarilis, Fílidas, Galateas y Dianas, ni había Lisardos, Lausos, Jacintos ni Riselos; todos eran Antones, Domingos, Pablos o Llorentes; por donde vine a entender lo que pienso que deben de creer todos: que todos aquellos libros son cosas soñadas y bien escritas para entretenimiento de los ociosos, y no verdad alguna; que, a serlo, entre mis pastores hubiera alguna reliquia de aquella felicísima vida, y de aquellos amenos prados, espaciosas selvas, sagrados montes, hermosos jardines, arroyos claros y cristalinas fuentes, y de aquellos tan honestos cuanto bien declarados requiebros, y de aquel desmayarse aquí el pastor, allí la pastora, acullá resonar la zampoña del uno, acá el caramillo del otro.»',
        zh: '**贝尔甘萨：**我是说，只因亲眼见到了我跟前的这几个牧羊人以及那片沿海牧场上所有牧人的日常举止与活计，跟我从前听人念的书本里那些牧人天差地别，这才勾起了我方才说的那些念头，乃至更多的感慨。因为我这几个牧羊人若是唱歌，唱的可不是什么音律和谐、辞藻考究的雅曲，而是[「快看狼往哪儿跑，小胡安娜」]{#g-ecp-s2-07}之类俚俗小调；伴奏也不是靠双簧牧笛、三弦胡琴或风笛，而是拿两根牧杖互相敲击，或是手指间夹着几片碎瓦片咔哒打拍子；嗓音更谈不上柔美、清亮、动人，而是一口粗哑破嗓，无论独唱还是合唱，听起来都不像在唱歌，倒像在扯着嗓子嚎叫或是像猪一样哼哼。他们大半天工夫都花在捉身上的跳蚤，或是缝补脚上的生皮草鞋；他们当中既没有叫阿玛莉莉斯、菲莉达、加拉特亚和狄安娜的牧女，也没有叫利萨尔多、劳索、哈辛托或里塞洛的牧童，清一色全是些安东、多明戈、巴勃罗或略伦特。由此我终于明白了一个我想人人都该相信的道理：所有那些牧歌书本全是些凭空编造的梦话，不过是写得花团锦簇、拿来给闲人解闷消遣的玩意儿，里头没有半点真情实事；倘若果真有过那样的日子，我身边这些牧羊人身上好歹也会留存一星半点那种神仙岁月的遗风，留存些许宜人的芳草地、幽阔的林莽、神圣的山峦、秀美的园林、澄澈的溪流与晶莹的泉眼，留存几分那种既端庄守礼又剖白得缠绵悱恻的情话，以及牧童在这头晕倒、牧女在那头昏厥，远处回荡着这一个的排箫、近处吹响着那一个的芦笛的风流景象。',
        glosses: [
          {
            id: 'g-ecp-s2-07',
            anchor: '「快看狼往哪儿跑，小胡安娜」',
            content: '原文作 **Cata el lobo dó va, Juanica**，是 16 世纪卡斯蒂利亚乡野真实传唱的牧人俚曲，盲人音乐理论家弗朗西斯科·萨利纳斯《音乐七卷》（1577）录有其曲调；牧人常以牧羊曲杖（cayados）互击，或指夹碎陶瓦片（tejuelas，民间简易响板）击节伴唱。'
          }
        ]
      },
      {
        id: 'ecp-s2-p11',
        type: 'paragraph',
        num: '§ 11',
        original: 'CIPIÓN.—Basta, Berganza; vuelve a tu senda y camina.',
        zh: '**西皮翁：**够了，贝尔甘萨；回到你的正路上来，继续往前走吧。'
      },
      {
        id: 'ecp-s2-p12',
        type: 'paragraph',
        num: '§ 12',
        original: 'BERGANZA.—Agradézcotelo, Cipión amigo; porque si no me avisaras, de manera se me iba calentando la boca, que no parara hasta pintarte un libro entero destos que me tenían engañado; pero tiempo vendrá en que lo diga todo con mejores razones y con mejor discurso que ahora.',
        zh: '**贝尔甘萨：**多谢你提醒，西皮翁朋友；要不是你及时拦住我，我的嘴正越说越热乎，非把这些曾哄骗过我的书本整整描摹出一大卷来不可。不过总有一天，我会用比眼下更高明的道理、更严密的条理把这些话全都讲透。'
      },
      {
        id: 'ecp-s2-p13',
        type: 'paragraph',
        num: '§ 13',
        original: 'CIPIÓN.—Mírate a los pies y desharás la rueda, Berganza; quiero decir que mires que eres un animal que carece de razón, y si ahora muestras tener alguna, ya hemos averiguado entre los dos ser cosa sobrenatural y jamás vista.',
        zh: '**西皮翁：**贝尔甘萨，[低头看看自己的脚，你就会收起开屏的尾巴了]{#g-ecp-s2-08}；我是叫你认清自己本是一介没有理性的畜生，眼下纵然显露出几分理性，咱们俩刚才也已经断定，那不过是超乎自然、亘古未见的异事罢了。',
        glosses: [
          {
            id: 'g-ecp-s2-08',
            anchor: '低头看看自己的脚，你就会收起开屏的尾巴了',
            content: '西班牙传统谚语 **Mírate a los pies y desharás la rueda**，典出中世纪动物寓言集与百科书传统（如巴托洛梅乌斯·安格利库斯《物性论》）：相传孔雀展开绚丽尾羽顾盼自雄时，一旦低头瞥见自己粗黑丑陋的双脚，便会顿生羞惭、收拢尾屏。西语常以此谚劝诫得意忘形者认清自身本相。'
          }
        ]
      },
      {
        id: 'ecp-s2-p14',
        type: 'paragraph',
        num: '§ 14',
        original: 'BERGANZA.—Eso fuera ansí si yo estuviera en mi primera ignorancia; mas ahora que me ha venido a la memoria lo que te había de haber dicho al principio de nuestra plática, no sólo no me maravillo de lo que hablo, pero espántome de lo que dejo de hablar.',
        zh: '**贝尔甘萨：**倘若我还处在起初那种懵懂无知里，你说的固然不错；可如今我想起了本该在咱们谈话一开头就告诉你的那桩事，我非但不为自己能开口说话感到惊奇，反倒对自己居然还忍住这么多话没说感到诧异呢。'
      },
      {
        id: 'ecp-s2-p15',
        type: 'paragraph',
        num: '§ 15',
        original: 'CIPIÓN.—Pues ¿ahora no puedes decir lo que ahora se te acuerda?',
        zh: '**西皮翁：**那你既然现在想起来了，现在不能直说吗？'
      },
      {
        id: 'ecp-s2-p16',
        type: 'paragraph',
        num: '§ 16',
        original: 'BERGANZA.—Es una cierta historia que me pasó con una grande hechicera, discípula de la Camacha de Montilla.',
        zh: '**贝尔甘萨：**那是我在一位大女巫那里经历的一段奇事，她是蒙蒂利亚的卡马查的女徒弟。'
      },
      {
        id: 'ecp-s2-p17',
        type: 'paragraph',
        num: '§ 17',
        original: 'CIPIÓN.—Digo que me la cuentes antes que pases más adelante en el cuento de tu vida.',
        zh: '**西皮翁：**我倒要你先把这桩事讲给我听，然后再接着往下讲你的生平。'
      },
      {
        id: 'ecp-s2-p18',
        type: 'paragraph',
        num: '§ 18',
        original: 'BERGANZA.— Eso no haré yo, por cierto, hasta su tiempo: ten paciencia y escucha por su orden mis sucesos, que así te darán más gusto, si ya no te fatiga querer saber los medios antes de los principios.',
        zh: '**贝尔甘萨：**不到该讲的时候，我可决不提前讲：你且耐住性子，按先后次序听我的经历吧，这样听起来才更有滋味——除非你心急火燎，还没听开头就非要先打听中段不可。'
      },
      {
        id: 'ecp-s2-p19',
        type: 'paragraph',
        num: '§ 19',
        original: 'CIPIÓN.—Sé breve, y cuenta lo que quisieres y como quisieres.',
        zh: '**西皮翁：**那你长话短说，想讲什么、想怎么讲都随你的便。'
      },
      {
        id: 'ecp-s2-p20',
        type: 'paragraph',
        num: '§ 20',
        original: 'BERGANZA.—«Digo, pues, que yo me hallaba bien con el oficio de guardar ganado, por parecerme que comía el pan de mi sudor y trabajo, y que la ociosidad, raíz y madre de todos los vicios, no tenía que ver conmigo, a causa que si los días holgaba, las noches no dormía, dándonos asaltos a menudo y tocándonos a arma los lobos; y, apenas me habían dicho los pastores ¡al lobo, Barcino!, cuando acudía, primero que los otros perros, a la parte que me señalaban que estaba el lobo: corría los valles, escudriñaba los montes, desentrañaba las selvas, saltaba barrancos, cruzaba caminos, y a la mañana volvía al hato, sin haber hallado lobo ni rastro dél, anhelando, cansado, hecho pedazos y los pies abiertos de los garranchos; y hallaba en el hato, o ya una oveja muerta, o un carnero degollado y medio comido del lobo. Desesperábame de ver de cuán poco servía mi mucho cuidado y diligencia. Venía el señor del ganado; salían los pastores a recebirle con las pieles de la res muerta; culpaba a los pastores por negligentes, y mandaba castigar a los perros por perezosos: llovían sobre nosotros palos, y sobre ellos reprehensiones; y así, viéndome un día castigado sin culpa, y que mi cuidado, ligereza y braveza no eran de provecho para coger el lobo, determiné de mudar estilo, no desviándome a buscarle, como tenía de costumbre, lejos del rebaño, sino estarme junto a él; que, pues el lobo allí venía, allí sería más cierta la presa.',
        zh: '**贝尔甘萨：**且说我对看守羊群这份差事原本十分满意，觉得自己是靠汗水与辛劳挣饭吃，而作为万恶之根与万恶之母的懒散恶习也与我毫不相干——因为我白天纵然歇息，夜里却从不合眼：恶狼时常前来偷袭，惊得我们频频报警迎敌。牧羊人嘴里刚喊出一声「抓狼去，巴尔西诺！」，我总是抢在其他狗前头，飞奔向他们指点有狼出没的方向：我跑遍山谷，搜遍岭峦，钻透密林，跳过深涧，穿过荒径，可到了第二天清晨回到羊圈时，却连狼的影子乃至半点踪迹也没撞见，只落得气喘吁吁、精疲力竭、浑身散了架一般，四只脚掌全被枯枝断棘划得皮开肉绽；偏偏一回到羊群里，却见不是死了一只母羊，就是有一只公羊被咬断喉咙、让狼吃掉了一半。眼看自己这般小心警觉、卖力奔忙竟毫无用处，我简直绝望透顶。每逢畜主过来巡视，牧羊人便捧着死羊皮迎上前去；畜主便斥责牧羊人疏忽大意，又下令责罚狗群偷懒误事：雨点般的乱棍落在我们身上，训斥声则落在他们头上。有一天，我见自己无辜挨打，又见凭自己的警醒、迅捷与悍勇根本捉不到狼，便打定主意改换路数：不再像往常那样跑出老远去搜寻恶狼，而是寸步不离地守在羊群旁边；心想既然恶狼终归要到这儿来下手，守在这儿自然十拿九稳能逮住它。'
      },
      {
        id: 'ecp-s2-p21',
        type: 'paragraph',
        num: '§ 21',
        original: '»Cada semana nos tocaban a rebato, y en una escurísima noche tuve yo vista para ver los lobos, de quien era imposible que el ganado se guardase. Agachéme detrás de una mata, pasaron los perros, mis compañeros, adelante, y desde allí oteé, y vi que dos pastores asieron de un carnero de los mejores del aprisco, y le mataron de manera que verdaderamente pareció a la mañana que había sido su verdugo el lobo. Pasméme, quedé suspenso cuando vi que los pastores eran los lobos y que despedazaban el ganado los mismos que le habían de guardar. Al punto, hacían saber a su amo la presa del lobo, dábanle el pellejo y parte de la carne, y comíanse ellos lo más y lo mejor. Volvía a reñirles el señor, y volvía también el castigo de los perros. No había lobos, menguaba el rebaño; quisiera yo descubrillo, hallábame mudo. Todo lo cual me traía lleno de admiración y de congoja. ¡Válame Dios! —decía entre mí—, ¿quién podrá remediar esta maldad? ¿Quién será poderoso a dar a entender que la defensa ofende, que las centinelas duermen, que la confianza roba y el que os guarda os mata?»',
        zh: '那阵子几乎每个礼拜夜里都要敲响警钟；终于在一个伸手不见五指的黑夜里，我的眼睛看清了那些叫羊群防不胜防的「恶狼」究竟是谁。我伏低身子藏在一丛灌木后面，任凭我的同伴狗群从前头呼啸冲过，自己只管从暗处窥探，竟看见两个牧羊人揪住羊圈里最肥壮的一只公羊，亲手将它宰杀，而且手法做得极其逼真，到了第二天早上瞧起来活脱是被恶狼咬死的。当我亲眼看见[牧羊人自己就是恶狼]{#g-ecp-s2-09}，本该看护羊群的人竟亲手撕碎羊群时，我顿时惊得目瞪口呆、呆若木鸡。天一亮，他们立刻去向主人禀报恶狼叼羊，把羊皮和一小部分羊肉交给主人，自己却把大头和最肥美的精肉吃进了肚里。畜主照旧把他们训斥一通，我们这群狗也照旧挨一顿毒打。压根儿没有什么野狼，羊群却一天天减少；我恨不能揭穿这桩黑幕，偏偏自己又是个哑巴。这一切叫我既惊骇万分，又苦闷煎熬。「天主救我！」我在心底暗自叹道，「谁能铲除这桩恶行呢？谁又有本事叫世人明白：护卫者在行凶，哨兵在酣睡，受托者在偷盗，看守你的人正在杀害你？」',
        glosses: [
          {
            id: 'g-ecp-s2-09',
            anchor: '牧羊人自己就是恶狼',
            content: '既倒转《约翰福音》（10:11—12）善牧为羊舍命、雇工见狼逃逸的福音书比喻，亦呼应尤维纳利斯《讽刺诗集》第六首 **Quis custodiet ipsos custodes?**（「谁来看守看守者本人？」）的古典诘问。在卡斯蒂利亚梅斯塔荣誉畜牧公会（Concejo de la Mesta）的牧业法规与惯例下，羊只若遭狼害，雇牧须向畜主呈交带烙印与咬痕的残羊皮（pellejo）核销免责，不法牧人遂常在夜间自宰肥羊分食，再伪造狼噬残皮报损。'
          }
        ]
      },
      {
        id: 'ecp-s2-p22',
        type: 'paragraph',
        num: '§ 22',
        original: 'CIPIÓN.—Y decías muy bien, Berganza, porque no hay mayor ni más sotil ladrón que el doméstico, y así, mueren muchos más de los confiados que de los recatados; pero el daño está en que es imposible que puedan pasar bien las gentes en el mundo si no se fía y se confía. Mas quédese aquí esto, que no quiero que parezcamos predicadores. Pasa adelante.',
        zh: '**西皮翁：**你这话叹得极是，贝尔甘萨，因为世上再没有比家贼更大、更刁钻的强盗了，所以轻信他人而送命的人，向来比心存戒备而死的人多得多；可难处偏偏在于，人在世上倘若彼此全无信任与托付，日子根本就过不下去。不过这话就到此打住吧，我可不想让咱们听起来像两个传道士。接着往下讲。'
      },
      {
        id: 'ecp-s2-p23',
        type: 'paragraph',
        num: '§ 23',
        original: 'BERGANZA.—«Paso adelante, y digo que determiné dejar aquel oficio, aunque parecía tan bueno, y escoger otro donde por hacerle bien, ya que no fuese remunerado, no fuese castigado. Volvíme a Sevilla, y entré a servir a un mercader muy rico.»',
        zh: '**贝尔甘萨：**我接着往下讲：我决意辞掉那份表面瞧着极体面的差事，另找一份哪怕干好了得不到奖赏、至少不至于因为尽职反倒挨打的营生。于是我重返塞维利亚，进了一位巨富商人的宅邸当差。'
      },
      {
        id: 'ecp-s2-p24',
        type: 'paragraph',
        num: '§ 24',
        original: 'CIPIÓN.—¿Qué modo tenías para entrar con amo? Porque, según lo que se usa, con gran dificultad el día de hoy halla un hombre de bien señor a quien servir. Muy diferentes son los señores de la tierra del Señor del cielo: aquéllos, para recebir un criado, primero le espulgan el linaje, examinan la habilidad, le marcan la apostura, y aun quieren saber los vestidos que tiene; pero, para entrar a servir a Dios, el más pobre es más rico; el más humilde, de mejor linaje; y, con sólo que se disponga con limpieza de corazón a querer servirle, luego le manda poner en el libro de sus gajes, señalándoselos tan aventajados que, de muchos y de grandes, apenas pueden caber en su deseo.',
        zh: '**西皮翁：**你是用什么法子投靠新主人的？照如今的世道风气，一个老实正派人要想找一位东家效力，简直难如登天。人间的老爷与天上的主宰真是判若云泥：地上的老爷收录一名仆役，先要像捉跳蚤似的[细查他的血统家世]{#g-ecp-s2-10}，考校他的本领，打量他的仪表身段，甚至还要盘问他有几身衣裳；可是去侍奉上帝，最贫寒的人便是最富足的，最卑微的人便是最显贵的门第——只要他怀着一颗纯洁的心甘愿事奉天主，天主立刻就会下令将他的名字载入俸禄册，赐予他优厚无比的恩饷，其丰盛宏大几乎连他自己的心愿都盛装不下。',
        glosses: [
          {
            id: 'g-ecp-s2-10',
            anchor: '细查他的血统家世',
            content: '原文作 **espulgar el linaje**（字面义为「在血统里捉跳蚤」），是西班牙黄金时代指代「血统纯洁审查」（estatutos de limpieza de sangre）的讽刺熟语。15 世纪末至 17 世纪，卡斯蒂利亚官署、教会、修会乃至显贵豪门录用人员时，普遍严查其祖辈有无犹太教徒或摩尔人改宗者（新基督徒）血脉。'
          }
        ]
      },
      {
        id: 'ecp-s2-p25',
        type: 'paragraph',
        num: '§ 25',
        original: 'BERGANZA.—Todo eso es predicar, Cipión amigo.',
        zh: '**贝尔甘萨：**西皮翁朋友，你这一套可全是在讲道了。'
      },
      {
        id: 'ecp-s2-p26',
        type: 'paragraph',
        num: '§ 26',
        original: 'CIPIÓN.—Así me lo parece a mí, y así, callo.',
        zh: '**西皮翁：**我自己也觉得像是在讲道，所以我这就住口。'
      },
      {
        id: 'ecp-s2-p27',
        type: 'paragraph',
        num: '§ 27',
        original: 'BERGANZA.—A lo que me preguntaste del orden que tenía para entrar con amo, digo que ya tú sabes que la humildad es la basa y fundamento de todas virtudes, y que sin ella no hay alguna que lo sea. Ella allana inconvenientes, vence dificultades, y es un medio que siempre a gloriosos fines nos conduce; de los enemigos hace amigos, templa la cólera de los airados y menoscaba la arrogancia de los soberbios; es madre de la modestia y hermana de la templanza; en fin, con ella no pueden atravesar triunfo que les sea de provecho los vicios, porque en su blandura y mansedumbre se embotan y despuntan las flechas de los pecados.',
        zh: '**贝尔甘萨：**至于你问我投靠主人有什么门道，你早就晓得，谦卑乃是众德之基石与根本，离开了谦卑，世上便没有任何美德可言。谦卑能夷平阻碍，克制艰险，是一条总能引我们通向荣耀终局的途径；它能化敌为友，平息暴怒者的肝火，折损狂傲者的气焰；它是温良之母，节制之姊；总之，有了谦卑，诸般恶习便休想夺得任何对它们有利的胜果，因为罪孽射出的毒箭一旦撞上它的柔和与温顺，无不钝折崩尖。'
      },
      {
        id: 'ecp-s2-p28',
        type: 'paragraph',
        num: '§ 28',
        original: '«Désta, pues, me aprovechaba yo cuando quería entrar a servir en alguna casa, habiendo primero considerado y mirado muy bien ser casa que pudiese mantener y donde pudiese entrar un perro grande. Luego arrimábame a la puerta, y cuando, a mi parecer, entraba algún forastero, le ladraba, y cuando venía el señor bajaba la cabeza y, moviendo la cola, me iba a él, y con la lengua le limpiaba los zapatos. Si me echaban a palos, sufríalos, y con la misma mansedumbre volvía a hacer halagos al que me apaleaba, que ninguno segundaba, viendo mi porfía y mi noble término. Desta manera, a dos porfías me quedaba en casa: servía bien, queríanme luego bien, y nadie me despidió, si no era que yo me despidiese, o, por mejor decir, me fuese; y tal vez hallé amo que éste fuera el día que yo estuviera en su casa, si la contraria suerte no me hubiera perseguido.»',
        zh: '每当我想进哪户人家当差时，靠的正是这门谦卑功夫——当然事先我总要先仔细端详盘算一番，确认那户人家养得起、也容得下一条大狗。随后我便凑到大门口守着，但凡瞧着像是外人进门，我就冲他吠叫；等到这家老爷回来，我便低垂着头、摇着尾巴迎上前去，伸出舌头舔拭他的鞋面。倘若家里人拿棍子轰我走，我就默默挨着，随后仍旧满脸温顺地凑回去向打我的人摇尾讨好；人家见我如此执着，举止又这般温良大度，从来没有人忍心再打第二顿。就靠这个法子，磨上两回我就能留在宅子里了：我当差卖力，家里人很快也就疼爱起我来，从来没有哪家主人赶我走过，除非是我自己辞工——或者更确切地说，是我自己不辞而别；其间我也曾遇上过好主人，若不是乖蹇的厄运一路苦苦相逼，只怕直到今天我还留在他家里呢。'
      },
      {
        id: 'ecp-s2-p29',
        type: 'paragraph',
        num: '§ 29',
        original: 'CIPIÓN.—De la misma manera que has contado entraba yo con los amos que tuve, y parece que nos leímos los pensamientos.',
        zh: '**西皮翁：**我从前投靠历任主人时，用的也是跟你一模一样的法子，简直像是咱俩彼此看穿了心思一般。'
      },
      {
        id: 'ecp-s2-p30',
        type: 'paragraph',
        num: '§ 30',
        original: 'BERGANZA.—Como en esas cosas nos hemos encontrado, si no me engaño, y yo te las diré a su tiempo, como tengo prometido; y ahora escucha lo que me sucedió después que dejé el ganado en poder de aquellos perdidos.',
        zh: '**贝尔甘萨：**倘若我没猜错的话，咱俩不谋而合的地方还不止这一桩呢；正如我答应过你的，到了时候我自会一一讲给你听。眼下你且听听，我把羊群丢在那伙败类手里离开之后，又遇上了什么事。'
      }
    ]
  }
];
