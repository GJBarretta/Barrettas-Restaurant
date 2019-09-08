import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit, AfterViewInit {
  @ViewChild('top', {static: false})
  top: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      this.top.nativeElement.scrollIntoView({behavior: 'smooth'});
    }, 100);
  }

}
