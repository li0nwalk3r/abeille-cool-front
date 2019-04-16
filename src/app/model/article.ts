export class Article {
  id: number;
  version: number;
  nom: string;
  detail: string;
  prix: number;
  qte: number;
  photoURL: string;
  degre: number;
  volume: number;
  typeMiel: string;
  typeHydromel: string;
  archive: boolean;


  constructor(id?: number, version?: number, nom?: string, detail?: string, prix?: number, qte?: number, photoURL?: string, degre?: number, volume?: number, typeMiel?: string, typeHydromel?: string, archive?: boolean) {
    this.id = id;
    this.version = version;
    this.nom = nom;
    this.detail = detail;
    this.prix = prix;
    this.qte = qte;
    this.photoURL = photoURL;
    this.degre = degre;
    this.volume = volume;
    this.typeMiel = typeMiel;
    this.typeHydromel = typeHydromel;
    this.archive = archive;
  }

}
