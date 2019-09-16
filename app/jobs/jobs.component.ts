import { Component, OnInit } from '@angular/core';
import { HttpPostJobsService } from '../services/http.post.jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  name: string;
  email: string;
  phone: string;
  position: string;

  isValid: boolean;
  isSubmitted: boolean;

  data: string[];   
  
  constructor(private httpPostJobsService: HttpPostJobsService) { }

  ngOnInit() {
    this.name = "";
    this.email = "";
    this.phone = "";
    this.position = "";
    this.isValid = false;
    this.isSubmitted = false;
    this.data = [];
  }

  onSubmit(){
    this.isSubmitted = true;
    this.data.push(this.position);
    this.data.push(this.name);
    this.data.push(this.email);
    this.data.push(this.phone);
    this.httpPostJobsService.postData(this.data)
      .subscribe((data: string[]) => {
        console.log(data);
    });
    this.data = [];
  }
}
