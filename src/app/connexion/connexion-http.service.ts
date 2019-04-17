import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Utilisateur} from '../model/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class ConnexionHttpService {

  constructor(private http: HttpClient) {
  }

  save(utilisateur: Utilisateur) {
    if (utilisateur) {
      return this.http.post('http://localhost:8080/utilisateur', utilisateur);
    }
  }

  findId(id){
    return this.http.get('http://localhost:8080/utilisateur/'+id);
  }

  verif(existmail){
    if(existmail){
      return this.http.post('http://localhost:8080/utilisateur/existmail', existmail);
    }
  }

  login(utilisateur){
    if(utilisateur){
      return this.http.post('http://localhost:8080/utilisateur/login', utilisateur);
    }
  }

}
