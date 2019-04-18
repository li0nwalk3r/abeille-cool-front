import { Component, OnInit } from '@angular/core';
import {Produit} from '../model/produit';
import {Unite} from '../model/unite';
import {FournisseurProduitsHttpService} from './fournisseur-produits-http.service';
import {CatProd} from "../model/categorie";
import {ProduitCatProd} from "../model/produitCatProd";

@Component({
  selector: 'app-fournisseur-produits',
  templateUrl: './fournisseur-produits.component.html',
  styleUrls: ['./fournisseur-produits.component.css']
})
export class FournisseurProduitsComponent implements OnInit {

  produitSearch: string = null;
  produitForm: Produit = null;
  catProdForm: CatProd = null;
  produitCategorieForm: ProduitCatProd = null;

  constructor(private fournisseurProduitsService: FournisseurProduitsHttpService) {

  }

  search() {
    if (this.produitSearch) {
      this.fournisseurProduitsService.findByNom(this.produitSearch);
    } else {
      this.fournisseurProduitsService.load();
    }
  }

  list(): Array<Produit> {
    return this.fournisseurProduitsService.findAll();
  }

  listUnite(): Array<object> {
    return this.fournisseurProduitsService.findAllUnite();
  }

  listCategorie(): Array<object> {
    return this.fournisseurProduitsService.findAllCategorie();
  }

  add() {
    this.produitForm = new Produit();
  }

  edit(id: number) {
    this.fournisseurProduitsService.findById(id).subscribe(resp => {this.produitForm = resp; });
  }

  save() {
    this.fournisseurProduitsService.save(this.produitForm);

    this.produitForm = null;
  }

  remove(id: number) {
    this.fournisseurProduitsService.delete(id);
  }

  cancel() {
    console.log(this.produitForm);
    this.produitForm = null;
  }

  ngOnInit() {
  }

}
