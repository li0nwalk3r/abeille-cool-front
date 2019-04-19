import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CommandeClient} from '../model/commande-client';

@Injectable({
  providedIn: 'root'
})
export class CommandeClientHttpService {
  commandeClients: any;

  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
    this.http.get('http://localhost:8080/commandeClient')
      .subscribe(resp => {
          this.commandeClients = resp;
        },
        err => console.log(err));
  }

  findAll(): Array<CommandeClient> {
    return this.commandeClients;
  }

  findById(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/commandeClient/' + id);
  }
  
  findByFactureId(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/commandeClient/by-facture/' + id);
  }

  save(commandeClient: CommandeClient) {
    if (commandeClient) {
      if (!commandeClient.id) {
        this.http.post('http://localhost:8080/commandeClient', commandeClient).subscribe(resp => {this.load(); commandeClient = null;},
          err => console.log(err));

      } else {
        this.http.put('http://localhost:8080/commandeClient/' + commandeClient.id, commandeClient).subscribe(resp => {this.load(); commandeClient = null;},
          err => console.log(err)
        );
      }
    }
  }

  delete(id: number) {
    this.http.delete('http://localhost:8080/commandeClient/' + id).subscribe(resp => this.load(),
      err => console.log(err));

  }
  findPanier(id: number): Observable<any>{
    return this.http.get('http://localhost:8080/commandeClient/by-client/'+id);
  }

  saveSubscribeOutside(commandeClient: CommandeClient): Observable<any> {
    if (commandeClient) {
      if (!commandeClient.id) {
        return this.http.post('http://localhost:8080/commandeClient', commandeClient);//.subscribe(resp => {this.load(); commandeClient = null;},
         // err => console.log(err));

      } else {
       return this.http.put('http://localhost:8080/commandeClient/' + commandeClient.id, commandeClient);//.subscribe(resp => {this.load(); commandeClient = null;},
          //err => console.log(err)
      }
    }
  }


}
