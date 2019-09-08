import { Component, OnInit } from '@angular/core';
import { Item } from './../../../item.model';
import { domenicosBestData } from './../../menu-data-new';

@Component({
  selector: 'app-domenico-best',
  templateUrl: './domenico-best.component.html',
  styleUrls: ['./domenico-best.component.css']
})
export class DomenicoBestComponent implements OnInit {
  items: Item[];
  images: string[];

  constructor() { }

  ngOnInit() {
    this.items = domenicosBestData;
    this.images = [
      "./../../../../assets/menu/domenico-best/1.jpg",
      "./../../../../assets/menu/domenico-best/2.jpg"
    ];
    
  }

}
