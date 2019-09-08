import { Component, OnInit } from '@angular/core';
import { Item } from './../../../item.model';
import { entreesData } from './../../menu-data-new';

@Component({
  selector: 'app-entrees',
  templateUrl: './entrees.component.html',
  styleUrls: ['./entrees.component.css']
})
export class EntreesComponent implements OnInit {
  items: Item[];
  images: string[];

  constructor() { }

  ngOnInit() {
    this.items = entreesData;
    this.images = [
      "./../../../../assets/menu/entrees/1.jpg",
      "./../../../../assets/menu/entrees/2.jpg",
      "./../../../../assets/menu/entrees/3.jpg",
      "./../../../../assets/menu/entrees/4.jpg",
      "./../../../../assets/menu/entrees/5.jpg"
    ];
    
  }

}
