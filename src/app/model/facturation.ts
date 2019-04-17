export class Facturation {
  id: number;
  version: number;
  date: Date;
  ref: string;



  constructor(id?: number, version?: number, date?: Date, ref?: string) {
    this.id = id;
    this.version = version;
    this.date = date;
    this.ref = ref;
  }

}
