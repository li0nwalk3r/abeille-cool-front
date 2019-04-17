import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MonPanierComponent } from './mon-panier/mon-panier.component';
import { CommandeFournisseurComponent } from './commande-fournisseur/commande-fournisseur.component';
import { ConnexionComponent } from './connexion/connexion.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FormulaireCommandeClientComponent } from './formulaire-commande-client/formulaire-commande-client.component';
import {AccueilComponent} from './accueil/accueil.component';
import {FournisseurProduitsComponent} from './fournisseur-produits/fournisseur-produits.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    FormulaireCommandeClientComponent,
    FournisseurProduitsComponent,
    AccueilComponent
    MonPanierComponent,
    ConnexionComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [
    MonPanierComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
