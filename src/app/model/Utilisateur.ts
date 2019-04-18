import {Client} from "./client";
import {Fournisseur} from "./fournisseur";
import {Administrateur} from "./administrateur";

export class Utilisateur {
  id: number;
  version: number;
  mail: string;
  mdp: string;
  type: string;
  client:Client;
  fournisseur:Fournisseur;
  administrateur:Administrateur;


  constructor(id?: number, version?: number, mail?: string, mdp?: string, type?: string, client?:Client, fournisseur?:Fournisseur, administrateur?:Administrateur) {
    this.id = id;
    this.version = version;
    this.mail = mail;
    this.mdp = mdp;
    this.type = type;
    this.client=client;
    this.fournisseur=fournisseur;
    this.administrateur=administrateur;
  }
}
