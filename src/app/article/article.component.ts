import { Component, OnInit, Input } from '@angular/core';
import {ArticleHttpService} from './article-http.service';
import {Article} from '../model/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {



  constructor(private articleService: ArticleHttpService) {

  }

  ngOnInit() {

  }
  list(): Array<Article> {
    return this.articleService.findAll();
  }

}
