import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {AccueilComponent} from './accueil/accueil.component';
import {HttpClientModule} from '@angular/common/http';
import { ActualiteDetailComponent } from './actualite-detail/actualite-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ActualiteDetailComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
