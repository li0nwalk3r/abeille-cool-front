import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Facturation} from './model/facturation';
import {Administrateur} from './model/administrateur';

@Injectable({
  providedIn: 'root'
})
export class AdministrateurHttpService {
  administrateurs: any;

  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
    this.http.get('http://localhost:8080/administrateur')
      .subscribe(resp => {
          this.administrateurs = resp;
        },
        err => console.log(err));
  }

  findAll(): Array<Administrateur> {
    return this.administrateurs;
  }

  findById(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/administrateur/' + id);
  }

  save(administrateur: Administrateur) {
    if (administrateur) {
      if (!administrateur.id) {
        this.http.post('http://localhost:8080/administrateur', administrateur).subscribe(resp => {this.load(); administrateur = null;},
          err => console.log(err));

      } else {
        this.http.put('http://localhost:8080/administrateur/' + administrateur.id, administrateur).subscribe(resp => {this.load(); administrateur = null;},
          err => console.log(err)
        );
      }
    }
  }

  delete(id: number) {
    this.http.delete('http://localhost:8080/administrateur/' + id).subscribe(resp => this.load(),
      err => console.log(err));

  }
}
