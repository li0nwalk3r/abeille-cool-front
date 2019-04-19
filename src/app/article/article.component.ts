import {Component, OnInit} from '@angular/core';
import {ArticleHttpService} from './article-http.service';
import {Article} from '../model/article';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  user : boolean;
  typeHydromel: string = null;
  articleSearch: string = null;
  hydromelForm: Array<Article>;

  constructor(private articleService: ArticleHttpService) {}

  constructor(private articleService: ArticleHttpService, private next: ActivatedRoute) {
    this.next.params.subscribe(resp => {
      console.log(resp.type);
      this.typeHydromel = resp.type;
      if (this.typeHydromel) {
        this.articleService.findByTypeHydromel(this.typeHydromel.toString()).subscribe(resp => {
          this.hydromelForm = resp;
        }, err => console.log(err));
      } else {
        this.list();
      }
    }, this.typeHydromel = null);

  ngOnInit(){
    if(sessionStorage.getItem("type")=="ADMINISTRATEUR"){
      this.user=true;
    }else{
      this.user=false;
    }
  }


  ngOnInit() {

  }

  list() {
    this.articleService.findAll().subscribe(resp => {
      this.hydromelForm = resp;
    }, err => console.log(err));
  }

  search() {
    if (this.articleSearch) {
      this.articleService.findByNom(this.articleSearch).subscribe(resp => {
        this.hydromelForm = resp;
      }, err => console.log(err));
    }
  }


  // this.next.params.subscribe(resp=>{
  //
  // },err=>console.log(err))
}
