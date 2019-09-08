import { Component, OnInit } from '@angular/core';
import { Item } from './../../../item.model';
import { aLaCarteData } from './../../menu-data-new';

@Component({
  selector: 'app-a-la-carte',
  templateUrl: './a-la-carte.component.html',
  styleUrls: ['./a-la-carte.component.css']
})
export class ALaCarteComponent implements OnInit {
  items: Item[];
  
  constructor() { }

  ngOnInit() {
    this.items = aLaCarteData;
  }

}
