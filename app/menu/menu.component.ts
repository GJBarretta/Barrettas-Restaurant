import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {
  public menuSelected: string = "pizza";
  @ViewChild('h1', {static: false}) h1: ElementRef<HTMLElement>;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      this.h1.nativeElement.scrollIntoView({behavior: 'smooth'});
    }, 300);
  }

  onClick(event, itemName: string){
    this.menuSelected = itemName;
    this.h1.nativeElement.scrollIntoView({behavior: 'smooth'}); 
  }
}
