import { Component, OnInit } from '@angular/core';
import { Item } from './../../../item.model';
import { coldSubsData } from './../../menu-data-new';

@Component({
  selector: 'app-cold-subs',
  templateUrl: './cold-subs.component.html',
  styleUrls: ['./cold-subs.component.css']
})
export class ColdSubsComponent implements OnInit {
  items: Item[];
  images: string[];

  constructor() { }

  ngOnInit() {
    this.items = coldSubsData;
    this.images = [
      "./../../../../assets/menu/cold-subs/1.jpg",
      "./../../../../assets/menu/cold-subs/2.jpg"
    ];
  }

}
