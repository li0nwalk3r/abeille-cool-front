import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ConnexionComponent } from './connexion/connexion.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BtnConnectComponent } from './btn-connect/btn-connect.component';
import { FacturationComponent } from './facturation/facturation.component';
import { FormulaireCommandeClientComponent } from './formulaire-commande-client/formulaire-commande-client.component';
import {AccueilComponent} from './accueil/accueil.component';
import {FournisseurProduitsComponent} from './fournisseur-produits/fournisseur-produits.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    BtnConnectComponent,
    FacturationComponent,
    ConnexionComponent,
    FormulaireCommandeClientComponent,
    FournisseurProduitsComponent,
    AccueilComponent
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
  bootstrap: [AppComponent]
})
export class AppModule { }
