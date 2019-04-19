import {Component, Input, OnInit} from '@angular/core';

import {CommandeFournisseurHttpService} from './commande-fournisseur-http.service';

import {HttpClient} from '@angular/common/http';
import {Subscription} from 'rxjs';
import {Produit} from '../model/produit';
import {CommandeFournisseur} from '../model/commandeFournisseur';
import {Administrateur} from '../model/administrateur';
import {Fournisseur} from "../model/fournisseur";

@Component({
  selector: 'commandeFournisseur',
  templateUrl: './commande-fournisseur.component.html',
  styleUrls: ['./commande-fournisseur.component.css']
})
export class CommandeFournisseurComponent implements OnInit {

  produits: Array<Produit> = new Array<Produit>();
  valide = false;
  TauxTva: number = 20 / 100;
  prixTotalHT: number;
  erreur = false;
  commandeFournisseur: CommandeFournisseur = new CommandeFournisseur();
  produit: Produit = new Produit();


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

  calcul() {
    for (const produit of this.produits) {
      if (produit.qteDemande > 0) {
        this.prixTotalHT = (produit.prixUnitaireHT * produit.qteDemande);
        produit.prixTotal = (this.prixTotalHT * this.TauxTva) + this.prixTotalHT;
      }
    }
  }

  save(qte, prix, id) {
    for (const produit of this.produits) {
      if (produit.qteDemande <= produit.qte) {
        this.valide = true;
        this.erreur = false;
        this.commandeFournisseur.date = new Date();
        this.commandeFournisseur.tauxTVA = 20;
        this.commandeFournisseur.qte = qte;
        this.commandeFournisseur.prixTotal = prix;
        this.commandeFournisseur.produit = new Produit();
        this.commandeFournisseur.produit.id = id;
        this.commandeFournisseur.administrateur = new Administrateur();
        this.commandeFournisseur.administrateur.id = Number(sessionStorage.getItem('type_id'));
        this.commandeFournisseurService.save(this.commandeFournisseur);
        this.commandeFournisseur.produit.qte = produit.qte - produit.qteDemande;
        this.commandeFournisseurService.findById(id).subscribe(resp => {
          this.produit = resp;
          console.log(this.produit.nom);
          this.produit.qte = this.commandeFournisseur.produit.qte;
          console.log(this.produit.fournisseur.id);
          this.commandeFournisseurService.edit(this.produit);
        }, err => {
          console.log(err);
        });

      } else if (produit.qteDemande >= produit.qte) {
        this.valide = false;
        this.erreur = true;
      }
    }
  }


}
