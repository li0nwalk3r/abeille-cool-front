import {Article} from './article';

export class Avis {
  id: number;
  date: Date;
  avis: string;
  note: number;
  valide: boolean;
  site : boolean;
  article: Article;
}
