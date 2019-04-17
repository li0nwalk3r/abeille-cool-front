import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MonPanierComponent } from './mon-panier/mon-panier.component';
import { ConnexionComponent } from './connexion/connexion.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FormulaireCommandeClientComponent } from './formulaire-commande-client/formulaire-commande-client.component';
// import {AccueilComponent} from './accueil/accueil.component';
import {FournisseurProduitsComponent} from './fournisseur-produits/fournisseur-produits.component';
import {AuthGuard} from './auth.guard';
import { AdminFournReferComponent } from './admin-fourn-refer/admin-fourn-refer.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    FormulaireCommandeClientComponent,
    FournisseurProduitsComponent,
    ConnexionComponent,
    MonPanierComponent,
    AdminFournReferComponent
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
