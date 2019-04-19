import {Produit} from "./produit";
import {Administrateur} from "./administrateur";

export class CommandeFournisseur {
  id: number;
  version: number;
  qte: number;
  prixTotal: number;
  tauxTVA: number;
  date: Date;
  produit: Produit;
  administrateur: Administrateur;

  constructor(id?: number, version?: number, qte?: number, prixTotal?: number, tauxTVA?: number, date?: Date, produit?: Produit, administrateur?: Administrateur) {
    this.id = id;
    this.version = version;
    this.qte = qte;
    this.prixTotal = prixTotal;
    this.tauxTVA = tauxTVA;
    this.date = date;
    this.produit = produit;
    this.administrateur = administrateur;
  }
}
