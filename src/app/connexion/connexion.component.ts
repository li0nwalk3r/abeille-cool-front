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
  inscription: boolean = false;
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
      this.inscription = false;
      this.router.navigate(['']);
    }
  }

  save() {

    this.connexionService.save(this.utilisateurNouveau).subscribe(resp => {
        this.utilisateurNouveau = new Utilisateur();
        this.temp = resp;
        this.utilisateurEnregistre = this.temp;
        this.inscription = true;
        this.login();
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
        if (this.idUtilisateur != 0) {
          this.connexionService.findId(this.idUtilisateur).subscribe(resp => {
            this.temp = resp;
            this.utilisateurEnregistre = this.temp;
            sessionStorage.setItem("id", this.utilisateurEnregistre.id.toString());
            sessionStorage.setItem("mail", this.utilisateurEnregistre.mail);
            sessionStorage.setItem("type", this.utilisateurEnregistre.type);
            sessionStorage.setItem("connect", "true");
            if (sessionStorage.getItem("type") == "CLIENT") {
              sessionStorage.setItem("type_id", this.utilisateurEnregistre.client.id.toString());
            } else if (sessionStorage.getItem("type") == "FOURNISSEUR") {
              sessionStorage.setItem("type_id", this.utilisateurEnregistre.fournisseur.id.toString());
            } else if (sessionStorage.getItem("type") == "ADMINISTRATEUR") {
              sessionStorage.setItem("type_id", this.utilisateurEnregistre.administrateur.id.toString());
            }
            this.erreurlogin = false;
            this.utilisateurEnregistre = new Utilisateur();
            this.idUtilisateur = 0;
            if (this.inscription) {
              if (sessionStorage.getItem("type") == "CLIENT") {
                this.router.navigate(['client']);
              } else if (sessionStorage.getItem("type") == "FOURNISSEUR") {
                this.router.navigate(['fournisseur']);
              }else{
                this.router.navigate(['']);
              }
            } else {
              this.router.navigate(['']);
            }
          }, err => console.log(err));
        } else {

          this.erreurlogin = true;
        }
      }, err => console.log());
    }
  }
}
