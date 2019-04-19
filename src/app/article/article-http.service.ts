import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Article} from '../model/article';
import {EnumValue} from '@angular/compiler-cli/src/ngtsc/metadata';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleHttpService {

  articles: any;


  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
    this.http.get('http://localhost:8080/article')
      .subscribe(resp => {
          this.articles = resp;
        },
        err => console.log(err));
  }

  findAll():Observable<any> {
    return this.http.get('http://localhost:8080/article');
  }

  findByNom(nom: string) : Observable<any> {
    return this.http.get('http://localhost:8080/article/by-nom/' + nom)
  }

  findByTypeHydromel(typeHydromel: string) : Observable<any>{
    return this.http.get('http://localhost:8080/article/by-typeHydromel/' + typeHydromel);
  }
}
