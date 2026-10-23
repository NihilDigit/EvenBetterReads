import type { BookMeta } from '../../types/book';
import { leMytheDeSisyphe } from './le-mythe-de-sisyphe';
import { zurGenealogieDerMoral } from './zur-genealogie-der-moral';
import { protestantischeEthik } from './protestantische-ethik';

export const books: BookMeta[] = [
  leMytheDeSisyphe,
  zurGenealogieDerMoral,
  protestantischeEthik
];

export function getBookBySlug(slug: string): BookMeta | undefined {
  return books.find((b) => b.slug === slug);
}
