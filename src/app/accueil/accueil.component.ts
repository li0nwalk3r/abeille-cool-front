import {Component, OnInit} from '@angular/core';
import {Actualite} from '../model/actualite';
import {ActualiteHttpService} from './actualite-http.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  actualites: Array<Actualite> = new Array<Actualite>();
  actualite: Actualite = new Actualite();

  constructor(private actualiteService: ActualiteHttpService) {
  }

  ngOnInit() {
    this.findByDate();
    this.findByHorsDate();
  }

  findByHorsDate() {
    this.actualiteService.findByHorsDate().subscribe(resp => {
      this.actualites = resp; // là on met la réponse dans actualites et on peut boucler directement sur actualites dans le html
      return resp; // là on met la réponse dans la liste et on peut boucler dans la liste au niveau html
    }, err => console.log(err));
  }

  findByDate() {
    this.actualiteService.findByDate().subscribe(resp => {
      this.actualite = resp;
    }, err => console.log(err));
  }
}
