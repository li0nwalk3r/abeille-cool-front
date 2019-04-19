import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-btn-connect',
  templateUrl: './btn-connect.component.html',
  styleUrls: ['./btn-connect.component.css']
})
export class BtnConnectComponent implements OnInit {

  texte="Se connecter";


  constructor(private router:Router) { }

  ngOnInit() {
    this.chargement();
  }

  chargement(){
    if (sessionStorage.getItem('type')) {
      sessionStorage.setItem("connect", "true");
      this.texte="Mon Compte";
    } else {
      sessionStorage.setItem("connect", "false");
      this.texte="Se connecter";
    }
  }

  readSessionStorage(key: string) {
      return sessionStorage.getItem(key);
  }

  fournisseur(){
    this.router.navigate(['administrateur/fournisseurs/references']);
  }

  infoFour(){
    this.router.navigate(['fournisseur']);
  }

  fourProduit(){
    this.router.navigate(['fournisseur/mes-produits']);
  }

  deconnecter(){
    sessionStorage.clear();
    this.chargement();
    this.router.navigate(['']);
  }

  connecter(){
    this.router.navigate(['connexion']);
  }


  information(){this.router.navigate(['information-client']);}
}
