import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LigneCommande} from './model/ligne-commande';
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class MonPanierHttpService {

  constructor(private http: HttpClient) {

  }



  findAllByCommandeClient(paramId: number): Observable<any> {
    return this.http.get('http://localhost:8080/ligneCommande/by-commande-client-id/' + paramId);
  }

  findAll(): Array<LigneCommande> {
    return ;
  }


  findById(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/ligneCommande/' + id);
  }

  delete(id: number, paramId: number) {
    this.http.delete('http://localhost:8080/ligneCommande/' + id).subscribe(resp => this.findAllByCommandeClient(paramId),
      err => console.log(err));
  }
}
