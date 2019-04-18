import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'abeille-cool-front';

  constructor(private router: Router) {

  }

  Panier(){
    this.router.navigate(['mon-panier/']);
  }

  Accueil() {
    this.router.navigate(['']);
  }

  Hydromels() {
    this.router.navigate(['article']);
  }

  Classiques() {
    this.router.navigate(['article']);
  }

  Rhodomels() {
    this.router.navigate(['article']);
  }

  Melomels() {
    this.router.navigate(['article']);
  }

  Broggots() {
    this.router.navigate(['article']);
  }

  Oxymels() {
    this.router.navigate(['article']);
  }

  Oenomels() {
    this.router.navigate(['article']);
  }
}
