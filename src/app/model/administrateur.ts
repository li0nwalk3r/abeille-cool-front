export class Administrateur {
  id: number;
  version: number;
  nom: string;
  prenom: string;
  rue: string;
  codePostal: string;
  ville: string;
  pays: string;



constructor(id?: number, version?: number, nom?: string, prenom?: string, rue?: string, codePostal?: string, ville?: string, pays?: string) {
    this.id = id;
    this.version = version;
    this.nom = nom;
    this.prenom = prenom;
    this.rue = rue;
    this.codePostal = codePostal;
    this.ville = ville;
    this.pays = pays;
  }

}
