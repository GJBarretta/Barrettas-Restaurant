import { Component, OnInit } from '@angular/core';
import { Item } from './../../../item.model';
import { hotSubsData, hotSubsAddonData } from './../../menu-data-new';

@Component({
  selector: 'app-hot-subs',
  templateUrl: './hot-subs.component.html',
  styleUrls: ['./hot-subs.component.css']
})
export class HotSubsComponent implements OnInit {
  items: Item[];
  addons: Item[];
  images: string[];

  constructor() { }

  ngOnInit() {
    this.items = hotSubsData;
    this.addons = hotSubsAddonData;
    this.images = [
      "./../../../../assets/menu/hot-subs/1.jpg",
      "./../../../../assets/menu/hot-subs/2.jpg"
    ];
  }

}
