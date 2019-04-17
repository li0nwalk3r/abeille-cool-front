import {Client} from './client';

export class Coordonnee {
  id: number;
  libelle: string;
  nom: string;
  prenom: string;
  numTel: string;
  mail: string;
  rue: string;
  codePostal: string;
  ville: string;
  pays: string;
  client: Client;

  constructor(id?:number, libelle?: string, nom?: string, prenom?: string, numTel?: string, mail?: string, rue?: string, codePostal?: string, ville?: string, pays?: string, client?: Client){
    this.id=id;
    this.libelle=libelle;
    this.nom=nom;
    this.prenom=prenom;
    this.numTel=numTel;
    this.mail=mail;
    this.rue=rue;
    this.codePostal=codePostal;
    this.ville=ville;
    this.pays=pays;
    this.client= new Client();
  }
}
