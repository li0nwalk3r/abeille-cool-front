import { Component, OnInit } from '@angular/core';
import {Client} from '../model/client';
import {Coordonnee} from '../model/coordonnee';
import {ActivatedRoute} from '@angular/router';
import {ClientHttpService} from '../formulaire-commande-client/client-http.service';
import {ConnexionHttpService} from '../connexion/connexion-http.service';
import {CoordonneeHttpService} from '../formulaire-commande-client/coordonnee-http.service';
import {Utilisateur} from '../model/Utilisateur';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  temp:any;
  client: Client = new Client();
  coordonnees : Array<Coordonnee> = null;
  coordonneeForm: Coordonnee = new Coordonnee();
  idCoor: number;
  utilisateur: Utilisateur = new Utilisateur();
  ajouter: boolean = true;
  init: boolean = true;
  constructor(private route: ActivatedRoute, private utilisateurHttpService: ConnexionHttpService, private coordonneeHttpService: CoordonneeHttpService, private clientHttpService: ClientHttpService) { }

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

    this.utilisateurHttpService.save(this.utilisateur);
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

}
