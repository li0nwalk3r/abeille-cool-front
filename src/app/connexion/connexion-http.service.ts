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

}
