import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LivreDorHttpService} from './livre-dor-http.service';
import {Article} from '../model/article';
import {Avis} from '../model/avis';
import {getLocaleDateFormat} from '@angular/common';
import {Client} from '../model/client';

@Component({
  selector: 'app-livre-dor',
  templateUrl: './livre-dor.component.html',
  styleUrls: ['./livre-dor.component.css']
})
export class LivreDorComponent implements OnInit {
  avisForm: Avis = null;

  constructor(private livreDorService: LivreDorHttpService) {
  }

  ngOnInit() {
  }

  listeAvis(): Array<Avis> {
    return this.livreDorService.findAvisSite();
  }

  add() {
    this.avisForm = new Avis();
  }

  save() {
    this.avisForm.date = new Date();
    this.avisForm.site = true;
    this.avisForm.valide = true;
    if (this.avisForm.note > 5) {
      this.avisForm.note = 5;
    }
    this.livreDorService.save(this.avisForm);
    this.avisForm = null;
  }

  cancel() {
    this.avisForm = null;
  }

}
