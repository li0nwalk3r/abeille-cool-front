import {Article} from './article';

export class LigneCommande{
  id:number;
  version: number;
  qte: number;
  article: Article;

  constructor(qte?:number,article?:Article){
    this.qte=qte;
    this.article=article;
  }

}
