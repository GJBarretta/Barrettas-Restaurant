import { Component, OnInit } from '@angular/core';
import { Item } from './../../../item.model';
import { hotWrapsData } from './../../menu-data-new';

@Component({
  selector: 'app-hot-wraps',
  templateUrl: './hot-wraps.component.html',
  styleUrls: ['./hot-wraps.component.css']
})
export class HotWrapsComponent implements OnInit {
  items: Item[];

  constructor() { }

  ngOnInit() {
    this.items = hotWrapsData;
  }

}
