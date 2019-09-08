import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public href: string = "";
  public innerWidth: number;
  public navbarOpen;

  @ViewChild('toggler', { static: false }) toggler: ElementRef<HTMLElement>;
  @ViewChild('collapse', { static: false }) collapse: ElementRef<HTMLElement>;
  @ViewChild('h1', {static: false}) h1: ElementRef<HTMLElement>;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

constructor(private router: Router, private _eref: ElementRef) { }

  // @HostListener('document:click', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  toggle(event) {
    // console.log("document:click");
    if (this.innerWidth < 992 && this.navbarOpen && !this._eref.nativeElement.contains(event.target)) {
      this.toggler.nativeElement.click();
    } 
  }

  navbarTogglerClick(){
    // console.log("navbartoggler-click");
    setTimeout(()=>this.navbarOpen = !this.navbarOpen, 0);
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.navbarOpen = false;
  }

  currentUrl(menuItem:string){
    if (this.router.url === menuItem){
      this.toggler.nativeElement.click();
      this.h1.nativeElement.scrollIntoView({behavior: 'smooth'});
    }
  }

  close(event){
    if (this.innerWidth < 992){
      this.toggler.nativeElement.click();
    }
  }
}
