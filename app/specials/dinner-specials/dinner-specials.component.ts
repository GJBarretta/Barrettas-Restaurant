import { Component, OnInit } from '@angular/core';
import { Item } from './../../item.model';
import { HttpGetService } from './../../services/http.get.service';

@Component({
  selector: 'app-dinner-specials',
  templateUrl: './dinner-specials.component.html',
  styleUrls: ['./dinner-specials.component.css']
})
export class DinnerSpecialsComponent implements OnInit {
  items: Item[];

  constructor(private httpGetService: HttpGetService) { }

  ngOnInit() {
    this.httpGetService.getSpecials()
      .subscribe((data: Item[]) => {
        this.items = data;
      });
  }
}
