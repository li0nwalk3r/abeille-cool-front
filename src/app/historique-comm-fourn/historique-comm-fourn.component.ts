import { Component, OnInit } from '@angular/core';
import {HistoriqueCommFournHttpService} from './historique-comm-fourn-http.service';
import {CommandeFournisseur} from '../model/commandeFournisseur';

@Component({
  selector: 'app-historique-comm-fourn',
  templateUrl: './historique-comm-fourn.component.html',
  styleUrls: ['./historique-comm-fourn.component.css']
})
export class HistoriqueCommFournComponent implements OnInit {

  constructor(private historiqueCommFournService: HistoriqueCommFournHttpService) { }

  ngOnInit() {
  }

  list(): Array<CommandeFournisseur>{
    return this.historiqueCommFournService.findAll();
  }

}
