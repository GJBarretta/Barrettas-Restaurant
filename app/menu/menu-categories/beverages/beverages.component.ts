import { Component, OnInit } from '@angular/core';
import { Item } from './../../../item.model';
import { beveragesData } from './../../menu-data-new';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent implements OnInit {
  items: Item[];

  constructor() { }

  ngOnInit() {
    this.items = beveragesData;
  }

}
