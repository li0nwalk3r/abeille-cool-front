import {Unite} from "./unite";
import {Fournisseur} from "./fournisseur";

export class Produit {
  fournisseur: Fournisseur;
  id: number;
  version: number;
  nom: string;
  description: string;
  qte: number;
  prixUnitaireHT: number
  unite: Unite;
  qteDemande: number;
  prixTotal: number;

  constructor(id?: number, version?: number, nom?: string, description?: string, qte?: number, prixUnitaireHT?: number, unite?: Unite, fournisseur?: Fournisseur, qteDemande?: number, prixTotal?: number) {
    this.id = id;
    this.version = version;
    this.nom = nom;
    this.description = description;
    this.qte = qte;
    this.prixUnitaireHT = prixUnitaireHT;
    this.unite = unite;
    this.fournisseur = new  Fournisseur();
    this.qteDemande = qteDemande;
    this.prixTotal = prixTotal;
  }
}
