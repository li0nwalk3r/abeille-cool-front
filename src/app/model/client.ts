export class Client {
  id: number;
  nom: string;
  prenom: string;
  vip: boolean;
  fidelite: number;

  constructor(id?:number, nom?: string, prenom?: string, vip?: boolean, fidelite?: number){
    this.id=id;
    this.nom=nom;
    this.prenom=prenom;
    this.vip=vip;
    this.fidelite=fidelite;
  }
}
