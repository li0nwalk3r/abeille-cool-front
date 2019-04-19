import {LigneCommande} from './ligne-commande';
import {Coordonnee} from './coordonnee';
import {Client} from './client';
import {Facturation} from "./facturation";

export class CommandeClient {
  id: number;
  delai: Date;
  statut: string;
  lignesCommande: Array<LigneCommande>;
  coordonnee: Coordonnee;
  client: Client;
  facturation:Facturation;

  // A FINIR AVEC LES LIAISONS


  constructor(id?: number, delai?: Date, statut?: string, lignesCommande?: Array<LigneCommande>, client?: Client, coordonnee?: Coordonnee, facturation?:Facturation) {
    this.id = id;
    this.delai = delai;
    this.statut = statut;
    this.lignesCommande = lignesCommande;
    this.client = client;
    this.coordonnee = coordonnee;
    this.facturation=facturation;
  }
}
