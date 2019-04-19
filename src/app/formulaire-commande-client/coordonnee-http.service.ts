import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Coordonnee} from '../model/coordonnee';
import {Client} from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class CoordonneeHttpService {
  coordonnees: any;

  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
    this.http.get('http://localhost:8080/coordonnee')
      .subscribe(resp => {
          this.coordonnees = resp;
        },
        err => console.log(err));
  }

  findAll(): Array<Coordonnee> {
    return this.coordonnees;
  }

  findById(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/coordonnee/' + id);
  }

  findByClientId(id:number) : Observable<any> {
    return this.http.get('http://localhost:8080/coordonnee/by-client/'+id);
  }

  savecoordonnee(coordonnee: Coordonnee){
    return this.http.post('http://localhost:8080/coordonnee', coordonnee);
  }

  deletecoordonnee(id: number){
    this.http.delete('http://localhost:8080/coordonnee/' + id);
  }

  save(coordonnee: Coordonnee) {
    if (coordonnee) {
      if (!coordonnee.id) {
        this.http.post('http://localhost:8080/coordonnee', coordonnee).subscribe(resp => {this.load(); coordonnee = null;},
          err => console.log(err));

      } else {
        this.http.put('http://localhost:8080/coordonnee/' + coordonnee.id, coordonnee).subscribe(resp => {this.load(); coordonnee = null;},
          err => console.log(err)
        );
      }
    }
  }

  delete(id: number) {
    this.http.delete('http://localhost:8080/coordonnee/' + id).subscribe(resp => this.load(),
      err => console.log(err));

  }
}
