import { Component, OnInit } from '@angular/core';
import { Item } from './../../../item.model';
import { childrenData } from './../../menu-data-new';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
  items: Item[];

  constructor() { }

  ngOnInit() {
    this.items = childrenData;
  }

}
