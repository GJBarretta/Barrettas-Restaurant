import { Component, OnInit } from '@angular/core';
import { pizzaData } from '../../menu-data-new';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  pizzaData: Map<string, any>;
  images: string[];

  
  constructor() { }

  ngOnInit() {
    this.pizzaData = pizzaData;
    this.images = [
      "./../../../../assets/menu/pizzas/1.jpg",
      "./../../../../assets/menu/pizzas/2.jpg",
      "./../../../../assets/menu/pizzas/3.jpg",
      "./../../../../assets/menu/pizzas/4.jpg",
      "./../../../../assets/menu/pizzas/5.jpg",
      "./../../../../assets/menu/pizzas/6.jpg",
      "./../../../../assets/menu/pizzas/7.jpg"
    ];
  }

}
