export class CommandeFournisseur {
  id: number;
  version: number;
  qte: number;
  prixTotal: number;
  tauxTVA: number;
  date: Date;

  constructor(id?: number, version?: number, qte?: number, prixTotal?: number, tauxTVA?: number, date?: Date) {
    this.id = id;
    this.version = version;
    this.qte = qte;
    this.prixTotal = prixTotal;
    this.tauxTVA = tauxTVA;
    this.date = date;
  }
}
