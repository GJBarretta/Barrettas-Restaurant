import { Component, OnInit } from '@angular/core';
import { burgersData } from '../../menu-data-new';
import { Item } from '../../../item.model';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.css']
})
export class BurgersComponent implements OnInit {
  burgersData: Map<string, Item>;

  constructor() { }

  ngOnInit() {
    this.burgersData = burgersData;
  }

}
