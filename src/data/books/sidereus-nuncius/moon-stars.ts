import type { BookSection } from '../../../types/book';

export const moonStarsSections: BookSection[] = [
  {
    id: 'de-facie-lunae',
    roman: 'II',
    titleOriginal:
      'De Facie Lunae: Asperitates, Orbis Vaporosus, Montium Altitudo et Fulgor Secundarius',
    titleZh: '论月球表面：山谷明暗、蒸气球层、山岳高度测算与地球反照',
    aiModel: 'Gemini-4-Carbon',
    blocks: [
      {
        id: 'sn-s2-p01',
        type: 'paragraph',
        num: '§ 01',
        original:
          'De facie autem Lunae, quae ad aspectum nostrum vergit, primo loco dicamus. Quam, facilioris intelligentiae gratia, in duas partes distinguo, alteram nempe clariorem, obscuriorem alteram: clarior videtur totum hemisphaerium ambire atque perfundere, obscurior vero, veluti nubes quaedam, faciem ipsam inficit maculosamque reddit. Istae autem maculae, subobscurae et satis amplae, unicuique sunt obviae, illasque aevum omne conspexit; quapropter magnas, seu antiquas, eas appellabimus, ad differentiam aliarum macularum amplitudine minorum, at frequentia ita consitarum, ut totam Lunarem superficiem, praesertim vero lucidiorem partem, conspergant; hae vero a nemine ante nos observatae fuerunt: ex ipsarum autem saepius iteratis inspectionibus in eam deducti sumus sententiam, ut certo intelligamus, Lunae superficiem, non perpolitam, aequabilem, exactissimaeque sphaericitatis existere, ut magna philosophorum cohors de ipsa deque reliquis corporibus caelestibus opinata est, sed, contra, inaequalem, asperam, cavitatibus tumoribusque confertam, non secus ac ipsiusmet Telluris facies, quae montium iugis valliumque profunditatibus hinc inde distinguitur. Apparentiae vero, ex quibus haec colligere licuit, eiusmodi sunt.',
        zh: '首先，让我们探讨朝向我们视线的月球正面。为便于理解起见，我将它区分为两部分，即较明亮的部分与较幽暗的部分：较明亮的部分看来环绕并铺满整个半球，较幽暗的部分则好似一片片云翳，浸染了月面并使之斑驳成纹。这些略显幽暗且颇为宽广的斑块人人皆能看见，万古以来世人皆曾目睹；因此我们将称之为**大斑块**或**古斑块**，以别于另外一些幅员较小、却密布得洒满整个月球表面（尤其是较明亮区域）的斑点——后面这些细斑在我们之前从未被任何人观测到。正是通过对它们反复多次的审视，我们被引导至这样一个定论，得以确凿无疑地知晓：月球的表面绝非如[广大哲学家阵营对月球及其余天体所持的见解]{#g-sn-s2-01}那样光滑打磨、均匀平整且具最精确的正球形；恰恰相反，它是高低不平、粗糙崎岖、遍布洼谷与隆起的，无异于地球本身的面貌——到处由山岭脊脉与幽深谷地交错分界。使我们得以推知此理的观测现象如下。',
        glosses: [
          {
            id: 'g-sn-s2-01',
            anchor: '广大哲学家阵营对月球及其余天体所持的见解',
            content:
              '在亚里士多德主义—经院自然哲学传统中，为在不破坏「月球为光滑正球体」的前提下解释肉眼可见的月面阴影（「月中人影」或古斑块），伊本·鲁世德（阿威罗伊）与中世纪拉丁经院学者普遍主张「以太疏密说」（raritas et densitas），即月球球体表面绝对光滑，唯内部各处以太质地疏密不均，较稠密处反光强而明亮，较稀薄处透光弱而幽暗（但丁《神曲》之〈天堂篇〉第二歌亦曾借贝雅特丽齐之口详辩此说）。'
          }
        ]
      },
      {
        id: 'sn-s2-p02',
        type: 'paragraph',
        num: '§ 02',
        original:
          'Quarta aut quinta post coniunctionem die, cum splendidis Luna sese nobis cornibus offert, iam terminus partem obscuram a luminosa dividens non aequabiliter secundum ovalem lineam extenditur, veluti in solido perfecte sphaerico accideret; sed inaequabili, aspera et admodum sinuosa linea designatur, veluti apposita figura repraesentat: [ Icon I Lunae ] complures enim veluti excrescentiae lucidae ultra lucis tenebrarumque confinia in partem obscuram extenduntur, et, contra, tenebricosae particulae intra lumen ingrediuntur. Quinimmo, et magna nigricantium macularum exiguarum copia, omnino a tenebrosa parte separatarum, totam fere plagam iam Solis lumine perfusam undiquaque conspergit, illa saltem excepta parte, quae magnis et antiquis maculis est affecta. Adnotavimus autem, modo dictas exiguas maculas in hoc semper et omnes, convenire, ut partem habeant nigricantem locum Solis respicientem; ex adverso autem Solis lucidioribus terminis, quasi candentibus iugis coronentur. At consimilem penitus aspectum habemus in Terra circa Solis exortum, dum valles nondum lumine perfusas, montes vero illas ex adverso Solis circundantes iam iam splendore fulgentes intuemur: ac veluti terrestrium cavitatum umbrae, Sole sublimiora petente, imminuuntur, ita et lunares istae maculae, crescente parte luminosa, tenebras amittunt.',
        zh: '[朔后第四日或第五日，当月球向我们展露璀璨的双角时]{#g-sn-s2-02}，划分暗部与亮部的晨昏分界线，便已不是像在完美正球体上理应发生的那样沿一条平滑椭圆线均匀延伸，而是由一条参差不齐、粗糙而又曲折蜿蜒的线条勾勒出来，一如附图所示：好些明亮的突起仿佛越过光暗交界伸入暗部，反之又有一些幽暗的小块侵入光区之内。更有甚者，大批同暗部完全分离的发黑小斑点，还四处洒满几乎整片已沐浴阳光的区域——至少除开那片布有巨大古斑块的地带之外皆是如此。我们还注意到，方才所说的这些小斑点全都毫无例外地具有同一个特征：它们发黑的一侧总是朝向太阳所在之处，而在背向太阳的一侧则镶着更明亮的边缘，宛如戴着一圈灼白闪耀的山脊冠冕。每当日出前后，我们在地球上看到的景象与此如出一辙：彼时幽谷尚未洒满阳光，而在背对太阳一侧环抱山谷的群峰却已熠熠生辉；并且正如地上山谷的阴影会随着太阳升高而缩减，月面上这些斑点的黑影也会随着亮部扩大而逐渐消退。',
        glosses: [
          {
            id: 'g-sn-s2-02',
            anchor: '朔后第四日或第五日，当月球向我们展露璀璨的双角时',
            content:
              '威尼斯初版全书共嵌有四幅月相铜版蚀刻画（原稿基础为一六〇九年十一月三十日至十二月中旬伽利略亲笔绘制、现藏佛罗伦萨国立中央图书馆 Ms. Gal. 48 的水墨晕染月面写生图）。尽管英国数学家托马斯·哈里奥特（Thomas Harriot）早在一六〇九年七月二十六日便曾用六倍望远镜画下一幅简略的新月分界草图（未发表），但早年曾在佛罗伦萨迪塞尼奥美术学院研习透视投影与明暗法（chiaroscuro）的伽利略，首次从斜面光照与阴影朝向的几何规律中辨认出环形洼谷与环绕山脊的三维地形结构。'
          }
        ]
      },
      {
        id: 'sn-s2-p03',
        type: 'paragraph',
        num: '§ 03',
        original:
          'Verum, non modo tenebrarum et luminis confinia in Luna inaequalia ac sinuosa cernuntur; sed, quod maiorem infert admirationem, permultae apparent lucidae cuspides intra tenebrosam Lunae partem, omnino ab illuminata plaga divisae et avulsae, ab eaque non per exiguam intercapedinem dissitae; quae paulatim, aliqua interiecta mora, magnitudine et lumine augentur, post vero secundam horam aut tertiam reliquae parti lucidae et ampliori iam factae iunguntur; interim tamen aliae atque aliae, hinc inde quasi pullulantes, intra tenebrosam partem accenduntur, augentur, ac demum eidem luminosae superficiei, magis adhuc extensae, copulantur. Huius exemplum eadem figura nobis exhibet. At nonne in terris ante Solis exortum, umbra adhuc planities occupante, altissimorum cacumina montium solaribus radiis illustrantur? Nonne exiguo interiecto tempore ampliatur lumen, dum mediae et largiores eorundem montium partes illuminantur; ac tandem, orto iam Sole, planicierum et collium illuminationes iunguntur? Huiusmodi autem eminentiarum et cavitatum discrimina in Luna longe lateque terrestrem asperitatem superare videntur, ut infra demonstrabimus.',
        zh: '然而，月面上不仅光暗交界显得参差蜿蜒；更令人惊叹的是，在月球暗部之内还会浮现出许多明亮的尖峰，同受光区域完全割裂、断开，相隔绝非微小的间距；每隔一段工夫，它们便渐渐在大小与亮度上增长起来，过了两三个小时之后，终于同其余已经扩大的明亮部分连成一片；在此期间，又有别的亮峰此起彼伏、仿佛萌芽滋长一般在暗部之内相继点亮、壮大，最终也并入那片愈发延展的受光表面。同一幅附图向我们展示了这一实例。试问在地球上，日出之前，当阴影仍笼罩着平原时，最高群山的峰顶岂不正是率先被阳光照亮吗？稍隔片刻，当同一批群山中部更宽广的山体受到照耀时，亮区岂不随之扩大，直至太阳升起后，平原与丘陵的光亮终于连成一片吗？而且月球上这类高耸与低洼的落差，看来远远超过了地球表面的崎岖程度，这一点我们将在下文加以证明。'
      },
      {
        id: 'sn-s2-p04',
        type: 'paragraph',
        num: '§ 04',
        original:
          'Interim silentio minime involvam quid animadversione dignum a me observatum, dum Luna ad primam quadraturam properaret, cuius etiam imaginem eadem supra posita delineatio prae se fert: ingens enim sinus tenebrosus in partem luminosam subit, versus inferius cornu locatus; quem quidem sinum cum diutius observassem, totumque obscurum vidissem, tandem post duas fere horas, paulo infra medium cavitatis, vertex quidam luminosus exsurgere coepit; hic vero paulatim crescens trigonam figuram prae se ferebat, eratque omnino adhuc a luminosa facie revulsus ac separatus; mox circa illum tres aliae cuspides exiguae lucere coeperunt; donec, Luna iam occasum versus tendente, trigona illa figura, extensa et amplior iam facta, cum reliqua luminosa parte nectebatur, ac instar ingentis promontorii, a tribus iam commemoratis lucidis verticibus adhuc obsessa, in tenebrosum sinum erumpebat. In extremis quoque cornibus, tam superiori, quam inferiori, splendida quaedam puncta, et omnino a reliquo lumine disiuncta, emergebant, veluti in eadem figura depictum cernitur. Eratque magna obscurarum macularum vis in utroque cornu, maxime autem in inferiori: quarum maiores et obscuriores apparent, quae termino lucis et tenebrarum viciniores sunt; remotiores vero obscurae minus ac magis dilutae. Semper tamen, ut supra quoque meminimus, nigricans ipsius maculae pars irradiationis solaris locum respicit, splendidior vero limbus nigricantem maculam in parte Soli aversa, et Lunae tenebrosam plagam respiciente, circundat. Haec lunaris superficies, qua maculis, instar pavonis caudae caeruleis oculis, distinguitur, vitreis illis vasculis redditur consimilis, quae adhuc calentia in frigidam immissa, perfractam undosamque superficiem acquirunt, ex quo a vulgo glaciales Cyathi nuncupantur.',
        zh: '在此期间，有一桩我在月球趋近上弦时观测到的值得留意之事，我绝不愿略而不谈，上文所置同一幅插图亦呈现了它的形貌：在靠近下角之处，有一道巨大的幽暗海湾深入亮部；当我长时间凝视这道暗湾、见其通体漆黑之后，过了约莫两个小时，在洼地中心稍偏下方，终于有一座明亮的峰顶开始浮现；它渐渐长大，呈现出三角形轮廓，但彼时仍同明亮月面完全割裂分离；未几，在它周围又有另外三座小尖峰开始发亮；直至月球向西方地平线低垂时，那个三角形亮块已延展扩大，同其余亮部衔接起来，宛如一座巨大的岬角，在方才提到的三座明亮峰顶簇拥之下突入幽暗的海湾之中。在上下两角的尽端，也各自浮现出若干同其余亮区完全断开的璀璨光点，一如同一幅图画中所见。两角之内皆有大批幽暗斑点，尤以下角最为密集：其中凡离光暗分界线较近的，显得较大而较黑；离得较远的，则没那么黑，显得较为浅淡。不过，诚如我们在上文亦曾提及的，斑点自身发黑的一侧始终朝向太阳照射的方位，而更璀璨的亮缘则在背向太阳、朝向月球暗区的一侧环绕着黑斑。这片点缀着斑斑点点、[宛如孔雀尾羽上的蔚蓝眼斑，又好似趁灼热时浸入冷水而获得碎裂波纹表面的玻璃杯——俗人由此称之为冰裂纹杯]{#g-sn-s2-03}——的月球表面，呈现出与之极其相似的肌理。',
        glosses: [
          {
            id: 'g-sn-s2-03',
            anchor:
              '宛如孔雀尾羽上的蔚蓝眼斑，又好似趁灼热时浸入冷水而获得碎裂波纹表面的玻璃杯——俗人由此称之为冰裂纹杯',
            content:
              '拉丁原文作 glaciales Cyathi（意大利语 vetro a ghiaccio，「冰纹玻璃杯」），系十六世纪威尼斯穆拉诺岛玻璃工坊独创的名贵吹制工艺：工匠将吹管末端滚烫的玻璃泡瞬间浸入冰水，令外层骤冷龟裂成细密如碎冰的网状纹理，再迅速回炉复热抚平裂口并吹制成型。常年往返帕多瓦与威尼斯的伽利略就地取譬，借这种表面满布凹凸折光冰纹的器皿形容上弦月南部高地密集重叠的环形山群。'
          }
        ]
      },
      {
        id: 'sn-s2-p05',
        type: 'paragraph',
        num: '§ 05',
        original:
          'Verum magnae eiusdem Lunae maculae consimili modo interruptae atque lacunis et eminentiis confertae minime cernuntur, sed magis aequabiles et uniformes; solummodo enim clarioribus nonnullis areolis hac illac scatent; adeo ut, si quis veterem Pythagoreorum sententiam exsuscitare velit, Lunam scilicet esse quasi Tellurem alteram, eius pars lucidior terrenam superficiem, obscurior vero aqueam, magis congrue repraesentet: mihi autem dubium fuit nunquam, terrestris globi a longe conspecti atque a radiis solaribus perfusi, terream superficiem clariorem, obscuriorem vero aqueam, sese in conspectum daturam. Depressiores insuper in Luna cernuntur magnae maculae, quam clariores plagae; in illa enim, tam crescente quam decrescente, semper in lucis tenebrarumque confinio prominent hinc inde circa ipsas magnas maculas contermini partis lucidioris, veluti in describendis figuris observavimus: neque depressiores tantummodo sunt dictarum macularum termini, sed aequabiliores, nec rugis aut asperitatibus interrupti. Lucidior vero pars maxime prope maculas eminet; adeo ut, et ante quadraturam primam, et in ipsa ferme secunda, circa maculam quandam, superiorem, borealem nempe, Lunae plagam occupantem, valde attollantur, tam supra illam quam infra, ingentes quaedam eminentiae, veluti appositae prae se ferunt delineationes.\nHaec eadem macula ante secundam quadraturam nigrioribus quibusdam terminis circumvallata conspicitur; qui, tanquam altissima montium iuga, ex parte Soli aversa obscuriores apparent, qua vero Solem respiciunt lucidiores extant: cuius oppositum in cavitatibus [ Icon II Lunae ] accidit; quarum pars Soli aversa splendens apparet, obscura vero ac umbrosa quae ex parte Solis sita est. Imminuta deinde luminosa superficie, cum primum tota ferme dicta macula tenebris est obducta, clariora montium dorsa eminenter tenebras scandunt. Hanc duplicem apparentiam sequentes figurae commonstrant. [ Icones III & IV Lunae ]',
        zh: '然而，同一轮月球上的那些大斑块，看起来却绝不像这样支离破碎、密布洼坑与凸峰，而是更加平坦均匀，只是零星散布着几小块较明亮的浅斑；因此，[倘若有人想要重振毕达哥拉斯学派的古老学说，即认为月球仿佛是另一颗地球]{#g-sn-s2-04}，那么它较明亮的部分便更恰当地对应着陆地表面，较幽暗的部分则对应着水域表面；而在我看来，从远处眺望一颗洒满阳光的地球球体时，陆地表面必将显得更为明亮，水域表面则显得较为幽暗，这一点我从来深信不疑。此外，在月面上还可以看到，大斑块的地势低于较明亮的区域；因为无论在盈月还是亏月期间，每当光暗分界线经过这些大斑块四周时，毗邻的较亮区域边缘总是从两侧凸出，一如我们在绘制附图时所观察到的那样；而且上述大斑块的边缘不仅地势较低，也更为平缓，不被褶皱或崎岖悬崖所打断。较明亮的部分则在紧靠大斑块处高高耸起；以至于无论在上弦之前，还是几乎正当下弦之际，围绕占据月球上方（亦即北方）区域的一块大斑块，在其上下两侧皆有若干宏伟的高岭巍然矗立，恰如所附诸图所示。\n同一块大斑块在下弦之前看起来被若干更黝黑的边缘如壁垒般环抱；这些边缘宛如极高的山脉，在背向太阳的一侧显得较为幽暗，在朝向太阳的一侧则显得格外明亮——这与洼坑中的情形恰恰相反：洼坑背向太阳的一侧显得璀璨发亮，位于太阳一侧的部分则幽暗背阴。随后，随着受光月面缩减，一旦上述大斑块几乎整片被黑暗笼罩，较明亮的山脊便高高凌驾于黑暗之上。下面几幅插图共同展示了这双重现象。',
        glosses: [
          {
            id: 'g-sn-s2-04',
            anchor: '倘若有人想要重振毕达哥拉斯学派的古老学说，即认为月球仿佛是另一颗地球',
            content:
              '据伪普鲁塔克《哲学家意见集成》（Placita philosophorum II.30）与普鲁塔克《论月面浮现之像》（De facie quae in orbe lunae apparet），古希腊毕达哥拉斯学派学者菲洛劳斯（Philolaus）等人曾主张月球是「类地天体」（ἀντίχθων / 地球的对应体），其上有山川陆地。伽利略关于「水体漫反射率低于粗糙陆地」（除镜面反光角度外平静海面吸收大部分入射阳光而显暗，粗糙土壤岩层向四面漫射阳光而显亮）的光学直觉完全正确；尽管他后来在《关于托勒密和哥白尼两大世界体系的对话》（一六三二年）中谨慎撤回了月球真有液态海洋的猜测，但十七世纪中叶朗格伦（Michael van Langren）与里乔利（Giovanni Battista Riccioli）绘制月面图时仍沿用此比拟，将月面玄武岩暗色平原命名为「海」（Mare，如本段所绘北侧被亚平宁山脉与阿尔卑斯山脉环抱的「雨海」Mare Imbrium），沿用至今。'
          }
        ]
      },
      {
        id: 'sn-s2-p06',
        type: 'paragraph',
        num: '§ 06',
        original:
          'Unum quoque oblivioni minime tradam, quod non nisi aliqua cum admiratione adnotavi: medium quasi Lunae locum a cavitate quadam occupatum esse reliquis omnibus maiori, ac figura perfectae rotunditatis; hanc prope quadraturas ambas conspexi, eandemque in secundis supra positis figuris quantum licuit imitatus sum: eundem, quo ad obumbrationem et illuminationem, facit aspectum, ac faceret in terris regio consimilis Bohemiae, si montibus altissimis, inque peripheriam perfecti circuli dispositis, occluderetur undique; in Luna enim adeo elatis iugis vallatur, ut extrema ora tenebrosae Lunae parti contermina, Solis lumine perfusa spectetur, priusquam lucis umbraeque terminus ad mediam ipsius figurae diametrum pertingat. De more autem reliquarum macularum, umbrosa illius pars Solem respicit, luminosa vero versus tenebras Lunae constituitur; quod tertio libenter observandum admoneo, tanquam firmissimum argumentum asperitatum inaequalitatumque per totam Lunae clariorem plagam dispersarum: quarum quidem macularum semper nigriores sunt illae, quae confinio luminis et tenebrarum conterminae sunt, remotiores vero tum minores, tum obscurae minus apparent; ita ut tandem, cum Luna in oppositione totum impleverit orbem, modico admodumque tenui discrimine cavitatum opacitas ab eminentiarum candore discrepet.',
        zh: '还有一桩令我不无惊叹地记录下来的现象，我也绝不愿付诸遗忘：月球近乎正中的位置被一座比其余所有洼坑都更大的圆形洼地占据着，其形状浑圆无瑕；我在上下弦前后皆曾观测到它，并在上文第二组附图中尽我所能摹绘了它的形貌：就阴影投射与受光照明而论，它所呈现的外观，恰如[大地上波希米亚那样的地域——倘若它四面八方都被极高的群山排成正圆周界团团围拢的话]{#g-sn-s2-05}；盖因在月球上，它被如此高耸的山脊环筑围绕，以至于在光暗分界线尚未抵达这座圆形洼地直径一半之前，它紧靠月球暗部的最外侧边缘便已被阳光洒满而清晰可见。依照其余斑点的通例，它背阴的部分朝向太阳，受光的部分则朝向月球的暗区；我之所以乐意第三次提醒读者留意这一点，是因为它构成了证明崎岖高低遍布整个月球较亮区域的最坚实论据：在这些斑点中，紧挨光暗交界的总是显得更黑，离得较远的则显得既小又淡；以至于最后当月球在望日盈满整轮圆盘时，洼谷的幽暗与高地的洁白之间，便只剩下极其微弱而纤细的色差了。',
        glosses: [
          {
            id: 'g-sn-s2-05',
            anchor: '大地上波希米亚那样的地域——倘若它四面八方都被极高的群山排成正圆周界团团围拢的话',
            content:
              '十六至十七世纪欧洲地图（如奥特柳斯《地球大观》与墨卡托地图集）常将波希米亚王国（今捷克西部盆地）绘成由苏台德山脉、厄尔士山脉与波希米亚森林四面合围的近圆形山环盆地（开普勒一六〇九年在布拉格亦曾以波希米亚盆地类比月面地形）。据法瓦罗国家版校勘记，伽利略亲笔初稿此处原本写作「好似大地上无比宏阔的圆形剧场，或者更确切地说，类似波希米亚的地域」（vastissimum amphytheatrum seu potius regio consimilis Bohemiae），定稿时删去人工建筑意象而保留自然地理类比。现代月面学考证认为，伽利略所指原型系月盘中央偏南的阿尔巴塔尼环形山（Albategnius，直径约 131 公里，或与其毗邻的托勒密环形山），并在铜版画中特意夸大了其相对比例以凸显环形山受光几何效应。'
          }
        ]
      },
      {
        id: 'sn-s2-p07',
        type: 'paragraph',
        num: '§ 07',
        original:
          'Haec, quae recensuimus, in clarioribus Lunae regionibus observantur; verum in magnis maculis talis non conspicitur lacunarum eminentiarumque differentia, qualem necessario constituere cogimur in parte lucidiori, ob mutationem figurarum ex alia atque alia illuminatione radiorum Solis, prout multiplici positu Lunam respicit: at in magnis maculis existunt quidem areolae nonnullae subobscuriores, veluti in figuris adnotavimus; attamen istae eundem semper faciunt aspectum, neque intenditur earum opacitas aut remittitur, sed exiguo admodum discrimine paululum obscuriores modo apparent, modo vero clariores, si magis aut minus obliqui in eas radii solares incidant: iunguntur praeterea cum proximis macularum partibus leni quadam copula, confinia miscentes ac confundentes: secus vero in maculis accidit splendidiorem Lunae superficiem occupantibus; quasi enim abruptae rupes asperis et angulatis scopulis consitae, umbrarum luminumque rudibus discriminibus ad lineam disterminantur.\nSpectantur insuper intra easdem magnas maculas areolae quaedam, aliae clariores, imo nonnullae lucidissimae: verum, et harum et obscuriorum, idem semper est aspectus, nulla aut figurarum aut lucis aut opacitatis mutatio; adeo ut compertum indubitatumque sit, apparere illas ob veram partium dissimilaritatem, non autem ob inaequalitates tantum in figuris earundem partium, umbras ex variis Solis illuminationibus diversimode moventibus: quod bene contingit de maculis aliis minoribus clariorem Lunae partem occupantibus; in dies enim permutantur, augentur, imminuuntur, abolentur, quippe quae ab umbris tantum eminentiarum ortum ducunt.',
        zh: '以上我们所列举的现象，皆见于月球较明亮的区域；然而在大斑块之中，却看不到我们在较亮区域因太阳以种种不同方位照射月球、引发图形随光照变化而不得不认定的那种洼坑与高峰的落差。诚然，在大斑块内部也存在若干略微更暗的小区块，一如我们在附图中所标示的；但它们始终保持同一种外貌，其暗度既不加深也不减退，仅随太阳光线以更斜或更正的角度射入而带着极微小的差别，时而略暗少许，时而略亮少许；此外，它们与毗邻的斑块部分以柔和的过渡相衔接，彼此边界交融浑化。占据月球较璀璨表面的那些细斑则全然不同：它们犹如陡峭险峻的悬崖、布满粗砺棱角的巉岩，在浓影与强光的生硬反差下界线分明。\n再者，在同一批大斑块内部，还能看到另外一些较亮的小区块，甚至有几处极为璀璨夺目；然而，无论这些亮区还是那些暗区，外貌都始终如一，既无形状变化，也无光亮或阴影的增减；由此可以确凿无疑地断定，它们的显现乃是源于各部分质地的真实差异，而绝非仅仅源于同一部分地形起伏在不同阳光照射下带动阴影变幻所致——后面这种情形恰恰发生在占据月球较亮区域的其余细小斑点身上：它们日复一日地变形、增大、缩小乃至彻底消失，只因它们纯粹是由高耸地形投下的阴影所产生的。'
      },
      {
        id: 'sn-s2-p08',
        type: 'paragraph',
        num: '§ 08',
        original:
          'Verum magna hic dubitatione complures affici sentio, adeoque gravi difficultate occupari, ut iam explicatam et tot apparentiis confirmatam conclusionem in dubium revocare cogantur. Si enim pars illa lunaris superficiei, quae splendidius solares radios retorquet, anfractibus, tumoribus scilicet et lacunis innumeris, est repleta, cur in crescenti Luna extrema circumferentia, quae occasum versus spectat, in decrescenti vero altera semicircumferentia orientalis, ac in plenilunio tota peripheria, non inaequabilis, aspera et sinuosa, verum exacte rotunda et circinata nullisque tumoribus aut cavitatibus corrosa, conspicitur? atque ex eo maxime, quia totus integer limbus ex clariori Lunae substantia constat, quam tuberosam lacunosamque totam esse diximus; magnarum enim macularum nulla ad extremum usque perimetrum exporrigitur, sed omnes procul ab orbita aggregatae cernuntur. Huius apparentiae, ansam tam graviter dubitandi praebentis, duplicem causam, ac proinde duplicem dubitationis solutionem, in medium affero. Primo enim, si tumores et cavitates in corpore lunari secundum unicam tantum circuli peripheriam, hemisphaerium nobis conspicuum terminantem, protenderentur, tunc posset quidem, imo deberet, Luna sub specie quasi dentatae rotae sese nobis ostendere, tuberoso, nempe, ac sinuoso ambitu terminata: at si non una tantum eminentiarum series, iuxta unicam solummodo circumferentiam dispositarum, sed permulti montium ordines cum suis lacunis et anfractibus circa extremum Lunae ambitum coordinati fuerint, iique non modo in hemisphaerio apparente, sed in averso etiam (prope tamen hemisphaeriorum finitorem), tunc oculus a longe prospiciens eminentiarum cavitatumque discrimina depraehendere minime poterit; intercapedines enim montium, in eodem circulo seu in eadem serie dispositorum, obiectu aliarum eminentiarum in aliis atque aliis ordinibus constitutarum occultantur; idque maxime, si oculus aspicientis in eadem recta cum dictarum eminentiarum verticibus fuerit locatus. Sic in terra multorum ac frequentium montium iuga secundum planam superficiem disposita apparent, si prospiciens procul fuerit et in pari altitudine constitutus. Sic aestuosi pelagi sublimes undarum vertices secundum idem planum videntur extensi, quamvis inter fluctus maxima voraginum et lacunarum sit frequentia, adeoque profundarum, ut sublimium navigiorum non modo carinae, verum etiam puppes, mali ac vela inter illas abscondantur. Quia igitur in ipsa Luna et circa eius perimetrum multiplex est eminentiarum et cavitatum coordinatio, et oculus e longinquo spectans in eodem fere plano cum verticibus illarum locatur; nemini mirum esse debet, quod radio visorio illos abradenti, secundum aequabilem lineam minimeque anfractuosam sese offerant.',
        zh: '不过，我料想此处定会有不少人陷入深深的狐疑，被一个棘手的难题所困扰，以致不得不对这一业已阐明且有如此众多现象佐证的结论重起疑窦。因为，倘若月球表面那片更强烈地反射阳光的区域果真布满曲折——亦即无数隆起与洼坑——那么为何在盈月时朝向西方的外缘弧线、在亏月时另一侧朝向东方的半圆弧线，以及在满月时的整圈外周，看起来却并非参差不齐、粗糙蜿蜒，而是浑圆周正、宛如圆规画成，丝毫不见隆起或洼坑侵蚀的缺口呢？尤其令人不解的是，整圈外缘全都由月球较明亮的质地构成，而我们方才说过这片质地通体隆突坑洼；毕竟没有任何一块大斑块一直延伸到最外圈周界，它们全都聚拢在远离边缘的内侧。针对这一足以引发如此严重怀疑的现象，我提出两项成因，从而也就给出两重释疑之道。第一，假使月球球体上的隆起与洼坑仅仅沿着界定我们可见半球的唯一一圈圆周排列延伸，那么月球诚然可能、甚至理当呈现出仿佛**齿轮**一般的外貌，由一条凹凸蜿蜒的边缘界定；然而，倘若并非只有沿着单一圆周排列的一列高峰，而是有许许多多排山脉连同各自的深谷与曲折环绕月球最外缘层叠排布——不仅分布在正面可见半球，也分布在背面半球靠近两半球交界圈一带——那么从远处眺望的眼睛便绝不可能察觉高峰与低谷的落差；因为排在同一圆周或同一列上的群山之间的山口空隙，会被坐落在前后其他各列上的另一些山峰遮挡掩盖，当观察者的眼睛与上述群峰顶点几乎处在同一条直线上时更是如此。正因如此，在地球上，倘若远眺者身处远方且立于同等高度，重峦叠嶂的群山脊线看起来便如同排成一道平直的表面；正因如此，汹涌大海上高耸的浪峰看起来也如同铺展在同一平面上，尽管波涛之间遍布着无数深渊与浪谷，深得不仅能将高大海船的龙骨、甚至连船尾、桅杆与风帆都吞没隐匿于其中。既然在月球本身及其外周附近存在着多重层叠排布的高峰与洼谷，而远望的眼睛又几乎与群峰顶点处在同一平面内，那么当视线擦过峰顶时，它们呈现出一条平滑而绝无曲折缺口的弧线，便不值得任何人大惊小怪了。'
      },
      {
        id: 'sn-s2-p09',
        type: 'paragraph',
        num: '§ 09',
        original:
          'Huic rationi altera subnecti potest: quod nempe circa lunare corpus est, veluti circa Terram, orbis quidam densioris substantiae reliquo aethere, qui Solis irradiationem concipere atque reflectere valet, quamvis tanta non sit opacitate praeditus, ut visui (praesertim dum illuminatus non fuerit) transitum inhibere valeat. Orbis iste a radiis solaribus illuminatus lunare corpus sub maioris sphaerae speciem reddit repraesentatque; essetque potis aciem nostram terminare, quominus ad Lunae soliditatem pertingeret, si crassities eius foret profundior: atque profundior quidem est circa Lunae peripheriam; profundior, inquam, non absolute, sed ad radios nostros, oblique illum secantes, relatus: ac proinde visum nostrum inhibere potest, ac praesertim luminosus existens, Lunaeque peripheriam Soli expositam obtegere. Quod clarius in apposita figura intelligitur, [Figura geometrica orbis vaporosi Lunae ABC–DEG] in qua lunare corpus ABC ab orbe vaporoso circundatur DEG; oculus vero ex F ad partes intermedias Lunae, ut ad A, pertingit per vapores DA minus profundos: at versus extremam oram, profundiorum copia vaporum EB aspectum nostrum suo termino praecludit. Signum huius est, quod pars Lunae lumine perfusa amplioris circumferentiae apparet, quam reliquum orbis tenebrosi: atque hanc eandem causam quispiam forte rationabilem existimabit, cur maiores Lunae maculae nulla ex parte ad extremum usque ambitum protendi conspiciantur, cum tamen opinabile sit nonnullas etiam circa illum reperiri; inconspicuas tamen esse credibile videtur ex eo, quod sub profundiori ac lucidiori vaporum copia abscondantur.',
        zh: '在这一理由之外，还可以附加上第二项理由：[正如地球周围一样，月球躯体周围也环绕着一层质地比其余以太更为稠密的球层]{#g-sn-s2-06}，它能够承接并反射太阳的照射，尽管其不透明程度尚不足以（尤其在未受光照时）阻断视线的穿透。这圈球层被太阳光线照亮后，便使月球躯体呈现出更大球体的外观；假使它的厚度更深一些，甚至足以截断我们的视线，使之无法触及月球的固体表面。而在靠近月球外周边缘处，它的确更深——我说更深，并非就绝对厚度而言，而是相对于斜穿它的我们视线而言；因此，它（尤其在自身发亮时）能够阻拦我们的视线，遮掩住月球朝向太阳的外缘。这一道理在附图中理解起来更为清晰：图中月球实体 ABC 被蒸气球层 DEG 环绕；眼睛从 F 望向月球中部区域（如 A 处）时，穿过的是较浅薄的蒸气层 DA；但望向最外侧边缘时，更深厚的蒸气层 EB 便以其外边界截住了我们的视线。此事的明证在于：月球沐浴光芒的部分，看起来比其余暗盘部分具有更大的圆周半径；或许有人还会认为，同一项原因也合理地解释了为何月球上的大斑块在任何一侧都看不到一直延伸至最外缘——尽管按理推测边缘附近也应存在若干大斑块，但可信的是，由于隐没在更深厚、更明亮的蒸气层之下，它们便不为人目所见了。',
        glosses: [
          {
            id: 'g-sn-s2-06',
            anchor: '正如地球周围一样，月球躯体周围也环绕着一层质地比其余以太更为稠密的球层',
            content:
              '初版此处嵌有同心圆切线几何木刻图（内圆 ABC 为月球实体，外层同心圆环 DEG 为假想的「蒸气球层」，图下方远点 F 引正中垂直视线 FA 穿过薄层 DA，另引斜切视线 FEB 相切于边缘厚层 EB）。伽利略在此观察到的「月盘亮部圆周显得比暗部圆周更大」（俗称「新月怀抱旧月」）确系真实视觉现象，但其成因并非月球存在浓密大气层（十七世纪后期天文学家借恒星掩星无折射现象已证实月球近乎真空，且高倍率望远镜下月轮边缘实有山脊起伏凹凸），而是强光区在视网膜与透镜系统中向暗背景扩散的生理与光学「光渗效应」（irradiation）——伽利略本人在下一节分析恒星视径虚增时，恰恰独立发现了同一光渗原理。'
          }
        ]
      },
      {
        id: 'sn-s2-p10',
        type: 'paragraph',
        num: '§ 10',
        original:
          'Esse igitur clariorem Lunae superficiem tumoribus atque lacunis undiquaque conspersam, ex iam explicatis apparitionibus satis apertum esse reor. Superest ut de illorum magnitudinibus dicamus, demonstrantes terrestres asperitates lunaribus esse longe minores; minores, inquam, etiam absolute loquendo, non autem in ratione tantum ad suorum globorum magnitudines: idque sic manifeste declaratur.\nCum saepius a me observatum sit in aliis atque aliis Lunae ad Solem constitutionibus, vertices nonnullos intra tenebrosam Lunae partem, licet a termino lucis satis remotos, lumine perfusos apparere, conferens eorum distantiam ad integram Lunae diametrum, cognovi, interstitium hoc vigesimam interdum diametri partem superare. [Figura geometrica altitudinis montium Lunae CAF–GCD] Quo sumpto, intelligatur lunaris globus, cuius maximus circulus CAF, centrum vero E, dimetiens CF, qui ad Terrae diametrum est ut duo ad septem; cumque terrestris diameter, secundum exactiores observationes, milliaria Italica 7000 contineat, erit CF 2000, CE vero 1000; pars autem vigesima totius CF, milliaria 100. Sit modo CF dimetiens circuli maximi, luminosam Lunae partem ab obscura dividentis (ob maximam enim elongationem Solis a Luna hic circulus a maximo sensibiliter non differt), ac secundum vigesimam illius partem distet A a puncto C, et protrahatur semidiameter EA, qui extensus occurrat cum contingente GCD (quae radium illuminantem repraesentat) in puncto D. Erit igitur arcus CA, seu recta CD, 100 qualium CE est 1000, et aggregatum quadratorum DC, CE 1010000, cui quadratum DE aequale est: tota igitur ED erit plusquam 1004, et AD plusquam 4 qualium CE fuit 1000. Sublimitas igitur AD in Luna, quae verticem quempiam ad usque Solis radium GCD elatum, et a termino C per distantiam CD remotum, designat, eminentior est milliaribus Italicis 4. Verum in Tellure nulli extant montes, qui vix ad unius milliarii altitudinem perpendicularem accedant; manifestum igitur relinquitur, lunares eminentias terrestribus esse sublimiores.',
        zh: '由此看来，月球较明亮的表面四处遍布隆起与洼坑，这一事实由上文业已阐明的诸般现象想来已足够昭然。接下来我们还须论述它们的尺度大小，证明地球表面的崎岖高度远小于月球上的山峰——我说更小，乃是就绝对高度而言，而绝非仅仅就其与各自球体大小的比例而言；此理可作如下明白晓畅的证明。\n由于我在月球相对于太阳的种种不同位相中屡次观测到，月球暗部之内有一些峰顶尽管距光暗分界线颇为遥远，却已沐浴在阳光之中；我将它们的距离与整条月球直径相比对，得知这一间距有时超过月球直径的二十分之一。既得此数，试设想月球球体，其大圆为 CAF，球心为 E，直径为 CF，它与地球直径之比为二比七；既然[地球直径按较精确的观测包含七千意大利里，故 CF 为两千意大利里，CE 为一千意大利里]{#g-sn-s2-07}，而整条 CF 的二十分之一即为一百意大利里。现设 CF 为划分月球亮部与暗部的大圆直径（盖因太阳距月球极其遥远，此分界圆与大圆并无感官可辨的差别），设点 A 距点 C 为直径的二十分之一，连接半径 EA 并向外延长，与代表照射阳光的切线 GCD 交于点 D。于是，当半径 CE 取为一千单位时，弧 CA 或直线段 CD 即为一百，而 DC 与 CE 两者的平方和为一〇一〇〇〇〇，等于 DE 的平方；故整条 ED 大于一千零四，而 AD 则大于四——以 CE 为一千单位计。因此，月球上标示某座高耸至触及太阳光线 GCD、且距分界点 C 达 CD 之远的峰顶高度 AD，超过了四意大利里。然而在地球上，没有任何山岳的垂直高度能勉强达到一意大利里；由此显然可知，月球上的山峰比地球上的山岳更加高峻。',
        glosses: [
          {
            id: 'g-sn-s2-07',
            anchor: '地球直径按较精确的观测包含七千意大利里，故 CF 为两千意大利里，CE 为一千意大利里',
            content:
              '初版此处嵌有直角三角形切线几何木刻图：圆 CAF 以 E 为圆心，竖直直径为 CF，过上端点 C 作水平切线 GCD 代表擦过晨昏圈的太阳光线，自圆心 E 向右上引割线 EAD 交圆周于 A、交切线于峰顶 D，构成直角三角形 ECD（∠ECD = 90°）。由毕达哥拉斯定理 DE = √(CE² + CD²) = √(1000² + 100²) = √1010000 ≈ 1004.99，故山高 AD = DE − EA ≈ 4.99 意大利里（文中保守称「超过四意大利里」）。文艺复兴时期一意大利里（milliarium Italicum，合罗马千步）约合 1.48 至 1.78 公里，四意大利里即约 6 至 7 公里（现代激光测高证实月球亚平宁山脉最高峰惠更斯山相对基底高约 5.5 公里，全月最高落差逾 8 公里；伽利略虽略微高估了暗区亮峰距晨昏线的视距比 1/20，却在人类历史上首次对地外天体地形完成了定量几何测算）。至于当时欧洲地理学界（如克拉维乌斯《萨克罗博斯科天球论注》）测算的阿尔卑斯山等已知陆地高峰垂直海拔，普遍认为不超过一至二意大利里。'
          }
        ]
      },
      {
        id: 'sn-s2-p11',
        type: 'paragraph',
        num: '§ 11',
        original:
          'Lubet hoc loco alterius cuiusdam lunaris apparitionis, admiratione dignae, causam assignare; quae licet a nobis non recens, sed multis abhinc annis, observata sit, nonnullisque familiaribus amicis et discipulis ostensa, explicata atque per causam declarata, quia tamen eius observatio Perspicilli ope facilior redditur atque evidentior, non incongrue hoc in loco reponendam esse duxi; idque etiam tum maxime, ut cognatio atque similitudo inter Lunam atque Tellurem clarius appareat.\nDum Luna, tum ante tum etiam post coniunctionem, non procul a Sole reperitur, non modo ipsius globus, ex parte qua lucentibus cornibus exornatur, visui nostro spectandum sese offert; verum etiam tenuis quaedam sublucens peripheria tenebrosae partis, Soli nempe aversae, orbitam delineare, atque ab ipsius aetheris obscuriori campo seiungere, videtur. Verum, si exactiori inspectione rem consideremus, videbimus, non tantum extremum tenebrosae partis limbum incerta quadam claritate lucentem, sed integram Lunae faciem, illam nempe quae Solis fulgorem nondum sentit, lumine quodam, nec exiguo, albicare: apparet tamen primo intuitu subtilis tantummodo circumferentia lucens propter obscuriores Caeli partes sibi conterminas; reliqua vero superficies obscurior e contra videtur ob fulgentium cornuum, aciem nostram obtenebrantium, contactum. Verum si quis talem sibi eligat situm, ut a tecto vel camino aut aliquo alio obice inter visum et Lunam (sed procul ab oculo posito) cornua ipsa lucentia occultentur, pars vero reliqua lunaris globi aspectui nostro exposita relinquatur; tunc luce non exigua hanc quoque Lunae plagam, licet solari lumine destitutam, splendere depraehendet, idque potissimum, si iam nocturnus horror ob Solis absentiam increverit; in campo enim obscuriori eadem lux clarior apparet.',
        zh: '在此处，我还乐意指明另一桩值得惊叹的月球现象的成因；这一现象虽非我新近才发现，而是早在许多年前便已观测到，并曾向若干挚友与门生展示、剖析并阐明其原因，但由于借助窥镜能使对它的观测变得更为轻易、更为昭然，我便认为将其安放在此处绝无不当——尤其更是为了让月球与地球之间的亲缘与相似性愈发清晰地显现出来。\n每当月球在合朔之前或合朔之后位于离太阳不远处时，它的球体不仅在饰有璀璨双角的那一侧呈现在我们眼前，而且其暗部（亦即背向太阳的一侧）似乎也有一圈纤细而微亮的外周勾勒出圆盘轮廓，将它与更幽暗的以太天幕区分开来。然而，倘若我们以更精细的审视考察此事，便会看见不仅是暗部最外圈边缘闪着一层隐约的光亮，而是整张尚未沐浴太阳光辉的月球正面，都泛着一层绝非微弱的淡淡白光；之所以乍看之下只觉得有一圈纤细的亮边，是因为它紧挨着四周更幽暗的天空背景，而其余暗面之所以反倒显得较暗，则是因为紧贴着耀眼夺目的新月双角，致使我们的目力受到炫蔽。但倘若有人为自己挑选这样一个观测位置，利用屋顶、烟囱或置于视线与月球之间（但须离眼睛有一定距离）的任何其他遮挡物，刚好挡住那对耀眼的亮角，而让月球球体的其余部分依然暴露在我们视野中，届时他便会发觉，这片虽无阳光照射的月面也正闪耀着绝非微弱的光辉——倘若因太阳隐没已久、夜色深沉浓重，这层光亮在更幽暗的天幕衬托下便显得愈发分明。'
      },
      {
        id: 'sn-s2-p12',
        type: 'paragraph',
        num: '§ 12',
        original:
          'Compertum insuper est, hanc secundam (ut ita dicam) Lunae claritatem maiorem esse, quo ipsa minus a Sole distiterit: per elongationem enim ab eo remittitur magis magisque, adeo ut post primam quadraturam, et ante secundam, debilis et admodum incerta comperiatur, licet in obscuriori Caelo spectetur; cum tamen in sextili et minori elongatione, quamvis inter crepuscula, mirum in modum fulgeat; fulgeat, inquam, adeo, ut ope exacti Perspicilli magnae maculae in ipsa distinguantur. Hic mirabilis fulgor non modicam philosophantibus intulit admirationem; pro cuius causa afferenda alii alia in medium protulerunt. Quidam enim proprium esse ac naturalem ipsiusmet Lunae splendorem dixerunt; alii, a Venere illi esse impertitum; alii, a stellis omnibus; alii, a Sole, qui radiis suis profundam Lunae soliditatem permeet. Verum huiuscemodi prolata exiguo labore coarguuntur, ac falsitatis evincuntur. Si enim aut proprium esset aut a Stellis collatum eiusmodi lumen, illud maxime in Eclipsibus retineret ostenderetque, cum in obscurissimo Caelo destituatur; quod tamen adversatur experientiae: fulgor enim, qui in deliquiis apparet in Luna, longe minor est, subrufus ac quasi aeneus; hic vero clarior et candidior. Est insuper ille mutabilis ac loco mobilis; vagatur enim per Lunae faciem, adeo ut pars illa, quae peripheriae circuli umbrae terrestris propinquior est, clarior, reliqua vero obscurior, semper spectetur: ex quo omni procul dubio id accidere intelligimus, ex radiorum Solarium vicinitate tangentium crassiorem quandam regionem, quae Lunam orbiculariter ambit; ex quo contactu Aurora quaedam in vicinas Lunae plagas effunditur, non secus ac in terris, tum mane, tum vesperi, crepusculinum spargitur lumen: qua de re fusius in libro De systemate mundi pertractabimus. Asserere autem a Venere impertitam eiusmodi lucem, puerile adeo est, ut responsione sit indignum. Quis enim adeo inscius erit, ut non intelligat, circa coniunctionem et intra sextilem aspectum partem Lunae Soli aversam, ut a Venere spectetur, omnino esse impossibile? Esse autem ex Sole, qui suo lumine profundam Lunae soliditatem penetret atque perfundat, pariter est inopinabile: numquam enim imminueretur, cum semper hemisphaerium Lunae a Sole sit illustratum, tempore lunarium Eclipsium excepto; diminuitur tamen dum Luna ad quadraturam properat, et omnino etiam hebetatur, dum quadraturam superaverit.',
        zh: '此外还查明，[月球的这第二重光辉]{#g-sn-s2-08}（不妨如此称之）在月球离太阳愈近时便愈强；随着月球距角增大，它便愈发衰减，以至于过了上弦之后、未及下弦之前，纵使在更幽暗的夜空中观看，也显得微弱而渺茫难辨；然而在六十度距角以内及更小距角处，哪怕置身暮色晨曦之中，它却闪耀得奇异夺目——我说闪耀得如此明亮，甚至借精密窥镜之助，连它上面的大斑块都能分辨出来。这奇妙的辉光在研究自然哲学的人士当中激起了不小的惊叹；为了解释其成因，众人各执一词。有人说这是月球自身固有而天然的光辉；有人说这是金星赋予它的；有人说是众星共同赋予的；还有人说是太阳以其光线穿透月球深厚实体所致。然而，诸如此类的说法只需略费唇舌便能驳倒，证其荒谬。因为，假使这种光亮是月球固有的，或是由群星汇集赋予的，那么当月食发生、月球置身最幽暗的天幕中失去阳光时，它理应最充分地保留并展现这层光亮；但这却与经验相悖：月食时月面上显现的微光要微弱得多，泛着暗红而近乎古铜的色泽，而眼下这种光辉却更明亮、更洁白。况且月食时的红光变幻不定、位置游移，在月面上往来流转，致使靠近地球本影圆周边缘的那一部分总是显得较亮，其余部分则总是较暗：由此我们毫无疑义地知晓，月食红光乃是由于太阳光线擦过环绕地球四周的某圈较稠密大气区域，由此接触而将一层仿佛曙光般的霞彩洒向邻近月面，恰如地球上清晨与傍晚散射出曙暮光一般——关于此事，[我们将在《论世界体系》一书中作更详尽的探讨]{#g-sn-s2-09}。至于断言这种灰光是由金星赋予的，则幼稚得根本不值一驳：试问谁会无知到不明白，在合朔前后及六十度距角以内，月球背向太阳的那一面根本不可能被金星看见呢？而认为它源自太阳以其光芒穿透并浸润月球深厚半透明实体，也同样难以置信：果真如此，既然除月食期间外月球总有一个半球被太阳照亮，这层光便永远不会减弱；然而事实上，当月球趋近弦月时它却不断衰减，一旦越过弦月更彻底黯淡无光。',
        glosses: [
          {
            id: 'g-sn-s2-08',
            anchor: '月球的这第二重光辉',
            content:
              '即现代天文学所称「地球反照」或「灰光」（lumen cinereum / Earthshine）。列奥纳多·达·芬奇早在一五〇六至一五一〇年间的《莱斯特手稿》（Codex Leicester 第 2 叶正面）中便已正确绘出地球海洋反射阳光照亮新月暗面的光路图，但手稿深藏未刊；开普勒之师米夏埃尔·梅斯特林（Michael Maestlin）于一五九六年蒂宾根学位论辩中首次在印刷品中阐明地照成因，并由开普勒收入一六〇四年《天文学之光学部分》（Astronomiae pars optica）。文中遭伽利略逐一驳斥的四派旧说均确有所指：月球自发光说源自阿威罗伊与阿尔伯特大帝传统；金星照亮说出自第谷·布拉赫；半透明月体透光说则出自中世纪光学家维特罗（Witelo）与伊本·海赛姆注疏传统（注意第 74 页原文明言「靠近地球本影圆周边缘」，但紧接着笔误写作「环绕月球四周的某圈较稠密区域」crassiorem quandam regionem quae Lunam orbiculariter ambit，实指地球大气层折射太阳红光入地影，法瓦罗校勘本保留初版原文）。'
          },
          {
            id: 'g-sn-s2-09',
            anchor: '我们将在《论世界体系》一书中作更详尽的探讨',
            content:
              '此乃伽利略在公开出版物中首次预告其毕生宇宙论巨著《论世界体系》（De systemate mundi，本书卷末再次提及）。一六一〇年五月致温塔的求职信中，伽利略亦将此书列为即将完稿的首要著作；后历经一六一六年罗马教廷禁令风波与二十二载迁延易稿，该书终在一六三二年以意大利语对话体《关于托勒密和哥白尼两大世界体系的对话》（Dialogo sopra i due massimi sistemi del mondo）在佛罗伦萨问世，其第一日对话即大幅扩充了此处关于地月光学反照与地球运动相似性的论证。'
          }
        ]
      },
      {
        id: 'sn-s2-p13',
        type: 'paragraph',
        num: '§ 13',
        original:
          'Cum itaque eiusmodi secundarius fulgor nec Lunae sit congenitus atque proprius, nec a Stellis ullis nec a Sole mutuatus, cumque iam in Mundi vastitate corpus aliud supersit nullum, nisi sola Tellus, quid, quaeso, opinandum? quid proferendum? nunquid a Terra ipsum lunare corpus, aut quidpiam aliud opacum atque tenebrosum lumine perfundi? quid mirum? maxime: aequa grataque permutatione rependit Tellus parem illuminationem ipsi Lunae, qualem et ipsa a Luna in profundioribus noctis tenebris toto fere tempore recipit. Rem clarius aperiamus. Luna in coniunctionibus, cum medium inter Solem et Terram obtinet locum, solaribus radiis in superiori suo hemisphaerio Terrae averso perfunditur; hemisphaerium vero inferius, quo Terram aspicit, tenebris est obductum; nullatenus igitur terrestrem superficiem illustrat. Luna, paulatim a Sole digressa, iam iam aliqua ex parte in hemisphaerio inferiori ad nos vergente illuminatur, albicantia cornua, subtilia tamen, ad nos convertit, et leviter Terram illustrat: crescit in Luna, iam ad quadraturam accedente, Solaris illuminatio, augetur in terris eius luminis reflexio, extenditur adhuc supra semicirculum splendor in Luna, et nostrae clariores effulgent noctes: tandem integer Lunae vultus, quo terram aspicit, ab opposito Sole clarissimis fulgoribus irradiatur, enitet longe lateque terrestris superficies lunari splendore perfusa: postmodum decrescens Luna debiliores ad nos radios emittit, debilius illuminatur Terra: Luna ad coniunctionem properat, atra nox Terram occupat. Tali itaque periodo alternis vicibus lunaris fulgor menstruas illuminationes, clariores modo, debiliores alias, nobis largitur: verum aequa lance beneficium a Tellure compensatur. Dum enim Luna sub Sole circa coniunctiones reperitur, superficiem terrestris hemisphaerii Soli expositi vividisque radiis illustrati integram respicit, reflexumque ab ipsa lumen concipit: ac proinde ex tali reflexione inferius hemisphaerium Lunae, licet solari lumine destitutum, non modice lucens apparet. Eadem Luna, per quadrantem a Sole remota, dimidium tantum terrestris hemisphaerii illuminatum conspicit, scilicet occiduum; altera enim medietas orientalis nocte obtenebratur: ergo, et ipsa Luna splendide minus a Terra illustratur, eiusve proinde lux illa secundaria exilior nobis apparet. Quod si Lunam in oppositione ad Solem constituas, spectabit ipsa hemisphaerium intermediae Telluris omnino tenebrosum obscuraque nocte perfusum: si igitur ecliptica fuerit talis oppositio, nullam prorsus illuminationem recipiet Luna, solari simul ac terrestri irradiatione destituta. In aliis atque aliis ad Terram et ad Solem habitudinibus, maius minusve a terrestri reflexione recipit lumen, prout maiorem aut minorem terrestris hemisphaerii illuminati partem spectaverit: is enim inter duos hosce globos servatur tenor, ut quibus temporibus maxime a Luna illustratur Tellus, iisdem minus vice versa a Terra illuminetur Luna, et e contra. Atque haec pauca de hac re in praesenti loco dicta sufficiant, fusius enim in nostro Systemate Mundi; ubi, complurimis et rationibus et experimentis, validissima solaris luminis e Terra reflexio ostenditur illis, qui eam a Stellarum corea arcendam esse iactitant, ex eo potissimum quod a motu et a lumine sit vacua; vagam enim illam ac Lunam splendore superantem, non autem sordium mundanarumque fecum sentinam, esse demonstrationibus et naturalibus quoque rationibus sexcentis confirmabimus.',
        zh: '既然这种第二重辉光既非月球与生俱来而固有的，亦非向任何星辰或太阳直接借来的，而在浩瀚宇宙之中除了唯一的地球之外再无其他天体留存，那么试问我们应当作何判断？应当提出何种解释？莫非月球球体本身——或任何其他不透明的幽暗物体——竟会被地球洒满光芒吗？这又有什么可奇怪的呢？一点也不奇怪：**地球正以对等而感恩的互惠，向月球回报同等的照明，恰如地球本身几乎在整段深夜黑暗中也从月球那里领受照明一样。**让我们把此理剖析得更加透彻。合朔之时，月球居于太阳与地球正中，其背向地球的上方半球沐浴在阳光之下，朝向地球的下方半球则笼罩在黑暗之中，因而丝毫不能照亮地球表面。随后月球渐渐偏离太阳，朝向我们的下方半球已有一小部分受光，向我们转过洁白而纤细的双角，微弱地照亮地球；当月球趋近上弦时，其上的太阳照明不断增长，地上的月光反射随之增强；月球上的光辉进一步越过半圆，我们的夜晚便照耀得愈发明亮；最后，月球朝向地球的整张正面被对冲位置的太阳以最璀璨的光芒照亮，辽阔大地沐浴在月华之中熠熠生辉；此后亏缺的月球向我们射来较弱的光线，地球受到的照明随之减弱；待月球重返合朔，漆黑的暗夜便笼罩大地。月球的光辉便是按这样的周期交替更迭，每月向我们慷慨赐予时强时弱的照明；然而地球也以公平的天平报答了这份恩惠。因为当月球在合朔前后位于太阳下方时，它正对着整个朝向太阳、被炽烈阳光照亮的地球半球表面，承接着从地球反射出来的光芒；凭借这种反射，月球的下方半球虽无阳光直射，看起来却颇为明亮。同一轮月球离开太阳一个象限之远时，只看见地球半球的一半受光，即西半边，而东半边则隐没在黑夜之中；因此月球本身受地球照亮的程度便大为减弱，它的那层第二重辉光在我们眼中也就显得微乎其微了。倘若你再将月球置于与太阳相冲的位置，它所面对的便是居中地球那完全漆黑、浸没在暗夜里的半球；因此倘若这次相冲恰逢月食，同时失去太阳照射与地球反照的月球便丝毫得不到任何光亮。在相对于地球和太阳的其他种种位置关系中，月球视其面对地球受光半球面积之大小，而从地球反射中领受或强或弱的光芒：盖因这两颗球体之间始终维系着这样一条准则——每当地球受月球照亮最盛之时，反过来月球受地球照亮便最弱，反之亦然。关于此事，眼下在此略述数语便已足够，更详尽的论述留待我们的《世界体系》；在那里，我们将以极丰富的推理论据与实验，向那些夸口宣称必须把地球逐出群星环舞之列——首要理由便是地球既无运动又无光亮——的人展示地球对太阳光何等强劲的反射；我们将凭证明以及无数自然哲学的理由确证：**地球乃是一颗游星，其光辉更胜月球一筹**，而[**绝非污秽与世间渣滓沉积的污水舱**]{#g-sn-s2-10}。',
        glosses: [
          {
            id: 'g-sn-s2-10',
            anchor: '绝非污秽与世间渣滓沉积的污水舱',
            content:
              '拉丁语 sentina 本指木帆船龙骨最底层汇聚恶臭污水的「舱底污水槽」（西塞罗曾用 sentina rei publicae 讥刺罗马城底层败类）。在新柏拉图主义注疏家马克罗比乌斯《西庇阿之梦注》（Commentarii in Somnium Scipionis I.22）与中世纪亚里士多德宇宙论中，地球因由最沉重浑浊的土、水元素构成，必然静止不动地沉淀在宇宙球心，如同宇宙一切渣滓污垢（faeces mundi）汇聚的最低贱容器；一四八六年皮科·德拉·米兰多拉在《论人的尊严》中亦曾沿用此传统称地月之下为「世界排泄物与渣滓沉淀处」（excrementis ac faecibus inferioris mundi）。伽利略在此借地照现象证明地球反照率远高于月面，从而在物理与美学双重层面上彻底翻转了地心说的宇宙贵贱等级，将地球升格为加入「群星环舞」（stellarum chorea，语出柏拉图《蒂迈欧篇》40c 与哥白尼《天球运行论》序言）的明亮行星。'
          }
        ]
      }
    ]
  },
  {
    id: 'de-fixis-ac-galaxia',
    roman: 'III',
    titleOriginal:
      'De Stellis Fixis, Galaxia sive Lacteo Circulo, et Stellis Nebulosis',
    titleZh: '论恒星视象、猎户与昴宿繁星、银河本质及星云星团',
    aiModel: 'Gemini-4-Carbon',
    blocks: [
      {
        id: 'sn-s3-p01',
        type: 'paragraph',
        num: '§ 01',
        original:
          'Diximus hucusque de observationibus circa lunare corpus habitis; nunc de Stellis fixis ea, quae hactenus a nobis inspecta fuerunt, breviter in medium adferamus. Ac primo illud animadversione dignum est, quod scilicet Stellae, tam fixae, quam errabundae, dum adhibito Perspicillo spectantur, nequaquam magnitudine augeri videntur iuxta proportionem eandem, secundum quam obiecta reliqua, et ipsamet quoque Luna, acquirunt incrementa: verum in Stellis talis auctio longe minor apparet; adeo ut Perspicillum, quod reliqua obiecta secundum centuplam, gratia exempli, rationem multiplicare potens erit, vix secundum quadruplam aut quintuplam Stellas multiplices reddere credas. Ratio autem huius est, quod scilicet Astra, dum libera ac naturali oculorum acie spectantur, non secundum suam simplicem nudamque, ut ita dicam, magnitudinem sese nobis offerunt, sed fulgoribus quibusdam irradiata, micantibusque radiis crinita, idque potissimum cum iam increverit nox; ex quo longe maiores videntur, quam si ascititiis illis crinibus essent exuta: angulus enim visorius, non a primario Stellae corpusculo, sed a late circumfuso splendore, terminatur.',
        zh: '至此我们已经论述了对月球球体所作的各项观测；现在，让我们把迄今针对恒星所审视到的现象简略公诸于众。首先值得留意的是：无论是恒星还是游星，当使用窥镜观看时，它们在大小上绝不像其余物体乃至月球本身那样按同一比例获得增长；在星辰身上，这种放大显得要小得多，以至于一具举例而言能将其余物体放大一百倍的窥镜，你会觉得它对星辰简直只放大了四倍或五倍。究其原因，乃是由于星辰在仅凭自由而自然的裸眼观看时，[并非按其单纯而赤裸的大小呈现在我们面前，而是被某种耀眼光芒所映照，披着闪烁射线的发缕]{#g-sn-s3-01}——当夜色业已深沉时尤其如此；正因如此，它们看起来比剥去那些外加发缕之后要大得多，因为决定视角大小的并非星辰本体的微小核心，而是向四周广泛弥散的光晕。',
        glosses: [
          {
            id: 'g-sn-s3-01',
            anchor: '并非按其单纯而赤裸的大小呈现在我们面前，而是被某种耀眼光芒所映照，披着闪烁射线的发缕',
            content:
              '伽利略在此揭示的裸眼星象「外加发缕」（adscititii crines，即人眼晶状体球差、睫状体散射与光渗造成的虚像芒刺），在天文学史上具有决定性的理论意义。在此之前，自托勒密至第谷·布拉赫，天文学家一直误将裸眼光晕当作恒星真实视直径（例如第谷测算一等星视直径达 2 角分、三等星达 1 角分），并据此提出反对哥白尼地球公转最有力的物理学诘难：倘若地球绕日公转而恒星却测不出周年视差，恒星距离至少须达日地距离的七千倍以上，按 1 至 2 角分的视直径推算，每一颗三等恒星的真实体积都必须大如整个地球绕日轨道，一等星更将远远大于土星轨道！伽利略发现窥镜会剥除虚幻芒刺、使恒星视直径骤缩，率先瓦解了第谷反哥白尼体积悖论的观测前提（后来惠更斯与艾里进一步证明，望远镜中所见恒星圆斑本身仍是孔径衍射艾里斑，恒星真实角直径远小于一角秒）。'
          }
        ]
      },
      {
        id: 'sn-s3-p02',
        type: 'paragraph',
        num: '§ 02',
        original:
          'Hoc apertissime intelligas licet ex eo, quod Stellae in Solis occasu inter prima crepuscula emergentes, tametsi primae fuerint magnitudinis, exiguae admodum apparent; et Venus ipsa, si quando circa meridiem se nobis in conspectum dederit, adeo exilis cernitur, ut vix Stellulam magnitudinis ultimae aequare videatur. Secus in aliis obiectis, et in ipsamet Luna, contingit; quae, sive in meridiana luce sive inter profundiores tenebras spectetur, eiusdem semper molis apparet. Intonsa igitur in mediis tenebris spectantur Astra, crines tamen illorum diurna lux abradere potest; at non lux ista tantum, sed tenuis quoque nubecula, quae inter Sidus et oculum aspicientis interponatur: idem quoque praestant nigra velamina ac vitra colorata, quorum obiectu atque interpositione circumfusi fulgores Stellas deserunt. Hoc idem pariter efficit Perspicillum: prius enim adscititios accidentalesque a Stellis fulgores adimit, illarum inde globulos simplices (si tamen figura fuerint globosa) auget; atque adeo secundum minorem multiplicitatem adaucta videntur. Stellula enim quintae aut sextae magnitudinis, per Perspicillum visa, tamquam magnitudinis primae repraesentatur.',
        zh: '从下面这一事实中，你可以最清楚地领会此理：日落时分在初起暮色中刚刚浮现的星辰，纵使属于一等星，看起来也极其细小；就连金星本身，每逢正午时分偶尔现身于我们眼前时，看起来也纤小得几乎赶不上一颗最末等的微星。其余物体乃至月球本身的情形则截然不同：月球无论在正午烈日下观看，还是在深沉暗夜里观看，始终显得大小如一。因此，星辰在黑夜深处看起来是**未曾剪发**的，而白昼的亮光却能剃去它们的发缕；不仅昼光能办到此事，横亘在星辰与观察者眼睛之间的一抹薄云也能办到；黑色纱幕与有色玻璃同样具有这一功效——一旦将它们遮挡在眼前，四散弥漫的炫光便纷纷脱离星辰而去。窥镜同样达成了这一效果：它先剥去星辰身上外加而偶然的炫光，随后再放大它们单纯的本体小球（姑且假定它们形状为球体）；正因如此，它们看起来才像是按较小的倍率被放大了。盖因一颗五等或六等小星透过窥镜观看时，仅呈现为一等星那样的外观。'
      },
      {
        id: 'sn-s3-p03',
        type: 'paragraph',
        num: '§ 03',
        original:
          'Adnotatione quoque dignum videtur esse discrimen inter Planetarum atque fixarum Stellarum aspectus. Planetae enim globulos suos exacte rotundos ac circinatos obiiciunt, ac, veluti Lunulae quaedam undique lumine perfusae, orbiculares apparent: fixae vero Stellae peripheria circulari nequaquam terminatae conspiciuntur, sed veluti fulgores quidam radios circumcirca vibrantes atque admodum scintillantes; consimili tandem figura praeditae apparent cum Perspicillo, ac dum naturali intuitu, spectantur, sed adeo maiores ut Stellula quintae aut sextae magnitudinis Canem, maximam nempe fixarum omnium, aequare videatur. Verum, infra Stellas magnitudinis sextae, adeo numerosum gregem aliarum, naturalem intuitum fugientium, per Perspicillum intueberis, ut vix credibile sit: plures enim, quam sex aliae magnitudinum differentiae, videas licet; quarum maiores, quas magnitudinis septimae, seu primae invisibilium, appellare possumus, Perspicilli beneficio maiores et clariores apparent, quam magnitudinis secundae Sidera, acie naturali visa.',
        zh: '行星与恒星在外观上的差别，看来同样值得郑重记录。[行星呈现出浑圆周正、宛如圆规画出的小圆球，恰似一轮轮四面沐浴光芒的小月亮]{#g-sn-s3-02}；而恒星看起来却绝不由一圈清晰圆周界定，倒像是一团团向四面八方颤动着射线、闪烁不已的光芒；归根结底，它们在窥镜中所呈现的形态与裸眼直视时相似，只是变得大得多，以至于一颗五等或六等小星看起来竟堪比恒星之中最大的天狼星。然而，在六等星以下，透过窥镜你还将目睹一大群逃过自然目力的其他繁星，其数量之多简直令人难以置信：你可以看到超过另外六个等级的星等层次；其中较大的那些——我们不妨称之为**七等星**，或**不可见星中的第一等**——借窥镜之助看起来，比裸眼所见的二等星还要硕大而明亮。',
        glosses: [
          {
            id: 'g-sn-s3-02',
            anchor: '行星呈现出浑圆周正、宛如圆规画出的小圆球，恰似一轮轮四面沐浴光芒的小月亮',
            content:
              '太阳系大行星距地球较近，视直径通常在数角秒至数十角秒之间（如一六一〇年冲日前后的木星视直径约 45 角秒），经二十至三十倍窥镜放大后达十余角分，超过人眼约 1 角分的角分辨率极限，故呈现为边界清晰的圆盘；而遥远恒星的真实角直径不足百分之一角秒，放大三十倍后依然是不可分辨的点光源。注意在一六一〇年初春帕多瓦观测期间，金星尚处于上合远日侧附近，呈接近满相的小圆盘（「四面沐浴光芒的小月亮」）；同年秋金星转入东大距至下合期间，伽利略在佛罗伦萨持续追踪其视圆盘变化，遂于一六一〇年十二月进一步发现了证实金星绕日运行的「金星盈亏位相」。'
          }
        ]
      },
      {
        id: 'sn-s3-p04',
        type: 'paragraph',
        num: '§ 04',
        original:
          'Ut autem de inopinabili fere illarum frequentia unam alteramve attestationem videas, Asterismos duos subscribere placuit, ut ab eorum exemplo de caeteris iudicium feras. In primo integram Orionis Constellationem pingere decreveram; verum ab ingenti Stellarum copia, temporis vero inopia, obrutus, aggressionem hanc in aliam occasionem distuli; adstant enim, et circa veteres, intra unius aut alterius gradus limites, disseminantur, plures quingentis: quapropter tribus quae in Cingulo, et senis quae in Ense iampridem adnotatae fuerunt, alias adiacentes octuaginta recens visas apposuimus; earumque interstitia, quo exactius licuit, servavimus: notas, seu veteres, distinctionis gratia, maiores pinximus, ac duplici linea contornavimus; alias inconspicuas, minores, ac unis lineis notavimus; magnitudinum quoque discrimina, quo magis licuit, servavimus.\n[ Tabula: Cingulum et Ensis Orionis ]\nIn altero exemplo sex Stellas Tauri, PLEIADAS dictas, depinximus (dico autem sex, quandoquidem septima fere nunquam apparet) intra [ Tabula: Pleiades ] angustissimos in Caelo cancellos obclusas, quibus aliae, plures quam quadraginta, invisibiles adiacent; quarum nulla ab aliqua ex praedictis sex vix ultra semigradum elongatur: harum nos tantum triginta sex adnotavimus; earumque interstitia, magnitudines, necnon veterum novarumque discrimina, veluti in Orione, servavimus.',
        zh: '为使你亲眼见到一两桩足证它们稠密得几乎超乎想象的实例，我特意在下方附上两幅星群图，以便你由其示范推知其余星座。在第一幅图中，我原本决意绘出完整的猎户座；无奈繁星浩如烟海，时间却迫促匮乏，令我应接不暇，只得将这一宏图推迟到日后另寻良机——盖因在旧有已知亮星周围一两度的界限之内，便散布着五百余颗新星；[故我们在腰带原有的三颗星与宝剑原有的六颗星旁，添绘了新近观测到的相邻八十颗星]{#g-sn-s3-03}，并尽我们所能精确地保留了它们彼此间的距离：为醒目区分起见，已知的旧星绘得较大，并以双线勾勒轮廓；其余肉眼不可见的新星则绘得较小，以单线标示；星等大小的差异，我们也尽最大可能予以保留。\n在第二个实例中，我们描绘了[金牛座被称为昴星团的六颗星——我说六颗，是因为第七颗几乎从不露面]{#g-sn-s3-04}——它们被围拢在天幕上极为狭窄的格栏之内，紧挨着它们的还有四十余颗肉眼不可见的暗星，其中没有任何一颗偏离上述六星中某颗超过半度以上；我们仅标录了其中的三十六颗，并一如猎户座星图那样，保留了它们的间距、星等以及新旧星辰的区分。',
        glosses: [
          {
            id: 'g-sn-s3-03',
            anchor: '故我们在腰带原有的三颗星与宝剑原有的六颗星旁，添绘了新近观测到的相邻八十颗星',
            content:
              '初版此处跨页刊出人类天文学史上第一幅望远镜深空星图——《猎户座腰带与宝剑星图》（共绘 89 颗星：托勒密《至大论》星表所载猎户座腰带三星——参宿一、参宿二、参宿三——与伐宿宝剑六星以双层轮廓大星号标出，周围新测 80 颗六等以下暗星以单层小星号标出）。天文学史家常注意到一桩饶有趣味的悬案：宝剑正中的伐宿二（猎户座 θ）包裹在全天最明亮的弥漫发射星云「猎户座大星云」（M42）之中，伽利略虽精确分解了其中的四国合星（Trapezium）邻近恒星，却只字未提云雾状辉光（M42 直至一六一〇年十一月才由法国天文学家尼古拉-克洛德·法布里·德·佩雷斯克独立记录），学界推测这是因为伽利略当时正致力于将一切天体「云雾」还原为密集恒星，将其视作尚待更高倍率分解的微星背景或透镜杂散光而未加单列。'
          },
          {
            id: 'g-sn-s3-04',
            anchor: '金牛座被称为昴星团的六颗星——我说六颗，是因为第七颗几乎从不露面',
            content:
              '昴星团（Pleiades，M45，俗称七姊妹星团）在古典诗歌与星象传统中素有「隐没的第七星」典故：古希腊诗人阿拉托斯《物象》（Phaenomena 第 257–261 行）与古罗马诗人奥维德《岁时记》（Fasti IV.170：「常称有七颗，实则往往只见六颗」，Quae septem dici, sex tamen esse solent）皆记载肉眼通常只能清晰分辨六颗主星（神话传称厄勒克特拉不忍目睹特洛伊陷落而掩面隐去，或墨罗佩因下嫁凡人西西弗斯而羞愧敛光；现代天文观测表明东侧昴宿增十二 Pleione 系亮度波动的快速自转壳层变星，且紧贴昴宿七 Atlas，极易混为一星）。初版此处所附《昴星团星图》共绘出 42 颗星（6 颗双线旧星与 36 颗单线新星），与现代星图对勘吻合度极高。'
          }
        ]
      },
      {
        id: 'sn-s3-p05',
        type: 'paragraph',
        num: '§ 05',
        original:
          'Quod tertio loco a nobis fuit observatum, est ipsiusmet LACTEI Circuli essentia, seu materies, quam Perspicilli beneficio adeo ad sensum licet intueri, ut et altercationes omnes, quae per tot saecula philosophos excruciarunt, ab oculata certitudine dirimantur, nosque a verbosis disputationibus liberemur. Est enim GALAXIA nihil aliud, quam innumerarum Stellarum coacervatim consitarum congeries: in quamcumque enim regionem illius Perspicillum dirigas, statim Stellarum ingens frequentia sese in conspectum profert, quarum complures satis magnae ac valde conspicuae videntur; sed exiguarum multitudo prorsus inexplorabilis est.\nAt cum non tantum in GALAXIA lacteus ille candor, veluti albicantis nubis, spectetur, sed complures consimilis coloris areolae sparsim per aethera subfulgeant, si in illarum quamlibet Specillum convertas, Stellarum constipatarum coetum offendes. Amplius (quod magis miraberis), Stellae ab Astronomis singulis in hanc usque diem NEBULOSAE appellatae, Stellularum mirum in modum consitarum greges sunt; ex quarum radiorum commixtione, dum unaquaeque ob exilitatem, seu maximam a nobis remotionem, oculorum aciem fugit, candor ille consurgit, qui densior pars Caeli, Stellarum aut Solis radios retorquere valens, hucusque creditus est. Nos ex illis nonnullas observavimus, et duarum Asterismos subnectere voluimus.\nIn primo habes NEBULOSAM, Capitis Orionis appellatam, in qua Stellas vigintiunas numeravimus.\nSecundus NEBULOSAM PRAESEPE, nuncupatam continet; quae non una tantum Stella est, sed congeries Stellularum plurium quam quadraginta: nos, praeter Asellos, trigintasex notavimus, in hunc, qui sequitur, ordinem dispositas.\n[Tabula: Nebulosa Capitis Orionis & Nebulosa Praesepe]',
        zh: '我们观测到的第三项事物，乃是**乳白天环**本身的本质或质料；借窥镜之助，我们可以如此直接地凭感官看清它，以至于千百年来折磨历代哲学家的全部争讼皆被亲眼目睹的确定性一举裁决，把我们从冗长空洞的言辞争辩中解放出来。盖因[**银河根本不是别的，无非是无数颗成团簇聚的恒星之集合**]{#g-sn-s3-05}：无论你将窥镜指向银河的哪一片区域，立时便有极其稠密的繁星迎面涌现，其中好些显得颇为硕大而十分醒目，至于微星的数量则根本无从穷尽。\n况且，不仅银河之中能看到那种宛如泛白云霭般的乳白色光辉，以太天幕各处还零星闪烁着好几小片色泽相似的光斑；倘若你将窥镜转向其中任何一片，都会撞见一团紧密簇拥的星群。更有甚者（这将令你倍感惊奇），直至今日被每一位天文学家称为**「星云星」**的天体，实则是以奇妙方式密集丛生的微星之群；由于其中每一颗微星皆因自身纤小或距我们极其遥远而逃过裸眼目力，它们的光芒彼此交融混合，便升起了那片白光——而直到今天，人们一直误以为那是天球上较为稠密、能够反射群星或太阳光线的区域。我们观测了其中的若干处，并愿在下方附上其中两处的星群图。\n第一幅图为你呈现的是被称为**猎户座头部星云**的天体，我们在其中数出了二十一颗星。\n[第二个星群载有被称为鬼宿星团的星云星；它并非单单一颗星，而是四十余颗小星的集合：除南北河戍两颗驴星外，我们标出了三十六颗]{#g-sn-s3-06}，按如下次序排列。',
        glosses: [
          {
            id: 'g-sn-s3-05',
            anchor: '银河根本不是别的，无非是无数颗成团簇聚的恒星之集合',
            content:
              '在古典自然哲学史上，亚里士多德《气象汇论》（Meteorologica I.8, 345a–346b）曾专门批驳阿那克萨哥拉与德谟克利特关于「银河系众多微星光芒合成」的猜想，断言银河并非天界恒星，而是月下大气层顶端被天球旋转引燃的持久干热气态呼出物（ἀναθυμίασις）；中世纪经院评注家与阿拉伯天文学家则折衷提出「天球以太局部稠密反光说」（即本段下文所驳「天球上较为稠密的区域」）。伽利略用窥镜直接将银河消解为密集恒星，不仅一举证实了古希腊原子论者与前苏格拉底学派的直觉，更将亚里士多德气象学彻底驱逐出天界。'
          },
          {
            id: 'g-sn-s3-06',
            anchor:
              '第二个星群载有被称为鬼宿星团的星云星；它并非单单一颗星，而是四十余颗小星的集合：除南北河戍两颗驴星外，我们标出了三十六颗',
            content:
              '托勒密《至大论》卷七至卷八恒星星表共著录了五颗肉眼呈雾状光斑的「星云状星」（νεφελοειδεῖς，拉丁译本通作 stellae nebulosae），本段所绘两图即居其二：（一）「猎户座头部星云」（Nebulosa Capitis Orionis），即觜宿一（猎户座 λ，Meissa）及其周围疏散星团 Collinder 69；（二）巨蟹座中心的「马槽星团」（拉丁语 Praesepe，意为「食槽、马槽」，即现代梅西耶星表 M44 蜂巢星团，中国古天文学对应二十八宿之「鬼宿」及其中央「积尸气」）。在古典星象神话中，马槽（Praesepe）南北两侧紧挨着两颗四等亮星——巨蟹座 γ（鬼宿三，Asellus Borealis「北驴星」）与巨蟹座 δ（鬼宿四，Asellus Australis「南驴星」），相传为酒神狄奥尼索斯与火神赫淮斯托斯迎战巨灵族时所骑之驴，获封升天立于马槽两侧进食（见老普林尼《自然史》XVIII.353）。初版此处并排刊出两幅星团木刻图，右图两侧大星即南北二驴星，中间簇拥 36 颗微星。'
          }
        ]
      }
    ]
  }
];
