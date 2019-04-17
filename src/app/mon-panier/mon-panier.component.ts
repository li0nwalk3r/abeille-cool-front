import {Component, OnInit} from '@angular/core';
import {MonPanierHttpService} from '../mon-panier-http.service';
import {LigneCommande} from '../model/ligne-commande';

@Component({
  selector: 'app-mon-panier',
  templateUrl: './mon-panier.component.html',
  styleUrls: ['./mon-panier.component.css']
})
export class MonPanierComponent implements OnInit {

  // monPanierSearch: string = null;

  constructor(private monPanierService: MonPanierHttpService) {
  }

  ngOnInit() {
  }

  // search() {
  //   if (this.monPanierSearch) {
  //     this.monPanierService.findByNom(this.monPanierSearch);
  //   } else {
  //     this.monPanierService.load();
  //   }
  // }

  list(): Array<LigneCommande> {
    return this.monPanierService.findAll();
  }

  remove(id: number) {
    this.monPanierService.delete(id);
  }

}
