import { Component, OnInit } from '@angular/core';
import { Item } from './../../../item.model';
import { calzoneData } from './../../menu-data-new';

@Component({
  selector: 'app-calzone',
  templateUrl: './calzone.component.html',
  styleUrls: ['./calzone.component.css']
})
export class CalzoneComponent implements OnInit {
  items: Item[];

  constructor() { }

  ngOnInit() {
    this.items = calzoneData;
  }

}
