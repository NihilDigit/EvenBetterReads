import type { BookSection } from '../../../types/book';

export const part2Sections: BookSection[] = [
  {
    id: 'ecp-sec-3',
    roman: 'III',
    titleOriginal: 'El mercader, el estudio de la Compañía y los latines',
    titleZh: '塞维利亚富商、耶稣会学堂与拉丁文卖弄',
    blocks: [
      {
        id: 'ecp-s3-p01',
        type: 'paragraph',
        num: '§ 01',
        original: '«Volvíme a Sevilla, como dije, que es amparo de pobres y refugio de desechados, que en su grandeza no sólo caben los pequeños, pero no se echan de ver los grandes. Arriméme a la puerta de una gran casa de un mercader, hice mis acostumbradas diligencias, y a pocos lances me quedé en ella. Recibiéronme para tenerme atado detrás de la puerta de día y suelto de noche; servía con gran cuidado y diligencia; ladraba a los forasteros y gruñía a los que no eran muy conocidos; no dormía de noche, visitando los corrales, subiendo a los terrados, hecho universal centinela de la mía y de las casas ajenas. Agradóse tanto mi amo de mi buen servicio, que mandó que me tratasen bien y me diesen ración de pan y los huesos que se levantasen o arrojasen de su mesa, con las sobras de la cocina, a lo que yo me mostraba agradecido, dando infinitos saltos cuando veía a mi amo, especialmente cuando venía de fuera; que eran tantas las muestras de regocijo que daba y tantos los saltos, que mi amo ordenó que me desatasen y me dejasen andar suelto de día y de noche. Como me vi suelto, corrí a él, rodeéle todo, sin osar llegarle con las manos, acordándome de la fábula de Isopo, cuando aquel asno, tan asno que quiso hacer a su señor las mismas caricias que le hacía una perrilla regalada suya, que le granjearon ser molido a palos. Parecióme que en esta fábula se nos dio a entender que las gracias y donaires de algunos no están bien en otros.»',
        zh: '如前所说，我回到了塞维利亚——这座[穷人的庇护所与弃儿的避难城]{#g-ecp-s3-01}；它如此浩瀚博大，不仅容得下微末小辈，就连显赫大人物在城里也不显山露水。我凑到一位富商的大宅门前，施展出惯常那套讨好献殷勤的本事，没过几个回合便在宅里留了下来。他们收留了我，白天把我拴在大门背后，夜里放开；我当差极为尽心勤勉，见了生人便狂吠，遇上不太面熟的人便低吼；夜里从不合眼，巡查各处院落，爬上平顶露台，俨然成了自家与左邻右舍的总哨兵。主人见我这般称职，甚是欢喜，吩咐家里人善待我，每日分给我一份口粮面包，外加他餐桌上撤下或扔下的骨头以及厨房里的残羹剩饭；我也对此感恩图报，每逢见到主人，尤其是他从外头归来时，便欢蹦乱跳个不停。我表现出的欢喜实在太盛，蹦跳得实在太欢，主人便下令给我解开绳索，许我不分昼夜自由走动。我一见自己得了自由，连忙奔到他跟前，绕着他团团打转，却不敢抬起前爪去扑碰他，因为我想起了[伊索的那则寓言]{#g-ecp-s3-02}：那头蠢得十足的驴子，见主人宠爱的一只小母狗百般撒娇讨喜，也想照样去向主人亲热献媚，结果只赚来一顿乱棒痛打。在我看来，这则寓言是要告诉我们：放在某些人身上讨喜的乖巧与风趣，挪到另一些人身上就未必相宜。',
        glosses: [
          {
            id: 'g-ecp-s3-01',
            anchor: '穷人的庇护所与弃儿的避难城',
            content: '16 至 17 世纪初，塞维利亚凭借王室西印度贸易署（Casa de la Contratación，1503 年设立）与商会交易所（Casa Lonja de Mercaderes，1598 年启用）对美洲航运及白银贸易的垄断特权，由内河港口跃升为人口逾十二万的伊比利亚第一大都会。美洲贵金属的汇入、远洋船队的补给需求与豪商巨贾的消费，吸引了欧洲各地银行家以及西班牙破产农夫、退伍兵卒与流浪汉涌入；城市人口高度流动且彼此陌生，当时西谚遂有「塞维利亚是孤儿与穷人的慈母」之称。'
          },
          {
            id: 'g-ecp-s3-02',
            anchor: '伊索的那则寓言',
            content: '原文拼作 **Isopo**，沿用西班牙早期印本《插图伊索寓言集》（Isopete historiado，1489）的传统译名。此处指《驴与哈巴狗》（佩里索引第 91 则）：驴子见主人的宠犬常跳上主人膝头摇尾舔脸并获赐佳肴，便挣断缰绳闯入厅堂，扬起前蹄搭上主人双肩引颈嘶鸣，仆役惊呼救主，将其乱棒痛殴拴回槽头。'
          },
        ]
      },
      {
        id: 'ecp-s3-p02',
        type: 'paragraph',
        num: '§ 02',
        original: 'Apode el truhán, juegue de manos y voltee el histrión, rebuzne el pícaro, imite el canto de los pájaros y los diversos gestos y acciones de los animales y los hombres el hombre bajo que se hubiere dado a ello, y no lo quiera hacer el hombre principal, a quien ninguna habilidad déstas le puede dar crédito ni nombre honroso.',
        zh: '让弄臣去插科打诨、乱起绰号吧，让优伶去变戏法、翻筋斗吧，让无赖去学驴叫吧，让专干这等营生的下贱粗人去学百鸟啼鸣、模仿百兽与世人的各色怪相举止吧；体面尊贵的人却断不可效尤，因为这一类伎俩绝不能为他增添半分声望与体面名声。'
      },
      {
        id: 'ecp-s3-p03',
        type: 'paragraph',
        num: '§ 03',
        original: 'CIPIÓN.—Basta; adelante, Berganza, que ya estás entendido.',
        zh: '**西皮翁：**够了；往下讲吧，贝尔甘萨，你的意思我已经明白了。'
      },
      {
        id: 'ecp-s3-p04',
        type: 'paragraph',
        num: '§ 04',
        original: 'BERGANZA.—¡Ojalá que como tú me entiendes me entendiesen aquellos por quien lo digo; que no sé qué tengo de buen natural, que me pesa infinito cuando veo que un caballero se hace chocarrero y se precia que sabe jugar los cubiletes y las agallas, y que no hay quien como él sepa bailar la chacona! Un caballero conozco yo que se alababa que, a ruegos de un sacristán, había cortado de papel treinta y dos florones para poner en un monumento sobre paños negros, y destas cortaduras hizo tanto caudal, que así llevaba a sus amigos a verlas como si los llevara a ver las banderas y despojos de enemigos que sobre la sepultura de sus padres y abuelos estaban puestas.',
        zh: '**贝尔甘萨：**但愿我这番话所指的那些人，也能像你懂我这样听明白才好！也不知我天性里哪来这股正经脾气，每逢看见一位体面绅士自甘下作充当丑角，洋洋得意地炫耀自己会耍扣杯藏球的戏法，又吹嘘普天之下没人比他更善[跳恰空舞]{#g-ecp-s3-03}，我心里便难受得要命！我就认得一位贵族绅士，常向人夸耀自己曾应教堂司事的恳求，亲手剪了三十二朵纸花，贴在圣周祭坛礼仪高坛的黑呢幔帐上；他把这些剪纸当成天大的资本，领着朋友们前去观赏，那架势简直就像领他们去瞻仰悬挂在自己父祖墓冢之上的敌军旌旗与战利品一般。',
        glosses: [
          {
            id: 'g-ecp-s3-03',
            anchor: '跳恰空舞',
            content: '恰空舞（chacona）于 16 世纪末由西属美洲殖民地传入塞维利亚与加的斯等港口，最初绝非后世巴洛克器乐中庄重肃穆的变奏舞曲，而是一种伴以响板、急促扭胯摆臀并配唱挑逗俚曲的狂放市井歌舞。耶稣会神学家胡安·德·马里亚纳在《论公众娱乐》（De spectaculis，1609）中曾专章痛斥其败坏礼俗，贵族绅士若亲自下场精擅此舞，在当时被视为有失体统。'
          },
        ]
      },
      {
        id: 'ecp-s3-p05',
        type: 'paragraph',
        num: '§ 05',
        original: '«Este mercader, pues, tenía dos hijos, el uno de doce y el otro de hasta catorce años, los cuales estudiaban gramática en el estudio de la Compañía de Jesús; iban con autoridad, con ayo y con pajes, que les llevaban los libros y aquel que llaman vademécum. El verlos ir con tanto aparato, en sillas si hacía sol, en coche si llovía, me hizo considerar y reparar en la mucha llaneza con que su padre iba a la Lonja a negociar sus negocios, porque no llevaba otro criado que un negro, y algunas veces se desmandaba a ir en un machuelo aun no bien aderezado.»',
        zh: '且说这位富商有两个儿子，一个十二岁，另一个将近十四岁，都在耶稣会学堂里攻读拉丁文法；兄弟俩出门排场十足，既有家庭教师督导，又有侍童前呼后拥，替他们捧着课本和那只[名叫「书袋」的皮夹]{#g-ecp-s3-04}。见他们这般兴师动众，晴天乘轿椅，雨天坐马车，倒叫我留意并琢磨起他们父亲去商会交易所洽谈生意时的那份简朴随性来——老主人身边除了一个黑奴外再不带别的仆从，有时甚至不拘体面，骑上一头连鞍辔都没配齐整的小骡子便出门去了。',
        glosses: [
          {
            id: 'g-ecp-s3-04',
            anchor: '名叫「书袋」的皮夹',
            content: '西语原文为 **vademécum**，源自拉丁语短语 **vade mecum**（意为「随我同行」）。16 至 17 世纪西班牙文法学堂与大学中，学童用来盛放课本、练习册、鹅毛笔与纸张并系有布带的硬皮书夹或书袋通称此名。'
          },
        ]
      },
      {
        id: 'ecp-s3-p06',
        type: 'paragraph',
        num: '§ 06',
        original: 'CIPIÓN.—Has de saber, Berganza, que es costumbre y condición de los mercaderes de Sevilla, y aun de las otras ciudades, mostrar su autoridad y riqueza, no en sus personas, sino en las de sus hijos; porque los mercaderes son mayores en su sombra que en sí mismos. Y, como ellos por maravilla atienden a otra cosa que a sus tratos y contratos, trátanse modestamente; y, como la ambición y la riqueza muere por manifestarse, revienta por sus hijos, y así los tratan y autorizan como si fuesen hijos de algún príncipe; y algunos hay que les procuran títulos, y ponerles en el pecho la marca que tanto distingue la gente principal de la plebeya.',
        zh: '**西皮翁：**贝尔甘萨，你要晓得，塞维利亚乃至其他各城商贾的习气与通病，就是不把威势与财富显摆在自己身上，而是全显摆在儿子身上；因为商贾之辈投射出的影子往往比他们本人更为显赫。他们既然极少分心去顾及买卖契约以外的事，待自己便颇为俭朴；可野心与财富总巴不得显露人前，便全从他们儿子身上迸发出来，于是把儿子奉养装扮得宛如王公世子一般；甚至还有人为儿子谋求贵族封号，在他们[胸前佩上那枚划分贵贱的徽记]{#g-ecp-s3-05}。',
        glosses: [
          {
            id: 'g-ecp-s3-05',
            anchor: '胸前佩上那枚划分贵贱的徽记',
            content: '指西班牙圣地亚哥（Santiago）、卡拉特拉瓦（Calatrava）与阿尔坎塔拉（Alcántara）三大军事修道骑士团缝缀于斗篷与外衣胸前的十字勋章（hábito）。按卡斯蒂利亚旧制，获授勋章者须经严苛的贵族谱系与「血统纯洁性（limpieza de sangre）」审查，本人及父祖不得有犹太或摩尔血统，亦不得从事商业经营。16 世纪末至 17 世纪初，随着哈布斯堡王室财政频频破产，塞维利亚的西印度贸易巨商常借巨额捐输、购置领地与疏通证人，为子嗣谋取骑士团十字徽章以跻身免税贵族阶层。'
          },
        ]
      },
      {
        id: 'ecp-s3-p07',
        type: 'paragraph',
        num: '§ 07',
        original: 'BERGANZA.—Ambición es, pero ambición generosa, la de aquel que pretende mejorar su estado sin perjuicio de tercero.',
        zh: '**贝尔甘萨：**这固然是野心，但一个人若想在不损害第三人的前提下改善自身地位，倒也算得上高尚的抱负。'
      },
      {
        id: 'ecp-s3-p08',
        type: 'paragraph',
        num: '§ 08',
        original: 'CIPIÓN.—Pocas o ninguna vez se cumple con la ambición que no sea con daño de tercero.',
        zh: '**西皮翁：**野心得逞而又不伤及他人利益的，世上少之又少，甚至绝无仅有。'
      },
      {
        id: 'ecp-s3-p09',
        type: 'paragraph',
        num: '§ 09',
        original: 'BERGANZA.—Ya hemos dicho que no hemos de murmurar.',
        zh: '**贝尔甘萨：**咱们可早就说定，绝不再非议损人了。'
      },
      {
        id: 'ecp-s3-p10',
        type: 'paragraph',
        num: '§ 10',
        original: 'CIPIÓN.—Sí, que yo no murmuro de nadie.',
        zh: '**西皮翁：**是啊，我又没非议谁。'
      },
      {
        id: 'ecp-s3-p11',
        type: 'paragraph',
        num: '§ 11',
        original: 'BERGANZA.—Ahora acabo de confirmar por verdad lo que muchas veces he oído decir. Acaba un maldiciente murmurador de echar a perder diez linajes y de caluniar veinte buenos, y si alguno le reprehende por lo que ha dicho, responde que él no ha dicho nada, y que si ha dicho algo, no lo ha dicho por tanto, y que si pensara que alguno se había de agraviar, no lo dijera. A la fe, Cipión, mucho ha de saber, y muy sobre los estribos ha de andar el que quisiere sustentar dos horas de conversación sin tocar los límites de la murmuración; porque yo veo en mí que, con ser un animal, como soy, a cuatro razones que digo, me acuden palabras a la lengua como mosquitos al vino, y todas maliciosas y murmurantes; por lo cual vuelvo a decir lo que otra vez he dicho: que el hacer y decir mal lo heredamos de nuestros primeros padres y lo mamamos en la leche. Vese claro en que, apenas ha sacado el niño el brazo de las fajas, cuando levanta la mano con muestras de querer vengarse de quien, a su parecer, le ofende; y casi la primera palabra articulada que habla es llamar puta a su ama o a su madre.',
        zh: '**贝尔甘萨：**我素日听人常说的一句话，此刻总算彻底印证果然不假。一个口舌歹毒、惯于非议损人的家伙，刚把十户人家的门风糟蹋殆尽，把二十个正人君子污蔑一番，倘若有人斥责他信口雌黄，他便答道自己什么也没说；纵使说了两句，也并无恶意；早知有人会见怪，他断乎不会开口。凭良心说，西皮翁，谁要想聊上两个时辰而丝毫不越过非议损人的界限，那可得有莫大的学问，还得时刻踩稳马镫、万分警醒才行；因为就连我这样一个畜生，才刚说上四句话，尖酸刻薄、讥刺损人的字眼便像蚊蚋扑酒似的直往舌尖上涌。所以我还得重申先前说过的话：作恶与说人坏话，本是我们从始祖父母那里承袭而来、打吃奶起便吮进肚里的习气。这事明摆着：婴儿的胳膊才刚从襁褓绑带里挣出来，便会扬起小手，摆出一副要向他自以为得罪了自己的人报仇的架势；而他吐字清楚说出的头一句话，十有八九就是骂他的乳母或亲娘是「婊子」。'
      },
      {
        id: 'ecp-s3-p12',
        type: 'paragraph',
        num: '§ 12',
        original: 'CIPIÓN.—Así es verdad, y yo confieso mi yerro y quiero que me le perdones, pues te he perdonado tantos. Echemos pelillos a la mar, como dicen los muchachos, y no murmuremos de aquí adelante; y sigue tu cuento, que le dejaste en la autoridad con que los hijos del mercader tu amo iban al estudio de la Compañía de Jesús.',
        zh: '**西皮翁：**这话千真万确，我认错便是；既然我已经饶过你那么多回，这回也求你饶过我吧。照小孩子们的说法，咱们[把细毛吹进大海里]{#g-ecp-s3-06}，从今往后谁也别再非议损人了；快接着讲你的故事吧，你方才讲到你那富商主人的两个儿子威风凛凛地去耶稣会学堂读书呢。',
        glosses: [
          {
            id: 'g-ecp-s3-06',
            anchor: '把细毛吹进大海里',
            content: '西语原文为 **Echemos pelillos a la mar**，源自西班牙黄金时代孩童重归于好时的游戏仪式。据塞巴斯蒂安·德·科瓦鲁维亚斯《卡斯蒂利亚语宝典》（Tesoro de la lengua castellana o española，1611）记载，孩童争吵后言和时，会各自拔下一根头发放在掌心吹散，齐念「细毛吹进大海」，寓意过往嫌隙如断发入海、永不再提。'
          },
        ]
      },
      {
        id: 'ecp-s3-p13',
        type: 'paragraph',
        num: '§ 13',
        original: 'BERGANZA.—A Él me encomiendo en todo acontecimiento; y, aunque el dejar de murmurar lo tengo por dificultoso, pienso usar de un remedio que oí decir que usaba un gran jurador, el cual, arrepentido de su mala costumbre, cada vez que después de su arrepentimiento juraba, se daba un pellizco en el brazo, o besaba la tierra, en pena de su culpa; pero, con todo esto, juraba. Así yo, cada vez que fuere contra el precepto que me has dado de que no murmure y contra la intención que tengo de no murmurar, me morderé el pico de la lengua de modo que me duela y me acuerde de mi culpa para no volver a ella.',
        zh: '**贝尔甘萨：**无论遇上什么事，我都把自己托付给耶稣救主；虽说我觉得要戒绝非议损人殊非易事，但我打算效法一个惯爱赌咒发誓之人的偏方——听说那人悔改恶习之后，每逢旧病复发赌了咒，便在自己胳膊上狠掐一把，或是俯身亲吻泥土，权作赎罪的责罚；可尽管如此，他照旧还是赌咒。我也要照此办理：今后每逢违背你立下的戒条，也违背我自己绝不非议他人的初衷时，就狠咬一下自己的舌尖，叫自己吃痛，牢记这桩罪过，免得再犯。'
      },
      {
        id: 'ecp-s3-p14',
        type: 'paragraph',
        num: '§ 14',
        original: 'CIPIÓN.—Tal es ese remedio, que si usas dél espero que te has de morder tantas veces que has de quedar sin lengua, y así, quedarás imposibilitado de murmurar.',
        zh: '**西皮翁：**这法子倒妙，你若是当真照办，只怕咬上无数回之后，整条舌头都要咬没了，到那时你想非议损人也张不开嘴了。'
      },
      {
        id: 'ecp-s3-p15',
        type: 'paragraph',
        num: '§ 15',
        original: 'BERGANZA.—A lo menos, yo haré de mi parte mis diligencias, y supla las faltas el cielo.',
        zh: '**贝尔甘萨：**至少我会尽自己的本分去努力，不足之处就仰赖上苍补全吧。'
      },
      {
        id: 'ecp-s3-p16',
        type: 'paragraph',
        num: '§ 16',
        original: '«Y así, digo que los hijos de mi amo se dejaron un día un cartapacio en el patio, donde yo a la sazón estaba; y, como estaba enseñado a llevar la esportilla del jifero mi amo, así del vademécum y fuime tras ellos, con intención de no soltalle hasta el estudio. Sucedióme todo como lo deseaba: que mis amos, que me vieron venir con el vademécum en la boca, asido sotilmente de las cintas, mandaron a un paje me le quitase; mas yo no lo consentí ni le solté hasta que entré en el aula con él, cosa que causó risa a todos los estudiantes. Lleguéme al mayor de mis amos, y, a mi parecer, con mucha crianza se le puse en las manos, y quedéme sentado en cuclillas a la puerta del aula, mirando de hito en hito al maestro que en la cátedra leía. No sé qué tiene la virtud, que, con alcanzárseme a mí tan poco o nada della, luego recibí gusto de ver el amor, el término, la solicitud y la industria con que aquellos benditos padres y maestros enseñaban a aquellos niños, enderezando las tiernas varas de su juventud, porque no torciesen ni tomasen mal siniestro en el camino de la virtud, que juntamente con las letras les mostraban. Consideraba cómo los reñían con suavidad, los castigaban con misericordia, los animaban con ejemplos, los incitaban con premios y los sobrellevaban con cordura; y, finalmente, cómo les pintaban la fealdad y horror de los vicios y les dibujaban la hermosura de las virtudes, para que, aborrecidos ellos y amadas ellas, consiguiesen el fin para que fueron criados.»',
        zh: '话说有一天，两位小主人把一本课业夹忘在了院子里，我恰巧就在院中；因为我先前跟着屠户旧主人时早就练熟了叼提菜篮的本事，便一口叼起那只书袋，跟在他们身后追去，打定主意不到学堂绝不松口。事情果真遂了我的心愿：两位小主人见我嘴里灵巧地叼着书袋的系带赶来，便吩咐一名侍童把书袋从我嘴里取走；可我偏不依从，一直死死叼着走进课室方才罢休，惹得满堂学生哄堂大笑。我走到大少爷跟前，自以为极有教养地把书袋交到他手里，随后便蹲坐在课室门口，目不转睛地望着讲坛上授课的先生。也不知美德究竟有何等魔力，我虽对它一窍不通、全无领悟，但一看见那些可敬的神父与老师们怀着那般慈爱、分寸、热忱与巧思教导孩童，扶正他们年少柔嫩的枝条，免得他们在兼修文辞与美德的道路上长歪走邪，我心头便顿生欢喜。我细细看他们如何[以柔和申饬，以仁慈责罚]{#g-ecp-s3-07}，以榜样感召，以奖赏激励，又以审慎包容体恤；看他们最终如何向孩童描摹恶习的丑陋可怖，勾勒美德的端庄秀美，好叫他们憎恶邪僻、热爱良善，达成受造降生于世的终极宗旨。',
        glosses: [
          {
            id: 'g-ecp-s3-07',
            anchor: '以柔和申饬，以仁慈责罚',
            content: '指塞维利亚耶稣会圣埃尔梅内希尔多学院（Colegio de San Hermenegildo，1580 年开办，塞万提斯旅居塞维利亚期间熟稔其风貌）所奉行的人文主义教育法。针对传统文法学校奉行「学问靠流血灌输（la letra con sangre entra）」的严酷鞭笞，耶稣会于 1599 年正式颁行《耶稣会教学章程》（Ratio Studiorum），主张以温和劝诫、修辞演练、同侪荣誉竞赛（aemulatio）与公开授奖激发学童向学；段末「达成受造降生于世的终极宗旨」，则直接化用了依纳爵·罗耀拉《神操》开篇著名的「原则与基础（Principium et Fundamentum）」命题。'
          },
        ]
      },
      {
        id: 'ecp-s3-p17',
        type: 'paragraph',
        num: '§ 17',
        original: 'CIPIÓN.—Muy bien dices, Berganza; porque yo he oído decir desa bendita gente que para repúblicos del mundo no los hay tan prudentes en todo él, y para guiadores y adalides del camino del cielo, pocos les llegan. Son espejos donde se mira la honestidad, la católica dotrina, la singular prudencia, y, finalmente, la humildad profunda, basa sobre quien se levanta todo el edificio de la bienaventuranza.',
        zh: '**西皮翁：**贝尔甘萨，你说得极是；因为我曾听人赞叹过这班可敬的教士：论经世济民的干才，普天之下再没有比他们更审慎练达的了；论指引通往天国之路的向导与先驱，世上也少有人能望其项背。他们是映照端方品行、天主教正统教义、非凡睿智乃至深沉谦卑的明镜，而谦卑正是托起整座天国福乐大厦的基石。'
      },
      {
        id: 'ecp-s3-p18',
        type: 'paragraph',
        num: '§ 18',
        original: 'BERGANZA.—Todo es así como lo dices.',
        zh: '**贝尔甘萨：**句句都如你所说。'
      },
      {
        id: 'ecp-s3-p19',
        type: 'paragraph',
        num: '§ 19',
        original: '«Y, siguiendo mi historia, digo que mis amos gustaron de que les llevase siempre el vademécum, lo que hice de muy buena voluntad; con lo cual tenía una vida de rey, y aun mejor, porque era descansada, a causa que los estudiantes dieron en burlarse conmigo, y domestiquéme con ellos de tal manera, que me metían la mano en la boca y los más chiquillos subían sobre mí. Arrojaban los bonetes o sombreros, y yo se los volvía a la mano limpiamente y con muestras de grande regocijo. Dieron en darme de comer cuanto ellos podían, y gustaban de ver que, cuando me daban nueces o avellanas, las partía como mona, dejando las cáscaras y comiendo lo tierno. Tal hubo que, por hacer prueba de mi habilidad, me trujo en un pañuelo gran cantidad de ensalada, la cual comí como si fuera persona. Era tiempo de invierno, cuando campean en Sevilla los molletes y mantequillas, de quien era tan bien servido, que más de dos Antonios se empeñaron o vendieron para que yo almorzase. Finalmente, yo pasaba una vida de estudiante sin hambre y sin sarna, que es lo más que se puede encarecer para decir que era buena; porque si la sarna y la hambre no fuesen tan unas con los estudiantes, en las vidas no habría otra de más gusto y pasatiempo, porque corren parejas en ella la virtud y el gusto, y se pasa la mocedad aprendiendo y holgándose.',
        zh: '接着往下讲我的身世：两位小主人很喜欢叫我天天替他们叼送书袋，我也乐意效劳；靠着这门差事，我过上了帝王般的日子，甚至比帝王还要快活，因为日子清闲自在——学生们都爱同我逗乐嬉戏，我也跟他们混得烂熟，任凭他们把手伸进我嘴里，年纪最小的那几个孩童还骑到我背上来。他们把四角学士帽或宽边帽远远抛出去，我便干干净净地叼回他们手里，还露出一副欢天喜地的模样。他们倾其所有给我投喂吃食，见我把核桃或榛子像母猴似的嗑开、吐掉硬壳只吃嫩仁，更是乐不可支。有个学生为了试探我的本领，竟用手帕包了一大兜生菜沙拉带来，我也像大活人一样吃了个精光。其时正值隆冬，恰是塞维利亚松软白面包卷配黄油大行其道的时节，学生们待我如此慷慨，为了供我吃早点，竟有[不止两册「安东尼奥」被拿去典当]{#g-ecp-s3-08}或变卖。总而言之，我过上了既不挨饿又不生疥疮的快活学生生涯，要想夸赞日子美满，再没有比这更高的褒奖了；因为倘若疥疮和饥饿不是跟学生们如此形影不离，世上百业之中原本再没有比求学生涯更有滋味、更惬意消遣的日子了——在那里，进德与欢娱并驾齐驱，大好青春就在读书向学与嬉游欢笑间度过。',
        glosses: [
          {
            id: 'g-ecp-s3-08',
            anchor: '不止两册「安东尼奥」被拿去典当',
            content: '指西班牙人文主义语文学家埃利奥·安东尼奥·德·内夫里哈（Elio Antonio de Nebrija）编纂的《拉丁语导论》（Introductiones latinae，1481）。1598 年腓力三世颁布王室敕令，钦定经修订的内夫里哈拉丁语法书为卡斯蒂利亚各级学堂唯一法定拉丁语课本，学童遂以作者教名直接将课本俗称为「安东尼奥（el Antonio）」。'
          },
        ]
      },
      {
        id: 'ecp-s3-p20',
        type: 'paragraph',
        num: '§ 20',
        original: '»Desta gloria y desta quietud me vino a quitar una señora que, a mi parecer, llaman por ahí razón de estado; que, cuando con ella se cumple, se ha de descumplir con otras razones muchas. Es el caso que aquellos señores maestros les pareció que la media hora que hay de lición a lición la ocupaban los estudiantes, no en repasar las liciones, sino en holgarse conmigo; y así, ordenaron a mis amos que no me llevasen más al estudio. Obedecieron, volviéronme a casa y a la antigua guarda de la puerta, y, sin acordarse señor el viejo de la merced que me había hecho de que de día y de noche anduviese suelto, volví a entregar el cuello a la cadena y el cuerpo a una esterilla que detrás de la puerta me pusieron.»',
        zh: '谁知竟有一位贵妇人来夺走了我的这份荣耀与安宁——依我看来，她就是[世人称之为「国家理性」的贵妇人]{#g-ecp-s3-09}；每逢要奉行她的旨意，就势必得违逆许许多多别的常理。事情是这样的：学堂里那些老师老爷们发觉，两堂课之间那半个时辰的课间空当，学生们全都不用来温习功课，反倒只顾着同我耍闹取乐；于是便责令两位小主人今后不许再带我进学堂。小主人们只得照办，把我领回家去，重又打发去干从前看守大门的老差事；老主人也早把先前恩准我不分昼夜自由走动的赏赐忘到了脑后，我只得重又把脖子交给铁链，把身子交给铺在大门背后的一张小草垫。',
        glosses: [
          {
            id: 'g-ecp-s3-09',
            anchor: '世人称之为「国家理性」的贵妇人',
            content: '西语原文为 **razón de Estado**（因语法阴性故戏拟为「贵妇人」），源自意大利政治思想家乔瓦尼·博泰罗于 1589 年梓行的《国家理性论》（Della ragion di Stato）。该书于 1593 年由王室史官安东尼奥·德·埃雷拉译成西语印行，连同耶稣会士佩德罗·德·里瓦德内拉《基督教君主论》（1595），试图在马基雅维利权术论之外确立合乎天主教秩序的保邦权变之术；17 世纪初，「国家理性」一词已由枢密院政略术语流变为市井街谈中替一切武断处置充门面的口头禅。'
          },
        ]
      },
      {
        id: 'ecp-s3-p21',
        type: 'paragraph',
        num: '§ 21',
        original: '¡Ay, amigo Cipión, si supieses cuán dura cosa es de sufrir el pasar de un estado felice a un desdichado! Mira: cuando las miserias y desdichas tienen larga la corriente y son continuas, o se acaban presto, con la muerte, o la continuación dellas hace un hábito y costumbre en padecellas, que suele en su mayor rigor servir de alivio; mas, cuando de la suerte desdichada y calamitosa, sin pensarlo y de improviso, se sale a gozar de otra suerte próspera, venturosa y alegre, y de allí a poco se vuelve a padecer la suerte primera y a los primeros trabajos y desdichas, es un dolor tan riguroso que si no acaba la vida, es por atormentarla más viviendo.',
        zh: '唉，西皮翁朋友，但愿你能明白，由顺遂福境骤然跌入凄惨厄运，那是何等难熬的苦楚！你看：当困苦与灾祸源远流长、连绵不断时，要么很快随一死而解脱，要么在久受煎熬中养成忍耐的习惯与常例，而这种习惯在苦难最深重时往往反倒能化作几分宽慰；可倘若一个人从倒霉凄惨的厄运里，冷不防喜出望外地一步跨进顺遂、侥幸而又快活的好光景，偏偏没过多久，又被打回起初的苦命与往昔的劳碌灾祸之中，那份剧痛可就酷烈极了——它若不索去人的性命，也只是为了叫人活着受尽更深的折磨。'
      },
      {
        id: 'ecp-s3-p22',
        type: 'paragraph',
        num: '§ 22',
        original: '«Digo, en fin, que volví a mi ración perruna y a los huesos que una negra de casa me arrojaba, y aun éstos me dezmaban dos gatos romanos: que, como sueltos y ligeros, érales fácil quitarme lo que no caía debajo del distrito que alcanzaba mi cadena.»',
        zh: '总而言之，我又退回到了每日那份狗粮，以及家里一个黑女奴随手扔给我的几根骨头上；就连这点骨头，也还要被两只虎斑猫抽去什一税——它们既无绳索牵绊又身手敏捷，凡是没落在我铁链够得着的地界之内的吃食，轻而易举就被它们叼走了。'
      },
      {
        id: 'ecp-s3-p23',
        type: 'paragraph',
        num: '§ 23',
        original: 'Cipión hermano, así el cielo te conceda el bien que deseas, que, sin que te enfades, me dejes ahora filosofar un poco; porque si dejase de decir las cosas que en este instante me han venido a la memoria de aquellas que entonces me ocurrieron, me parece que no sería mi historia cabal ni de fruto alguno.',
        zh: '西皮翁兄弟，愿上苍赐予你心之所求，求你莫要厌烦，容我现在讲上几句哲理吧；因为倘若把当年涌上心头、而此刻又重浮脑海的那些感触略去不提，我觉得自己的这部身世便不算完备，也毫无教益可言了。'
      },
      {
        id: 'ecp-s3-p24',
        type: 'paragraph',
        num: '§ 24',
        original: 'CIPIÓN.—Advierte, Berganza, no sea tentación del demonio esa gana de filosofar que dices te ha venido, porque no tiene la murmuración mejor velo para paliar y encubrir su maldad disoluta que darse a entender el murmurador que todo cuanto dice son sentencias de filósofos, y que el decir mal es reprehensión y el descubrir los defetos ajenos buen celo. Y no hay vida de ningún murmurante que, si la consideras y escudriñas, no la halles llena de vicios y de insolencias. Y debajo de saber esto, filosofea ahora cuanto quisieres.',
        zh: '**西皮翁：**当心啊，贝尔甘萨，你口口声声说涌上心头的这股讲哲理的兴致，莫不是魔鬼的试探；因为非议损人若想粉饰遮掩它那放肆的恶毒，再没有比这一层遮羞布更管用的了——好议人是非者总自以为口中所言句句皆是哲人箴言，把恶语伤人当成正色规劝，把揭人短处当成一片公心热忱。而世上凡是好议人是非之徒，你若仔细省察推究他的生平，没有一个不是恶习累累、狂妄无状的。你只要心里明白这一层，现在尽可随心所欲地去谈你的哲理吧。'
      },
      {
        id: 'ecp-s3-p25',
        type: 'paragraph',
        num: '§ 25',
        original: 'BERGANZA.—Seguro puedes estar, Cipión, de que más murmure, porque así lo tengo prosupuesto.',
        zh: '**贝尔甘萨：**西皮翁，你尽管放心，我断不会再非议损人，因为我早已立定这番主意了。'
      },
      {
        id: 'ecp-s3-p26',
        type: 'paragraph',
        num: '§ 26',
        original: '«Es, pues, el caso, que como me estaba todo el día ocioso y la ociosidad sea madre de los pensamientos, di en repasar por la memoria algunos latines que me quedaron en ella de muchos que oí cuando fui con mis amos al estudio, con que, a mi parecer, me hallé algo más mejorado de entendimiento, y determiné, como si hablar supiera, aprovecharme dellos en las ocasiones que se me ofreciesen; pero en manera diferente de la que se suelen aprovechar algunos ignorantes.»',
        zh: '事情是这样的：我既然终日无所事事，而闲散又是百般思虑之母，我便在脑海里反复温习起先前随小主人去学堂时听来的许多拉丁文词句中残留在记忆里的那几句；照我自己看来，我的悟性似乎因此长进了不少，便暗下决心，仿佛自己真会开口说话似的，一旦遇上合宜的场合便拿出来派上用场——不过，我的用法可跟某些无知之徒惯常的卖弄截然不同。'
      },
      {
        id: 'ecp-s3-p27',
        type: 'paragraph',
        num: '§ 27',
        original: 'Hay algunos romancistas que en las conversaciones disparan de cuando en cuando con algún latín breve y compendioso, dando a entender a los que no lo entienden que son grandes latinos, y apenas saben declinar un nombre ni conjugar un verbo.',
        zh: '有些[只通本国俗语的半瓶醋]{#g-ecp-s3-10}，在日常交谈中不冷不防便蹦出一两句简短凝练的拉丁成语，在不懂行的人面前摆出一副精熟拉丁文的大家派头，其实自己连一个名词变格、一个动词变位都勉强凑不齐。',
        glosses: [
          {
            id: 'g-ecp-s3-10',
            anchor: '只通本国俗语的半瓶醋',
            content: '西语原文为 **romancistas**，在黄金时代与精通拉丁学术语言的大学士人（latinos 或 letrados）相对，专指仅识卡斯蒂利亚母语俗语（lengua romance）而未受正规拉丁古典教育之人（如当时将不识拉丁医典的外科医匠称为 médicos romancistas）。'
          },
        ]
      },
      {
        id: 'ecp-s3-p28',
        type: 'paragraph',
        num: '§ 28',
        original: 'CIPIÓN.—Por menor daño tengo ése que el que hacen los que verdaderamente saben latín, de los cuales hay algunos tan imprudentes que, hablando con un zapatero o con un sastre, arrojan latines como agua.',
        zh: '**西皮翁：**依我看，这等毛病比起那些真正懂拉丁文的人所闯的祸还算轻的；他们当中有些人大不知趣，同鞋匠或裁缝说话时，也像泼水一般大段大段地往外倒拉丁文。'
      },
      {
        id: 'ecp-s3-p29',
        type: 'paragraph',
        num: '§ 29',
        original: 'BERGANZA.—Deso podremos inferir que tanto peca el que dice latines delante de quien los ignora, como el que los dice ignorándolos.',
        zh: '**贝尔甘萨：**由此我们可以推知，在不懂拉丁文的人面前卖弄拉丁文，与自己不懂却偏要硬拽拉丁文，罪过是一般大的。'
      },
      {
        id: 'ecp-s3-p30',
        type: 'paragraph',
        num: '§ 30',
        original: 'CIPIÓN.—Pues otra cosa puedes advertir, y es que hay algunos que no les escusa el ser latinos de ser asnos.',
        zh: '**西皮翁：**还有一桩事你也该留意，那就是有些人纵使精通拉丁文，也照样免不了是头蠢驴。'
      },
      {
        id: 'ecp-s3-p31',
        type: 'paragraph',
        num: '§ 31',
        original: 'BERGANZA.—Pues ¿quién lo duda? La razón está clara, pues cuando en tiempo de los romanos hablaban todos latín, como lengua materna suya, algún majadero habría entre ellos, a quien no escusaría el hablar latín dejar de ser necio.',
        zh: '**贝尔甘萨：**那还用问吗？道理明摆着：当年古罗马时代，人人把拉丁语当作母语来说，他们当中总归也有几个蠢货，[绝不会因为嘴里说的是拉丁语，就免除了愚蠢]{#g-ecp-s3-11}。',
        glosses: [
          {
            id: 'g-ecp-s3-11',
            anchor: '绝不会因为嘴里说的是拉丁语，就免除了愚蠢',
            content: '承袭自文艺复兴基督教人文主义对经院迂腐学风的语言批评传统。伊拉斯谟在《愚人颂》与《西塞罗主义者》（1528）中多次嘲讽盲目崇拜拉丁辞藻的学究，西班牙人文主义者胡安·德·巴尔德斯《语言对话录》（1535）与佩德罗·西蒙·阿夫里尔亦力倡母语尊严，力斥将拉丁语能力混同于心智识见的世俗偏见；塞万提斯后在《堂吉诃德》下卷第 16 章及《玻璃硕士》中亦反复化用此论。'
          },
        ]
      },
      {
        id: 'ecp-s3-p32',
        type: 'paragraph',
        num: '§ 32',
        original: 'CIPIÓN.—Para saber callar en romance y hablar en latín, discreción es menester, hermano Berganza.',
        zh: '**西皮翁：**贝尔甘萨兄弟，要懂得何时用俗语缄默、何时用拉丁语开口，靠的是审慎与识见。'
      },
      {
        id: 'ecp-s3-p33',
        type: 'paragraph',
        num: '§ 33',
        original: 'BERGANZA.—Así es, porque también se puede decir una necedad en latín como en romance, y yo he visto letrados tontos, y gramáticos pesados, y romancistas vareteados con sus listas de latín, que con mucha facilidad pueden enfadar al mundo, no una sino muchas veces.',
        zh: '**贝尔甘萨：**正是如此，因为蠢话既可以用俗语说，也照样可以用拉丁语说；我就见过愚蠢的饱学之士、迂腐乏味的文法教书匠，还有浑身像条纹织物似的镶满拉丁文花边的俗语之徒，他们轻而易举便能叫世人厌烦透顶，而且不止一回，是千百回。'
      },
      {
        id: 'ecp-s3-p34',
        type: 'paragraph',
        num: '§ 34',
        original: 'CIPIÓN.—Dejemos esto, y comienza a decir tus filosofías.',
        zh: '**西皮翁：**这话题且打住，快开讲你的高深哲理吧。'
      },
      {
        id: 'ecp-s3-p35',
        type: 'paragraph',
        num: '§ 35',
        original: 'BERGANZA.—Ya las he dicho: éstas son que acabo de decir.',
        zh: '**贝尔甘萨：**我已经讲完了呀——方才说的这番话便是。'
      },
      {
        id: 'ecp-s3-p36',
        type: 'paragraph',
        num: '§ 36',
        original: 'CIPIÓN.—¿Cuáles?',
        zh: '**西皮翁：**哪一番话？'
      },
      {
        id: 'ecp-s3-p37',
        type: 'paragraph',
        num: '§ 37',
        original: 'BERGANZA.—Estas de los latines y romances, que yo comencé y tú acabaste.',
        zh: '**贝尔甘萨：**就是刚才由我起头、由你收尾的这番关于拉丁语和俗语的议论呀。'
      },
      {
        id: 'ecp-s3-p38',
        type: 'paragraph',
        num: '§ 38',
        original: 'CIPIÓN.—¿Al murmurar llamas filosofar? ¡Así va ello! Canoniza, canoniza, Berganza, a la maldita plaga de la murmuración, y dale el nombre que quisieres, que ella dará a nosotros el de cínicos, que quiere decir perros murmuradores; y por tu vida que calles ya y sigas tu historia.',
        zh: '**西皮翁：**你管非议损人叫作谈哲理？世道真是好极了！封圣吧，贝尔甘萨，尽管把非议损人这场该死的瘟疫封为神圣，随你给它安上什么美名吧；可它[回敬给咱们的只会是「犬儒」的骂名]{#g-ecp-s3-12}——那意思就是专爱狂吠损人的恶狗！看在你的性命份上，快闭上闲嘴，接着讲你的身世吧。',
        glosses: [
          {
            id: 'g-ecp-s3-12',
            anchor: '回敬给咱们的只会是「犬儒」的骂名',
            content: '西语原文为 **cínicos, que quiere decir perros murmuradores**。「犬儒（cínico）」源于古希腊语 **kynikos**（字面义为「如犬的」，词根 **kyōn** 即「狗」），原指安提斯泰尼与锡诺普的第欧根尼所创学派，因其摒弃礼俗遮饰、直言痛斥世弊而得名；至文艺复兴与黄金时代（参见科瓦鲁维亚斯《卡斯蒂利亚语宝典》「cínico」条），该词在西语日常语用中已演变为「如恶犬般尖酸刻薄、专好毁谤讥刺之徒」的代称。'
          },
        ]
      },
    ]
  },
  {
    id: 'ecp-sec-4',
    roman: 'IV',
    titleOriginal: 'El buey en la lengua y las dádivas de la esclava',
    titleZh: '舌上金牛与女奴的封口贿赂',
    blocks: [
      {
        id: 'ecp-s4-p01',
        type: 'paragraph',
        num: '§ 01',
        original: 'BERGANZA.—¿Cómo la tengo de seguir si callo?',
        zh: '**贝尔甘萨：**我要是闭了嘴，还怎么接着讲？'
      },
      {
        id: 'ecp-s4-p02',
        type: 'paragraph',
        num: '§ 02',
        original: 'CIPIÓN.—Quiero decir que la sigas de golpe, sin que la hagas que parezca pulpo, según la vas añadiendo colas.',
        zh: '**西皮翁：**我是叫你一气呵成地往下讲，别老给故事一条接一条地添尾巴，弄得活像一只章鱼。'
      },
      {
        id: 'ecp-s4-p03',
        type: 'paragraph',
        num: '§ 03',
        original: 'BERGANZA.—Habla con propiedad: que no se llaman colas las del pulpo.',
        zh: '**贝尔甘萨：**说话用词要贴切：[章鱼身上长的可不叫尾巴]{#g-ecp-s4-01}。',
        glosses: [
          {
            id: 'g-ecp-s4-01',
            anchor: '章鱼身上长的可不叫尾巴',
            content: '西语俗语常以「给章鱼添尾巴」比喻叙事枝蔓横生；但在黄金时代安达卢西亚与卡斯蒂利亚市井鱼肆口语中，章鱼的八条触腕通常不称「尾巴（colas）」，而俗称 **rabos**——该词在当时口语中兼指臀部与男性生殖器，属粗鄙忌讳字眼。'
          },
        ]
      },
      {
        id: 'ecp-s4-p04',
        type: 'paragraph',
        num: '§ 04',
        original: 'CIPIÓN.—Ése es el error que tuvo el que dijo que no era torpedad ni vicio nombrar las cosas por sus propios nombres, como si no fuese mejor, ya que sea forzoso nombrarlas, decirlas por circunloquios y rodeos que templen la asquerosidad que causa el oírlas por sus mismos nombres. Las honestas palabras dan indicio de la honestidad del que las pronuncia o las escribe.',
        zh: '**西皮翁：**这正是当年那个鼓吹「[直呼事物本名并非丑行恶德]{#g-ecp-s4-02}」之人所犯的谬误；殊不知倘若万不得已非提不可，难道不是借委婉曲折的说法来冲淡直呼其名所引起的秽恶之感更为妥当吗？洁净端庄的言辞，正是说话人或执笔者品行端方的明证。',
        glosses: [
          {
            id: 'g-ecp-s4-02',
            anchor: '直呼事物本名并非丑行恶德',
            content: '典出西塞罗《论义务》（De officiis）第 1 卷第 35 节（第 127—128 段）及《致亲友书》第 9 卷第 22 封。古希腊犬儒学派与早期斯多亚派哲人主张，凡合乎自然之物皆无丑恶，故直呼身体隐私部位或秽事之本名亦非过失（拉丁语记作 placet Stoicis suo quamque rem nomine appellare）；西塞罗则立足社会礼仪（decorum）予以驳斥，强调言辞须守羞恶分寸，涉鄙俗处当以委婉语（circunloquio）周旋。'
          },
        ]
      },
      {
        id: 'ecp-s4-p05',
        type: 'paragraph',
        num: '§ 05',
        original: 'BERGANZA.—Quiero creerte; «y digo que, no contenta mi fortuna de haberme quitado de mis estudios y de la vida que en ellos pasaba, tan regocijada y compuesta, y haberme puesto atraillado tras de una puerta, y de haber trocado la liberalidad de los estudiantes en la mezquinidad de la negra, ordenó de sobresaltarme en lo que ya por quietud y descanso tenía.»',
        zh: '**贝尔甘萨：**我且信你的话；话说我的命运并不满足于夺走我的学堂生涯与我在那里度过的欢快体面的日子，也不满足于把我用皮带拴在一扇门后、叫黑女奴的刻薄吝啬取代了学生们的慷慨大方，竟又定意要在我业已视作清静安歇的境地里惊扰折腾我。'
      },
      {
        id: 'ecp-s4-p06',
        type: 'paragraph',
        num: '§ 06',
        original: 'Mira, Cipión, ten por cierto y averiguado, como yo lo tengo, que al desdichado las desdichas le buscan y le hallan, aunque se esconda en los últimos rincones de la tierra.',
        zh: '你看，西皮翁，有一桩事我深信不疑，你也尽管视作铁定的实情：倒霉的人哪怕躲到天涯海角最偏僻的角落里，灾祸也会寻上门来将他揪出。'
      },
      {
        id: 'ecp-s4-p07',
        type: 'paragraph',
        num: '§ 07',
        original: '«Dígolo porque la negra de casa estaba enamorada de un negro, asimismo esclavo de casa, el cual negro dormía en el zaguán, que es entre la puerta de la calle y la de en medio, detrás de la cual yo estaba; y no se podían juntar sino de noche, y para esto habían hurtado o contrahecho las llaves; y así, las más de las noches bajaba la negra, y, tapándome la boca con algún pedazo de carne o queso, abría al negro, con quien se daba buen tiempo, facilitándolo mi silencio, y a costa de muchas cosas que la negra hurtaba. Algunos días me estragaron la conciencia las dádivas de la negra, pareciéndome que sin ellas se me apretarían las ijadas y daría de mastín en galgo. Pero, en efeto, llevado de mi buen natural, quise responder a lo que a mi amo debía, pues tiraba sus gajes y comía su pan, como lo deben hacer no sólo los perros honrados, a quien se les da renombre de agradecidos, sino todos aquellos que sirven.»',
        zh: '我之所以这么说，是因为宅里的那个黑女奴恋上了[同在宅中为奴的一个黑人]{#g-ecp-s4-03}；这黑奴睡在临街大门与二道中门之间的门廊里，而我就拴在那扇中门背后；他们唯有趁夜里才能幽会，为此早就偷拿或私配了钥匙。于是，十有八九的夜晚，黑女奴便摸下楼来，拿一块肉或奶酪堵住我的嘴，随后打开中门放那黑奴进来，借着我的缄默尽情寻欢作乐，而花销则全靠女奴从家里顺手偷拿的许多财物。一连好些天，黑女奴的贿赂败坏了我的良心，因为我觉得若是没了这些外快，自己准会饿得两肋塌陷，从威壮的护院獒犬瘦成细腰猎狗。可是到头来，我终究受天生的良善本性驱使，决意报答我对主人应尽的本分——毕竟我领着他的俸禄、吃着他的面包；不单是素有知恩图报美名的忠厚好狗理当如此，凡是为人当差效劳的仆从也都该如此。',
        glosses: [
          {
            id: 'g-ecp-s4-03',
            anchor: '同在宅中为奴的一个黑人',
            content: '16 至 17 世纪初，塞维利亚与里斯本并列为西欧蓄奴规模最大的城市。据 1565 年塞维利亚总教区人口统计，全城登记奴隶达 6327 人，约占总人口的百分之七至十，在伊比利亚半岛各城中居首，其中绝大多数为经葡萄牙与跨大西洋贸易贩运而来的西非黑人及混血奴隶。富商与贵族宅邸普遍蓄养男女家奴充任厨娘、轿夫、马夫与杂役。'
          },
        ]
      },
      {
        id: 'ecp-s4-p08',
        type: 'paragraph',
        num: '§ 08',
        original: 'CIPIÓN.—Esto sí, Berganza, quiero que pase por filosofía, porque son razones que consisten en buena verdad y en buen entendimiento; y adelante y no hagas soga, por no decir cola, de tu historia.',
        zh: '**西皮翁：**贝尔甘萨，这番话我才肯认作真正的哲理，因为字字句句都立在正理与良知之上；往下讲吧，别再把你的故事搓成长绳了——我就不说「尾巴」了。'
      },
      {
        id: 'ecp-s4-p09',
        type: 'paragraph',
        num: '§ 09',
        original: 'BERGANZA.—Primero te quiero rogar me digas, si es que lo sabes, qué quiere decir filosofía; que, aunque yo la nombro, no sé lo que es; sólo me doy a entender que es cosa buena.',
        zh: '**贝尔甘萨：**在此之前，倘若你晓得的话，我想先求你告诉我「哲学」究竟是什么意思；因为我嘴上虽然常提这个词，却并不明白它是什么，只隐约觉得是桩好东西。'
      },
      {
        id: 'ecp-s4-p10',
        type: 'paragraph',
        num: '§ 10',
        original: 'CIPIÓN.— Con brevedad te la diré. Este nombre se compone de dos nombres griegos, que son filos y sofía; filos quiere decir amor, y sofía, la ciencia; así que filosofía significa \'amor de la ciencia\', y filósofo, \'amador de la ciencia\'.',
        zh: '**西皮翁：**我简短跟你说吧。这个名称由[两个希腊语词「菲洛斯」与「索菲娅」]{#g-ecp-s4-04}合成：「菲洛斯」意为「爱」，「索菲娅」意为「学问」；因此「哲学」的意思便是「爱学问」，而「哲学家」便是「爱学问的人」。',
        glosses: [
          {
            id: 'g-ecp-s4-04',
            anchor: '两个希腊语词「菲洛斯」与「索菲娅」',
            content: '古希腊语 **philosophia** 由 **philos**（喜爱、友爱）与 **sophia**（智慧、真知）复合而成，古传由毕达哥拉斯首创（见西塞罗《图斯库卢姆谈话录》第 5 卷第 3 节及第欧根尼·拉尔修《名哲言行录》序卷）。自塞维利亚的圣伊西多尔《词源》至黄金时代佩德罗·梅希亚《博闻杂俎》（Silva de varia lección，1540）及各类文法学堂蒙学读本，开篇无不照例背诵这一词源拆解，早已沦为当时街知巷闻的书袋常谈。'
          },
        ]
      },
      {
        id: 'ecp-s4-p11',
        type: 'paragraph',
        num: '§ 11',
        original: 'BERGANZA.—Mucho sabes, Cipión. ¿Quién diablos te enseñó a ti nombres griegos?',
        zh: '**贝尔甘萨：**西皮翁，你懂的可真多！究竟见了什么鬼，是谁教你希腊语词儿的？'
      },
      {
        id: 'ecp-s4-p12',
        type: 'paragraph',
        num: '§ 12',
        original: 'CIPIÓN.—Verdaderamente, Berganza, que eres simple, pues desto haces caso; porque éstas son cosas que las saben los niños de la escuela, y también hay quien presuma saber la lengua griega sin saberla, como la latina ignorándola.',
        zh: '**西皮翁：**贝尔甘萨，你可真是憨傻得紧，连这点玩意儿也拿来大惊小怪；这些本是学堂里的小蒙童都晓得的常识，况且世上本来就不乏一窍不通却自诩懂得希腊语的人，正如同对拉丁语一知半解却偏要充行家一样。'
      },
      {
        id: 'ecp-s4-p13',
        type: 'paragraph',
        num: '§ 13',
        original: 'BERGANZA.—Eso es lo que yo digo, y quisiera que a estos tales los pusieran en una prensa, y a fuerza de vueltas les sacaran el jugo de lo que saben, porque no anduviesen engañando el mundo con el oropel de sus gregüescos rotos y sus latines falsos, como hacen los portugueses con los negros de Guinea.',
        zh: '**贝尔甘萨：**我说的正是这个理儿！我真巴不得有人把这班家伙统统塞进榨汁机里，狠拧上几圈，把他们肚子里那点学问的汁水全榨出来瞧瞧，免得他们成天拿破灯笼裤里的假金箔与夹生拉丁文到处招摇撞骗，[活像葡萄牙人哄骗几内亚黑人]{#g-ecp-s4-05}那样。',
        glosses: [
          {
            id: 'g-ecp-s4-05',
            anchor: '活像葡萄牙人哄骗几内亚黑人',
            content: '原文「假金箔」作 **oropel**（源自拉丁语 auripellis，指锤薄擦亮以冒充真金的廉价黄铜箔片），穷酸士人常将其衬于开缝灯笼短裤（gregüescos）内充阔。自 15 世纪中叶起，葡萄牙商船垄断西非几内亚湾沿岸贸易，惯用黄铜手镯、假金箔片、铜铃与玻璃珠等廉价饰物向当地换取砂金、象牙与奴隶，西语遂以此俗喻拿虚有其表的贱物欺世盗名。'
          },
        ]
      },
      {
        id: 'ecp-s4-p14',
        type: 'paragraph',
        num: '§ 14',
        original: 'CIPIÓN.—Ahora sí, Berganza, que te puedes morder la lengua, y tarazármela yo, porque todo cuanto decimos es murmurar.',
        zh: '**西皮翁：**这下好了，贝尔甘萨，你可以去咬自己的舌头了，我也该把我的舌头嚼碎，因为咱们眼下说的每一句话全都是在非议损人。'
      },
      {
        id: 'ecp-s4-p15',
        type: 'paragraph',
        num: '§ 15',
        original: 'BERGANZA.—Sí, que no estoy obligado a hacer lo que he oído decir que hizo uno llamado Corondas, tirio, el cual puso ley que ninguno entrase en el ayuntamiento de su ciudad con armas, so pena de la vida. Descuidóse desto, y otro día entró en el cabildo ceñida la espada; advirtiéronselo y, acordándose de la pena por él puesta, al momento desenvainó su espada y se pasó con ella el pecho, y fue el primero que puso y quebrantó la ley y pagó la pena. Lo que yo dije no fue poner ley, sino prometer que me mordería la lengua cuando murmurase; pero ahora no van las cosas por el tenor y rigor de las antiguas: hoy se hace una ley y mañana se rompe, y quizá conviene que así sea. Ahora promete uno de enmendarse de sus vicios, y de allí a un momento cae en otros mayores. Una cosa es alabar la disciplina y otra el darse con ella, y, en efeto, del dicho al hecho hay gran trecho. Muérdase el diablo, que yo no quiero morderme ni hacer finezas detrás de una estera, donde de nadie soy visto que pueda alabar mi honrosa determinación.',
        zh: '**贝尔甘萨：**是啊，可我又没义务去效法我听说过的那个[名叫科隆达斯的提尔人]{#g-ecp-s4-06}——他曾立下一条法令：无论何人，凡携带兵器踏入本城议事厅者，一律处死。谁知他一时疏忽，隔天竟自己佩着长剑走进了市政厅；旁人出言提醒，他猛然记起自己亲手立下的刑罚，当即拔剑出鞘，一剑刺穿胸膛，成了头一个立法、头一个犯法又头一个伏法偿命的人。我方才说的可不是立法，只是许诺一旦非议损人便咬自己的舌头罢了；况且如今世道早已不照古人那般刻板严苛的路数走了：今日立下一条法令，明日便弃若敝履，说不定这样反倒更合时宜。这一刻有人赌咒发誓要痛改前非，转眼工夫便跌进更大的恶习里去。夸赞苦修鞭是一回事，亲手拿鞭子往自己背上抽又是另一回事；归根结底，从嘴上说到手里做，中间隔着十万八千里。让魔鬼去咬舌头吧，我可不愿自讨苦吃，更不愿躲在一张破草垫背后白白做这等壮烈姿态——在那里半个人影也瞧不见我，有谁来夸赞我这番崇高的决心呢？',
        glosses: [
          {
            id: 'g-ecp-s4-06',
            anchor: '名叫科隆达斯的提尔人',
            content: '科隆达斯（Corondas）即古希腊西西里卡塔纳城立法者卡隆达斯（Charondas，公元前 6 世纪），亦曾为南意大利大希腊殖民城邦图里伊（Thurii，西语作 Turios）制定法典。据狄奥多罗斯《历史丛书》第 12 卷第 19 节与瓦莱里乌斯·马克西姆斯《言行录》第 6 卷第 5 章外邦篇第 4 则记载，他从乡间归来时忘卸防身佩剑便步入公民大会，遭人指责违背自定禁令后，遂拔剑自刎以护法威。原文称其为「提尔人（tirio）」，系黄金时代通俗类书在转抄中将「图里伊人（turio）」讹作腓尼基名城「提尔人」所致。'
          },
        ]
      },
      {
        id: 'ecp-s4-p16',
        type: 'paragraph',
        num: '§ 16',
        original: 'CIPIÓN.—Según eso, Berganza, si tú fueras persona, fueras hipócrita, y todas las obras que hicieras fueran aparentes, fingidas y falsas, cubiertas con la capa de la virtud, sólo porque te alabaran, como todos los hipócritas hacen.',
        zh: '**西皮翁：**照这么说，贝尔甘萨，你若是投生为人，准是个伪君子；你所做的一切善举都只会是装模作样、虚情假意的表面文章，披着美德的斗篷，只图博取旁人的夸赞，正同一切伪君子的行径一模一样。'
      },
      {
        id: 'ecp-s4-p17',
        type: 'paragraph',
        num: '§ 17',
        original: 'BERGANZA.—No sé lo que entonces hiciera; esto sé que quiero hacer ahora: que es no morderme, quedándome tantas cosas por decir que no sé cómo ni cuándo podré acabarlas; y más, estando temeroso que al salir del sol nos hemos de quedar a escuras, faltándonos la habla.',
        zh: '**贝尔甘萨：**倘若真成了人我会怎样，我可说不上来；我只知道自己眼下决意怎么做——那就是绝不咬舌头，因为我还剩着太多桩事没讲，都不晓得该如何、到几时才能讲完；况且我心里正提心吊胆，生怕太阳一出来，咱们丢了说话的本领，反倒要两眼一抹黑地重归暗哑了。'
      },
      {
        id: 'ecp-s4-p18',
        type: 'paragraph',
        num: '§ 18',
        original: 'CIPIÓN.—Mejor lo hará el cielo. Sigue tu historia y no te desvíes del camino carretero con impertinentes digresiones; y así, por larga que sea, la acabarás presto.',
        zh: '**西皮翁：**上苍自会有更好的安排。你只管顺着阳关大道讲你的身世，别再拐进那些不相干的枝节闲话里去；这样一来，纵使故事再长，你也能快快讲完。'
      },
      {
        id: 'ecp-s4-p19',
        type: 'paragraph',
        num: '§ 19',
        original: 'BERGANZA.—«Digo, pues, que, habiendo visto la insolencia, ladronicio y deshonestidad de los negros, determiné, como buen criado, estorbarlo, por los mejores medios que pudiese; y pude tan bien, que salí con mi intento. Bajaba la negra, como has oído, a refocilarse con el negro, fiada en que me enmudecían los pedazos de carne, pan o queso que me arrojaba...»',
        zh: '**贝尔甘萨：**话说我见这两个黑奴如此放肆、偷盗成风而又寡廉鲜耻，便下定决心，要像个忠心仆从那样，尽我所能设法制止这桩勾当；而且我干得十分得手，果真如愿以偿。正如你方才听到的那样，那黑女奴仗着扔给我的几块肉、面包或奶酪便能叫我闭嘴，照旧下楼去同那黑奴寻欢作乐……'
      },
      {
        id: 'ecp-s4-p20',
        type: 'paragraph',
        num: '§ 20',
        original: '¡Mucho pueden las dádivas, Cipión!',
        zh: '西皮翁，贿赂的威力可真大啊！'
      },
      {
        id: 'ecp-s4-p21',
        type: 'paragraph',
        num: '§ 21',
        original: 'CIPIÓN.—Mucho. No te diviertas, pasa adelante.',
        zh: '**西皮翁：**是大得很。别又分心跑题，往下讲。'
      },
      {
        id: 'ecp-s4-p22',
        type: 'paragraph',
        num: '§ 22',
        original: 'BERGANZA.—Acuérdome que cuando estudiaba oí decir al precetor un refrán latino, que ellos llaman adagio, que decía: Habet bovem in lingua.',
        zh: '**贝尔甘萨：**我记得当初在学堂伴读时，曾听授课先生念过一句拉丁谚语——他们管那叫「格言」——说是：「[他舌上有一头公牛]{#g-ecp-s4-07}。」',
        glosses: [
          {
            id: 'g-ecp-s4-07',
            anchor: '他舌上有一头公牛',
            content: '拉丁原文为 **Habet bovem in lingua**，正文中先生所称的「格言（adagio）」即指鹿特丹的伊拉斯谟编纂的人文主义名著《格言集》（Adagia，第 1 卷第 7 篇第 18 条 **Bos in lingua**）。16 世纪下半叶，经教会审查删订的《格言集》选本在西班牙耶稣会文法学堂中广泛用作拉丁修辞与古典成语教材。'
          },
        ]
      },
      {
        id: 'ecp-s4-p23',
        type: 'paragraph',
        num: '§ 23',
        original: 'CIPIÓN.—¡Oh, que en hora mala hayáis encajado vuestro latín! ¿Tan presto se te ha olvidado lo que poco ha dijimos contra los que entremeten latines en las conversaciones de romance?',
        zh: '**西皮翁：**哎呀，您老人家这句拉丁文塞得可真不是时候！咱们方才痛斥那些在俗语交谈里硬塞拉丁文之徒的话，你怎么转眼就忘到九霄云外去了？'
      },
      {
        id: 'ecp-s4-p24',
        type: 'paragraph',
        num: '§ 24',
        original: 'BERGANZA.—Este latín viene aquí de molde; que has de saber que los atenienses usaban, entre otras, de una moneda sellada con la figura de un buey, y cuando algún juez dejaba de decir o hacer lo que era razón y justicia, por estar cohechado, decían: Este tiene el buey en la lengua.',
        zh: '**贝尔甘萨：**这句拉丁文用在此处可是严丝合缝；你要晓得，古雅典人通行的钱币当中，有一种[铸着公牛图样的硬币]{#g-ecp-s4-08}，每逢哪个法官因受了贿赂，对合乎公理正义的话闭口不说、该办的事袖手不办时，人们便说：「这人舌头上压着那头公牛呢。」',
        glosses: [
          {
            id: 'g-ecp-s4-08',
            anchor: '铸着公牛图样的硬币',
            content: '古希腊悲剧家埃斯库罗斯《阿伽门农》第 36 行已有「舌上压着一头大公牛」的成句。古罗马时代的希腊语文学家尤利乌斯·波鲁克斯《词汇集》（Onomasticon）第 9 卷第 60—61 节与普鲁塔克《忒修斯传》第 25 节考证称，古雅典早期铸造的双德拉克马银币钤有公牛图案，世人遂以「舌上卧牛」讥刺因收受重金贿赂而缄口不言之人。'
          },
        ]
      },
      {
        id: 'ecp-s4-p25',
        type: 'paragraph',
        num: '§ 25',
        original: 'CIPIÓN.—La aplicación falta.',
        zh: '**西皮翁：**还差引申套用的那一层呢。'
      },
      {
        id: 'ecp-s4-p26',
        type: 'paragraph',
        num: '§ 26',
        original: 'BERGANZA.—¿No está bien clara, si las dádivas de la negra me tuvieron muchos días mudo, que ni quería ni osaba ladrarla cuando bajaba a verse con su negro enamorado? Por lo que vuelvo a decir que pueden mucho las dádivas.',
        zh: '**贝尔甘萨：**这还不够明摆着吗？黑女奴的那些贿赂接连好些天把我堵成了哑巴，叫她下楼去会那个黑奴情郎时，我既不愿、也不敢冲她吠叫一声。所以我才重申那句话：贿赂的威力实在大得很。'
      },
      {
        id: 'ecp-s4-p27',
        type: 'paragraph',
        num: '§ 27',
        original: 'CIPIÓN.—Ya te he respondido que pueden mucho, y si no fuera por no hacer ahora una larga digresión, con mil ejemplos probara lo mucho que las dádivas pueden; mas quizá lo diré, si el cielo me concede tiempo, lugar y habla para contarte mi vida.',
        zh: '**西皮翁：**我早就答复过你它威力大得很了；若不是怕眼下扯出一大段题外话，我真能举出一千个实例来证明贿赂有多么神通广大；不过，倘若上苍恩准我有工夫、有机缘，还留着说话的本领向你讲述我的生平，或许我到时候再细说吧。'
      },
      {
        id: 'ecp-s4-p28',
        type: 'paragraph',
        num: '§ 28',
        original: 'BERGANZA.—Dios te dé lo que deseas, y escucha.',
        zh: '**贝尔甘萨：**愿上帝遂你的心愿，你且听着。'
      },
      {
        id: 'ecp-s4-p29',
        type: 'paragraph',
        num: '§ 29',
        original: '«Finalmente, mi buena intención rompió por las malas dádivas de la negra; a la cual, bajando una noche muy escura a su acostumbrado pasatiempo, arremetí sin ladrar, porque no se alborotasen los de casa, y en un instante le hice pedazos toda la camisa y le arranqué un pedazo de muslo: burla que fue bastante a tenerla de veras más de ocho días en la cama, fingiendo para con sus amos no sé qué enfermedad. Sanó, volvió otra noche, y yo volví a la pelea con mi perra, y, sin morderla, la arañé todo el cuerpo como si la hubiera cardado como manta. Nuestras batallas eran a la sorda, de las cuales salía siempre vencedor, y la negra, malparada y peor contenta. Pero sus enojos se parecían bien en mi pelo y en mi salud: alzóseme con la ración y los huesos, y los míos poco a poco iban señalando los nudos del espinazo. Con todo esto, aunque me quitaron el comer, no me pudieron quitar el ladrar. Pero la negra, por acabarme de una vez, me trujo una esponja frita con manteca; conocí la maldad; vi que era peor que comer zarazas, porque a quien la come se le hincha el estómago y no sale dél sin llevarse tras sí la vida. Y, pareciéndome ser imposible guardarme de las asechanzas de tan indignados enemigos, acordé de poner tierra en medio, quitándomeles delante de los ojos.',
        zh: '到头来，我的忠良本心终于冲破了黑女奴的恶毒贿赂；在一个伸手不见五指的黑夜里，趁她照例摸下楼去寻欢作乐，我怕惊动满宅上下，一声不吭便猛扑上去，眨眼工夫便把她的衬袍撕得粉碎，还在她大腿上扯下一块肉来——这番小小的玩笑，足足叫她动真格地在床上躺了八天有余，只得向主人家胡乱编造了一场不知什么病症。等伤一养好，她又在另一晚摸了下来，我也重又同这恶婢交上了手；这回我没下口咬她，却把她浑身上下抓挠得如同拿铁梳子梳过毛毯一般。我们这一场场恶仗全在暗中无声交锋，我回回大获全胜，那黑女奴则次次狼狈挂彩、恨得牙痒。不过，她的恼恨也很快显现在我的皮毛与身子骨上：她克扣了我的口粮和骨头，叫我自家的骨头一节节在脊梁上凸现出来。尽管如此，他们虽然夺走了我的吃食，却夺不走我的吠叫。那黑女奴为了将我一举除掉，竟给我端来一块猪油煎海绵；我一眼识破了这桩毒计，晓得这玩意儿[比吞下毒刺面团还要凶险]{#g-ecp-s4-09}——谁若是把它吞进肚里，海绵便会在胃里膨胀开来，不把性命一并带走是绝不会排出来的。我忖度自己断乎难以防备如此恼羞成怒的仇敌暗算，便决意远走高飞，彻底从他们眼前消失。',
        glosses: [
          {
            id: 'g-ecp-s4-09',
            anchor: '比吞下毒刺面团还要凶险',
            content: '原文「毒刺面团」作 **zarazas**，据科瓦鲁维亚斯《卡斯蒂利亚语宝典》（1611）释义，指将碎玻璃碴、缝衣针或毒药揉入面团制成的灭犬毒饵；而「猪油煎海绵（esponja frita con manteca）」则是自古典晚期农书流传至近代早期民间的隐蔽杀犬灭鼠偏方：天然海绵经热猪油煎炸后缩成芳香小团，动物整块吞食后，海绵吸取胃液急剧膨胀阻塞幽门与肠道，致其腹胀毙命。'
          },
        ]
      },
      {
        id: 'ecp-s4-p30',
        type: 'paragraph',
        num: '§ 30',
        original: '»Halléme un día suelto, y sin decir adiós a ninguno de casa, me puse en la calle, y a menos de cien pasos me deparó la suerte al alguacil que dije al principio de mi historia, que era grande amigo de mi amo Nicolás el Romo; el cual, apenas me hubo visto, cuando me conoció y me llamó por mi nombre; también le conocí yo y, al llamarme, me llegué a él con mis acostumbradas ceremonias y caricias. Asióme del cuello y dijo a dos corchetes suyos: Éste es famoso perro de ayuda, que fue de un grande amigo mío; llevémosle a casa. Holgáronse los corchetes, y dijeron que si era de ayuda a todos sería de provecho. Quisieron asirme para llevarme, y mi amo dijo que no era menester asirme, que yo me iría, porque le conocía.',
        zh: '有一天我恰巧没被拴住，便没向宅里任何人道别，径直溜上了大街；走了不到百步，命运便叫我撞见了故事开头提过的那个捕快——他正是我旧主人塌鼻尼古拉斯的莫逆之交。他才刚瞧见我，当即便认了出来，直呼我的名字；我也认出了他，听他唤我，便凑上前去施展出惯常那套摇头摆尾的礼数与亲热劲儿。他一把揪住我的脖颈，对身边两名帮捕说道：「这是一条出了名的帮手猛犬，从前归我一位至交好友所有；咱们把它领回家去吧。」两名帮捕听罢大喜，说道既是条好帮手，那对大伙儿就都有用处。他们伸手想拽住我带走，新主人却说用不着抓我，因为我认得他，自己就会跟着走。'
      },
      {
        id: 'ecp-s4-p31',
        type: 'paragraph',
        num: '§ 31',
        original: '»Háseme olvidado decirte que las carlancas con puntas de acero que saqué cuando me desgarré y ausenté del ganado me las quitó un gitano en una venta, y ya en Sevilla andaba sin ellas; pero el alguacil me puso un collar tachonado todo de latón morisco.»',
        zh: '我倒忘了跟你说，当初我挣脱羁绊、逃离羊群时脖子上戴着的那副嵌着钢刺的护颈铁项圈，半路上在一家客店里被一个吉普赛人摘去了，所以到了塞维利亚之后我脖子上一直没戴它；这回那捕快却给我套上了一只[通体镶满摩尔式黄铜饰钉的项圈]{#g-ecp-s4-10}。',
        glosses: [
          {
            id: 'g-ecp-s4-10',
            anchor: '通体镶满摩尔式黄铜饰钉的项圈',
            content: '西语原文为 **collar tachonado todo de latón morisco**。与荒野牧羊犬防狼用的钢刺铁领圈（carlancas）不同，在宽厚牛皮上密钉摩尔工匠雕花黄铜泡钉的项圈，是当时城市治安武人、捕快与斗牛士为随行护卫猛犬（perro de ayuda，用于夜间巡街扑咬拒捕嫌犯）佩饰的身份与威势标志。'
          },
        ]
      },
      {
        id: 'ecp-s4-p32',
        type: 'paragraph',
        num: '§ 32',
        original: 'Considera, Cipión, ahora esta rueda variable de la fortuna mía: ayer me vi estudiante y hoy me vees corchete.',
        zh: '西皮翁，你且看看我这变幻无常的命运之轮吧：昨日我还算个学堂书生，今日你却见我沦为了衙门帮捕。'
      },
    ]
  },
];
