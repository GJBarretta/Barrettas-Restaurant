import { Component, OnInit } from '@angular/core';
import { HttpPostContactService } from '../services/http.post.contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  nameC: string;
  emailC: string;
  messageC: string;
  isValid: boolean;
  isSubmitted: boolean;
  data: string[];
  
  constructor(private httpPostContactService: HttpPostContactService) { }

  ngOnInit() {
    this.nameC = "";
    this.emailC = "";
    this.messageC = "";
    this.isValid = false;
    this.isSubmitted = false;
    this.data = [];
  }

  onSubmit(){
    this.isSubmitted = true;
    this.data.push(this.nameC);
    this.data.push(this.emailC);
    this.data.push(this.messageC);
    this.httpPostContactService.postData(this.data)
      .subscribe((data: string[]) => {
        console.log(data);
    });
    this.data = [];
  }
}
