import { Component, OnInit } from '@angular/core';
import { Item } from './../../../item.model';
import { stromboliData } from './../../menu-data-new';

@Component({
  selector: 'app-stromboli',
  templateUrl: './stromboli.component.html',
  styleUrls: ['./stromboli.component.css']
})
export class StromboliComponent implements OnInit {
  items: Item[];
  images: string[];

  constructor() { }

  ngOnInit() {
    this.items = stromboliData;
    this.images = [
      "./../../../../assets/menu/stromboli-calzone/1.jpg",
      "./../../../../assets/menu/stromboli-calzone/2.jpg"
    ];
    
  }

}
