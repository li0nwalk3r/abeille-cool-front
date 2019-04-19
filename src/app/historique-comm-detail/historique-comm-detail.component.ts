import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HistoriqueCommFournHttpService} from '../historique-comm-fourn/historique-comm-fourn-http.service';
import {CommandeFournisseur} from '../model/commandeFournisseur';

@Component({
  selector: 'app-historique-comm-detail',
  templateUrl: './historique-comm-detail.component.html',
  styleUrls: ['./historique-comm-detail.component.css']
})
export class HistoriqueCommDetailComponent implements OnInit {

  commandeFournisseurDetail: CommandeFournisseur = null;

  constructor(private route: ActivatedRoute, private historiqueCommFournService: HistoriqueCommFournHttpService) {
  }

  ngOnInit() {

    this.route.params.subscribe(parameters => {this.find(parameters.id);
    });
  }

  find(id: number) {

    this.historiqueCommFournService.findById(id).subscribe(resp => {

      this.commandeFournisseurDetail = resp;

    },err=> console.log("ici"));
  }
}
