import { Component, OnInit } from '@angular/core';
import { Item } from './../../../item.model';
import { sandwichesData } from './../../menu-data-new';

@Component({
  selector: 'app-sandwiches',
  templateUrl: './sandwiches.component.html',
  styleUrls: ['./sandwiches.component.css']
})
export class SandwichesComponent implements OnInit {
  items: Item[];

  constructor() { }

  ngOnInit() {
    this.items = sandwichesData;
  }

}
