import type { BookMeta } from '../../types/book';
import { leMytheDeSisyphe } from './le-mythe-de-sisyphe';
import { zurGenealogieDerMoral } from './zur-genealogie-der-moral';
import { protestantischeEthik } from './protestantische-ethik';
import { commonSense } from './common-sense';
import { lesVillesDuMoyenAge } from './les-villes-du-moyen-age';
import { bartlebyTheScrivener } from './bartleby-the-scrivener';

export const books: BookMeta[] = [
  leMytheDeSisyphe,
  zurGenealogieDerMoral,
  protestantischeEthik,
  commonSense,
  lesVillesDuMoyenAge,
  bartlebyTheScrivener
];

export function getBookBySlug(slug: string): BookMeta | undefined {
  return books.find((b) => b.slug === slug);
}
