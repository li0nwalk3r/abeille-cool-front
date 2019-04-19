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
  valid;
  temp: any;
  utilisateur: Utilisateur = new Utilisateur();
  mdpChange: boolean = false;
  mailExist: any = false;
  utilisateurTest: Utilisateur = new Utilisateur();
  mdpverif;
  ancienmdp;
  notSameMdp: boolean = true;
  erreurmdp: boolean = false;

  constructor(private fournisseurService: FournisseurHttpService) {
  }

  ngOnInit() {
    this.charge();
  }

  charge() {
    this.utilisateur.fournisseur = new Fournisseur();
    this.fournisseurService.findId(Number(sessionStorage.getItem('id'))).subscribe(resp => {
        this.temp = resp;
        this.utilisateur = this.temp;
        this.utilisateur.mdp="";
      }
      , err => console.log(err));
  }

  saveedit() {
    this.fournisseurService.saveedit(this.utilisateur).subscribe(resp => {
      this.temp = resp;
      this.utilisateur = this.temp;
      sessionStorage.setItem("mail", this.utilisateur.mail);
    }, err => console.log(err));
  }

  checkexistmail() {
    this.fournisseurService.verif(this.utilisateur.mail).subscribe(resp => {
      this.mailExist = resp;
    }, err => console.log(err));
  }

  add() {
    this.mdpChange = true;
  }

  checkmdp() {
    let pass = this.utilisateur.mdp;
    let confirmPass = this.mdpverif;
    if (pass === confirmPass) {
      this.notSameMdp = false;
    } else {
      this.notSameMdp = true;
    }
    return this.notSameMdp;
  }

  savemdp() {
    this.fournisseurService.findId(sessionStorage.getItem("id")).subscribe(resp => {
        this.temp = resp;
        this.utilisateurTest = this.temp;
        this.utilisateurTest.mdp=this.ancienmdp;
        this.fournisseurService.verifmdp(this.utilisateurTest).subscribe(resp => {
          this.valid = resp;
          if (this.valid) {
            this.erreurmdp = false;
            this.saveedit();
            this.mdpChange=false;
            this.utilisateur.mdp="";
            this.ancienmdp="";
            this.mdpverif="";
          } else {
            this.erreurmdp = true;
            this.utilisateur.mdp="";
            this.ancienmdp="";
            this.mdpverif="";
          }
        }, err => console.log(err))


      },

      err => console.log(err));

  }
}
