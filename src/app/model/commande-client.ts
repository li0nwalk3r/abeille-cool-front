import {LigneCommande} from './ligne-commande';
import {Coordonnee} from './coordonnee';

export class CommandeClient {
  id: number;
  delai: Date;
  statut: string;
  lignesCommande: Array<LigneCommande>;
  coordonnee: Coordonnee;

  // A FINIR AVEC LES LIAISONS


  constructor(id?: number, delai?: Date, statut?: string, lignesCommande?: Array<LigneCommande>, coordonnee?: Coordonnee) {
    this.id = id;
    this.delai = delai;
    this.statut = statut;
    this.lignesCommande = lignesCommande;
	this.coordonnee = coordonnee;
  }
}
