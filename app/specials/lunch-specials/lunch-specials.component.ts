import { Component, OnInit } from '@angular/core';
import { Item } from './../../item.model';
import { lunchSpecialData } from './../specials-data-new';

@Component({
  selector: 'app-lunch-specials',
  templateUrl: './lunch-specials.component.html',
  styleUrls: ['./lunch-specials.component.css']
})
export class LunchSpecialsComponent implements OnInit {
  items: Item[];
  
  constructor() { }

  ngOnInit() {
    this.items = lunchSpecialData;
  }
}
