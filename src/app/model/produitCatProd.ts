import {CatProd} from "./categorie";
import {Produit} from "./produit";

export class ProduitCatProd {
  id: number;
  version: number;
  nom: string;
  catProd: CatProd;
  produit: Produit;

  constructor(id?: number, version?: number, nom?: string, catProd?: CatProd, produit?: Produit) {
    this.id = id;
    this.version = version;
    this.nom = nom;
    this.catProd = catProd;
    this.produit = produit;
  }
}
