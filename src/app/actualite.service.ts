import {Injectable} from '@angular/core';
import {Actualite} from './model/actualite';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {

  // actualites: Array<Actualite> = new Array<Actualite>();
<<<<<<< HEAD:src/app/actualite.service.ts

  constructor(private http:HttpClient) {
  }

  findAll() {
    return this.http.get('http://localhost:8080/actualite');
  }
=======
  //
  // constructor() {
  // }
  //
  // findAll(): Array<Actualite> {
  //   return this.actualites;
  // }
>>>>>>> master:src/app/accueil.service.ts
}
