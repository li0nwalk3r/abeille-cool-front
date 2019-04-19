import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommandeFournisseur} from '../model/commandeFournisseur';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueCommFournHttpService {

  historiqueCommandesFournisseurs: Array<CommandeFournisseur> = new Array<CommandeFournisseur>();
  commandesFournisseurs: any;

  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
    this.http.get('http://localhost:8080/commandeFournisseur').subscribe(resp => {
      this.commandesFournisseurs = resp;
    },
      err => console.log(err));
  }

  findAll(): Array<CommandeFournisseur> {
    return this.commandesFournisseurs;
  }

  findById(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/commandeFournisseur/' + id);
  }
}
