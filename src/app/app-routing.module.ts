import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommandeFournisseurComponent} from './commande-fournisseur/commande-fournisseur.component';

const routes: Routes = [
  {path: 'commandeFournisseur', component: CommandeFournisseurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
