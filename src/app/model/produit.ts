import {Unite} from "./unite";
import {ProduitCatProd} from "./produitCatProd";
import {Fournisseur} from "./fournisseur";

export class Produit {
  id: number;
  version: number;
  nom: string;
  description: string;
  qte: number;
  prixUnitaireHT: number;
  unite: Unite;
  qteDemande: number;
  prixTotal: number;
  traite: boolean;
  valide: boolean;
  fournisseur: Fournisseur;
  produitCatProd: ProduitCatProd;


  constructor(id?: number, version?: number, nom?: string, description?: string, qte?: number, prixUnitaireHT?: number, unite?: Unite, qteDemande?: number, prixTotal?: number, traite?: boolean, valide?: boolean, fournisseur?: Fournisseur, produitCatProd?: ProduitCatProd) {
    this.id = id;
    this.version = version;
    this.nom = nom;
    this.description = description;
    this.qte = qte;
    this.prixUnitaireHT = prixUnitaireHT;
    this.unite = unite;
    this.qteDemande = qteDemande;
    this.prixTotal = prixTotal;
    this.traite = traite;
    this.valide = valide;
    this.fournisseur = fournisseur;
    this.produitCatProd = produitCatProd;
  }
}
