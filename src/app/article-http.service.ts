import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from './model/article';

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

  findAll(): Array<Article> {
    return this.articles;
  }

}
