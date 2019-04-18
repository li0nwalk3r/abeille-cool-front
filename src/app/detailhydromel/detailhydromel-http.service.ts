import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from '../model/article';
import {LigneCommande} from '../model/ligneCommande';

@Injectable({
  providedIn: 'root'
})
export class DetailhydromelHttpService {

  constructor(private http: HttpClient) {
  }

  findById(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/article/' + id);
  }

  create(article: Article, qte:number): Observable<any>{
    return this.http.post('http://localhost:8080/ligneCommande',new LigneCommande(qte, article));
  }

  findAvis(article: Article): Observable<any>{
    console.log("findAvis() in service");
    return this.http.get('http://localhost:8080/avis/article/'+article.id);
  }
}
