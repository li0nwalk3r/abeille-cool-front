import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MonPanierComponent } from './mon-panier/mon-panier.component';
import { ConnexionComponent } from './connexion/connexion.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FournisseurProduitsComponent} from './fournisseur-produits/fournisseur-produits.component';
import { BtnConnectComponent } from './btn-connect/btn-connect.component';
import { FacturationComponent } from './facturation/facturation.component';
import { FormulaireCommandeClientComponent } from './formulaire-commande-client/formulaire-commande-client.component';
import { AdminFournReferComponent } from './admin-fourn-refer/admin-fourn-refer.component';
import {AuthGuard} from "./auth.guard";
import { PaiementComponent } from './paiement/paiement.component';
import {AccueilComponent} from './accueil/accueil.component';
import { ActualiteDetailComponent } from './actualite-detail/actualite-detail.component';
import {ArticleComponent} from "./article/article.component";
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import {CommandeFournisseurComponent} from "./commande-fournisseur/commande-fournisseur.component";




@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    BtnConnectComponent,
    FacturationComponent,
    ConnexionComponent,
    FormulaireCommandeClientComponent,
    FournisseurProduitsComponent,
    ConnexionComponent,
    MonPanierComponent,
    AdminFournReferComponent,
    PaiementComponent,
    AccueilComponent,
    ArticleComponent,
    ActualiteDetailComponent,
    FournisseurComponent,
    ConnexionComponent,
    CommandeFournisseurComponent,
    FournisseurProduitsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  exports: [
    MonPanierComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
