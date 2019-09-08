import { Component, OnInit } from '@angular/core';
import { Item } from './../../../item.model';
import { soupData } from './../../menu-data-new';

@Component({
  selector: 'app-soup',
  templateUrl: './soup.component.html',
  styleUrls: ['./soup.component.css']
})
export class SoupComponent implements OnInit {
  items: Item[];

  constructor() { }

  ngOnInit() {
    this.items = soupData;
  }

}
