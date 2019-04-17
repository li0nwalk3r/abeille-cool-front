import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LigneCommande} from './model/ligne-commande';

@Injectable({
  providedIn: 'root'
})
export class MonPanierHttpService {
  lignesCommande: any;

  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
    this.http.get('http://localhost:8080/ligneCommande')
      .subscribe(resp => {
          this.lignesCommande = resp;
        },
        err => console.log(err));
  }

  findAll(): Array<LigneCommande> {
    return this.lignesCommande;
  }

  findById(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/ligneCommande/' + id);
  }

  delete(id: number) {
    this.http.delete('http://localhost:8080/ligneCommande/' + id).subscribe(resp => this.load(),
      err => console.log(err));
  }
}
