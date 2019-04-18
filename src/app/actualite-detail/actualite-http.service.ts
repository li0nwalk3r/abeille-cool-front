import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActualiteHttpService {

  actualite : any;
  constructor(private http: HttpClient) {

  }

  findAll() : Observable<any> {
    return this.http.get('http://localhost:8080/actualite');
  }

  findById(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/actualite' + id);
  }

}
