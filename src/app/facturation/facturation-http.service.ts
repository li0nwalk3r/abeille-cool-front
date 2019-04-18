import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Facturation} from '../model/facturation';

@Injectable({
  providedIn: 'root'
})
export class FacturationHttpService {
  facturations: any;

  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
    this.http.get('http://localhost:8080/facturation')
      .subscribe(resp => {
          this.facturations = resp;
        },
        err => console.log(err));
  }

  findAll(): Array<Facturation> {
    return this.facturations;
  }

  findById(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/facturation/' + id);
  }

  save(facturation: Facturation) {
    if (facturation) {
      if (!facturation.id) {
        this.http.post('http://localhost:8080/facturation', facturation).subscribe(resp => {this.load(); facturation = null;},
          err => console.log(err));

      } else {
        this.http.put('http://localhost:8080/facturation/' + facturation.id, facturation).subscribe(resp => {this.load(); facturation = null;},
          err => console.log(err)
        );
      }
    }
  }

  delete(id: number) {
    this.http.delete('http://localhost:8080/facturation/' + id).subscribe(resp => this.load(),
      err => console.log(err));

  }
}
