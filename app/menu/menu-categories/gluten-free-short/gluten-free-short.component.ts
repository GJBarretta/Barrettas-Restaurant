import { Component, OnInit } from '@angular/core';
import { Item } from './../../../item.model';
import { glutenFreeShortData } from './../../menu-data-new';

@Component({
  selector: 'app-gluten-free-short',
  templateUrl: './gluten-free-short.component.html',
  styleUrls: ['./gluten-free-short.component.css']
})
export class GlutenFreeShortComponent implements OnInit {
  items: Item[];
  images: string[];

  constructor() { }

  ngOnInit() {
    this.items = glutenFreeShortData;
    this.images = [
      "./../../../../assets/menu/gluten-free/1.jpg",
    ];
  }

}
