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
  notSameMail: boolean = true;
  mailverif: string = '';
  notSameMdp: boolean = true;
  mdpverif: string = '';
  utilisateurNouveau: Utilisateur = new Utilisateur();
  utilisateurEnregistre: Utilisateur = new Utilisateur();

  constructor(private connexionService: ConnexionHttpService, private router: Router) {
  }

  ngOnInit() {
  }

  save() {

    this.connexionService.save(this.utilisateurNouveau).subscribe(resp => {
        this.utilisateurNouveau = new Utilisateur();
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

}
