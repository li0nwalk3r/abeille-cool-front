import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


import {Observable} from 'rxjs';
import {CommandeFournisseur} from "../model/commandeFournisseur";
import {Produit} from "../model/produit";


@Injectable({
  providedIn: 'root'
})
export class CommandeFournisseurHttpService {

  commandeFournisseur: any;

  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
    this.http.get('http://localhost:8080/commandeFournisseur')
      .subscribe(resp => {
          this.commandeFournisseur = resp;
        },
        err => console.log(err));
  }

  findAllProduitByFournisseur(): Observable<any> {
    return this.http.get('http://localhost:8080/produit/by-fournisseur');
  }


  save(commandefournisseur: CommandeFournisseur) {
    if (commandefournisseur) {
      console.log(commandefournisseur);
      if (!commandefournisseur.id) {
        this.http.post('http://localhost:8080/commandeFournisseur', commandefournisseur).
        subscribe(resp => {this.load(); commandefournisseur = null;
             },
          err => console.log(err));

        }
      }
    }

    edit(produit: Produit) {
    if (produit) {
      if (produit.id) {
        this.http.put('http://localhost:8080/produit/' + produit.id, produit).subscribe(resp => { produit = null; },
          err => console.log(err)
        );
      }
    }
  }

  findById(id: number): Observable<any> {
      return this.http.get('http://localhost:8080/produit/' + id);
  }

}




