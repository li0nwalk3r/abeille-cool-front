import { Component, OnInit } from '@angular/core';
import {ArticleHttpService} from '../article-http.service';
import {ActivatedRoute} from '@angular/router';
import {Coordonnee} from '../model/coordonnee';
import {Article} from '../model/article';

@Component({
  selector: 'app-formulaire-article',
  templateUrl: './formulaire-article.component.html',
  styleUrls: ['./formulaire-article.component.css']
})
export class FormulaireArticleComponent implements OnInit {
articleForm : Article;
articleId : number;

  constructor(private articleService : ArticleHttpService, private route: ActivatedRoute,) {
    this.route.params.subscribe(param => {
      this.articleId = param.id;},this.articleId = null);
    if (this.articleId){
      articleService.findById(this.articleId).subscribe(resp => this.articleForm=resp);
    }else {
      this.articleForm=new Article();
    }
  }

  ngOnInit() {
  }

  save() {
    this.articleService.save(this.articleForm);

    this.articleForm=null;
  }
}
