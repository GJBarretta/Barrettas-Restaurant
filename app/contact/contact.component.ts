import { Component, OnInit } from '@angular/core';
import { HttpPostContactService } from '../services/http.post.contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;
  isValid: boolean;
  isSubmitted: boolean;
  data: string[];
  
  constructor(private httpPostContactService: HttpPostContactService) { }

  ngOnInit() {
    this.name = "";
    this.email = "";
    this.message = "";
    this.isValid = false;
    this.isSubmitted = false;
    this.data = [];
  }

  ngDoCheck() {
    this.onDataChange();    
  }

  onSubmit(){
    this.isSubmitted = true;
    this.data.push(this.name);
    this.data.push(this.email);
    this.data.push(this.message);
    this.httpPostContactService.postData(this.data)
      .subscribe((data: string[]) => {
        console.log(data);
    });
    this.data = [];
  }

  onDataChange(){
    if (this.name === ""
      || this.email === ""
      || this.message === ""){
        this.isValid = false;
      }
    else {
      this.isValid = true;
    }
  }
}
