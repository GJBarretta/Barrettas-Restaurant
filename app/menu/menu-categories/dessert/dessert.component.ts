import { Component, OnInit } from '@angular/core';
import { Item } from './../../../item.model';
import { dessertsData } from './../../menu-data-new';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.css']
})
export class DessertComponent implements OnInit {
  items: Item[];
  images: string[];

  constructor() { }

  ngOnInit() {
    this.items = dessertsData;
    this.images = [
      "./../../../../assets/menu/desserts/1.jpg",
      "./../../../../assets/menu/desserts/2.jpg",
      "./../../../../assets/menu/desserts/3.jpg"
    ];
  }

}
