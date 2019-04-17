import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-connect',
  templateUrl: './btn-connect.component.html',
  styleUrls: ['./btn-connect.component.css']
})
export class BtnConnectComponent implements OnInit {
  connect  = false;
  constructor() { }

  ngOnInit() {
  }

}
