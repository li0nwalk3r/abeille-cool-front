import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FournisseurProduitsComponent} from "./fournisseur-produits/fournisseur-produits.component";

const routes: Routes = [
  {path: 'fournisseur/mes-produits', component: FournisseurProduitsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
