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



  constructor(private articleService: ArticleHttpService, private next:ActivatedRoute) {

  }

  ngOnInit() {
this.next.params.subscribe(resp=>{console.log(resp)});
  }
  list(): Array<Article> {
    return this.articleService.findAll();
  }

}
