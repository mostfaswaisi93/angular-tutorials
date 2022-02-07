import { Component, OnInit } from '@angular/core';
import { TrumpComponent } from '../trump/trump.component';
import * as $ from 'jquery';
@Component({
  selector: 'app-processing',
  templateUrl: './processing.component.html',
  styleUrls: ['./processing.component.css']
})
export class ProcessingComponent implements OnInit {

  constructor() { }

  Trump:boolean= true;
  Biden:boolean= true;
  ngOnInit() {



  }

}
