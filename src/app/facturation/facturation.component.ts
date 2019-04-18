import { Component, OnInit } from '@angular/core';
import {FacturationHttpService} from './facturation-http.service';
import {ActivatedRoute} from '@angular/router';
import {Facturation} from '../model/facturation';
import {Administrateur} from '../model/administrateur';
import {CommandeClient} from '../model/commande-client';
import {Coordonnee} from '../model/coordonnee';
import {AdministrateurHttpService} from './administrateur-http.service';
import {CommandeClientHttpService} from '../formulaire-commande-client/commande-client-http.service';
import {CoordonneeHttpService} from '../formulaire-commande-client/coordonnee-http.service';
import {LigneCommande} from '../model/ligne-commande';
import {LigneCommandeHttpService} from './ligne-commande-http.service';

@Component({
  selector: 'app-facturation',
  templateUrl: './facturation.component.html',
  styleUrls: ['./facturation.component.css']
})
export class FacturationComponent implements OnInit {
  facture: Facturation;
  admin: Administrateur;
  commande: CommandeClient;
  coordonnee: Coordonnee;
  listLigneCommande : Array<LigneCommande>;
  pxTotal: number = 0;

  constructor(private route: ActivatedRoute, private facturationService: FacturationHttpService, private commandeService: CommandeClientHttpService, private administrateurService: AdministrateurHttpService, private coordonneeService: CoordonneeHttpService, private ligneCommandeService: LigneCommandeHttpService) {

  }

  ngOnInit() {
    this.route.params.subscribe(
      parameters => this.facturationService.findById(parameters.id).subscribe(
        resp => {
          this.facture = resp;
          this.commandeService.findByFactureId(this.facture.id).subscribe(resp => {
            this.commande = resp;
            this.coordonneeService.findById(this.commande.coordonnee.id).subscribe(resp => {
              this.coordonnee = resp;
            });
            this.list();
          });
        }
      )
    );
    console.log(this.facture);
    this.administrateurService.findById(70).subscribe(resp => {
      this.admin = resp;
    });
    console.log(this.facture);

    console.log(this.facture);
  }

  list() {

    this.ligneCommandeService.findByCommandeClient(this.commande.id).subscribe(resp => {
        this.listLigneCommande = resp;
    for (let i = 0; i < this.listLigneCommande.length; i++) {
      this.pxTotal = (this.listLigneCommande[i].article.prix*this.listLigneCommande[i].article.qte)+this.pxTotal;
    }
    }, err => console.log((err)));

  }




  imprimer(){print();};
}
