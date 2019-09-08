import { Component, OnInit } from '@angular/core';
import { Item } from './../../../item.model';
import { sideOrderData } from './../../menu-data-new';

@Component({
  selector: 'app-side-orders',
  templateUrl: './side-orders.component.html',
  styleUrls: ['./side-orders.component.css']
})
export class SideOrdersComponent implements OnInit {
  items: Item[];
  images: string[];

  constructor() { }

  ngOnInit() {
    this.items = sideOrderData;
    this.images = [
      "./../../../../assets/menu/side-orders/1.jpg",
      "./../../../../assets/menu/side-orders/2.jpg",
      "./../../../../assets/menu/side-orders/3.jpg",
      "./../../../../assets/menu/side-orders/4.jpg"
    ];
  }

}
