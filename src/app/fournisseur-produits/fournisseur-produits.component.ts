import { Component, OnInit } from '@angular/core';
import {Produit} from '../fournisseur-produits/produit';
import {Unite} from '../fournisseur-produits/unite';
import {FournisseurProduitsHttpService} from '../fournisseur-produits-http.service';

@Component({
  selector: 'app-fournisseur-produits',
  templateUrl: './fournisseur-produits.component.html',
  styleUrls: ['./fournisseur-produits.component.css']
})
export class FournisseurProduitsComponent implements OnInit {

  produitSearch: string = null;
  produitForm: Produit = null;

  constructor(private fournisseurProduitsHttpService: FournisseurProduitsHttpService) {

  }

  ngOnInit() {
  }

}
