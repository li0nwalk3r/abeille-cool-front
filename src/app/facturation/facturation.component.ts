import { Component, OnInit } from '@angular/core';
import {FacturationHttpService} from '../facturation-http.service';
import {ActivatedRoute} from '@angular/router';
import {Facturation} from '../model/facturation';
import {Administrateur} from '../model/administrateur';
import {AdministrateurHttpService} from '../administrateur-http.service';

@Component({
  selector: 'app-facturation',
  templateUrl: './facturation.component.html',
  styleUrls: ['./facturation.component.css']
})
export class FacturationComponent implements OnInit {
  facture: Facturation = null;
  admin: Administrateur = null;
  constructor(private route: ActivatedRoute, private facturationService: FacturationHttpService, private administrateurService: AdministrateurHttpService) {
    this.route.params.subscribe(parameters => this.facturationService.findById(parameters.id).subscribe(resp => {this.facture = resp; }));
    this.administrateurService.findById(45).subscribe(resp => {this.admin = resp; })
  }

  ngOnInit() {
  }

  imprimer(){print();};
}
