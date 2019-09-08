import { Component, OnInit } from '@angular/core';
import { Item } from './../item.model';
import { HttpPostService } from '../services/http.post.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  data = [];
  items: Item[];
  name: string;
  description: string;
  price: string;
  password: string;
  url: string;

  constructor(private httpPostService: HttpPostService) { }

  ngOnInit() {
    this.name = "";
    this.description = "";
    this.price = "";
    this.password = "";
    this.items = [];
    this.url = "./api/create.php";
  }

  onItemUpdate(){
    this.items.push(new Item(this.name, this.description, this.price));
    console.log(this.name, this.description, this.price);
    this.name = "";
    this.description = "";
    this.price = "";
  }

  onItemSubmit(){
    this.data.push(this.password);
    this.data.push(this.items);
    this.httpPostService.putSpecials(this.data)
      .subscribe((data: Item[]) => {
        console.log(data);
    });
    this.data = [];
  }

  onItemDelete(num:number){
    let newItems = [];
    let itemCount = this.items.length;
    let i = 0;
    while (i < itemCount){
      if (i != num){
        newItems.push(this.items[i]);
      }
      i++;
    }

    this.items = newItems;
  }

}
