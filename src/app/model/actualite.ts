export class Actualite {
  id: number;
  version: number;
  descriptif: string;
  date: Date;
  photoUrl: string;
  active: boolean;

  constructor(id?: number, version?: number, descriptif?: string, date?: Date, photoUrl?: string, active?: boolean) {
    this.id = id;
    this.version = version;
    this.descriptif = descriptif;
    this.date = date;
    this.photoUrl = photoUrl;
    this.active = active;
  }

}
