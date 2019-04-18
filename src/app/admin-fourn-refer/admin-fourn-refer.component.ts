import { Component, OnInit } from '@angular/core';
import {Produit} from "../model/produit";
import {FournisseurProduitsHttpService} from "../fournisseur-produits-http.service";

@Component({
  selector: 'app-admin-fourn-refer',
  templateUrl: './admin-fourn-refer.component.html',
  styleUrls: ['./admin-fourn-refer.component.css']
})
export class AdminFournReferComponent implements OnInit {

  produitSearch: string = null;
  produitForm: Produit = null;

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