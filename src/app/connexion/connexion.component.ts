import {Component, OnInit} from '@angular/core';
import {Utilisateur} from '../model/Utilisateur';
import {ConnexionHttpService} from './connexion-http.service';
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  temp: any;
  idUtilisateur: any = 0;
  erreurlogin: boolean = false;
  mailExist: any = false;
  notSameMail: boolean = true;
  mailverif: string = '';
  notSameMdp: boolean = true;
  mdpverif: string = '';
  utilisateurNouveau: Utilisateur = new Utilisateur();
  utilisateurEnregistre: Utilisateur = new Utilisateur();

  constructor(private connexionService: ConnexionHttpService, private router: Router) {
  }

  ngOnInit() {
    if (sessionStorage.getItem("type")) {
      this.router.navigate(['/index']);
    }
  }

  save() {

    this.connexionService.save(this.utilisateurNouveau).subscribe(resp => {
        this.utilisateurNouveau = new Utilisateur();
        this.temp=resp;
        this.utilisateurEnregistre=this.temp;
        this.login();
        this.router.navigate(['/index']);
      },
      err => console.log(err));
  }

  checkmail() {
    let pass = this.utilisateurNouveau.mail;
    let confirmPass = this.mailverif;
    if (pass === confirmPass) {
      this.notSameMail = false;
    } else {
      this.notSameMail = true;
    }
    return this.notSameMail;
  }

  checkmdp() {
    let pass = this.utilisateurNouveau.mdp;
    let confirmPass = this.mdpverif;
    if (pass === confirmPass) {
      this.notSameMdp = false;
    } else {
      this.notSameMdp = true;
    }
    return this.notSameMdp;
  }

  checkexistmail() {
    this.checkmail();
    this.connexionService.verif(this.utilisateurNouveau.mail).subscribe(resp => {
      this.mailExist = resp;
    }, err => console.log(err));
  }


  login() {
    if (this.utilisateurEnregistre.mail && this.utilisateurEnregistre.mdp) {
      this.connexionService.login(this.utilisateurEnregistre).subscribe(resp => {
        this.idUtilisateur = resp;
        console.log(this.idUtilisateur);
        if (this.idUtilisateur != 0) {
          this.connexionService.findId(this.idUtilisateur).subscribe(resp => {
            this.temp = resp;
            this.utilisateurEnregistre = this.temp;
            sessionStorage.setItem("id", this.utilisateurEnregistre.id.toString());
            sessionStorage.setItem("mail", this.utilisateurEnregistre.mail);
            sessionStorage.setItem("type", this.utilisateurEnregistre.type);
            this.erreurlogin = false;
            this.utilisateurEnregistre = new Utilisateur();
            this.idUtilisateur = 0;

            alert("connecté" + sessionStorage.getItem("id") + sessionStorage.getItem("mail") + sessionStorage.getItem("type"));
          }, err => console.log(err));
        } else {
          alert("non connecté");
          this.erreurlogin = true;
        }
      }, err => console.log());
    }
  }
}
