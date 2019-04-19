import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Avis} from '../model/avis';

@Injectable({
  providedIn: 'root'
})
export class LivreDorHttpService {

  listeAvis: any;

  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
    this.http.get('http://localhost:8080/avis')
      .subscribe(resp => {
          this.listeAvis = resp;
        },
        err => console.log(err));
  }

  findAvisSite(): Array<Avis> {
    return this.listeAvis;
  }

  save(avis: Avis) {
    this.http.post('http://localhost:8080/avis', avis).subscribe(resp => {
        this.load();
        avis = null;
      },
      err => console.log(err));
  }
}
