
export class Utilisateur {
  id: number;
  version: number;
  mail: string;
  mdp: string;
  type: string;


  constructor(id?: number, version?: number, mail?: string, mdp?: string, type?: string) {
    this.id = id;
    this.version = version;
    this.mail = mail;
    this.mdp = mdp;
    this.type = type;
  }
}
