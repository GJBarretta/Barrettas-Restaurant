import { Component, OnInit } from '@angular/core';
import { Item } from './../../../item.model';
import { appetizerData } from './../../menu-data-new';

@Component({
  selector: 'app-appetizers',
  templateUrl: './appetizers.component.html',
  styleUrls: ['./appetizers.component.css']
})
export class AppetizersComponent implements OnInit {
  items: Item[];
  images: string[];

  constructor() { }

  ngOnInit() {
    this.items = appetizerData;
    this.images = [
      "./../../../../assets/menu/appetizers/1.jpg",
      "./../../../../assets/menu/appetizers/2.jpg",
      "./../../../../assets/menu/appetizers/3.jpg",
      "./../../../../assets/menu/appetizers/4.jpg",
      "./../../../../assets/menu/appetizers/5.jpg",
      "./../../../../assets/menu/appetizers/6.jpg"
    ];
  }

}
