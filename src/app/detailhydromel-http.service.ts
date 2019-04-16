import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailhydromelHttpService {

  constructor(private http: HttpClient) {
  }

  findById(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/article/' + id);
  }
}
