import type { BookMeta } from '../../types/book';
import { leMytheDeSisyphe } from './le-mythe-de-sisyphe';
import { zurGenealogieDerMoral } from './zur-genealogie-der-moral';
import { protestantischeEthik } from './protestantische-ethik';
import { commonSense } from './common-sense';
import { lesVillesDuMoyenAge } from './les-villes-du-moyen-age';
import { bartlebyTheScrivener } from './bartleby-the-scrivener';
import { ceQuOnVoit } from './ce-qu-on-voit';
import { politicalDiscourses } from './political-discourses';
import { achtzehnteBrumaire } from './achtzehnte-brumaire';
import { zapiskiIzPodpolya } from './zapiski-iz-podpolya';
import { viesImaginaires } from './vies-imaginaires';
import { beimBauDerChinesischenMauer } from './beim-bau-der-chinesischen-mauer';
import { wasIstMetaphysik } from './was-ist-metaphysik';
import { laNausee } from './la-nausee';

export const books: BookMeta[] = [
  leMytheDeSisyphe,
  laNausee,
  wasIstMetaphysik,
  zurGenealogieDerMoral,
  protestantischeEthik,
  commonSense,
  lesVillesDuMoyenAge,
  bartlebyTheScrivener,
  ceQuOnVoit,
  politicalDiscourses,
  achtzehnteBrumaire,
  zapiskiIzPodpolya,
  viesImaginaires,
  beimBauDerChinesischenMauer
];

export function getBookBySlug(slug: string): BookMeta | undefined {
  return books.find((b) => b.slug === slug);
}
