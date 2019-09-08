import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Item } from './../item.model';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrls: ['./catering.component.css']
})
export class CateringComponent implements OnInit, AfterViewInit {
  @ViewChild('top', {static: false})
  top: ElementRef;

  items: Item[] = [
    new Item("Tray of Meat Lasagna", "", "$48"),
    new Item("Tray of Penne Al Forno", "Penne in Meat Sauce with Ricotta", "$48"),
    new Item("Tray of Cheese Ravioli", "Ravioli in Tomato Sauce, topped with Mozzarella", "$42"),
    new Item("Tray of Gnocchi", "Gnocchi in Tomato Sauce, topped with Mozzarella", "$42"),
    new Item("Tray of Meatballs", "Meatballs in Tomato Sauce (2 dozen)", "$30"),
    new Item("Tray of Sausages", "Sausages in Tomato Sauce (2 dozen)", "$36"),
    new Item("Tray of Breadsticks", "comes with a side of sauce (5 dozen)", "$26"),
    new Item("Tray of Fried Dough", "with Sugar (5 dozen)", "$26"),
    new Item("Tray of Meat or Vegetable Rolls", "with side of sauce (18)", "$60"),
    new Item("Tray of Antipasto", "with sides of dressing & bread", "$48"),
    new Item("Tray of Caesar Salad", "with sides of dressing & bread", "$29"),
    new Item("Tray of Garden Salad", "with sides of dressing & bread", "$29"),
    new Item("Tray of Mussels Marinara", "", "$45"),
    new Item("Tray of Chicken Fingers", "with honey mustard and/or BBQ sauce (20 pieces)", "$38"),
    new Item("Tray of Chicken Parmigiana", "", "$56"),
    new Item("Tray of Chicken Cacciatore", "", "$56"),
    new Item("Tray of Grilled Garlic Chicken", "", "$56"),
    new Item("Tray of Eggplant Parmigiana", "", "$45"),
    new Item("Tray of 6 Mixed Cold Subs", "total of 24 3 inch pieces (cut in 4)", "$49"),
    new Item("Tray of small Stromboli or Calzone (12)", "", "$60"),
  ];

  constructor() { }

  ngOnInit() {
  }  

  ngAfterViewInit(){
    setTimeout(()=>{
      this.top.nativeElement.scrollIntoView({behavior: 'smooth'});
    }, 500);
  }

}
