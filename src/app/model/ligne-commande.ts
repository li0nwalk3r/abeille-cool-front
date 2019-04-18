import {CommandeClient} from './commande-client';
import {Article} from './article';

export class LigneCommande {
  id: number;
  qte: number;
  article: Article;
  commandeClient: CommandeClient;

  constructor(qte?: number, article?: Article, id?: number, commandeClient?: CommandeClient) {
    this.id = id;
    this.qte = qte;
    this.article = article;
    this.commandeClient = commandeClient;
  }
}
