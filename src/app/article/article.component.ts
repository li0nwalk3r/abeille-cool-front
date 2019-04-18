import { Component, OnInit, Input } from '@angular/core';
import {ArticleHttpService} from './article-http.service';
import {Article} from '../model/article';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  user : boolean;

  constructor(private articleService: ArticleHttpService) {

  constructor(private articleService: ArticleHttpService, private next:ActivatedRoute) {

  }

  ngOnInit() {
    // if(sessionStorage.getItem("type")=="ADMINISTRATEUR"){
    //   this.user=true;
    // }else{
    //   this.user=false;
    // }
    this.user=true;
  }
  list(): Array<Article> {
    return this.articleService.findAll();
  }

}
