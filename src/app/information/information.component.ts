import { Component, OnInit } from '@angular/core';
import {Client} from '../model/client';
import {Coordonnee} from '../model/coordonnee';
import {ActivatedRoute} from '@angular/router';
import {ClientHttpService} from '../formulaire-commande-client/client-http.service';
import {CoordonneeHttpService} from '../formulaire-commande-client/coordonnee-http.service';
import {Utilisateur} from '../model/Utilisateur';
import {FournisseurHttpService} from '../fournisseur/fournisseur-http.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  temp:any;
  valid;
  client: Client = new Client();
  coordonnees : Array<Coordonnee> = null;
  coordonneeForm: Coordonnee = new Coordonnee();
  idCoor: number;
  utilisateur: Utilisateur = new Utilisateur();
  ajouter: boolean = true;
  init: boolean = true;
  mdpChange: boolean = false;
  mailExist: any = false;
  utilisateurTest: Utilisateur = new Utilisateur();
  mdpverif;
  ancienmdp;
  notSameMdp: boolean = true;
  erreurmdp: boolean = false;

  constructor(private route: ActivatedRoute, private utilisateurHttpService: FournisseurHttpService, private coordonneeHttpService: CoordonneeHttpService, private clientHttpService: ClientHttpService) { }

  ngOnInit() {
    this.clientHttpService.findById(Number(sessionStorage.getItem('type_id'))).subscribe((resp => {this.client = resp;}));
    this.coordonneeHttpService.findByClientId(Number(sessionStorage.getItem('type_id'))).subscribe((resp => {this.coordonnees = resp;}))
    this.utilisateurHttpService.findId(Number(sessionStorage.getItem('id'))).subscribe((resp => {this.temp=resp;this.utilisateur = this.temp;}));
  }


  supprimerCoordonnee(id){
    this.coordonneeHttpService.delete(id);
    this.coordonneeForm = new Coordonnee();
    this.ajouter = true;
  }

  modifier(){
    this.clientHttpService.save(this.client);
    this.utilisateur.client = this.client;
    this.utilisateurHttpService.saveedit(this.utilisateur).subscribe(resp => {
      this.temp = resp;
      this.utilisateur = this.temp;
      sessionStorage.setItem("mail", this.utilisateur.mail);
    }, err => console.log(err));
    this.coordonneeForm.client = this.client;
    this.coordonneeHttpService.save(this.coordonneeForm);
  }
  modifierCoordonnee(){
    this.coordonneeForm.client = this.client;
    this.coordonneeHttpService.save(this.coordonneeForm);
    this.ajouter=false;
  };
  ajouterCoordonnee(){
    this.coordonneeForm = new Coordonnee();
    this.ajouter = true;
  };

  editCoordonnee() {
    this.coordonneeHttpService.findById(this.idCoor).subscribe(resp => {this.coordonneeForm = resp})
    this.ajouter = false;
    this.init = false;
  }

  checkexistmail() {
    this.utilisateurHttpService.verif(this.utilisateur.mail).subscribe(resp => {
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

  saveedit() {
    this.utilisateurHttpService.saveedit(this.utilisateur).subscribe(resp => {
      this.temp = resp;
      this.utilisateur = this.temp;
      sessionStorage.setItem("mail", this.utilisateur.mail);
    }, err => console.log(err));
  }

  cancel(){
    this.mdpChange = false;
  }
  savemdp() {
    this.utilisateurHttpService.findId(sessionStorage.getItem("id")).subscribe(resp => {
        this.temp = resp;
        this.utilisateurTest = this.temp;
        this.utilisateurTest.mdp=this.ancienmdp;
        this.utilisateurHttpService.verifmdp(this.utilisateurTest).subscribe(resp => {
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
