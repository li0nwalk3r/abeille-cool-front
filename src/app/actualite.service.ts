import {Injectable} from '@angular/core';
import {Actualite} from './model/actualite';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {

  // actualites: Array<Actualite> = new Array<Actualite>();

  constructor(private http:HttpClient) {
  }

  findAll() {
    return this.http.get('http://localhost:8080/actualite');
  }
}
