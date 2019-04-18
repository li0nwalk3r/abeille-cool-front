import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Produit} from "./model/produit";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminFournReferService {
  produits: any;
  unites: any;

  constructor(private http: HttpClient) {
    this.load();
    this.loadUnite();
  }

  load() {
    this.http.get('http://localhost:8080/produit')
      .subscribe(resp => {
          this.produits = resp;
        },
        err => console.log(err));
  }

  loadUnite() {
    this.http.get('http://localhost:8080/unite')
      .subscribe(resp => {
          this.unites = resp;
        },
        err => console.log(err));
  }

  findAll(): Array<Produit> {
    return this.produits;
  }

  findAllUnite(): Array<object> {
    return this.unites;
  }

  findById(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/produit/' + id);
  }

  findByNom(nom: string) {
    this.http.get('http://localhost:8080/api/produit/by-nom/' + nom)
      .subscribe(resp => {
          this.produits = resp;
        },
        err => console.log(err));
  }


  save(produit: Produit) {
    if (produit) {
      if (!produit.id) {
        this.http.post('http://localhost:8080/produit', produit).subscribe(resp => {this.load(); produit = null; },
          err => console.log(err));

      } else {
        this.http.put('http://localhost:8080/produit/' + produit.id, produit).subscribe(resp => {this.load(); produit = null; },
          err => console.log(err)
        );
      }
    }
  }

  delete(id: number) {
    this.http.delete('http://localhost:8080/produit/' + id).subscribe(resp => this.load(),
      err => console.log(err));

  }
}
