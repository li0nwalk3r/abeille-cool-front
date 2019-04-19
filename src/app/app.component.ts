import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'abeille-cool-front';
  articleHydromels: string = null;
  articleRhodomels: string = null;

  constructor(private router: Router) {

  }

  Panier() {
    if (sessionStorage.getItem("commande_id")) {
      this.router.navigate(['mon-panier/' + sessionStorage.getItem("commande_id")]);
    } else {
      alert("Vous n'avez pas de panier en cours.");
    }
  }

  Accueil() {
    this.router.navigate(['']);
  }

  Hydromels() {
    this.router.navigate(['article']);
  }

  Classiques() {
    this.router.navigate(['article/Classique']);
  }

  Rhodomels() {
    this.router.navigate(['article/Rhodomel']);
  }

  Melomels() {
    this.router.navigate(['article/Melomel']);
  }

  Broggots() {
    this.router.navigate(['article/Broggot']);
  }

  Oxymels() {
    this.router.navigate(['article/Oxymel']);
  }

  Oenomels() {
    this.router.navigate(['article/Oenomel']);
  }
}
