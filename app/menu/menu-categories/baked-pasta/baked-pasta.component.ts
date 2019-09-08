import { Component, OnInit } from '@angular/core';
import { Item } from './../../../item.model';
import { bakedPastaData } from './../../menu-data-new';

@Component({
  selector: 'app-baked-pasta',
  templateUrl: './baked-pasta.component.html',
  styleUrls: ['./baked-pasta.component.css']
})
export class BakedPastaComponent implements OnInit {
  items: Item[];
  images: string[];

  constructor() { }

  ngOnInit() {
    this.items = bakedPastaData;
    this.images = [
      "./../../../../assets/menu/baked-pasta/1.jpg",
      "./../../../../assets/menu/baked-pasta/2.jpg"
    ];
  }

}
