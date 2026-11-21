import type { BookSection } from '../../../types/book';

export const russellPart3Sections: BookSection[] = [
  {
    id: 'ch05-kinds-of-relations',
    roman: 'V',
    titleOriginal: 'Chapter V. Kinds of Relations',
    titleZh: '第五章 关系的种类',
    aiModel: 'Gemini-4-Carbon',
    blocks: [
      {
        id: 'imp-ch05-p01',
        type: 'paragraph',
        num: '§ 01',
        original:
          'A great part of the philosophy of mathematics is concerned with relations, and many different kinds of relations have different kinds of uses. It often happens that a property which belongs to all relations is only important as regards relations of certain sorts; in these cases the reader will not see the bearing of the proposition asserting such a property unless he has in mind the sorts of relations for which it is useful. For reasons of this description, as well as from the intrinsic interest of the subject, it is well to have in our minds a rough list of the more mathematically serviceable varieties of relations.',
        zh: '数理哲学的很大一部分都关乎关系，而许多不同种类的关系具有各自不同的用途。常有这样的情形：某条属于一切关系的性质，仅仅对于特定种类的关系才显得重要；在这种情形下，读者倘若心中没有想到使该性质发挥作用的那几类关系，便看不出断定这一性质的命题究竟用意何在。出于诸如此类的理由，同时也由于这一课题本身固有的趣味，我们最好在心中备有一份在数学上较为得用的各类关系的粗略清单。',
      },
      {
        id: 'imp-ch05-p02',
        type: 'paragraph',
        num: '§ 02',
        original:
          'We dealt in the preceding chapter with a supremely important class, namely, serial relations. Each of the three properties which we combined in defining series—namely, asymmetry, transitiveness, and connexity—has its own importance. We will begin by saying something on each of these three.',
        zh: '我们在前一章讨论了至关重要的一类关系，即序列关系。我们在定义序列时结合起来的三项性质——即非对称性、传递性与连通性——各自都具有独立的重要性。我们先就这三者逐一略作申说。',
      },
      {
        id: 'imp-ch05-p03',
        type: 'paragraph',
        num: '§ 03',
        original:
          'Asymmetry, i.e. the property of being incompatible with the converse, is a characteristic of the very greatest interest and importance. In order to develop its functions, we will consider various examples. The relation husband is asymmetrical, and so is the relation wife; i.e. if a is husband of b, b cannot be husband of a, and similarly in the case of wife. On the other hand, the relation “spouse” is symmetrical: if a is spouse of b, then b is spouse of a. Suppose now we are given the relation spouse, and we wish to derive the relation husband. Husband is the same as male spouse or spouse of a female; thus the relation husband can be derived from spouse either by limiting the domain to males or by limiting the converse domain to females. We see from this instance that, when a symmetrical relation is given, it is sometimes possible, without the help of any further relation, to separate it into two asymmetrical relations. But the cases where this is possible are rare and exceptional: they are cases where there are two mutually exclusive classes, say α and β, such that whenever the relation holds between two terms, one of the terms is a member of α and the other is a member of β—as, in the case of spouse, one term of the relation belongs to the class of males and one to the class of females. In such a case, the relation with its domain confined to α will be asymmetrical, and so will the relation with its domain confined to β. But such cases are not of the sort that occur when we are dealing with series of more than two terms; for in a series, all terms, except the first and last (if these exist), belong both to the domain and to the converse domain of the generating relation, so that a relation like husband, where the domain and converse domain do not overlap, is excluded.',
        zh: '**非对称性**，即与自身逆关系不相容的性质，是一项极富兴味且至关重要的特征。为了阐明它的功能，我们不妨考察若干实例。**丈夫**这一关系是非对称的，**妻子**这一关系也是如此；也就是说，若 a 是 b 的丈夫，b 便不可能是 a 的丈夫，妻子的情形亦同。反之，「配偶」这一关系则是**对称的**：若 a 是 b 的配偶，则 b 也是 a 的配偶。现在假设已知配偶关系，而我们希望由此导出丈夫关系。丈夫等同于男性配偶，或女性的配偶；因此，既可以把定义域限制于男性，也可以把逆域限制于女性，从而由配偶导出丈夫这一关系。从这个例子可以看出，当给定一个对称关系时，有时无须借助任何其他关系，便能将其拆分为两个非对称关系。但能够这样做的情形极为罕见而特殊：只有在存在两个互斥的类，不妨设为 α 与 β，使得每当该关系在两项之间成立时，其中一项属于 α 而另一项属于 β，这才可能做到——正如在配偶的例子中，关系的一项属于男性之类，另一项属于女性之类。在这样的情形下，把定义域局限于 α 所得的关系将是非对称的，把定义域局限于 β 所得的关系也将是非对称的。然而，当我们处理包含两项以上的序列时，所遇到的却并非这类情形；因为在序列之中，除首项与末项（若首末项存在）之外的一切项，都同时属于生成关系的定义域与逆域，因而像丈夫这样定义域与逆域互不重叠的关系便被排除在外了。',
      },
      {
        id: 'imp-ch05-p04',
        type: 'paragraph',
        num: '§ 04',
        original:
          'The question how to construct relations having some useful property by means of operations upon relations which only have rudiments of the property is one of considerable importance. Transitiveness and connexity are easily constructed in many cases where the originally given relation does not possess them: for example, if R is any relation whatever, the ancestral relation derived from R by generalised induction is transitive; and if R is a many-one relation, the ancestral relation will be connected if confined to the posterity of a given term. But asymmetry is a much more difficult property to secure by construction. The method by which we derived husband from spouse is, as we have seen, not available in the most important cases, such as greater, before, to the right of, where domain and converse domain overlap. In all these cases, we can of course obtain a symmetrical relation by adding together the given relation and its converse, but we cannot pass back from this symmetrical relation to the original asymmetrical relation except by the help of some asymmetrical relation. Take, for example, the relation greater: the relation greater or less—i.e. unequal—is symmetrical, but there is nothing in this relation to show that it is the sum of two asymmetrical relations. Take such a relation as “differing in shape.” This is not the sum of an asymmetrical relation and its converse, since shapes do not form a single series; but there is nothing to show that it differs from “differing in magnitude” if we did not already know that magnitudes have relations of greater and less. This illustrates the fundamental character of asymmetry as a property of relations.',
        zh: '如何对仅具某种有用性质之雏形的关系施行运算，借以构造出完备具有该性质的关系，是一个相当重要的问题。在原先给定的关系并不具备传递性与连通性的许多场合，这两种性质都不难通过构造获得：例如，无论 R 是任何关系，借广义归纳法从 R 导出的祖先关系总是传递的；倘若 R 是一个多对一关系，那么只要局限于某一给定项的后裔类，该祖先关系便将是连通的。然而，非对称性却是一种极难通过构造来获得的性质。正如我们方才所见，由配偶导出丈夫的那种方法，在诸如**大于**、**先于**、**位于……之右**等定义域与逆域相互重叠的最重要情形中，根本无从施用。在所有这些情形下，我们固然可以把给定关系与其逆关系相加而得到一个对称关系，但除非借助某个非对称关系，否则绝无可能从这个对称关系倒推回原先的非对称关系。试以**大于**关系为例：**大于或小于**——即**不等于**——是对称的，但这一关系本身没有任何迹象表明它是两个非对称关系之和。再看「形状相异」这样的关系。由于形状并不构成单一序列，它并非一个非对称关系与其逆关系之和；但倘若我们不是预先知道量具有大于与小于的关系，单凭关系本身便无从看出「形状相异」与「大小相异」有任何区别。这便表明，作为关系的一种性质，非对称性具有何等根本的地位。',
      },
      {
        id: 'imp-ch05-p05',
        type: 'paragraph',
        num: '§ 05',
        original:
          'From the point of view of the classification of relations, being asymmetrical is a much more important characteristic than implying diversity. Asymmetrical relations imply diversity, but the converse is not the case. “Unequal,” for example, implies diversity, but is symmetrical. Broadly speaking, we may say that, if we wished as far as possible to dispense with relational propositions and replace them by such as ascribed predicates to subjects, we could succeed in this so long as we confined ourselves to symmetrical relations: those that do not imply diversity, if they are transitive, may be regarded as asserting a common predicate, while those that do imply diversity may be regarded as asserting incompatible predicates. For example, consider the relation of similarity between classes, by means of which we defined numbers. This relation is symmetrical and transitive and does not imply diversity. It would be possible, though less simple than the procedure we adopted, to regard the number of a collection as a predicate of the collection: then two similar classes will be two that have the same numerical predicate, while two that are not similar will be two that have different numerical predicates. Such a method of replacing relations by predicates is formally possible (though often very inconvenient) so long as the relations concerned are symmetrical; but it is formally impossible when the relations are asymmetrical, because both sameness and difference of predicates are symmetrical. Asymmetrical relations are, we may say, the most characteristically relational of relations, and the most important to the philosopher who wishes to study the ultimate logical nature of relations.',
        zh: '从关系分类的角度来看，非对称性远比蕴涵相异性更为重要。非对称关系必定蕴涵相异性，反之则不然。例如「不等于」蕴涵相异性，却是对称的。大体而言，我们可以说，倘若我们希望尽可能免除关系命题，代之以把谓词归属于主词的命题，那么只要局限于对称关系，我们便能够做到这一点：那些不蕴涵相异性的对称关系，倘若同时是传递的，便可被视作断定了某种共同谓词；而那些蕴涵相异性的对称关系，则可被视作断定了互不相容的谓词。试以我们借以定义数的类间相似性关系为例。[这种关系是对称的、传递的，且不蕴涵相异性]{#g-imp-c5-01}。尽管不如我们所采取的做法那样简捷，我们原本也可以把一个汇集的数视作该汇集的一个谓词：如此一来，两个相似的类便是具有相同数值谓词的两个类，而两个不相似的类则是具有不同数值谓词的两个类。只要所涉及的关系是对称的，这种以谓词取代关系的方法在形式上便是可行的（尽管往往极为繁琐不便）；但当关系是非对称的时候，这种方法在形式上便彻底不可能了，因为谓词的相同与谓词的相异二者都是对称的。可以说，**非对称关系是最典型地体现关系本性的关系**，对于有志于探究关系之终极逻辑本性的哲学家而言，也是最重要的一类关系。',
        glosses: [
          {
            id: 'g-imp-c5-01',
            anchor: '这种关系是对称的、传递的，且不蕴涵相异性',
            content:
              '即现代数学与逻辑学中的**等价关系**（equivalence relation：对称、传递，且在其场上自反，故不蕴涵相异性）。十九世纪数学家与皮亚诺（《数学公式汇编》）常对等价关系采用所谓「通过抽象的定义」（definition by abstraction），例如声称两条平行直线具有共同的「方向」、两个相似集合具有共同的「基数」，仿佛单凭等价关系就能保证存在一个由各等价项共享的单一谓词或抽象实体。罗素在《数学的原则》（第 160、210 节）与《数学原理》（第一卷第 72 节）中将这一转换改造并命名为「**抽象原则**」（principle of abstraction）：不假定等价项背后另有一项未经证明的共同性质，而是直接将该抽象对象定义为由一切彼此等价的项所组成的**等价类**本身（例如把一条直线的「方向」定义为与它平行的全体直线之类）。',
          },
        ],
      },
      {
        id: 'imp-ch05-p06',
        type: 'paragraph',
        num: '§ 06',
        original:
          'Another class of relations that is of the greatest use is the class of one-many relations, i.e. relations which at most one term can have to a given term. Such are father, mother, husband (except in Tibet), square of, sine of, and so on. But parent, square root, and so on, are not one-many. It is possible, formally, to replace all relations by one-many relations by means of a device. Take (say) the relation less among the inductive numbers. Given any number n greater than 1, there will not be only one number having the relation less to n, but we can form the whole class of numbers that are less than n. This is one class, and its relation to n is not shared by any other class. We may call the class of numbers that are less than n the “proper ancestry” of n, in the sense in which we spoke of ancestry and posterity in connection with mathematical induction. Then “proper ancestry” is a one-many relation (one-many will always be used so as to include one-one), since each number determines a single class of numbers as constituting its proper ancestry. Thus the relation less than can be replaced by being a member of the proper ancestry of. In this way a one-many relation in which the one is a class, together with membership of this class, can always formally replace a relation which is not one-many. Peano, who for some reason always instinctively conceives of a relation as one-many, deals in this way with those that are naturally not so. Reduction to one-many relations by this method, however, though possible as a matter of form, does not represent a technical simplification, and there is every reason to think that it does not represent a philosophical analysis, if only because classes must be regarded as “logical fictions.” We shall therefore continue to regard one-many relations as a special kind of relations.',
        zh: '另一类极其得用的关系是**一对多关系**，即至多只有一项能够对某一给定项所具有的关系。例如父亲、母亲、丈夫（西藏除外）、……的平方、……的正弦，等等。但父母、平方根等等，则不是一对多的。借助一种技巧，在形式上可以把一切关系都替换为一对多关系。不妨以归纳数之间的**小于**关系为例。给定任何大于 1 的数 n，对 n 具有**小于**关系的数固然不止一个，但我们可以把一切小于 n 的数组成一个完整的类。这是唯一的一个类，它对 n 所具有的关系不为任何别的类所分享。按照此前讨论数学归纳法时所说的祖先类与后裔类之义，我们可以把小于 n 的数所组成的类称为 n 的「真祖先类」。于是「真祖先类」便是一个一对多关系（我们将始终把一对多用作包含一一关系在内），因为每一个数都唯一确定一个数之类作为它的真祖先类。由此，**小于**这一关系便可以替换为**属于……的真祖先类**。通过这种方式，一个以类作为那「一」的一对多关系，配合上属于该类的成员关系，在形式上总能取代并非一对多的关系。[皮亚诺出于某种原因，本能地总是把关系设想为一对多的]{#g-imp-c5-02}，因而便是用这种方式来处理那些本来并非一对多的关系。然而，用这种方法化归为一对多关系，尽管在形式上可行，在技术上却并不构成简化；而且我们有充分理由认为它并不代表真正的哲学分析，哪怕仅仅因为类必须被视作「逻辑虚构」。因此，我们将继续把一对多关系视作一类特殊的关系。',
        glosses: [
          {
            id: 'g-imp-c5-02',
            anchor: '皮亚诺出于某种原因，本能地总是把关系设想为一对多的',
            content:
              '皮亚诺在《算术原理：以新方法阐述》（1889）与《数学公式汇编》中建立了类的演算与单值数学函数记号，却未吸纳由德·摩根（1860）、皮尔士（1870—1883）与施罗德（《逻辑代数讲义》第三卷，1895）独立发展起来的二元及多元关系演算；因此在皮亚诺的符号系统中，凡遇多值或一般二元关系，均须先折算为映射到「类」上的单值函数。1900 年 8 月巴黎国际哲学大会之后，罗素将皮亚诺的类与量词符号同皮尔士—施罗德的关系代数加以结合，用皮亚诺符号体系撰写《论关系逻辑及其在序列理论中的应用》，刊于皮亚诺主编的《数学评论》（Rivista di Matematica，第七卷，1901），系统构建了形式化的关系逻辑。',
          },
        ],
      },
      {
        id: 'imp-ch05-p07',
        type: 'paragraph',
        num: '§ 07',
        original:
          'One-many relations are involved in all phrases of the form “the so-and-so of such-and-such.” “The King of England,” “the wife of Socrates,” “the father of John Stuart Mill,” and so on, all describe some person by means of a one-many relation to a given term. A person cannot have more than one father, therefore “the father of John Stuart Mill” described some one person, even if we did not know whom. There is much to say on the subject of descriptions, but for the present it is relations that we are concerned with, and descriptions are only relevant as exemplifying the uses of one-many relations. It should be observed that all mathematical functions result from one-many relations: the logarithm of x, the cosine of x, etc., are, like the father of x, terms described by means of a one-many relation (logarithm, cosine, etc.) to a given term (x). The notion of function need not be confined to numbers, or to the uses to which mathematicians have accustomed us; it can be extended to all cases of one-many relations, and “the father of x” is just as legitimately a function of which x is the argument as is “the logarithm of x.” Functions in this sense are descriptive functions. As we shall see later, there are functions of a still more general and more fundamental sort, namely, propositional functions; but for the present we shall confine our attention to descriptive functions, i.e. “the term having the relation R to x,” or, for short, “the R of x,” where R is any one-many relation.',
        zh: '一切形如「某某的如此这般者」的短语都涉及一对多关系。「英格兰国王」「苏格拉底的妻子」「约翰·斯图亚特·密尔的父亲」等等，全都借助对某一给定项的一对多关系来摹状某个人。一个人不可能有不止一位父亲，因此即便我们不知道那人是谁，「约翰·斯图亚特·密尔的父亲」也依然摹状了确定的某一个人。关于摹状词还有许多话可说，但眼下我们关注的是关系，提及摹状词只是为了举例说明一对多关系的用途。应当看到，一切数学函数都源出一对多关系：x 的对数、x 的余弦等等，正像 x 的父亲一样，都是借助对某一给定项（x）的一对多关系（对数、余弦等等）而被摹状出来的项。函数的概念无须局限于数，也无须局限于数学家使我们习以为常的那些用途；它可以推广到一对多关系的一切场合，「x 的父亲」同「x 的对数」一样，完全有资格成为一个以 x 为自变元的函数。[这一意义上的函数便是**摹状函数**]{#g-imp-c5-03}。正如我们后文将要看到的那样，还有一种更加一般也更加根本的函数，即**命题函数**；但眼下我们将把注意力集中在摹状函数上，亦即「对 x 具有关系 R 的那一项」，或简称为「x 的 R」，其中 R 是任意一对多关系。',
        glosses: [
          {
            id: 'g-imp-c5-03',
            anchor: '这一意义上的函数便是摹状函数',
            content:
              '在《数学原理》第一卷第 30—33 节中，怀特海与罗素沿用皮亚诺的倒置撇号，将摹状函数「x 的 R」记作 R‘x，定义为「对 x 具有关系 R 的唯一项 y」。罗素的前后项约定与现代集合论相反：在关系式 yRx（如「y 是 x 的父亲」或「y 是 x 的正弦」）中，左端前项 y 为函数值，属于 R 的**定义域**（D‘R）；右端后项 x 为自变元，属于 R 的**逆域**（Ɑ‘R）。因此，罗素所谓「一对多关系」（至多一个前项 y 对给定后项 x 具有关系 R，而同一个 y 可对多个 x 具有关系 R，如 y = sin x）即现代数学中的**单值函数**。',
          },
        ],
      },
      {
        id: 'imp-ch05-p08',
        type: 'paragraph',
        num: '§ 08',
        original:
          'It will be observed that if “the R of x” is to describe a definite term, x must be a term to which something has the relation R, and there must not be more than one term having the relation R to x, since “the,” correctly used, must imply uniqueness. Thus we may speak of “the father of x” if x is any human being except Adam and Eve; but we cannot speak of “the father of x” if x is a table or a chair or anything else that does not have a father. We shall say that the R of x “exists” when there is just one term, and no more, having the relation R to x. Thus if R is a one-many relation, the R of x exists whenever x belongs to the converse domain of R, and not otherwise. Regarding “the R of x” as a function in the mathematical sense, we say that x is the “argument” of the function, and if y is the term which has the relation R to x, i.e. if y is the R of x, then y is the “value” of the function for the argument x. If R is a one-many relation, the range of possible arguments to the function is the converse domain of R, and the range of values is the domain. Thus the range of possible arguments to the function “the father of x” is all who have fathers, i.e. the converse domain of the relation father, while the range of possible values for the function is all fathers, i.e. the domain of the relation.',
        zh: '不难看出，倘若「x 的 R」要摹状一个确定的项，x 就必须是某物对之具有关系 R 的项，而且对 x 具有关系 R 的项绝不能多于一个，因为英语定冠词「the」在正确使用时必须蕴涵唯一性。因此，只要 x 是除亚当与夏娃之外的任何人类，我们便可以谈论「x 的父亲」；但如果 x 是一张桌子、一把椅子或任何其他没有父亲的事物，我们便不能谈论「x 的父亲」。当恰好只有一项、绝无更多项对 x 具有关系 R 时，我们便说 x 的 R「存在」。由此可见，若 R 是一个一对多关系，则每当 x 属于 R 的逆域时，x 的 R 便存在，否则便不存在。把「x 的 R」视作数学意义上的函数时，我们称 x 为该函数的「自变元」；若 y 是对 x 具有关系 R 的那一项，亦即 y 是 x 的 R，则称 y 为该函数对于自变元 x 所取的「值」。若 R 是一个一对多关系，该函数一切可能自变元的范围便是 R 的逆域，而函数值的范围则是 R 的定义域。举例来说，「x 的父亲」这一函数可能自变元的范围是一切有父亲的人，即父亲关系的逆域；而该函数可能取值的范围则是一切父亲，即该关系的定义域。',
      },
      {
        id: 'imp-ch05-p09',
        type: 'paragraph',
        num: '§ 09',
        original:
          'Many of the most important notions in the logic of relations are descriptive functions, for example: converse, domain, converse domain, field. Other examples will occur as we proceed.',
        zh: '关系逻辑中许多最重要的概念本身就是摹状函数，例如：逆关系、定义域、逆域、场。随着讨论的推进，还会出现其他例子。',
      },
      {
        id: 'imp-ch05-p10',
        type: 'paragraph',
        num: '§ 10',
        original:
          'Among one-many relations, one-one relations are a specially important class. We have already had occasion to speak of one-one relations in connection with the definition of number, but it is necessary to be familiar with them, and not merely to know their formal definition. Their formal definition may be derived from that of one-many relations: they may be defined as one-many relations which are also the converses of one-many relations, i.e. as relations which are both one-many and many-one. One-many relations may be defined as relations such that, if x has the relation in question to y, there is no other term x′ which also has the relation to y. Or, again, they may be defined as follows: Given two terms x and x′, the terms to which x has the given relation and those to which x′ has it have no member in common. Or, again, they may be defined as relations such that the relative product of one of them and its converse implies identity, where the “relative product” of two relations R and S is that relation which holds between x and z when there is an intermediate term y, such that x has the relation R to y and y has the relation S to z. Thus, for example, if R is the relation of father to son, the relative product of R and its converse will be the relation which holds between x and a man z when there is a person y, such that x is the father of y and y is the son of z. It is obvious that x and z must be the same person. If, on the other hand, we take the relation of parent and child, which is not one-many, we can no longer argue that, if x is a parent of y and y is a child of z, x and z must be the same person, because one may be the father of y and the other the mother. This illustrates that it is characteristic of one-many relations when the relative product of a relation and its converse implies identity. In the case of one-one relations this happens, and also the relative product of the converse and the relation implies identity. Given a relation R, it is convenient, if x has the relation R to y, to think of y as being reached from x by an “R-step” or an “R-vector.” In the same case x will be reached from y by a “backward R-step.” Thus we may state the characteristic of one-many relations with which we have been dealing by saying that an R-step followed by a backward R-step must bring us back to our starting-point. With other relations, this is by no means the case; for example, if R is the relation of child to parent, the relative product of R and its converse is the relation “self or brother or sister,” and if R is the relation of grandchild to grandparent, the relative product of R and its converse is “self or brother or sister or first cousin.” It will be observed that the relative product of two relations is not in general commutative, i.e. the relative product of R and S is not in general the same relation as the relative product of S and R. E.g. the relative product of parent and brother is uncle, but the relative product of brother and parent is parent.',
        zh: '在一对多关系之中，**一一关系**是格外重要的一类。此前在讨论数的定义时，我们已经有机会谈到过一一关系；但对于这类关系，不能仅止于知晓其形式定义，还必须达到烂熟于心的地步。它们的形式定义可以由一对多关系的定义导出：可以把它们定义为同时又是某个一对多关系之逆关系的一对多关系，亦即既是一对多又是多对一的关系。一对多关系可以定义为满足如下条件的关系：若 x 对 y 具有所论关系，则不存在任何别的项 x′ 也对 y 具有该关系。或者也可以这样定义：给定相异的两项 x 与 x′，x 对之具有给定关系的那些项，同 x′ 对之具有该关系的那些项，没有任何共同成员。又或者，还可以把它们定义为满足如下条件的关系：[它与自身逆关系的**关系积**蕴涵同一性]{#g-imp-c5-04}——其中两个关系 R 与 S 的「关系积」，是指当存在某个中间项 y，使得 x 对 y 具有关系 R 且 y 对 z 具有关系 S 时，在 x 与 z 之间成立的那种关系。举例来说，若 R 是父亲对儿子的关系，那么 R 与其逆关系的关系积，便是当存在某人 y，使得 x 是 y 的父亲且 y 是 z 的儿子时，在 x 与男子 z 之间成立的关系。显而易见，x 与 z 必定是同一个人。反之，倘若我们取并非一对多的父母与子女关系，那么由 x 是 y 的父母之一且 y 是 z 的子女，便不再能够推出 x 与 z 必定是同一个人，因为其中一人可能是 y 的父亲，另一人则是 y 的母亲。这便说明，一个关系与其逆关系的关系积蕴涵同一性，正是一对多关系的特征。在一一关系的情形下，不仅这一条件成立，而且其逆关系与该关系本身的关系积也蕴涵同一性。给定一个关系 R，若 x 对 y 具有关系 R，我们不妨把 y 设想为从 x 出发经由一个「R 步」或「R 向量」所抵达的项。在同一情形下，x 则是从 y 出发经由一个「逆向 R 步」所抵达的项。于是，我们方才所讨论的一对多关系的特征便可以表述为：先走一个 R 步，再紧接着走一个逆向 R 步，必定会把我们带回出发点。对于其他关系而言，情形绝非如此：例如，若 R 是子女对父母的关系，R 与其逆关系的关系积便是「本人或兄弟或姐妹」这一关系；若 R 是孙辈对祖辈的关系，R 与其逆关系的关系积则是「本人或兄弟姐妹或堂表兄弟姐妹」。不难注意到，两个关系的关系积一般并不服从交换律，也就是说，R 与 S 的关系积一般并不等同于 S 与 R 的关系积。例如，[父母与兄弟的关系积是叔伯舅父，而兄弟与父母的关系积却是父母]{#g-imp-c5-05}。',
        glosses: [
          {
            id: 'g-imp-c5-04',
            anchor: '它与自身逆关系的关系积蕴涵同一性',
            content:
              '在《数学原理》第一卷第 34 节与第 71 节中，怀特海与罗素将 R 与 S 的关系积记作 R | S，R 的逆关系记作 R̆，同一关系记作 I：当 R | R̆ 蕴涵 I 时，R 为一对多关系（记作 1 → Cls）；当 R̆ | R 蕴涵 I 时，R 为多对一关系（记作 Cls → 1）；二者同时成立时，R 即为一一关系（记作 1 → 1）。',
          },
          {
            id: 'g-imp-c5-05',
            anchor: '父母与兄弟的关系积是叔伯舅父，而兄弟与父母的关系积却是父母',
            content:
              '此处系罗素 1919 年初版与 1920 年第二版沿袭未改的一处笔误。依本段对关系积 R | S 的定义（存在 y 使 xRy 且 ySz）及本章前项—后项惯例（xRy 表示「x 是 y 的 R」），若 x 是 y 的父母且 y 是 z 的（同父母）兄弟，则 x 实为 z 的父母；反之，若 x 是 y 的兄弟且 y 是 z 的父母，则 x 方为 z 的叔伯或舅父。罗素行文至此误顺英语所有格词序（parent’s brother 与 brother’s parent）颠倒了两个因子的复合次序。',
          },
        ],
      },
      {
        id: 'imp-ch05-p11',
        type: 'paragraph',
        num: '§ 11',
        original:
          'One-one relations give a correlation of two classes, term for term, so that each term in either class has its correlate in the other. Such correlations are simplest to grasp when the two classes have no members in common, like the class of husbands and the class of wives; for in that case we know at once whether a term is to be considered as one from which the correlating relation R goes, or as one to which it goes. It is convenient to use the word referent for the term from which the relation goes, and the term relatum for the term to which it goes. Thus if x and y are husband and wife, then, with respect to the relation “husband,” x is referent and y relatum, but with respect to the relation “wife,” y is referent and x relatum. We say that a relation and its converse have opposite “senses”; thus the “sense” of a relation that goes from x to y is the opposite of that of the corresponding relation from y to x. The fact that a relation has a “sense” is fundamental, and is part of the reason why order can be generated by suitable relations. It will be observed that the class of all possible referents to a given relation is its domain, and the class of all possible relata is its converse domain.',
        zh: '一一关系在两个类之间建立起逐项相对的关联，使得任一类中的每一项在另一类中都有其唯一的关联项。当两个类像丈夫之类与妻子之类那样没有任何共同成员时，这类关联最容易把握；因为在这种情况下，我们一眼便知某一项究竟应当视作关联关系 R 由之出发的项，还是视作 R 所指向的项。为方便起见，我们用**前项**一词指称关系由之出发的项，用**后项**一词指称关系所指向的项。于是，若 x 与 y 是夫妻，则相对于「丈夫」这一关系，x 是前项而 y 是后项；但相对于「妻子」这一关系，y 则是前项而 x 是后项。我们说一个关系与它的逆关系具有相反的「方向」；因此，从 x 指向 y 的关系之「方向」，同从 y 指向 x 的相应关系之方向正好相反。关系具有「方向」这一事实至关重要，适当的关系之所以能够生成秩序，部分原因正在于此。不难看出，一个给定关系的一切可能前项所组成的类便是它的定义域，而一切可能后项所组成的类则是它的逆域。',
      },
      {
        id: 'imp-ch05-p12',
        type: 'paragraph',
        num: '§ 12',
        original:
          'But it very often happens that the domain and converse domain of a one-one relation overlap. Take, for example, the first ten integers (excluding 0), and add 1 to each; thus instead of the first ten integers we now have the integers\n    2, 3, 4, 5, 6, 7, 8, 9, 10, 11.',
        zh: '然而，一一关系的定义域与逆域发生重叠的情形极为常见。不妨取前十个整数（不含 0），给每一个数都加上 1；于是取代原先那前十个整数，我们现在得到了如下整数：\n\n2, 3, 4, 5, 6, 7, 8, 9, 10, 11。',
      },
      {
        id: 'imp-ch05-p13',
        type: 'paragraph',
        num: '§ 13',
        original:
          'These are the same as those we had before, except that 1 has been cut off at the beginning and 11 has been joined on at the end. There are still ten integers: they are correlated with the previous ten by the relation of n to n+1, which is a one-one relation. Or, again, instead of adding 1 to each of our original ten integers, we could have doubled each of them, thus obtaining the integers\n    2, 4, 6, 8, 10, 12, 14, 16, 18, 20.',
        zh: '这些数同我们原先所有的数大体相同，只不过开头截去了 1，末尾添上了 11。这里依然有十个整数：它们借由 n 对 n + 1 的关系与先前的十个整数相互关联，而这一关系正是一个一一关系。或者，我们也可以不对原先十个整数中的每一个加 1，而是把每一个数翻倍，从而得到如下整数：\n\n2, 4, 6, 8, 10, 12, 14, 16, 18, 20。',
      },
      {
        id: 'imp-ch05-p14',
        type: 'paragraph',
        num: '§ 14',
        original:
          'Here we still have five of our previous set of integers, namely, 2, 4, 6, 8, 10. The correlating relation in this case is the relation of a number to its double, which is again a one-one relation. Or we might have replaced each number by its square, thus obtaining the set\n    1, 4, 9, 16, 25, 36, 49, 64, 81, 100.',
        zh: '在这里，原先那组整数中仍有五个数保留下来，即 2, 4, 6, 8, 10。此处的关联关系是一个数对其两倍的关系，它同样是一个一一关系。我们还可以把每一个数替换为它的平方，从而得到如下数集：\n\n1, 4, 9, 16, 25, 36, 49, 64, 81, 100。',
      },
      {
        id: 'imp-ch05-p15',
        type: 'paragraph',
        num: '§ 15',
        original:
          'On this occasion only three of our original set are left, namely, 1, 4, 9. Such processes of correlation may be varied endlessly.',
        zh: '这一次，原先那组数中只剩下三个数，即 1, 4, 9。诸如此类的关联过程可以无穷无尽地变换下去。',
      },
      {
        id: 'imp-ch05-p16',
        type: 'paragraph',
        num: '§ 16',
        original:
          'The most interesting case of the above kind is the case where our one-one relation has a converse domain which is part, but not the whole, of the domain. If, instead of confining the domain to the first ten integers, we had considered the whole of the inductive numbers, the above instances would have illustrated this case. We may place the numbers concerned in two rows, putting the correlate directly under the number whose correlate it is. Thus when the correlator is the relation of n to n+1, we have the two rows:\n    1, 2, 3, 4, 5, ... n ...\n    2, 3, 4, 5, 6, ... n+1 ...',
        zh: '上述类型中最耐人寻味的情形，是这样一种情况：我们的一一关系所具有的逆域，只是其定义域的一部分而非全部。倘若我们方才没有把定义域局限于前十个整数，而是考察全体归纳数，那么上面几个例子便全都属于这种情形了。我们可以把相关的数排成上下两行，将每一个关联项紧挨着排在与之关联的那个数的正下方。于是，当关联子是 n 对 n + 1 的关系时，我们有如下两行：\n\n1, 2, 3, 4, 5, … n …\n\n2, 3, 4, 5, 6, … n + 1 …',
      },
      {
        id: 'imp-ch05-p17',
        type: 'paragraph',
        num: '§ 17',
        original:
          'When the correlator is the relation of a number to its double, we have the two rows:\n    1, 2, 3, 4, 5, ... n ...\n    2, 4, 6, 8, 10, ... 2n ...',
        zh: '当关联子是一个数对其两倍的关系时，我们有如下两行：\n\n1, 2, 3, 4, 5, … n …\n\n2, 4, 6, 8, 10, … 2n …',
      },
      {
        id: 'imp-ch05-p18',
        type: 'paragraph',
        num: '§ 18',
        original:
          'When the correlator is the relation of a number to its square, the rows are:\n    1, 2, 3, 4, 5, ... n ...\n    1, 4, 9, 16, 25, ... n^2 ...',
        zh: '当关联子是一个数对其平方的关系时，这两行则是：\n\n1, 2, 3, 4, 5, … n …\n\n1, 4, 9, 16, 25, … n² …',
      },
      {
        id: 'imp-ch05-p19',
        type: 'paragraph',
        num: '§ 19',
        original:
          'In all these cases, all inductive numbers occur in the top row, and only some in the bottom row.',
        zh: '在所有这些情形中，全体归纳数都出现在上行，而下行中却只出现了其中一部分。',
      },
      {
        id: 'imp-ch05-p20',
        type: 'paragraph',
        num: '§ 20',
        original:
          'Cases of this sort, where the converse domain is a “proper part” of the domain (i.e. a part not the whole), will occupy us again when we come to deal with infinity. For the present, we wish only to note that they exist and demand consideration.',
        zh: '这类逆域构成定义域之「真部分」（即并非全体的部分）的情形，待我们后文讨论无穷时还将再度深入探讨。眼下我们只需留意这类情形确实存在，且有待考察即可。',
      },
      {
        id: 'imp-ch05-p21',
        type: 'paragraph',
        num: '§ 21',
        original:
          'Another class of correlations which are often important is the class called “permutations,” where the domain and converse domain are identical. Consider, for example, the six possible arrangements of three letters:\n    a, b, c\n    a, c, b\n    b, c, a\n    b, a, c\n    c, a, b\n    c, b, a\nEach of these can be obtained from any one of the others by means of a correlation. Take, for example, the first and last, (a, b, c) and (c, b, a). Here a is correlated with c, b with itself, and c with a. It is obvious that the combination of two permutations is again a permutation, i.e. the permutations of a given class form what is called a “group.”',
        zh: '另一类常常十分重要的关联，是定义域与逆域完全同一的那类关联，称为「置换」。试考察三个字母的六种可能排列：\n\na, b, c；a, c, b；b, c, a；b, a, c；c, a, b；c, b, a。\n\n其中每一种排列都可以借由某个关联从其他任意一种排列得到。不妨取第一种与最后一种，即 (a, b, c) 与 (c, b, a) 为例。在这里，a 与 c 相关联，b 与其自身相关联，c 则与 a 相关联。显而易见，两个置换的复合依然是一个置换，也就是说，[一个给定类的诸置换构成了所谓的一个「群」]{#g-imp-c5-06}。',
        glosses: [
          {
            id: 'g-imp-c5-06',
            anchor: '一个给定类的诸置换构成了所谓的一个「群」',
            content:
              '群论（group theory）起源于拉格朗日、柯西与埃瓦里斯特·伽罗瓦（Évariste Galois，1811—1832）对代数方程根的对称置换（groupe de permutations）的研究，1854 年经阿瑟·凯莱（Arthur Cayley）推广为抽象群公理。在罗素的关系逻辑框架下，给定类 α 上的「置换」即定义域与逆域皆等于 α 的一一关系；以关系积「|」作为复合运算，α 上全体置换满足封闭性与结合律，且以 α 上的同一关系为单位元、以每一置换自身的逆关系为逆元，从而构成对称群（此处三元类的六个置换即三阶对称群 S₃）。',
          },
        ],
      },
      {
        id: 'imp-ch05-p22',
        type: 'paragraph',
        num: '§ 22',
        original:
          'These various kinds of correlations have importance in various connections, some for one purpose, some for another. The general notion of one-one correlations has boundless importance in the philosophy of mathematics, as we have partly seen already, but shall see much more fully as we proceed. One of its uses will occupy us in our next chapter.',
        zh: '上述形形色色的关联在不同的脉络中各具重要性，有的服务于这一目的，有的服务于那一目的。至于一一关联这一普遍概念，在数理哲学中则具有不可估量的重大意义——对此我们已经窥见一斑，随着后文推进还将看得更加透彻。它的其中一项用途，便是我们下一章所要讨论的主题。',
      },
    ],
  },
  {
    id: 'ch06-similarity-of-relations',
    roman: 'VI',
    titleOriginal: 'Chapter VI. Similarity of Relations',
    titleZh: '第六章 关系的相似性',
    aiModel: 'Gemini-4-Carbon',
    blocks: [
      {
        id: 'imp-ch06-p01',
        type: 'paragraph',
        num: '§ 01',
        original:
          'We saw in Chapter II. that two classes have the same number of terms when they are “similar,” i.e. when there is a one-one relation whose domain is the one class and whose converse domain is the other. In such a case we say that there is a “one-one correlation” between the two classes.',
        zh: '我们在第二章已经看到，当两个类「相似」时——亦即当存在一个以其中一个类为定义域、以另一个类为逆域的一一关系时——这两个类便具有相同数目的项。在这种情形下，我们说这两个类之间存在着「一一关联」。',
      },
      {
        id: 'imp-ch06-p02',
        type: 'paragraph',
        num: '§ 02',
        original:
          'In the present chapter we have to define a relation between relations, which will play the same part for them that similarity of classes plays for classes. We will call this relation “similarity of relations,” or “likeness” when it seems desirable to use a different word from that which we use for classes. How is likeness to be defined?',
        zh: '在本章中，我们要定义一种关系与关系之间的关系，使它对于关系所起的作用，恰如类的相似性对于类所起的作用一样。我们将把这种关系称为「关系的相似性」；当需要采用一个不同于描述类时所用的字眼时，便称之为「相像」。那么，相像应当如何定义呢？',
      },
      {
        id: 'imp-ch06-p03',
        type: 'paragraph',
        num: '§ 03',
        original:
          'We shall employ still the notion of correlation: we shall assume that the domain of the one relation can be correlated with the domain of the other, and the converse domain with the converse domain; but that is not enough for the sort of resemblance which we desire to have between our two relations. What we desire is that, whenever either relation holds between two terms, the other relation shall hold between the correlates of these two terms. The easiest example of the sort of thing we desire is a map. When one place is north of another, the place on the map corresponding to the one is above the place on the map corresponding to the other; when one place is west of another, the place on the map corresponding to the one is to the left of the place on the map corresponding to the other; and so on. The structure of the map corresponds with that of the country of which it is a map. The space-relations in the map have “likeness” to the space-relations in the country mapped. It is this kind of connection between relations that we wish to define.',
        zh: '我们仍将运用关联这一概念：我们假定其中一个关系的定义域可以与另一个关系的定义域相关联，前者的逆域也可以与后者的逆域相关联；但单凭这一点，还不足以刻画我们希望两个关系之间所具有的那种相似。我们所要求的是：每当其中一个关系在两项之间成立时，另一个关系也必定在这两项各自的关联项之间成立。对于我们所寻求的这类对应，最浅显的例子莫过于一张地图。当某地位于另一地以北时，地图上对应于前者的位置便在对应于后者的位置上方；当某地位于另一地以西时，地图上对应于前者的位置便在对应于后者的位置左方；依此类推。地图的结构与它所描绘的那片国土的结构彼此对应。地图中的空间关系与所绘国土中的空间关系具有「相像」性。我们想要定义的，正是关系与关系之间的这一类联系。',
      },
      {
        id: 'imp-ch06-p04',
        type: 'paragraph',
        num: '§ 04',
        original:
          'We may, in the first place, profitably introduce a certain restriction. We will confine ourselves, in defining likeness, to such relations as have “fields,” i.e. to such as permit of the formation of a single class out of the domain and the converse domain. This is not always the case. Take, for example, the relation “domain,” i.e. the relation which the domain of a relation has to the relation. This relation has all classes for its domain, since every class is the domain of some relation; and it has all relations for its converse domain, since every relation has a domain. But classes and relations cannot be added together to form a new single class, because they are of different logical “types.” We do not need to enter upon the difficult doctrine of types, but it is well to know when we are abstaining from entering upon it. We may say, without entering upon the grounds for the assertion, that a relation only has a “field” when it is what we call “homogeneous,” i.e. when its domain and converse domain are of the same logical type; and as a rough-and-ready indication of what we mean by a “type,” we may say that individuals, classes of individuals, relations between individuals, relations between classes, relations of classes to individuals, and so on, are different types. Now the notion of likeness is not very useful as applied to relations that are not homogeneous; we shall, therefore, in defining likeness, simplify our problem by speaking of the “field” of one of the relations concerned. This somewhat limits the generality of our definition, but the limitation is not of any practical importance. And having been stated, it need no longer be remembered.',
        zh: '首先，我们不妨引入一项有益的限制。在定义相像时，我们将把自己局限于具有「场」的那些关系，亦即允许将其定义域与逆域合并组成单一之类的那些关系。情形并非总是如此。试以「定义域」这一关系——即一个关系的定义域对该关系本身所具有的关系——为例。由于每一个类都是某个关系的定义域，这一关系以一切类作为它的定义域；又由于每一个关系都有定义域，它便以一切关系作为它的逆域。然而，类与关系却不能合并相加而组成一个新的单一之类，因为二者属于不同的逻辑「类型」。我们眼下无须踏入艰深的类型学说，但最好清楚自己何时正在有意避开它。无须深究这一断定背后的根据，我们可以径直说：[一个关系唯有在属于我们所谓「同质的」关系时才具有「场」]{#g-imp-c6-01}，也就是说，它的定义域与逆域必须属于同一逻辑类型；至于我们所谓「类型」的大致涵义，不妨粗略指明如下：个体、个体之类、个体间的关系、类与类之间的关系、类对个体的关系等等，分别属于不同的类型。既然相像这一概念施用于非同质关系时并无多大用处，我们在定义相像时，便不妨直接谈论所涉关系之一的「场」，借以简化问题。这固然在某种程度上限制了我们定义的普遍性，但这种限制在实际应用中无关宏旨。既已交代清楚，下文便无须再将它挂怀了。',
        glosses: [
          {
            id: 'g-imp-c6-01',
            anchor: '一个关系唯有在属于我们所谓「同质的」关系时才具有「场」',
            content:
              '罗素在 1908 年论文《以类型论为基础的数理逻辑》（刊于《美国数学杂志》第三十卷）及《数学原理》第一卷导论第二章中建立逻辑类型论（详见本书第十三章）：逻辑全集按构成层级划分为个体、个体之类、类的类、个体间关系等不同类型，跨类型的对象合集不构成合法的单一之类。《数学原理》第一卷第 33 节与第 63 节遂规定，唯有当前项与后项属于同一逻辑类型（即关系为「同质的」，homogeneous）时，其定义域 D‘R 与逆域 Ɑ‘R 的并集才构成合法的「场」（C‘R）。',
          },
        ],
      },
      {
        id: 'imp-ch06-p05',
        type: 'paragraph',
        num: '§ 05',
        original:
          'We may define two relations P and Q as “similar,” or as having “likeness,” when there is a one-one relation S whose domain is the field of P and whose converse domain is the field of Q, and which is such that, if one term has the relation P to another, the correlate of the one has the relation Q to the correlate of the other, and vice versa. A figure will make this clearer.\n[Figure 1:\n      P\n  x -----> y\n  |        |\nS |        | S\n  v   Q    v\n  z -----> w\n]',
        zh: '当存在一个一一关系 S，其定义域是 P 的场，其逆域是 Q 的场，并且每当一项对另一项具有关系 P 时，前者的关联项便对后者的关联项具有关系 Q，反之亦然，我们便可以把两个关系 P 与 Q 定义为「相似的」，或具有「相像」性。一幅图示能把这一点表现得更为清楚：\n\n图一：x —P→ y，x —S→ z，y —S→ w，z —Q→ w。',
      },
      {
        id: 'imp-ch06-p06',
        type: 'paragraph',
        num: '§ 06',
        original:
          'Let x and y be two terms having the relation P. Then there are to be two terms z, w, such that x has the relation S to z, y has the relation S to w, and z has the relation Q to w. If this happens with every pair of terms such as x and y, and if the converse happens with every pair of terms such as z and w, it is clear that for every instance in which the relation P holds there is a corresponding instance in which the relation Q holds, and vice versa; and this is what we desire to secure by our definition. We can eliminate some redundancies in the above sketch of a definition, by observing that, when the above conditions are realised, the relation P is the same as the relative product of S and Q and the converse of S, i.e. the P-step from x to y may be replaced by the succession of the S-step from x to z, the Q-step from z to w, and the backward S-step from w to y. Thus we may set up the following definitions:—',
        zh: '设 x 与 y 是具有关系 P 的两项。那么就应当存在两项 z 与 w，使得 x 对 z 具有关系 S，y 对 w 具有关系 S，且 z 对 w 具有关系 Q。倘若对于每一对如 x 与 y 这样的项都是如此，并且对于每一对如 z 与 w 这样的项其逆命题也同样成立，那么显而易见，关系 P 成立的每一个实例都对应着关系 Q 成立的一个实例，反之亦然；而这正是我们希望通过定义来确保的结果。我们还可以注意到，当上述条件实现时，关系 P 等同于 S、Q 以及 S 之逆关系这三者的关系积——也就是说，从 x 到 y 的 P 步，可以替换为先从 x 到 z 走一个 S 步，再从 z 到 w 走一个 Q 步，最后从 w 到 y 走一个逆向 S 步这一连串步骤——借此便可消去上述定义草稿中的若干冗余。于是，我们可以确立如下定义：',
      },
      {
        id: 'imp-ch06-p07',
        type: 'paragraph',
        num: '§ 07',
        original:
          'A relation S is said to be a “correlator” or an “ordinal correlator” of two relations P and Q if S is one-one, has the field of Q for its converse domain, and is such that P is the relative product of S and Q and the converse of S.\n\nTwo relations P and Q are said to be “similar,” or to have “likeness,” when there is at least one correlator of P and Q.',
        zh: '若关系 S 是一一关系，以 Q 的场作为其逆域，且使得 [P 等于 S、Q 以及 S 的逆关系这三者的关系积]{#g-imp-c6-02}，则称关系 S 为两个关系 P 与 Q 的一个「**关联子**」或「**序关联子**」。\n\n当至少存在一个 P 与 Q 的关联子时，便称两个关系 P 与 Q 是「**相似的**」，或具有「**相像**」性。',
        glosses: [
          {
            id: 'g-imp-c6-02',
            anchor: 'P 等于 S、Q 以及 S 的逆关系这三者的关系积',
            content:
              '在《数学原理》第二卷第四编「关系算术」（第 150—151 节）中，这一同构方程记作 P = S | Q | S̆，即现代抽象代数与模型论中**关系同构**（relational isomorphism）的形式原型。罗素在上一节指出可省去「S 的定义域是 P 的场」这一条件以消去冗余，其依据见于《数学原理》第 150.12 条定理：由于 Q 的场（C‘Q）按定义不含孤立项（其中每一项必对某项具有 Q 或 Q̆），当 S 是一一关系且其逆域等于 C‘Q 时，等式 P = S | Q | S̆ 一方面保证 P 的前项与后项均取自 S 的定义域，另一方面又迫使 S 定义域中的每一项都经由 S 映射入 C‘Q 内参与 Q 或 Q̆ 的配对、再由 S̆ 折返而进入 P 的场，从而推出 S 的定义域等于 P 的场（D‘S = C‘P），并等价给出逆向同构式 Q = S̆ | P | S。',
          },
        ],
      },
      {
        id: 'imp-ch06-p08',
        type: 'paragraph',
        num: '§ 08',
        original:
          'These definitions will be found to yield what we above decided to be necessary.',
        zh: '不难验证，这两条定义恰好给出了我们方才认定必不可少的全部内容。',
      },
      {
        id: 'imp-ch06-p09',
        type: 'paragraph',
        num: '§ 09',
        original:
          'It will be found that, when two relations are similar, they share all properties which do not depend upon the actual terms in their fields. For instance, if one implies diversity, so does the other; if one is transitive, so is the other; if one is connected, so is the other. Hence if one is serial, so is the other. Again, if one is one-many or one-one, the other is one-many or one-one; and so on, through all the general properties of relations. Even statements involving the actual terms of the field of a relation, though they may not be true as they stand when applied to a similar relation, will always be capable of translation into statements that are analogous. We are led by such considerations to a problem which has, in mathematical philosophy, an importance by no means adequately recognised hitherto. Our problem may be stated as follows:—\n\nGiven some statement in a language of which we know the grammar and the syntax, but not the vocabulary, what are the possible meanings of such a statement, and what are the meanings of the unknown words that would make it true?',
        zh: '我们将会发现，当两个关系相似时，它们便共享一切不依赖于其场中具体项的性质。举例来说，若其中一个关系蕴涵相异性，另一个也是如此；若其中一个是传递的，另一个也是传递的；若其中一个是连通的，另一个也是连通的。因此，若其中一个是序列关系，另一个也必定是序列关系。同理，若其中一个是「一对多」或「一一」关系，另一个也是一对多或一一关系；对于关系的一切普遍性质，莫不依此类推。甚至那些涉及关系之场中具体项的陈述，尽管原封不动地搬用到某个相似关系上未必为真，却总能翻译成与之相平行的类似陈述。顺着这样的思考，我们便被引向了一个在数理哲学中极为重要、迄今却远未得到应有重视的问题。我们的问题可以表述如下：\n\n**给定以某种我们知晓其语法与句法、却不知其词汇涵义的语言所写成的一条陈述，这条陈述可能具有哪些意义？又应当赋予其中未知语词以怎样的意义，才能使这条陈述为真？**',
      },
      {
        id: 'imp-ch06-p10',
        type: 'paragraph',
        num: '§ 10',
        original:
          'The reason that this question is important is that it represents, much more nearly than might be supposed, the state of our knowledge of nature. We know that certain scientific propositions—which, in the most advanced sciences, are expressed in mathematical symbols—are more or less true of the world, but we are very much at sea as to the interpretation to be put upon the terms which occur in these propositions. We know much more (to use, for a moment, an old-fashioned pair of terms) about the form of nature than about the matter. Accordingly, what we really know when we enunciate a law of nature is only that there is probably some interpretation of our terms which will make the law approximately true. Thus great importance attaches to the question: What are the possible meanings of a law expressed in terms of which we do not know the substantive meaning, but only the grammar and syntax? And this question is the one suggested above.',
        zh: '这个问题之所以重要，是因为它对我们关于自然之认识现状的刻画，远比人们通常设想的更为贴切。我们知道，某些科学命题——在最精密的科学中均以数学符号表述——对于这个世界而言或多或少是真的，但至于应当对这些命题中所出现的各词项作出怎样的解释，我们却茫然无措。暂时借用一对略显陈旧的哲学术语来说，我们对自然之**形式**的了解，远远多于对自然之**质料**的了解。因此，当我们陈述一条自然律时，我们真正知道的仅仅是：对我们所使用的词项，大概存在某种解释，能够使这条定律近似为真。于是，下面这个问题便显得至关重要：一条由我们不知其实质意义、仅知其语法与句法的词项所表述出来的定律，究竟具有哪些可能的意义？而这正是上一段所提出的问题。',
      },
      {
        id: 'imp-ch06-p11',
        type: 'paragraph',
        num: '§ 11',
        original:
          'For the present we will ignore the general question, which will occupy us again at a later stage; the subject of likeness itself must first be further investigated.',
        zh: '眼下我们暂且搁置这一普遍问题，留待后文再度探讨；当务之急是先把相像这一课题本身研究得更为深入。',
      },
      {
        id: 'imp-ch06-p12',
        type: 'paragraph',
        num: '§ 12',
        original:
          'Owing to the fact that, when two relations are similar, their properties are the same except when they depend upon the fields being composed of just the terms of which they are composed, it is desirable to have a nomenclature which collects together all the relations that are similar to a given relation. Just as we called the set of those classes that are similar to a given class the “number” of that class, so we may call the set of all those relations that are similar to a given relation the “number” of that relation. But in order to avoid confusion with the numbers appropriate to classes, we will speak, in this case, of a “relation-number.” Thus we have the following definitions:—\n\nThe “relation-number” of a given relation is the class of all those relations that are similar to the given relation.\n\n“Relation-numbers” are the set of all those classes of relations that are relation-numbers of various relations; or, what comes to the same thing, a relation-number is a class of relations consisting of all those relations that are similar to one member of the class.',
        zh: '既然两个关系只要相似，除了那些取决于其场恰好由哪些特定项所组成的性质之外，其余一切性质全都相同，我们便很有必要制定一套命名法，把与某一给定关系相似的一切关系归集在一起。正如我们把与某一给定类相似的那些类所组成的集合称为该类的「数」，我们同样可以把与某一给定关系相似的一切关系所组成的集合称为该关系的「数」。但为了避免同适用于类的数相混淆，在这种场合我们将称之为「关系数」。于是我们有如下定义：\n\n[一个给定关系的「**关系数**」，就是与该给定关系相似的一切关系所组成的类]{#g-imp-c6-03}。\n\n「**关系数**」之总体，就是作为各个关系之关系数的那些关系类所组成的集合；或者换一种等价的说法，一个关系数就是一个关系之类，它由同该类中某一成员相似的一切关系所组成。',
        glosses: [
          {
            id: 'g-imp-c6-03',
            anchor: '一个给定关系的「关系数」，就是与该给定关系相似的一切关系所组成的类',
            content:
              '康托尔在《超穷集合论基础文集》（1895—1897）中曾针对线性全序集引入「**序型**」（Ordnungstypus），针对良序集引入「**序数**」（Ordnungszahl），但一方面仅限于一维线性序列，另一方面仍诉诸「抽去元素本性而保留秩序」的心理抽象来界定序型。《数学原理》第二卷第 152 节将给定关系 P 的关系数记作 Nr‘P，一方面沿用弗雷格—罗素构造法，将关系数定义为全体与 P 相似之关系所组成的等价类，另一方面将序型概念从一维线性序列推广至任意同质关系（涵盖树状谱系、几何网络与偏序结构），使康托尔的序列序型与良序序数成为关系数的特例。',
          },
        ],
      },
      {
        id: 'imp-ch06-p13',
        type: 'paragraph',
        num: '§ 13',
        original:
          'When it is necessary to speak of the numbers of classes in a way which makes it impossible to confuse them with relation-numbers, we shall call them “cardinal numbers.” Thus cardinal numbers are the numbers appropriate to classes. These include the ordinary integers of daily life, and also certain infinite numbers, of which we shall speak later. When we speak of “numbers” without qualification, we are to be understood as meaning cardinal numbers. The definition of a cardinal number, it will be remembered, is as follows:—\n\nThe “cardinal number” of a given class is the set of all those classes that are similar to the given class.',
        zh: '在需要以绝不至于同关系数相混淆的方式来谈论类的数时，我们将称类的数为「基数」。因此，基数是专属于类的数。其中既包括日常生活中的普通整数，也包括后文将要谈到的某些无穷数。凡是我们不加限定地单说「数」的时候，一概应当理解为指基数。读者想必还记得，基数的定义如下：\n\n一个给定类的「**基数**」，就是与该给定类相似的一切类所组成的集合。',
      },
      {
        id: 'imp-ch06-p14',
        type: 'paragraph',
        num: '§ 14',
        original:
          'The most obvious application of relation-numbers is to series. Two series may be regarded as equally long when they have the same relation-number. Two finite series will have the same relation-number when their fields have the same cardinal number of terms, and only then—i.e. a series of (say) 15 terms will have the same relation-number as any other series of fifteen terms, but will not have the same relation-number as a series of 14 or 16 terms, nor, of course, the same relation-number as a relation which is not serial. Thus, in the quite special case of finite series, there is parallelism between cardinal and relation-numbers. The relation-numbers applicable to series may be called “serial numbers” (what are commonly called “ordinal numbers” are a sub-class of these); thus a finite serial number is determinate when we know the cardinal number of terms in the field of a series having the serial number in question. If n is a finite cardinal number, the relation-number of a series which has n terms is called the “ordinal” number n. (There are also infinite ordinal numbers, but of them we shall speak in a later chapter.) When the cardinal number of terms in the field of a series is infinite, the relation-number of the series is not determined merely by the cardinal number, indeed an infinite number of relation-numbers exist for one infinite cardinal number, as we shall see when we come to consider infinite series. When a series is infinite, what we may call its “length,” i.e. its relation-number, may vary without change in the cardinal number; but when a series is finite, this cannot happen.',
        zh: '关系数最显而易见的应用是在序列领域。当两个序列具有相同的关系数时，它们便可被视作同样长。两个有穷序列唯有在其场的项数具有相同基数时，才具有相同的关系数——举例来说，一个含（比方说）15 项的序列与任何另一个含十五项的序列都具有相同的关系数，却不会同含 14 项或 16 项的序列具有相同的关系数，当然更不会同某个并非序列关系的关系具有相同的关系数。因此，在有穷序列这一相当特殊的情形下，基数与关系数之间存在着一一平行的对应。适用于序列的关系数可以称为「序列数」（通常所谓「序数」只是其中的一个子类）；于是，只要知道具有某有穷序列数的序列之场中含有多少项的基数，该有穷序列数便完全确定了。若 n 是一个有穷基数，则含 n 项的序列之关系数便称为「序数」n。（此外也存在无穷序数，但那留待后面的章节再谈。）反之，当序列之场中项的基数为无穷时，该序列的关系数便不再单凭基数就能确定；事实上，正如我们后文考察无穷序列时将要看到的那样，同一个无穷基数之下存在着无穷多个不同的关系数。当一个序列为无穷时，我们不妨称之为其「长度」的东西——即它的关系数——可以在基数毫不变动的情况下发生改变；但在序列有穷时，这种事绝不可能发生。',
      },
      {
        id: 'imp-ch06-p15',
        type: 'paragraph',
        num: '§ 15',
        original:
          'We can define addition and multiplication for relation-numbers as well as for cardinal numbers, and a whole arithmetic of relation-numbers can be developed. The manner in which this is to be done is easily seen by considering the case of series. Suppose, for example, that we wish to define the sum of two non-overlapping series in such a way that the relation-number of the sum shall be capable of being defined as the sum of the relation-numbers of the two series. In the first place, it is clear that there is an order involved as between the two series: one of them must be placed before the other. Thus if P and Q are the generating relations of the two series, in the series which is their sum with P put before Q, every member of the field of P will precede every member of the field of Q. Thus the serial relation which is to be defined as the sum of P and Q is not “P or Q” simply, but “P or Q or the relation of any member of the field of P to any member of the field of Q.” Assuming that P and Q do not overlap, this relation is serial, but “P or Q” is not serial, being not connected, since it does not hold between a member of the field of P and a member of the field of Q. Thus the sum of P and Q, as above defined, is what we need in order to define the sum of two relation-numbers. Similar modifications are needed for products and powers. The resulting arithmetic does not obey the commutative law: the sum or product of two relation-numbers generally depends upon the order in which they are taken. But it obeys the associative law, one form of the distributive law, and two of the formal laws for powers, not only as applied to serial numbers, but as applied to relation-numbers generally. Relation-arithmetic, in fact, though recent, is a thoroughly respectable branch of mathematics.',
        zh: '正如对基数可以定义加法与乘法一样，对关系数我们同样可以定义加法与乘法，并由此发展出一整套关系数的算术。只需考察一下序列的情形，便不难看出应当如何着手。比方说，假设我们希望定义两个互不重叠之序列的和，使得该和序列的关系数能够定义为这两个序列各自关系数的和。首先显而易见的是，这两个序列彼此之间涉及先后次序：必须把其中一个放在另一个之前。因此，若 P 与 Q 分别是这两个序列的生成关系，那么在将 P 置于 Q 之前所得的和序列中，P 之场的每一个成员都将先于 Q 之场的每一个成员。由此可见，应当定义为 P 与 Q 之和的那个序列关系，并非单纯的「P 或 Q」，而是「P，或 Q，或 P 之场的任意成员对 Q 之场的任意成员的关系」。假定 P 与 Q 的场互不重叠，这样定义出来的关系便是序列关系；而单纯的「P 或 Q」却不是序列关系，因为它不具备连通性——在 P 之场的一个成员与 Q 之场的一个成员之间，它并不成立。因此，按上述方式定义的 P 与 Q 之和，正是我们定义两个关系数之和所需要的东西。对于乘积与幂，也需要作类似的调整。由此建立起来的算术不服从交换律：两个关系数的和或积，一般取决于二者排列的先后次序。[但它服从结合律、分配律的一种形式，以及幂运算的两条形式定律]{#g-imp-c6-04}，而且这些定律不仅适用于序列数，也普遍适用于一般的关系数。事实上，关系算术虽然问世未久，却已是数学中一个完全够格而严谨的分支。',
        glosses: [
          {
            id: 'g-imp-c6-04',
            anchor: '但它服从结合律、分配律的一种形式，以及幂运算的两条形式定律',
            content:
              '各项形式定律的严格证明载于《数学原理》第二卷第四编（第 160—186 节）。设 μ、ν、π 为任意关系数：（一）加法与乘法结合律 (μ + ν) + π = μ + (ν + π) 及 (μ × ν) × π = μ × (ν × π) 恒成立；（二）在《数学原理》第 172 节的乘法次序约定下（P × Q 表示将 Q 的各项逐一置换为 P 的副本，与康托尔的左右因子写法对调），右分配律 (ν + π) × μ = (ν × μ) + (π × μ) 恒成立（第 174 节），而左分配律 μ × (ν + π) = (μ × ν) + (μ × π) 一般不成立；（三）在初等代数的三条指数律中，同底数幂相乘律 μ^(ν + π) = μ^ν × μ^π 与幂的乘方律 (μ^ν)^π = μ^(ν × π) 恒成立（第 176 节），唯独积的乘方律 (μ × ν)^π = μ^π × ν^π 因关系乘法不满足交换律而不再成立。',
          },
        ],
      },
      {
        id: 'imp-ch06-p16',
        type: 'paragraph',
        num: '§ 16',
        original:
          'It must not be supposed, merely because series afford the most obvious application of the idea of likeness, that there are no other applications that are important. We have already mentioned maps, and we might extend our thoughts from this illustration to geometry generally. If the system of relations by which a geometry is applied to a certain set of terms can be brought fully into relations of likeness with a system applying to another set of terms, then the geometry of the two sets is indistinguishable from the mathematical point of view, i.e. all the propositions are the same, except for the fact that they are applied in one case to one set of terms and in the other to another. We may illustrate this by the relations of the sort that may be called “between,” which we considered in Chapter IV. We there saw that, provided a three-term relation has certain formal logical properties, it will give rise to series, and may be called a “between-relation.” Given any two points, we can use the between-relation to define the straight line determined by those two points; it consists of a and b together with all points x, such that the between-relation holds between the three points a, b, x in some order or other. It has been shown by O. Veblen that we may regard our whole space as the field of a three-term between-relation, and define our geometry by the properties we assign to our between-relation.[1] Now likeness is just as easily definable between three-term relations as between two-term relations. If B and B′ are two between-relations, so that “xB(y, z)” means “x is between y and z with respect to B,” we shall call S a correlator of B and B′ if it has the field of B′ for its converse domain, and is such that the relation B holds between three terms when B′ holds between their S-correlates, and only then. And we shall say that B is like B′ when there is at least one correlator of B with B′. The reader can easily convince himself that, if B is like B′ in this sense, there can be no difference between the geometry generated by B and that generated by B′.',
        zh: '切莫仅仅因为序列提供了相像观念最显而易见的应用，便以为除此之外再无其他重要的应用了。我们前面已经提到过地图，从这个例子出发，不妨把思路推广到一般的几何学。倘若借以把某种几何学施用于某一组项的关系系统，能够同施用于另一组项的关系系统建立起完备的相像关系，那么从数学观点来看，这两组项的几何学便是毫无二致的——也就是说，除了在一个场合施用于这一组项、在另一个场合施用于另一组项之外，其余一切命题全都相同。我们可以用第四章讨论过的可称为「介于」的那类关系来阐明这一点。我们在那里已经看到，只要一个三项关系具备特定的形式逻辑性质，它就能生成序列，并可称为「介于关系」。给定任意两点，我们可以用介于关系来定义由这两点所确定的直线：它由 a 与 b 连同一切满足如下条件的点 x 所组成，即介于关系按某种次序在 a、b、x 三点之间成立。O. 维布伦已经证明，我们可以把整个空间视作某个三项介于关系的场，并借由赋予该介于关系的各项性质来定义我们的几何学[^imp-fn-06-1]。而三项关系之间的相像，定义起来同二项关系之间的相像一样轻而易举。设 B 与 B′ 是两个介于关系，使得「xB(y, z)」意为「相对于 B 而言 x 介于 y 与 z 之间」；若一一关系 S 以 B′ 的场作为其逆域，且使得当且仅当 B′ 在三项各自的 S 关联项之间成立时，关系 B 在这三项之间成立，我们便称 S 为 B 与 B′ 的一个关联子。并且，当至少存在一个 B 与 B′ 的关联子时，我们便说 B 与 B′ 相像。读者不难自行确信，倘若 B 与 B′ 在这一意义上相像，那么由 B 所生成的几何学与由 B′ 所生成的几何学之间便不可能有任何差别。',
        authorNotes: [
          {
            id: 'imp-fn-06-1',
            original:
              'This does not apply to elliptic space, but only to spaces in which the straight line is an open series. Modern Mathematics, edited by J. W. A. Young, pp. 3–51 (monograph by O. Veblen on “The Foundations of Geometry”).',
            zh: '这并不适用于椭圆空间，而仅适用于直线构成开序列的那些空间。参见 J. W. A. 杨主编《现代数学》，第 3—51 页（O. 维布伦所撰专论《几何学基础》）。',
          },
        ],
      },
      {
        id: 'imp-ch06-p17',
        type: 'paragraph',
        num: '§ 17',
        original:
          'It follows from this that the mathematician need not concern himself with the particular being or intrinsic nature of his points, lines, and planes, even when he is speculating as an applied mathematician. We may say that there is empirical evidence of the approximate truth of such parts of geometry as are not matters of definition. But there is no empirical evidence as to what a “point” is to be. It has to be something that as nearly as possible satisfies our axioms, but it does not have to be “very small” or “without parts.” Whether or not it is those things is a matter of indifference, so long as it satisfies the axioms. If we can, out of empirical material, construct a logical structure, no matter how complicated, which will satisfy our geometrical axioms, that structure may legitimately be called a “point.” We must not say that there is nothing else that could legitimately be called a “point”; we must only say: “This object we have constructed is sufficient for the geometer; it may be one of many objects, any of which would be sufficient, but that is no concern of ours, since this object is enough to vindicate the empirical truth of geometry, in so far as geometry is not a matter of definition.” This is only an illustration of the general principle that what matters in mathematics, and to a very great extent in physical science, is not the intrinsic nature of our terms, but the logical nature of their interrelations.',
        zh: '由此可以推出，数学家即使在作为应用数学家进行推究时，也无须关心他的点、线、面究竟具有怎样的特殊存在或内在性质。我们可以说，对于几何学中并非纯属定义的那部分内容，确实存在经验上的证据表明其近似为真。但至于一个「点」究竟应当是什么，却没有任何经验上的证据。它必须是尽可能满足我们公理的某种东西，却不必「极小」或「没有部分」。只要满足公理，它究竟是不是那样的东西根本无关紧要。倘若我们能够[从经验材料出发构造出某种逻辑结构]{#g-imp-c6-05}，无论它有多么复杂，只要它能够满足我们的几何公理，那个结构便可以名正言顺地被称为一个「点」。我们绝不可断言除此之外再无别的东西能名正言顺地称为「点」；我们只能说：「我们所构造的这个对象对于几何学家而言已经足够了；它或许只是众多皆可胜任的对象之一，但那与我们无关，因为就几何学并非纯属定义的部分而言，单凭这一个对象便足以证实几何学的经验真理性了。」这不过是一条普遍原则的例证：**在数学中——而且在极大程度上在物理科学中也是如此——真正紧要的并不是我们所讨论之项的内在性质，而是各项之间相互关系的逻辑性质。**',
        glosses: [
          {
            id: 'g-imp-c6-05',
            anchor: '从经验材料出发构造出某种逻辑结构',
            content:
              '此处指涉怀特海为筹划中的《数学原理》第四卷（几何卷，终未写成）所创立、并由罗素在《我们关于外在世界的知识》（1914，第四讲）中采纳的「**广延抽象法**」（method of extensive abstraction；系统阐述见怀特海 1919 年同年出版的《自然知识原理探究》）。鉴于感官经验中只存在具有有穷体积与绵延的知觉区域，而不存在欧几里得式的「无部分之点」或「无绵延之瞬」，怀特海利用空间包含关系，将无限层层收敛嵌套的一组有穷体积序列定义为「抽象集」（abstractive set，如无限同心球序列），再把彼此相互覆盖等价的全体抽象集所组成的等价类定义为几何学上的一个「点」。',
          },
        ],
      },
      {
        id: 'imp-ch06-p18',
        type: 'paragraph',
        num: '§ 18',
        original:
          'We may say, of two similar relations, that they have the same “structure.” For mathematical purposes (though not for those of pure philosophy) the only thing of importance about a relation is the cases in which it holds, not its intrinsic nature. Just as a class may be defined by various different but co-extensive concepts—e.g. “man” and “featherless biped”—so two relations which are conceptually different may hold in the same set of instances. An “instance” in which a relation holds is to be conceived as a couple of terms, with an order, so that one of the terms comes first and the other second; the couple is to be, of course, such that its first term has the relation in question to its second. Take (say) the relation “father”: we can define what we may call the “extension” of this relation as the class of all ordered couples (x, y) which are such that x is the father of y. From the mathematical point of view, the only thing of importance about the relation “father” is that it defines this set of ordered couples. Speaking generally, we say:\n\nThe “extension” of a relation is the class of those ordered couples (x, y) which are such that x has the relation in question to y.',
        zh: '对于两个相似的关系，我们可以说它们具有相同的「结构」。就数学目的而言（尽管就纯粹哲学的目的而言并非如此），关于一个关系唯一重要的事情是它在哪些实例中成立，而不是它的内在性质。正如同一个类可以借由种种不同却具有相同外延的概念来定义——例如「人」与「无羽两足动物」——两个在概念上不同的关系，也完全可以在同一组实例中成立。一个关系得以成立的「实例」，应当设想为带有先后次序的一对项，使得其中一项居先、另一项居后；当然，这一对项必须满足其第一项对第二项具有所论关系。不妨以「父亲」这一关系为例：我们可以把所谓该关系的「外延」，定义为满足 x 是 y 的父亲这一条件的全体有序偶 (x, y) 所组成的类。从数学观点来看，「父亲」这一关系唯一紧要之处，就在于它确定了这样一组有序偶。一般而言，我们说：\n\n[关系的「**外延**」就是满足如下条件的全体有序偶]{#g-imp-c6-06} (x, y) 所组成的类，即其中 x 对 y 具有所论关系。',
        glosses: [
          {
            id: 'g-imp-c6-06',
            anchor: '关系的「外延」就是满足如下条件的全体有序偶',
            content:
              '在 1910 年《数学原理》第一卷第 21 节与第 55 节中，怀特海与罗素仍将关系的「外延」（extensional relation）与类的外延分列为两套平行的不完全符号，并把有序偶 x ↓ y 定义为仅在 x 与 y 之间成立的二元外延关系。1914 年，曾赴剑桥随罗素研习数理逻辑的诺伯特·维纳（Norbert Wiener）发表《关系逻辑的一种简化》（刊于《剑桥哲学学会会刊》第十七卷），首次将有序偶 (x, y) 纯粹还原为「类的类」（1921 年经卡齐米日·库拉托夫斯基简化为现今通行的 {{x}, {x, y}}），从而使关系的外延归入类论中的有序偶之类。',
          },
        ],
      },
      {
        id: 'imp-ch06-p19',
        type: 'paragraph',
        num: '§ 19',
        original:
          'We can now go a step further in the process of abstraction, and consider what we mean by “structure.” Given any relation, we can, if it is a sufficiently simple one, construct a map of it. For the sake of definiteness, let us take a relation of which the extension is the following couples: ab, ac, ad, bc, ce, dc, de, where a, b, c, d, e are five terms, no matter what. We may make a “map” of this relation by taking five points on a plane and connecting them by arrows, as in the accompanying figure. What is revealed by the map is what we call the “structure” of the relation.\n[Figure 2:\n  a ---> b\n  |\\     |\n  | \\    v\n  v  \\-> c\n  d ---> |\n   \\    /\n    v  v\n     e\n  (Directed arrows: a->b, a->c, a->d, b->c, d->c, c->e, d->e)\n]',
        zh: '现在我们可以在抽象的进程中再向前迈进一步，考察一下我们所说的「结构」究竟是什么意思。给定任何一个关系，只要它足够简单，我们都可以为它绘制一幅图。为了明确起见，不妨取这样一个关系，其外延由如下各组有序偶构成：ab, ac, ad, bc, ce, dc, de，其中 a, b, c, d, e 是任意五个项，无论它们本身是什么。我们可以在平面上取五个点，如附图所示用箭头将它们连接起来，从而为这个关系绘制一幅「地图」。这幅图所揭示出来的东西，就是我们所说的该关系的「结构」：\n\n图二：有向箭头依次为 a → b，a → c，a → d，b → c，d → c，c → e，d → e。',
      },
      {
        id: 'imp-ch06-p20',
        type: 'paragraph',
        num: '§ 20',
        original:
          'It is clear that the “structure” of the relation does not depend upon the particular terms that make up the field of the relation. The field may be changed without changing the structure, and the structure may be changed without changing the field—for example, if we were to add the couple ae in the above illustration we should alter the structure but not the field. Two relations have the same “structure,” we shall say, when the same map will do for both—or, what comes to the same thing, when either can be a map for the other (since every relation can be its own map). And that, as a moment’s reflection shows, is the very same thing as what we have called “likeness.” That is to say, two relations have the same structure when they have likeness, i.e. when they have the same relation-number. Thus what we defined as the “relation-number” is the very same thing as is obscurely intended by the word “structure”—a word which, important as it is, is never (so far as we know) defined in precise terms by those who use it.',
        zh: '显而易见，关系的「结构」并不取决于组成该关系之场的那些特定项。改变场未必改变结构，改变结构也未必改变场——例如在上面的例子中，倘若我们添上有序偶 ae，便改变了结构，却并没有改变场。我们将说：当同一幅图可以同时充当两个关系的地图时——或者换一种等价的说法，当其中一个关系可以充当另一个关系的地图时（因为每一个关系都可以充当它自身的地图）——这两个关系便具有相同的「结构」。稍加思索便知，这同我们此前所说的「相像」完全是一回事。也就是说，两个关系具有相同的结构，当且仅当它们彼此相像，亦即具有相同的关系数。由此可见，我们所定义的「关系数」，恰恰就是人们使用「结构」一词时隐约想要表达的同一样东西——尽管「结构」这个词如此重要，使用它的人却从未（据我们所知）给它下过精确的定义。',
      },
      {
        id: 'imp-ch06-p21',
        type: 'paragraph',
        num: '§ 21',
        original:
          'There has been a great deal of speculation in traditional philosophy which might have been avoided if the importance of structure, and the difficulty of getting behind it, had been realised. For example, it is often said that space and time are subjective, but they have objective counterparts; or that phenomena are subjective, but are caused by things in themselves, which must have differences inter se corresponding with the differences in the phenomena to which they give rise. Where such hypotheses are made, it is generally supposed that we can know very little about the objective counterparts. In actual fact, however, if the hypotheses as stated were correct, the objective counterparts would form a world having the same structure as the phenomenal world, and allowing us to infer from phenomena the truth of all propositions that can be stated in abstract terms and are known to be true of phenomena. If the phenomenal world has three dimensions, so must the world behind phenomena; if the phenomenal world is Euclidean, so must the other be; and so on. In short, every proposition having a communicable significance must be true of both worlds or of neither: the only difference must lie in just that essence of individuality which always eludes words and baffles description, but which, for that very reason, is irrelevant to science. Now the only purpose that philosophers have in view in condemning phenomena is in order to persuade themselves and others that the real world is very different from the world of appearance. We can all sympathise with their wish to prove such a very desirable proposition, but we cannot congratulate them on their success. It is true that many of them do not assert objective counterparts to phenomena, and these escape from the above argument. Those who do assert counterparts are, as a rule, very reticent on the subject, probably because they feel instinctively that, if pursued, it will bring about too much of a rapprochement between the real and the phenomenal world. If they were to pursue the topic, they could hardly avoid the conclusions which we have been suggesting. In such ways, as well as in many others, the notion of structure or relation-number is important.',
        zh: '倘若传统哲学早就认清结构的重要性以及越过结构窥探其背后的艰难，原本有许多玄想都是可以避免的。举例来说，人们常说空间与时间是主观的，却拥有客观的对应物；或者说现象是主观的，却由「物自体」所引起，而物自体彼此之间必定具有同它们所引起的现象间差异相对应的差异。凡是提出这类假说的地方，人们通常都以为，对于那些客观对应物我们几乎一无所知。然而事实上，倘若上述假说果真如其所言那样成立，那么那些客观对应物便将构成一个同现象世界具有相同结构的世界，从而容许我们从现象出发，推知一切能够用抽象术语陈述且已知对现象为真的命题对那个世界也同样为真。倘若现象世界是三维的，现象背后的世界也必定是三维的；倘若现象世界是欧几里得式的，另一个世界也必定是欧几里得式的；依此类推。简言之，**凡是具有可传达之意义的命题，必定要么对两个世界同时为真，要么对两个世界同时为假**：唯一的差别只能存在于那种永远逃逸于言辞之外、令一切摹状束手无策的个体性本质之中，而恰恰出于这一原因，那种个体性本质对于科学是毫不相干的。其实，哲学家们贬低现象的唯一目的，无非是想说服自己和别人相信，实在的世界与表象的世界大相径庭。对于他们想要证明这样一个颇合心意的命题的愿望，我们固然深表同情，却实在无法祝贺他们取得了成功。诚然，其中许多哲学家并不断言现象有客观对应物，这些人便得以免受上述论证的波及。至于那些确实断言有客观对应物的哲学家，谈到这一话题时通常都讳莫如深，大概是因为他们本能地感到，一旦深究下去，便会让实在世界与现象世界走得太近。倘若他们果真把这一话题追究到底，便很难回避我们方才指出的那些结论。无论在这些方面，还是在许多别的方面，[结构或关系数这一概念都具有重大的意义]{#g-imp-c6-07}。',
        glosses: [
          {
            id: 'g-imp-c6-07',
            anchor: '结构或关系数这一概念都具有重大的意义',
            content:
              '本段针对康德《纯粹理性批判》将空间与时间归为主观感性直观形式、同时设定不可知的「物自体」（Dinge an sich）作为现象原因的二元架构，以及赫尔曼·冯·赫尔姆霍茨（Hermann von Helmholtz）等新康德主义生理学家的知觉符号论。罗素后来在《物的分析》（The Analysis of Matter，1927，第二十、二十四、三十七章）中将本章提出的地图与地域同构论发展为系统的结构实在论认识论，借口语与文字、留声机唱片纹路与乐曲旋律之间的「关系数」同构，论证现代物理学所能认识的唯有物理事件的抽象因果与数学结构，而非其内在质性；鲁道夫·卡尔纳普在《世界的逻辑构造》（Der logische Aufbau der Welt，1928，第 11—16 节）中亦直接援引本章的「关系数」与箭头图，提出以「纯结构摹状词」界定一切科学客观概念，构成当代科学哲学中「认识论结构实在论」（epistemic structural realism，1989 年由约翰·沃勒尔重新命名）的思想源头。1928 年 4 月，剑桥数学家马克斯·纽曼（M. H. A. Newman）在《心灵》（Mind，第三十七卷第 146 期）发表《罗素先生的「知觉因果理论」》（通称「纽曼诘难」），从集合论上证明：只要给定任意一个具有特定基数的对象集合，任何与该基数相容的抽象关系结构（关系数）都必然已由该集合上的某组有序偶外延平凡实现；因此，倘若对外部世界除「具有某种关系数」之外对具体关系本身毫无非结构性的直接认识，关于不可观察世界之结构的断言便会退化为仅关乎集合**基数**的平凡命题。罗素于 1928 年 4 月 24 日覆信纽曼承认：「你完全清楚地表明，我此前所谓关于物理世界除其结构外一无所知的那些说法，要么是假的，要么是琐屑平凡的。」',
          },
        ],
      },
    ],
  },
];
