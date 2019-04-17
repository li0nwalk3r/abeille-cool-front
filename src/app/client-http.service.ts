import { Injectable } from '@angular/core';
import {Client} from './model/client';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientHttpService {
  clients: any;

  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
    this.http.get('http://localhost:8080/client')
      .subscribe(resp => {
          this.clients = resp;
        },
        err => console.log(err));
  }

  findAll(): Array<Client> {
    return this.clients;
  }

  findById(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/client/' + id);
  }

  save(client: Client) {
    if (client) {
      if (!client.id) {
        this.http.post('http://localhost:8080/client', client).subscribe(resp => {this.load(); client = null;},
          err => console.log(err));

      } else {
        this.http.put('http://localhost:8080/client/' + client.id, client).subscribe(resp => {this.load(); client = null;},
          err => console.log(err)
        );
      }
    }
  }

  delete(id: number) {
    this.http.delete('http://localhost:8080/client/' + id).subscribe(resp => this.load(),
      err => console.log(err));

  }
}
