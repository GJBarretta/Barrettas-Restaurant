import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-menu-facebook',
  templateUrl: './menu-facebook.component.html',
  styleUrls: ['./menu-facebook.component.css']
})
export class MenuFacebookComponent implements OnInit, AfterViewInit {
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

  onClick(event, itemName){
    this.menuSelected = itemName;
    this.h1.nativeElement.scrollIntoView({behavior: 'smooth'}); 
  }

}
