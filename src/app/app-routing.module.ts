import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConnexionComponent} from './connexion/connexion.component';
import {AppComponent} from './app.component';
import {FormulaireCommandeClientComponent} from './formulaire-commande-client/formulaire-commande-client.component';
import {FournisseurProduitsComponent} from "./fournisseur-produits/fournisseur-produits.component";
import {AuthGuard} from "./auth.guard";
import {MonPanierComponent} from "./mon-panier/mon-panier.component";
import {AdminFournReferComponent} from "./admin-fourn-refer/admin-fourn-refer.component";
import {PaiementComponent} from './paiement/paiement.component';
import {FacturationComponent} from './facturation/facturation.component';
import {AccueilComponent} from './accueil/accueil.component';

const routes: Routes = [
  {path: 'connexion', component: ConnexionComponent},
  {path: 'index', component: AppComponent},
  {path: 'fournisseur/mes-produits', component: FournisseurProduitsComponent},
  {path: 'administrateur/fournisseurs/references', component: AdminFournReferComponent},
  {path: 'commande-client', component: FormulaireCommandeClientComponent},
  {path: 'mon-panier', component: MonPanierComponent},
  {path: 'paiement', component: PaiementComponent},
  {path: 'commandeClient', component: FormulaireCommandeClientComponent},
  {path: 'actualite', component: AccueilComponent},
  {path: 'facturation/:id', component: FacturationComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
