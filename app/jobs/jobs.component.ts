import { Component, OnInit } from '@angular/core';
import { HttpPostJobsService } from '../services/http.post.jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  nameC: string;
  emailC: string;
  phoneC: string;
  positionC: string;

  isValid: boolean;
  isSubmitted: boolean;

  data: string[];   
  
  constructor(private httpPostJobsService: HttpPostJobsService) { }

  ngOnInit() {
    this.nameC = "";
    this.emailC = "";
    this.phoneC = "";
    this.positionC = "";
    this.isValid = false;
    this.isSubmitted = false;
    this.data = [];
  }

  onSubmit(){
    this.isSubmitted = true;
    this.data.push(this.positionC);
    this.data.push(this.nameC);
    this.data.push(this.emailC);
    this.data.push(this.phoneC);
    this.httpPostJobsService.postData(this.data)
      .subscribe((data: string[]) => {
        console.log(data);
    });
    this.data = [];
  }
}
