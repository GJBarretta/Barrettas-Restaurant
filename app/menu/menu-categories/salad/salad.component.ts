import { Component, OnInit } from '@angular/core';
import { Item } from './../../../item.model';
import { saladData } from './../../menu-data-new';

@Component({
  selector: 'app-salad',
  templateUrl: './salad.component.html',
  styleUrls: ['./salad.component.css']
})
export class SaladComponent implements OnInit {
  items: Item[];
  images: string[];

  constructor() { }

  ngOnInit() {
    this.items = saladData;
    this.images = [
      "./../../../../assets/menu/salads/1.jpg",
      "./../../../../assets/menu/salads/2.jpg",
      "./../../../../assets/menu/salads/3.jpg",
      "./../../../../assets/menu/salads/4.jpg"
    ];
  }

}
