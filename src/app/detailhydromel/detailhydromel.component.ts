import { Component, OnInit } from '@angular/core';
import {DetailhydromelHttpService} from '../detailhydromel-http.service';
import{Article} from '../model/article';

@Component({
  selector: 'app-detailhydromel',
  templateUrl: './detailhydromel.component.html',
  styleUrls: ['./detailhydromel.component.css']
})
export class DetailhydromelComponent implements OnInit {
  hydromel : Article = null;
  constructor(private detailHydromelService: DetailhydromelHttpService) { }

  ngOnInit() {
  }
  find(id:number):Article {
  this.detailHydromelService.findById(id).subscribe(resp => {this.hydromel = resp})
  return this.hydromel;
}
}
