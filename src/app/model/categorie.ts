import {ProduitCatProd} from "./produitCatProd";

export class CatProd {
  id: number;
  version: number;
  nom: string;
  produitCatProd: ProduitCatProd;

  constructor(id?: number, version?: number, nom?: string, produitCatProd?: ProduitCatProd) {
    this.id = id;
    this.version = version;
    this.nom = nom;
    this.produitCatProd = produitCatProd;
  }
}
