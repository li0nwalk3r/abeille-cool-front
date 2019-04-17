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
  idCoor: number
  user : boolean;
  clientForm: Client = null;
  excli : Client;
  excoords : Array<Coordonnee>;
  coordonneeForm : Coordonnee = new Coordonnee();

  constructor(private clientService: ClientHttpService, private coordonneeService: CoordonneeHttpService) {
    this.user = false;
    this.clientService.findById(71).subscribe(resp => {this.excli=resp},
      err => console.log(err));
    this.coordonneeService.findByClientId(71).subscribe(resp => {this.excoords=resp},
      err => console.log(err));
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
