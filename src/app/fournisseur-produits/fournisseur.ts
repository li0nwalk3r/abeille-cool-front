export class Fournisseur {
  id: number;
  version: number;
  raisonSociale: string;
  siret: string;
  statutJuridique: number;
  numeroTva: string;


  constructor(id?: number, version?: number, raisonSociale?: string, siret?: string, statutJuridique?: number, numeroTva?: string) {
    this.id = id;
    this.version = version;
    this.raisonSociale = raisonSociale;
    this.siret = siret;
    this.statutJuridique = statutJuridique;
    this.numeroTva = numeroTva;
  }

}
