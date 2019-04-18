import { Component, OnInit } from '@angular/core';
import {Produit} from "../model/produit";
import {FournisseurProduitsHttpService} from "../fournisseur-produits/fournisseur-produits-http.service";
import {Router} from "@angular/router";
import {AdminFournReferService} from "./admin-fourn-refer.service";

@Component({
  selector: 'app-admin-fourn-refer',
  templateUrl: './admin-fourn-refer.component.html',
  styleUrls: ['./admin-fourn-refer.component.css']
})
export class AdminFournReferComponent implements OnInit {

  // produitSearch: string = null;
  produitForm: Produit = null;
  produits: Array<Produit> = new Array<Produit>();

  constructor(private adminFournReferService: AdminFournReferService, private router: Router) {

  }

  commander() {
    this.router.navigate(['commandeFournisseur']);
  }

  // search() {
  //   if (this.produitSearch) {
  //     this.adminFournReferService.findByNom(this.produitSearch);
  //   } else {
  //     this.adminFournReferService.load();
  //   }
  // }

  list(): Array<Produit> {
    return this.adminFournReferService.findAll();
  }
 /* save() {
    this.adminFournReferService.save(this.produitForm);

    this.produitForm = null;
  }*/

  listProduitByFournisseur() {
    this.adminFournReferService.findAllProduitByFournisseur().subscribe(resp => {
        this.produits = resp;
      },
      err => console.log(err));
  }

  ngOnInit() {
    this.listProduitByFournisseur();
  }

}
