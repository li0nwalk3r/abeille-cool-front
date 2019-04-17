import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConnexionComponent} from './connexion/connexion.component';
import {AppComponent} from './app.component';
import {FormulaireCommandeClientComponent} from './formulaire-commande-client/formulaire-commande-client.component';
import {FournisseurProduitsComponent} from "./fournisseur-produits/fournisseur-produits.component";
import {FacturationComponent} from './facturation/facturation.component';

const routes: Routes = [
  {path: 'connexion', component: ConnexionComponent},
  {path: 'index', component: AppComponent},
  {path: 'fournisseur/mes-produits', component: FournisseurProduitsComponent},
  {path: 'commandeClient', component: FormulaireCommandeClientComponent},
  {path: 'facturation/:id', component: FacturationComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
