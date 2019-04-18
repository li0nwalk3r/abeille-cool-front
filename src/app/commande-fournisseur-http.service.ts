import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Fournisseur} from './fournisseur-produits/fournisseur';
import {Produit} from './fournisseur-produits/produit';
import {Observable} from 'rxjs';
import {CommandeFournisseur} from "./commande-fournisseur/commandeFournisseur";

@Injectable({
  providedIn: 'root'
})
export class CommandeFournisseurHttpService {

produits: any;

  constructor(private http: HttpClient) {
  }

  findAllProduitByFournisseur(): Observable<any> {
    return this.http.get('http://localhost:8080/produit/by-fournisseur');
   }



  // save(commandefournisseur: CommandeFournisseur) {
  //   if (commandefournisseur) {
  //     if (!commandefournisseur.id) {
  //       this.http.post('http://localhost:8080/comandeFournisseur', ).subscribe(resp => {this.load(); eleve = null;},
  //         err => console.log(err));
  //
  //     } else {
  //       this.http.put('http://localhost:8080/api/eleve/' + eleve.id, eleve).subscribe(resp => {this.load(); eleve = null;},
  //         err => console.log(err)
  //       );
  //     }
  //   }
  // }


}




