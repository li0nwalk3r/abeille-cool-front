import { Component, OnInit } from '@angular/core';
import {ClientHttpService} from './client-http.service';
import {CoordonneeHttpService} from './coordonnee-http.service';
import {Client} from '../model/client';
import {Coordonnee} from '../model/coordonnee';
import {FacturationHttpService} from "../facturation/facturation-http.service";
import {Facturation} from "../model/facturation";
import {CommandeClient} from "../model/commande-client";
import {CommandeClientHttpService} from "./commande-client-http.service";
import {logger} from "codelyzer/util/logger";



@Component({
  selector: 'app-formulaire-commande-client',
  templateUrl: './formulaire-commande-client.component.html',
  styleUrls: ['./formulaire-commande-client.component.css']
})
export class FormulaireCommandeClientComponent implements OnInit {
  temp:any;
  idCoor: number;
  idClient: number;
  clientForm: Client = null;
  excli : Client;
  excoords : Array<Coordonnee>;
  coordonneeForm : Coordonnee = new Coordonnee();
  facturation : Facturation= new Facturation();
  commande:CommandeClient=new CommandeClient();

  constructor(private clientService: ClientHttpService, private coordonneeService: CoordonneeHttpService, private facturationHttpService:FacturationHttpService, private commandeHttpService:CommandeClientHttpService) {
    if(sessionStorage.getItem("type")=="CLIENT"){
      this.idClient=Number(sessionStorage.getItem("type_id"));
    }
    this.clientService.findById(this.idClient).subscribe(resp => {this.excli=resp},
      this.excli=null);
    this.coordonneeService.findByClientId(this.idClient).subscribe(resp => {this.excoords=resp},
      this.excoords=null);
  }

  ngOnInit() {
  }

  listCoordonnee(): Array<Coordonnee> {
    return this.coordonneeService.findAll();
  }

  addCoordonnee() {
    this.coordonneeForm = new Coordonnee();
  }

  editCoordonnee() {
    this.coordonneeService.findById(this.idCoor).subscribe(resp => {this.coordonneeForm = resp})
  }

  saveCoordonnee() {
    this.coordonneeForm.client=this.excli;
    this.facturation.date=new Date();
    this.facturation.ref=new Date().toDateString();
    this.facturationHttpService.savefacture(this.facturation).subscribe(resp=>{
      this.temp=resp;
      this.commandeHttpService.findById(Number(sessionStorage.getItem("commande_id"))).subscribe(resp=>{
        this.commande=resp;
        this.commande.facturation=this.temp;
        this.commandeHttpService.save(this.commande);
        sessionStorage.setItem('facturation_id',this.commande.facturation.id.toString());
        }, err=>console.log(err))
      this.coordonneeService.save(this.coordonneeForm);
    },err=>console.log(err));


    this.coordonneeForm = new Coordonnee();;
  }

  removeCoordonnee(id: number) {
    this.coordonneeService.delete(id);
  }

  cancelCoordonnee() {
    console.log(this.coordonneeForm);
    this.coordonneeForm = null;
  }

// -------------------------------------------------------------------------------------------------

  listClient(): Array<Client> {
    return this.clientService.findAll();
  }

  addClient() {
    this.clientForm = new Client();
  }

  editClient(id: number) {
    this.clientService.findById(id).subscribe(resp => {this.clientForm = resp})
  }

  saveClient() {
    this.clientService.save(this.clientForm);

    this.clientForm = null;
  }

  removeClient(id: number) {
    this.clientService.delete(id);
  }

  cancelClient() {
    console.log(this.clientForm);
    this.clientForm = null;
  }
}
