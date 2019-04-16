import { Component, OnInit } from '@angular/core';
import {DetailhydromelHttpService} from '../detailhydromel-http.service';

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
  hydromel = this.detailHydromelService.findById(1);
}
