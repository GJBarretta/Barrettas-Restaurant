import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit, OnDestroy {

  //each parent component will input their unique array of images
  @Input() images: string[];

  @ViewChild('nextButton', { static: false }) myDiv: ElementRef<HTMLElement>;
  clickInterval;

  constructor() { }

  ngOnInit() {
  }

  //bootstrap's auto slide mechanism was messing up with
  //ngIf so I have to manually slide the images. I also
  //disabled bootstrap's auto slide mechanism in favor of this.
  ngAfterViewInit() {
    this.clickInterval = setInterval(() => {
      this.myDiv.nativeElement.click();
    }, 6000);
  }

  //make sure to clear the interval if user navigates 
  //away from component
  ngOnDestroy(){
    if (this.clickInterval) {
      clearInterval(this.clickInterval);
    }
  }
}


