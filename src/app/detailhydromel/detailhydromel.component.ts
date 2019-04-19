import {Component, OnInit} from '@angular/core';
import {DetailhydromelHttpService} from './detailhydromel-http.service';
import {Article} from '../model/article';
import {ActivatedRoute} from '@angular/router';
import {Avis} from '../model/avis';
import {CommandeClientHttpService} from '../formulaire-commande-client/commande-client-http.service';
import {CommandeClient} from '../model/commande-client';
import {LigneCommande} from '../model/ligne-commande';
import {ClientHttpService} from '../formulaire-commande-client/client-http.service';
import {Client} from '../model/client';
import {LigneCommandeHttpService} from '../facturation/ligne-commande-http.service';

@Component({
  selector: 'app-detailhydromel',
  templateUrl: './detailhydromel.component.html',
  styleUrls: ['./detailhydromel.component.css']
})
export class DetailhydromelComponent implements OnInit {
  hydromel: Article = null;
  qte: number;
  listeAvis: Array<Avis> = new Array<Avis>();
  clientId: number;
  listeCommandeClient: Array<CommandeClient> = new Array<CommandeClient>();
  ligneCommande: LigneCommande;
  client: Client;
  commandeClient: CommandeClient;

  constructor(private route: ActivatedRoute, private clientHttpService: ClientHttpService,
              private detailHydromelService: DetailhydromelHttpService,
              private commandeClientService: CommandeClientHttpService, private ligneCommandeService: LigneCommandeHttpService) {
    this.route.params.subscribe(parameters => this.find(parameters.id));
  }

  ngOnInit() {
  }

  find(id: number) {
    this.detailHydromelService.findById(id).subscribe(resp => {
      this.hydromel = resp;
      this.findAvis(this.hydromel);
    });
  }

  createLigne(article: Article, qte: number) {
    if(sessionStorage.getItem("type")=="CLIENT"){
           this.clientId=Number(sessionStorage.getItem("type_id"));
           console.log("clientid"+this.clientId)
           console.log(sessionStorage.getItem("type_id"));
          console.log("hello");
        }
    this.detailHydromelService.create(article, qte).subscribe(resp => {
      this.ligneCommande = resp;
      this.commandeClientService.findPanier(this.clientId).subscribe(resp => {
          this.listeCommandeClient = resp;
          if (this.listeCommandeClient.length == 0) {
            this.clientHttpService.findById(this.clientId).subscribe(resp => {
              this.client = resp;
              //  });
              this.commandeClient=new CommandeClient(null, null, 'Panier', [], this.client)
              this.commandeClientService.saveSubscribeOutside(this.commandeClient).subscribe(resp => {
                this.commandeClientService.load();
                this.commandeClient=resp;
                this.ligneCommande.commandeClient=this.commandeClient;
                this.ligneCommandeService.save(this.ligneCommande);
                sessionStorage.setItem("commande_id",String(this.commandeClient.id));
                console.log(sessionStorage.getItem("commande_id"));


              });
              // this.commandeClientService.save(this.commandeClient).subscribe(;
              //this.ligneCommande.commandeClient=this.commandeClient;
              //this.ligneCommandeService.save(this.ligneCommande);
            });
            } else {

            this.ligneCommande.commandeClient = this.listeCommandeClient[0];
            this.ligneCommandeService.save(this.ligneCommande);
            sessionStorage.setItem("commande_id",String(this.ligneCommande.commandeClient.id));
            console.log(sessionStorage.getItem("commande_id"));
            this.listeCommandeClient[0].client = this.client;
            if(this.listeCommandeClient[0].lignesCommande==null){
              this.listeCommandeClient[0].lignesCommande = new Array<LigneCommande>();
            }
            this.listeCommandeClient[0].lignesCommande.push(this.ligneCommande);

          }});
        });
    };

    //,this.listeCommandeClient=null);
   // console.log(this.listeCommandeClient);


    //this.detailHydromelService.create(article, qte).subscribe();
 // }

  findAvis(article: Article) {
    console.log('findAvis()');
    this.detailHydromelService.findAvis(article).subscribe(resp => {
      console.log('findAvis() in subscribe');
      this.listeAvis = resp;
    });
  }
}
