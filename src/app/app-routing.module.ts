import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConnexionComponent} from './connexion/connexion.component';
import {AppComponent} from './app.component';
import {FormulaireCommandeClientComponent} from './formulaire-commande-client/formulaire-commande-client.component';
import {CommandeFournisseurComponent} from './commande-fournisseur/commande-fournisseur.component';
import {FournisseurProduitsComponent} from "./fournisseur-produits/fournisseur-produits.component";
import {AdministrateurFournisseursReferencesComponent} from "./administrateur-fournisseurs-references/administrateur-fournisseurs-references.component";
import {MonPanierComponent} from "./mon-panier/mon-panier.component";

const routes: Routes = [
  {path: 'connexion', component: ConnexionComponent},
  {path: 'index', component: AppComponent},
  {path: 'fournisseur/mes-produits', component: FournisseurProduitsComponent},
  {path: 'administrateur/fournisseurs/references', component: AdministrateurFournisseursReferencesComponent},
  {path: 'commande-client', component: FormulaireCommandeClientComponent},
  {path: 'mon-panier', component: MonPanierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
