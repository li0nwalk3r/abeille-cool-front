import { Component, OnInit } from '@angular/core';
import {Actualite} from '../model/actualite';
import {ActualiteHttpService} from '../actualite-http.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  temp:any;
  actualites:Array<Actualite>=new Array<Actualite>();
  actualite : Actualite = new Actualite();

  constructor(private actualiteService: ActualiteHttpService ) {
  }

  ngOnInit() {
    this.list();
  }

  list() {
    this.actualiteService.findAll().subscribe(resp=>{
      this.temp=resp;
      this.actualites=this.temp;
    },err=>console.log(err));
  }

  listById(id:number) {
    this.actualiteService.findById(id).subscribe(resp=>{
      this.actualite = resp;
    },err=>console.log(err));
  }
}
