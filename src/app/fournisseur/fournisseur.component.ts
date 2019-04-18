import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../model/Utilisateur";
import {FournisseurHttpService} from "./fournisseur-http.service";
import {Fournisseur} from "../model/fournisseur";
import {Produit} from "../model/produit";

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  temp: any;
  utilisateur: Utilisateur = new Utilisateur();
  mdpChange:boolean=false;
  mailExist: any = false;

  constructor(private fournisseurService: FournisseurHttpService) {
  }

  ngOnInit() {
    this.charge();
  }

  charge() {
    this.utilisateur.fournisseur=new Fournisseur();
    this.fournisseurService.findId(Number(sessionStorage.getItem('id'))).subscribe(resp => {
        this.temp = resp;
        this.utilisateur = this.temp;
      }
      , err => console.log(err));
  }

  saveedit(){
    this.fournisseurService.saveedit(this.utilisateur).subscribe(resp=>{
      this.temp = resp;
      this.utilisateur = this.temp;
    }, err=>console.log(err));
  }

  checkexistmail() {
    this.fournisseurService.verif(this.utilisateur.mail).subscribe(resp => {
      this.mailExist = resp;
    }, err => console.log(err));
  }

  add() {
    this.mdpChange=true;
  }
}
