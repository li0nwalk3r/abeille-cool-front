import {Component, OnInit} from '@angular/core';
import {MonPanierHttpService} from './mon-panier-http.service';
import {LigneCommande} from '../model/ligne-commande';
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-mon-panier',
  templateUrl: './mon-panier.component.html',
  styleUrls: ['./mon-panier.component.css']
})
export class MonPanierComponent implements OnInit {
  lignesCommande: Array<LigneCommande>;
  paramId: number;


  constructor(private route: ActivatedRoute, private monPanierService: MonPanierHttpService) {
    this.route.params.subscribe(param => {
      this.paramId = param.id;

      this.listByCommandeClient(this.paramId);
    });
  }

  ngOnInit() {
  }

  list(): Array<LigneCommande> {
    return this.monPanierService.findAll();
  }

  listByCommandeClient(paramId: number) {
    this.monPanierService.findAllByCommandeClient(paramId).subscribe(
      resp => this.lignesCommande = resp);
  }

  remove(id: number) {
    this.monPanierService.delete(id, this.paramId);
  }
}
