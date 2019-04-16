import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  actualiteSearch: string = null;

  constructor() {
  }

  ngOnInit() {
  }

  list(): Array<Actualite> {
    return this.actualiteService.findAll();
  }
}