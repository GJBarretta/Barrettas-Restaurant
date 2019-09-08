import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {
  @ViewChild('top', {static: false})
  top: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      this.top.nativeElement.scrollIntoView({behavior: 'smooth'});
    }, 500);
  }

}
