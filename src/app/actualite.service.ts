import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {

  actualites: Array<Actualite> = new Array<Actualite>();

  constructor() {
  }

  findAll(): Array<Actualite> {
    return this.actualites;
  }
}
