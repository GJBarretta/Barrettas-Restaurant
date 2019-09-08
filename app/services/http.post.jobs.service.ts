import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' }) 

export class HttpPostJobsService {
    specialsUrl = './api/jobs.php';

    constructor(private http: HttpClient) { }

    postData(data:string[]): Observable<string[]>{
        return this.http.post<string[]>(this.specialsUrl, data);
    }
}