import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConnexionComponent} from './connexion/connexion.component';
import {AppComponent} from "./app.component";
import {CommandeFournisseurComponent} from './commande-fournisseur/commande-fournisseur.component';
import {FournisseurProduitsComponent} from "./fournisseur-produits/fournisseur-produits.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  {path: 'connexion', component: ConnexionComponent},
  {path: 'fournisseur/mes-produits', component: FournisseurProduitsComponent,canActivate:[AuthGuard],data: { roles: ["ADMINISTRATEUR","FOURNISSEUR"] }},
  {path: 'index', component: AppComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
