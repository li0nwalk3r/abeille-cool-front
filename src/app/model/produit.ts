import {Unite} from "./unite";
import {ProduitCatProd} from "./produitCatProd";

export class Produit {
  id: number;
  version: number;
  nom: string;
  description: string;
  qte: number;
  prixUnitaireHT: number;
  unite: Unite;
  produitCatProd: ProduitCatProd;


  constructor(id?: number, version?: number, nom?: string, description?: string, qte?: number, prixUnitaireHT?: number, unite?: Unite, produitCatProd?: ProduitCatProd) {
    this.id = id;
    this.version = version;
    this.nom = nom;
    this.description = description;
    this.qte = qte;
    this.prixUnitaireHT = prixUnitaireHT;
    this.unite = unite;
    this. produitCatProd =  produitCatProd;
  }
}
