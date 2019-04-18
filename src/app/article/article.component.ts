import { Component, OnInit} from '@angular/core';
import {ArticleHttpService} from './article-http.service';
import {Article} from '../model/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  user : boolean;

  constructor(private articleService: ArticleHttpService) {}

  ngOnInit(){
    if(sessionStorage.getItem("type")=="ADMINISTRATEUR"){
      this.user=true;
    }else{
      this.user=false;
    }
  }
  list(): Array<Article> {
    return this.articleService.findAll();
  }

}
