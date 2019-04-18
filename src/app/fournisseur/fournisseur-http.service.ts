import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FournisseurHttpService {

  constructor(private http: HttpClient) { }

  findId(id){
    return this.http.get('http://localhost:8080/utilisateur/'+id);
  }

  saveedit(utilisateur){
    return this.http.put('http://localhost:8080/utilisateur/'+utilisateur.id, utilisateur);
  }

  verif(existmail){
    if(existmail){
      return this.http.post('http://localhost:8080/utilisateur/existmail', existmail);
    }
  }
}
