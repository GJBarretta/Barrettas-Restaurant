import { Component, OnInit } from '@angular/core';
import { Item } from './../../../item.model';
import { pastaDinnerData } from './../../menu-data-new';

@Component({
  selector: 'app-pasta-dinner',
  templateUrl: './pasta-dinner.component.html',
  styleUrls: ['./pasta-dinner.component.css']
})
export class PastaDinnerComponent implements OnInit {
  items: Item[];
  images: string[];

  constructor() { }

  ngOnInit() {
    this.items = pastaDinnerData;
    this.images = [
      "./../../../../assets/menu/pasta/1.jpg",
      "./../../../../assets/menu/pasta/2.jpg",
      "./../../../../assets/menu/pasta/3.jpg",
      "./../../../../assets/menu/pasta/4.jpg",
      "./../../../../assets/menu/pasta/5.jpg",
      "./../../../../assets/menu/pasta/6.jpg",
      "./../../../../assets/menu/pasta/7.jpg"
    ];
    
  }

}
