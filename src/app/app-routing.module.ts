import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticleComponent} from './article/article.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {AppComponent} from './app.component';
import {FormulaireCommandeClientComponent} from './formulaire-commande-client/formulaire-commande-client.component';
import {FournisseurProduitsComponent} from "./fournisseur-produits/fournisseur-produits.component";
import {MonPanierComponent} from "./mon-panier/mon-panier.component";
import {AdminFournReferComponent} from "./admin-fourn-refer/admin-fourn-refer.component";
import {PaiementComponent} from './paiement/paiement.component';
import {FacturationComponent} from './facturation/facturation.component';
import {AccueilComponent} from './accueil/accueil.component';
import {FournisseurComponent} from "./fournisseur/fournisseur.component";
import {CommandeFournisseurComponent} from './commande-fournisseur/commande-fournisseur.component';

const routes: Routes = [
  {path: 'connexion', component: ConnexionComponent},
  {path: 'commandeFournisseur', component: CommandeFournisseurComponent},
  {path: 'fournisseurProduit', component: FournisseurProduitsComponent},
  {path: 'index', component: AppComponent},
  {path: 'fournisseur/mes-produits', component: FournisseurProduitsComponent},
  {path: 'administrateur/fournisseurs/references', component: AdminFournReferComponent},
  {path: 'commande-client', component: FormulaireCommandeClientComponent},
  {path: 'paiement', component: PaiementComponent},
  {path: 'commandeClient', component: FormulaireCommandeClientComponent},
  {path: 'actualite', component: AccueilComponent},
  {path: 'facturation/:id', component: FacturationComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'fournisseur', component: FournisseurComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'mon-panier/:id', component: MonPanierComponent},
  {path: '**', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


