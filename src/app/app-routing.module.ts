import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConnexionComponent} from './connexion/connexion.component';
import {AppComponent} from "./app.component";
import {CommandeFournisseurComponent} from './commande-fournisseur/commande-fournisseur.component';
import {FournisseurProduitsComponent} from "./fournisseur-produits/fournisseur-produits.component";
import {AdministrateurFournisseursReferencesComponent} from "./administrateur-fournisseurs-references/administrateur-fournisseurs-references.component";

const routes: Routes = [
  {path: 'connexion', component: ConnexionComponent},
  {path: 'fournisseur/mes-produits', component: FournisseurProduitsComponent},
  {path: 'index', component: AppComponent},
  {path: 'administrateur/fournisseurs/references', component: AdministrateurFournisseursReferencesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
