import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LigneCommande} from './model/ligne-commande';


@Injectable({
  providedIn: 'root'
})
export class LigneCommandeHttpService {
  ligneCommandes: any;

  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
    this.http.get('http://localhost:8080/ligneCommande')
      .subscribe(resp => {
          this.ligneCommandes = resp;
        },
        err => console.log(err));
  }

  findAll(): Array<LigneCommande> {
    return this.ligneCommandes;
  }

  findById(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/ligneCommande/' + id);
  }

  findByCommandeClient(id: number) : Observable<any> {
    return this.http.get('http://localhost:8080/ligneCommande/by-commande-client-id/' + id)
  }

  save(ligneCommande: LigneCommande) {
    if (ligneCommande) {
      if (!ligneCommande.id) {
        this.http.post('http://localhost:8080/ligneCommande', ligneCommande).subscribe(resp => {this.load(); ligneCommande = null;},
          err => console.log(err));

      } else {
        this.http.put('http://localhost:8080/ligneCommande/' + ligneCommande.id, ligneCommande).subscribe(resp => {this.load(); ligneCommande = null;},
          err => console.log(err)
        );
      }
    }
  }

  delete(id: number) {
    this.http.delete('http://localhost:8080/cligneCommande/' + id).subscribe(resp => this.load(),
      err => console.log(err));

  }
}
