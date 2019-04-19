import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActualiteHttpService {

  actualite: any;

  constructor(private http: HttpClient) {
  }

  findByDate(): Observable<any> {
    return this.http.get('http://localhost:8080/actualite/by-date');
  }

  findByHorsDate(): Observable<any> {
    return this.http.get('http://localhost:8080/actualite/by-hors-date');
  }

}




