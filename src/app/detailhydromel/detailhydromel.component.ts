import {Component, OnInit} from '@angular/core';
import {DetailhydromelHttpService} from './detailhydromel-http.service';
import {Article} from '../model/article';
import {ActivatedRoute} from '@angular/router';
import {Avis} from '../model/avis';

@Component({
  selector: 'app-detailhydromel',
  templateUrl: './detailhydromel.component.html',
  styleUrls: ['./detailhydromel.component.css']
})
export class DetailhydromelComponent implements OnInit {
  hydromel: Article = null;
  qte:number;
  listeAvis:Array<Avis> = new Array<Avis>();

  constructor(private route: ActivatedRoute, private detailHydromelService: DetailhydromelHttpService) {
    this.route.params.subscribe(parameters => this.find(parameters.id));
  }

  ngOnInit() {
  }

  find(id: number) {
    this.detailHydromelService.findById(id).subscribe(resp => {
      this.hydromel = resp;
      this.findAvis(this.hydromel);
    });
  }

  createLigne(article: Article, qte: number) {

    this.detailHydromelService.create(article, qte).subscribe();
  }

  findAvis(article: Article){
    console.log("findAvis()");
     this.detailHydromelService.findAvis(article).subscribe( resp=>{
       console.log("findAvis() in subscribe");
       this.listeAvis = resp;
     })
  }
}
