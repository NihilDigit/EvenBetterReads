import type { BookSection } from '../../../types/book';

export const russellPart2Sections: BookSection[] = [
  {
    id: 'ch03-finitude-and-induction',
    roman: 'III',
    titleOriginal: 'Chapter III. Finitude and Mathematical Induction',
    titleZh: '第三章 有穷性与数学归纳法',
    aiModel: 'Gemini-4-Carbon',
    blocks: [
      {
        id: 'imp-ch03-p01',
        type: 'paragraph',
        num: '§ 01',
        original:
          'The series of natural numbers, as we saw in Chapter I., can all be defined if we know what we mean by the three terms “0,” “number,” and “successor.” But we may go a step farther: we can define all the natural numbers if we know what we mean by “0” and “successor.” It will help us to understand the difference between finite and infinite to see how this can be done, and why the method by which it is done cannot be extended beyond the finite. We will not yet consider how “0” and “successor” are to be defined: we will for the moment assume that we know what these terms mean, and show how thence all other natural numbers can be obtained.',
        zh: '正如我们在第一章所见，只要知道「0」、「数」与「后继」这三个词项的含义，自然数序列便可以全部得到定义。但我们还可以更进一步：只要知道「0」与「后继」的含义，我们就能定义全部自然数。弄清这件事如何做到，以及做到它的方法为何不能推广到有穷范围之外，将有助于我们理解有穷与无穷之间的差别。我们暂且不考虑「0」与「后继」应当如何定义：眼下我们先假定已知这两个词项的含义，并说明如何由此得出其余一切自然数。'
      },
      {
        id: 'imp-ch03-p02',
        type: 'paragraph',
        num: '§ 02',
        original:
          'It is easy to see that we can reach any assigned number, say 30,000. We first define “1” as “the successor of 0,” then we define “2” as “the successor of 1,” and so on. In the case of an assigned number, such as 30,000, the proof that we can reach it by proceeding step by step in this fashion may be made, if we have the patience, by actual experiment: we can go on until we actually arrive at 30,000. But although the method of experiment is available for each particular natural number, it is not available for proving the general proposition that all such numbers can be reached in this way, i.e. by proceeding from 0 step by step from each number to its successor. Is there any other way by which this can be proved?',
        zh: '不难看出，我们可以抵达任何一个指定的数，比方说 30,000。我们先将「1」定义为「0 的后继」，再将「2」定义为「1 的后继」，依此类推。对于像 30,000 这样一个指定的数，只要我们有足够的耐心，便可以通过实际试验来证明按这种方式逐级推进能够抵达它：我们可以一直往下推，直到实际抵达 30,000 为止。然而，尽管这种试验方法对每一个特定的自然数都行得通，却无法用来证明下面这条普遍命题：**一切**此类数都能以这种方式抵达，即从 0 出发、由每一个数逐级推进到它的后继。有没有别的办法可以证明这一点呢？'
      },
      {
        id: 'imp-ch03-p03',
        type: 'paragraph',
        num: '§ 03',
        original:
          'Let us consider the question the other way round. What are the numbers that can be reached, given the terms “0” and “successor”? Is there any way by which we can define the whole class of such numbers? We reach 1, as the successor of 0; 2, as the successor of 1; 3, as the successor of 2; and so on. It is this “and so on” that we wish to replace by something less vague and indefinite. We might be tempted to say that “and so on” means that the process of proceeding to the successor may be repeated any finite number of times; but the problem upon which we are engaged is the problem of defining “finite number,” and therefore we must not use this notion in our definition. Our definition must not assume that we know what a finite number is.',
        zh: '不妨把问题倒过来考虑。给定「0」与「后继」这两个词项，能够抵达的数究竟是哪些？有没有什么办法可以让我们定义由这类数构成的整个类？我们抵达作为 0 之后继的 1，作为 1 之后继的 2，作为 2 之后继的 3，依此类推。我们希望用某种不那么含混、不那么游移的东西去取代的，正是这个「依此类推」。我们或许会忍不住说，「依此类推」的意思是推向后继的过程可以重复任意有穷次；但我们正在处理的恰恰是如何定义「有穷数」的问题，因此绝不能在定义中动用这一观念。我们的定义绝不可假定我们已知什么是有穷数。'
      },
      {
        id: 'imp-ch03-p04',
        type: 'paragraph',
        num: '§ 04',
        original:
          'The key to our problem lies in mathematical induction. It will be remembered that, in Chapter I., this was the fifth of the five primitive propositions which we laid down about the natural numbers. It stated that any property which belongs to 0, and to the successor of any number which has the property, belongs to all the natural numbers. This was then presented as a principle, but we shall now adopt it as a definition. It is not difficult to see that the terms obeying it are the same as the numbers that can be reached from 0 by successive steps from next to next, but as the point is important we will set forth the matter in some detail.',
        zh: '解决问题的关键在于**数学归纳法**。读者当还记得，在第一章中，这是我们就自然数所确立的五条初始命题中的第五条。它断定：任何性质，只要属于 0，并且属于任何具有该性质之数的后继，就属于全部自然数。当时它是作为一条原理提出来的，但我们现在却要将它采纳为一项**定义**。不难看出，服从它的各项，与从 0 出发经由一项到紧邻下一项的连续步骤所能抵达的数完全相同；但鉴于这一点至关重要，我们将稍加详尽地予以阐述。'
      },
      {
        id: 'imp-ch03-p05',
        type: 'paragraph',
        num: '§ 05',
        original:
          'We shall do well to begin with some definitions, which will be useful in other connections also.',
        zh: '我们最好先给出几项定义，它们在其他场合也将派上用场。'
      },
      {
        id: 'imp-ch03-p06',
        type: 'paragraph',
        num: '§ 06',
        original:
          'A property is said to be “hereditary” in the natural-number series if, whenever it belongs to a number n, it also belongs to n+1, the successor of n. Similarly a class is said to be “hereditary” if, whenever n is a member of the class, so is n+1. It is easy to see, though we are not yet supposed to know, that to say a property is hereditary is equivalent to saying that it belongs to all the natural numbers not less than some one of them, e.g. it must belong to all that are not less than 100, or all that are not less than 1000, or it may be that it belongs to all that are not less than 0, i.e. to all without exception.',
        zh: '一项性质，只要属于数 n 便也属于 n 的后继 n + 1，就称为[在自然数序列中是「遗传的」]{#g-imp-c3-01}。同样，一个类，只要 n 是该类的成员，n + 1 便也是该类的成员，就称为「遗传的」。不难看出——尽管在理论上我们此刻还不应预设自己知道这一点——说一项性质是遗传性质，等价于说它属于不小于某一个自然数的全部自然数；例如，它必定属于一切不小于 100 的数，或者属于一切不小于 1000 的数，又或者它属于一切不小于 0 的数，亦即毫无例外地属于全部自然数。',
        glosses: [
          {
            id: 'g-imp-c3-01',
            anchor: '在自然数序列中是「遗传的」',
            content:
              '「遗传性质」（hereditary property）与下文的「后裔类」（posterity）均源自弗雷格 1879 年《概念文字》第三章「一般序列理论若干要点」（第 23—31 节）。弗雷格在第 24 节首次定义性质 F 在关系 f 下「遗传」（erblich）：若凡 x 具有 F 且 x 与 y 处于关系 f 之中，y 亦具有 F，则性质 F 在 f-序列中遗传；继而以二阶全称量词将「y 在以 x 为起点的 f-序列中」显式定义为「y 具有 x 所具有的一切在 f 下遗传的性质」。'
          }
        ]
      },
      {
        id: 'imp-ch03-p07',
        type: 'paragraph',
        num: '§ 07',
        original:
          'A property is said to be “inductive” when it is a hereditary property which belongs to 0. Similarly a class is “inductive” when it is a hereditary class of which 0 is a member.',
        zh: '当一项性质是属于 0 的遗传性质时，就称为「归纳的」。同样，当一个类是以 0 为成员的遗传类时，就称为「归纳的」。'
      },
      {
        id: 'imp-ch03-p08',
        type: 'paragraph',
        num: '§ 08',
        original:
          'Given a hereditary class of which 0 is a member, it follows that 1 is a member of it, because a hereditary class contains the successors of its members, and 1 is the successor of 0. Similarly, given a hereditary class of which 1 is a member, it follows that 2 is a member of it; and so on. Thus we can prove by a step-by-step procedure that any assigned natural number, say 30,000, is a member of every inductive class.',
        zh: '给定一个以 0 为成员的遗传类，便可推出 1 是它的成员，因为遗传类包含其自身成员的后继，而 1 是 0 的后继。同样，给定一个以 1 为成员的遗传类，便可推出 2 是它的成员；依此类推。于是，我们可以通过逐级推进的程序证明：任何一个指定的自然数，比方说 30,000，都是每一个归纳类的成员。'
      },
      {
        id: 'imp-ch03-p09',
        type: 'paragraph',
        num: '§ 09',
        original:
          'We will define the “posterity” of a given natural number with respect to the relation “immediate predecessor” (which is the converse of “successor”) as all those terms that belong to every hereditary class to which the given number belongs. It is again easy to see that the posterity of a natural number consists of itself and all greater natural numbers; but this also we do not yet officially know.',
        zh: '我们将一个给定自然数关于「直接前驱」关系（它是「后继」的逆关系）的「**后裔类**」，定义为属于该给定数所属的每一个遗传类的全部项。同样不难看出，一个自然数的后裔类由它自身以及一切比它大的自然数组成；但这一点在正式推演中我们此刻同样尚未知晓。'
      },
      {
        id: 'imp-ch03-p10',
        type: 'paragraph',
        num: '§ 10',
        original:
          'By the above definitions, the posterity of 0 will consist of those terms which belong to every inductive class.',
        zh: '依照上述定义，0 的后裔类将由属于每一个归纳类的那些项组成。'
      },
      {
        id: 'imp-ch03-p11',
        type: 'paragraph',
        num: '§ 11',
        original:
          'It is now not difficult to make it obvious that the posterity of 0 is the same set as those terms that can be reached from 0 by successive steps from next to next. For, in the first place, 0 belongs to both these sets (in the sense in which we have defined our terms); in the second place, if n belongs to both sets, so does n+1. It is to be observed that we are dealing here with the kind of matter that does not admit of precise proof, namely, the comparison of a relatively vague idea with a relatively precise one. The notion of “those terms that can be reached from 0 by successive steps from next to next” is vague, though it seems as if it conveyed a definite meaning; on the other hand, “the posterity of 0” is precise and explicit just where the other idea is hazy. It may be taken as giving what we meant to mean when we spoke of the terms that can be reached from 0 by successive steps.',
        zh: '现在不难清楚表明，0 的后裔类，与从 0 出发经由一项到紧邻下一项的连续步骤所能抵达的那些项，乃是同一个集合。因为，第一，0（在我们界定诸词项的意义上）同时属于这两个集合；第二，若 n 同时属于这两个集合，则 n + 1 也同时属于这两个集合。应当注意，我们在这里处理的是一种不容许严格证明的事情，即拿一个相对含混的观念去同一个相对精确的观念作比较。「从 0 出发经由一项到紧邻下一项的连续步骤所能抵达的那些项」这一观念看似传达了确定的含义，实则是含混的；反之，「0 的后裔类」恰恰在前一个观念朦胧不清的地方做到了精确而明晰。当我们谈论从 0 出发经由连续步骤所能抵达的各项时，它就可以被视为给出了我们原本打算表达的确切含义。'
      },
      {
        id: 'imp-ch03-p12',
        type: 'paragraph',
        num: '§ 12',
        original:
          'We now lay down the following definition:—\n\nThe “natural numbers” are the posterity of 0 with respect to the relation “immediate predecessor” (which is the converse of “successor”).',
        zh: '现在我们确立如下定义：\n\n**「自然数」是 0 关于「直接前驱」关系（它是「后继」的逆关系）的后裔类。**'
      },
      {
        id: 'imp-ch03-p13',
        type: 'paragraph',
        num: '§ 13',
        original:
          'We have thus arrived at a definition of one of Peano’s three primitive ideas in terms of the other two. As a result of this definition, two of his primitive propositions—namely, the one asserting that 0 is a number and the one asserting mathematical induction—become unnecessary, since they result from the definition. The one asserting that the successor of a natural number is a natural number is only needed in the weakened form “every natural number has a successor.”',
        zh: '至此，我们便用皮亚诺三个初始观念中的另外两个，给出了其中一个初始观念的定义。作为这项定义的结果，他的两条初始命题——即断定 0 是一个数的那一条，以及断定数学归纳法的那一条——便不再需要了，因为它们直接由定义得出。至于断定自然数的后继也是自然数的那一条，则只需保留其弱化形式，即「每一个自然数都有一个后继」。'
      },
      {
        id: 'imp-ch03-p14',
        type: 'paragraph',
        num: '§ 14',
        original:
          'We can, of course, easily define “0” and “successor” by means of the definition of number in general which we arrived at in Chapter II. The number 0 is the number of terms in a class which has no members, i.e. in the class which is called the “null-class.” By the general definition of number, the number of terms in the null-class is the set of all classes similar to the null-class, i.e. (as is easily proved) the set consisting of the null-class all alone, i.e. the class whose only member is the null-class. (This is not identical with the null-class: it has one member, namely, the null-class, whereas the null-class itself has no members. A class which has one member is never identical with that one member, as we shall explain when we come to the theory of classes.) Thus we have the following purely logical definition:—\n\n0 is the class whose only member is the null-class.',
        zh: '凭借我们在第二章得出的一般数的定义，我们当然可以轻而易举地定义「0」与「后继」。数 0 是没有成员的类——即所谓「空类」——中项的数目。依照数的一般定义，空类中项的数目是与空类相似的一切类所构成的集合，亦即（这很容易证明）单独由空类组成的集合，也就是以空类为其唯一成员的类。（它与空类并不相同：它有一个成员，即空类，而空类本身则没有任何成员。[只有一个成员的类绝不与那唯一成员相同]{#g-imp-c3-02}，这一点等我们讨论类的理论时再作解释。）于是我们得到如下纯粹逻辑的定义：\n\n**0 是以空类为其唯一成员的类。**',
        glosses: [
          {
            id: 'g-imp-c3-02',
            anchor: '只有一个成员的类绝不与那唯一成员相同',
            content:
              '区分个体 x 与仅含 x 的单元类 {x}（unit class，见《数学原理》第一卷第 51 节），是现代类论得以建立的基本前提。德国逻辑学家恩斯特·施罗德（Ernst Schröder，1841—1902）在《逻辑代数讲义》第一卷（1890）中沿用传统外延部分—整体观念，将个体等同于其单元类，结果在处理「类的类」时陷入矛盾。皮亚诺在《数学公式汇编》（1894—1895）中引入专门记号区分「元素属于类」（∈）与「类包含子类」（⊂），确立 x ≠ {x}；由此，本身不含任何成员的空类 Λ（基数为 0）与以 Λ 为唯一成员的单元类 {Λ}（基数为 1，即作为一切空类之集合的数 0 本身）在逻辑层级上判然有别。'
          }
        ]
      },
      {
        id: 'imp-ch03-p15',
        type: 'paragraph',
        num: '§ 15',
        original:
          'It remains to define “successor.” Given any number n, let α be a class which has n members, and let x be a term which is not a member of α. Then the class consisting of α with x added on will have n+1 members. Thus we have the following definition:—\n\nThe successor of the number of terms in the class α is the number of terms in the class consisting of α together with x, where x is any term not belonging to the class.\n\nCertain niceties are required to make this definition perfect, but they need not concern us.[1] It will be remembered that we have already given (in Chapter II.) a logical definition of the number of terms in a class, namely, we defined it as the set of all classes that are similar to the given class.',
        zh: '接下来还需要定义「后继」。给定任意数 n，设 α 为具有 n 个成员的类，并设 x 为不属于 α 的一项。那么，由 α 加上 x 所组成的类便具有 n + 1 个成员。于是我们得到如下定义：\n\n**类 α 中项数的后继，是由 α 连同 x 一起组成的类中的项数，其中 x 是不属于该类的任意一项。**\n\n要使这项定义臻于完密，还需要若干细微的修饰，但这里不必深究[^imp-fn-03-1]。读者当还记得，我们已经（在第二章中）给出了一个类中项数的逻辑定义，即将它定义为与该给定类相似的一切类所构成的集合。',
        authorNotes: [
          {
            id: 'imp-fn-03-1',
            original: 'See Principia Mathematica, vol. ii. *110.',
            zh: '参见《数学原理》第二卷第 110 节。'
          }
        ]
      },
      {
        id: 'imp-ch03-p16',
        type: 'paragraph',
        num: '§ 16',
        original:
          'We have thus reduced Peano’s three primitive ideas to ideas of logic: we have given definitions of them which make them definite, no longer capable of an infinity of different meanings, as they were when they were only determinate to the extent of obeying Peano’s five axioms. We have removed them from the fundamental apparatus of terms that must be merely apprehended, and have thus increased the deductive articulation of mathematics.',
        zh: '就这样，我们把皮亚诺的三个初始观念还原成了逻辑观念：我们为它们给出了定义，使它们变得确定无疑，不再像当初仅仅受限于服从皮亚诺五条公理时那样可以容受无穷多种不同的含义。我们将它们从那套只能靠直接领会去把握的基本词项装置中剔除出去，从而增进了数学的演绎贯通性。'
      },
      {
        id: 'imp-ch03-p17',
        type: 'paragraph',
        num: '§ 17',
        original:
          'As regards the five primitive propositions, we have already succeeded in making two of them demonstrable by our definition of “natural number.” How stands it with the remaining three? It is very easy to prove that 0 is not the successor of any number, and that the successor of any number is a number. But there is a difficulty about the remaining primitive proposition, namely, “no two numbers have the same successor.” The difficulty does not arise unless the total number of individuals in the universe is finite; for given two numbers m and n, neither of which is the total number of individuals in the universe, it is easy to prove that we cannot have m+1=n+1 unless we have m=n. But let us suppose that the total number of individuals in the universe were (say) 10; then there would be no class of 11 individuals, and the number 11 would be the null-class. So would the number 12. Thus we should have 11=12; therefore the successor of 10 would be the same as the successor of 11, although 10 would not be the same as 11. Thus we should have two different numbers with the same successor. This failure of the third axiom cannot arise, however, if the number of individuals in the world is not finite. We shall return to this topic at a later stage.[2]',
        zh: '至于那五条初始命题，我们已经凭借「自然数」的定义成功使其中两条成为可证明的定理。其余三条情形如何呢？要证明 0 不是任何数的后继，以及任何数的后继都是一个数，是极其容易的。但剩下一条初始命题——即「没有两个数有相同的后继」——却存在一点困难。[除非宇宙中个体的总数是有穷的]{#g-imp-c3-03}，否则这一困难并不会出现；因为给定两个数 m 与 n，只要二者都不是宇宙中个体的总数，便很容易证明：除非 m = n，否则绝不可能有 m + 1 = n + 1。但倘若假定宇宙中个体的总数是（比方说）10；那么世上便不存在由 11 个个体组成的类，于是数 11 就会成为空类。数 12 也会成为空类。这样一来，我们就会得到 11 = 12；因此，尽管 10 与 11 并不相同，10 的后继却会与 11 的后继相同。于是我们就会有两个不同的数却拥有同一个后继。不过，只要世界中个体的数目不是有穷的，第三条公理失效的情形便不会发生。我们在后文还会回到这一课题[^imp-fn-03-2]。',
        authorNotes: [
          {
            id: 'imp-fn-03-2',
            original: 'See Chapter XIII.',
            zh: '参见第十三章。'
          }
        ],
        glosses: [
          {
            id: 'g-imp-c3-03',
            anchor: '除非宇宙中个体的总数是有穷的',
            content:
              '此处涉及《数学原理》第二卷第 120 节引入「无穷公理」（Axiom of Infinity，记作 Infin ax）的缘由。弗雷格在《算术基础》中曾试图以数字 0、{0}、{0, 1}……层层自生的方式纯凭逻辑证明无穷多对象的存在；但在《数学原理》的逻辑类型层级限制下，作为最低类型个体之「类的类」的各个基数必须处于同一类型层级，不能跨层级混同计数。若最低层级的个体总数仅为有穷的 k，则 k + 1 与 k + 2 所对应的等价类束皆因无实例而坍缩为空类 Λ，导致皮亚诺第三公理失效，归纳数序列在 k + 1 处截断。'
          }
        ]
      },
      {
        id: 'imp-ch03-p18',
        type: 'paragraph',
        num: '§ 18',
        original:
          'Assuming that the number of individuals in the universe is not finite, we have now succeeded not only in defining Peano’s three primitive ideas, but in seeing how to prove his five primitive propositions, by means of primitive ideas and propositions belonging to logic. It follows that all pure mathematics, in so far as it is deducible from the theory of the natural numbers, is only a prolongation of logic. The extension of this result to those modern branches of mathematics which are not deducible from the theory of the natural numbers offers no difficulty of principle, as we have shown elsewhere.[3]',
        zh: '假定宇宙中个体的数目不是有穷的，那么现在我们不仅成功定义了皮亚诺的三个初始观念，而且已经看清如何凭借属于逻辑的初始观念与初始命题去证明他的五条初始命题。由此可见，**一切纯粹数学——就其可由自然数理论演绎而出而言——不过是逻辑的延伸**。正如我们在别处已经证明的那样，将这一结论推广到那些不能由自然数理论演绎而出的现代数学分支，在原则上并无任何困难[^imp-fn-03-3]。',
        authorNotes: [
          {
            id: 'imp-fn-03-3',
            original:
              'For geometry, in so far as it is not purely analytical, see Principles of Mathematics, part vi.; for rational dynamics, ibid., part vii.',
            zh: '关于非纯粹解析的几何学，参见《数学的原则》第六编；关于理性动力学，参见同书第七编。'
          }
        ]
      },
      {
        id: 'imp-ch03-p19',
        type: 'paragraph',
        num: '§ 19',
        original:
          'The process of mathematical induction, by means of which we defined the natural numbers, is capable of generalisation. We defined the natural numbers as the “posterity” of 0 with respect to the relation of a number to its immediate successor. If we call this relation N, any number m will have this relation to m+1. A property is “hereditary with respect to N,” or simply “N-hereditary,” if, whenever the property belongs to a number m, it also belongs to m+1, i.e. to the number to which m has the relation N. And a number n will be said to belong to the “posterity” of m with respect to the relation N if n has every N-hereditary property belonging to m. These definitions can all be applied to any other relation just as well as to N. Thus if R is any relation whatever, we can lay down the following definitions:[4]—\n\nA property is called “R-hereditary” when, if it belongs to a term x, and x has the relation R to y, then it belongs to y.\n\nA class is R-hereditary when its defining property is R-hereditary.\n\nA term x is said to be an “R-ancestor” of the term y if y has every R-hereditary property that x has, provided x is a term which has the relation R to something or to which something has the relation R. (This is only to exclude trivial cases.)\n\nThe “R-posterity” of x is all the terms of which x is an R-ancestor.',
        zh: '我们赖以定义自然数的数学归纳过程，是可以加以推广的。我们将自然数定义为 0 关于一个数对其直接后继之关系的「后裔类」。倘若把这一关系称为 N，那么任意数 m 对 m + 1 都具有这一关系。只要一项性质属于数 m 时也必定属于 m + 1，即属于 m 对之具有关系 N 的那个数，该性质就称为「关于 N 遗传的」，或简称「N-遗传的」。而如果数 n 具有属于 m 的每一项 N-遗传性质，就说数 n 属于 m 关于关系 N 的「后裔类」。这些定义完全可以像运用于 N 一样运用于其他任何关系。因此，若 R 是无论何种关系，我们都可以确立如下定义[^imp-fn-03-4]：\n\n当一项性质满足「若它属于项 x，且 x 对 y 具有关系 R，则它属于 y」时，该性质称为「**R-遗传的**」。\n\n当一个类的定义性质是 R-遗传的时，该类是 **R-遗传的**。\n\n若项 y 具有项 x 所具有的每一项 R-遗传性质，且 x 是对某物具有关系 R、或某物对之具有关系 R 的项（这只是为了排除琐屑的极端情形），则称项 x [是项 y 的「R-祖先」]{#g-imp-c3-04}。\n\nx 的「**R-后裔类**」是以 x 为 R-祖先的一切项。',
        authorNotes: [
          {
            id: 'imp-fn-03-4',
            original:
              'These definitions, and the generalised theory of induction, are due to Frege, and were published so long ago as 1879 in his Begriffsschrift. In spite of the great value of this work, I was, I believe, the first person who ever read it—more than twenty years after its publication.',
            zh: '这些定义以及广义归纳理论归功于弗雷格，早在 1879 年便已发表于他的《概念文字》中。尽管这部著作价值极高，我相信自己却是第一个通读它的人——那已是它出版二十多年之后的事了。'
          }
        ],
        glosses: [
          {
            id: 'g-imp-c3-04',
            anchor: '是项 y 的「R-祖先」',
            content:
              '《数学原理》第一卷第 90 节将一般二元关系 R 的自反传递闭包（即此处的「R-祖先」关系，记作 R∗）专门立项推演。罗素在定义末尾附加「x 属于关系 R 的场（定义域与逆域之并）」这一限制条件，是为了在形式演算中排除空洞满足：若某孤立个体 z 与任何对象皆不发生关系 R，则「属于 {z}」这一性质会因前件恒假而空洞地成为 R-遗传性质；若不限定在 R 的场内，z 便会成为自身的「R-祖先」。'
          }
        ]
      },
      {
        id: 'imp-ch03-p20',
        type: 'paragraph',
        num: '§ 20',
        original:
          'We have framed the above definitions so that if a term is the ancestor of anything it is its own ancestor and belongs to its own posterity. This is merely for convenience.',
        zh: '我们在拟定上述定义时作了这样的安排：只要一项是任何事物的祖先，它便是它自己的祖先，并且属于它自己的后裔类。这纯粹是为了处理上的便利。'
      },
      {
        id: 'imp-ch03-p21',
        type: 'paragraph',
        num: '§ 21',
        original:
          'It will be observed that if we take for R the relation “parent,” “ancestor” and “posterity” will have the usual meanings, except that a person will be included among his own ancestors and posterity. It is, of course, obvious at once that “ancestor” must be capable of definition in terms of “parent,” but until Frege developed his generalised theory of induction, no one could have defined “ancestor” precisely in terms of “parent.” A brief consideration of this point will serve to show the importance of the theory. A person confronted for the first time with the problem of defining “ancestor” in terms of “parent” would naturally say that A is an ancestor of Z if, between A and Z, there are a certain number of people, B, C, ..., of whom B is a child of A, each is a parent of the next, until the last, who is a parent of Z. But this definition is not adequate unless we add that the number of intermediate terms is to be finite. Take, for example, such a series as the following:—\n\n    -1, -1/2, -1/4, -1/8, ... 1/8, 1/4, 1/2, 1.\n\nHere we have first a series of negative fractions with no end, and then a series of positive fractions with no beginning. Shall we say that, in this series, -1/8 is an ancestor of 1/8? It will be so according to the beginner’s definition suggested above, but it will not be so according to any definition which will give the kind of idea that we wish to define. For this purpose, it is essential that the number of intermediaries should be finite. But, as we saw, “finite” is to be defined by means of mathematical induction, and it is simpler to define the ancestral relation generally at once than to define it first only for the case of the relation of n to n+1, and then extend it to other cases. Here, as constantly elsewhere, generality from the first, though it may require more thought at the start, will be found in the long run to economise thought and increase logical power.',
        zh: '不难注意到，倘若我们取「父母」关系作为 R，那么除了一个人会被算进他自己的祖先与后裔类之中以外，「祖先」与「后裔类」都将具有通常的含义。「祖先」必定能够用「父母」来定义，这当然是一望而知的；但在弗雷格发展出他的广义归纳理论之前，却没有任何人能够用「父母」精确地定义「祖先」。略微考察一下这一点，便足以见出这一理论的重要性。一个初次面对如何用「父母」定义「祖先」这一问题的人，很自然会说：若在 A 与 Z 之间存在若干人 B, C, …，其中 B 是 A 的子女，每一个人都是下一个人的父母，直到最后一个人是 Z 的父母，则 A 是 Z 的祖先。但除非我们补上一句「中间项的数目必须是有穷的」，否则这项定义并不充分。不妨试看下面这样一个序列：\n\n−1, −1/2, −1/4, −1/8, … 1/8, 1/4, 1/2, 1。\n\n这里我们先有一列没有终点的负分数，接着又有一列没有起点的正分数。我们能说在这个序列里，−1/8 是 1/8 的祖先吗？按照上面那位初学者的定义，答案会是肯定的；但按照任何能够给出我们真正想要界定的那种观念的定义，答案都不会是肯定的。为此，中间项的数目是有穷的乃是必不可少的条件。然而正如我们所见，「有穷」本身要靠数学归纳法来定义；与其先只针对 n 对 n + 1 的关系定义祖先关系、再将其推广到其他情形，倒不如从一开始就一般地定义**祖先关系**更为简便。在这里，就像在其他地方屡见不鲜的那样，从一开始就追求普遍性，起初固然要多费几分思索，长远看来却能节省思想并增强逻辑力量。'
      },
      {
        id: 'imp-ch03-p22',
        type: 'paragraph',
        num: '§ 22',
        original:
          'The use of mathematical induction in demonstrations was, in the past, something of a mystery. There seemed no reasonable doubt that it was a valid method of proof, but no one quite knew why it was valid. Some believed it to be really a case of induction, in the sense in which that word is used in logic. Poincaré[5] considered it to be a principle of the utmost importance, by means of which an infinite number of syllogisms could be condensed into one argument. We now know that all such views are mistaken, and that mathematical induction is a definition, not a principle. There are some numbers to which it can be applied, and there are others (as we shall see in Chapter VIII.) to which it cannot be applied. We define the “natural numbers” as those to which proofs by mathematical induction can be applied, i.e. as those that possess all inductive properties. It follows that such proofs can be applied to the natural numbers, not in virtue of any mysterious intuition or axiom or principle, but as a purely verbal proposition. If “quadrupeds” are defined as animals having four legs, it will follow that animals that have four legs are quadrupeds; and the case of numbers that obey mathematical induction is exactly similar.',
        zh: '在证明中运用数学归纳法，在过去曾带有几分神秘色彩。它是一种有效的证明方法，这似乎无可置疑，但谁也不太清楚它为什么有效。有些人相信它[在逻辑学使用该词的意义上真是一种归纳]{#g-imp-c3-05}。庞加莱[^imp-fn-03-5]认为它是一条至为重要的原理，[借此可以将无穷多个三段论浓缩进单一论证之中]{#g-imp-c3-06}。如今我们知道，所有这类看法都是错误的：数学归纳法是一项**定义**，而不是一条原理。有些数可以运用它，另一些数（正如我们将在第八章看到的）则不能运用它。我们将「自然数」定义为那些可以对其运用数学归纳法证明的数，亦即具有一切归纳性质的数。由此便推出，这类证明之所以能够运用于自然数，并非凭借任何神秘的直觉、公理或原理，而纯粹是一条字面分析命题。倘若把「四足兽」定义为长有四条腿的动物，自然就会推出长有四条腿的动物是四足兽；服从数学归纳法的那些数，情形与此完全相同。',
        authorNotes: [
          {
            id: 'imp-fn-03-5',
            original: 'Science and Method, chap. iv.',
            zh: '《科学与方法》第四章。'
          }
        ],
        glosses: [
          {
            id: 'g-imp-c3-05',
            anchor: '在逻辑学使用该词的意义上真是一种归纳',
            content:
              '传统逻辑学中的「经验归纳」（empirical induction，即培根与密尔所称的简单枚举归纳或因果归纳）是从有穷个已观察特例推向全称经验概括的扩充性或然推理；而算术中的递推证明（1575 年弗朗切斯科·毛罗利科在《算术两卷》中首次明确运用，1654 年帕斯卡在《论算术三角形》中定型）则是严格的演绎推理。1838 年，英国逻辑学家奥古斯都·德·摩根（Augustus De Morgan，1806—1871）为《便士百科全书》（Penny Cyclopædia）撰写词条时首创「数学归纳法」（mathematical induction）一名（欧陆文献亦常称「完全归纳」complete induction），致使十九世纪不少经验主义哲学家误以为它与自然科学的经验归纳同属一类推理。'
          },
          {
            id: 'g-imp-c3-06',
            anchor: '借此可以将无穷多个三段论浓缩进单一论证之中',
            content:
              '法国数学家昂利·庞加莱（Henri Poincaré，1854—1912）在 1894 年论文《论数学推理的本性》（后收入 1902 年《科学与假设》第一编第一章）中提出：纯形式逻辑的三段论只是同义反复，无法产生新知识；唯独「递推推理」（raisonnement par récurrence，即数学归纳法）将无穷多个串接的三段论凝聚在单一公式之内，构成了康德意义上的「先天综合判断」，体现心灵确认自身能将同一行为无限重复下去的先验直觉。1905 至 1906 年间，庞加莱在《形而上学与道德评论》（Revue de métaphysique et de morale）连载《数学与逻辑》三篇论文（后编入罗素原注所引 1908 年《科学与方法》第二编第三至五章，英译本合编为第四章），与罗素（《论数学与逻辑的关系》，1905 年 11 月号）及路易·库图拉（Louis Couturat，《为逻辑斯蒂辩》，1906 年 3 月号）展开论辩，指责逻辑主义在检验自然数定义不矛盾时暗中预设归纳原理，犯有循环论证（petitio principii）。'
          }
        ]
      },
      {
        id: 'imp-ch03-p23',
        type: 'paragraph',
        num: '§ 23',
        original:
          'We shall use the phrase “inductive numbers” to mean the same set as we have hitherto spoken of as the “natural numbers.” The phrase “inductive numbers” is preferable as affording a reminder that the definition of this set of numbers is obtained from mathematical induction.',
        zh: '我们将使用「**归纳数**」一词来表示迄今称为「自然数」的那同一集合。「归纳数」这一说法更为可取，因为它可以随时提醒我们，这一数集的定义是由数学归纳法得来的。'
      },
      {
        id: 'imp-ch03-p24',
        type: 'paragraph',
        num: '§ 24',
        original:
          'Mathematical induction affords, more than anything else, the essential characteristic by which the finite is distinguished from the infinite. The principle of mathematical induction might be stated popularly in some such form as “what can be inferred from next to next can be inferred from first to last.” This is true when the number of intermediate steps between first and last is finite, not otherwise. Anyone who has ever watched a goods train beginning to move will have noticed how the impulse is communicated with a jerk from each truck to the next, until at last even the hindmost truck is in motion. When the train is very long, it is a very long time before the last truck moves. If the train were infinitely long, there would be an infinite succession of jerks, and the time would never come when the whole train would be in motion. Nevertheless, if there were a series of trucks no longer than the series of inductive numbers (which, as we shall see, is an instance of the smallest of infinites), every truck would begin to move sooner or later if the engine persevered, though there would always be other trucks further back which had not yet begun to move. This image will help to elucidate the argument from next to next, and its connection with finitude. When we come to infinite numbers, where arguments from mathematical induction will be no longer valid, the properties of such numbers will help to make clear, by contrast, the almost unconscious use that is made of mathematical induction where finite numbers are concerned.',
        zh: '比起其他任何特征，数学归纳法最能提供将有穷同无穷区分开来的本质特征。数学归纳法原理可以用通俗的话大致表述为：「凡可由前项推及紧邻后项者，即可由首项推及末项。」当首项与末项之间的中间步骤数目是有穷的时，这话是成立的，否则便不成立。凡是观察过一列货运列车启动的人都会注意到，冲力是如何伴随着猛然一震从一节车厢传给下一节车厢，直到最后连最末尾那节车厢也开始移动的。当列车很长时，要过很久最后一节车厢才会动起来。倘若列车无穷长，就会有无穷无尽的一连串震动，整列火车全部动起来的时刻永远不会到来。不过，倘若有一列长度不超过归纳数序列的车厢（正如我们将看到的，这是最小无穷的一个实例），那么只要火车头坚持不懈地拉下去，每一节车厢迟早都会开始移动，尽管后方总还会有尚未开始移动的其他车厢。这一形象有助于阐明由前项推及紧邻后项的论证及其与有穷性的关联。等到我们讨论数学归纳法论证不再有效的无穷数时，那些数的性质将通过鲜明对照，帮助我们看清在涉及有穷数的地方人们是如何在近乎不知不觉中运用数学归纳法的。'
      }
    ]
  },
  {
    id: 'ch04-definition-of-order',
    roman: 'IV',
    titleOriginal: 'Chapter IV. The Definition of Order',
    titleZh: '第四章 序的定义',
    aiModel: 'Gemini-4-Carbon',
    blocks: [
      {
        id: 'imp-ch04-p01',
        type: 'paragraph',
        num: '§ 01',
        original:
          'We have now carried our analysis of the series of natural numbers to the point where we have obtained logical definitions of the members of this series, of the whole class of its members, and of the relation of a number to its immediate successor. We must now consider the serial character of the natural numbers in the order 0, 1, 2, 3, ... We ordinarily think of the numbers as in this order, and it is an essential part of the work of analysing our data to seek a definition of “order” or “series” in logical terms.',
        zh: '我们对自然数序列的分析，如今已推进到获得了该序列各个成员、其全体成员所成之类以及一个数对其直接后继之关系的逻辑定义。现在我们必须考察自然数按 0, 1, 2, 3, … 排列时的**序列特征**。我们通常总是把数想成处于这种次序之中；而用逻辑词项为「序」或「序列」寻求一项定义，正是分析我们既有材料这项工作中必不可少的一环。'
      },
      {
        id: 'imp-ch04-p02',
        type: 'paragraph',
        num: '§ 02',
        original:
          'The notion of order is one which has enormous importance in mathematics. Not only the integers, but also rational fractions and all real numbers have an order of magnitude, and this is essential to most of their mathematical properties. The order of points on a line is essential to geometry; so is the slightly more complicated order of lines through a point in a plane, or of planes through a line. Dimensions, in geometry, are a development of order. The conception of a limit, which underlies all higher mathematics, is a serial conception. There are parts of mathematics which do not depend upon the notion of order, but they are very few in comparison with the parts in which this notion is involved.',
        zh: '序的观念在数学中具有极其重大的意义。不仅整数，有理分数与全部实数也都具有大小次序，而这对于它们的绝大多数数学性质都是必不可少的。直线上点的次序对于几何学必不可少；平面内过一点诸直线的次序，或过一直线诸平面的次序，虽然稍复杂一些，也同样如此。几何学中的维数，便是序的进一步发展。构成全部高等数学根基的极限概念，也是一个序列概念。数学中固然有一些部分不依赖于序的观念，但与涉及这一观念的众多部分相比，可谓寥寥无几。'
      },
      {
        id: 'imp-ch04-p03',
        type: 'paragraph',
        num: '§ 03',
        original:
          'In seeking a definition of order, the first thing to realise is that no set of terms has just one order to the exclusion of others. A set of terms has all the orders of which it is capable. Sometimes one order is so much more familiar and natural to our thoughts that we are inclined to regard it as the order of that set of terms; but this is a mistake. The natural numbers—or the “inductive” numbers, as we shall also call them—occur to us most readily in order of magnitude; but they are capable of an infinite number of other arrangements. We might, for example, consider first all the odd numbers and then all the even numbers; or first 1, then all the even numbers, then all the odd multiples of 3, then all the multiples of 5 but not of 2 or 3, then all the multiples of 7 but not of 2 or 3 or 5, and so on through the whole series of primes. When we say that we “arrange” the numbers in these various orders, that is an inaccurate expression: what we really do is to turn our attention to certain relations between the natural numbers, which themselves generate such-and-such an arrangement. We can no more “arrange” the natural numbers than we can the starry heavens; but just as we may notice among the fixed stars either their order of brightness or their distribution in the sky, so there are various relations among numbers which may be observed, and which give rise to various different orders among numbers, all equally legitimate. And what is true of numbers is equally true of points on a line or of the moments of time: one order is more familiar, but others are equally valid. We might, for example, take first, on a line, all the points that have integral co-ordinates, then all those that have non-integral rational co-ordinates, then all those that have algebraic non-rational co-ordinates, and so on, through any set of complications we please. The resulting order will be one which the points of the line certainly have, whether we choose to notice it or not; the only thing that is arbitrary about the various orders of a set of terms is our attention, for the terms themselves have always all the orders of which they are capable.',
        zh: '在为序寻求定义时，首先要认识到的一点是：没有任何一个项的集合只具有唯一一种排他性的序。一个项的集合同时具有它所能容受的一切序。有时某一种序对我们的思想来说格外熟悉、格外自然，以至于我们倾向于将它视为那个项集的**唯一**之序；但这是一个错误。自然数——或者我们也将称之为「归纳数」——最容易按大小次序浮现在我们脑海中；但它们可以有无穷多种其他的排列方式。例如，我们可以先考虑全部奇数，再考虑全部偶数；或者先取 1，再取全部偶数，再取 3 的全部奇数倍，再取 5 的倍数中非 2 或 3 之倍数的数，再取 7 的倍数中非 2、3 或 5 之倍数的数，如此遍历整个素数序列。当我们说我们把数「排列」成这些不同的序时，这是一种不准确的说法：我们真正做的，是把注意力转向自然数之间的某些关系，而正是这些关系本身生成了如此这般的排列。我们无法「排列」自然数，正犹如我们无法排列灿烂星空一样；但正如我们可以在恒星当中或者留意其亮度等级的次序，或者留意其在天球上的分布位置，数与数之间同样存在着各种可供观察的关系，这些关系在数与数之间产生出各种不同的序，而所有这些序都同样正当。对数成立的道理，对直线上的点或时间中的瞬间也同样成立：某一种序更为熟悉，但其他的序也同样有效。例如，在一条直线上，我们可以先取一切具有整数坐标的点，再取一切具有非整数有理坐标的点，再取一切[具有代数无理坐标的点]{#g-imp-c4-01}，如此下去，随我们的意添上任何一套繁复规则。由此产生的序，无论我们是否选择去留意它，都是直线上诸点确凿无疑本已具有的一种序；在一个项集的种种不同的序当中，唯一带有任意性的只是我们的注意力，因为那些项本身始终具有它们所能容受的一切序。',
        glosses: [
          {
            id: 'g-imp-c4-01',
            anchor: '具有代数无理坐标的点',
            content:
              '代数数（algebraic numbers）指整系数代数方程的一切根，其中包括全部有理数以及如 √2、∛5 之类的代数无理数；与之相对的是不满足任何整系数代数方程的超越数（transcendental numbers，如埃尔米特 1873 年证其超越性的 e 与林德曼 1882 年证其超越性的 π）。康托尔于 1874 年证明全体实代数数虽在直线上处处稠密，仍可与自然数建立一一关联而排成可数序列。'
          }
        ]
      },
      {
        id: 'imp-ch04-p04',
        type: 'paragraph',
        num: '§ 04',
        original:
          'One important result of this consideration is that we must not look for the definition of order in the nature of the set of terms to be ordered, since one set of terms has many orders. The order lies, not in the class of terms, but in a relation among the members of the class, in respect of which some appear as earlier and some as later. The fact that a class may have many orders is due to the fact that there can be many relations holding among the members of one single class. What properties must a relation have in order to give rise to an order?',
        zh: '上述考察引出一个重要结论：既然同一个项集具有多种不同的序，我们就绝不能到待排序项集的本性中去寻找序的定义。**序不在于项所成的类，而在于该类各个成员之间的一种关系**——相对于这种关系，有些成员显得在前，有些成员显得在后。一个类之所以能够具有多种序，是因为在同一个类的各个成员之间可以成立多种不同的关系。那么，一种关系必须具备哪些性质，才能产生出序来呢？'
      },
      {
        id: 'imp-ch04-p05',
        type: 'paragraph',
        num: '§ 05',
        original:
          'The essential characteristics of a relation which is to give rise to order may be discovered by considering that in respect of such a relation we must be able to say, of any two terms in the class which is to be ordered, that one “precedes” and the other “follows.” Now, in order that we may be able to use these words in the way in which we should naturally understand them, we require that the ordering relation should have three properties:—',
        zh: '要想发现产生序的关系所必备的本质特征，不妨这样考虑：相对于这样一种关系，对于待排序类中的任意两项，我们都必须能够说其中一项「先于」另一项，而另一项「后于」前者。为了能按我们自然理解的方式使用这两个词，我们要求这一排序关系具备三项性质：'
      },
      {
        id: 'imp-ch04-p06',
        type: 'paragraph',
        num: '§ 06',
        original:
          '(1) If x precedes y, y must not also precede x. This is an obvious characteristic of the kind of relations that lead to series. If x is less than y, y is not also less than x. If x is earlier in time than y, y is not also earlier than x. If x is to the left of y, y is not to the left of x. On the other hand, relations which do not give rise to series often do not have this property. If x is a brother or sister of y, y is a brother or sister of x. If x is of the same height as y, y is of the same height as x. If x is of a different height from y, y is of a different height from x. In all these cases, when the relation holds between x and y, it also holds between y and x. But with serial relations such a thing cannot happen. A relation having this first property is called asymmetrical.',
        zh: '（1）若 x 先于 y，则 y 绝不可同时也先于 x。这是导向序列的那类关系显而易见的特征。若 x 小于 y，则 y 不会同时也小于 x。若 x 在时间上早于 y，则 y 不会同时也早于 x。若 x 在 y 的左边，则 y 不在 x 的左边。反之，不产生序列的关系往往不具备这项性质。若 x 是 y 的兄弟或姐妹，则 y 也是 x 的兄弟或姐妹。若 x 与 y 身高相同，则 y 也与 x 身高相同。若 x 与 y 身高不同，则 y 也与 x 身高不同。在所有这些情形中，当关系在 x 与 y 之间成立时，它在 y 与 x 之间也成立。但对于序列关系，这种事绝不可能发生。[具备这第一项性质的关系称为非对称的]{#g-imp-c4-02}。',
        glosses: [
          {
            id: 'g-imp-c4-02',
            anchor: '具备这第一项性质的关系称为非对称的',
            content:
              '罗素在《对莱布尼茨哲学的批评性解释》（1900，第 10—15 节）与《数学的原则》第二十六章（第 212—216 节）中系统分析了「非对称关系」（asymmetrical relations）的不可还原性。自亚里士多德以来的传统主谓逻辑假定一切命题归根结底皆具「主词具有谓词」（S is P）的形式：莱布尼茨的单子论据此将关系化约为孤立单子各自的内在属性，布拉德雷的一元论则将关系归结为单一整体的属性，并因无法消融关系而宣称时空与序列皆属自相矛盾的假象。罗素指出，对称关系（如「相等」）尚可形式地改写为两项共享同一性质，而「x 大于 y」「x 早于 y」等非对称关系一旦还原为各项内在谓词或整体属性，便无法表出关系方向的不可逆性，由此确立了「外在关系说」（doctrine of external relations）。在形式工具上，美国逻辑学家查尔斯·桑德斯·皮尔士（Charles Sanders Peirce，1839—1914，1870—1885 年系列关系逻辑论文）与施罗德（《逻辑代数讲义》第三卷《关系代数与逻辑》，1895）先后建立起二元及多元关系演算。'
          }
        ]
      },
      {
        id: 'imp-ch04-p07',
        type: 'paragraph',
        num: '§ 07',
        original:
          '(2) If x precedes y and y precedes z, x must precede z. This may be illustrated by the same instances as before: less, earlier, left of. But as instances of relations which do not have this property only two of our previous three instances will serve. If x is brother or sister of y, and y of z, x may not be brother or sister of z, since x and z may be the same person. The same applies to difference of height, but not to sameness of height, which has our second property but not our first. The relation “father,” on the other hand, has our first property but not our second. A relation having our second property is called transitive.',
        zh: '（2）若 x 先于 y 且 y 先于 z，则 x 必定先于 z。这可以用刚才那几个例子来说明：小于、早于、在……左边。至于不具备这项性质的关系实例，刚才三个反例中只有两个适用。若 x 是 y 的兄弟或姐妹，而 y 又是 z 的兄弟或姐妹，x 未必是 z 的兄弟或姐妹，因为 x 与 z 可能是同一个人。身高不同也是如此；但身高相同却不然，它具备我们的第二项性质而不具备第一项性质。另一方面，「父亲」这一关系则具备我们的第一项性质而不具备第二项性质。具备这第二项性质的关系称为**传递的**。'
      },
      {
        id: 'imp-ch04-p08',
        type: 'paragraph',
        num: '§ 08',
        original:
          '(3) Given any two terms of the class which is to be ordered, there must be one which precedes and the other which follows. For example, of any two integers, or fractions, or real numbers, one is smaller and the other greater; but of any two complex numbers this is not true. Of any two moments in time, one must be earlier than the other; but of events, which may be simultaneous, this cannot be said. Of two points on a line, one must be to the left of the other. A relation having this third property is called connected.',
        zh: '（3）给定待排序类中的任意两项，必定有一项居先而另一项居后。例如，任意两个整数、分数或实数，必定一个较小而另一个较大；但对于任意两个复数，这却不成立。时间中的任意两个瞬间，必定一个早于另一个；但对于可能同时发生的事件，就不能这样说了。一条直线上的两个点，必定一个在另一个的左边。具备这第三项性质的关系称为**连通的**。'
      },
      {
        id: 'imp-ch04-p09',
        type: 'paragraph',
        num: '§ 09',
        original:
          'When a relation possesses these three properties, it is of the sort to give rise to an order among the terms between which it holds; and wherever an order exists, some relation having these three properties can be found generating it.',
        zh: '当一种关系具备这三项性质时，它便属于能在其所关联的各项之间产生出序来的那种关系；而且凡是存在序的地方，总能找到某种具备这三项性质的关系在生成它。'
      },
      {
        id: 'imp-ch04-p10',
        type: 'paragraph',
        num: '§ 10',
        original:
          'Before illustrating this thesis, we will introduce a few definitions.\n\n(1) A relation is said to be an aliorelative,[1] or to be contained in or imply diversity, if no term has this relation to itself. Thus, for example, “greater,” “different in size,” “brother,” “husband,” “father” are aliorelatives; but “equal,” “born of the same parents,” “dear friend” are not.\n\n(2) The square of a relation is that relation which holds between two terms x and z when there is an intermediate term y such that the given relation holds between x and y and between y and z. Thus “paternal grandfather” is the square of “father,” “greater by 2” is the square of “greater by 1,” and so on.\n\n(3) The domain of a relation consists of all those terms that have the relation to something or other, and the converse domain consists of all those terms to which something or other has the relation. These words have been already defined, but are recalled here for the sake of the following definition:—\n\n(4) The field of a relation consists of its domain and converse domain together.\n\n(5) One relation is said to contain or be implied by another if it holds whenever the other holds.',
        zh: '在举例阐明这一论断之前，我们先引入几项定义。\n\n（1）若没有任何项对自身具有某种关系，则该关系[称为一项异己关系]{#g-imp-c4-03}[^imp-fn-04-1]，或称为包含于相异性之中、蕴涵相异性。因此，举例来说，「大于」、「大小不同」、「兄弟」、「丈夫」、「父亲」都是异己关系；而「等于」、「同胞所生」、「挚友」则不是。\n\n（2）关系的**平方**是这样一种关系：当存在中间项 y，使得给定关系在 x 与 y 之间以及 y 与 z 之间同时成立时，该关系便在 x 与 z 两项之间成立。因此，「祖父」是「父亲」的平方，「大 2」是「大 1」的平方，依此类推。\n\n（3）关系的**定义域**由对某物具有该关系的一切项组成，**逆域**则由某物对之具有该关系的一切项组成。这两个词前文已经定义过，这里重提是为了给出下一项定义：\n\n（4）关系的**场**由它的定义域与逆域合在一起组成。\n\n（5）若每当后一种关系成立时前一种关系必定成立，就说前一种关系**包含**后一种关系，或为后一种关系所**蕴涵**。',
        authorNotes: [
          {
            id: 'imp-fn-04-1',
            original: 'This term is due to C. S. Peirce.',
            zh: '这一术语归功于查尔斯·桑德斯·皮尔士。'
          }
        ],
        glosses: [
          {
            id: 'g-imp-c4-03',
            anchor: '称为一项异己关系',
            content:
              '英文 **aliorelative** 由皮尔士以拉丁语 alius（他者、异者）与 relativum（关系项）铸造而成，在鲍德温主编的《哲学与心理学辞典》（1901—1902）及关系逻辑论文中用以指称「唯独在相异个体之间方能成立、绝无任何对象对自身成立」的关系（现代数理逻辑通称「非自反关系」irreflexive relation），与对自身成立的 idemrelative 相对。《数学原理》第一卷采纳此词，将其刻画为包含于相异关系 J 之中的关系；并在第二卷第 204 节以「异己性（在传递条件下等价于非对称性）、传递性与连通性」三者合取，给出严格线性「序列关系」（serial relation，记作 Ser）的纯逻辑定义。'
          }
        ]
      },
      {
        id: 'imp-ch04-p11',
        type: 'paragraph',
        num: '§ 11',
        original:
          'It will be seen that an asymmetrical relation is the same thing as a relation whose square is an aliorelative. It often happens that a relation is an aliorelative without being asymmetrical, though an asymmetrical relation is always an aliorelative. For example, “spouse” is an aliorelative, but is symmetrical, since if x is the spouse of y, y is the spouse of x. But among transitive relations, all aliorelatives are asymmetrical as well as vice versa.',
        zh: '由此可见，非对称关系与平方为异己关系的关系是一回事。一种关系往往是异己关系却并非非对称的，尽管非对称关系必定是异己关系。例如，「配偶」是异己关系，却是对称的，因为若 x 是 y 的配偶，y 也是 x 的配偶。但在传递关系当中，一切异己关系都是非对称的，反之亦然。'
      },
      {
        id: 'imp-ch04-p12',
        type: 'paragraph',
        num: '§ 12',
        original:
          'From the definitions it will be seen that a transitive relation is one which is implied by its square, or, as we also say, “contains” its square. Thus “ancestor” is transitive, because an ancestor’s ancestor is an ancestor; but “father” is not transitive, because a father’s father is not a father. A transitive aliorelative is one which contains its square and is contained in diversity; or, what comes to the same thing, one whose square implies both it and diversity—because, when a relation is transitive, asymmetry is equivalent to being an aliorelative.',
        zh: '由上述定义可以看出，传递关系就是为其自身平方所蕴涵的关系，或者按我们另一种说法，是「包含」其自身平方的关系。因此，「祖先」是传递的，因为祖先的祖先仍是祖先；但「父亲」不是传递的，因为父亲的父亲不是父亲。传递的异己关系，是既包含其自身平方、又包含于相异性之中的关系；或者说得效果完全一样，是其平方既蕴涵它自身又蕴涵相异性的关系——因为当一种关系是传递的时，非对称性等价于作为异己关系。'
      },
      {
        id: 'imp-ch04-p13',
        type: 'paragraph',
        num: '§ 13',
        original:
          'A relation is connected when, given any two different terms of its field, the relation holds between the first and the second or between the second and the first (not excluding the possibility that both may happen, though both cannot happen if the relation is asymmetrical).',
        zh: '当给定其场中任意两个不同的项，关系或者在第一项与第二项之间成立，或者在第二项与第一项之间成立时（这里并不排除两种情形同时发生的可能性，尽管若该关系是非对称的，二者便不可能同时发生），该关系就是**连通的**。'
      },
      {
        id: 'imp-ch04-p14',
        type: 'paragraph',
        num: '§ 14',
        original:
          'It will be seen that the relation “ancestor,” for example, is an aliorelative and transitive, but not connected; it is because it is not connected that it does not suffice to arrange the human race in a series.',
        zh: '由此可见，举例来说，「祖先」关系是异己关系且是传递的，却不是连通的；正因为它不是连通的，才不足以将整个人类排成一个序列。'
      },
      {
        id: 'imp-ch04-p15',
        type: 'paragraph',
        num: '§ 15',
        original:
          'The relation “less than or equal to,” among numbers, is transitive and connected, but not asymmetrical or an aliorelative.',
        zh: '数与数之间的「小于或等于」关系是传递的且连通的，却既不是非对称的，也不是异己关系。'
      },
      {
        id: 'imp-ch04-p16',
        type: 'paragraph',
        num: '§ 16',
        original:
          'The relation “greater or less” among numbers is an aliorelative and is connected, but is not transitive, for if x is greater or less than y, and y is greater or less than z, it may happen that x and z are the same number.',
        zh: '数与数之间的「大于或小于」关系是异己关系且是连通的，却不是传递的；因为若 x 大于或小于 y，且 y 大于或小于 z，完全可能出现 x 与 z 是同一个数的情形。'
      },
      {
        id: 'imp-ch04-p17',
        type: 'paragraph',
        num: '§ 17',
        original:
          'Thus the three properties of being (1) an aliorelative, (2) transitive, and (3) connected, are mutually independent, since a relation may have any two without having the third.',
        zh: '因此，（1）作为异己关系、（2）传递的与（3）连通的这三项性质是彼此独立的，因为一种关系可以具备其中任意两项而不具备第三项。'
      },
      {
        id: 'imp-ch04-p18',
        type: 'paragraph',
        num: '§ 18',
        original:
          'We now lay down the following definition:—\n\nA relation is serial when it is an aliorelative, transitive, and connected; or, what is equivalent, when it is asymmetrical, transitive, and connected.\n\nA series is the same thing as a serial relation.',
        zh: '现在我们确立如下定义：\n\n**当一种关系是异己关系、传递的且连通的时——或者等价地说，当它是非对称的、传递的且连通的时——该关系就是序列关系。**\n\n**序列与序列关系是同一回事。**'
      },
      {
        id: 'imp-ch04-p19',
        type: 'paragraph',
        num: '§ 19',
        original:
          'It might have been thought that a series should be the field of a serial relation, not the serial relation itself. But this would be an error. For example,\n\n    1, 2, 3; 1, 3, 2; 2, 3, 1; 2, 1, 3; 3, 1, 2; 3, 2, 1\n\nare six different series which all have the same field. If the field were the series, there could only be one series with a given field. What distinguishes the above six series is simply the different ordering relations in the six cases. Given the ordering relation, the field and the order are both determinate. Thus the ordering relation may be taken to be the series, but the field cannot be so taken.',
        zh: '人们或许会以为，序列应当是序列关系的场，而不是序列关系本身。但这却是一个错误。例如，\n\n1, 2, 3；1, 3, 2；2, 3, 1；2, 1, 3；3, 1, 2；3, 2, 1\n\n是具有同一个场的六个不同序列。倘若场就是序列，那么对于一个给定的场就只能有一个序列了。将上述六个序列区分开来的，纯粹是六种情形下各不相同的排序关系。一旦给定排序关系，场与序便双双确定下来。因此，可以把排序关系视作序列，却不能把场视作序列。'
      },
      {
        id: 'imp-ch04-p20',
        type: 'paragraph',
        num: '§ 20',
        original:
          'Given any serial relation, say P, we shall say that, in respect of this relation, x “precedes” y if x has the relation P to y, which we shall write “xPy” for short. The three characteristics which P must have in order to be serial are:\n\n    (1) We must never have xPx, i.e. no term must precede itself.\n\n    (2) P^2 must imply P, i.e. if x precedes y and y precedes z, x must precede z.\n\n    (3) If x and y are two different terms in the field of P, we shall have xPy or yPx, i.e. one of the two must precede the other.\n\nThe reader can easily convince himself that, where these three properties are found in an ordering relation, the characteristics we expect of series will also be found, and vice versa. We are therefore justified in taking the above as a definition of order or series. And it will be observed that the definition is effected in purely logical terms.',
        zh: '给定任意序列关系，比方说 P，若 x 对 y 具有关系 P，简记作「xPy」，我们就说相对于这一关系，x「先于」y。P 要成为序列关系所必须具备的三项特征是：\n\n（1）绝不可有 xPx，即没有任何项先于自身。\n\n（2）P² 必须蕴涵 P，即若 x 先于 y 且 y 先于 z，则 x 必定先于 z。\n\n（3）若 x 与 y 是 P 的场中两个不同的项，则必有 xPy 或 yPx，即二者之中必有一项先于另一项。\n\n读者很容易使自己信服：凡是在排序关系中发现这三项性质的地方，也必定会发现我们期望序列具备的种种特征，反之亦然。因此，我们完全有理由把上述规定采纳为序或序列的定义。而且不难注意到，这项定义是纯用逻辑词项完成的。'
      },
      {
        id: 'imp-ch04-p21',
        type: 'paragraph',
        num: '§ 21',
        original:
          'Although a transitive asymmetrical connected relation always exists wherever there is a series, it is not always the relation which would most naturally be regarded as generating the series. The natural-number series may serve as an illustration. The relation we assumed in considering the natural numbers was the relation of immediate succession, i.e. the relation between consecutive integers. This relation is asymmetrical, but not transitive or connected. We can, however, derive from it, by the method of mathematical induction, the “ancestral” relation which we considered in the preceding chapter. This relation will be the same as “less than or equal to” among inductive integers. For purposes of generating the series of natural numbers, we want the relation “less than,” excluding “equal to.” This is the relation of m to n when m is an ancestor of n but not identical with n, or (what comes to the same thing) when the successor of m is an ancestor of n in the sense in which a number is its own ancestor. That is to say, we shall lay down the following definition:—\n\nAn inductive number m is said to be less than another number n when n possesses every hereditary property possessed by the successor of m.\n\nIt is easy to see, and not difficult to prove, that the relation “less than,” so defined, is asymmetrical, transitive, and connected, and has the inductive numbers for its field. Thus by means of this relation the inductive numbers acquire an order in the sense in which we defined the term “order,” and this order is the so-called “natural” order, or order of magnitude.',
        zh: '尽管凡有序列之处必定存在一种传递的、非对称的且连通的关系，但它却未必总是最自然地被视为生成该序列的那种关系。不妨以自然数序列为例。我们在考察自然数时所假定的关系，是直接相承关系，即相邻整数之间的关系。这一关系是非对称的，却既不是传递的也不是连通的。不过，我们可以用数学归纳法从它推导出前一章考察过的「祖先」关系。这一关系与归纳整数之间的「小于或等于」关系相同。为了生成自然数序列，我们需要的是排除掉「等于」之后的「小于」关系。这就是当 m 是 n 的祖先却与 n 不相同时 m 对 n 的关系，或者（说得效果一样）在一数算作其自身祖先的意义上，当 m 的后继是 n 的祖先时 m 对 n 的关系。也就是说，我们将确立如下定义：\n\n**当另一数 n 具有归纳数 m 的后继所具有的每一项遗传性质时，就称归纳数 m 小于另一数 n。**\n\n不难看出、亦不难证明，如此定义的「小于」关系是非对称的、传递的且连通的，并且以归纳数为其场。于是，凭借这一关系，归纳数便在我们界定「序」这一词项的意义上获得了一种序，而这种序就是所谓的「自然」次序，即大小次序。'
      },
      {
        id: 'imp-ch04-p22',
        type: 'paragraph',
        num: '§ 22',
        original:
          'The generation of series by means of relations more or less resembling that of n to n+1 is very common. The series of the Kings of England, for example, is generated by relations of each to his successor. This is probably the easiest way, where it is applicable, of conceiving the generation of a series. In this method we pass on from each term to the next, as long as there is a next, or back to the one before, as long as there is one before. This method always requires the generalised form of mathematical induction in order to enable us to define “earlier” and “later” in a series so generated. On the analogy of “proper fractions,” let us give the name “proper posterity of x with respect to R” to the class of those terms that belong to the R-posterity of some term to which x has the relation R, in the sense which we gave before to “posterity,” which includes a term in its own posterity. Reverting to the fundamental definitions, we find that the “proper posterity” may be defined as follows:—\n\nThe “proper posterity” of x with respect to R consists of all terms that possess every R-hereditary property possessed by every term to which x has the relation R.\n\nIt is to be observed that this definition has to be so framed as to be applicable not only when there is only one term to which x has the relation R, but also in cases (as e.g. that of father and child) where there may be many terms to which x has the relation R. We define further:\n\nA term x is a “proper ancestor” of y with respect to R if y belongs to the proper posterity of x with respect to R.\n\nWe shall speak for short of “R-posterity” and “R-ancestors” when these terms seem more convenient.',
        zh: '借或多或少类似于 n 对 n + 1 那种关系来生成序列，是非常普遍的做法。例如，英格兰历代国王的序列，便是由每一位国王对其继位者的关系生成的。在适用的场合，这大概是构想序列如何生成的最简便方式了。在这种方法中，只要还有下一项，我们就从每一项推向下一项；或者只要还有前一项，就回溯到前一项。这种方法总是需要动用广义形式的数学归纳法，才能使我们在如此生成的序列中定义「较早」与「较晚」。比照「真分数」的叫法，在我们前文赋予「后裔类」——即将一项本身也算入其后裔类之中——的意义上，不妨把属于「x 对之具有关系 R 的某一项的 R-后裔类」的那些项所成之类，命名为「[x 关于 R 的真后裔类]{#g-imp-c4-04}」。回到基本定义上来，我们发现「真后裔类」可以定义如下：\n\n**x 关于 R 的「真后裔类」，由这样的一切项组成：凡是 x 对之具有关系 R 的每一项皆具有的 R-遗传性质，这些项全都具有。**\n\n应当注意，这项定义的拟定方式，必须使其不仅适用于 x 只对唯一一项具有关系 R 的情形，而且同样适用于（例如父亲与子女那样）x 可能对许多项具有关系 R 的情形。我们进一步定义：\n\n**若 y 属于 x 关于 R 的真后裔类，则项 x 是 y 关于 R 的「真祖先」。**\n\n当简称更为方便时，我们将直接说「R-后裔类」与「R-祖先」。',
        glosses: [
          {
            id: 'g-imp-c4-04',
            anchor: 'x 关于 R 的真后裔类',
            content:
              '英文 **proper posterity**，仿照算术中分子严格小于分母的「真分数」（proper fraction）以及集合论中排除自身后的「真子类」（proper subclass）命名。《数学原理》第一卷第 91 节将「真祖先关系」（记作 Rpo）定义为关系 R 与自反传递闭包（R-祖先关系）的关系积：在无环序列中，x 的 R-后裔类对应「大于或等于 x」，而真后裔类则严格迈出至少一步 R，对应排除自身后的「严格大于 x」。'
          }
        ]
      },
      {
        id: 'imp-ch04-p23',
        type: 'paragraph',
        num: '§ 23',
        original:
          'Reverting now to the generation of series by the relation R between consecutive terms, we see that, if this method is to be possible, the relation “proper R-ancestor” must be an aliorelative, transitive, and connected. Under what circumstances will this occur? It will always be transitive: no matter what sort of relation R may be, “R-ancestor” and “proper R-ancestor” are always both transitive. But it is only under certain circumstances that it will be an aliorelative or connected. Consider, for example, the relation to one’s left-hand neighbour at a round dinner-table at which there are twelve people. If we call this relation R, the proper R-posterity of a person consists of all who can be reached by going round the table from right to left. This includes everybody at the table, including the person himself, since twelve steps bring us back to our starting-point. Thus in such a case, though the relation “proper R-ancestor” is connected, and though R itself is an aliorelative, we do not get a series because “proper R-ancestor” is not an aliorelative. It is for this reason that we cannot say that one person comes before another with respect to the relation “right of” or to its ancestral derivative.\n\nThe above was an instance in which the ancestral relation was connected but not contained in diversity. An instance where it is contained in diversity but not connected is derived from the ordinary sense of the word “ancestor.” If x is a proper ancestor of y, x and y cannot be the same person; but it is not true that of any two persons one must be an ancestor of the other.',
        zh: '现在回到由相邻项之间的关系 R 来生成序列的问题上，我们看到：要想使这种方法可行，「真 R-祖先」关系就必须是异己关系、传递的且连通的。在什么条件下才会如此呢？它永远是传递的：无论 R 是什么性质的关系，「R-祖先」与「真 R-祖先」永远都是传递的。但唯有在特定条件下，它才会是异己关系或连通的。试想一张坐着十二个人的圆形餐桌，考虑每个人对其左手边邻座的关系。倘若把这一关系称为 R，那么一个人的真 R-后裔类便由沿着餐桌从右往左绕行所能抵达的一切人组成。这囊括了桌上每一个人，也包括他自己在内，因为走满十二步便使我们回到了起点。于是在这种情形下，尽管「真 R-祖先」关系是连通的，尽管 R 本身也是异己关系，我们却得不到一个序列，因为「真 R-祖先」不是异己关系。正因如此，相对于「在……右边」这一关系或其派生的祖先关系，我们无法说一个人排在另一个人之前。\n\n上面是一个祖先关系连通却不包含于相异性之中的实例。至于包含于相异性之中却不连通的实例，则可由日常意义上的「祖先」一词得出。若 x 是 y 的真祖先，x 与 y 绝不可能是同一个人；但并非任意两个人当中必定有一个人是另一个人的祖先。'
      },
      {
        id: 'imp-ch04-p24',
        type: 'paragraph',
        num: '§ 24',
        original:
          'The question of the circumstances under which series can be generated by ancestral relations derived from relations of consecutiveness is often important. Some of the most important cases are the following: Let R be a many-one relation, and let us confine our attention to the posterity of some term x. When so confined, the relation “proper R-ancestor” must be connected; therefore all that remains to ensure its being serial is that it shall be contained in diversity. This is a generalisation of the instance of the dinner-table. Another generalisation consists in taking R to be a one-one relation, and including the ancestry of x as well as the posterity. Here again, the one condition required to secure the generation of a series is that the relation “proper R-ancestor” shall be contained in diversity.',
        zh: '探讨在何种条件下能由相继关系派生的祖先关系生成序列，往往十分重要。其中最重要的几种情形如下：设 R 为多对一关系，并将我们的注意力限定在某一项 x 的后裔类之内。作此限定之后，「真 R-祖先」关系必定是连通的；因此，要确保它成为序列关系，剩下的全部要求就只是它必须包含于相异性之中。这是对上述圆桌实例的一项推广。另一项推广是取 R 为一一关系，并且将 x 的祖先类连同后裔类一并纳入进来。在这里，为确保生成一个序列所需的唯一条件，同样是「真 R-祖先」关系必须包含于相异性之中。'
      },
      {
        id: 'imp-ch04-p25',
        type: 'paragraph',
        num: '§ 25',
        original:
          'The generation of order by means of relations of consecutiveness, though important in its own sphere, is less general than the method which uses a transitive relation to define the order. It often happens in a series that there are an infinite number of intermediate terms between any two that may be selected, however near together these may be. Take, for instance, fractions in order of magnitude. Between any two fractions there are others—for example, the arithmetic mean of the two. Consequently there is no such thing as a pair of consecutive fractions. If we depended upon consecutiveness for defining order, we should not be able to define the order of magnitude among fractions. But in fact the relations of greater and less among fractions do not demand generation from relations of consecutiveness, and the relations of greater and less among fractions have the three characteristics which we need for defining serial relations. In all such cases the order must be defined by means of a transitive relation, since only such a relation is able to leap over an infinite number of intermediate terms. The method of consecutiveness, like that of counting for discovering the number of a collection, is appropriate to the finite; it may even be extended to certain infinite series, namely, those in which, though the total number of terms is infinite, the number of terms between any two is always finite; but it must not be regarded as general. Not only so, but care must be taken to eradicate from the imagination all habits of thought resulting from supposing it general. If this is not done, series in which there are no consecutive terms will remain difficult and puzzling. And such series are of vital importance for the understanding of continuity, space, time, and motion.',
        zh: '借相继关系来生成序的方法，在它自身的适用范围内固然重要，但比起直接用传递关系来定义序的方法，普遍性却有所不及。在一个序列中，往往会出现这样的情形：无论所选的两项靠得多么近，在任意选定的两项之间都存在无穷多个中间项。试以按大小次序排列的分数为例。在任意两个分数之间都另有其他分数——例如这两个分数的算术平均数。因此，根本不存在所谓一对相邻的分数。倘若我们依赖相继关系去定义序，就无法定义分数之间的大小次序了。但事实上，分数之间的大于和小于关系并不需要从相继关系中生成出来，而且分数之间的大于和小于关系本身就具备我们定义序列关系所需的那三项特征。在所有这类情形中，序都必须借传递关系来定义，因为唯有传递关系才能跨越无穷多个中间项。相继关系的方法，就像用来查明一个汇集有多少项的计数法一样，原本是适用于有穷范围的；它固然也可以推广到某些无穷序列，即那些总项数虽然无穷、但任意两项之间的项数始终有穷的序列；却绝不可将它视为普遍通用的方法。不仅如此，我们还必须留心从想象中根除因误认其普遍通用而养成的一切思维习惯。倘若做不到这一点，不存在相邻项的序列就会始终显得艰深而令人困惑。而这类序列对于理解连续性、空间、时间与运动具有生死攸关的意义。'
      },
      {
        id: 'imp-ch04-p26',
        type: 'paragraph',
        num: '§ 26',
        original:
          'There are many ways in which series may be generated, but all depend upon the finding or construction of an asymmetrical transitive connected relation. Some of these ways have considerable importance. We may take as illustrative the generation of series by means of a three-term relation which we may call “between.” This method is very useful in geometry, and may serve as an introduction to relations having more than two terms; it is best introduced in connection with elementary geometry.\n\nGiven any three points on a straight line in ordinary space, there must be one of them which is between the other two. This will not be the case with the points on a circle or any other closed curve, because, given any three points on a circle, we can travel from any one to any other without passing through the third. In fact, the notion “between” is characteristic of open series—or series in the strict sense—as opposed to what may be called “cyclic” series, where, as with people at the dinner-table, a sufficient journey brings us back to our starting-point. This notion of “between” may be chosen as the fundamental notion of ordinary geometry; but for the present we will only consider its application to a single straight line and to the ordering of the points on a straight line.[2] Taking any two points a, b, the line (ab) consists of three parts (besides a and b themselves):\n\n    (1) Points between a and b.\n\n    (2) Points x such that a is between x and b.\n\n    (3) Points y such that b is between y and a.\n\nThus the line (ab) can be defined in terms of the relation “between.”',
        zh: '生成序列的途径多种多样，但全都仰赖发现或构造出一种非对称的、传递的且连通的关系。其中若干途径具有相当重要的地位。作为示例，我们可以考察借一种可称为「**介于**」的三项关系来生成序列的方法。这种方法在几何学中极为有用，并且可以作为研究多于两项之关系的入门导引；最好结合初等几何学来加以引介。\n\n给定普通空间一条直线上的任意三个点，其中必定有一个点介于另外两个点之间。对于圆周或其他任何闭合曲线上的点，情形则并非如此；因为给定圆周上的任意三个点，我们不经过第三个点也能从其中任意一点走到另一点。事实上，与那种像圆桌宾客一样走够一段路程便回到起点的所谓「循环」序列相对，「介于」乃是开序列——亦即严格意义上的序列——所特有的观念。[这「介于」观念可选作普通几何学的基本观念]{#g-imp-c4-05}；不过眼下我们只考察它在单一一条直线以及直线上诸点排序中的应用[^imp-fn-04-2]。任取两点 a, b，直线 (ab)（除 a 与 b 本身之外）由三个部分组成：\n\n（1）介于 a 与 b 之间的点。\n\n（2）使 a 介于 x 与 b 之间的点 x。\n\n（3）使 b 介于 y 与 a 之间的点 y。\n\n因此，直线 (ab) 可以用「介于」关系来定义。',
        authorNotes: [
          {
            id: 'imp-fn-04-2',
            original:
              'Cf. Rivista di Matematica, iv. pp. 55ff.; Principles of Mathematics, p. 394 (§375).',
            zh: '参见《数学评论》第四卷第 55 页及以下诸页；《数学的原则》第 394 页（第 375 节）。'
          }
        ],
        glosses: [
          {
            id: 'g-imp-c4-05',
            anchor: '这「介于」观念可选作普通几何学的基本观念',
            content:
              '欧几里得《几何原本》在证明中多处依赖图形直观位置而未将「介于」（between）列为显式公理，直至德国数学家莫里茨·帕施（Moritz Pasch）在《近代几何学讲义》（Vorlesungen über neuere Geometrie，1882）中抽离出刻画共线点次序的「顺序公理」，开启了现代几何学的严格公理化。其后，皮亚诺在《按逻辑阐述的几何原理》（1889）及罗素原注所引《数学评论》（Rivista di Matematica）第四卷论文《论几何学基础》（1894，第 51—90 页）中，以点与「介于」三项关系为初始观念重构仿射与度量几何；意大利逻辑学家乔瓦尼·瓦伊拉蒂（Giovanni Vailati）于同刊（1892、1895）分析了线性序与「介于」的形式公理，这一脉络继而汇入大卫·希尔伯特《几何基础》（1899）的第二组顺序公理，并由罗素在《数学的原则》第四编「序」与第六编「空间」（第 375 节）中归纳为正文随后列出的七条形式公设。'
          }
        ]
      },
      {
        id: 'imp-ch04-p27',
        type: 'paragraph',
        num: '§ 27',
        original:
          'In order that this relation “between” may arrange the points of the line in an order from left to right, we need certain assumptions, namely, the following:—\n\n(1) If anything is between a and b, a and b are not identical.\n\n(2) Anything between a and b is also between b and a.\n\n(3) Anything between a and b is not identical with a (nor, consequently, with b, in virtue of (2)).\n\n(4) If x is between a and b, anything between a and x is also between a and b.\n\n(5) If x is between a and b, and b is between x and y, then b is between a and y.\n\n(6) If x and y are between a and b, then either x and y are identical, or x is between a and y, or x is between y and b.\n\n(7) If b is between a and x and also between a and y, then either x and y are identical, or x is between b and y, or y is between b and x.\n\nThese seven properties are obviously verified in the case of points on a straight line in ordinary space. Any three-term relation which verifies them gives rise to series, as may be seen from the following definitions. For the sake of definiteness, let us assume that a is to the left of b. Then the points of the line (ab) are (1) those between which and b, a lies—these we will call to the left of a; (2) a itself; (3) those between a and b; (4) b itself; (5) those between which and a lies b—these we will call to the right of b. We may now define generally that of two points x, y, on the line (ab), we shall say that x is “to the left of” y in any of the following cases:—\n\n    (1) When x and y are both to the left of a, and y is between x and a;\n\n    (2) When x is to the left of a, and y is a or b or between a and b or to the right of b;\n\n    (3) When x is a, and y is between a and b or is b or is to the right of b;\n\n    (4) When x and y are both between a and b, and y is between x and b;\n\n    (5) When x is between a and b, and y is b or to the right of b;\n\n    (6) When x is b and y is to the right of b;\n\n    (7) When x and y are both to the right of b and x is between b and y.\n\nIt will be found that, from the seven properties which we have assigned to the relation “between,” it can be deduced that the relation “to the left of,” as above defined, is a serial relation as we defined that term. It is important to notice that nothing in the definitions or the argument depends upon our meaning by “between” the actual relation of that name which occurs in empirical space: any three-term relation having the above seven purely formal properties will serve the purpose of the argument equally well.',
        zh: '为了使这一「介于」关系能够将直线上的诸点排成从左到右的次序，我们需要若干假定，即如下七条：\n\n（1）若有某物介于 a 与 b 之间，则 a 与 b 不相同。\n\n（2）凡介于 a 与 b 之间者，亦介于 b 与 a 之间。\n\n（3）凡介于 a 与 b 之间者，与 a 不相同（因而根据（2），与 b 亦不相同）。\n\n（4）若 x 介于 a 与 b 之间，则凡介于 a 与 x 之间者亦介于 a 与 b 之间。\n\n（5）若 x 介于 a 与 b 之间，且 b 介于 x 与 y 之间，则 b 介于 a 与 y 之间。\n\n（6）若 x 与 y 均介于 a 与 b 之间，则或者 x 与 y 相同，或者 x 介于 a 与 y 之间，或者 x 介于 y 与 b 之间。\n\n（7）若 b 既介于 a 与 x 之间，又介于 a 与 y 之间，则或者 x 与 y 相同，或者 x 介于 b 与 y 之间，或者 y 介于 b 与 x 之间。\n\n对于普通空间一条直线上的点，这七项性质显然都得到满足。任何满足这七项性质的三项关系都能产生出序列来，这可以从如下定义中看清。为了确定起见，不妨假定 a 在 b 的左边。那么直线 (ab) 上的点便是：（1）使 a 介于它们与 b 之间的那些点——我们称之为在 a 的左边；（2）a 本身；（3）介于 a 与 b 之间的那些点；（4）b 本身；（5）使 b 介于它们与 a 之间的那些点——我们称之为在 b 的右边。现在我们可以一般地定义：对于直线 (ab) 上的两点 x, y，在以下任一情形中，我们就说 x「在 y 的左边」：\n\n（1）当 x 与 y 均在 a 的左边，且 y 介于 x 与 a 之间时；\n\n（2）当 x 在 a 的左边，且 y 是 a、或是 b、或介于 a 与 b 之间、或在 b 的右边时；\n\n（3）当 x 是 a，且 y 介于 a 与 b 之间、或是 b、或在 b 的右边时；\n\n（4）当 x 与 y 均介于 a 与 b 之间，且 y 介于 x 与 b 之间时；\n\n（5）当 x 介于 a 与 b 之间，且 y 是 b 或在 b 的右边时；\n\n（6）当 x 是 b 且 y 在 b 的右边时；\n\n（7）当 x 与 y 均在 b 的右边，且 x 介于 b 与 y 之间时。\n\n不难发现，由我们赋予「介于」关系的七项性质可以演绎推出：如上定义的「在……左边」关系，正是我们所定义的那种序列关系。有一点至为重要，务请注意：在上述定义或论证中，没有任何地方依赖于我们用「介于」一词去指经验空间中实际出现的同名关系；任何具备上述七项纯形式性质的三项关系，都同样能够圆满达成这一论证的目的。'
      },
      {
        id: 'imp-ch04-p28',
        type: 'paragraph',
        num: '§ 28',
        original:
          'Cyclic order, such as that of the points on a circle, cannot be generated by means of three-term relations of “between.” We need a relation of four terms, which may be called “separation of couples.” The point may be illustrated by considering a journey round the world. One may go from England to New Zealand by way of Suez or by way of San Francisco; we cannot say definitely that either of these two places is “between” England and New Zealand. But if a man chooses that route to go round the world, whichever way round he goes, his times in England and New Zealand are separated from each other by his times in Suez and San Francisco, and conversely. Generalising, if we take any four points on a circle, we can separate them into two couples, say a and b and x and y, such that, in order to get from a to b one must pass through either x or y, and in order to get from x to y one must pass through either a or b. Under these circumstances we say that the couple (a, b) are “separated” by the couple (x, y). Out of this relation a cyclic order can be generated, in a way resembling that in which we generated an open order from “between,” but somewhat more complicated.[3]',
        zh: '像圆周上诸点那样的**循环序**，无法借三项的「介于」关系生成出来。我们需要一种[称为「偶对分离」的四项关系]{#g-imp-c4-06}。不妨设想一次环球旅行来说明这一点。一个人从英格兰前往新西兰，既可以取道苏伊士，也可以取道旧金山；我们无法确切地说这两个地方中的哪一个「介于」英格兰与新西兰之间。但假如一个人选定这条路线环游世界，那么无论他朝哪个方向绕行，他在英格兰与新西兰逗留的时间，总是被他在苏伊士与旧金山逗留的时间彼此隔开，反之亦然。加以推广，若我们在圆周上任取四个点，便可以将它们分成两个偶对，比方说 a 与 b 以及 x 与 y，使得要想从 a 前往 b 就必须经过 x 或 y，而要想从 x 前往 y 也必须经过 a 或 b。在这种情形下，我们就说偶对 (a, b) 被偶对 (x, y)「分离」。从这一关系出发，便可以用一种类似于我们从「介于」生成开序、只是稍嫌繁复的方式生成出循环序来[^imp-fn-04-3]。',
        authorNotes: [
          {
            id: 'imp-fn-04-3',
            original:
              'Cf. Principles of Mathematics, p. 205 (§194), and references there given.',
            zh: '参见《数学的原则》第 205 页（第 194 节），以及该处所列参考文献。'
          }
        ],
        glosses: [
          {
            id: 'g-imp-c4-06',
            anchor: '称为「偶对分离」的四项关系',
            content:
              '射影几何中的直线因包含无穷远点而在拓扑上等同于闭合圆周，不具备两端开口的「介于」次序。德国几何学家卡尔·格奥尔格·克里斯蒂安·冯·施陶特在《位置几何学》（Geometrie der Lage，1847）中引入四点调和分离观念；瓦伊拉蒂于 1895 年在《数学评论》第五卷发表《论闭合曲线上诸点的位置关系》，确立四项「偶对分离」（separation of couples）关系的独立形式公理，随后由费代里戈·恩里克斯（1894、1898）与马里奥·皮耶里（《位置几何学原理》，1898）用于构建纯射影几何公理体系。罗素在《数学的原则》第 194 节中据此证明，在闭合曲线上固定一点作为切口后，即可由四项分离关系导出三项「介于」关系，进而还原出局部的二项序列关系。'
          }
        ]
      },
      {
        id: 'imp-ch04-p29',
        type: 'paragraph',
        num: '§ 29',
        original:
          'The purpose of the latter half of this chapter has been to suggest the subject which one may call “generation of serial relations.” When such relations have been defined, the generation of them from other relations possessing only some of the properties required for series becomes very important, especially in the philosophy of geometry and physics. But we cannot, within the limits of the present volume, do more than make the reader aware that such a subject exists.',
        zh: '本章后半部分的旨趣，在于点出这门可称为「序列关系的生成」的课题。一旦序列关系得到定义，如何从仅具备序列所需部分性质的其他关系中生成序列关系，便成为至关重要的问题，在几何学哲学与物理学哲学中尤为如此。不过在本书篇幅范围之内，我们至多只能让读者意识到有这样一门课题存在而已。'
      }
    ]
  }
];
