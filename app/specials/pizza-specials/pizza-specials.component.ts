import { Component, OnInit } from '@angular/core';
import { Item } from './../../item.model';
import { pizzaSpecialData } from './../specials-data-new';

@Component({
  selector: 'app-pizza-specials',
  templateUrl: './pizza-specials.component.html',
  styleUrls: ['./pizza-specials.component.css']
})
export class PizzaSpecialsComponent implements OnInit {
  items: Item[];

  constructor() { }

  ngOnInit() {
    this.items = pizzaSpecialData;
  }
}
