import {LigneCommande} from './ligne-commande';

export class CommandeClient {
  id: number;
  delai: Date;
  statut: string;
  lignesCommande: Array<LigneCommande>;

  // A FINIR AVEC LES LIAISONS


  constructor(id: number, delai: Date, statut: string, lignesCommande: Array<LigneCommande>) {
    this.id = id;
    this.delai = delai;
    this.statut = statut;
    this.lignesCommande = lignesCommande;
  }
}
