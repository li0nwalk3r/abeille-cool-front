import { Component, OnInit } from '@angular/core';
import {ClientHttpService} from '../client-http.service';
import {CoordonneeHttpService} from '../coordonnee-http.service';
import {Client} from '../model/client';
import {Coordonnee} from '../model/coordonnee';

@Component({
  selector: 'app-formulaire-commande-client',
  templateUrl: './formulaire-commande-client.component.html',
  styleUrls: ['./formulaire-commande-client.component.css']
})
export class FormulaireCommandeClientComponent implements OnInit {
  idCoor: number;
  idClient: number;
  clientForm: Client = null;
  excli : Client;
  excoords : Array<Coordonnee>;
  coordonneeForm : Coordonnee = new Coordonnee();

  constructor(private clientService: ClientHttpService, private coordonneeService: CoordonneeHttpService) {
    this.clientService.findById(this.idClient).subscribe(resp => {this.excli=resp},
      this.excli=null);
    this.coordonneeService.findByClientId(this.idClient).subscribe(resp => {this.excoords=resp},
      this.excoords=null);
  }

  ngOnInit() {
    if(sessionStorage.getItem("type")=="CLIENT"){
      this.idClient=Number(sessionStorage.getItem("type_id"));
    }
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
    this.coordonneeService.save(this.coordonneeForm);

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
