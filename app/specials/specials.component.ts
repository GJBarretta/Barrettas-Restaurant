import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.css']
})
export class SpecialsComponent implements OnInit {
  @ViewChild('top', {static: false})
  top: ElementRef;

  public menuSelected: string = "pizza";

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      this.top.nativeElement.scrollIntoView({behavior: 'smooth'});
    }, 500);
  }

  onClick(event, itemName:string){
    this.menuSelected = itemName;
  }
}
