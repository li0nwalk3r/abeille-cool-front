import {Component, Input, OnInit} from '@angular/core';

import {CommandeFournisseurHttpService} from './commande-fournisseur-http.service';

import {HttpClient} from '@angular/common/http';
import {Subscription} from 'rxjs';
import {Produit} from "../model/produit";

@Component({
  selector: 'commandeFournisseur',
  templateUrl: './commande-fournisseur.component.html',
  styleUrls: ['./commande-fournisseur.component.css']
})
export class CommandeFournisseurComponent implements OnInit {

  produits: Array<Produit> = new Array<Produit>();
  valide: boolean = false;
  TauxTva: number = 20 / 100;
  prixTotalHT: number;

  constructor(private commandeFournisseurService: CommandeFournisseurHttpService) {
  }

  ngOnInit() {
    this.listProduitByFournisseur();
  }

  listProduitByFournisseur() {
    this.commandeFournisseurService.findAllProduitByFournisseur().subscribe(resp => {
        this.produits = resp;
      },
      err => console.log(err));
  }

  valider() {
    this.valide = true;
  }


  calcul() {
      for (const produit of this.produits) {
        if (produit.qteDemande > 0 ) {
          this.prixTotalHT = (produit.prixUnitaireHT * produit.qteDemande);
          produit.prixTotal = (this.prixTotalHT * this.TauxTva) + this.prixTotalHT;
        }
      }
    }

  // save() {
  //   this.commandeFournisseurService.save(this.);
  //
  //   this. = null;
  // }

  // save(eleve: Eleve) {
  //   if (eleve) {
  //     if (!eleve.id) {
  //       this.http.post('http://localhost:8080/api/eleve', eleve).subscribe(resp => {this.load(); eleve = null;},
  //         err => console.log(err));
  //
  //     } else {
  //       this.http.put('http://localhost:8080/api/eleve/' + eleve.id, eleve).subscribe(resp => {this.load(); eleve = null;},
  //         err => console.log(err)
  //       );
  //     }
  //   }
  // }
  //


}
