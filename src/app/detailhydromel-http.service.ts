import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailhydromelHttpService {

  constructor() { }

  findById(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/article/' + id);
  }

}
