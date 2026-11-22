import type { BookSection } from '../../../types/book';

export const part3Sections: BookSection[] = [
  {
    id: 'ecp-sec-5',
    roman: 'V',
    titleOriginal: 'El alguacil, el escribano y la casa de Monipodio',
    titleZh: '捕快、公证人与莫尼波迪奥贼窝',
    blocks: [
      {
        id: 'ecp-s5-p01',
        type: 'paragraph',
        num: '§ 01',
        original: 'CIPIÓN.—Así va el mundo, y no hay para qué te pongas ahora a esagerar los vaivenes de fortuna, como si hubiera mucha diferencia de ser mozo de un jifero a serlo de un corchete. No puedo sufrir ni llevar en paciencia oír las quejas que dan de la fortuna algunos hombres que la mayor que tuvieron fue tener premisas y esperanzas de llegar a ser escuderos. ¡Con qué maldiciones la maldicen! ¡Con cuántos improperios la deshonran! Y no por más de que porque piense el que los oye que de alta, próspera y buena ventura han venido a la desdichada y baja en que los miran.',
        zh: '**西皮翁：**世道本来就是如此，你如今犯不着在这里夸大命运的起落沉浮，好像从给屠夫当小厮变成[做帮捕的跟班]{#g-ecp-s5-01}，两者之间有多大天壤之别似的。有些人平生交过的最大好运，也不过是有几分苗头和指望能混上个侍从当当，我真受不了、也耐不住性子听他们埋怨命运。他们用怎样的毒誓咒骂命运！又用多少恶言秽语糟蹋命运！这不为别的，无非是要让听见的人以为，他们是从何等显赫、顺遂、美满的境遇，跌落到如今旁人眼中所见的这般凄惨卑微田地的。',
        glosses: [
          {
            id: 'g-ecp-s5-01',
            anchor: '做帮捕的跟班',
            content: '西语原文为 **ser mozo de un corchete**。**corchete** 本义为扣合衣襟的金属「衣钩」，黄金时代俚语转指基层治安捕快（alguacil）手下专司扑咬、死死钩住嫌犯衣领不放的皂隶帮捕。贝尔甘萨的新主人实为正式捕快，西皮翁故意将其贬称为更低一等的帮捕，以刺破贝尔甘萨自诩境遇升迁的虚荣；下文「侍从」（escudero）原指中世纪佩盾随行骑士的扈从，至十七世纪已沦为替贵族女眷引路撑场、靠微薄津贴充门面的破落小乡绅代名词。'
          }
        ]
      },
      {
        id: 'ecp-s5-p02',
        type: 'paragraph',
        num: '§ 02',
        original: 'BERGANZA.—Tienes razón; «y has de saber que este alguacil tenía amistad con un escribano, con quien se acompañaba; estaban los dos amancebados con dos mujercillas, no de poco más a menos, sino de menos en todo; verdad es que tenían algo de buenas caras, pero mucho de desenfado y de taimería putesca. Éstas les servían de red y de anzuelo para pescar en seco, en esta forma: vestíanse de suerte que por la pinta descubrían la figura, y a tiro de arcabuz mostraban ser damas de la vida libre; andaban siempre a caza de estranjeros, y, cuando llegaba la vendeja a Cádiz y a Sevilla, llegaba la huella de su ganancia, no quedando bretón con quien no embistiesen; y, en cayendo el grasiento con alguna destas limpias, avisaban al alguacil y al escribano adónde y a qué posada iban, y, en estando juntos, les daban asalto y los prendían por amancebados; pero nunca los llevaban a la cárcel, a causa que los estranjeros siempre redimían la vejación con dineros.',
        zh: '**贝尔甘萨：**你说得有理；你须知道，这个捕快[同一个公证人交好]{#g-ecp-s5-02}，两人常年形影不离。他们俩各自包养着一个下等妇人，那可不是什么不上不下的货色，而是彻头彻尾的下作胚子；平心而论，她们倒也略有几分姿色，但更多的是不知廉耻的泼辣劲儿和娼门老手的鬼蜮伎俩。这两个妇人充当他们的渔网和钓钩，专门按如下路数在旱地上垂钓：她们穿戴得光看牌边记号便知是什么牌面，隔着一火绳枪射程之外，就让人一眼看出是风月场里的浪荡女子；她们成天四处猎取外乡客，每逢加的斯与塞维利亚开秋市贸易季，她们的发财门路也就跟着来了，[没有一个布列塔尼客商]{#g-ecp-s5-03}能躲过她们的围猎；一旦哪个油腻汉落进这帮「干净娘子」手里，她们便把幽会的地点和客栈通报给捕快与公证人，等两人刚一凑到一处，捕快和公证人就破门突袭，以非法姘居的罪名当场拿人；不过他们从不把人真押进大牢，因为外乡客总是破财消灾，拿钱赎买这顿折腾。',
        glosses: [
          {
            id: 'g-ecp-s5-02',
            anchor: '同一个公证人交好',
            content: '黄金时代卡斯蒂利亚基层刑事司法由治安**捕快**（alguacil，持法杖执行拘捕与查封）与司法**公证人**（escribano，垄断现场勘验笔录、供词誊录与涉案财物清点，其笔录具有法定证据效力）结对运作。哈布斯堡王朝为填补国库亏空，将大量基层公证人与捕快职位公开售卖（oficios vendidos），购官者遂视职权为收回本息的营生；借暗娼设局抓捕通奸或私娼「现行犯」（coger en fragante）以敲诈私了，是当时塞维利亚司法胥吏最臭名昭著的敛财惯伎。'
          },
          {
            id: 'g-ecp-s5-03',
            anchor: '没有一个布列塔尼客商',
            content: '每年夏末秋初葡萄干、葡萄酒与橄榄油集中上市时，北欧与法国商船云集加的斯与塞维利亚内河港，形成大宗外贸市集（vendeja）。来自法国布列塔尼半岛的船东与客商（bretón）大举输入「布列塔尼细麻布」并携现钞采购安达卢西亚特产，因不通卡斯蒂利亚语言与律法，最易沦为仙人跳肥羊。紧接下句的「油腻汉」（grasiento）系当时西班牙俗语对嗜食黄油与咸肉的北方外商的蔑称，与反讽暗娼的「干净娘子」（limpias，兼含「把客商钱袋刮得干干净净」之义）构成双关。'
          }
        ]
      },
      {
        id: 'ecp-s5-p03',
        type: 'paragraph',
        num: '§ 03',
        original: '«Sucedió, pues, que la Colindres, que así se llamaba la amiga del alguacil, pescó un bretón unto y bisunto; concertó con él cena y noche en su posada; dio el cañuto a su amigo; y, apenas se habían desnudado, cuando el alguacil, el escribano, dos corchetes y yo dimos con ellos. Alborotáronse los amantes; esageró el alguacil el delito; mandólos vestir a toda priesa para llevarlos a la cárcel; afligióse el bretón; terció, movido de caridad, el escribano, y a puros ruegos redujo la pena a solos cien reales. Pidió el bretón unos follados de camuza que había puesto en una silla a los pies de la cama, donde tenía dineros para pagar su libertad, y no parecieron los follados, ni podían parecer; porque, así como yo entré en el aposento, llegó a mis narices un olor de tocino que me consoló todo; descubríle con el olfato, y halléle en una faldriquera de los follados. Digo que hallé en ella un pedazo de jamón famoso, y, por gozarle y poderle sacar sin rumor, saqué los follados a la calle, y allí me entregué en el jamón a toda mi voluntad, y cuando volví al aposento hallé que el bretón daba voces diciendo en lenguaje adúltero y bastardo, aunque se entendía, que le volviesen sus calzas, que en ellas tenía cincuenta escuti d\'oro in oro. Imaginó el escribano o que la Colindres o los corchetes se los habían robado; el alguacil pensó lo mismo; llamólos aparte, no confesó ninguno, y diéronse al diablo todos. Viendo yo lo que pasaba, volví a la calle donde había dejado los follados, para volverlos, pues a mí no me aprovechaba nada el dinero; no los hallé, porque ya algún venturoso que pasó se los había llevado. Como el alguacil vio que el bretón no tenía dinero para el cohecho, se desesperaba, y pensó sacar de la huéspeda de casa lo que el bretón no tenía; llamóla, y vino medio desnuda, y como oyó las voces y quejas del bretón, y a la Colindres desnuda y llorando, al alguacil en cólera y al escribano enojado y a los corchetes despabilando lo que hallaban en el aposento, no le plugo mucho. Mandó el alguacil que se cubriese y se viniese con él a la cárcel, porque consentía en su casa hombres y mujeres de mal vivir. ¡Aquí fue ello! Aquí sí que fue cuando se aumentaron las voces y creció la confusión; porque dijo la huéspeda: Señor alguacil y señor escribano, no conmigo tretas, que entrevo toda costura; no conmigo dijes ni poleos: callen la boca y váyanse con Dios; si no, por mi santiguada que arroje el bodegón por la ventana y que saque a plaza toda la chirinola desta historia; que bien conozco a la señora Colindres y sé que ha muchos meses que es su cobertor el señor alguacil; y no hagan que me aclare más, sino vuélvase el dinero a este señor, y quedemos todos por buenos; porque yo soy mujer honrada y tengo un marido con su carta de ejecutoria, y con a perpenan rei de memoria, con sus colgaderos de plomo, Dios sea loado, y hago este oficio muy limpiamente y sin daño de barras. El arancel tengo clavado donde todo el mundo le vea; y no conmigo cuentos, que, por Dios, que sé despolvorearme. ¡Bonita soy yo para que por mi orden entren mujeres con los huéspedes! Ellos tienen las llaves de sus aposentos, y yo no soy quince, que tengo de ver tras siete paredes.',
        zh: '有一回，捕快的相好——她名叫科林德雷斯——钓上了一个肥腻透顶的布列塔尼客商，同他约好晚上去他下榻的客栈共进晚餐并过夜，随即给自己的相好通了风报了信。两人刚脱下衣裳，捕快、公证人、两个帮捕连同我就撞了进去。这对野鸳鸯顿时乱作一团；捕快把罪名说得天大，喝令他们火速穿好衣服押赴大牢；布列塔尼客商吓得魂不附体；公证人便大发慈悲出面调停，在苦苦哀求之下，总算把罚金压到了区区一百雷亚尔。布列塔尼客商要取他原先搭在床尾椅子上的一条麂皮灯笼宽裤，赎身的钱就揣在那条裤子里，可是宽裤却踪影全无，而且也断无找到的道理：因为我一进房门，鼻子里就钻进一股叫我通体舒泰的咸猪肉香；我顺着气味搜寻，在灯笼宽裤的口袋里找到了香味的来处。我是说，我在口袋里翻出了一大块上等火腿；为了痛快享用、又能不声不响地把肉掏出来，我便叼着那条宽裤溜到大街上，在那里随心所欲地把火腿饱餐了一顿。等我回到房里，只见布列塔尼客商正操着南腔北调、却还听得懂的杂种洋泾浜大喊大叫，要众人归还他的裤子，说里面装有[五十枚足金埃斯库多]{#g-ecp-s5-04}。公证人猜疑不是科林德雷斯就是那两个帮捕把钱偷走了，捕快也作如是想，便把他们叫到一旁盘问，谁也不肯认账，一伙人急得直跳脚赌咒。我见此情形，又跑回先前丢下宽裤的街上，想把它叼回来，毕竟金币对我毫无用处；可裤子早已不见了踪影，定是哪个走运的路人顺手捡走了。捕快见布列塔尼客商拿不出贿金，急得抓耳挠腮，便打定主意把客商掏不出的油水从客栈老板娘身上榨出来；他把老板娘唤来，那妇人半披着衣服赶到，一听布列塔尼客商连声叫屈，又见科林德雷斯赤身裸体地啼哭、捕快暴跳如雷、公证人怒容满面，两个帮捕还在顺手牵羊搜刮房里的财物，心里自然大为不快。捕快喝令她穿好衣裳跟自己去坐牢，罪名是她纵容不三不四的男女在自家客栈里鬼混。这一下可捅了马蜂窝！喧哗声顿时变本加厉，场面乱成了一锅粥；只听老板娘破口说道：「捕快老爷，公证人老爷，少跟我耍花招，你们那点针脚门道我一眼就看穿了；少在我跟前摆谱弄玄虚！乖乖闭上嘴，顺顺当当走你们的路吧；要不然，凭我画十字起誓，我定要把这摊子烂账掀出窗外，把这桩勾当里的猫腻全抖落到大庭广众之下！我可太认得科林德雷斯娘子了，也晓得捕快老爷做她的遮羞被面已经有好些个月了；别逼我把话说得更透，赶紧把钱还给这位客官，大家还算体面相安。须知我是个清白本分的妇道人家，我丈夫可是有[缀着铅印吊坠的贵族血统确权诏书]{#g-ecp-s5-05}的，上面还写着『阿佩尔佩南、永世不忘』的字样呢，赞美上帝！我干这一行向来干干净净，从不坑害旁人。官府定的价目牌就钉在人人看得见的地方；少拿鬼话唬我，凭上帝起誓，我可晓得怎么抖落身上的灰尘！我岂是那种会由着自己发话放女人进房陪客的人！房客们自己揣着房门钥匙，我又不是什么『十五眼』，哪能隔着七重墙壁看穿屋里的事！」',
        glosses: [
          {
            id: 'g-ecp-s5-04',
            anchor: '五十枚足金埃斯库多',
            content: '西语原文作意式商贸混杂语 **cincuenta escuti d\'oro in oro**。当时往来安达卢西亚港口的外商常操夹杂意大利银行术语的地中海通用语；术语 **d\'oro in oro**（金付金）特指以成色十足的黄金铸币实物结算，而非折算银币或铜辅币。十七世纪初一枚金埃斯库多约合十一至十二枚银雷亚尔，五十枚足金埃斯库多逾五百五十雷亚尔，是公证人索贿数额（一百雷亚尔）的五倍以上。上文「麂皮灯笼宽裤」（follados de camuza）系当时流行的多褶鼓胀短裤，内缝深袋以藏钱物。'
          },
          {
            id: 'g-ecp-s5-05',
            anchor: '缀着铅印吊坠的贵族血统确权诏书',
            content: '西语原文为 **carta de ejecutoria... con a perpenan rei de memoria, con sus colgaderos de plomo**。**贵族血统确权诏书**（carta ejecutoria de hidalguía）系巴利亚多利德或格拉纳达王室高等法院审结贵族免税资格诉讼后颁发的羊皮纸精装判词，下缀丝绦悬挂的王室铅质大印。粗通文墨的老板娘急于炫耀门第，先将诏书习见的拉丁公文套语 **ad perpetuam rei memoriam**（「永志存证」）讹念成「阿佩尔佩南、永世不忘」（a perpenan rei de memoria），篇末又把传说目光锐利能洞穿墙壁的「猞猁」（lince，叠加西班牙民间迷信中能看透七重墙土的圣周五降生异人 zahorí）白读成近音词「十五」（quince）。'
          }
        ]
      },
      {
        id: 'ecp-s5-p04',
        type: 'paragraph',
        num: '§ 04',
        original: '»Pasmados quedaron mis amos de haber oído la arenga de la huéspeda y de ver cómo les leía la historia de sus vidas; pero, como vieron que no tenían de quién sacar dinero si della no, porfiaban en llevarla a la cárcel. Quejábase ella al cielo de la sinrazón y justicia que la hacían, estando su marido ausente y siendo tan principal hidalgo. El bretón bramaba por sus cincuenta escuti. Los corchetes porfiaban que ellos no habían visto los follados, ni Dios permitiese lo tal. El escribano, por lo callado, insistía al alguacil que mirase los vestidos de la Colindres, que le daba sospecha que ella debía de tener los cincuenta escuti, por tener de costumbre visitar los escondrijos y faldriqueras de aquellos que con ella se envolvían. Ella decía que el bretón estaba borracho y que debía de mentir en lo del dinero. En efeto, todo era confusión, gritos y juramentos, sin llevar modo de apaciguarse, ni se apaciguaran si al instante no entrara en el aposento el teniente de asistente, que, viniendo a visitar aquella posada, las voces le llevaron adonde era la grita. Preguntó la causa de aquellas voces; la huéspeda se la dio muy por menudo: dijo quién era la ninfa Colindres, que ya estaba vestida; publicó la pública amistad suya y del alguacil; echó en la calle sus tretas y modo de robar; disculpóse a sí misma de que con su consentimiento jamás había entrado en su casa mujer de mala sospecha; canonizóse por santa y a su marido por un bendito, y dio voces a una moza que fuese corriendo y trujese de un cofre la carta ejecutoria de su marido, para que la viese el señor tiniente, diciéndole que por ella echaría de ver que mujer de tan honrado marido no podía hacer cosa mala; y que si tenía aquel oficio de casa de camas, era a no poder más: que Dios sabía lo que le pesaba, y si quisiera ella tener alguna renta y pan cuotidiano para pasar la vida, que tener aquel ejercicio. El teniente, enfadado de su mucho hablar y presumir de ejecutoria, le dijo: Hermana camera, yo quiero creer que vuestro marido tiene carta de hidalguía con que vos me confeséis que es hidalgo mesonero. Y con mucha honra —respondió la huéspeda—. Y ¿qué linaje hay en el mundo, por bueno que sea, que no tenga algún dime y direte? Lo que yo os digo, hermana, es que os cubráis, que habéis de venir a la cárcel. La cual nueva dio con ella en el suelo; arañóse el rostro; alzó el grito; pero, con todo eso, el teniente, demasiadamente severo, los llevó a todos a la cárcel; conviene a saber: al bretón, a la Colindres y a la huéspeda. Después supe que el bretón perdió sus cincuenta escuti, y más diez, en que le condenaron en las costas; la huéspeda pagó otro tanto, y la Colindres salió libre por la puerta afuera. Y el mismo día que la soltaron pescó a un marinero, que pagó por el bretón, con el mismo embuste del soplo; porque veas, Cipión, cuántos y cuán grandes inconvenientes nacieron de mi golosina.»',
        zh: '我的主人们听罢老板娘这番长篇大论，见她把他们的老底像念书一样抖落得一清二楚，全都目瞪口呆；可他们眼看除了她之外再无别人可敲竹杠，便死活硬要把她押进大牢。老板娘呼天抢地，哭诉丈夫明明是个体面的大贵族，趁他不在家竟遭这等无妄之灾与官司欺压。布列塔尼客商扯着嗓子咆哮，讨要他的五十枚埃斯库多金币。两个帮捕一口咬定压根没见过那条灯笼宽裤，还赌咒求上帝莫教他们背这黑锅。公证人暗地里撺掇捕快去搜科林德雷斯的衣裳，怀疑那五十枚金币八成藏在她身上，因为她素来有摸索相好衣袋与暗兜的毛病。科林德雷斯则一口咬定布列塔尼客商喝醉了酒，所谓丢钱定是撒谎。总而言之，满屋子乱成一团，尽是叫骂声与赌咒声，眼看无法收场；若不是钦差副市长恰好在这当口走进房来，怕是永远也消停不了——他原本是来这家客栈例行巡查的，听见吵闹便寻声找了过来。他盘问喧哗的缘由，老板娘便一五一十向他道来：指认了此时已穿好衣裳的科林德雷斯是何等风尘神女，当众揭穿了她与捕快众人皆知的姘居关系，把他们设局敲诈的伎俩兜底抖出；她又极力为自己开脱，赌咒说自家客栈绝未在她知情同意下放进过一个不三不四的女人，把自己封作圣女，把丈夫捧成善人，还扯着嗓子喊使女赶紧跑去箱子里取出丈夫的贵族血统确权诏书呈给副市长老爷过目，说老爷一看便知，嫁给这般体面丈夫的妇人断不会干出丑事；又说她之所以操持这门出租铺位的客栈营生，实属迫不得已，上帝晓得她心里有多委屈，也晓得她多么巴望能有一份田产进项和每日糊口的面包来度日，而不必干这门差事。副市长听腻了她喋喋不休的饶舌和拿贵族诏书摆谱，便对她说：「开铺位的嫂子，只要你肯向我认下你丈夫是个开客栈的贵族老爷，我就信他有贵族诏书。」「开客栈也照样体面风光！」老板娘答道，「这世上哪怕再高贵的门第，哪一家没有点闲言碎语呢？」「我只告诉你一句话，嫂子，」副市长道，「赶紧披上衣服，跟我们去大牢走一趟。」这话犹如晴天霹雳，老板娘当场瘫倒在地，抓破脸皮，放声嚎啕；尽管如此，过于严厉的副市长还是把他们一干人统统押进了大牢，也就是说，把布列塔尼客商、科林德雷斯和客栈老板娘一并收监。事后我听说，布列塔尼客商不仅白白折了那五十枚埃斯库多金币，还另外被判罚了十枚金币的诉讼堂费；老板娘也照数罚了同样一笔钱，唯独科林德雷斯大摇大摆地从牢门无罪释放。而且就在放出来的当天，她又用同一套通风捉奸的骗局钓上了一个水手，让那水手替布列塔尼客商补上了亏空。西皮翁，你瞧瞧，就因为我一时的嘴馋，竟惹出了多少桩天大的乱子。'
      },
      {
        id: 'ecp-s5-p05',
        type: 'paragraph',
        num: '§ 05',
        original: 'CIPIÓN.—Mejor dijeras de la bellaquería de tu amo.',
        zh: '**西皮翁：**你还不如说是因你主人的无赖勾当而起呢。'
      },
      {
        id: 'ecp-s5-p06',
        type: 'paragraph',
        num: '§ 06',
        original: 'BERGANZA.—Pues escucha, que aún más adelante tiraban la barra, puesto que me pesa de decir mal de alguaciles y de escribanos.',
        zh: '**贝尔甘萨：**那你接着往下听吧，他们干出的事还要变本加厉得多呢——虽说讲捕快和公证人的坏话，我心里也觉得怪过意不去的。'
      },
      {
        id: 'ecp-s5-p07',
        type: 'paragraph',
        num: '§ 07',
        original: 'CIPIÓN.—Sí, que decir mal de uno no es decirlo de todos; sí, que muchos y muy muchos escribanos hay buenos, fieles y legales, y amigos de hacer placer sin daño de tercero; sí, que no todos entretienen los pleitos, ni avisan a las partes, ni todos llevan más de sus derechos, ni todos van buscando e inquiriendo las vidas ajenas para ponerlas en tela de juicio, ni todos se aúnan con el juez para "háceme la barba y hacerte he el copete", ni todos los alguaciles se conciertan con los vagamundos y fulleros, ni tienen todos las amigas de tu amo para sus embustes. Muchos y muy muchos hay hidalgos por naturaleza y de hidalgas condiciones; muchos no son arrojados, insolentes, ni mal criados, ni rateros, como los que andan por los mesones midiendo las espadas a los estranjeros, y, hallándolas un pelo más de la marca, destruyen a sus dueños. Sí, que no todos como prenden sueltan, y son jueces y abogados cuando quieren.',
        zh: '**西皮翁：**是啊，说一个人的坏话，并不等于说所有人的坏话；诚然，世上有许许多多公证人品行端正、忠实守法，乐于在不损及第三人的前提下与人方便；并非所有公证人都故意拖延官司，或是私下给诉讼双方通风报信，并非所有人都额外勒索规费之外的钱财，并非所有人都到处刺探旁人的隐私以便拖上公堂兴讼，也并非所有人都同法官勾结一气，玩弄「你替我修胡须，我便替你梳额发」的把戏；同样，并非所有捕快都同游民和赌棍狼狈为奸，也并非人人都在外头养着你主人那种相好来设局行骗。他们当中有许许多多人天生便是真正的贵族，怀有高尚的贵族气度；许多人并不蛮横、傲慢、缺乏教养，也不像那些[挨家客栈去量外乡人的佩剑]{#g-ecp-s5-06}、只要发现剑身比法定尺度长出一根毫毛便倾覆剑主家产的小人那样鸡鸣狗盗。是啊，并非所有捕快都是随手抓人又随手放人，全凭一己心意自充法官兼讼师的。',
        glosses: [
          {
            id: 'g-ecp-s5-06',
            anchor: '挨家客栈去量外乡人的佩剑',
            content: '腓力二世自 1564 年起多次颁布佩剑规制敕令（pragmáticas de las espadas），严格规定卡斯蒂利亚境内平民佩剑剑身长度不得逾越官定标准尺度（la marca，定为五分之四卡斯蒂利亚码，约合一点零四米），违者没收兵器并课以重罚或监禁。各地携带家乡佩剑初抵塞维利亚的外籍旅客常不知此项尺寸禁令，腐败捕快遂专门携带量尺突袭客栈逐一量剑，借分毫之差敲诈勒索。上文谚语「你替我修胡须，我便替你梳额发」（háceme la barba y hacerte he el copete）以理发铺互修须发喻司法书吏与法官互相包庇分肥。'
          }
        ]
      },
      {
        id: 'ecp-s5-p08',
        type: 'paragraph',
        num: '§ 08',
        original: 'BERGANZA.—«Más alto picaba mi amo; otro camino era el suyo; presumía de valiente y de hacer prisiones famosas; sustentaba la valentía sin peligro de su persona, pero a costa de su bolsa. Un día acometió en la Puerta de Jerez él solo a seis famosos rufianes, sin que yo le pudiese ayudar en nada, porque llevaba con un freno de cordel impedida la boca (que así me traía de día, y de noche me le quitaba). Quedé maravillado de ver su atrevimiento, su brío y su denuedo; así se entraba y salía por las seis espadas de los rufos como si fueran varas de mimbre; era cosa maravillosa ver la ligereza con que acometía, las estocadas que tiraba, los reparos, la cuenta, el ojo alerta porque no le tomasen las espaldas. Finalmente, él quedó en mi opinión y en la de todos cuantos la pendencia miraron y supieron por un nuevo Rodamonte, habiendo llevado a sus enemigos desde la Puerta de Jerez hasta los mármoles del Colegio de Mase Rodrigo, que hay más de cien pasos. Dejólos encerrados, y volvió a coger los trofeos de la batalla, que fueron tres vainas, y luego se las fue a mostrar al asistente, que, si mal no me acuerdo, lo era entonces el licenciado Sarmiento de Valladares, famoso por la destruición de La Sauceda. Miraban a mi amo por las calles do pasaba, señalándole con el dedo, como si dijeran: Aquél es el valiente que se atrevió a reñir solo con la flor de los bravos de la Andalucía. En dar vueltas a la ciudad, para dejarse ver, se pasó lo que quedaba del día, y la noche nos halló en Triana, en una calle junto al Molino de la Pólvora; y, habiendo mi amo avizorado (como en la jácara se dice) si alguien le veía, se entró en una casa, y yo tras él, y hallamos en un patio a todos los jayanes de la pendencia, sin capas ni espadas, y todos desabrochados; y uno, que debía de ser el huésped, tenía un gran jarro de vino en la una mano y en la otra una copa grande de taberna, la cual, colmándola de vino generoso y espumante, brindaba a toda la compañía. Apenas hubieron visto a mi amo, cuando todos se fueron a él con los brazos abiertos, y todos le brindaron, y él hizo la razón a todos, y aun la hiciera a otros tantos si le fuera algo en ello, por ser de condición afable y amigo de no enfadar a nadie por pocas cosas.»',
        zh: '**贝尔甘萨：**我那主人的心气还要更高，走的是另一条路数：他自命勇武过人，专爱办轰动全城的缉捕大案；他靠着破费自家钱袋、却绝不让自身冒半点风险的法子，稳稳撑起了一副英雄好汉的名头。有一天，他在赫雷斯门单枪匹马扑向六个出了名的黑道泼皮，而我因为嘴上套着麻绳笼嘴（他白天就这样套着我，到了晚上才替我解下），压根帮不上他半点忙。我瞧着他的胆魄、威风和悍勇，简直惊呆了：他在那六个泼皮的六柄利剑之间闪转腾挪、杀进杀出，就跟拨弄柳条儿一般轻松；看他出击时那股矫健劲儿，看他刺出的剑招、格挡的身法、精准的步数，还有时刻提防背后受敌的机警眼神，真叫人叹为观止。总而言之，他把这伙强敌[从赫雷斯门一直逼退到罗德里戈大师学院的大理石柱廊]{#g-ecp-s5-07}，足足追杀了一百多步远，在我眼里以及所有目睹和听说这场恶斗的人眼里，成了[活脱脱一位新罗达蒙特]{#g-ecp-s5-08}。他把那伙人堵在柱廊里面，转身捡起这场战斗的战利品——那是三具剑鞘——随即拿去呈给钦差市长过目；如果我没记错的话，当时的钦差市长是[因荡平柳林谷匪巢而威名远扬的萨缅托·德·巴利亚达雷斯硕士]{#g-ecp-s5-09}。我主人走过街巷时，沿途行人纷纷注视着他，伸指点点，仿佛在说：「瞧，那就是敢独自一人同安达卢西亚最拔尖的绿林好汉动刀子的勇士！」这天剩下的工夫，全花在满城兜圈子让人瞻仰上了；直到夜幕降临，我们来到了特里亚纳区火药磨坊旁的一条小街。我主人（照黑道俚曲里的说法）四下望风张望了一番，确认无人瞧见，便闪进一户院宅，我也紧随其后；只见天井里坐着白天械斗的那帮彪形大汉，全都卸了斗篷与佩剑，敞胸露怀；其中有个八成是东道主的人，一手提着一只大酒罐，另一手端着一只酒馆用的大酒海，斟满醇烈起泡的美酒，正向满座弟兄轮流敬酒。一伙人刚瞧见我主人，当即张开双臂迎上前来，纷纷向他敬酒，他也一一举杯回敬了众人；只要于他有利，就算再来上同样多的一伙人，他也照敬不误，因为他脾气随和，最不愿为区区小事扫任何人的兴。',
        glosses: [
          {
            id: 'g-ecp-s5-07',
            anchor: '从赫雷斯门一直逼退到罗德里戈大师学院的大理石柱廊',
            content: '**赫雷斯门**（Puerta de Jerez）位于塞维利亚古城墙南端；由此向北百余步即是皇家礼拜堂执事罗德里戈·费尔南德斯·德·圣埃利亚于 1505 年获教宗诏准创办的**耶稣圣母学院**（Colegio de Santa María de Jesús，俗称罗德里戈大师学院，即塞维利亚大学前身）。学院门前竖立一排铁链相连的大理石柱（los mármoles），标示教会管辖地产的豁免界限（inmunidad eclesiástica）：嫌犯一旦逃入柱链以内即享「圣域庇护」（retraerse a sagrado），世俗官差不得越界锁拿，故捕快将泼皮赶入柱廊后即可名正言顺收剑凯旋，只拾取对方留在界外的剑鞘交差。'
          },
          {
            id: 'g-ecp-s5-08',
            anchor: '活脱脱一位新罗达蒙特',
            content: '**罗达蒙特**（Rodamonte / Rodomonte）系意大利文艺复兴史诗——博亚尔多《热恋的罗兰》与卢多维科·阿里奥斯托《疯狂的罗兰》（Orlando furioso，第 14 至 18 歌）——中的阿尔及尔萨拉森国王，在巴黎围城战中单枪匹马跃入城池独战查理曼众圣骑士，黄金时代西语遂以「罗达蒙特」代指以一敌众的骁勇猛将。'
          },
          {
            id: 'g-ecp-s5-09',
            anchor: '因荡平柳林谷匪巢而威名远扬的萨缅托·德·巴利亚达雷斯硕士',
            content: '塞维利亚是卡斯蒂利亚王室领地唯一将最高市政与司法长官称作**钦差市长**（Asistente，其余城市均称 Corregidor）的重镇。**弗朗西斯科·萨缅托·德·巴利亚达雷斯**（Francisco Sarmiento de Valladares）系真实历史人物，1589 年出任塞维利亚钦差市长前任安达卢西亚缉捕专员，曾率军彻底剿灭盘踞隆达与马拉加交界深山「柳林谷」（La Sauceda）数十年、形同法外之地的亡命盗匪聚落。这一真实纪年也将贝尔甘萨在塞维利亚的经历锚定于 1589 至 1590 年间，恰与塞万提斯常驻塞维利亚征集无敌舰队军需的岁月重合。'
          }
        ]
      },
      {
        id: 'ecp-s5-p09',
        type: 'paragraph',
        num: '§ 09',
        original: 'Quererte yo contar ahora lo que allí se trató, la cena que cenaron, las peleas que se contaron, los hurtos que se refirieron, las damas que de su trato se calificaron y las que se reprobaron, las alabanzas que los unos a los otros se dieron, los bravos ausentes que se nombraron, la destreza que allí se puso en su punto, levantándose en mitad de la cena a poner en prática las tretas que se les ofrecían, esgrimiendo con las manos, los vocablos tan exquisitos de que usaban; y, finalmente, el talle de la persona del huésped, a quien todos respetaban como a señor y padre, sería meterme en un laberinto donde no me fuese posible salir cuando quisiese.',
        zh: '倘若我现在想把那里商议的勾当、他们吃喝的酒席、吹嘘的打斗、摆谈的盗案、品评本行当里哪些娘子够格而哪些娘子不够格的议论、彼此间互相吹捧的奉承话、点名道姓提到的外地好汉、席间讲求到极致的剑术门道——吃到半截众人纷纷起身，徒手比划切磋各自想出的绝招——以及他们嘴里吐出的那些奇妙切口，最后还有那位被众人奉若老爷与教父的东道主的气派模样，统统讲给你听，那无异于一头扎进一座迷宫，等我想脱身时也休想走得出来了。'
      },
      {
        id: 'ecp-s5-p10',
        type: 'paragraph',
        num: '§ 10',
        original: '»Finalmente, vine a entender con toda certeza que el dueño de la casa, a quien llamaban Monipodio, era encubridor de ladrones y pala de rufianes, y que la gran pendencia de mi amo había sido primero concertada con ellos, con las circunstancias del retirarse y de dejar las vainas, las cuales pagó mi amo allí, luego, de contado, con todo cuanto Monipodio dijo que había costado la cena, que se concluyó casi al amanecer, con mucho gusto de todos. Y fue su postre dar soplo a mi amo de un rufián forastero que, nuevo y flamante, había llegado a la ciudad; debía de ser más valiente que ellos, y de envidia le soplaron. Prendióle mi amo la siguiente noche, desnudo en la cama: que si vestido estuviera, yo vi en su talle que no se dejara prender tan a mansalva. Con esta prisión que sobrevino sobre la pendencia, creció la fama de mi cobarde, que lo era mi amo más que una liebre, y a fuerza de meriendas y tragos sustentaba la fama de ser valiente, y todo cuanto con su oficio y con sus inteligencias granjeaba se le iba y desaguaba por la canal de la valentía.',
        zh: '总而言之，我终于确凿无疑地弄明白，这所宅子的主人名叫[莫尼波迪奥]{#g-ecp-s5-10}，是个窝藏盗贼的坐地分赃主和黑道打手的挡箭牌；我主人白天那场惊天动地的恶斗，原来早先就同他们串通排演好了，连怎么败退、怎么丢下剑鞘的细节都事先约妥；我主人当场现钱结清了那几具剑鞘的价钱，外加莫尼波迪奥随口报出的整桌酒席开销。这场夜宴一直喝到天色将明方才尽欢而散。散席前的压轴甜点，是他们给我主人点了一桩黑哨，举报城里新近刚来了一个初出茅庐的外乡打手；想来那人武艺比如今这伙人更高强，他们出于嫉妒便出卖了他。次日夜里，我主人趁那外乡人赤身睡在床上，将他一举擒获；倘若他当时披挂穿戴整齐，我看他那副身架体格，断不会教人如此轻而易举地白白拿住。继白日街头恶斗之后又添上这桩缉捕奇功，我那胆小鬼主人的威名越发如日中天——其实他比野兔还要胆怯三分，全靠摆酒席、请喝酒硬撑着勇士的名声，凡是他靠官差职权和暗地勾结捞来的钱财，全都顺着「好汉威名」这条阴沟哗哗流光了。',
        glosses: [
          {
            id: 'g-ecp-s5-10',
            anchor: '莫尼波迪奥',
            content: '**莫尼波迪奥**（Monipodio，名字由「垄断」monopolio 谐音变形而来）即塞万提斯同集收录的《模范小说集》第三篇《林孔内特与科尔塔迪略》（Rinconete y Cortadillo）中的塞维利亚地下犯罪行会教父。在该篇中，莫尼波迪奥在院宅中像修道院长兼行会会长般统辖全城窃贼与黑道猛汉（rufianes / bravos），账册分明，并与受贿捕快定期结账、点举报哨以清除未拜码头的外来同行；两篇共享同一地下塞维利亚人物谱系。紧接的「挡箭牌」（pala）系西班牙黑道切口（germanía），原指扒手行窃时上前遮挡事主视线的同伙，引申指庇护盗匪的窝主。'
          }
        ]
      },
      {
        id: 'ecp-s5-p11',
        type: 'paragraph',
        num: '§ 11',
        original: '»Pero ten paciencia, y escucha ahora un cuento que le sucedió, sin añadir ni quitar de la verdad una tilde. Dos ladrones hurtaron en Antequera un caballo muy bueno; trujéronle a Sevilla, y para venderle sin peligro usaron de un ardid que, a mi parecer, tiene del agudo y del discreto. Fuéronse a posar a posadas diferentes, y el uno se fue a la justicia y pidió por una petición que Pedro de Losada le debía cuatrocientos reales prestados, como parecía por una cédula firmada de su nombre, de la cual hacía presentación. Mandó el tiniente que el tal Losada reconociese la cédula, y que si la reconociese, le sacasen prendas de la cantidad o le pusiesen en la cárcel; tocó hacer esta diligencia a mi amo y al escribano su amigo; llevóles el ladrón a la posada del otro, y al punto reconoció su firma y confesó la deuda, y señaló por prenda de la ejecución el caballo, el cual visto por mi amo, le creció el ojo; y le marcó por suyo si acaso se vendiese. Dio el ladrón por pasados los términos de la ley, y el caballo se puso en venta y se remató en quinientos reales en un tercero que mi amo echó de manga para que se le comprase. Valía el caballo tanto y medio más de lo que dieron por él. Pero, como el bien del vendedor estaba en la brevedad de la venta, a la primer postura remató su mercaduría. Cobró el un ladrón la deuda que no le debían, y el otro la carta de pago que no había menester, y mi amo se quedó con el caballo, que para él fue peor que el Seyano lo fue para sus dueños. Mondaron luego la haza los ladrones, y, de allí a dos días, después de haber trastejado mi amo las guarniciones y otras faltas del caballo, pareció sobre él en la plaza de San Francisco, más hueco y pomposo que aldeano vestido de fiesta. Diéronle mil parabienes de la buena compra, afirmándole que valía ciento y cincuenta ducados como un huevo un maravedí; y él, volteando y revolviendo el caballo, representaba su tragedia en el teatro de la referida plaza. Y, estando en sus caracoles y rodeos, llegaron dos hombres de buen talle y de mejor ropaje, y el uno dijo: ¡Vive Dios, que éste es Piedehierro, mi caballo, que ha pocos días que me le hurtaron en Antequera!. Todos los que venían con él, que eran cuatro criados, dijeron que así era la verdad: que aquél era Piedehierro, el caballo que le habían hurtado. Pasmóse mi amo, querellóse el dueño, hubo pruebas, y fueron las que hizo el dueño tan buenas, que salió la sentencia en su favor y mi amo fue desposeído del caballo. Súpose la burla y la industria de los ladrones, que por manos e intervención de la misma justicia vendieron lo que habían hurtado, y casi todos se holgaban de que la codicia de mi amo le hubiese rompido el saco.',
        zh: '不过你且耐着性子，再来听一桩发生在他身上的实事，我绝不添油加醋或删减一星半点。有两个贼在安特克拉偷了一匹上等好马，牵到塞维利亚来；为了毫无风险地脱手卖掉，他们使了一条在我看来既刁钻又巧妙的计策。两人分头住进两家不同的客栈，随后其中一个跑到官府递上一纸诉状，状告佩德罗·德·洛萨达欠他四百雷亚尔借款未还，并当堂呈上由对方亲笔署名的借据为凭。钦差副市长下令传唤那个洛萨达当面认领借据，倘若认下字据，便查封他同等数额的财物作抵，否则押入大牢；这趟差事恰好落在我主人和他那公证人朋友头上。做原告的那个贼领着他们来到同伙下榻的客栈，那同伙当场认下签名，供认欠债属实，并指认那匹骏马作为强制执行的抵债质押物。我主人一眼瞧见这匹骏马，顿时垂涎三尺，暗自盘算倘若此马公开变卖，定要将它弄到手。充当债主的贼随即声明法定宽限期已满，申请将马匹公开拍卖；结果我主人暗中派了一个白手套出面竞买，以五百雷亚尔拍下了这匹马。这匹马的实际身价足足比成交价高出一倍半还多；只因卖主巴不得速战速决，头一轮叫价便拍板成交。一个贼领走了根本没人欠他的债款，另一个贼拿到了他压根用不着的清偿收据，而我主人则得到了那匹骏马——可这匹马对他而言，简直[比塞亚诺凶马还要丧门]{#g-ecp-s5-11}。两个窃贼得手后当即拔腿溜之大吉；过了两天，我主人把马具挽饰和马身上的几处小毛病拾掇停当，便骑着它亮相在圣方济各广场上，比穿上节日盛装的乡巴佬还要神气活现、不可一世。旁人纷纷向他道贺这笔划算买卖，赌咒说[这匹好马稳值一百五十枚杜卡多金币]{#g-ecp-s5-12}，就跟一个鸡蛋值一枚马拉维迪铜钱那样铁板钉钉；我主人纵马盘旋兜圈、腾挪回转，殊不知自己正在这座广场的舞台上出演一场自家的悲剧。正当他骑着马走盘旋花步、左盘右绕之际，走来两个身材挺拔、衣饰更为考究的男子，其中一人失声喝道：「凭永生上帝起誓，这是我的坐骑『铁蹄』啊，前些日子刚在安特克拉被人偷走的！」随同他前来的四个仆从异口同声作证说千真万确，这正是他家被盗的骏马「铁蹄」。我主人顿时傻了眼；原主告上公堂，呈交人证物证，由于失主举证确凿充分，判决最终归还原主，我主人落得马财两空。两个窃贼借官府之手、靠司法程序本身替自己销赃的妙计与骗局就此传遍全城，几乎人人都在幸灾乐祸，笑话我主人贪心不足反倒撑破了口袋。',
        glosses: [
          {
            id: 'g-ecp-s5-11',
            anchor: '比塞亚诺凶马还要丧门',
            content: '**塞亚诺凶马**（caballo Seyano，拉丁语 equus Seianus）典出古罗马学者奥卢斯·格利乌斯《阿提卡之夜》（Noctes Atticae，卷三第九章）：书记官格奈乌斯·塞尤斯拥有一匹相传出自狄俄墨得斯食人马血统的绝世名驹，然自塞尤斯本人起，历任占有此马的主人——执政官多拉贝拉、卡西乌斯乃至马克·安东尼——皆落得横死败亡的下场，西方古典谚语遂以「塞尤斯之马」喻指招灾惹祸的不祥宝物。'
          },
          {
            id: 'g-ecp-s5-12',
            anchor: '这匹好马稳值一百五十枚杜卡多金币',
            content: '安特克拉与科尔多瓦一带盛产名贵的安达卢西亚纯血马，一枚计账杜卡多（ducado）合十一银雷亚尔（共三百七十五马拉维迪铜钱），一百五十枚杜卡多折合一千六百五十雷亚尔，相当于捕快拍卖价（五百雷亚尔）的三倍有余。卡斯蒂利亚律法严禁司法官员竞买本人经办的查封拍卖物，捕快遂暗遣串通的第三人（tercero echado de manga）低价套购，随后骑赴塞维利亚举行贵族骑射庆典与公开拍卖的核心场地圣方济各广场炫耀，故被原主认出追缴后亦无法向官府追索价款。'
          }
        ]
      },
      {
        id: 'ecp-s5-p12',
        type: 'paragraph',
        num: '§ 12',
        original: '»Y no paró en esto su desgracia; que aquella noche, saliendo a rondar el mismo asistente, por haberle dado noticia que hacia los barrios de San Julián andaban ladrones, al pasar de una encrucijada vieron pasar un hombre corriendo, y dijo a este punto el asistente, asiéndome por el collar y zuzándome: ¡Al ladrón, Gavilán! ¡Ea, Gavilán, hijo, al ladrón, al ladrón! Yo, a quien ya tenían cansado las maldades de mi amo, por cumplir lo que el señor asistente me mandaba sin discrepar en nada, arremetí con mi propio amo, y sin que pudiese valerse, di con él en el suelo; y si no me le quitaran, yo hiciera a más de a cuatro vengados; quitáronme con mucha pesadumbre de entrambos. Quisieran los corchetes castigarme, y aun matarme a palos, y lo hicieran si el asistente no les dijera: No le toque nadie, que el perro hizo lo que yo le mandé.',
        zh: '他的霉运还没到此为止。当天夜里，钦差市长本人亲自出巡查夜，因为有人密报说圣胡利安街区一带常有盗贼出没。一行人走到十字路口，忽见一个汉子飞奔而过，钦差市长当即一把揪住我的项圈，放开手喝令我扑咬：「抓贼，加维兰！上啊，加维兰好孩子，抓贼，抓贼！」我早就受够了主人的种种恶行，为了分毫不差地奉行钦差市长老爷的钧命，我猛地朝自家主人扑了上去，不等他招架挣扎，一口将他扑翻在地；要不是旁人硬把我从他身上拉开，我定能替不止四个人报仇雪恨；众人好不容易才把我扯开，而我们主仆俩心里全都懊恼不已。那帮帮捕恨不得狠狠教训我一顿，甚至乱棍把我打死；要不是钦差市长发话拦住他们，他们真就下手了——只听钦差市长说道：「谁也不许碰它，这狗干的正是我吩咐它干的事！」'
      },
      {
        id: 'ecp-s5-p13',
        type: 'paragraph',
        num: '§ 13',
        original: '»Entendióse la malicia, y yo, sin despedirme de nadie, por un agujero de la muralla salí al campo, y antes que amaneciese me puse en Mairena, que es un lugar que está cuatro leguas de Sevilla. Quiso mi buena suerte que hallé allí una compañía de soldados que, según oí decir, se iban a embarcar a Cartagena. Estaban en ella cuatro rufianes de los amigos de mi amo, y el atambor era uno que había sido corchete y gran chocarrero, como lo suelen ser los más atambores. Conociéronme todos y todos me hablaron; y así, me preguntaban por mi amo como si les hubiera de responder; pero el que más afición me mostró fue el atambor, y así, determiné de acomodarme con él, si él quisiese, y seguir aquella jornada, aunque me llevase a Italia o a Flandes; porque me parece a mí, y aun a ti te debe parecer lo mismo, que, puesto que dice el refrán "quien necio es en su villa, necio es en Castilla", el andar tierras y comunicar con diversas gentes hace a los hombres discretos.»',
        zh: '我这番蓄意报复的坏心眼被人看穿了，于是我谁也没辞别，顺着城墙根的一个破洞钻出城外荒野，赶在天亮之前，[赶到了距塞维利亚四里格的镇子迈雷纳]{#g-ecp-s5-13}。算我交了好运，在镇上碰见了一连士兵，听人说他们正要开赴卡塔赫纳登船远征。连队里有四个我主人相熟的黑道泼皮朋友，而军鼓手则是个从前干过帮捕的油嘴滑舌之徒——大多数军鼓手本就都是这类插科打诨的角色。他们个个都认得我，纷纷凑上来同我搭话，还一个劲向我打听主人的近况，就好像我真能开口回答似的；不过对我最显亲热的当属那个军鼓手，于是我便打定主意，只要他肯收留，就投奔在他名下，跟着这支队伍踏上征途，哪怕把我带去意大利或是佛兰德斯也在所不惜。因为在我看来——想来你也必定所见略同——俗谚固然说「在自家村里是蠢汉，到了卡斯蒂利亚照样是蠢汉」，可是走南闯北、同形形色色的人打交道，终究能叫人历练得通达明智。',
        glosses: [
          {
            id: 'g-ecp-s5-13',
            anchor: '赶到了距塞维利亚四里格的镇子迈雷纳',
            content: '**迈雷纳**（Mairena del Alcor）位于塞维利亚以东四卡斯蒂利亚里格（一里格约合 5.57 公里，四里格约二十二公里）的台地上，是从塞维利亚经安达卢西亚腹地前往地中海军港**卡塔赫纳**（Cartagena）的陆路首站。哈布斯堡王朝时期，在安达卢西亚招募的步兵连队例由卡塔赫纳登乘桨帆船赴热那亚，或驻防西属意大利诸邦，或沿跨越阿尔卑斯山的「西班牙军道」（Camino Español）开赴低地国家佛兰德斯平叛战场。'
          }
        ]
      },
      {
        id: 'ecp-s5-p14',
        type: 'paragraph',
        num: '§ 14',
        original: 'CIPIÓN.—Es eso tan verdad, que me acuerdo haber oído decir a un amo que tuve de bonísimo ingenio que al famoso griego llamado Ulises le dieron renombre de prudente por sólo haber andado muchas tierras y comunicado con diversas gentes y varias naciones; y así, alabo la intención que tuviste de irte donde te llevasen.',
        zh: '**西皮翁：**这话千真万确。我记得从前侍奉过一位才智绝佳的主人，曾听他讲起，古希腊那位名叫尤利西斯的著名人物之所以博得深谋远虑的美名，全凭他走遍许多地方、接触过形形色色的民众与诸多邦国；因此，我十分赞赏你当初准备随遇而安、任凭队伍带你闯荡四方的打算。'
      }
    ]
  },
  {
    id: 'ecp-sec-6',
    roman: 'VI',
    titleOriginal: 'El atambor y las cabriolas del «perro sabio»',
    titleZh: '军鼓手与「灵犬」的市集把戏',
    blocks: [
      {
        id: 'ecp-s6-p01',
        type: 'paragraph',
        num: '§ 01',
        original: 'BERGANZA.—«Es, pues, el caso que el atambor, por tener con qué mostrar más sus chacorrerías, comenzó a enseñarme a bailar al son del atambor y a hacer otras monerías, tan ajenas de poder aprenderlas otro perro que no fuera yo como las oirás cuando te las diga.',
        zh: '**贝尔甘萨：**话说那个军鼓手为了有更多本钱卖弄他的插科打诨，便开始教我踩着军鼓的鼓点跳舞，还教我耍弄别的猴子把戏；等我一桩桩讲给你听时你就会明白，那些花样若是换作我以外的任何一条狗，是断然学不会的。'
      },
      {
        id: 'ecp-s6-p02',
        type: 'paragraph',
        num: '§ 02',
        original: '»Por acabarse el distrito de la comisión, se marchaba poco a poco; no había comisario que nos limitase; el capitán era mozo, pero muy buen caballero y gran cristiano; el alférez no hacía muchos meses que había dejado la Corte y el tinelo; el sargento era matrero y sagaz y grande arriero de compañías, desde donde se levantan hasta el embarcadero. Iba la compañía llena de rufianes churrulleros, los cuales hacían algunas insolencias por los lugares do pasábamos, que redundaban en maldecir a quien no lo merecía. Infelicidad es del buen príncipe ser culpado de sus súbditos por la culpa de sus súbditos, a causa que los unos son verdugos de los otros, sin culpa del señor; pues, aunque quiera y lo procure no puede remediar estos daños, porque todas o las más cosas de la guerra traen consigo aspereza, riguridad y desconveniencia.',
        zh: '眼看募兵委任状划定的辖区就要走到尽头，连队便磨磨蹭蹭地往前挪动，况且[身边又没有军饷委员管束我们]{#g-ecp-s6-01}；连长年纪轻轻，却是一位极正派的绅士、虔诚的基督徒；少尉旗官[离开京城宫廷和豪门下人饭堂]{#g-ecp-s6-02}还没几个月；军士长则是个老奸巨猾的积年油子，最擅长像赶牲口的老脚夫一样，把整连新兵从招募地一路押运到登船码头。连队里塞满了信口雌黄的无赖兵痞，沿途经过各处村镇时常干出些欺男霸女的横暴勾当，结果害得本不该受责难的人无辜背上骂名。贤明君主的不幸，正在于要因一部分臣民的罪过而遭另一部分臣民怨怼——只因臣民彼此互为刽子手，君主本人实无过错；哪怕君主有心严加整饬，也无力根除这些弊害，因为战争中的一切事务——或者说绝大多数事务——天生就伴随着粗暴、严酷与扰民之苦。',
        glosses: [
          {
            id: 'g-ecp-s6-01',
            anchor: '身边又没有军饷委员管束我们',
            content: '西班牙哈布斯堡王朝实行委任募兵制：连长（capitán）持王室募兵状在指定辖区招兵，行军途中由沿途市镇按摊派义务无偿提供兵丁宿营与口粮（alojamientos）。按军规须由王室委派的**军饷委员**（comisario de muestras y conducciones）随军清点名册并监督每日行军里程；一旦缺乏委员督管，熟谙门道的军士长（sargento）与军鼓手便故意放缓行军，借驻扎骚扰向沿途村镇索取「免宿费」折现牟利。'
          },
          {
            id: 'g-ecp-s6-02',
            anchor: '离开京城宫廷和豪门下人饭堂',
            content: '西语原文为 **la Corte y el tinelo**。**tinelo** 源自意大利语 tinello，指马德里宫廷权贵与大贵族府邸中专供低等侍从、清客就餐的下人饭堂，在黄金时代文学中素以残羹冷炙、管事克扣酒肉与势利屈辱著称；许多在京城寄食无着的破落侍从常设法谋取步兵少尉旗官（alférez）职位投军出路。'
          }
        ]
      },
      {
        id: 'ecp-s6-p03',
        type: 'paragraph',
        num: '§ 03',
        original: '»En fin, en menos de quince días, con mi buen ingenio y con la diligencia que puso el que había escogido por patrón, supe saltar por el Rey de Francia y a no saltar por la mala tabernera. Enseñóme a hacer corvetas como caballo napolitano y a andar a la redonda como mula de atahona, con otras cosas que, si yo no tuviera cuenta en no adelantarme a mostrarlas, pusiera en duda si era algún demonio en figura de perro el que las hacía. Púsome nombre del "perro sabio", y no habíamos llegado al alojamiento cuando, tocando su atambor, andaba por todo el lugar pregonando que todas las personas que quisiesen venir a ver las maravillosas gracias y habilidades del perro sabio en tal casa o en tal hospital las mostraban, a ocho o a cuatro maravedís, según era el pueblo grande o chico. Con estos encarecimientos no quedaba persona en todo el lugar que no me fuese a ver, y ninguno había que no saliese admirado y contento de haberme visto. Triunfaba mi amo con la mucha ganancia, y sustentaba seis camaradas como unos reyes. La codicia y la envidia despertó en los rufianes voluntad de hurtarme, y andaban buscando ocasión para ello: que esto del ganar de comer holgando tiene muchos aficionados y golosos; por esto hay tantos titereros en España, tantos que muestran retablos, tantos que venden alfileres y coplas, que todo su caudal, aunque le vendiesen todo, no llega a poderse sustentar un día; y, con esto, los unos y los otros no salen de los bodegones y tabernas en todo el año; por do me doy a entender que de otra parte que de la de sus oficios sale la corriente de sus borracheras. Toda esta gente es vagamunda, inútil y sin provecho; esponjas del vino y gorgojos del pan.»',
        zh: '总而言之，不出半个月工夫，凭着我的聪慧灵性，加上我所认的这位新东家悉心调教，我便学会了[为法兰西国王纵身一跳]{#g-ecp-s6-03}，听到黑心酒馆老板娘的名字就按兵不动。他还教我像那不勒斯名驹一样后腿腾跃，像拉石磨的骡子一样绕圈打转，外加许多别的绝活——要不是我格外留心克制、绝不抢先卖弄过头，看客简直要起疑心，当真以为是一头披着狗皮的魔鬼在耍把戏了。他给我起了个艺名叫「灵犬」；每逢连队还没走到宿营地，他就一路擂着军鼓走街串巷高声吆喝，宣告凡是想一睹灵犬奇巧本领与绝妙技艺的乡亲，皆可前往某户大宅或某座慈善医院的院子里观看，视村镇大小，每人收八枚或四枚马拉维迪铜钱。经他这番天花乱坠的吹嘘，全镇上下没有一个人不赶来看我表演，也没有一个人看完不是啧啧称奇、心满意足地离去。我主人靠着这笔丰厚进项大发其财，把六个同伙供养得像国王一样快活。那帮黑道兵痞见钱眼开、心生嫉恨，便动了把我偷走的歪念头，成天寻觅下手的机会：毕竟这种游手好闲就能混饭吃的营生，向来最招懒汉与馋鬼垂涎；正因如此，西班牙才会有那么多耍木偶戏的人、那么多背着活动戏箱走江湖的人、那么多沿街兜售别针与散页俗曲的小贩——他们全部家当哪怕统统变卖精光，也不够糊口度过一天；可即便如此，这两路人一年到头却从不离开小饭铺和酒馆半步，由此我不难明白，供他们长年买醉的酒钱定是从本行买卖之外的邪路流出来的。这帮人统统是游荡无业、百无一用的废物，纯粹是吸干美酒的海绵、蛀空面包的米象。',
        glosses: [
          {
            id: 'g-ecp-s6-03',
            anchor: '为法兰西国王纵身一跳',
            content: '西语原文为 **saltar por el Rey de Francia y a no saltar por la mala tabernera**，系十六至十七世纪西班牙盲丐与江湖艺人驯狗（perro sabio，「灵犬」）或耍猴（如《堂吉诃德》下卷第 25 章佩德罗师傅的占卜猴）的经典套路口令：艺人高喊「为法兰西国王跳一个」或「为正派基督徒跳一个」时暗施手势令犬跃过铁圈，喊到「往酒里掺水的黑心酒馆老板娘」时则令犬伏地拒跳以博哄堂大笑。下文「那不勒斯名驹」（caballo napolitano）以西属那不勒斯王国开创的古典高等马术腾跃步（corveta）闻名欧洲；而乡镇「慈善医院」（hospital）多带宽敞内院，常兼作过境连队宿营地与临时露天杂耍场。'
          }
        ]
      },
      {
        id: 'ecp-s6-p04',
        type: 'paragraph',
        num: '§ 04',
        original: 'CIPIÓN.—No más, Berganza; no volvamos a lo pasado: sigue, que se va la noche, y no querría que al salir del sol quedásemos a la sombra del silencio.',
        zh: '**西皮翁：**打住吧，贝尔甘萨，别又犯老毛病扯远了；快接着讲正事，夜色眼看就要过去，我可不愿等太阳升起时，咱们俩又落回沉默的阴影里。'
      },
      {
        id: 'ecp-s6-p05',
        type: 'paragraph',
        num: '§ 05',
        original: 'BERGANZA.—Tenle y escucha.',
        zh: '**贝尔甘萨：**你且按捺住性子听我讲。'
      },
      {
        id: 'ecp-s6-p06',
        type: 'paragraph',
        num: '§ 06',
        original: '»Como sea cosa fácil añadir a lo ya inventado, viendo mi amo cuán bien sabía imitar el corcel napolitano, hízome unas cubiertas de guadamací y una silla pequeña, que me acomodó en las espaldas, y sobre ella puso una figura liviana de un hombre con una lancilla de correr sortija, y enseñóme a correr derechamente a una sortija que entre dos palos ponía; y el día que había de correrla pregonaba que aquel día corría sortija el perro sabio y hacía otras nuevas y nunca vistas galanterías, las cuales de mi santiscario, como dicen, las hacía por no sacar mentiroso a mi amo.',
        zh: '既然在现成花样上添枝加叶并非难事，我主人见我把那不勒斯骏马的步法模仿得惟妙惟肖，便用压花描金革给我缝制了一套披挂，又配了一副小巧马鞍稳稳套在我背上，鞍上立着一尊轻巧的假人骑手，手里端着一柄细小骑枪；他还在两根木杆之间悬起一枚铁环，教我笔直朝铁环飞奔过去做[挑环竞骑]{#g-ecp-s6-04}。到了演这一出把戏的日子，他便满街击鼓宣扬，说当天「灵犬」要上阵表演挑环竞骑，外加其他种种前所未见的风雅绝技；为了不让我主人落个撒谎吹牛的名声，我也就照俗话说的那样，凭着自家肚里的道行即兴发挥，把场子圆得漂漂亮亮。',
        glosses: [
          {
            id: 'g-ecp-s6-04',
            anchor: '挑环竞骑',
            content: '西语原文为 **correr sortija**，系文艺复兴与黄金时代风行宫廷与城市广场的贵族骑士竞技：在两根立柱间悬挂一枚小指环（sortija），骑手纵马疾驰，持细长骑枪（lancilla）精准穿刺摘环。军鼓手用科尔多瓦特产的压花描金鞣革（guadamací）将猎犬装扮成贵族战马戏仿骑士比武，以市井滑稽剧手法颠倒等级排场。'
          }
        ]
      },
      {
        id: 'ecp-s6-p07',
        type: 'paragraph',
        num: '§ 07',
        original: '»Llegamos, pues, por nuestras jornadas contadas a Montilla, villa del famoso y gran cristiano Marqués de Priego, señor de la casa de Aguilar y de Montilla. Alojaron a mi amo, porque él lo procuró, en un hospital; echó luego el ordinario bando, y, como ya la fama se había adelantado a llevar las nuevas de las habilidades y gracias del perro sabio, en menos de una hora se llenó el patio de gente. Alegróse mi amo viendo que la cosecha iba de guilla, y mostróse aquel día chacorrero en demasía. Lo primero en que comenzaba la fiesta era en los saltos que yo daba por un aro de cedazo, que parecía de cuba: conjurábame por las ordinarias preguntas, y cuando él bajaba una varilla de membrillo que en la mano tenía, era señal del salto; y cuando la tenía alta, de que me estuviese quedo. El primer conjuro deste día (memorable entre todos los de mi vida) fue decirme: Ea, Gavilán amigo, salta por aquel viejo verde que tú conoces que se escabecha las barbas; y si no quieres, salta por la pompa y el aparato de doña Pimpinela de Plafagonia, que fue compañera de la moza gallega que servía en Valdeastillas. ¿No te cuadra el conjuro, hijo Gavilán? Pues salta por el bachiller Pasillas, que se firma licenciado sin tener grado alguno. ¡Oh, perezoso estás! ¿Por qué no saltas? Pero ya entiendo y alcanzo tus marrullerías: ahora salta por el licor de Esquivias, famoso al par del de Ciudad Real, San Martín y Ribadavia. Bajó la varilla y salté yo, y noté sus malicias y malas entrañas.',
        zh: '就这样，我们按日计程，一路走到了蒙蒂利亚——这座名镇隶属于大名鼎鼎的虔诚基督徒、[阿吉拉尔与蒙蒂利亚领主普列戈侯爵]{#g-ecp-s6-05}。我主人特意设法求情，被安排住进了一座慈善医院里；他照例立刻击鼓发出告示，由于「灵犬」身怀绝技与奇巧本领的名声早已抢先一步传开，不到一个时辰，医院庭院里便挤满了看客。我主人见这趟买卖大获丰收，乐得眉开眼笑，那天插科打诨的劲头也就格外嚣张。开场头一道节目，是让我纵身跳过一个大得像酒桶箍一样的筛圈：他嘴里照例念着一套戏谑咒语向我发问，手里握着一根榅桲木细杖——细杖朝下一压，就是叫我起跳的暗号；细杖高高举起，便是叫我原地不动。这一天（也是我一生当中最难忘的一天），他念出的头一道咒语是对我说：「来呀，加维兰老友，为你认得的那个[把胡子泡进醋卤里染黑的风流老色鬼]{#g-ecp-s6-06}跳一个！要是你不肯跳，那就为帕夫拉戈尼亚的平皮内拉夫人的排场与威风跳一个吧，她从前可是瓦尔德阿斯蒂利亚斯客栈里那个加利西亚粗使丫头的同房姐妹呢！这道咒语还不合你的意吗，加维兰孩子？那就为毫无学位却硬署硕士头衔的[帕西利亚斯学士]{#g-ecp-s6-07}跳一个吧！噢，你今天可真够懒的！怎么还不跳？不过我早摸透你的鬼心眼啦：现在，为堪与雷亚尔城、圣马丁和里瓦达维亚佳酿并驾齐驱的埃斯基维亚斯美酒跳一个吧！」他把细杖往下一压，我应声跃起，心里却暗暗看透了他满肚子的坏水与促狭心肠。',
        glosses: [
          {
            id: 'g-ecp-s6-05',
            anchor: '阿吉拉尔与蒙蒂利亚领主普列戈侯爵',
            content: '指第四代普列戈侯爵**佩德罗·费尔南德斯·德·科尔多瓦**（Pedro Fernández de Córdoba, 1563—1606），安达卢西亚世袭大贵族科尔多瓦家族阿吉拉尔支系宗主，首府即设于科尔多瓦以南的封邑重镇**蒙蒂利亚**（Montilla）。他以严守天主教虔修、资助耶稣会学院及大力兴办济贫医院著称一时；塞万提斯于 1591 年底在蒙蒂利亚一带征办王室军粮期间曾亲历其治下风貌。'
          },
          {
            id: 'g-ecp-s6-06',
            anchor: '把胡子泡进醋卤里染黑的风流老色鬼',
            content: '西语原文为 **viejo verde... que se escabecha las barbas**。**viejo verde**（字面义「青绿老头」，喻老不正经的好色老翁）与「腌渍胡须」（escabechar las barbas）系黄金时代讽刺诗文（尤以戈韦多与贡戈拉为著）常嘲弄的世态：年迈求偶者夜间用一氧化铅、生石灰与酸醋调制的药水浸染白须，气味刺鼻如腌鱼醋卤（escabeche），且常因氧化不均泛出紫绿斑驳的怪色。紧接下句「帕夫拉戈尼亚的平皮内拉夫人」则以骑士小说式的浮夸封号，戏讽曾在科尔多瓦近郊瓦尔德阿斯蒂利亚斯（Valdeastillas）路边客栈当灶下婢、日后却冒充贵族命妇（doña）的暴发女子。'
          },
          {
            id: 'g-ecp-s6-07',
            anchor: '帕西利亚斯学士',
            content: '黄金时代西班牙大学学位分学士（bachiller）、硕士（licenciado）与博士（doctor）三级，唯获法学或医学**硕士**以上学位者方具高级执业资格与社会尊荣，民间不学无术或仅修初级课程者常越级自署「硕士」，俗语遂以「帕西利亚斯学士」讥刺冒充饱学的江湖半瓶醋。下文令灵犬真正起跳的**埃斯基维亚斯**（Esquivias）白葡萄酒产自托莱多近郊名镇——该镇亦是塞万提斯夫人卡塔琳娜·德·萨拉萨尔的故乡，塞万提斯于 1584 年在此成婚并曾照管岳家葡萄园——与拉曼恰的雷亚尔城、马德里西郊的圣马丁及加利西亚的里瓦达维亚并称当时西班牙四大名酒产地。'
          }
        ]
      },
      {
        id: 'ecp-s6-p08',
        type: 'paragraph',
        num: '§ 08',
        original: '»Volvióse luego al pueblo y en voz alta dijo: No piense vuesa merced, senado valeroso, que es cosa de burla lo que este perro sabe: veinte y cuatro piezas le tengo enseñadas que por la menor dellas volaría un gavilán; quiero decir que por ver la menor se pueden caminar treinta leguas. Sabe bailar la zarabanda y chacona mejor que su inventora misma; bébese una azumbre de vino sin dejar gota; entona un sol fa mi re tan bien como un sacristán; todas estas cosas, y otras muchas que me quedan por decir, las irán viendo vuesas mercedes en los días que estuviere aquí la compañía; y por ahora dé otro salto nuestro sabio, y luego entraremos en lo grueso. Con esto suspendió el auditorio, que había llamado senado, y les encendió el deseo de no dejar de ver todo lo que yo sabía.',
        zh: '随后他转过身面向围观众人，扯开嗓门高声说道：「[英勇的元老院诸公]{#g-ecp-s6-08}，列位大人千万莫以为这条狗会的本事只是寻常儿戏：我统共教了它二十四套绝活，哪怕单看其中最小的一套，连天上的雀鹰都会飞扑下来——我是说，哪怕走上三十里格路赶来看上一眼也值！它会跳萨拉班德舞与恰空舞，跳得比编出这两种舞的祖师娘还要地道；它能一口气喝干一整阿孙布雷美酒而滴酒不剩；它唱起『索发咪来』的音阶，跟教堂管事一样字正腔圆！所有这些绝活，外加我还没来得及细数的许多妙技，只要我们连队在贵地驻扎一日，列位大人便能逐一饱览；眼下且让咱们的灵犬再跳一遭，随后咱们就亮出重头真功夫！」这番话把被他捧为「元老院」的满场看客吊足了胃口，撩拨得人人心里痒痒，恨不得把我会的本领一古脑儿全看完。',
        glosses: [
          {
            id: 'g-ecp-s6-08',
            anchor: '英勇的元老院诸公',
            content: '西语原文为 **senado valeroso**，系黄金时代露天喜剧剧场（corrales de comedias）演员登场开演或终场谢幕时，将挤在院子里的市井平民看客戏尊为古罗马元老院的惯用套语。下文与恰空舞并提的**萨拉班德舞**（zarabanda）是当时安达卢西亚最泼辣奔放的响板歌舞，卡斯蒂利亚皇家枢密院曾于 1583 年下令严禁演唱，违者处鞭笞二百及六年桨帆船苦役，民间却愈禁愈盛；「一阿孙布雷」（azumbre）为卡斯蒂利亚液量单位，约合两升；「索发咪来」（sol fa mi re）则指中世纪圭多六声音阶唱名法，当时乡镇教堂辅祭与管事（sacristán）常兼授儿童圣咏唱名。'
          }
        ]
      },
      {
        id: 'ecp-s6-p09',
        type: 'paragraph',
        num: '§ 09',
        original: '»Volvióse a mí mi amo y dijo: Volved, hijo Gavilán, y con gentil agilidad y destreza deshaced los saltos que habéis hecho; pero ha de ser a devoción de la famosa hechicera que dicen que hubo en este lugar. Apenas hubo dicho esto, cuando alzó la voz la hospitalera, que era una vieja, al parecer, de más de sesenta años, diciendo: ¡Bellaco, charlatán, embaidor y hijo de puta, aquí no hay hechicera alguna! Si lo decís por la Camacha, ya ella pagó su pecado, y está donde Dios se sabe; si lo decís por mí, chacorrero, ni yo soy ni he sido hechicera en mi vida; y si he tenido fama de haberlo sido, merced a los testigos falsos, y a la ley del encaje, y al juez arrojadizo y mal informado, ya sabe todo el mundo la vida que hago en penitencia, no de los hechizos que no hice, sino de otros muchos pecados: otros que como pecadora he cometido. Así que, socarrón tamborilero, salid del hospital: si no, por vida de mi santiguada que os haga salir más que de paso. Y, con esto, comenzó a dar tantos gritos y a decir tantas y tan atropelladas injurias a mi amo, que le puso en confusión y sobresalto; finalmente, no dejó que pasase adelante la fiesta en ningún modo. No le pesó a mi amo del alboroto, porque se quedó con los dineros y aplazó para otro día y en otro hospital lo que en aquél había faltado. Fuese la gente maldiciendo a la vieja, añadiendo al nombre de hechicera el de bruja, y el de barbuda sobre vieja. Con todo esto, nos quedamos en el hospital aquella noche; y, encontrándome la vieja en el corral solo, me dijo: ¿Eres tú, hijo Montiel? ¿Eres tú, por ventura, hijo?. Alcé la cabeza y miréla muy de espacio; lo cual visto por ella, con lágrimas en los ojos se vino a mí y me echó los brazos al cuello, y si la dejara me besara en la boca; pero tuve asco y no lo consentí.»',
        zh: '我主人又转过身来对我说道：「转回去，加维兰孩子，拿出灵巧洒脱的身手，把刚才跳过的圈再倒着跳回来；不过这一跳，得献给听说从前这镇上出过的那位大名鼎鼎的女术士！」他这话音刚落，医院里管事看护的老妇人——看模样已年过六旬——猛地拔高嗓门厉声骂道：「你这无赖、江湖骗子、招摇撞骗的狗杂种，婊子养的畜生，这地方哪有什么女术士！你若是冲着卡马查说的，她早就为自己的罪孽偿清了债，如今在只有上帝晓得的地方待着呢；你这油嘴滑舌的东西若是冲着我说的，我这一辈子既不是、也从没当过什么女术士！就算我背过那样的名声，也全拜作伪证的小人、[任凭己意硬套的私心律法]{#g-ecp-s6-09}以及贸然轻信、不明就里的糊涂法官所赐；如今世人谁不晓得我在这里苦修赎罪的日子，赎的绝不是我压根没施过的妖术，而是我作为一个罪人犯下的许多别的罪过！所以，你这促狭耍滑的敲鼓佬，赶紧给我滚出医院去；要不然，凭我画十字起誓，定叫你连滚带爬地滚出去！」说罢，她扯开嗓子大喊大叫，连珠炮似的臭骂劈头盖脸朝我主人砸来，骂得我主人手足无措、心惊肉跳；到头来，她死活不许这场杂耍再演下去半刻。我主人对这场闹剧倒也并不懊恼，因为他已经把门票钱揣进了腰包，便顺势宣告今天没演完的压轴好戏改日挪到另一座医院补演。看客们骂骂咧咧地散去了，一边走一边咒骂那老太婆，在「女术士」的名号之外又给她扣上「女巫」的恶名，在「老太婆」上头又添上「长胡子的老虔婆」。尽管闹了一场，当晚我们还是留宿在这座医院里；夜里老妇人在后院撞见我独自待着，便凑上前对我低声说道：「是你吗，蒙铁尔孩子？莫非真的是你吗，孩子？」我抬起头，定定地端详了她好半晌；她一见我这副神情，顿时热泪盈眶，扑上前来双臂搂住我的脖子；要是我由着她，她真要在我嘴上亲吻了，可我嫌恶心，死活没有依她。',
        glosses: [
          {
            id: 'g-ecp-s6-09',
            anchor: '任凭己意硬套的私心律法',
            content: '西语原文为 **la ley del encaje**（字面义「嵌合法」），塞万提斯在《堂吉诃德》上卷第 11 章及下卷第 42 章（堂吉诃德训诫桑丘治岛箴言）中亦屡加针砭，指法官撇开成文法典与证据规则，全凭自己脑中一时闪现的臆断硬行定谳。段末散场看客加骂的**长胡子的老虔婆**（barbuda），化用西班牙俗谚「见了长胡子的妇人，老远打个招呼就该绕道走」（A la mujer barbuda, de lejos la saluda），当时民间相术视老年妇人唇颏生须为阴鸷不祥与巫蛊之相。'
          }
        ]
      },
      {
        id: 'ecp-s6-p10',
        type: 'paragraph',
        num: '§ 10',
        original: 'CIPIÓN.—Bien hiciste, porque no es regalo, sino tormento, el besar ni dejar besarse de una vieja.',
        zh: '**西皮翁：**你做得对，因为亲吻老太婆或是让老太婆亲吻，绝不是什么福气，而是一桩酷刑。'
      },
      {
        id: 'ecp-s6-p11',
        type: 'paragraph',
        num: '§ 11',
        original: 'BERGANZA.—Esto que ahora te quiero contar te lo había de haber dicho al principio de mi cuento, y así escusáramos la admiración que nos causó el vernos con habla.',
        zh: '**贝尔甘萨：**接下来我要讲给你听的这件事，我本该在故事一开头就告诉你的；那样的话，先前发现咱们俩居然口吐人言时，也就用不着那般大惊小怪了。'
      }
    ]
  }
];
